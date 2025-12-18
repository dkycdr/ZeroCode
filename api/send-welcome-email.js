import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, name } = req.body;

    if (!email || !name) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to ZeroCode!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: white; margin: 0;">Welcome to ZeroCode!</h1>
                    </div>
                    <div style="background: #f9f9f9; padding: 40px; border-radius: 0 0 8px 8px;">
                        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                            Hi ${name},
                        </p>
                        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                            Your email has been verified! You're all set to start learning.
                        </p>
                        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                            Start with our free courses and upgrade anytime to unlock more content.
                        </p>
                        <a href="${process.env.APP_URL}/dashboard" style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0;">
                            Go to Dashboard
                        </a>
                        <p style="color: #999; font-size: 12px; margin-top: 30px;">
                            Happy learning!<br>
                            The ZeroCode Team
                        </p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Welcome email sent' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
