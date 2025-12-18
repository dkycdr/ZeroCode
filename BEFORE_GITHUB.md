# Before Pushing to GitHub

## 1. Clean Up Files

Remove these files (local dev only, not needed in production):

```bash
rm email-server.js
rm dev-server.js
rm setup-password-reset.js
rm setup-admin-simple.js
rm setup-admin-progress.js
rm setup-admin-accounts.js
```

Or keep them but add to `.gitignore`:

```
email-server.js
dev-server.js
setup-*.js
```

## 2. Update .env.example

Make sure `.env.example` has all required variables (already done).

## 3. Remove Sensitive Data

Make sure `.env` is in `.gitignore` (it should be):

```bash
cat .gitignore | grep ".env"
```

Should show:
```
.env
.env.local
```

## 4. Check .gitignore

Verify these are ignored:

```
node_modules/
.env
.env.local
dist/
.DS_Store
```

## 5. Commit and Push

```bash
git add .
git commit -m "Add password reset, email verification, and leaderboard features"
git push origin main
```

## 6. Verify on GitHub

Check that:
- ✓ `.env` is NOT in repository
- ✓ `node_modules/` is NOT in repository
- ✓ All source files are there
- ✓ `package.json` has all dependencies

## 7. Deploy to Vercel

Follow `VERCEL_DEPLOYMENT.md` guide.

## Important

- **NEVER commit `.env` file**
- **NEVER commit `node_modules/`**
- **NEVER commit `dist/` folder**
- **NEVER commit `email-server.js` or `dev-server.js`** (local dev only)

These will be set in Vercel environment variables instead.
