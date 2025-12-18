# Vercel Deployment Guide

## Step 1: Push to GitHub

```bash
git add .
git commit -m "Add password reset and email features"
git push origin main
```

## Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"

## Step 3: Set Environment Variables

In Vercel dashboard, go to **Settings → Environment Variables** and add:

### Required Variables

```
VITE_NEON_DATABASE_URL=postgresql://neondb_owner:npg_iafVmJeq0A2T@ep-winter-math-a1uxxhdz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

VITE_GOOGLE_CLIENT_ID=174871335244-jo1lfabbep1pceue6d416ibt3h7b9rea.apps.googleusercontent.com

VITE_RESEND_API_KEY=re_RfUd23ma_7bydG3mtz1ktNR7cbN9uJa8G

APP_URL=https://your-vercel-domain.vercel.app
```

### Important Notes

- **VITE_NEON_DATABASE_URL**: Same as development
- **VITE_GOOGLE_CLIENT_ID**: Same as development
- **VITE_RESEND_API_KEY**: Same as development
- **APP_URL**: Change to your actual Vercel domain (will be shown after first deploy)

## Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Check deployment logs if there are errors

## Step 5: Update Google OAuth

After deployment, update Google OAuth settings:

1. Go to https://console.cloud.google.com
2. Select your project
3. Go to **APIs & Services → Credentials**
4. Edit OAuth 2.0 Client ID
5. Add authorized redirect URI:
   ```
   https://your-vercel-domain.vercel.app/
   ```

## Step 6: Update Resend Domain (Optional)

For production, verify your domain in Resend:

1. Go to https://resend.com/domains
2. Add your domain
3. Follow DNS setup instructions
4. Update email `from` address in `email-server.js` and API endpoints

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify environment variables are set

### Emails Not Sending
- Check Resend API key is correct
- Verify domain is verified (or use `onboarding@resend.dev`)
- Check Resend logs at https://resend.com/logs

### Database Connection Error
- Verify `VITE_NEON_DATABASE_URL` is correct
- Check Neon dashboard for connection issues
- Ensure IP whitelist allows Vercel IPs

### Google OAuth Not Working
- Verify `VITE_GOOGLE_CLIENT_ID` is correct
- Check authorized redirect URIs in Google Console
- Make sure domain matches exactly

## What Works on Vercel

✓ React frontend (Vite build)
✓ API endpoints in `/api` folder (serverless functions)
✓ Email sending via Resend
✓ Database queries via Neon
✓ Google OAuth
✓ Password reset with email links
✓ Email verification
✓ Leaderboard

## What Doesn't Work on Vercel

✗ `email-server.js` (local dev only)
✗ `dev-server.js` (local dev only)
✗ Vite proxy (not needed on Vercel)

On Vercel, API endpoints in `/api` folder are automatically handled as serverless functions, so no need for separate email server.

## After Deployment

1. Test all features:
   - Sign up with Google
   - Email verification
   - Password reset
   - Leaderboard

2. Monitor logs:
   - Vercel dashboard
   - Resend dashboard
   - Neon dashboard

3. Update DNS if using custom domain
