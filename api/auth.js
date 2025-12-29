import { sql } from '../src/lib/neon.js';
import bcrypt from 'bcryptjs';
import { cors } from './middleware/cors.js';
import { rateLimit } from './middleware/rateLimit.js';
import { generateToken } from './middleware/auth.js';
import { isValidEmail, isValidPassword, sanitizeString } from './middleware/validate.js';
import { generateVerificationCode, sendVerificationEmail, sendWelcomeEmail } from '../src/lib/emailService.js';

/**
 * Consolidated Auth API Endpoint
 * Handles all authentication routes via URL path routing
 * 
 * Routes:
 * POST /api/auth?action=login
 * POST /api/auth?action=register  
 * POST /api/auth?action=verify-email
 * POST /api/auth?action=resend-verification
 * POST /api/auth?action=reset-password
 * POST /api/auth?action=verify-admin
 */

// Rate limiters
const strictLimiter = rateLimit({ maxRequests: 5, windowMs: 15 * 60 * 1000 });
const moderateLimiter = rateLimit({ maxRequests: 20, windowMs: 60 * 1000 });

// ============== HANDLERS ==============

async function handleLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Email and password required' });
    }

    const users = await sql`
    SELECT id, email, name, password_hash, is_email_verified, subscription_tier,
           points, streak_count, courses_completed, avatar, border
    FROM users WHERE email = ${email.toLowerCase().trim()}
  `;

    if (users.length === 0) {
        return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    const user = users[0];

    // TEMPORARILY DISABLED: Email verification check
    // if (!user.is_email_verified) {
    //     return res.status(403).json({
    //         success: false,
    //         error: 'Email not verified',
    //         code: 'EMAIL_NOT_VERIFIED'
    //     });
    // }

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
        return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    // No JWT token - just return user data (matching how Google/GitHub login works)
    await sql`UPDATE users SET last_login = NOW() WHERE id = ${user.id}`;

    return res.status(200).json({
        success: true,
        user: {
            id: user.id, email: user.email, name: user.name,
            subscription_tier: user.subscription_tier, points: user.points,
            streak_count: user.streak_count, courses_completed: user.courses_completed,
            avatar: user.avatar, border: user.border,
            is_admin: user.subscription_tier === 'admin'
        }
    });
}

async function handleRegister(req, res) {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ success: false, error: 'All fields required' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email format' });
    }

    if (!isValidPassword(password)) {
        return res.status(400).json({ success: false, error: 'Password must be 8+ chars with uppercase, lowercase, number' });
    }

    const existing = await sql`SELECT id, is_email_verified FROM users WHERE email = ${email.toLowerCase().trim()}`;

    if (existing.length > 0) {
        if (existing[0].is_email_verified) {
            return res.status(400).json({ success: false, error: 'Email already registered' });
        }
        await sql`DELETE FROM users WHERE email = ${email.toLowerCase().trim()}`;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const verificationCode = generateVerificationCode();
    const codeExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const result = await sql`
    INSERT INTO users (email, password_hash, name, verification_code, verification_code_expiry, 
                       is_email_verified, subscription_tier, points, level, streak, created_at)
    VALUES (${email.toLowerCase().trim()}, ${passwordHash}, ${sanitizeString(name)}, 
            ${verificationCode}, ${codeExpiry}, false, 'free', 0, 1, 0, NOW())
    RETURNING id, email, name
  `;

    try {
        await sendVerificationEmail(email, verificationCode, name);
    } catch (e) {
        console.error('Email send failed:', e);
    }

    return res.status(200).json({
        success: true,
        message: 'Registration successful. Check email for verification code.',
        user: result[0]
    });
}

async function handleVerifyEmail(req, res) {
    const { email, code } = req.body;

    if (!email || !code) {
        return res.status(400).json({ success: false, error: 'Email and code required' });
    }

    const users = await sql`
    SELECT id, email, name, verification_code, verification_code_expiry, is_email_verified, subscription_tier
    FROM users WHERE email = ${email.toLowerCase().trim()}
  `;

    if (users.length === 0) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    const user = users[0];

    if (user.is_email_verified) {
        return res.status(400).json({ success: false, error: 'Email already verified' });
    }

    if (user.verification_code !== code) {
        return res.status(400).json({ success: false, error: 'Invalid verification code' });
    }

    if (new Date() > new Date(user.verification_code_expiry)) {
        return res.status(400).json({ success: false, error: 'Code expired', code: 'CODE_EXPIRED' });
    }

    await sql`
    UPDATE users SET is_email_verified = true, verification_code = NULL, verification_code_expiry = NULL
    WHERE id = ${user.id}
  `;

    try {
        await sendWelcomeEmail(email, user.name);
    } catch (e) {
        console.error('Welcome email failed:', e);
    }

    const token = generateToken(user);

    return res.status(200).json({
        success: true,
        message: 'Email verified!',
        token,
        user: { id: user.id, email: user.email, name: user.name, subscription_tier: user.subscription_tier }
    });
}

async function handleResendVerification(req, res) {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'Email required' });
    }

    const users = await sql`SELECT id, name, is_email_verified FROM users WHERE email = ${email.toLowerCase().trim()}`;

    if (users.length === 0) {
        return res.status(200).json({ success: true, message: 'If registered, code sent' });
    }

    if (users[0].is_email_verified) {
        return res.status(400).json({ success: false, error: 'Already verified' });
    }

    const verificationCode = generateVerificationCode();
    const codeExpiry = new Date(Date.now() + 10 * 60 * 1000);

    await sql`
    UPDATE users SET verification_code = ${verificationCode}, verification_code_expiry = ${codeExpiry}
    WHERE email = ${email.toLowerCase().trim()}
  `;

    await sendVerificationEmail(email, verificationCode, users[0].name);

    return res.status(200).json({ success: true, message: 'Verification code sent' });
}

async function handleResetPassword(req, res) {
    const { email, code, newPassword } = req.body;

    if (!email || !code || !newPassword) {
        return res.status(400).json({ success: false, error: 'All fields required' });
    }

    if (!isValidPassword(newPassword)) {
        return res.status(400).json({ success: false, error: 'Password too weak' });
    }

    const users = await sql`
    SELECT id, password_reset_code, password_reset_expiry
    FROM users WHERE email = ${email.toLowerCase().trim()}
  `;

    if (users.length === 0) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    const user = users[0];

    if (!user.password_reset_code || user.password_reset_code !== code) {
        return res.status(400).json({ success: false, error: 'Invalid reset code' });
    }

    if (new Date() > new Date(user.password_reset_expiry)) {
        return res.status(400).json({ success: false, error: 'Code expired' });
    }

    const newHash = await bcrypt.hash(newPassword, 12);

    await sql`
    UPDATE users SET password_hash = ${newHash}, password_reset_code = NULL, password_reset_expiry = NULL
    WHERE id = ${user.id}
  `;

    return res.status(200).json({ success: true, message: 'Password reset successful' });
}

async function handleVerifyAdmin(req, res) {
    const { adminCode } = req.body;

    // Get user from auth header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const ADMIN_SECRET = process.env.ADMIN_SECRET_CODE;

    if (!ADMIN_SECRET) {
        return res.status(500).json({ success: false, error: 'Server config error' });
    }

    if (adminCode !== ADMIN_SECRET) {
        return res.status(403).json({ success: false, error: 'Invalid admin code' });
    }

    // Decode token to get user ID (simplified - in production use proper JWT verify)
    const token = authHeader.replace('Bearer ', '');
    const payload = JSON.parse(atob(token.split('.')[1]));

    await sql`UPDATE users SET subscription_tier = 'admin' WHERE id = ${payload.id}`;

    return res.status(200).json({ success: true, message: 'Admin access granted' });
}

// ============== MAIN ROUTER ==============

async function authHandler(req, res) {
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const action = req.query.action || req.url.split('?action=')[1]?.split('&')[0];

    try {
        switch (action) {
            case 'login':
                return strictLimiter(() => handleLogin(req, res))(req, res);
            case 'register':
                return strictLimiter(() => handleRegister(req, res))(req, res);
            case 'verify-email':
                return moderateLimiter(() => handleVerifyEmail(req, res))(req, res);
            case 'resend-verification':
                return moderateLimiter(() => handleResendVerification(req, res))(req, res);
            case 'reset-password':
                return moderateLimiter(() => handleResetPassword(req, res))(req, res);
            case 'verify-admin':
                return strictLimiter(() => handleVerifyAdmin(req, res))(req, res);
            default:
                return res.status(400).json({ success: false, error: 'Invalid action' });
        }
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
}

export default cors(authHandler);
