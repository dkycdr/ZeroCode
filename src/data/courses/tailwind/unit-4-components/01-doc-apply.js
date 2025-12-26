import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Apply = {
    id: 'tailwind-4-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: To @apply or Not? 🛠️',
    duration: '20 min read',
    content: `
# Deep Dive: To @apply or Not? 🛠️

## 1. The Beginner's Trap
New Tailwind users often find HTML "ugly" and want to hide the classes.
They do this:
\`\`\`css
/* BAD PRACTICE */
.btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded;
}
\`\`\`
**Why is this bad?**
1.  **You just reinvented normal CSS.** You lost the benefit of seeing styles in your HTML.
2.  **Bloated CSS.** If you use \`.btn-primary\` 100 times, the CSS is small. But if you make 50 different "custom component classes", your CSS file grows huge again.

## 2. The Better Way: Components
Instead of abstracting to CSS, abstract to **React/Vue Components**.

\`\`\`jsx
// React Component
const Button = ({ children }) => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    {children}
  </button>
);
\`\`\`
Now you have a "Single Source of Truth" without writing custom CSS.

## 3. When is @apply okay?
Use it for **3rd-party overrides**.
Example: Styling a WordPress plugin widget that you *cannot* edit the HTML for.
    `
};
