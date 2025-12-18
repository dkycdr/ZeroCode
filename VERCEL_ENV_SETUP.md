# Vercel Environment Variables Setup

## Required Environment Variables

Add these to your Vercel project:

### 1. Go to Vercel Dashboard
- Open your project
- Go to **Settings** → **Environment Variables**

### 2. Add Variable

**Variable Name:**
```
VITE_NEON_DATABASE_URL
```

**Value:**
```
postgresql://neondb_owner:npg_iafVmJeq0A2T@ep-winter-math-a1uxxhdz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
```

**Environments:**
- ✅ Production
- ✅ Preview
- ✅ Development

### 3. Redeploy

After adding the variable, click **Redeploy** to apply changes.

## Why This is Needed

- `.env` files are NOT pushed to GitHub (in `.gitignore`)
- Vercel needs environment variables to connect to Neon database
- Without this, the app will fail to load or show errors

## Troubleshooting

If site still loading:
1. Check browser console for errors (F12)
2. Verify environment variable is set correctly
3. Make sure Neon database is accessible
4. Try clearing Vercel cache and redeploying
