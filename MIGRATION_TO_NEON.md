# 🔄 Migration: Supabase → Neon PostgreSQL

## ✅ What Changed

### Files Modified:
1. ✅ `src/lib/neon.js` - NEW: Neon database client
2. ✅ `src/contexts/AuthProvider.jsx` - Auth dengan Neon + bcrypt
3. ✅ `src/contexts/ProgressProvider.jsx` - Progress tracking dengan Neon
4. ✅ `.env` - Neon connection string
5. ✅ `package.json` - Added @neondatabase/serverless & bcryptjs

### Files Created:
1. ✅ `neon-schema.sql` - Database schema untuk Neon
2. ✅ `NEON_SETUP.md` - Setup guide lengkap
3. ✅ `MIGRATION_TO_NEON.md` - This file

### Files Deprecated (not used anymore):
- ❌ `src/lib/supabase.js` - Not used
- ❌ `supabase-schema.sql` - Not used
- ❌ `fix-rls-policy.sql` - Not needed
- ❌ `SUPABASE_SETUP.md` - Not needed
- ❌ `QUICK_FIX.md` - Not needed

## 🎯 Why Neon?

### Supabase Problems:
- ❌ RLS policy errors
- ❌ Rate limit 429
- ❌ Email confirmation required
- ❌ 406 errors
- ❌ Too complex for prototype

### Neon Benefits:
- ✅ Simple connection string
- ✅ No RLS complications
- ✅ No rate limits
- ✅ Pure PostgreSQL
- ✅ Perfect for prototype

## 📋 Setup Steps

### 1. Create Neon Project
```bash
# Go to https://neon.tech
# Sign up (use GitHub)
# Create new project: "pulse-db"
# Copy connection string
```

### 2. Update .env
```env
VITE_NEON_DATABASE_URL=postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### 3. Run Schema
```sql
-- Copy content from neon-schema.sql
-- Paste in Neon SQL Editor
-- Run it
```

### 4. Test
```bash
npm run dev
# Click "Login as Admin"
# Should work immediately!
```

## 🔐 Authentication

### Before (Supabase):
- Supabase Auth API
- Email confirmation
- RLS policies
- Rate limits

### After (Neon):
- bcrypt password hashing
- Direct database queries
- No email confirmation
- No rate limits

## 📊 Database Schema

### users
- id (SERIAL)
- email (UNIQUE)
- password_hash (bcrypt)
- name
- major
- student_id
- is_admin (auto-set if email contains "admin")
- joined_date
- created_at
- updated_at

### course_progress
- id (SERIAL)
- user_id (FK)
- course_id
- completed
- completed_at

### item_progress
- id (SERIAL)
- user_id (FK)
- course_id
- unit_id
- item_id
- completed
- quiz_score
- code_html
- code_css
- code_javascript
- completed_at

### task_progress
- id (SERIAL)
- user_id (FK)
- item_id
- task_id
- completed
- completed_at

## 🚀 Features

### ✅ Working:
- User registration
- User login
- Password hashing (bcrypt)
- Admin detection (email contains "admin")
- Progress tracking
- Course completion
- Item completion
- Sync across devices
- "Login as Admin" button

### 🎯 Admin Features:
- Auto-unlock all courses
- Default admin: admin@pulse.dev / admin123
- Any email with "admin" = admin access

## 📦 Dependencies

```json
{
  "@neondatabase/serverless": "^1.0.2",
  "bcryptjs": "^3.0.3"
}
```

## 🔧 Code Changes

### AuthProvider
```javascript
// Before: Supabase Auth
const { data, error } = await supabase.auth.signUp(...)

// After: Neon + bcrypt
const passwordHash = await bcrypt.hash(password, 10);
await sql`INSERT INTO users (...) VALUES (...)`
```

### ProgressProvider
```javascript
// Before: Supabase queries
const { data } = await supabase.from('course_progress').select(...)

// After: Neon SQL
const courses = await sql`SELECT * FROM course_progress WHERE ...`
```

## 🎉 Benefits

1. **Simpler** - No RLS, no auth API, just SQL
2. **Faster** - Direct database queries
3. **Reliable** - No rate limits
4. **Flexible** - Pure PostgreSQL
5. **Prototype-ready** - Quick setup, easy testing

## 📝 Next Steps

1. ✅ Setup Neon account
2. ✅ Copy connection string to .env
3. ✅ Run neon-schema.sql
4. ✅ Test login
5. ✅ Deploy to Vercel (add VITE_NEON_DATABASE_URL env var)

## ❓ Troubleshooting

### "Connection error"
- Check .env has correct connection string
- Format: `postgresql://...?sslmode=require`

### "Table not found"
- Run neon-schema.sql in SQL Editor
- Check Tables tab in Neon dashboard

### "Admin not working"
- Check users table has admin@pulse.dev
- Or register with email containing "admin"

### "Password incorrect"
- bcrypt hashing is working
- Make sure you're using correct password
- Default admin: admin123

---

**Status**: ✅ Migration Complete!
**Database**: Neon PostgreSQL
**Auth**: bcrypt
**Ready**: Yes! 🚀
