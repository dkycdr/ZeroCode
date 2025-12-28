import { sql } from '../../src/lib/neon.js';
import { cors, compose } from '../middleware/cors.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';
import { validate } from '../middleware/validate.js';
import { generateToken } from '../middleware/auth.js';
import { sendWelcomeEmail } from '../../src/lib/emailService.js';

/**
 * Email Verification Endpoint
 * POST /api/auth/verify-email
 * 
 * Body: { email, code }
 */
async function verifyEmailHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { email, code } = req.body; // Already validated by middleware

        // Find user with verification code
        const users = await sql`
      SELECT 
        id, 
        email, 
        name,
        verification_code,
        verification_code_expiry,
        is_email_verified,
        subscription_tier
      FROM users 
      WHERE email = ${email}
    `;

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        const user = users[0];

        // Check if already verified
        if (user.is_email_verified) {
            return res.status(400).json({
                success: false,
                error: 'Email already verified. You can login now.'
            });
        }

        // Check if code matches
        if (user.verification_code !== code) {
            return res.status(400).json({
                success: false,
                error: 'Invalid verification code'
            });
        }

        // Check if code expired
        const now = new Date();
        if (now > new Date(user.verification_code_expiry)) {
            return res.status(400).json({
                success: false,
                error: 'Verification code expired. Please request a new one.',
                code: 'CODE_EXPIRED'
            });
        }

        // Mark email as verified and clear verification code
        await sql`
      UPDATE users 
      SET 
        is_email_verified = true,
        verification_code = NULL,
        verification_code_expiry = NULL,
        updated_at = NOW()
      WHERE id = ${user.id}
    `;

        // Send welcome email
        try {
            await sendWelcomeEmail(email, user.name);
        } catch (emailError) {
            console.error('Failed to send welcome email:', emailError);
            // Don't fail verification if welcome email fails
        }

        // Generate JWT token for immediate login
        const token = generateToken(user);

        return res.status(200).json({
            success: true,
            message: 'Email verified successfully! Welcome to ZeroCode!',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                subscription_tier: user.subscription_tier
            }
        });

    } catch (error) {
        console.error('Email verification error:', error);
        return res.status(500).json({
            success: false,
            error: 'Verification failed. Please try again.'
        });
    }
}

// Apply middleware
export default compose(
    cors,
    rateLimitPresets.moderate,
    validate('verifyEmail')
)(verifyEmailHandler);
