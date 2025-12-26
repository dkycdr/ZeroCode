import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Intro = {
    id: 'tailwind-1-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Utility-First Architecture 🏗️',
    duration: '15 min read',
    content: `
# Deep Dive: Utility-First Architecture 🏗️

## 1. The "Traditional" Struggle
For the last 20 years, we were taught a strict separation of concerns:
*   **HTML**: The Structure (The skeleton)
*   **CSS**: The Style (The skin)
*   **JS**: The Logic (The brain)

This sounds good in theory, but leads to the **Naming Problem**:
\`\`\`css
.sidebar-inner-wrapper-bottom-left-button { ... }
\`\`\`
Every time you add a new feature, you write *new* CSS. Your CSS files grow eternally (Append-Only), because you're too afraid to delete old classes in case they break something elsewhere.

---

## 2. Analogy: "Ordering Dinner" 🍔

### Traditional CSS (The Fancy Restaurant)
You ask the chef for a "Supreme Burger". The chef goes to the back and crafts a custom burger from scratch with a unique recipe.
*   **Pros**: Total control.
*   **Cons**: Slow, hard to replicate perfectly, requires a unique name for every dish.

### Tailwind CSS (Subway / Chipotle)
You see a row of pre-prepared ingredients (Lettuce, Tomato, Cheese, Mayo). You point to what you want: *"I want bread, cheese, double tomato, and mayo."*
*   **Pros**: Extremely fast, consistent every time, no need to invent a name for your sandwich.
*   **Cons**: You can only use the ingredients available (The Design System).

---

## 3. The Paradigm Shift
Instead of writing CSS, you **apply** existing classes directly in your HTML.

### Side-by-Side Comparison

**Traditional:**
\`\`\`html
<div class="notification-card">
  <div class="icon"></div>
  <div class="text">Warning</div>
</div>
\`\`\`
*(Plus 20 lines of CSS in a separate file)*

**Tailwind:**
\`\`\`html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="shrink-0">...</div>
  <div>
    <div class="text-xl font-medium text-black">Warning</div>
  </div>
</div>
\`\`\`

## 4. Why This Wins
1.  **No Context Switching**: You don't have to jump between \`index.html\` and \`styles.css\` 500 times a day.
2.  **Smaller Bundle Sizes**: Tailwind doesn't grow. Reusing \`flex\` 1000 times adds 0 bytes to your CSS after the first time.
3.  **Consistency**: You can't accidentally use \`margin: 13px\`. You are forced to choose from the scale (\`m-3\` or \`m-4\`).

---

## 5. Mythbusting: "Isn't this just Inline Styles?"
**NO.** Inline styles (\`style="color: red"\`) have massive limitations:
1.  ❌ No Media Queries (Responsive Design).
2.  ❌ No Pseudo-states (Hover, Focus).
3.  ❌ No Design System constraints.

Tailwind is a **Constraints Interface**. It gives you the speed of inline styles with the power of a design system.
    `
};
