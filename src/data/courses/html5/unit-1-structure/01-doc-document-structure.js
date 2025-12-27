import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1DocumentStructure = {
    id: 'html5-u1-doc-1-dom',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Document Object Model (DOM)',
    duration: '15 min read',
    content: `
# Deep Dive: The Document Object Model (DOM)

## 1. The Tree Analogy

When a browser reads your HTML file, it doesn't just read "text". It builds a **family tree**.
This tree is called the **DOM** (Document Object Model).

Understanding the DOM is the key to becoming a Senior Developer.

### The Family Relationships
*   **Parent**: The element that wraps others (e.g., \`<body>\` is the parent of \`<h1>\`).
*   **Child**: The element inside another (e.g., \`<h1>\` is the child of \`<body>\`).
*   **Sibling**: Elements next to each other (e.g., an \`<h1>\` and a \`<p>\` side-by-side).

\`\`\`mermaid
graph TD
    html(html: The Root) --> head
    html --> body
    head --> title
    head --> meta
    body --> h1(h1: The Heading)
    body --> p(p: The Paragraph)
    
    style html fill:#f9f,stroke:#333
    style body fill:#bbf,stroke:#333
\`\`\`

---

## 2. The Boilerplate (The Standard Setup)

Every professional HTML file must start with standard "boilerplate" code.
VS Code lets you type \`!\` and hit \`Tab\` to generate this instantly.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
\`\`\`

### Decoding the Matrix:
*   \`lang="en"\`: Tells Google "This page is in English". Important for translation and SEO.
*   \`charset="UTF-8"\`: Encodes characters so emoji (🚀) and accents (é) work correctly.
*   \`viewport\`: **CRITICAL**. Without this line, your site will look tiny and broken on mobile phones. It tells the phone: "Use the full width of the screen."

---

## 3. The Heading Hierarchy (H1 - H6)

Headings create the **outline** of your document. Google uses them to understand what your page is about.

### ⛔ The Beginner Mistake
*"I'll use h4 because h1 is too big."*
**NO.** Never choose a tag based on how it *looks*. Choose it based on what it *means*.
(You change the size later with CSS).

### ✅ The Correct Structure
Rules:
1.  **Only ONE \`<h1>\` per page**: This is the Main Topic.
2.  **Don't skip levels**: Don't jump from \`<h1>\` to \`<h3>\`. It confuses screen readers.

\`\`\`html
<h1>The Solar System</h1>           <!-- The Page Title -->
  <h2>Inner Planets</h2>            <!-- Sub-section -->
    <h3>Mercury</h3>                <!-- Sub-sub-section -->
    <h3>Venus</h3>
  <h2>Outer Planets</h2>
    <h3>Jupiter</h3>
\`\`\`

> [!IMPORTANT]
> **Accessibility Check**: Screen Reader users (blind users) often hit a "Next Heading" button to scan a page quickly. If your headings are messy (\`h1\` -> \`h5\` -> \`h2\`), their navigation breaks perfectly.
`
};
