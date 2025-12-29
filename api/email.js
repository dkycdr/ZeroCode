import { sql } from '../src/lib/neon.js';
import { Resend } from 'resend';
import { cors } from './middleware/cors.js';
import { rateLimit } from './middleware/rateLimit.js';
import { generateVerificationCode } from '../src/lib/emailService.js';

/**
 * Consolidated Email API Endpoint
 * Handles all email-related operations
 * 
 * POST /api/email?action=send-verification
 * POST /api/email?action=send-welcome
 * POST /api/email?action=send-password-reset
 * POST /api/email?action=request-password-reset
 */

const emailLimiter = rateLimit({ maxRequests: 10, windowMs: 15 * 60 * 1000 });

function getResend() {
    const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
    return apiKey ? new Resend(apiKey) : null;
}

async function sendEmail(to, subject, html) {
    const resend = getResend();
    if (!resend) throw new Error('Email not configured');

    return resend.emails.send({
        from: 'ZeroCode <noreply@zerocode.web.id>',
        to, subject, html
    });
}

async function handleSendVerification(req, res) {
    const { email, code, name } = req.body;
    if (!email || !code) return res.status(400).json({ success: false, error: 'Email and code required' });

    const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a0e1a, #1a1f2e); color: #e0e0e0; border-radius: 10px;">
      <h1 style="color: #00d9ff;">Verification Code</h1>
      <p>Hello ${name || 'there'},</p>
      <p>Your verification code is:</p>
      <div style="background: #1a1f2e; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #00d9ff;">
        <span style="font-size: 32px; font-weight: bold; color: #00ff9f; letter-spacing: 4px;">${code}</span>
      </div>
      <p style="margin-top: 20px; color: #888;">This code expires in 10 minutes.</p>
      <hr style="border: 1px solid #333; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">ZeroCode - From Zero to Full-Stack Hero</p>
    </div>
  `;

    await sendEmail(email, 'Verify Your ZeroCode Account', html);
    return res.status(200).json({ success: true });
}

async function handleSendWelcome(req, res) {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ success: false, error: 'Email required' });

    const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a0e1a, #1a1f2e); color: #e0e0e0; border-radius: 10px;">
      <h1 style="color: #00ff9f;">Welcome to ZeroCode!</h1>
      <p>Hello ${name || 'there'},</p>
      <p>Your account is now verified. Start your coding journey today!</p>
      <a href="https://zerocode.web.id/dashboard" style="display: inline-block; background: #00d9ff; color: #0a0e1a; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px;">Start Learning</a>
      <hr style="border: 1px solid #333; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">ZeroCode - From Zero to Full-Stack Hero</p>
    </div>
  `;

    await sendEmail(email, 'Welcome to ZeroCode!', html);
    return res.status(200).json({ success: true });
}

async function handleSendPasswordReset(req, res) {
    const { email, code, name } = req.body;
    if (!email || !code) return res.status(400).json({ success: false, error: 'Email and code required' });

    const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a0e1a, #1a1f2e); color: #e0e0e0; border-radius: 10px;">
      <h1 style="color: #ff6b6b;">Password Reset</h1>
      <p>Hello ${name || 'there'},</p>
      <p>Your password reset code is:</p>
      <div style="background: #1a1f2e; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #ff6b6b;">
        <span style="font-size: 32px; font-weight: bold; color: #ff6b6b; letter-spacing: 4px;">${code}</span>
      </div>
      <p style="margin-top: 20px; color: #888;">This code expires in 15 minutes.</p>
      <hr style="border: 1px solid #333; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">If you didn't request this, ignore this email.</p>
    </div>
  `;

    await sendEmail(email, 'Password Reset - ZeroCode', html);
    return res.status(200).json({ success: true });
}

async function handleRequestPasswordReset(req, res) {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, error: 'Email required' });

    const users = await sql`SELECT id, name FROM users WHERE email = ${email.toLowerCase().trim()}`;

    // Always return success (security: don't reveal if email exists)
    if (users.length === 0) {
        return res.status(200).json({ success: true, message: 'If registered, code sent' });
    }

    const resetCode = generateVerificationCode();
    const expiry = new Date(Date.now() + 15 * 60 * 1000);

    await sql`
    UPDATE users SET password_reset_code = ${resetCode}, password_reset_expiry = ${expiry}
    WHERE email = ${email.toLowerCase().trim()}
  `;

    // Send reset email
    const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a0e1a, #1a1f2e); color: #e0e0e0; border-radius: 10px;">
      <h1 style="color: #ff6b6b;">Password Reset</h1>
      <p>Hello ${users[0].name},</p>
      <p>Your password reset code is:</p>
      <div style="background: #1a1f2e; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #ff6b6b;">
        <span style="font-size: 32px; font-weight: bold; color: #ff6b6b; letter-spacing: 4px;">${resetCode}</span>
      </div>
      <p style="margin-top: 20px; color: #888;">This code expires in 15 minutes.</p>
    </div>
  `;

    try {
        await sendEmail(email, 'Password Reset - ZeroCode', html);
    } catch (e) {
        console.error('Email send failed:', e);
    }

    return res.status(200).json({ success: true, message: 'Reset code sent' });
}

async function emailHandler(req, res) {
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'POST only' });

    const action = req.query.action;

    try {
        switch (action) {
            case 'send-verification': return handleSendVerification(req, res);
            case 'send-welcome': return handleSendWelcome(req, res);
            case 'send-password-reset': return handleSendPasswordReset(req, res);
            case 'request-password-reset': return handleRequestPasswordReset(req, res);
            default: return res.status(400).json({ success: false, error: 'Invalid action' });
        }
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ success: false, error: 'Email service error' });
    }
}

export default cors(emailLimiter(emailHandler));
