import nodemailer from 'nodemailer';

const getEmailTemplate = (title, content) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 30px 40px; border-bottom: 1px solid #f3f4f6;">
                            <h1 style="margin: 0; color: #4F46E5; font-size: 24px; font-weight: 700; text-align: center; letter-spacing: -0.5px;">ZeroCode</h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 40px;">
                            ${content}
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f9fafb; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; text-align: center;">
                            <p style="margin: 0; color: #9CA3AF; font-size: 12px; line-height: 1.5;">
                                © ${new Date().getFullYear()} ZeroCode Learning Platform.<br>
                                If you ignore this email, nothing will happen.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, name } = req.body;

    if (!email || !name) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        // Create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use 'host', 'port', etc. if not using Gmail
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD, // App Password if 2FA is on
            },
        });

        const content = `
            <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 20px; font-weight: 600;">Welcome to ZeroCode!</h2>
            <p style="margin: 0 0 24px 0; color: #4B5563; font-size: 16px; line-height: 1.6;">
                Hi ${name},
            </p>
            <p style="margin: 0 0 24px 0; color: #4B5563; font-size: 16px; line-height: 1.6;">
                Thanks for joining! Your email has been verified and you're all set to start your learning journey.
            </p>
            <div style="text-align: center; margin-bottom: 30px;">
                <a href="${process.env.VITE_APP_URL || 'http://localhost:5173'}/dashboard" style="display: inline-block; background-color: #4F46E5; color: #ffffff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; transition: background-color 0.2s;">Go to Dashboard</a>
            </div>
            <p style="margin: 0 0 24px 0; color: #4B5563; font-size: 16px; line-height: 1.6;">
                We have a variety of courses ranging from web development basics to advanced full-stack concepts.
            </p>
            <p style="margin: 0; color: #6B7280; font-size: 14px;">
                Happy coding,<br>The ZeroCode Team
            </p>
        `;

        const mailOptions = {
            from: `"ZeroCode Support" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Welcome to ZeroCode!',
            html: getEmailTemplate('Welcome', content)
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return res.status(200).json({ success: true, message: 'Welcome email sent' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
