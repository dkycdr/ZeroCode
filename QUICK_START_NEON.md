# ⚡ Quick Start - Neon Setup (5 Menit!)

## 🎯 TL;DR
1. Bikin project di neon.tech
2. Copy connection string ke .env
3. Run neon-schema.sql
4. Klik "Login as Admin"
5. Done! 🎉

---

## 📋 Step-by-Step

### 1️⃣ Bikin Neon Account (1 menit)
```
1. Buka: https://neon.tech
2. Klik "Sign Up"
3. Login pake GitHub (paling cepat)
4. Klik "Create Project"
5. Nama: pulse-db
6. Region: AWS / US East (Ohio)
7. Klik "Create"
```

### 2️⃣ Copy Connection String (30 detik)
```
1. Setelah project dibuat, lu liat dashboard
2. Klik tab "Connection Details"
3. Pilih "Pooled connection"
4. Klik "Copy" di connection string
```

Format connection string:
```
postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### 3️⃣ Update .env (30 detik)
```bash
# Buka file .env
# Paste connection string lu:

VITE_NEON_DATABASE_URL=postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### 4️⃣ Run Schema (1 menit)
```
1. Balik ke Neon dashboard
2. Klik "SQL Editor" (sidebar kiri)
3. Klik "New Query"
4. Buka file neon-schema.sql di project lu
5. Copy SEMUA isinya (Ctrl+A, Ctrl+C)
6. Paste ke SQL Editor (Ctrl+V)
7. Klik "Run" atau tekan Ctrl+Enter
8. Tunggu sampe ada success message
```

### 5️⃣ Test! (1 menit)
```bash
# Run app
npm run dev

# Buka browser: http://localhost:5173
# Klik "Login as Admin"
# Harusnya langsung masuk ke dashboard!
```

---

## ✅ Verification

### Cek Database:
1. Buka Neon dashboard
2. Klik "Tables" (sidebar kiri)
3. Harusnya ada 4 tables:
   - ✅ users
   - ✅ course_progress
   - ✅ item_progress
   - ✅ task_progress

### Cek Admin Account:
1. Klik table "users"
2. Harusnya ada 1 row:
   - Email: admin@pulse.dev
   - Name: Admin User
   - is_admin: true

### Cek App:
1. Buka http://localhost:5173
2. Klik "Login as Admin"
3. Harusnya masuk ke dashboard
4. Semua course harusnya unlocked (no lock icon)

---

## 🎉 Done!

Sekarang lu punya:
- ✅ Database di cloud (Neon)
- ✅ Auth dengan bcrypt
- ✅ Admin account ready
- ✅ Progress tracking
- ✅ Sync across devices

---

## 🚀 Next Steps

### Deploy ke Vercel:
```bash
# 1. Push ke GitHub
git add .
git commit -m "Setup Neon database"
git push

# 2. Import ke Vercel
# - Go to vercel.com
# - Import repository
# - Add environment variable:
#   VITE_NEON_DATABASE_URL = (paste connection string)
# - Deploy!
```

### Test di Production:
```
1. Buka deployed URL
2. Klik "Login as Admin"
3. Test course navigation
4. Test progress tracking
5. Done! 🎉
```

---

## ❓ Troubleshooting

### "Connection error"
```bash
# Check .env file
cat .env

# Harusnya ada:
VITE_NEON_DATABASE_URL=postgresql://...

# Pastiin ada ?sslmode=require di akhir
```

### "Table not found"
```sql
-- Run ini di SQL Editor buat cek tables:
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';

-- Harusnya return 4 tables
```

### "Admin login failed"
```sql
-- Check admin account:
SELECT * FROM users WHERE email = 'admin@pulse.dev';

-- Harusnya ada 1 row dengan is_admin = true
```

### "npm run dev" error
```bash
# Clear node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📞 Need Help?

1. Check browser console (F12)
2. Check Neon logs (Dashboard → Logs)
3. Read NEON_SETUP.md for detailed guide
4. Read MIGRATION_TO_NEON.md for technical details

---

**Total Time**: ~5 menit  
**Difficulty**: Easy  
**Status**: Ready to go! 🚀
