import { sql } from '../../src/lib/neon.js';
import { cors, compose } from '../middleware/cors.js';
import { requireAuth } from '../middleware/auth.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';

/**
 * Admin Code Verification Endpoint
 * POST /api/auth/verify-admin
 * 
 * Requires: Authentication
 * Body: { adminCode }
 */
async function verifyAdminHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { adminCode } = req.body;
        const userId = req.user.id; // From auth middleware

        // Get server-side admin secret (NEVER exposed to client)
        const ADMIN_SECRET_CODE = process.env.ADMIN_SECRET_CODE;

        if (!ADMIN_SECRET_CODE) {
            console.error('ADMIN_SECRET_CODE not configured');
            return res.status(500).json({
                success: false,
                error: 'Server configuration error'
            });
        }

        // Verify admin code
        if (adminCode !== ADMIN_SECRET_CODE) {
            return res.status(403).json({
                success: false,
                error: 'Invalid admin code'
            });
        }

        // Update user to admin tier
        await sql`
      UPDATE users 
      SET 
        subscription_tier = 'admin',
        updated_at = NOW()
      WHERE id = ${userId}
    `;

        // Get updated user data
        const users = await sql`
      SELECT id, email, name, subscription_tier
      FROM users
      WHERE id = ${userId}
    `;

        return res.status(200).json({
            success: true,
            message: 'Admin access granted!',
            user: users[0]
        });

    } catch (error) {
        console.error('Admin verification error:', error);
        return res.status(500).json({
            success: false,
            error: 'Admin verification failed'
        });
    }
}

// Apply middleware - requires authentication
export default compose(
    cors,
    rateLimitPresets.strict, // Very strict rate limiting for admin access
    requireAuth
)(verifyAdminHandler);
