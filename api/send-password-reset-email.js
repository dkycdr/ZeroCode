import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, resetCode, resetLink } = req.body;

    if (!email || !resetCode || !resetLink) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        const result = await resend.emails.send({
            from: 'noreply@zerocode.dev',
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
                            We received a request to reset your password. Click the link below to create a new password.
                        </p>
                        <a href="${resetLink}" style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0;">
                            Reset Password
                        </a>
                        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
                            Or use this code: <strong>${resetCode}</strong>
                        </p>
                        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
                            This link will expire in 15 minutes.
                        </p>
                        <p style="color: #999; font-size: 12px; margin: 0;">
                            If you didn't request this reset, please ignore this email.
                        </p>
                    </div>
                </div>
            `
        });

        if (result.error) {
            console.error('Resend error:', result.error);
            return res.status(500).json({ success: false, error: result.error.message });
        }

        return res.status(200).json({ success: true, message: 'Password reset email sent' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
