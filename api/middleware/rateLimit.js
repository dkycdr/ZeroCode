/**
 * Rate limiting middleware for Vercel serverless functions
 * Uses in-memory store (for production, consider Redis/Upstash)
 */

// In-memory store for rate limits
const requestCounts = new Map();

// Clean up old entries every 5 minutes
setInterval(() => {
    const now = Date.now();
    for (const [key, data] of requestCounts.entries()) {
        if (now - data.resetTime > 0) {
            requestCounts.delete(key);
        }
    }
}, 5 * 60 * 1000);

/**
 * Create rate limiter middleware
 * @param {Object} options - Rate limiting options
 * @param {number} options.maxRequests - Maximum requests allowed
 * @param {number} options.windowMs - Time window in milliseconds
 * @param {string} options.keyGenerator - Function to generate unique key (default: IP address)
 */
export function rateLimit(options = {}) {
    const {
        maxRequests = 10,
        windowMs = 15 * 60 * 1000, // 15 minutes default
        keyGenerator = (req) => getClientIp(req),
        message = 'Too many requests, please try again later'
    } = options;

    return (handler) => {
        return async (req, res) => {
            try {
                // Generate unique key for this client
                const key = keyGenerator(req);
                const now = Date.now();

                // Get or create request data for this key
                let requestData = requestCounts.get(key);

                if (!requestData || now > requestData.resetTime) {
                    // First request or window expired - create new entry
                    requestData = {
                        count: 1,
                        resetTime: now + windowMs
                    };
                    requestCounts.set(key, requestData);
                } else {
                    // Increment count
                    requestData.count++;

                    if (requestData.count > maxRequests) {
                        // Rate limit exceeded
                        const remainingTime = Math.ceil((requestData.resetTime - now) / 1000);

                        return res.status(429).json({
                            success: false,
                            error: message,
                            retryAfter: remainingTime
                        });
                    }
                }

                // Add rate limit headers
                res.setHeader('X-RateLimit-Limit', maxRequests);
                res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - requestData.count));
                res.setHeader('X-RateLimit-Reset', Math.ceil(requestData.resetTime / 1000));

                // Call actual handler
                return handler(req, res);

            } catch (error) {
                console.error('Rate limit middleware error:', error);
                // Don't block request on middleware error
                return handler(req, res);
            }
        };
    };
}

/**
 * Get client IP address from request
 * Handles Vercel's proxy headers
 */
function getClientIp(req) {
    return (
        req.headers['x-forwarded-for']?.split(',')[0] ||
        req.headers['x-real-ip'] ||
        req.connection?.remoteAddress ||
        'unknown'
    );
}

/**
 * Preset rate limiters for common use cases
 */
export const rateLimitPresets = {
    // Strict - for sensitive endpoints like login
    strict: rateLimit({
        maxRequests: 5,
        windowMs: 15 * 60 * 1000, // 15 minutes
        message: 'Too many attempts, please try again in 15 minutes'
    }),

    // Moderate - for general API endpoints
    moderate: rateLimit({
        maxRequests: 20,
        windowMs: 60 * 1000, // 1 minute
        message: 'Rate limit exceeded, please slow down'
    }),

    // Lenient - for read-only endpoints
    lenient: rateLimit({
        maxRequests: 100,
        windowMs: 60 * 1000, // 1 minute
        message: 'Too many requests'
    }),

    // AI specific - higher cost operations
    ai: rateLimit({
        maxRequests: 20,
        windowMs: 60 * 60 * 1000, // 1 hour
        message: 'AI request limit reached, please try again later'
    })
};

/**
 * User-specific rate limiter (requires authentication)
 */
export function userRateLimit(options = {}) {
    const {
        maxRequests = 10,
        windowMs = 15 * 60 * 1000
    } = options;

    return rateLimit({
        maxRequests,
        windowMs,
        keyGenerator: (req) => {
            // Use user ID if authenticated, otherwise fall back to IP
            return req.user?.id?.toString() || getClientIp(req);
        }
    });
}
