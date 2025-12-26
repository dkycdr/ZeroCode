import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Jit = {
    id: 'tailwind-1-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Just-In-Time (JIT) ⚡',
    duration: '15 min read',
    content: `
# Deep Dive: Just-In-Time (JIT) ⚡

## 1. The Magic Dictionary
Imagine a dictionary that starts empty.
As you write your book (HTML), whenever you invent a word like "text-blue-500", the dictionary *magically defines it* for you instantly.

This is the **JIT Engine**.
*   It watches your HTML files.
*   It sees you typed \`p-4\`.
*   It generates \`.p-4 { padding: 1rem; }\` in your CSS file.
*   It ignores the thousands of classes you *didn't* use.

**Result:** Your production CSS is tiny (usually <10kb).

---

## 2. "Cheat Codes" (Arbitrary Values)
Sometimes the design system (LEGO bricks) isn't enough. You need a very specific value.
You can break out of the system using **Square Brackets \`[]\`**.

### Examples
*   **Specific Width:** \`w-[342px]\` (Instead of \`w-96\`)
*   **Brand Color:** \`bg-[#1da1f2]\` (Twitter Blue)
*   **Precise Position:** \`top-[17%]\`

\`\`\`html
<!-- Using a specific hex code for a brand button -->
<button class="bg-[#FF5733] text-white px-4 py-2">
  Custom Brand
</button>
\`\`\`

> [!WARNING]
> **Don't overuse this.** If you find yourself typing \`bg-[#FF5733]\` ten times, you should add it to your \`tailwind.config.js\` as a new color named \`brand-orange\`.

---

## 3. Dynamic Class Limitations
The JIT engine scans your code as **Text strings**. It does not run your JavaScript.

### The Interpolation Trap 🪤
\`\`\`javascript
// ❌ WRONG - Tailwind cannot see "bg-red-500"
const color = "red";
<div class={\`bg-\${color}-500\`}></div>
\`\`\`

### The Solution: Full Class Names
\`\`\`javascript
// ✅ CORRECT - Full strings are visible
const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500"
};
<div class={colorClasses[color]}></div>
\`\`\`
    `
};
