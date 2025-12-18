# Production Deployment Checklist

## Environment Variables for Vercel

Add these in Vercel dashboard (Settings → Environment Variables):

### Database
- [ ] `VITE_NEON_DATABASE_URL` - Your Neon connection string

### Authentication
- [ ] `VITE_GOOGLE_CLIENT_ID` - Google OAuth Client ID

### Email Service
- [ ] `VITE_RESEND_API_KEY` - Resend API key

### App Configuration
- [ ] `APP_URL` - Your Vercel domain (e.g., https://zerocode.vercel.app)

## Pre-Deployment Checklist

### Code
- [ ] Remove `email-server.js` or add to `.gitignore`
- [ ] Remove `dev-server.js` or add to `.gitignore`
- [ ] Remove setup scripts or add to `.gitignore`
- [ ] Verify `.env` is in `.gitignore`
- [ ] Verify `node_modules/` is in `.gitignore`

### Testing
- [ ] Test Google OAuth login locally
- [ ] Test email verification locally
- [ ] Test password reset locally
- [ ] Test leaderboard locally
- [ ] Check all API endpoints work

### Configuration
- [ ] Update `APP_URL` in `.env` for production
- [ ] Verify Resend API key is valid
- [ ] Verify Neon database connection string is correct
- [ ] Verify Google OAuth Client ID is correct

## Post-Deployment Checklist

### Vercel
- [ ] Build completed successfully
- [ ] No build errors in logs
- [ ] Preview deployment works

### Google OAuth
- [ ] Add Vercel domain to authorized redirect URIs
- [ ] Test Google login on production

### Email
- [ ] Test password reset email
- [ ] Test email verification
- [ ] Check Resend dashboard for delivery status
- [ ] Verify emails are not going to spam

### Database
- [ ] Verify Neon connection works
- [ ] Check database has all tables
- [ ] Verify user data is being saved

### Features
- [ ] Sign up with Google works
- [ ] Email verification works
- [ ] Password reset works
- [ ] Leaderboard displays correctly
- [ ] All courses accessible

## Monitoring

### Vercel Dashboard
- Check deployment logs
- Monitor function execution time
- Check error rates

### Resend Dashboard
- Check email delivery status
- Monitor bounce rates
- Check API usage

### Neon Dashboard
- Monitor connection pool
- Check query performance
- Monitor storage usage

## Troubleshooting

### Build Fails
1. Check Vercel build logs
2. Verify all dependencies in `package.json`
3. Check for missing environment variables

### Emails Not Sending
1. Verify Resend API key in Vercel
2. Check Resend dashboard for errors
3. Verify domain is verified (or using `onboarding@resend.dev`)

### Database Connection Error
1. Verify `VITE_NEON_DATABASE_URL` in Vercel
2. Check Neon dashboard for connection issues
3. Verify IP whitelist

### Google OAuth Not Working
1. Verify `VITE_GOOGLE_CLIENT_ID` in Vercel
2. Check authorized redirect URIs in Google Console
3. Verify domain matches exactly

## Rollback Plan

If something breaks:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "Promote to Production"

Or redeploy from GitHub:

```bash
git revert <commit-hash>
git push origin main
```

## Performance Tips

- Monitor Vercel function execution time
- Optimize database queries
- Cache static assets
- Use CDN for images

## Security

- [ ] Never commit `.env` file
- [ ] Rotate API keys regularly
- [ ] Monitor for suspicious activity
- [ ] Keep dependencies updated
- [ ] Use HTTPS only
- [ ] Enable CORS properly
