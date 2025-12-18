# 🚀 Neon PostgreSQL Setup - SIMPLE!

Ganti dari Supabase ke Neon karena lebih simple, no RLS bullshit, no rate limit!

## ✅ Step 1: Bikin Neon Account

1. Buka https://neon.tech
2. Sign up (pake GitHub paling gampang)
3. Klik **Create Project**
4. Kasih nama: `pulse-db` (atau terserah)
5. Pilih region: **AWS / US East (Ohio)** (paling deket)
6. Klik **Create Project**

## ✅ Step 2: Copy Connection String

1. Setelah project dibuat, lu bakal liat **Connection String**
2. Pilih tab **Pooled connection**
3. Copy connection string yang ada (format: `postgresql://...`)
4. Paste ke file `.env`:

```env
VITE_NEON_DATABASE_URL=postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

## ✅ Step 3: Run SQL Schema

1. Di Neon dashboard, klik **SQL Editor** (sidebar kiri)
2. Copy SEMUA isi file `neon-schema.sql`
3. Paste ke SQL Editor
4. Klik **Run** atau tekan Ctrl+Enter
5. Tunggu sampe success!

Ini bikin:
- ✅ Table `users` (email, password, name, dll)
- ✅ Table `course_progress`
- ✅ Table `item_progress`
- ✅ Table `task_progress`
- ✅ Default admin account (admin@pulse.dev / admin123)

## ✅ Step 4: Test!

1. Run app: `npm run dev`
2. Buka browser
3. Klik **"Login as Admin"**
4. Harusnya langsung masuk!

ATAU register akun baru:
1. Ke halaman Register
2. Isi form
3. Klik Register
4. Langsung masuk!

## 🎯 Kenapa Neon Lebih Bagus?

### Supabase (RIBET):
- ❌ RLS policy error
- ❌ Rate limit 429
- ❌ Email confirmation
- ❌ 406 error
- ❌ Harus setup banyak hal

### Neon (SIMPLE):
- ✅ No RLS bullshit
- ✅ No rate limit
- ✅ No email confirmation
- ✅ Tinggal connection string doang
- ✅ Pure PostgreSQL

## 📊 Database Structure

### users
```sql
id              SERIAL PRIMARY KEY
email           VARCHAR(255) UNIQUE
password_hash   VARCHAR(255)
name            VARCHAR(255)
major           VARCHAR(100)
student_id      VARCHAR(50)
is_admin        BOOLEAN
joined_date     TIMESTAMP
```

### course_progress
```sql
id              SERIAL PRIMARY KEY
user_id         INTEGER (FK to users)
course_id       VARCHAR(50)
completed       BOOLEAN
completed_at    TIMESTAMP
```

### item_progress
```sql
id              SERIAL PRIMARY KEY
user_id         INTEGER (FK to users)
course_id       VARCHAR(50)
unit_id         VARCHAR(50)
item_id         VARCHAR(100)
completed       BOOLEAN
quiz_score      INTEGER
code_html       TEXT
code_css        TEXT
code_javascript TEXT
completed_at    TIMESTAMP
```

### task_progress
```sql
id              SERIAL PRIMARY KEY
user_id         INTEGER (FK to users)
item_id         VARCHAR(100)
task_id         INTEGER
completed       BOOLEAN
completed_at    TIMESTAMP
```

## 🔐 Admin Account

Default admin udah dibuat otomatis:
```
Email: admin@pulse.dev
Password: admin123
```

Atau register dengan email yang ada kata "admin" (e.g., `admin123@gmail.com`)

## 🚀 Deploy ke Vercel

1. Push ke GitHub
2. Import project di Vercel
3. Tambah environment variable:
   - Key: `VITE_NEON_DATABASE_URL`
   - Value: (connection string dari Neon)
4. Deploy!

## 🎉 Done!

Sekarang:
- ✅ Database di cloud (Neon)
- ✅ Auth dengan bcrypt
- ✅ Progress tracking
- ✅ Sync across devices
- ✅ Admin auto unlock
- ✅ NO BULLSHIT!

## 📝 Files Changed

- ✅ `src/lib/neon.js` - Neon client
- ✅ `src/contexts/AuthProvider.jsx` - Auth dengan Neon + bcrypt
- ✅ `src/contexts/ProgressProvider.jsx` - Progress dengan Neon
- ✅ `.env` - Neon connection string
- ✅ `neon-schema.sql` - Database schema
- ✅ `package.json` - Added @neondatabase/serverless

## ❓ Troubleshooting

### Connection error
- Check connection string di `.env`
- Pastiin format: `postgresql://...`
- Pastiin ada `?sslmode=require` di akhir

### Table not found
- Run `neon-schema.sql` di SQL Editor
- Check di **Tables** tab, harusnya ada 4 tables

### Admin not working
- Check table `users`, harusnya ada admin@pulse.dev
- Atau register dengan email yang ada "admin"

---

**TL;DR:**
1. Bikin project di neon.tech
2. Copy connection string ke `.env`
3. Run `neon-schema.sql` di SQL Editor
4. Klik "Login as Admin"
5. Done! 🎉
