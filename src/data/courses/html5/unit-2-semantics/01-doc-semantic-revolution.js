import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1SemanticRevolution = {
    id: 'html5-u2-doc-1-soup',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Semantic Revolution (No More Div Soup)',
    duration: '15 min read',
    content: `
# Deep Dive: The Semantic Revolution (No More Div Soup) 🏗️

## 1. The "Div Soup" Problem

In the old days (HTML4), we built everything with \`<div>\` tags.
*   \`<div id="header">\`
*   \`<div id="nav">\`
*   \`<div class="article">\`

This created **"Div Soup"**—a messy, meaningless structure that looked like this:

\`\`\`html
<div>
  <div>
    <div>Content</div>
  </div>
</div>
\`\`\`

**Why is this bad?**
1.  **Robots are blind**: Google's bot reads \`<div>\` and thinks "This is just a generic box." It doesn't know if it's a critical article or a useless sidebar.
2.  **Screen Readers fail**: Blind users can't navigate strictly by "Main Content" if there is no \`<main>\` tag.

---

## 2. The Semantic Solution (HTML5)

HTML5 gave us tags with **meaning** (Semantics).

*   Instead of \`<div id="header">\`, we use **\`<header>\`**.
*   Instead of \`<div id="footer">\`, we use **\`<footer>\`**.
*   Instead of \`<div class="article">\`, we use **\`<article>\`**.

### The Architect's Analogy
Imagine a blueprint for a house.
*   **Non-Semantic**: "Room 1", "Room 2", "Room 3". (Confusing)
*   **Semantic**: "Kitchen", "Bedroom", "Garage". (Clear purpose)

## 3. The SEO Boost

When you use Semantic HTML, you are explicitly telling Google:
> *"Hey, this \`<article>\` is my high-quality content. Rank this! But this \`<aside>\` is just ads, ignore it."*

This is the easiest SEO win you will ever get.
`
};
