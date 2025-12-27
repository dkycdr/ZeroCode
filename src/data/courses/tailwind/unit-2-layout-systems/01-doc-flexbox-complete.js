import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1FlexboxComplete = {
    id: 'tailwind-u2-doc-1-flexbox',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Flexbox Complete Guide',
    duration: '15 min read',
    content: `
# Flexbox Complete Guide

## What is Flexbox?

**Flexbox** is a one-dimensional layout system for arranging items in rows or columns. It's perfect for:
- Navigation bars
- Card layouts
- Centering elements
- Distributing space evenly

---

## Enable Flexbox

\`\`\`html
<div class="flex">
  <!-- Children become flex items -->
</div>
\`\`\`

---

## Flex Direction

Control the main axis direction:

\`\`\`html
<div class="flex flex-row">Horizontal (default)</div>
<div class="flex flex-row-reverse">Horizontal reversed</div>
<div class="flex flex-col">Vertical</div>
<div class="flex flex-col-reverse">Vertical reversed</div>
\`\`\`

---

## Justify Content (Main Axis)

Align items along the main axis:

| Class | Effect | Use Case |
|-------|--------|----------|
| \`justify-start\` | Items at start | Default alignment |
| \`justify-center\` | Items centered | Center navigation |
| \`justify-end\` | Items at end | Right-aligned menu |
| \`justify-between\` | Space between items | Header with logo & menu |
| \`justify-around\` | Space around items | Equal spacing |
| \`justify-evenly\` | Even space | Perfectly distributed |

\`\`\`html
<!-- Logo on left, menu on right -->
<div class="flex justify-between">
  <div>Logo</div>
  <nav>Menu</nav>
</div>
\`\`\`

---

## Align Items (Cross Axis)

Align items along the cross axis:

| Class | Effect |
|-------|--------|
| \`items-start\` | Top aligned |
| \`items-center\` | Vertically centered |
| \`items-end\` | Bottom aligned |
| \`items-baseline\` | Baseline aligned |
| \`items-stretch\` | Stretch to fill |

\`\`\`html
<!-- Perfect centering -->
<div class="flex items-center justify-center h-screen">
  <div>Centered Content</div>
</div>
\`\`\`

---

## Gap

Add space between flex items:

\`\`\`html
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Different horizontal and vertical gaps -->
<div class="flex flex-wrap gap-x-4 gap-y-8">
  <!-- Items have 16px horizontal, 32px vertical spacing -->
</div>
\`\`\`

---

## Flex Wrap

Control wrapping behavior:

\`\`\`html
<div class="flex flex-wrap">Wraps to new line</div>
<div class="flex flex-nowrap">Never wraps (default)</div>
<div class="flex flex-wrap-reverse">Wraps in reverse</div>
\`\`\`

---

## Flex Grow & Shrink

Control how items grow/shrink:

\`\`\`html
<!-- Item grows to fill space -->
<div class="flex">
  <div class="flex-1">Grows</div>
  <div>Fixed</div>
</div>

<!-- Specific grow values -->
<div class="flex">
  <div class="flex-grow">Grow</div>
  <div class="flex-shrink">Shrink</div>
  <div class="flex-none">Fixed size</div>
</div>
\`\`\`

---

## Align Self

Override align-items for individual items:

\`\`\`html
<div class="flex items-center h-32">
  <div class="self-start">Top</div>
  <div class="self-center">Center</div>
  <div class="self-end">Bottom</div>
</div>
\`\`\`

---

## Order

Change visual order of flex items:

\`\`\`html
<div class="flex">
  <div class="order-3">Third</div>
  <div class="order-1">First</div>
  <div class="order-2">Second</div>
</div>
\`\`\`

---

## Real-World Examples

### Navbar

\`\`\`html
<nav class="flex items-center justify-between px-6 py-4 bg-white shadow">
  <div class="text-2xl font-bold">Logo</div>
  <div class="flex gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>
\`\`\`

### Card Grid

\`\`\`html
<div class="flex flex-wrap gap-6">
  <div class="flex-1 min-w-[300px]">Card 1</div>
  <div class="flex-1 min-w-[300px]">Card 2</div>
  <div class="flex-1 min-w-[300px]">Card 3</div>
</div>
\`\`\`

### Sidebar Layout

\`\`\`html
<div class="flex h-screen">
  <aside class="w-64 bg-gray-800">Sidebar</aside>
  <main class="flex-1 overflow-auto">Content</main>
</div>
\`\`\`

---

## Quick Reference Card

**Enable Flexbox:**
- \`flex\` | \`inline-flex\`

**Direction:**
- \`flex-row\` | \`flex-col\` | \`flex-row-reverse\` | \`flex-col-reverse\`

**Main Axis (Justify):**
- \`justify-start\` | \`justify-center\` | \`justify-end\` | \`justify-between\` | \`justify-around\` | \`justify-evenly\`

**Cross Axis (Align):**
- \`items-start\` | \`items-center\` | \`items-end\` | \`items-baseline\` | \`items-stretch\`

**Spacing:**
- \`gap-{size}\` | \`gap-x-{size}\` | \`gap-y-{size}\`

**Wrapping:**
- \`flex-wrap\` | \`flex-nowrap\` | \`flex-wrap-reverse\`

**Item Control:**
- \`flex-1\` | \`flex-auto\` | \`flex-none\` | \`flex-grow\` | \`flex-shrink\`

> [!TIP]
> **Pro Tip:** For most layouts, you only need \`flex\`, \`gap\`, \`items-center\`, and \`justify-between\`. Master these four first!
`
};
