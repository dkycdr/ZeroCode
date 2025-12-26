import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Grid = {
    id: 'tailwind-2-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Grid System 🕸️',
    duration: '15 min read',
    content: `
# Deep Dive: The Grid System 🕸️

## 1. Analogy: The Egg Carton
Flexbox is like a bookshelf (elastic). **Grid is like an egg carton.**
It has clearly defined "slots". Items fall into slots.
*   It is **2-Dimensional** (Rows AND Columns at the same time).

\`\`\`html
<!-- Create a 3-column carton -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4 (Automatically drops to next row)</div>
</div>
\`\`\`

---

## 2. The Power of "Span"
In an egg carton, an egg can't cover two holes. In CSS Grid, it can.

*   \`col-span-2\`: "I am fat, I need 2 slots."
*   \`row-span-2\`: "I am tall, I need 2 rows."
*   \`col-span-full\`: "I am the header, I take the whole width."

---

## 3. Grid vs Flexbox: The Verdict
When to use which?

*   **Use Grid when:** You want a rigid structural layout (e.g., Image Gallery, Dashboard Dashboard, Page Skeleton).
*   **Use Flex when:** You want content-based alignment (e.g., Navbar, Form inputs, Buttons in a row).

> [!NOTE]
> Tailwind's Grid implementation places classes on the **Parent** (\`grid-cols-3\`), unlike Bootstrap which places them on the **Children** (\`col-4\`). This makes the HTML structure much cleaner.
    `
};
