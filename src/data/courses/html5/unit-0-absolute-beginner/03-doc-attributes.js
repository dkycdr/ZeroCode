import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Attributes = {
    id: 'html5-0-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Attributes & Metadata 🏷️',
    duration: '12 min read',
    content: `
# Deep Dive: Attributes & Metadata 🏷️

## 1. What Are Attributes?

Tags are the containers, but **Attributes** are the settings. They go inside the opening tag and tell the browser *more details* about that element.

\`\`\`html
<tag attribute="value">Content</tag>
\`\`\`

Think of them like giving instructions to the architect: "Make this window 300px wide" or "Make this door lead to the garden."

---

## 2. The Power Players (Must Know)

### 1. \`href\` (Hypertext Reference)
Used for links (\`<a>\`). Tells the browser *where* to go.

\`\`\`html
<a href="https://google.com">Go to Google</a>
\`\`\`

### 2. \`src\` (Source)
Used for images (\`<img>\`) and scripts. Tells the browser *what file* to load.

\`\`\`html
<img src="avatar.png">
\`\`\`

### 3. \`class\` (The Stylist)
Groups elements together so you can style them with CSS.

\`\`\`html
<div class="card">Item 1</div>
<div class="card">Item 2</div>
\`\`\`

### 4. \`id\` (The Unique Fingerprint)
Identifies a **single** unique element. No two elements on a page should have the same ID.

\`\`\`html
<h1 id="main-title">My Unique Title</h1>
\`\`\`

---

## 3. Senior Architect's Guidance: Common Pitfalls 🚧

### ❌ The "No Quote" lazy error
\`\`\`html
<!-- WRONG: Will break if URL has spaces -->
<a href=contact.html>Contact</a> 
\`\`\`

### ✅ The Professional Way
\`\`\`html
<!-- CORRECT: Always use double quotes -->
<a href="contact.html">Contact</a>
\`\`\`

### ❌ The "Alt" Sin
\`\`\`html
<!-- WRONG: Accessibility nightmare -->
<img src="cat.jpg">
\`\`\`

### ✅ The Inclusive Way
\`\`\`html
<!-- CORRECT: Describes image for blind users -->
<img src="cat.jpg" alt="A fluffy orange cat sitting on a keyboard">
\`\`\`

> [!IMPORTANT]
> **Mission Objective**: Always write valid, quoted attributes. It prevents weird bugs down the road when your data becomes complex.
`
};
