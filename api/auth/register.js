import { sql } from '../../src/lib/neon.js';
import bcrypt from 'bcryptjs';
import { cors, compose } from '../middleware/cors.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';
import { validate } from '../middleware/validate.js';
import { generateVerificationCode, sendVerificationEmail } from '../../src/lib/emailService.js';

/**
 * User Registration Endpoint
 * POST /api/auth/register
 * 
 * Body: { email, password, name }
 */
async function registerHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { email, password, name } = req.body; // Already validated and sanitized by middleware

        // Check if user already exists
        const existingUser = await sql`
      SELECT id, is_email_verified 
      FROM users 
      WHERE email = ${email}
    `;

        if (existingUser.length > 0) {
            if (existingUser[0].is_email_verified) {
                return res.status(400).json({
                    success: false,
                    error: 'An account with this email already exists'
                });
            } else {
                // User registered but not verified - allow re-registration
                await sql`DELETE FROM users WHERE email = ${email}`;
            }
        }

        // Hash password (12 rounds for good security/performance balance)
        const passwordHash = await bcrypt.hash(password, 12);

        // Generate 6-digit verification code
        const verificationCode = generateVerificationCode();
        const codeExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Create user with unverified status
        const result = await sql`
      INSERT INTO users (
        email, 
        password_hash, 
        name,
        verification_code,
        verification_code_expiry,
        is_email_verified,
        subscription_tier,
        points,
        level,
        streak,
        created_at
      ) VALUES (
        ${email},
        ${passwordHash},
        ${name},
        ${verificationCode},
        ${codeExpiry},
        false,
        'free',
        0,
        1,
        0,
        NOW()
      )
      RETURNING id, email, name
    `;

        const newUser = result[0];

        // Send verification email
        try {
            await sendVerificationEmail(email, verificationCode, name);
        } catch (emailError) {
            console.error('Failed to send verification email:', emailError);
            // Don't fail registration if email fails - user can request resend
        }

        return res.status(200).json({
            success: true,
            message: 'Registration successful. Please check your email for verification code.',
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({
            success: false,
            error: 'Registration failed. Please try again.'
        });
    }
}

// Apply middleware: CORS → Rate limiting (strict) → Validation → Handler
export default compose(
    cors,
    rateLimitPresets.strict,
    validate('register')
)(registerHandler);
