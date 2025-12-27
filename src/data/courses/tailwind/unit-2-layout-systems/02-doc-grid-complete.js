import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2GridComplete = {
    id: 'tailwind-u2-doc-2-grid',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'CSS Grid Complete Guide',
    duration: '15 min read',
    content: `
# CSS Grid Complete Guide

## What is CSS Grid?

**CSS Grid** is a two-dimensional layout system for creating complex layouts with rows and columns. Perfect for:
- Page layouts
- Card grids
- Dashboard layouts
- Magazine-style designs

---

## Enable Grid

\`\`\`html
<div class="grid">
  <!-- Children become grid items -->
</div>
\`\`\`

---

## Grid Template Columns

Define column structure:

\`\`\`html
<!-- 3 equal columns -->
<div class="grid grid-cols-3">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- 2 columns -->
<div class="grid grid-cols-2 gap-4">...</div>

<!-- 4 columns -->
<div class="grid grid-cols-4 gap-4">...</div>

<!-- 6 columns (maximum in Tailwind) -->
<div class="grid grid-cols-6 gap-2">...</div>
\`\`\`

---

## Grid Template Rows

Define row structure:

\`\`\`html
<!-- 3 equal rows -->
<div class="grid grid-rows-3 h-screen">
  <div>Row 1</div>
  <div>Row 2</div>
  <div>Row 3</div>
</div>
\`\`\`

---

## Gap

Add spacing between grid cells:

\`\`\`html
<div class="grid grid-cols-3 gap-4">...</div>
<div class="grid grid-cols-2 gap-x-4 gap-y-8">...</div>
\`\`\`

---

## Column Span

Make items span multiple columns:

\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Spans 2 columns</div>
  <div>1 column</div>
  <div>1 column</div>
  <div>1 column</div>
  <div>1 column</div>
</div>

<!-- Span all columns -->
<div class="grid grid-cols-3">
  <div class="col-span-full">Full width</div>
</div>
\`\`\`

---

## Row Span

Make items span multiple rows:

\`\`\`html
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-2">Spans 2 rows</div>
  <div>1 row</div>
  <div>1 row</div>
</div>
\`\`\`

---

## Grid Flow

Control how auto-placed items flow:

\`\`\`html
<div class="grid grid-flow-row">Row by row (default)</div>
<div class="grid grid-flow-col">Column by column</div>
<div class="grid grid-flow-dense">Fill holes</div>
\`\`\`

---

## Auto Columns/Rows

Control size of implicitly created tracks:

\`\`\`html
<div class="grid grid-flow-col auto-cols-max">
  <!-- Columns size to content -->
</div>

<div class="grid grid-flow-col auto-cols-fr">
  <!-- Columns share space equally -->
</div>
\`\`\`

---

## Justify & Align Items

Position items within grid cells:

\`\`\`html
<!-- Horizontal alignment -->
<div class="grid justify-items-start">Left aligned</div>
<div class="grid justify-items-center">Centered</div>
<div class="grid justify-items-end">Right aligned</div>

<!-- Vertical alignment -->
<div class="grid items-start">Top aligned</div>
<div class="grid items-center">Centered</div>
<div class="grid items-end">Bottom aligned</div>
\`\`\`

---

## Justify & Align Content

Position the entire grid:

\`\`\`html
<!-- Horizontal grid positioning -->
<div class="grid h-64 justify-start">Grid at start</div>
<div class="grid h-64 justify-center">Grid centered</div>
<div class="grid h-64 justify-end">Grid at end</div>

<!-- Vertical grid positioning -->
<div class="grid h-64 content-start">Grid at top</div>
<div class="grid h-64 content-center">Grid centered</div>
<div class="grid h-64 content-end">Grid at bottom</div>
\`\`\`

---

## Real-World Examples

### Responsive Product Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Product 1</div>
  <div>Product 2</div>
  <div>Product 3</div>
  <div>Product 4</div>
</div>
\`\`\`

### Dashboard Layout

\`\`\`html
<div class="grid grid-cols-4 grid-rows-3 gap-4 h-screen p-4">
  <!-- Sidebar -->
  <aside class="row-span-3 bg-gray-800">Sidebar</aside>
  
  <!-- Header -->
  <header class="col-span-3 bg-white">Header</header>
  
  <!-- Main Content -->
  <main class="col-span-2 row-span-2 bg-white">Main</main>
  
  <!-- Widgets -->
  <aside class="row-span-2 bg-white">Widgets</aside>
</div>
\`\`\`

### Magazine Layout

\`\`\`html
<div class="grid grid-cols-6 gap-4">
  <!-- Hero article spans 4 columns -->
  <article class="col-span-4 row-span-2">
    <img src="hero.jpg" class="w-full h-full object-cover">
  </article>
  
  <!-- Side articles -->
  <article class="col-span-2">Article 2</article>
  <article class="col-span-2">Article 3</article>
  
  <!-- Bottom articles -->
  <article class="col-span-2">Article 4</article>
  <article class="col-span-2">Article 5</article>
  <article class="col-span-2">Article 6</article>
</div>
\`\`\`

---

## Grid vs Flexbox

| Feature | Flexbox | Grid |
|---------|---------|------|
| **Dimensions** | 1D (row OR column) | 2D (rows AND columns) |
| **Best For** | Navigation, buttons | Page layouts, grids |
| **Item Sizing** | Content-based | Track-based |
| **Alignment** | Single axis | Both axes |
| **Use When** | Linear layouts | Complex layouts |

---

## Quick Reference

**Enable Grid:**
- \`grid\` | \`inline-grid\`

**Columns:**
- \`grid-cols-{n}\` (1-12)
- \`col-span-{n}\` | \`col-span-full\`

**Rows:**
- \`grid-rows-{n}\` (1-6)
- \`row-span-{n}\` | \`row-span-full\`

**Gap:**
- \`gap-{size}\` | \`gap-x-{size}\` | \`gap-y-{size}\`

**Flow:**
- \`grid-flow-row\` | \`grid-flow-col\` | \`grid-flow-dense\`

> [!TIP]
> **Pro Tip:** Start with \`grid grid-cols-{n} gap-{size}\`. This covers 80% of grid use cases!
`
};
