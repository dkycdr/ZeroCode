import { sql } from '../../src/lib/neon.js';
import bcrypt from 'bcryptjs';
import { cors, compose } from '../middleware/cors.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';
import { validate } from '../middleware/validate.js';

/**
 * Password Reset Endpoint
 * POST /api/auth/reset-password
 * 
 * Body: { email, code, newPassword }
 */
async function resetPasswordHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { email, code, newPassword } = req.body; // Validated by middleware

        // Find user with reset code
        const users = await sql`
      SELECT 
        id, 
        email,
        password_reset_code,
        password_reset_expiry
      FROM users 
      WHERE email = ${email}
    `;

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'Invalid reset request'
            });
        }

        const user = users[0];

        // Check if reset code exists
        if (!user.password_reset_code) {
            return res.status(400).json({
                success: false,
                error: 'No password reset request found. Please request a new reset code.'
            });
        }

        // Verify reset code
        if (user.password_reset_code !== code) {
            return res.status(400).json({
                success: false,
                error: 'Invalid reset code'
            });
        }

        // Check if code expired
        const now = new Date();
        if (now > new Date(user.password_reset_expiry)) {
            return res.status(400).json({
                success: false,
                error: 'Reset code expired. Please request a new one.',
                code: 'CODE_EXPIRED'
            });
        }

        // Hash new password
        const newPasswordHash = await bcrypt.hash(newPassword, 12);

        // Update password and clear reset code
        await sql`
      UPDATE users 
      SET 
        password_hash = ${newPasswordHash},
        password_reset_code = NULL,
        password_reset_expiry = NULL,
        updated_at = NOW()
      WHERE id = ${user.id}
    `;

        return res.status(200).json({
            success: true,
            message: 'Password reset successful. You can now login with your new password.'
        });

    } catch (error) {
        console.error('Password reset error:', error);
        return res.status(500).json({
            success: false,
            error: 'Password reset failed. Please try again.'
        });
    }
}

// Apply middleware
export default compose(
    cors,
    rateLimitPresets.moderate,
    validate('resetPassword')
)(resetPasswordHandler);
