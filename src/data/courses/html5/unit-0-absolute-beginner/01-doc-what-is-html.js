import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1WhatIsHtml = {
    id: 'html5-u0-doc-1-intro',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: What is HTML?',
    duration: '10 min read',
    content: `
# Deep Dive: What is HTML?

## 1. The Simplest Explanation

Imagine you're writing a letter to a friend. You write:
- A title at the top
- Some paragraphs
- Maybe a list of things
- A picture
- A link to something

**HTML (HyperText Markup Language)** is just a way to tell the computer: "This is a title", "This is a paragraph", "This is a picture".

It is NOT a programming language (like C++ or Python). It is a **Markup Language**. It labels content.

> [!TIP]
> Think of HTML tags as **labels** on boxes. The computer doesn't know what's inside unless you label it!

---

## 2. The Web Technology Stack

Every website you see is built with three core technologies working together:

\`\`\`mermaid
graph TB
    subgraph "🌐 The Web Stack"
        HTML["📄 HTML<br/>Structure & Content"]
        CSS["🎨 CSS<br/>Style & Layout"]
        JS["⚡ JavaScript<br/>Interactivity"]
    end
    
    HTML --> |"styled by"| CSS
    HTML --> |"controlled by"| JS
    CSS --> |"animates"| JS
    
    style HTML fill:#E44D26,color:#fff
    style CSS fill:#1572B6,color:#fff
    style JS fill:#F7DF1E,color:#000
\`\`\`

### What Each Technology Does:

| Technology | Role | Example |
|------------|------|---------|
| **HTML** | Structure | "This is a heading", "This is a paragraph" |
| **CSS** | Appearance | "Make the heading blue and 24px" |
| **JavaScript** | Behavior | "When clicked, show a popup" |

---

## 3. Real World Analogy: The Architect's Blueprint

Think of a webpage like a building:

\`\`\`mermaid
graph LR
    subgraph "🏗️ Building a House"
        A["🧱 HTML<br/>Walls, Rooms, Foundation"] --> B["🎨 CSS<br/>Paint, Furniture, Decoration"]
        B --> C["⚡ JavaScript<br/>Electricity, Smart Home, Automation"]
    end
    
    style A fill:#E44D26,color:#fff
    style B fill:#1572B6,color:#fff
    style C fill:#F7DF1E,color:#000
\`\`\`

*   **HTML** is the **Structure/Blueprint** (Walls, Beams, Rooms).
*   **CSS** is the **Decoration** (Paint, Carpet, Furniture).
*   **JavaScript** is the **Electricity/Plumbing** (Lights, Water, Interactive Smart Home features).

Without HTML, you have nothing. No walls to paint, no rooms to light up.

---

## 4. The Code View (Terminal Vision)

**What you see on screen:**

My First Website

Welcome to my page!

**What the computer sees (HTML):**

\`\`\`html
<h1>My First Website</h1>
<p>Welcome to my page!</p>
\`\`\`

You wrap text in **tags** like \`<h1>\` and \`<p>\` to label what they are.

---

## 5. Anatomy of a Tag

Tags are just labels. They mostly come in pairs.

\`\`\`mermaid
graph LR
    A["<p>"] --> B["This is a paragraph"]
    B --> C["</p>"]
    
    A:::opening
    C:::closing
    B:::content
    
    classDef opening fill:#22c55e,color:#fff
    classDef closing fill:#ef4444,color:#fff
    classDef content fill:#3b82f6,color:#fff
\`\`\`

\`\`\`html
<p>This is a paragraph</p>
\`\`\`

*   **Opening tag**: \`<p>\` (Starts the element) - Green
*   **Content**: "This is a paragraph" - Blue
*   **Closing tag**: \`</p>\` (Ends the element. Note the slash \`/\`) - Red

### Self-Closing Tags

Some tags don't need a closing tag because they don't wrap content:

\`\`\`html
<img src="photo.jpg" alt="A photo">
<br>
<hr>
<input type="text">
\`\`\`

---

## 6. The Element Hierarchy

HTML elements form a **tree structure** called the DOM (Document Object Model):

\`\`\`mermaid
graph TD
    HTML["🌐 html"] --> HEAD["📋 head"]
    HTML --> BODY["📄 body"]
    
    HEAD --> TITLE["📝 title"]
    HEAD --> META["⚙️ meta"]
    HEAD --> LINK["🔗 link"]
    
    BODY --> HEADER["🎯 header"]
    BODY --> MAIN["📰 main"]
    BODY --> FOOTER["📍 footer"]
    
    HEADER --> NAV["🧭 nav"]
    MAIN --> ARTICLE["📖 article"]
    MAIN --> ASIDE["📌 aside"]
    
    style HTML fill:#f9f,stroke:#333
    style BODY fill:#bbf,stroke:#333
    style MAIN fill:#bfb,stroke:#333
\`\`\`

> [!IMPORTANT]
> Every element has a **parent** (the element that contains it) and can have **children** (elements inside it).

---

## 7. The "Bad" vs "Good" Way (Semantics)

We will learn this deeper later, but know this now:

### ❌ Bad HTML (The "Div Soup")
Everything is just a generic box. The browser and screen readers don't know what this content is.

\`\`\`html
<div>My Title</div>
<div>My content...</div>
<div>Click me</div>
\`\`\`

### ✅ Gold Standard HTML (Semantic)
Every tag describes its purpose. Screen readers, search engines, and browsers understand the content.

\`\`\`html
<h1>My Title</h1>
<p>My content...</p>
<button>Click me</button>
\`\`\`

\`\`\`mermaid
graph LR
    subgraph "❌ Div Soup"
        D1["div"] --> D2["div"] --> D3["div"]
    end
    
    subgraph "✅ Semantic HTML"
        S1["header"] --> S2["main"] --> S3["footer"]
    end
    
    style D1 fill:#ef4444,color:#fff
    style D2 fill:#ef4444,color:#fff
    style D3 fill:#ef4444,color:#fff
    style S1 fill:#22c55e,color:#fff
    style S2 fill:#22c55e,color:#fff
    style S3 fill:#22c55e,color:#fff
\`\`\`

> [!IMPORTANT]
> **Architect's Rule**: Always use the most specific tag available. Don't use a generic box (\`<div>\`) if a specific label (\`<header>\`, \`<article>\`, \`<footer>\`) exists.

---

## 8. Key Takeaways

1. **HTML is NOT a programming language** - it's a markup language that labels content
2. **HTML + CSS + JavaScript** = Complete website
3. **Tags come in pairs** - opening \`<tag>\` and closing \`</tag>\`
4. **Use semantic HTML** - use meaningful tags, not just \`<div>\` everywhere
5. **HTML creates structure** - CSS adds style, JavaScript adds behavior
`
};
