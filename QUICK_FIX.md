# 🚨 QUICK FIX - Login Gabisa

## Masalah Sekarang:
- ❌ "new row violates row-level security policy" 
- ❌ Rate limit 429 (terlalu banyak coba register)
- ❌ Email confirmation blocking login
- ❌ 406 error (udah difix di code)

## ✅ SOLUSI - Ikutin Step Ini:

### 1️⃣ Fix RLS Policy (WAJIB!)
1. Buka Supabase Dashboard: https://supabase.com/dashboard
2. Klik **SQL Editor** (sidebar kiri)
3. Klik **New Query**
4. Copy SEMUA isi file `fix-rls-policy.sql`
5. Paste ke SQL Editor
6. Klik **Run** atau tekan Ctrl+Enter
7. Tunggu sampe ada success message

**Ini fix error "row-level security policy"!**

### 2️⃣ Matiin Email Confirmation (WAJIB!)
1. Masih di Supabase Dashboard
2. Klik **Authentication** (sidebar kiri)
3. Klik **Providers**
4. Cari **Email** provider
5. Klik buat expand settings
6. **UNCHECK** kotak "Confirm email"
7. Klik **Save**

**Ini biar bisa langsung login tanpa konfirmasi email!**

### 3️⃣ Tunggu Rate Limit (Opsional)
Kalo masih kena error 429:
- Tunggu 1 jam
- ATAU ganti network/IP (pake hotspot HP misalnya)
- ATAU langsung pake tombol "Login as Admin" aja

### 4️⃣ Test Login
Setelah step 1 & 2 selesai:

**Cara 1: Login as Admin (PALING GAMPANG)**
1. Buka app lu
2. Ke halaman Login
3. Klik tombol **"Login as Admin"** (biru, di bawah form)
4. Tunggu sebentar
5. Harusnya langsung masuk!

**Cara 2: Register Akun Baru**
1. Buka app lu
2. Ke halaman Register
3. Isi form dengan email baru (jangan yang udah pernah dicoba)
4. Klik Register
5. Harusnya langsung masuk!

## 🎯 Kenapa Gabisa Login?

### Sebelum Fix:
1. ❌ RLS policy terlalu strict → gabisa insert profile
2. ❌ Email confirmation enabled → harus konfirmasi email dulu
3. ❌ Rate limit → terlalu banyak coba register
4. ❌ 406 error → header salah di supabase client

### Setelah Fix:
1. ✅ RLS policy udah dibenerin → bisa insert profile
2. ✅ Email confirmation disabled → langsung bisa login
3. ✅ Pake "Login as Admin" → bypass rate limit
4. ✅ Header udah dibenerin → no more 406

## 📝 Credentials Admin:
```
Email: admin@pulse.dev
Password: admin123
```

Tombol "Login as Admin" otomatis:
1. Coba login dulu
2. Kalo gagal, register otomatis
3. Langsung masuk!

## 🔍 Cara Cek Udah Bener:

### Cek RLS Policy:
1. Buka Supabase Dashboard
2. Klik **Table Editor** → `user_profiles`
3. Klik **Policies** tab
4. Harusnya ada 4 policies:
   - Enable insert for authenticated users
   - Enable read access for own profile
   - Enable update for own profile
   - Service role can do anything

### Cek Email Confirmation:
1. Buka **Authentication** → **Providers** → **Email**
2. "Confirm email" harusnya **UNCHECKED**

### Cek User Berhasil Register:
1. Buka **Authentication** → **Users**
2. Harusnya ada user baru
3. Buka **Table Editor** → `user_profiles`
4. Harusnya ada profile baru dengan data lengkap

## 🚀 Setelah Semua Fix:

Lu bisa:
- ✅ Register akun baru
- ✅ Login dengan akun yang udah ada
- ✅ Login as Admin dengan 1 klik
- ✅ Progress tersimpan di database
- ✅ Sync across devices
- ✅ Admin auto unlock semua course

## ❓ Masih Error?

Cek browser console (F12):
- Kalo masih 429 → tunggu 1 jam atau ganti network
- Kalo masih RLS error → pastiin `fix-rls-policy.sql` udah dirun
- Kalo masih email error → pastiin email confirmation udah dimatiin
- Kalo error lain → screenshot dan kasih tau gw

---

**TL;DR:**
1. Run `fix-rls-policy.sql` di SQL Editor
2. Matiin "Confirm email" di Auth Providers
3. Klik "Login as Admin" di login page
4. Done! 🎉
