import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Positioning = {
    id: 'tailwind-u2-doc-3-positioning',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Positioning & Z-Index Mastery',
    duration: '12 min read',
    content: `
# Positioning & Z-Index Mastery

## Position Types

| Class | CSS Value | Behavior |
|-------|-----------|----------|
| \`static\` | static | Default, normal flow |
| \`relative\` | relative | Offset from normal position |
| \`absolute\` | absolute | Removed from flow, positioned relative to parent |
| \`fixed\` | fixed | Positioned relative to viewport |
| \`sticky\` | sticky | Toggles between relative and fixed |

---

## Static (Default)

Elements follow normal document flow:

\`\`\`html
<div class="static">Normal positioning</div>
\`\`\`

---

## Relative Positioning

Offset from normal position without affecting other elements:

\`\`\`html
<div class="relative top-4 left-8">
  Offset 16px down, 32px right
</div>
\`\`\`

**Use cases:**
- Container for absolutely positioned children
- Subtle adjustments

---

## Absolute Positioning

Removed from document flow, positioned relative to nearest positioned ancestor:

\`\`\`html
<div class="relative">
  <div class="absolute top-0 right-0">
    Top-right corner
  </div>
</div>
\`\`\`

**Common patterns:**

### Badge on Image

\`\`\`html
<div class="relative">
  <img src="product.jpg">
  <span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
    SALE
  </span>
</div>
\`\`\`

### Close Button

\`\`\`html
<div class="relative p-4 bg-white rounded-lg">
  <button class="absolute top-2 right-2">×</button>
  <p>Modal content</p>
</div>
\`\`\`

---

## Fixed Positioning

Positioned relative to viewport, stays in place on scroll:

\`\`\`html
<!-- Fixed header -->
<header class="fixed top-0 left-0 right-0 bg-white shadow z-50">
  Navigation
</header>

<!-- Fixed "Scroll to top" button -->
<button class="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full">
  ↑
</button>
\`\`\`

---

## Sticky Positioning

Toggles between relative and fixed based on scroll position:

\`\`\`html
<!-- Sticky header that scrolls then sticks -->
<header class="sticky top-0 bg-white shadow">
  Sticky Navigation
</header>

<!-- Sticky sidebar -->
<aside class="sticky top-20 h-screen">
  Table of Contents
</aside>
\`\`\`

---

## Offset Utilities

Position elements precisely:

### Top, Right, Bottom, Left

\`\`\`html
<div class="absolute top-0">Top edge</div>
<div class="absolute top-4">16px from top</div>
<div class="absolute top-1/2">50% from top</div>
<div class="absolute top-full">100% from top</div>

<!-- Negative values -->
<div class="absolute -top-4">Pull up by 16px</div>

<!-- All edges -->
<div class="absolute inset-0">Full coverage</div>
<div class="absolute inset-x-0">Full width</div>
<div class="absolute inset-y-0">Full height</div>
\`\`\`

---

## Z-Index (Stacking Order)

Control which element appears on top:

| Class | Z-Index Value |
|-------|---------------|
| \`z-0\` | 0 |
| \`z-10\` | 10 |
| \`z-20\` | 20 |
| \`z-30\` | 30 |
| \`z-40\` | 40 |
| \`z-50\` | 50 |
| \`z-auto\` | auto |

\`\`\`html
<!-- Layering example -->
<div class="relative">
  <div class="absolute z-10">Middle layer</div>
  <div class="absolute z-20">Top layer</div>
  <div class="absolute z-0">Bottom layer</div>
</div>
\`\`\`

### Recommended Z-Index Scale

\`\`\`
z-0   : Base layer
z-10  : Dropdowns, tooltips
z-20  : Sticky headers
z-30  : Modals
z-40  : Notifications
z-50  : Full-screen overlays
\`\`\`

---

## Real-World Examples

### Modal Overlay

\`\`\`html
<!-- Backdrop -->
<div class="fixed inset-0 bg-black/50 z-40"></div>

<!-- Modal -->
<div class="fixed inset-0 z-50 flex items-center justify-center">
  <div class="bg-white p-6 rounded-lg max-w-md">
    Modal content
  </div>
</div>
\`\`\`

### Dropdown Menu

\`\`\`html
<div class="relative">
  <button>Menu</button>
  <div class="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg z-10">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
  </div>
</div>
\`\`\`

### Hero with Overlay Text

\`\`\`html
<div class="relative h-screen">
  <!-- Background image -->
  <img src="hero.jpg" class="absolute inset-0 w-full h-full object-cover">
  
  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-black/50 z-10"></div>
  
  <!-- Content -->
  <div class="relative z-20 flex items-center justify-center h-full text-white">
    <h1 class="text-6xl font-bold">Hero Title</h1>
  </div>
</div>
\`\`\`

---

## Pro Tips

> [!TIP]
> **Centering with Absolute:** Use \`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2\` for perfect centering!

> [!WARNING]
> **Avoid z-index wars:** Use a consistent scale (0, 10, 20...) instead of random values.

> [!TIP]
> **Sticky sidebars:** Add \`top-{offset}\` to account for fixed headers!

---

## Quick Reference

**Position Types:**
- \`static\` | \`relative\` | \`absolute\` | \`fixed\` | \`sticky\`

**Offsets:**
- \`top-{size}\` | \`right-{size}\` | \`bottom-{size}\` | \`left-{size}\`
- \`inset-{size}\` | \`inset-x-{size}\` | \`inset-y-{size}\`

**Z-Index:**
- \`z-{0|10|20|30|40|50}\` | \`z-auto\`
`
};
