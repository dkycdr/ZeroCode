import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, verificationCode } = req.body;

    if (!email || !verificationCode) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        const result = await resend.emails.send({
            from: 'noreply@zerocode.dev',
            to: email,
            subject: 'ZeroCode - Email Verification',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: white; margin: 0;">ZeroCode</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Email Verification</p>
                    </div>
                    <div style="background: #f9f9f9; padding: 40px; border-radius: 0 0 8px 8px;">
                        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                            Welcome to ZeroCode! Please verify your email address to get started.
                        </p>
                        <div style="background: white; border: 2px solid #667eea; padding: 20px; text-align: center; border-radius: 8px; margin: 30px 0;">
                            <p style="color: #666; margin: 0 0 10px 0; font-size: 14px;">Your verification code:</p>
                            <p style="color: #667eea; font-size: 32px; font-weight: bold; margin: 0; letter-spacing: 5px;">
                                ${verificationCode}
                            </p>
                        </div>
                        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
                            This code will expire in 10 minutes.
                        </p>
                        <p style="color: #999; font-size: 12px; margin: 0;">
                            If you didn't request this verification, please ignore this email.
                        </p>
                    </div>
                </div>
            `
        });

        if (result.error) {
            console.error('Resend error:', result.error);
            return res.status(500).json({ success: false, error: result.error.message });
        }

        return res.status(200).json({ success: true, message: 'Verification email sent' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
