# 🎯 PULSE - Neon PostgreSQL Setup

## 🚨 IMPORTANT: Database Changed!

Gw udah ganti dari **Supabase** ke **Neon PostgreSQL** karena:
- ❌ Supabase: RLS error, rate limit, email confirmation, ribet
- ✅ Neon: Simple, no bullshit, 5 menit setup

---

## ⚡ Quick Setup (5 Menit)

### 1. Bikin Neon Account
```
https://neon.tech
→ Sign up pake GitHub
→ Create project: "pulse-db"
→ Region: AWS / US East (Ohio)
```

### 2. Copy Connection String
```
Dashboard → Connection Details
→ Tab: "Pooled connection"
→ Copy connection string
```

### 3. Update .env
```env
VITE_NEON_DATABASE_URL=postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### 4. Run Schema
```
Neon Dashboard → SQL Editor
→ Copy isi file: neon-schema.sql
→ Paste & Run
```

### 5. Test
```bash
npm run dev
→ Klik "Login as Admin"
→ Done! 🎉
```

---

## 📚 Documentation

### Quick Start
- **QUICK_START_NEON.md** ← Baca ini dulu! (5 menit)

### Detailed Guides
- **NEON_SETUP.md** - Setup lengkap + troubleshooting
- **MIGRATION_TO_NEON.md** - Technical details
- **CHANGELOG_NEON.md** - What changed
- **DATABASE_STATUS.md** - Current status

### Schema
- **neon-schema.sql** - Database schema (run this!)

---

## 🎯 What You Get

### ✅ Features
- User registration (instant, no email confirmation)
- User login (bcrypt password hashing)
- Admin detection (email contains "admin")
- Progress tracking (sync across devices)
- Course completion tracking
- "Login as Admin" button (testing)

### 🔐 Default Admin
```
Email: admin@pulse.dev
Password: admin123
```

### 📊 Database
- **users** - User accounts
- **course_progress** - Course completion
- **item_progress** - Lesson completion
- **task_progress** - Task completion

---

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Setup Neon database"
git push

# 2. Vercel
vercel.com → Import repo
→ Add env var: VITE_NEON_DATABASE_URL
→ Deploy!
```

---

## ❓ Troubleshooting

### Connection Error
```bash
# Check .env
cat .env
# Harusnya ada: VITE_NEON_DATABASE_URL=postgresql://...
```

### Table Not Found
```
Neon Dashboard → SQL Editor
→ Run neon-schema.sql lagi
```

### Admin Login Failed
```
Neon Dashboard → Tables → users
→ Check ada admin@pulse.dev
→ is_admin = true
```

---

## 📦 Dependencies

Already installed! ✅
```json
{
  "@neondatabase/serverless": "^1.0.2",
  "bcryptjs": "^3.0.3"
}
```

---

## 🎉 Why Neon?

| Feature | Supabase | Neon |
|---------|----------|------|
| Setup time | 30 min | 5 min |
| RLS errors | ❌ Yes | ✅ No |
| Rate limits | ❌ Yes | ✅ No |
| Email confirm | ❌ Required | ✅ Not needed |
| Complexity | ❌ High | ✅ Low |
| PostgreSQL | ✅ Yes | ✅ Yes |

---

## 📞 Need Help?

1. Read **QUICK_START_NEON.md** (5 menit)
2. Check browser console (F12)
3. Check Neon logs (Dashboard → Logs)
4. Read troubleshooting in NEON_SETUP.md

---

## 🔥 TL;DR

```bash
# 1. Bikin project di neon.tech
# 2. Copy connection string ke .env
# 3. Run neon-schema.sql di SQL Editor
# 4. npm run dev
# 5. Klik "Login as Admin"
# 6. Done! 🎉
```

**Total time**: 5 menit  
**Difficulty**: Easy  
**Status**: Ready! 🚀

---

**Next**: Baca QUICK_START_NEON.md untuk step-by-step guide!
