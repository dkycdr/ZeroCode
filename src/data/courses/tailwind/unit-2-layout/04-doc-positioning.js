import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Positioning = {
    id: 'tailwind-2-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Absolute & Relative 📍',
    duration: '15 min read',
    content: `
# Deep Dive: Absolute & Relative 📍

## 1. The "Pinning" Concept
Normal HTML elements stack like blocks.
**Positioned** elements ignore the stack. You can pin them anywhere (Top-Left, Bottom-Right).

## 2. The Anchor Rule (Crucial!)
To pin something absolutely, you must tell it **"Relative to what?"**.

*   If the parent has \`relative\`, the child is pinned to the **Parent**.
*   If the parent has *nothing*, the child is pinned to the **Body (Page)**.

\`\`\`html
<!-- The Container (Anchor) -->
<div class="relative w-64 h-64 bg-gray-200">
    
    <!-- The Pinned Item -->
    <div class="absolute top-0 right-0 bg-red-500">
        New!
    </div>

</div>
\`\`\`

---

## 3. The "Inset" Shorthand
In standard CSS, you write \`top: 0; left: 0; right: 0; bottom: 0;\` to stretch an overlay.
In Tailwind, just write:
**\`inset-0\`**

## 4. Z-Index: The Layer Cake
Who sits on top of whom?
*   **z-0**: The Table (Default)
*   **z-10**: The Plate
*   **z-50**: The Cake

> [!WARNING]
> \`z-index\` DOES NOT WORK on static elements (default). You must add \`relative\` or \`absolute\` to an element for Z-Index to take effect.
    `
};
