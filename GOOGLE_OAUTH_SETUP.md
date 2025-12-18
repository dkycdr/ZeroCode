# Google OAuth Setup Guide

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (name it "ZeroCode")
3. Wait for the project to be created

## Step 2: Enable Google+ API

1. In the Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Google+ API"
3. Click on it and press **Enable**

## Step 3: Create OAuth 2.0 Credentials

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth client ID**
3. If prompted, configure the OAuth consent screen first:
   - Choose **External** user type
   - Fill in app name: "ZeroCode"
   - Add your email
   - Add scopes: `email`, `profile`, `openid`
   - Add test users (your email)
4. Back to credentials, select **Web application**
5. Add Authorized JavaScript origins:
   - `http://localhost:5173` (for development)
   - `https://yourdomain.com` (for production)
6. Add Authorized redirect URIs:
   - `http://localhost:5173` (for development)
   - `https://yourdomain.com` (for production)
7. Copy the **Client ID**

## Step 4: Add to Environment Variables

In your `.env` file:

```
VITE_GOOGLE_CLIENT_ID=your_client_id_here
```

## Step 5: Setup Email Service (Gmail)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled
3. Go to **App passwords** (appears after 2FA is enabled)
4. Select **Mail** and **Windows Computer** (or your device)
5. Copy the generated password

In your `.env` file:

```
VITE_EMAIL_USER=your_gmail@gmail.com
VITE_EMAIL_PASSWORD=your_app_password_here
VITE_APP_URL=http://localhost:5173
```

## Step 6: Update Database

Run this SQL to add the new columns:

```sql
ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(255) UNIQUE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_email_verified BOOLEAN DEFAULT FALSE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_code VARCHAR(6);
ALTER TABLE users ADD COLUMN IF NOT EXISTS email_verification_expires TIMESTAMP;
ALTER TABLE users ALTER COLUMN password_hash DROP NOT NULL;
```

## How It Works

1. User clicks "Continue with Google"
2. Google OAuth popup appears
3. User logs in with Google account
4. System creates user in database (if new)
5. Verification code sent to user's email
6. User enters code on verification page
7. Email marked as verified
8. User redirected to dashboard

## Testing

- Development: `http://localhost:5173`
- Use test email accounts added in OAuth consent screen
- Check spam folder for verification emails

## Production Deployment

1. Update OAuth credentials with production domain
2. Add production domain to Google Cloud Console
3. Set environment variables on Vercel/hosting platform
4. Update `VITE_APP_URL` to production URL
