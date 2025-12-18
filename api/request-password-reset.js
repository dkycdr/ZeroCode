import { sql } from '../src/lib/neon.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

function generateResetCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }

    try {
        // Check if user exists
        const result = await sql`
            SELECT id, name FROM users WHERE email = ${email}
        `;

        if (result.length === 0) {
            // Don't reveal if email exists for security
            return res.status(200).json({ success: true, message: 'If email exists, reset code sent' });
        }

        const user = result[0];
        const resetCode = generateResetCode();
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

        // Update user with reset code
        await sql`
            UPDATE users
            SET password_reset_code = ${resetCode}, password_reset_expires = ${expiresAt}
            WHERE email = ${email}
        `;

        // Send email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'ZeroCode - Password Reset',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: white; margin: 0;">ZeroCode</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Password Reset</p>
                    </div>
                    <div style="background: #f9f9f9; padding: 40px; border-radius: 0 0 8px 8px;">
                        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                            Hi ${user.name},
                        </p>
                        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                            We received a request to reset your password. Use the code below to create a new password.
                        </p>
                        <div style="background: white; border: 2px solid #667eea; padding: 20px; text-align: center; border-radius: 8px; margin: 30px 0;">
                            <p style="color: #666; margin: 0 0 10px 0; font-size: 14px;">Your reset code:</p>
                            <p style="color: #667eea; font-size: 32px; font-weight: bold; margin: 0; letter-spacing: 5px;">
                                ${resetCode}
                            </p>
                        </div>
                        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
                            This code will expire in 15 minutes.
                        </p>
                        <p style="color: #999; font-size: 12px; margin: 0;">
                            If you didn't request this reset, please ignore this email.
                        </p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Reset code sent to email' });
    } catch (error) {
        console.error('Password reset error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
