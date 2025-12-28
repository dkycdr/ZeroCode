import jwt from 'jsonwebtoken';

/**
 * Authentication middleware for Vercel serverless functions
 * Verifies JWT token and attaches user data to request
 */
export function requireAuth(handler) {
    return async (req, res) => {
        try {
            // Extract token from Authorization header
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({
                    success: false,
                    error: 'Unauthorized - No token provided'
                });
            }

            const token = authHeader.replace('Bearer ', '');

            // Verify token with server-side secret (NOT exposed to client)
            const JWT_SECRET = process.env.JWT_SECRET;

            if (!JWT_SECRET) {
                console.error('JWT_SECRET not configured on server');
                return res.status(500).json({
                    success: false,
                    error: 'Server configuration error'
                });
            }

            try {
                const decoded = jwt.verify(token, JWT_SECRET);

                // Attach user data to request object
                req.user = {
                    id: decoded.id,
                    email: decoded.email,
                    tier: decoded.tier,
                    isAdmin: decoded.isAdmin || false
                };

                // Call the actual handler with authenticated request
                return handler(req, res);

            } catch (jwtError) {
                if (jwtError.name === 'TokenExpiredError') {
                    return res.status(401).json({
                        success: false,
                        error: 'Token expired',
                        code: 'TOKEN_EXPIRED'
                    });
                }

                return res.status(401).json({
                    success: false,
                    error: 'Invalid token'
                });
            }

        } catch (error) {
            console.error('Auth middleware error:', error);
            return res.status(500).json({
                success: false,
                error: 'Authentication failed'
            });
        }
    };
}

/**
 * Generate JWT token with user data
 */
export function generateToken(userData) {
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET not configured');
    }

    return jwt.sign(
        {
            id: userData.id,
            email: userData.email,
            tier: userData.subscription_tier,
            isAdmin: userData.subscription_tier === 'admin'
        },
        JWT_SECRET,
        {
            expiresIn: '7d' // 7 days expiration
        }
    );
}

/**
 * Optional authentication - doesn't fail if no token
 * Useful for endpoints that work differently for logged-in users
 */
export function optionalAuth(handler) {
    return async (req, res) => {
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.replace('Bearer ', '');
            const JWT_SECRET = process.env.JWT_SECRET;

            try {
                const decoded = jwt.verify(token, JWT_SECRET);
                req.user = {
                    id: decoded.id,
                    email: decoded.email,
                    tier: decoded.tier,
                    isAdmin: decoded.isAdmin || false
                };
            } catch (error) {
                // Invalid token but don't fail - just no user attached
                req.user = null;
            }
        } else {
            req.user = null;
        }

        return handler(req, res);
    };
}
