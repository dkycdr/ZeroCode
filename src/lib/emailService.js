// Generate 6-digit verification code
export const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send verification email via backend API
export const sendVerificationEmail = async (email, verificationCode) => {
    try {
        const response = await fetch('/api/send-verification-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, verificationCode })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Email send error:', error);
        return { success: false, error: error.message };
    }
};

// Send welcome email via backend API
export const sendWelcomeEmail = async (email, name) => {
    try {
        const response = await fetch('/api/send-welcome-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Email send error:', error);
        return { success: false, error: error.message };
    }
};
