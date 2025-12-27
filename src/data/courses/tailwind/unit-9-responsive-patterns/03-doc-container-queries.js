import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3ContainerQueries = {
  id: 'tailwind-u9-doc-3-container-queries',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Container Queries (Next-Level Responsive)',
  duration: '10 min read',
  content: `
# Container Queries (Next-Level Responsive)

## The Problem with Media Queries

**Scenario:** You have a card component. It looks great at different screen sizes.

But what if the card is in:
- A full-width area? → Should be horizontal
- A narrow sidebar? → Should be stacked

**Media queries don't know about containers!**

---

## Container Queries to the Rescue

Container queries style based on **parent container size**, not viewport.

\`\`\`html
<div class="@container">
  <div class="@md:flex @md:gap-4">
    <!-- Responsive to container, not screen! -->
  </div>
</div>
\`\`\`

---

## Setup with Plugin

\`\`\`bash
npm install @tailwindcss/container-queries
\`\`\`

\`\`\`javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
\`\`\`

---

## How to Use

### Step 1: Define a Container

\`\`\`html
<div class="@container">
  <!-- Children can now query this container -->
</div>
\`\`\`

### Step 2: Style Based on Container Size

\`\`\`html
<div class="@container">
  <article class="flex flex-col @md:flex-row @lg:gap-8">
    <img class="@md:w-1/3">
    <div class="@md:w-2/3">Content</div>
  </article>
</div>
\`\`\`

---

## Container Query Sizes

| Query | Min Width |
|-------|-----------|
| \`@xs:\` | 20rem (320px) |
| \`@sm:\` | 24rem (384px) |
| \`@md:\` | 28rem (448px) |
| \`@lg:\` | 32rem (512px) |
| \`@xl:\` | 36rem (576px) |
| \`@2xl:\` | 42rem (672px) |

---

## Named Containers

For nested containers, use names:

\`\`\`html
<div class="@container/main">
  <div class="@container/sidebar">
    <div class="@md/main:text-lg @md/sidebar:text-sm">
      Different response per container
    </div>
  </div>
</div>
\`\`\`

---

## Real-World Example: Adaptive Card

\`\`\`html
<div class="@container">
  <div class="bg-white rounded-xl p-4 
              flex flex-col @sm:flex-row gap-4">
    <img class="@sm:w-40 rounded-lg" src="...">
    <div>
      <h2 class="font-bold @md:text-xl">Title</h2>
      <p class="text-gray-600 @md:line-clamp-3">
        Description...
      </p>
    </div>
  </div>
</div>
\`\`\`

This card adapts to its container, not the viewport!

---

## When to Use Container Queries

| Use Case | Solution |
|----------|----------|
| Page layout | Media queries (viewport) |
| Reusable components | Container queries |
| Dashboard widgets | Container queries |
| Sidebar components | Container queries |

---

## Key Takeaways

✅ **Container queries** = Responsive to parent, not viewport
✅ **\`@container\`** = Define a container
✅ **\`@md:\`** = Query container size (not screen!)
✅ **Install plugin** = @tailwindcss/container-queries
✅ **Use for components** that need to work in any context
`
};
