import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2SpacingScale = {
    id: 'tailwind-u1-doc-2-spacing',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Spacing Scale Mastery',
    duration: '12 min read',
    content: `
# Spacing Scale Mastery

## The Spacing System

Tailwind uses a **base-4 spacing scale** (4px increments) for consistency.

### The Scale

| Class | Size | Pixels | Use Case |
|-------|------|--------|----------|
| \`0\` | 0 | 0px | Reset |
| \`px\` | 1px | 1px | Border-like |
| \`0.5\` | 0.125rem | 2px | Tiny gap |
| \`1\` | 0.25rem | 4px | Minimal |
| \`2\` | 0.5rem | 8px | Small |
| \`3\` | 0.75rem | 12px | Compact |
| \`4\` | 1rem | **16px** | **Base** |
| \`5\` | 1.25rem | 20px | Medium |
| \`6\` | 1.5rem | 24px | Large |
| \`8\` | 2rem | 32px | Section gap |
| \`10\` | 2.5rem | 40px | Large gap |
| \`12\` | 3rem | 48px | Extra large |
| \`16\` | 4rem | 64px | Huge |
| \`20\` | 5rem | 80px | Massive |
| \`24\` | 6rem | 96px | Hero spacing |

---

## Padding Utilities

Add inner spacing with \`p-{size}\`:

### All Sides
\`\`\`html
<div class="p-4">Padding 16px all sides</div>
\`\`\`

### Horizontal (Left + Right)
\`\`\`html
<div class="px-6">24px left and right</div>
\`\`\`

### Vertical (Top + Bottom)
\`\`\`html
<div class="py-3">12px top and bottom</div>
\`\`\`

### Individual Sides
\`\`\`html
<div class="pt-4 pr-6 pb-8 pl-2">
  Top: 16px, Right: 24px, Bottom: 32px, Left: 8px
</div>
\`\`\`

### Padding Utilities Reference

| Utility | Sides |
|---------|-------|
| \`p-4\` | All 4 sides |
| \`px-4\` | Horizontal (left + right) |
| \`py-4\` | Vertical (top + bottom) |
| \`pt-4\` | Top only |
| \`pr-4\` | Right only |
| \`pb-4\` | Bottom only |
| \`pl-4\` | Left only |
| \`ps-4\` | Inline start (left in LTR, right in RTL) |
| \`pe-4\` | Inline end (right in LTR, left in RTL) |

---

## Margin Utilities

Add outer spacing with \`m-{size}\`:

### All Sides
\`\`\`html
<div class="m-4">Margin 16px all sides</div>
\`\`\`

### Horizontal Centering
\`\`\`html
<div class="mx-auto">Centered with auto margins</div>
\`\`\`

### Vertical Spacing
\`\`\`html
<div class="my-8">32px top and bottom margin</div>
\`\`\`

### Negative Margins
\`\`\`html
<div class="-mt-4">Pull up by 16px</div>
<div class="-ml-2">Pull left by 8px</div>
\`\`\`

---

## Gap Utilities (Flexbox/Grid)

Control spacing between flex/grid children:

\`\`\`html
<!-- Flexbox -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-6">
  <div>Cell 1</div>
  <div>Cell 2</div>
  <div>Cell 3</div>
</div>

<!-- Different horizontal and vertical gaps -->
<div class="flex gap-x-4 gap-y-8">
  <!-- Horizontal: 16px, Vertical: 32px -->
</div>
\`\`\`

---

## Space Between Utilities

Add spacing between children (legacy approach):

\`\`\`html
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
<!-- Each item has 16px margin-top except the first -->
\`\`\`

> [!TIP]
> Use \`gap\` for flex/grid and \`space-y\` for regular stacked elements.

---

## Common Patterns

### Button Padding
\`\`\`html
<button class="px-6 py-3">
  <!-- 24px horizontal, 12px vertical -->
  Click Me
</button>
\`\`\`

### Card Padding
\`\`\`html
<div class="p-6">
  <!-- 24px all sides -->
  Card content
</div>
\`\`\`

### Section Spacing
\`\`\`html
<section class="py-20 px-4">
  <!-- 80px top/bottom, 16px left/right -->
  Content
</section>
\`\`\`

### List Spacing
\`\`\`html
<ul class="space-y-2">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
\`\`\`

---

## Real-World Example: Hero Section

\`\`\`html
<section class="py-20 px-4">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-5xl font-bold mb-4">Big Heading</h1>
    <p class="text-xl text-gray-600 mb-8">Subheading text</p>
    <div class="flex gap-4 justify-center">
      <button class="px-8 py-3 bg-blue-600 text-white">CTA 1</button>
      <button class="px-8 py-3 border">CTA 2</button>
    </div>
  </div>
</section>
\`\`\`

**Spacing breakdown:**
- \`py-20\`: 80px section padding
- \`px-4\`: 16px horizontal padding
- \`mb-4\`: 16px below heading
- \`mb-8\`: 32px below subheading
- \`gap-4\`: 16px between buttons
- \`px-8 py-3\`: Button padding

---

## The 8-Point Grid System

Tailwind's spacing follows the **8-point grid** principle:

- Multiples of 4px (4, 8, 12, 16, 24, 32...)
- Creates visual rhythm
- Improves consistency
- Industry standard

---

## Arbitrary Values

Need a custom spacing value?

\`\`\`html
<div class="p-[17px]">Custom 17px padding</div>
<div class="mt-[137px]">Custom 137px margin-top</div>
\`\`\`

> [!WARNING]
> Use arbitrary values sparingly! The spacing scale exists for consistency.

---

## Summary

Spacing utilities give you:
- ✅ **Consistent scale** (4px increments)
- ✅ **Fast layout building** (no CSS)
- ✅ **Visual rhythm** (8-point grid)
- ✅ **Responsive spacing** (breakpoint prefixes)

Master spacing, and your designs will have professional polish! 🎯
`
};
