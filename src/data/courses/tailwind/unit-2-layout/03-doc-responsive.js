import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Responsive = {
    id: 'tailwind-2-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Mobile-First Strategy 📱',
    duration: '20 min read',
    content: `
# Deep Dive: Mobile-First Strategy 📱

## 1. The "Default" is Mobile
This is the hardest concept for beginners.
**Tailwind has no mobile breakpoint.**
The *default* classes (\`block\`, \`text-sm\`, \`p-4\`) are ALWAYS the mobile styles.

You use breakpoints to *override* them for larger screens.

**The Mental Model:**
1.  Paint the mobile version first (No prefixes).
2.  Expand the screen.
3.  Add \`md:...\` to fix things that look stretched.

---

## 2. The Breakpoint Ladder
| Prefix | Size | Device |
| :--- | :--- | :--- |
| *(None)* | 0px+ | Phones (Default) |
| \`sm:\` | 640px+ | Large Phones |
| \`md:\` | 768px+ | Tablets / iPads |
| \`lg:\` | 1024px+ | Laptops |
| \`xl:\` | 1280px+ | Monitors |

---

## 3. Common Anti-Pattern: "Desktop First"
\`\`\`html
<!-- 🛑 BAD: Thinking Desktop first -->
<div class="flex-row sm:flex-col"> ... </div>
\`\`\`
*(This tries to say: "Row normally, but Col on mobile". But \`sm:\` means "Small **AND BIGGER**", so this is backwards.)*

\`\`\`html
<!-- ✅ GOOD: Thinking Mobile first -->
<div class="flex-col sm:flex-row"> ... </div>
\`\`\`
*(This says: "Column by default (Mobile), but switch to Row when screen is Small or bigger".)*

## 4. The "Hamburger" Trick
How do you hide/show things?
*   **Burger Icon**: \`block md:hidden\` (Visible on mobile, vanishes on Tablet+).
*   **Full Menu**: \`hidden md:block\` (Invisible on mobile, appears on Tablet+).
    `
};
