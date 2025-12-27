import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3ContainerQueries = {
    id: 'tailwind-u3-doc-3-container',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Container Queries in Tailwind',
    duration: '10 min read',
    content: `
# Container Queries in Tailwind

## What are Container Queries?

**Container queries** let you style elements based on their **parent container's size**, not the viewport.

### Media Query (Viewport-based)
\`\`\`css
/* Styles based on screen width */
@media (min-width: 768px) {
  .card { grid-template-columns: 1fr 1fr; }
}
\`\`\`

### Container Query (Container-based)
\`\`\`css
/* Styles based on container width */
@container (min-width: 768px) {
  .card { grid-template-columns: 1fr 1fr; }
}
\`\`\`

---

## Why Container Queries?

### Problem with Media Queries

\`\`\`html
<!-- Sidebar -->
<aside class="w-64">
  <div class="md:flex md:gap-4">
    <!-- This uses viewport width, but sidebar is only 256px! -->
  </div>
</aside>
\`\`\`

### Solution with Container Queries

\`\`\`html
<!-- Define container -->
<aside class="w-64 @container">
  <div class="@md:flex @md:gap-4">
    <!-- This uses container width (256px), not viewport! -->
  </div>
</aside>
\`\`\`

---

## Setup Container Queries

### 1. Install Plugin

\`\`\`bash
npm install @tailwindcss/container-queries
\`\`\`

### 2. Add to Config

\`\`\`javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
\`\`\`

---

## Using Container Queries

### Mark Container

\`\`\`html
<div class="@container">
  <!-- Children can use @{breakpoint} -->
</div>
\`\`\`

### Named Containers

\`\`\`html
<div class="@container/sidebar">
  <div class="@lg/sidebar:flex">
    <!-- Targets specific container -->
  </div>
</div>
\`\`\`

---

## Container Query Breakpoints

| Prefix | Min Width |
|--------|-----------|
| \`@sm:\` | 384px |
| \`@md:\` | 448px |
| \`@lg:\` | 512px |
| \`@xl:\` | 576px |
| \`@2xl:\` | 672px |

---

## Real-World Example

### Responsive Card Component

\`\`\`html
<!-- Card adapts to container, not viewport -->
<div class="@container">
  <div class="flex flex-col @lg:flex-row gap-4">
    <img class="w-full @lg:w-1/3 object-cover" src="...">
    <div class="flex-1">
      <h3 class="text-lg @md:text-xl @lg:text-2xl">Title</h3>
      <p class="text-sm @md:text-base">Description</p>
    </div>
  </div>
</div>
\`\`\`

**Same card in different contexts:**
- Narrow sidebar → Stacked layout
- Wide main area → Side-by-side layout

---

## When to Use

✅ **Use Container Queries:**
- Reusable components
- Sidebar widgets
- Card grids
- Adaptive layouts

❌ **Use Media Queries:**
- Page-level layouts
- Navigation bars
- Hero sections
- Global breakpoints

---

## Summary

Container queries enable:
- ✅ True component responsiveness
- ✅ Reusable across contexts
- ✅ No viewport dependency
- ✅ Better design systems

The future of responsive design! 🚀
`
};
