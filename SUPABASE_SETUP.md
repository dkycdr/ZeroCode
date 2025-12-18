# Supabase Setup Guide

## ✅ Step 1: Run SQL Schema

1. Go to your Supabase project: https://supabase.com/dashboard
2. Click on **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy ALL content from `supabase-schema.sql`
5. Paste into SQL Editor
6. Click **Run** (or Ctrl+Enter)
7. Wait for success message

This creates:
- ✅ `user_profiles` table
- ✅ `course_progress` table
- ✅ `item_progress` table
- ✅ `task_progress` table
- ✅ Indexes for performance
- ✅ Row Level Security (RLS) policies
- ✅ Triggers for timestamps

## ✅ Step 2: Verify Tables

1. Click **Table Editor** (left sidebar)
2. You should see 4 tables:
   - `user_profiles`
   - `course_progress`
   - `item_progress`
   - `task_progress`

## ✅ Step 3: Test Registration

1. Run your app: `npm run dev`
2. Go to Register page
3. Create a new account
4. Check Supabase:
   - Go to **Authentication** → **Users**
   - You should see your new user
   - Go to **Table Editor** → `user_profiles`
   - You should see your profile

## ✅ Step 4: Create Admin Account

### Option 1: Through UI
1. Register with email containing "admin" (e.g., `admin@test.com`)
2. User will automatically have `is_admin = true`
3. All courses will be unlocked

### Option 2: Through SQL
```sql
-- After registering a normal account, make it admin
UPDATE user_profiles
SET is_admin = true
WHERE email = 'your-email@example.com';
```

### Option 3: Login as Admin Button
Just click "Login as Admin" button on login page!

## 🔐 Environment Variables

Your `.env` file should have:
```env
VITE_SUPABASE_URL=https://ujytvqkirujbuvcufwdg.supabase.co
VITE_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

These are already set! ✅

## 🎯 What Changed

### Before (localStorage):
- ❌ Data only on one browser
- ❌ No sync across devices
- ❌ Lost when cache cleared
- ❌ No real authentication

### After (Supabase):
- ✅ Data synced across all devices
- ✅ Real authentication with email/password
- ✅ Secure with Row Level Security
- ✅ Automatic backups
- ✅ Can reset password
- ✅ Admin detection works everywhere

## 📊 Database Structure

### user_profiles
- `id` - UUID (from Supabase Auth)
- `name` - Full name
- `email` - Email address
- `major` - Student major
- `student_id` - Student ID
- `is_admin` - Admin flag (auto-set if email contains "admin")
- `joined_date` - When user joined
- `created_at` - Record creation time
- `updated_at` - Last update time

### course_progress
- `id` - UUID
- `user_id` - Reference to user
- `course_id` - Course identifier (e.g., "html5")
- `completed` - Boolean
- `completed_at` - When completed
- `created_at` - Record creation time
- `updated_at` - Last update time

### item_progress
- `id` - UUID
- `user_id` - Reference to user
- `course_id` - Course identifier
- `unit_id` - Unit identifier
- `item_id` - Item identifier (e.g., "html5-1-1")
- `completed` - Boolean
- `quiz_score` - Quiz score (if applicable)
- `code_html` - Saved HTML code
- `code_css` - Saved CSS code
- `code_javascript` - Saved JavaScript code
- `completed_at` - When completed
- `created_at` - Record creation time
- `updated_at` - Last update time

### task_progress
- `id` - UUID
- `user_id` - Reference to user
- `item_id` - Item identifier
- `task_id` - Task number
- `completed` - Boolean
- `completed_at` - When completed
- `created_at` - Record creation time

## 🔒 Security (Row Level Security)

All tables have RLS enabled:
- Users can only see/edit their own data
- No user can access another user's progress
- Admin detection is automatic (based on email)

## 🚀 Testing

1. **Register** a new account
2. **Complete** a lesson
3. **Logout**
4. **Login** on different browser/device
5. **Verify** progress is synced!

## 🐛 Troubleshooting

### "Failed to fetch" error
- Check your internet connection
- Verify Supabase project is running
- Check `.env` file has correct credentials

### "User not found" after registration
- Check **Authentication** → **Users** in Supabase
- Verify email confirmation is disabled (for testing)
- Check browser console for errors

### Progress not saving
- Check browser console for errors
- Verify RLS policies are set correctly
- Check user is logged in (`user` object exists)

### Admin not working
- Check `is_admin` field in `user_profiles` table
- Verify email contains "admin"
- Try logging out and back in

## 📞 Support

If you encounter issues:
1. Check browser console (F12)
2. Check Supabase logs (Dashboard → Logs)
3. Verify SQL schema ran successfully
4. Check RLS policies are enabled

---

**Status**: ✅ Supabase Integration Complete!
**Database**: PostgreSQL (Supabase)
**Authentication**: Supabase Auth
**Storage**: Cloud (synced across devices)
