import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4FilePaths = {
    id: 'html5-u1-doc-4-paths',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The GPS System (File Paths)',
    duration: '15 min read',
    content: `
# Deep Dive: The GPS System (File Paths)

## 1. The Scenario

You wrote this code:
\`<img src="logo.png">\`

It works on your laptop. You upload it to the server. **It breaks.**
Why? Because you didn't understand **File Paths**.

---

## 2. Absolute Paths (The Global Address)

An absolute path describes a location **from the root of the internet**. It always includes the domain name.

\`\`\`html
<!-- Examples -->
<a href="https://google.com">Google</a>
<img src="https://mysite.com/images/logo.png">
\`\`\`

*   **When to use:** Linking to *someone else's* website.
*   **When NOT to use:** Linking to your own files (it's brittle. If you change your domain, all links break).

---

## 3. Relative Paths (The Local Map)

A relative path describes a location **relative to the file you are currently editing**.

### 📍 "Right Here" (\`./\`)
Use this for files in the **same folder**.

\`\`\`html
<!-- Folder contains: index.html, style.css -->
<link rel="stylesheet" href="./style.css">
<!-- OR just filename (same thing) -->
<link rel="stylesheet" href="style.css">
\`\`\`

### 📂 "Down a Level" (\`folder/\`)
Use this to go **into** a subfolder.

\`\`\`html
<!-- Folder contains: index.html, images/logo.png -->
<img src="images/logo.png">
\`\`\`

### ⬆️ "Up a Level" (\`../\`)
Use this to go **out** of the current folder to the parent.

\`\`\`html
<!-- File is in: /pages/about.html -->
<!-- We want to link to: /index.html (in parent folder) -->
<a href="../index.html">Home</a>
\`\`\`

---

## 4. The "Root" Path (\`/\`)

Starting with a slash \`/\` means "Start from the very top folder of my website".

\`\`\`html
<!-- Wherever I am, go to the top-level css folder -->
<link rel="stylesheet" href="/css/style.css">
\`\`\`

> [!IMPORTANT]
> **Navigator's Check**:
> 1. \`style.css\` = Same folder.
> 2. \`css/style.css\` = Go inside 'css' folder.
> 3. \`../style.css\` = Go up one folder.
> 4. \`/style.css\` = Go to root (Base).
`
};
