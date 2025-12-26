import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1States = {
    id: 'tailwind-3-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: State Modifiers 🖱️',
    duration: '15 min read',
    content: `
# Deep Dive: State Modifiers 🖱️

## 1. The Interaction Layer
Websites aren't PDFs. They breathe. Interactive elements have "States".
In Tailwind, you don't write new CSS blocks. You just add a **prefix**.

### The "If" Logic
*   \`hover:bg-red-500\` = **IF** user hovers, **THEN** background is red.
*   \`focus:ring-2\` = **IF** user clicks/tabs, **THEN** show a ring.
*   \`active:scale-95\` = **IF** user presses down, **THEN** shrink slightly.

---

## 2. Stacking Prefixes (Combo Moves)
You can chain prefixes like a fighting game combo.

\`\`\`html
<!-- "In Dark Mode, When Hovered, make text white" -->
<button class="text-gray-500 dark:hover:text-white">
  Combo
</button>
\`\`\`

## 3. The "Pseudo" Hierarchy
The browser prioritizes states in a specific order (LVHA):
1.  **L**ink (Default)
2.  **V**isited
3.  **H**over
4.  **A**ctive

Tailwind handles this automatically, but logically, you should write them in order of occurrence.

> [!TIP]
> **Mobile Hover**: Be careful with \`hover\`. On mobile, "hover" often sticks after a tap. Consider using \`active\` for touch feedback instead.
    `
};
