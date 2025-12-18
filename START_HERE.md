# 🚀 START HERE - Neon PostgreSQL Setup

## 👋 Hey!

Gw udah ganti database dari Supabase ke Neon PostgreSQL karena lebih simple dan gak ribet.

**Lu cuma butuh 5 menit buat setup!**

---

## ⚡ Quick Setup (Ikutin Ini!)

### 1️⃣ Bikin Neon Account
- Buka: https://neon.tech
- Sign up pake GitHub (paling cepat)
- Create project: **"pulse-db"**
- Region: **AWS / US East (Ohio)**

### 2️⃣ Copy Connection String
- Di dashboard, klik **"Connection Details"**
- Tab: **"Pooled connection"**
- Copy connection string (format: `postgresql://...`)

### 3️⃣ Update .env
```env
VITE_NEON_DATABASE_URL=postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### 4️⃣ Run Schema
- Neon Dashboard → **SQL Editor**
- Copy SEMUA isi file: **`neon-schema.sql`**
- Paste & Run (Ctrl+Enter)

### 5️⃣ Test!
```bash
npm run dev
```
- Buka browser: http://localhost:5173
- Klik **"Login as Admin"**
- Done! 🎉

---

## 📚 Documentation Files

### 🔥 Must Read:
1. **QUICK_START_NEON.md** ← Baca ini dulu! (5 menit)
   - Step-by-step setup
   - Verification checklist
   - Quick troubleshooting

### 📖 Detailed Guides:
2. **NEON_SETUP.md** - Complete setup guide + troubleshooting
3. **README_NEON.md** - Overview & quick reference
4. **SETUP_SUMMARY.md** - What was done & what you need to do

### 🔧 Technical Details:
5. **MIGRATION_TO_NEON.md** - Why we migrated, code changes
6. **CHANGELOG_NEON.md** - All changes documented
7. **DATABASE_STATUS.md** - Database schema & status

### 📄 Schema:
8. **neon-schema.sql** - Database schema (RUN THIS!)

---

## 🎯 What You Get

### Features:
- ✅ User registration (instant, no email confirmation)
- ✅ User login (secure bcrypt hashing)
- ✅ Admin detection (email contains "admin")
- ✅ Progress tracking (sync across devices)
- ✅ Course completion tracking
- ✅ "Login as Admin" button (testing)

### Default Admin:
```
Email: admin@pulse.dev
Password: admin123
```

### Database:
- **users** - User accounts
- **course_progress** - Course completion
- **item_progress** - Lesson completion
- **task_progress** - Task completion

---

## 🚀 After Setup

### Test Locally:
```bash
npm run dev
# Click "Login as Admin"
# Test course navigation
# Complete a lesson
# Check progress saves
```

### Deploy to Vercel:
```bash
git add .
git commit -m "Setup Neon database"
git push

# Then:
# 1. Go to vercel.com
# 2. Import repository
# 3. Add env var: VITE_NEON_DATABASE_URL
# 4. Deploy!
```

---

## ❓ Need Help?

### Quick Fixes:
- **Connection error**: Check .env has correct connection string
- **Table not found**: Run neon-schema.sql in SQL Editor
- **Admin login failed**: Check users table has admin@pulse.dev

### Detailed Help:
- Read **QUICK_START_NEON.md** for step-by-step
- Read **NEON_SETUP.md** for troubleshooting
- Check browser console (F12)
- Check Neon logs (Dashboard → Logs)

---

## 🎉 Why Neon?

| Feature | Supabase | Neon |
|---------|----------|------|
| Setup time | 30 min | **5 min** ✅ |
| RLS errors | Yes ❌ | **No** ✅ |
| Rate limits | Yes ❌ | **No** ✅ |
| Email confirm | Required ❌ | **Not needed** ✅ |
| Complexity | High ❌ | **Low** ✅ |

---

## 🔥 TL;DR

```
1. neon.tech → Create project
2. Copy connection string → .env
3. Run neon-schema.sql → SQL Editor
4. npm run dev → Click "Login as Admin"
5. Done! 🎉
```

**Time**: 5 minutes  
**Difficulty**: Easy  
**Status**: Ready! 🚀

---

## 📞 What to Read Next

1. **QUICK_START_NEON.md** - Detailed 5-minute guide
2. **NEON_SETUP.md** - Complete setup + troubleshooting
3. **SETUP_SUMMARY.md** - What was done

---

**Ready?** Go to **QUICK_START_NEON.md** and follow the steps! 🚀
