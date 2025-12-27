import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Landmarks = {
    id: 'html5-u2-doc-2-landmarks',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Structural Landmarks (Header, Main, Footer)',
    duration: '15 min read',
    content: `
# Deep Dive: Structural Landmarks 🗺️

Landmarks are the "Big Blocks" of your page layout.

## 1. \`<header>\` (The Intro)
Contains introductory content like logos, navigation menus, and search bars.
*   **Usage**: Usually at the top of the body, OR at the top of an \`<article>\`.

## 2. \`<nav>\` (The Map)
This tag is strictly for **major navigation blocks**.
*   ✅ Top menu, Footer links, Sidebar pagination.
*   ❌ A single "Read More" link (That's just an \`<a>\`).

## 3. \`<main>\` (The Core)
This is the **most important tag on your page**.
It wraps the *unique* content of readability.
*   **Rule**: There should be only **ONE** visible \`<main>\` element per page.

\`\`\`html
<body>
    <header>Logo & Menu</header>
    
    <main>
        <h1>Why Cats are Great</h1>
        <p>The actual article content...</p>
    </main>

    <footer>Copyright 2024</footer>
</body>
\`\`\`

## 4. \`<footer>\` (The Outro)
Contains copyright info, social links, and legal disclaimers.

## 5. \`<aside>\` (The Sidebar)
Content that is "tangentially related" to the main content.
*   **Examples**: "Related Articles", "Ads", "Author Bio".
*   **Semantic Meaning**: "If you delete this, the main article still makes sense."
`
};
