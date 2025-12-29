/**
 * CORS middleware for Vercel serverless functions
 * Ensures proper cross-origin resource sharing configuration
 */

/**
 * Get allowed origins based on environment
 */
function getAllowedOrigins() {
    const isDevelopment = process.env.NODE_ENV === 'development';

    const origins = [
        'https://zerocode.vercel.app',
        'https://www.zerocode.vercel.app',
        'https://zerocode.web.id',
        'https://www.zerocode.web.id'
    ];

    // Add development origins
    if (isDevelopment) {
        origins.push('http://localhost:5173');
        origins.push('http://localhost:3000');
        origins.push('http://127.0.0.1:5173');
    }

    // Add custom domain if configured
    if (process.env.CUSTOM_DOMAIN) {
        origins.push(process.env.CUSTOM_DOMAIN);
    }

    return origins;
}

/**
 * Apply CORS headers to response
 */
export function cors(handler) {
    return async (req, res) => {
        const origin = req.headers.origin;
        const allowedOrigins = getAllowedOrigins();

        // Handle preflight requests
        if (req.method === 'OPTIONS') {
            if (origin && allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
                res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With');
                res.setHeader('Access-Control-Allow-Credentials', 'true');
                res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
            }
            return res.status(200).end();
        }

        // Set CORS headers for actual requests
        if (origin && allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
        }

        // Security headers
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

        // Content Security Policy (adjust based on your needs)
        res.setHeader(
            'Content-Security-Policy',
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
        );

        return handler(req, res);
    };
}

/**
 * Combine multiple middleware functions
 */
export function compose(...middlewares) {
    return (handler) => {
        return middlewares.reduceRight(
            (wrapped, middleware) => middleware(wrapped),
            handler
        );
    };
}
