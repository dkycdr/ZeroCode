import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Setup = {
    id: 'tailwind-1-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Power User Setup 💻',
    duration: '10 min read',
    content: `
# Deep Dive: Power User Setup 💻

## 1. The Copilot: IntelliSense Extension
Writing Tailwind without the VS Code extension is like driving at night without headlights. You can do it, but it's dangerous.

**Install: "Tailwind CSS IntelliSense"**
*   **Autocomplete**: Type \`flex j\` → It suggests \`justify-center\`, \`justify-between\`, etc.
*   **Hover Preview**: Hover your mouse over \`w-64\` to see exactly \`16rem / 256px\`. No more guessing math!
*   **Linting**: It yells at you if you make a typo like \`text-red-50\` (which doesn't exist, it starts at 50).

---

## 2. Automatic Sorting (Prettier)
Have you ever argued about whether \`p-4\` comes before \`flex\`?
Stop arguing. Let the machine decide.

**Install: \`prettier-plugin-tailwindcss\`**
This plugin automatically sorts your classes in a "Sensible Standard" order recommended by the Tailwind team.

**Order of Operations (Roughly):**
1.  **Layout** (flex, grid, position)
2.  **Box Model** (width, height, margin, padding)
3.  **Typography** (font, text color)
4.  **Visuals** (background, border, shadow)
5.  **Interactivity** (cursor, select)

### Before Save (Messy)
\`\`\`html
<div class="hover:bg-blue-600 bg-blue-500 p-4 text-white flex rounded">
\`\`\`

### After Save (Clean & Ordered)
\`\`\`html
<div class="flex rounded bg-blue-500 p-4 text-white hover:bg-blue-600">
\`\`\`
Your brain will thank you because classes are always in the same place.
    `
};
