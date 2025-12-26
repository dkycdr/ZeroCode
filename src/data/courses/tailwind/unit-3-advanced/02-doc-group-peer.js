import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2GroupPeer = {
    id: 'tailwind-3-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Group & Peer 👯',
    duration: '20 min read',
    content: `
# Deep Dive: Group & Peer 👯

## 1. The "Group" Pattern (Parent-Child)
Standard CSS struggles when you want to style a **Child** based on the **Parent's** state.
*   *Use Case:* When I hover the whole **Card**, I want the **Title** to turn blue.

**The Solution:**
1.  Tag the Parent with \`group\`.
2.  Tag the Child with \`group-hover:...\`.

\`\`\`html
<div class="group card">
  <!-- When parent is hovered, text becomes blue -->
  <h3 class="text-black group-hover:text-blue-500">Title</h3>
</div>
\`\`\`

---

## 2. The "Peer" Pattern (Sibling-Sibling)
Sometimes elements are next to each other (Siblings).
*   *Use Case:* When the **Checkbox** is checked, I want the **Label** to cross out.

**The Solution:**
1.  Tag the FIRST sibling with \`peer\`.
2.  Tag the SECOND sibling with \`peer-checked:...\`.

\`\`\`html
<input type="checkbox" class="peer" />
<!-- When peer is checked, line-through this text -->
<p class="peer-checked:line-through">Task Done</p>
\`\`\`

> [!IMPORTANT]
> **Order Matters**: In CSS, you can only look "forward". The \`peer\` element must come **BEFORE** the element you want to style.
    `
};
