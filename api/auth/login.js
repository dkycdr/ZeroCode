import { sql } from '../../src/lib/neon.js';
import bcrypt from 'bcryptjs';
import { cors, compose } from '../middleware/cors.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';
import { validate } from '../middleware/validate.js';
import { generateToken } from '../middleware/auth.js';

/**
 * User Login Endpoint
 * POST /api/auth/login
 * 
 * Body: { email, password }
 */
async function loginHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { email, password } = req.body; // Already validated by middleware

        // Find user by email
        const users = await sql`
      SELECT 
        id, 
        email, 
        name, 
        password_hash,
        is_email_verified,
        subscription_tier,
        points,
        level,
        streak,
        courses_completed
      FROM users 
      WHERE email = ${email}
    `;

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        const user = users[0];

        // Check if email is verified
        if (!user.is_email_verified) {
            return res.status(403).json({
                success: false,
                error: 'Email not verified. Please check your email for verification code.',
                code: 'EMAIL_NOT_VERIFIED'
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        // Generate JWT token (server-side secret, never exposed to client)
        const token = generateToken(user);

        // Update last login timestamp
        await sql`
      UPDATE users 
      SET last_login = NOW() 
      WHERE id = ${user.id}
    `;

        // Return user data (excluding sensitive fields)
        return res.status(200).json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                subscription_tier: user.subscription_tier,
                points: user.points,
                level: user.level,
                streak: user.streak,
                courses_completed: user.courses_completed
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            error: 'Login failed. Please try again.'
        });
    }
}

// Apply middleware: CORS → Rate limiting (strict for login) → Validation → Handler
export default compose(
    cors,
    rateLimitPresets.strict,
    validate('login')
)(loginHandler);
