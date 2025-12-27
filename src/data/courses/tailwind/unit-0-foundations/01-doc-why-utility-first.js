import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1WhyUtilityFirst = {
    id: 'tailwind-u0-doc-1-philosophy',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Utility-First Philosophy',
    duration: '12 min read',
    content: `
# The Utility-First Philosophy

## The Problem with Traditional CSS

Imagine you've been asked to style a button. The traditional approach looks like this:

\`\`\`html
<!-- Traditional CSS Approach -->
<button class="btn btn-primary">Click Me</button>
\`\`\`

\`\`\`css
.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}
\`\`\`

**Problems:**
- ❌ You had to switch files (HTML → CSS)
- ❌ You had to invent class names (\`btn\`, \`btn-primary\`)
- ❌ CSS grows forever (never deleted, only added)
- ❌ Hard to know if a class is still being used

## The Utility-First Solution

With Tailwind, you compose designs directly in HTML:

\`\`\`html
<button class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 cursor-pointer">
  Click Me
</button>
\`\`\`

**Advantages:**
- ✅ Everything in one place (no context switching)
- ✅ No naming burden (utilities are pre-named)
- ✅ CSS doesn't grow (fixed set of utilities)
- ✅ Highly reusable patterns
- ✅ Easier to delete features (just delete HTML)

## The Shift in Mindset

### Traditional CSS Thinking
"I need a component. Let me create a class and style it."

### Utility-First Thinking
"I need these visual properties. Let me compose utilities."

## Real-World Example

Building a card component the traditional way:

\`\`\`css
.card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

.card-body {
  color: #6b7280;
  line-height: 1.6;
}
\`\`\`

With Tailwind:

\`\`\`html
<div class="bg-white rounded-lg p-6 shadow">
  <h2 class="text-xl font-bold mb-4">Card Title</h2>
  <p class="text-gray-600 leading-relaxed">Card body content...</p>
</div>
\`\`\`

## Common Concerns Addressed

### "Isn't this just inline styles?"

**No.** Inline styles can't handle:
- ✅ Hover states (\`hover:bg-blue-600\`)
- ✅ Responsive breakpoints (\`md:flex\`)
- ✅ Dark mode (\`dark:bg-gray-800\`)
- ✅ Focus states (\`focus:ring-2\`)

Tailwind utilities are **constraint-based** and **design-system-driven**.

### "My HTML looks messy"

At first, yes. But you gain:
- **Faster development** (no CSS writing)
- **Easier maintenance** (everything visible)
- **Better consistency** (design system enforced)

With experience, you'll extract components:

\`\`\`jsx
// React Component
function Button({ children }) {
  return (
    <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
      {children}
    </button>
  );
}
\`\`\`

### "What about reusability?"

Tailwind encourages **composition over inheritance**. Instead of inheriting from \`.btn\`, you compose utilities.

For true reusability, extract to components (React, Vue, etc.) or use \`@apply\`:

\`\`\`css
.btn-primary {
  @apply px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600;
}
\`\`\`

> [!WARNING]
> Use \`@apply\` sparingly! It defeats the purpose of utility-first. Only extract when you have true duplication across many files.

## When Utility-First Shines

✅ **Rapid Prototyping**: Build UIs 3-5x faster  
✅ **Design Systems**: Enforce spacing/color scales  
✅ **Team Consistency**: Everyone uses same utilities  
✅ **Maintainability**: Delete HTML, not hunt CSS  

## When to Consider Alternatives

❌ **Highly Custom Designs**: Every element unique  
❌ **Small Static Sites**: No build step desired  
❌ **Team Resistance**: Team refuses to learn  

---

## The Bottom Line

Utility-first CSS is a **paradigm shift**, not just a tool. It requires unlearning traditional CSS patterns, but the payoff is:

- **Faster development**
- **Better consistency**
- **Easier maintenance**
- **Smaller CSS bundles**

Ready to embrace the utility-first way? Let's dive in! 🚀
`
};
