import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3FormsInput = {
    id: 'html5-unit-3',
    title: 'Forms and Input - Collecting User Data',
    description: 'Master HTML forms: text inputs, buttons, checkboxes, radio buttons, and more. Learn how to collect and submit user data with accessibility best practices.',
    items: [
        {
            id: 'html5-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'HTML Forms Basics - Collecting User Input',
            duration: '15 min read',
            content: `
# HTML Forms Basics - Collecting User Input

## What is a Form?

A form is a way to collect information from users. Examples:
- Login forms
- Contact forms
- Search boxes
- Registration forms
- Surveys

## The Form Element

All form elements go inside a form tag:

\`\`\`html
<form>
    Form elements go here
</form>
\`\`\`

### Form Attributes

**action** - Where to send the data:

\`\`\`html
<form action="/submit">
    Form elements
</form>
\`\`\`

**method** - How to send data:

\`\`\`html
<form action="/submit" method="POST">
    POST sends data securely
</form>

<form action="/search" method="GET">
    GET sends data in URL
</form>
\`\`\`

## GET vs POST: Perbedaan Teknis

### GET Method
- Data dikirim di URL: \`/search?q=hello&page=1\`
- Terlihat di address bar
- Tidak aman untuk data sensitif
- Cocok untuk: pencarian, filter
- Batasan: ~2000 karakter

### POST Method
- Data dikirim di request body (tersembunyi)
- Tidak terlihat di URL
- Lebih aman untuk password, kartu kredit
- Cocok untuk: login, registrasi, pembayaran
- Tidak ada batasan ukuran

**Kapan gunakan?**
- GET: Pencarian, filter, data publik
- POST: Login, registrasi, pembayaran, data sensitif

## Input Types

The input tag adalah elemen form paling umum:

\`\`\`html
<input type="text">
\`\`\`

### Text Input

Untuk teks satu baris:

\`\`\`html
<input type="text" placeholder="Enter your name">
\`\`\`

### Email Input

Untuk alamat email:

\`\`\`html
<input type="email" placeholder="your@email.com">
\`\`\`

### Password Input

Untuk password (menyembunyikan teks):

\`\`\`html
<input type="password" placeholder="Enter password">
\`\`\`

### Number Input

Untuk angka:

\`\`\`html
<input type="number" min="1" max="100">
\`\`\`

### Date Input

Untuk tanggal:

\`\`\`html
<input type="date">
\`\`\`

### Checkbox

Untuk multiple selections:

\`\`\`html
<input type="checkbox"> I agree to terms
\`\`\`

### Radio Button

Untuk single selection:

\`\`\`html
<input type="radio" name="choice"> Option 1
<input type="radio" name="choice"> Option 2
\`\`\`

### Submit Button

Untuk submit form:

\`\`\`html
<input type="submit" value="Send">
\`\`\`

### Reset Button

Untuk clear form:

\`\`\`html
<input type="reset" value="Clear">
\`\`\`

## Labels: Jantung Aksesibilitas

Selalu gunakan label dengan inputs:

\`\`\`html
<label for="name">Name:</label>
<input type="text" id="name">
\`\`\`

### Mengapa Label Penting?

1. **Screen Readers**: Pengguna dengan visual impairment mendengar label
2. **Larger Click Area**: Klik label = klik input (lebih mudah di mobile)
3. **Semantic HTML**: Browser memahami hubungan label-input
4. **Accessibility**: WCAG compliance

### Hubungan Label-Input (WAJIB!)

\`\`\`html
<!-- BENAR: for dan id cocok -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- SALAH: for dan id tidak cocok -->
<label for="email">Email:</label>
<input type="email" id="user-email" name="email">
\`\`\`

## Textarea

Untuk multi-line text:

\`\`\`html
<textarea rows="5" cols="40"></textarea>
\`\`\`

## Select Dropdown

Untuk memilih dari opsi:

\`\`\`html
<select>
    <option>Choose one</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>
\`\`\`

## Complete Form Example

\`\`\`html
<form action="/submit" method="POST">
    <h2>Contact Form</h2>
    
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5"></textarea>
    
    <input type="submit" value="Send">
</form>
\`\`\`

## Form Attributes

### required

Field harus diisi:

\`\`\`html
<input type="text" required>
\`\`\`

### placeholder

Hint text:

\`\`\`html
<input type="text" placeholder="Enter name">
\`\`\`

### value

Default value:

\`\`\`html
<input type="text" value="Default">
\`\`\`

### disabled

Disable field:

\`\`\`html
<input type="text" disabled>
\`\`\`

### readonly

Tidak bisa diedit:

\`\`\`html
<input type="text" readonly value="Fixed">
\`\`\`

### maxlength

Maximum characters:

\`\`\`html
<input type="text" maxlength="10">
\`\`\`

### min and max

Untuk numbers dan dates:

\`\`\`html
<input type="number" min="1" max="100">
\`\`\`

## Atribut name: Nyawa Form

**Atribut name adalah WAJIB untuk form submission!**

\`\`\`html
<!-- BENAR: name ada -->
<input type="text" name="username" id="username">

<!-- SALAH: name hilang, data tidak terkirim! -->
<input type="text" id="username">
\`\`\`

Tanpa name, data tidak akan dikirim ke backend!

## Input Types Reference

| Type | Purpose | Mobile Keyboard |
|------|---------|-----------------|
| text | Single line text | Standard |
| email | Email address | Email keyboard |
| password | Hidden password | Standard |
| number | Numbers | Numpad |
| date | Date picker | Date picker |
| time | Time picker | Time picker |
| checkbox | Multiple choice | - |
| radio | Single choice | - |
| submit | Submit button | - |
| reset | Reset button | - |
| button | Custom button | - |
| file | File upload | File picker |
| hidden | Hidden field | - |
| range | Slider | - |
| color | Color picker | Color picker |

## Mobile UX Tips

### type="number"
Menampilkan numpad di mobile (bukan keyboard standar)

\`\`\`html
<input type="number" placeholder="Age">
\`\`\`

### type="email"
Menampilkan email keyboard dengan @ dan .

\`\`\`html
<input type="email" placeholder="your@email.com">
\`\`\`

### type="tel"
Menampilkan phone keyboard dengan angka besar

\`\`\`html
<input type="tel" placeholder="555-1234">
\`\`\`

### type="date"
Menampilkan date picker native (lebih mudah dari typing)

\`\`\`html
<input type="date">
\`\`\`

## Best Practices

1. **Always use labels** - Untuk accessibility
2. **Use correct input types** - Improves UX di mobile
3. **Add required attribute** - Untuk mandatory fields
4. **Use name attribute** - WAJIB untuk form submission
5. **Use placeholder wisely** - Bukan pengganti label
6. **Group related fields** - Gunakan fieldset
7. **Validate on server** - Jangan percaya client-side saja
8. **Test on mobile** - Keyboard berbeda di setiap device

Now you can create forms! 📋
            `
        },
        {
            id: 'html5-3-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building a Registration Form - Step by Step',
            duration: '20 min',
            content: `
# Building a Registration Form - Step by Step

Kita akan membuat form registrasi yang cantik dan accessible dengan 6 langkah kecil.

## Step 1: Form Structure (Action & Method)

Setiap form dimulai dengan tag <form> yang memiliki:
- **action**: URL tujuan data
- **method**: Cara pengiriman (GET atau POST)

\`\`\`html
<form action="/register" method="POST">
    <!-- Form elements go here -->
</form>
\`\`\`

**Mengapa POST?** Karena kita mengirim data sensitif (password, email).

## Step 2: Input Nama (Label-Input Relationship)

Hubungan label-input adalah KUNCI aksesibilitas!

\`\`\`html
<label for="fullname">Full Name:</label>
<input type="text" id="fullname" name="fullname" required>
\`\`\`

### Apa yang Terjadi?

1. **for="fullname"** di label cocok dengan **id="fullname"** di input
2. Screen reader membaca: "Full Name, text input"
3. Klik label = klik input (area lebih besar!)
4. Mobile: lebih mudah di-tap

### Mengapa name Penting?

\`\`\`html
<!-- BENAR: name ada, data terkirim -->
<input type="text" id="fullname" name="fullname">

<!-- SALAH: name hilang, data TIDAK terkirim! -->
<input type="text" id="fullname">
\`\`\`

Tanpa name, backend tidak tahu field apa yang dikirim!

## Step 3: Input Email (Type + Required)

Email input memiliki validasi bawaan:

\`\`\`html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required>
\`\`\`

### Apa yang Terjadi?

1. **type="email"** memvalidasi format email
2. **required** mencegah submit jika kosong
3. Mobile: menampilkan email keyboard dengan @

### Validasi Bawaan

Browser otomatis mengecek:
- Harus ada @
- Harus ada domain
- Format harus valid

## Step 4: Dropdown Negara (Select & Option)

Untuk memilih dari daftar panjang, gunakan <select>:

\`\`\`html
<label for="country">Country:</label>
<select id="country" name="country" required>
    <option value="">Select a country</option>
    <option value="id">Indonesia</option>
    <option value="my">Malaysia</option>
    <option value="sg">Singapore</option>
    <option value="th">Thailand</option>
</select>
\`\`\`

### Struktur Select

- **<select>**: Container
- **<option>**: Setiap pilihan
- **value**: Data yang dikirim ke backend
- **required**: Wajib dipilih

### Tips

- Selalu ada placeholder option kosong
- Gunakan value singkat (id, my, sg)
- Label harus punya for="country"

## Step 5: Input Checkbox (Terms & Conditions)

Checkbox untuk persetujuan:

\`\`\`html
<input type="checkbox" id="terms" name="terms" required>
<label for="terms">I agree to Terms & Conditions</label>
\`\`\`

### Penting!

1. **id** dan **for** harus cocok
2. **name** untuk data submission
3. **required** untuk wajib disetujui
4. Label SETELAH checkbox (atau bisa sebelum)

### Mengapa Penting?

- Pengguna harus membaca & setuju
- Legal requirement
- Accessibility: screen reader membaca label

## Step 6: Button Submit (Type Submit)

Tombol untuk submit form:

\`\`\`html
<button type="submit">Create Account</button>
<!-- atau -->
<input type="submit" value="Create Account">
\`\`\`

### Perbedaan

- **<button>**: Lebih fleksibel, bisa berisi HTML
- **<input type="submit">**: Lebih sederhana

### Apa yang Terjadi?

1. User klik tombol
2. Browser validasi semua field required
3. Jika valid, kirim data ke action URL
4. Jika tidak valid, tampilkan error

## Complete Registration Form

\`\`\`html
<form action="/register" method="POST">
    <h2>Create Account</h2>
    
    <!-- Step 2: Full Name -->
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname" required>
    
    <!-- Step 3: Email -->
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Step 4: Country -->
    <label for="country">Country:</label>
    <select id="country" name="country" required>
        <option value="">Select a country</option>
        <option value="id">Indonesia</option>
        <option value="my">Malaysia</option>
        <option value="sg">Singapore</option>
        <option value="th">Thailand</option>
    </select>
    
    <!-- Step 5: Terms Checkbox -->
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">I agree to Terms & Conditions</label>
    
    <!-- Step 6: Submit Button -->
    <button type="submit">Create Account</button>
</form>
\`\`\`

## Accessibility Checklist

✅ Setiap input punya label
✅ Label for cocok dengan input id
✅ Setiap input punya name
✅ Required fields jelas ditandai
✅ Form punya action dan method
✅ Submit button ada

Sekarang Anda siap membuat form yang accessible! 🎯
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Step 1: Create a <form> with action="/register" and method="POST" (attributes dapat dalam urutan apapun)',
                    completed: false,
                    hint: 'Gunakan <form> tag dengan action dan method. Urutan atribut tidak penting!',
                    regex: /<form(?=[^>]*action\s*=\s*["\']\/register["\'])(?=[^>]*method\s*=\s*["\']POST["\'])[^>]*>[\s\S]*?<\/form>/i
                },
                {
                    id: 2,
                    description: 'Step 2: Add Full Name input dengan <label for="fullname"> dan <input type="text" id="fullname" name="fullname" required>',
                    completed: false,
                    hint: 'Label for harus cocok dengan input id. Ini penting untuk accessibility dan screen readers!',
                    regex: /<label[^>]*for\s*=\s*["\']fullname["\'][^>]*>[\s\S]*?<\/label>[\s\S]*?<input(?=[^>]*type\s*=\s*["\']text["\'])(?=[^>]*id\s*=\s*["\']fullname["\'])(?=[^>]*name\s*=\s*["\']fullname["\'])(?=[^>]*required)[^>]*>/i
                },
                {
                    id: 3,
                    description: 'Step 3: Add Email input dengan <label for="email"> dan <input type="email" id="email" name="email" required>',
                    completed: false,
                    hint: 'type="email" memberikan validasi bawaan dan keyboard email di mobile!',
                    regex: /<label[^>]*for\s*=\s*["\']email["\'][^>]*>[\s\S]*?<\/label>[\s\S]*?<input(?=[^>]*type\s*=\s*["\']email["\'])(?=[^>]*id\s*=\s*["\']email["\'])(?=[^>]*name\s*=\s*["\']email["\'])(?=[^>]*required)[^>]*>/i
                },
                {
                    id: 4,
                    description: 'Step 4: Add Country dropdown dengan <select id="country" name="country"> dan minimal 3 <option> elements',
                    completed: false,
                    hint: 'Gunakan <select> untuk dropdown. Setiap <option> adalah pilihan. Jangan lupa label!',
                    regex: /<label[^>]*for\s*=\s*["\']country["\'][^>]*>[\s\S]*?<\/label>[\s\S]*?<select(?=[^>]*id\s*=\s*["\']country["\'])(?=[^>]*name\s*=\s*["\']country["\'])[^>]*>[\s\S]*?<option[^>]*>[\s\S]*?<\/option>[\s\S]*?<option[^>]*>[\s\S]*?<\/option>[\s\S]*?<option[^>]*>[\s\S]*?<\/option>[\s\S]*?<\/select>/i
                },
                {
                    id: 5,
                    description: 'Step 5: Add Terms checkbox dengan <input type="checkbox" id="terms" name="terms" required> dan <label for="terms">',
                    completed: false,
                    hint: 'Checkbox untuk persetujuan. Label harus cocok dengan id untuk accessibility!',
                    regex: /<input(?=[^>]*type\s*=\s*["\']checkbox["\'])(?=[^>]*id\s*=\s*["\']terms["\'])(?=[^>]*name\s*=\s*["\']terms["\'])(?=[^>]*required)[^>]*>[\s\S]*?<label[^>]*for\s*=\s*["\']terms["\'][^>]*>[\s\S]*?<\/label>/i
                },
                {
                    id: 6,
                    description: 'Step 6: Add Submit button dengan <button type="submit"> atau <input type="submit">',
                    completed: false,
                    hint: 'Tombol submit untuk mengirim form. Gunakan type="submit" agar form tersubmit!',
                    regex: /(?:<button[^>]*type\s*=\s*["\']submit["\'][^>]*>[\s\S]*?<\/button>|<input[^>]*type\s*=\s*["\']submit["\'][^>]*>)/i
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>📝 Create Your Account</h1>
        <p class="subtitle">Join our community today!</p>
        
        <!-- TASK 1: Buat <form> dengan action="/register" dan method="POST" -->
        <!-- Start your form here... -->
        
            <!-- TASK 2: Tambahkan Full Name input -->
            
            <!-- TASK 3: Tambahkan Email input -->
            
            <!-- TASK 4: Tambahkan Country dropdown -->
            
            <!-- TASK 5: Tambahkan Terms checkbox -->
            
            <!-- TASK 6: Tambahkan Submit button -->
            
        <!-- Tutup form di sini -->
    </div>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.container {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
}

h1 {
    color: #333;
    margin-bottom: 10px;
    text-align: center;
    font-size: 28px;
}

.subtitle {
    color: #666;
    text-align: center;
    margin-bottom: 30px;
    font-size: 14px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

label {
    display: block;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
    font-size: 14px;
}

input[type="text"],
input[type="email"],
select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
select:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 20px;
    padding-right: 40px;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
    accent-color: #667eea;
}

.checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.checkbox-group label {
    margin-bottom: 0;
    font-weight: 400;
    cursor: pointer;
}

button[type="submit"],
input[type="submit"] {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 14px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

button[type="submit"]:hover,
input[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

button[type="submit"]:active,
input[type="submit"]:active {
    transform: translateY(0);
}

@media (max-width: 600px) {
    .container {
        padding: 30px 20px;
    }
    
    h1 {
        font-size: 24px;
    }
    
    input[type="text"],
    input[type="email"],
    select {
        padding: 14px;
        font-size: 16px;
    }
}`
                }
            ]
        },
        {
            id: 'html5-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Accessibility & Advanced Form Elements',
            duration: '12 min read',
            content: `
# Accessibility & Advanced Form Elements

## Label-Input Relationship: Foundation of Accessibility

The relationship between <label> and <input> is the KEY to form accessibility.

### What Happens?

\`\`\`html
<!-- CORRECT: for and id match -->
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">

<!-- WRONG: for and id don't match -->
<label for="email">Email Address:</label>
<input type="email" id="user-email" name="email">
\`\`\`

### Why It Matters?

1. **Screen Readers**: Blind users hear the label when focusing on input
2. **Larger Click Area**: Click label = click input (easier on mobile!)
3. **Semantic HTML**: Browser understands the relationship
4. **WCAG Compliance**: International accessibility standards

### Real Example

\`\`\`html
<!-- Without proper label -->
<input type="checkbox" id="terms">
<span>I agree to terms</span>
<!-- Screen reader: "checkbox" (what?) -->

<!-- With proper label -->
<input type="checkbox" id="terms" name="terms">
<label for="terms">I agree to terms</label>
<!-- Screen reader: "I agree to terms, checkbox" (clear!) -->
\`\`\`

### Checkbox & Radio: Label After Input

\`\`\`html
<!-- Checkbox -->
<input type="checkbox" id="newsletter" name="newsletter">
<label for="newsletter">Subscribe to newsletter</label>

<!-- Radio -->
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>

<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
\`\`\`

## Fieldset & Legend: Grouping Related Fields

For complex forms, use <fieldset> and <legend>:

\`\`\`html
<fieldset>
    <legend>Personal Information</legend>
    
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
</fieldset>

<fieldset>
    <legend>Address</legend>
    
    <label for="street">Street:</label>
    <input type="text" id="street" name="street">
    
    <label for="city">City:</label>
    <input type="text" id="city" name="city">
</fieldset>
\`\`\`

### What Happens?

- Screen reader reads: "Personal Information, group"
- Users know which fields are related
- CSS styling becomes easier

## Advanced Input Types

### Range Slider

\`\`\`html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100" value="50">
\`\`\`

### Color Picker

\`\`\`html
<label for="color">Favorite Color:</label>
<input type="color" id="color" name="color" value="#667eea">
\`\`\`

### File Upload

\`\`\`html
<label for="photo">Upload Photo:</label>
<input type="file" id="photo" name="photo" accept=".jpg,.png,.gif">
\`\`\`

### Search Input

\`\`\`html
<label for="search">Search:</label>
<input type="search" id="search" name="search" placeholder="Search...">
\`\`\`

### URL Input

\`\`\`html
<label for="website">Website:</label>
<input type="url" id="website" name="website" placeholder="https://example.com">
\`\`\`

### Tel Input

\`\`\`html
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" placeholder="555-1234">
\`\`\`

## Datalist: Suggestions While Typing

\`\`\`html
<label for="browser">Choose Browser:</label>
<input type="text" id="browser" name="browser" list="browsers">

<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
</datalist>
\`\`\`

## Output Element: Display Calculated Results

\`\`\`html
<form>
    <label for="num1">Number 1:</label>
    <input type="number" id="num1" value="10">
    
    <label for="num2">Number 2:</label>
    <input type="number" id="num2" value="20">
    
    <p>Sum: <output id="result">30</output></p>
</form>
\`\`\`

## Disabled vs Readonly

### Disabled

Field cannot be used at all:

\`\`\`html
<input type="text" disabled value="Cannot edit">
<!-- Data is NOT sent to backend -->
\`\`\`

### Readonly

Field cannot be edited but data is still sent:

\`\`\`html
<input type="text" readonly value="Fixed value" name="fixed">
<!-- Data IS sent to backend -->
\`\`\`

## Autofocus & Autocomplete

### Autofocus

Focus on input when page loads:

\`\`\`html
<input type="text" autofocus placeholder="Focus here">
\`\`\`

### Autocomplete

Browser remembers previous values:

\`\`\`html
<input type="email" autocomplete="email">
<input type="password" autocomplete="current-password">
<input type="tel" autocomplete="tel">
\`\`\`

## Optgroup: Group Select Options

\`\`\`html
<select id="country" name="country">
    <optgroup label="Asia">
        <option value="id">Indonesia</option>
        <option value="my">Malaysia</option>
        <option value="sg">Singapore</option>
    </optgroup>
    
    <optgroup label="Europe">
        <option value="uk">United Kingdom</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
    </optgroup>
</select>
\`\`\`

## Button Element: More Flexible Than Input

\`\`\`html
<!-- Simple button -->
<button type="submit">Send</button>

<!-- Button with HTML inside -->
<button type="submit">
    <strong>Send</strong> Message
</button>

<!-- Reset button -->
<button type="reset">Clear Form</button>

<!-- Regular button (no submit) -->
<button type="button">Click Me</button>
\`\`\`

## Form Validation Attributes

### required

Field must be filled:

\`\`\`html
<input type="text" required>
\`\`\`

### pattern

Custom validation with regex:

\`\`\`html
<input type="text" pattern="[A-Z]{3}" title="3 uppercase letters">
\`\`\`

### minlength & maxlength

Character limits:

\`\`\`html
<input type="text" minlength="5" maxlength="20">
\`\`\`

### min & max

For numbers and dates:

\`\`\`html
<input type="number" min="1" max="100">
<input type="date" min="2024-01-01" max="2024-12-31">
\`\`\`

## Accessibility Checklist

✅ Every input has a label
✅ Label for matches input id
✅ Every input has name (for submission)
✅ Required fields are clearly marked
✅ Form has action and method
✅ Submit button exists and is clear
✅ Error messages are informative
✅ Keyboard navigation works
✅ Color is not the only indicator
✅ Tested with screen reader

## Best Practices

1. **Always use labels** - For accessibility
2. **Use correct input types** - Improves mobile UX
3. **Validate on server** - Never trust client-side only
4. **Provide clear feedback** - Show success/error messages
5. **Keep forms simple** - Only ask what you need
6. **Group related fields** - Use fieldset
7. **Test on mobile** - Different keyboards on each device
8. **Test with screen readers** - NVDA, JAWS, VoiceOver
9. **Make required fields clear** - Use asterisk or text
10. **Provide help text** - Explain expected format

Now you're a form accessibility expert! 🎯
            `
        },
        {
            id: 'html5-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Forms and Input Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What attribute specifies where form data is sent?',
                    options: ['method', 'action', 'submit', 'target'],
                    correctIndex: 1,
                    explanation: 'The action attribute specifies the URL where form data is sent.'
                },
                {
                    id: 'q2',
                    question: 'Which input type hides the password?',
                    options: ['type="text"', 'type="hidden"', 'type="password"', 'type="secret"'],
                    correctIndex: 2,
                    explanation: 'type="password" hides the text as the user types.'
                },
                {
                    id: 'q3',
                    question: 'What is the purpose of the label element?',
                    options: [
                        'To style text',
                        'To associate text with form inputs for accessibility',
                        'To create a title',
                        'To add comments'
                    ],
                    correctIndex: 1,
                    explanation: 'Labels associate descriptive text with inputs, improving accessibility and usability.'
                },
                {
                    id: 'q4',
                    question: 'Which element allows multiple lines of text input?',
                    options: ['input type="text"', 'textarea', 'input type="multiline"', 'input type="paragraph"'],
                    correctIndex: 1,
                    explanation: 'textarea allows multiple lines of text input.'
                },
                {
                    id: 'q5',
                    question: 'What does the required attribute do?',
                    options: [
                        'Makes text bold',
                        'Prevents form submission if field is empty',
                        'Hides the field',
                        'Disables the field'
                    ],
                    correctIndex: 1,
                    explanation: 'The required attribute prevents form submission if the field is empty.'
                },
                {
                    id: 'q6',
                    question: 'Which input type is best for selecting one option from many?',
                    options: ['checkbox', 'radio', 'select', 'text'],
                    correctIndex: 2,
                    explanation: 'The select element (dropdown) is best for choosing one option from many.'
                },
                {
                    id: 'q7',
                    question: 'What is the name attribute used for?',
                    options: [
                        'To style the input',
                        'To identify the input for form submission',
                        'To add a tooltip',
                        'To disable the input'
                    ],
                    correctIndex: 1,
                    explanation: 'The name attribute identifies the input field when form data is submitted to the server.'
                },
                {
                    id: 'q8',
                    question: 'What is the difference between GET and POST methods?',
                    options: [
                        'GET is faster than POST',
                        'GET sends data in URL, POST sends in request body',
                        'POST is only for passwords',
                        'GET is more secure than POST'
                    ],
                    correctIndex: 1,
                    explanation: 'GET sends data in the URL (visible), POST sends data in the request body (hidden). POST is more secure for sensitive data.'
                }
            ]
        }
    ]
};
