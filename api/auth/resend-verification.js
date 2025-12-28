import { sql } from '../../src/lib/neon.js';
import { cors, compose } from '../middleware/cors.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';
import { generateVerificationCode, sendVerificationEmail } from '../../src/lib/emailService.js';

/**
 * Resend Verification Code Endpoint
 * POST /api/auth/resend-verification
 * 
 * Body: { email }
 */
async function resendVerificationHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { email } = req.body;

        // Find user
        const users = await sql`
      SELECT id, email, name, is_email_verified
      FROM users 
      WHERE email = ${email}
    `;

        if (users.length === 0) {
            // Don't reveal if email exists or not for security
            return res.status(200).json({
                success: true,
                message: 'If this email is registered, a new verification code has been sent.'
            });
        }

        const user = users[0];

        // Check if already verified
        if (user.is_email_verified) {
            return res.status(400).json({
                success: false,
                error: 'Email already verified'
            });
        }

        // Generate new verification code
        const verificationCode = generateVerificationCode();
        const codeExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Update verification code
        await sql`
      UPDATE users 
      SET 
        verification_code = ${verificationCode},
        verification_code_expiry = ${codeExpiry}
      WHERE id = ${user.id}
    `;

        // Send verification email
        await sendVerificationEmail(email, verificationCode, user.name);

        return res.status(200).json({
            success: true,
            message: 'Verification code sent. Please check your email.'
        });

    } catch (error) {
        console.error('Resend verification error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to resend verification code'
        });
    }
}

// Apply middleware with moderate rate limiting
export default compose(
    cors,
    rateLimitPresets.moderate
)(resendVerificationHandler);
