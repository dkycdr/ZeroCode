# Resend Email Setup

We use Resend for sending emails (verification, password reset, welcome emails).

## Setup Steps

### 1. Create Resend Account
- Go to https://resend.com
- Sign up with your email
- Verify your email

### 2. Get API Key
- Go to https://resend.com/api-keys
- Create a new API key
- Copy the key (starts with `re_`)

### 3. Add to .env
```
VITE_RESEND_API_KEY=re_your_api_key_here
```

### 4. Verify Domain (Optional but Recommended)
- In Resend dashboard, go to Domains
- Add your domain (e.g., zerocode.dev)
- Follow DNS setup instructions
- This allows sending from custom domain instead of noreply@zerocode.dev

## How It Works

- **Development**: Emails sent via Resend API (free tier)
- **Production**: Same, Resend handles all email delivery
- **Free Tier**: Unlimited emails, no credit card needed

## Testing

1. Start dev server: `npm run dev`
2. Go to `/forgot-password`
3. Enter your email
4. Check inbox for reset email
5. Click link or copy code to reset password

## Troubleshooting

- **"API key not found"**: Make sure `VITE_RESEND_API_KEY` is in `.env`
- **"Email not sent"**: Check Resend dashboard for error logs
- **"Domain verification failed"**: Use default `noreply@zerocode.dev` or verify domain in Resend

## Cost

- **Free tier**: Unlimited emails, no credit card
- **Paid tier**: $20/month for additional features
- For this project, free tier is more than enough
