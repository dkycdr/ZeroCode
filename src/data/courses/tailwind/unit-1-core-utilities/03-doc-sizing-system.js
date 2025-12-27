import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3SizingSystem = {
    id: 'tailwind-u1-doc-3-sizing',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Sizing System Complete Guide',
    duration: '10 min read',
    content: `
# Sizing System Complete Guide

## Width Utilities

### Fixed Widths

| Class | Value |
|-------|-------|
| \`w-0\` | 0 |
| \`w-px\` | 1px |
| \`w-1\` | 0.25rem (4px) |
| \`w-4\` | 1rem (16px) |
| \`w-12\` | 3rem (48px) |
| \`w-64\` | 16rem (256px) |
| \`w-96\` | 24rem (384px) |

### Fractional Widths

| Class | Value | Use Case |
|-------|-------|----------|
| \`w-1/2\` | 50% | Half width |
| \`w-1/3\` | 33.333% | Third |
| \`w-2/3\` | 66.667% | Two thirds |
| \`w-1/4\` | 25% | Quarter |
| \`w-3/4\` | 75% | Three quarters |
| \`w-1/5\` | 20% | Fifth |
| \`w-full\` | 100% | Full width |

### Viewport Widths

\`\`\`html
<div class="w-screen">100vw width</div>
<div class="w-full">100% of parent</div>
\`\`\`

### Min & Max Width

\`\`\`html
<div class="min-w-0">Minimum 0</div>
<div class="min-w-full">Minimum 100%</div>
<div class="max-w-xs">Max 320px</div>
<div class="max-w-md">Max 448px</div>
<div class="max-w-lg">Max 512px</div>
<div class="max-w-xl">Max 576px</div>
<div class="max-w-2xl">Max 672px</div>
<div class="max-w-4xl">Max 896px</div>
<div class="max-w-screen-xl">Max 1280px</div>
\`\`\`

---

## Height Utilities

### Fixed Heights

Same scale as width: \`h-0\`, \`h-4\`, \`h-12\`, \`h-64\`, etc.

### Full Heights

\`\`\`html
<div class="h-screen">100vh height</div>
<div class="h-full">100% of parent</div>
<div class="min-h-screen">Minimum 100vh</div>
\`\`\`

### Dynamic Heights

\`\`\`html
<div class="h-auto">Auto height</div>
<div class="h-fit">Fit content</div>
\`\`\`

---

## Common Patterns

### Centered Container

\`\`\`html
<div class="max-w-4xl mx-auto">
  Centered with max 896px width
</div>
\`\`\`

### Full-Screen Hero

\`\`\`html
<section class="min-h-screen">
  Full viewport height minimum
</section>
\`\`\`

### Image Sizing

\`\`\`html
<img class="w-full h-auto" src="...">
<img class="w-32 h-32 object-cover" src="...">
\`\`\`

### Sidebar Layout

\`\`\`html
<div class="flex">
  <aside class="w-64">Sidebar 256px</aside>
  <main class="flex-1">Main content fills rest</main>
</div>
\`\`\`

---

## Arbitrary Values

\`\`\`html
<div class="w-[347px]">Custom 347px width</div>
<div class="h-[calc(100vh-64px)]">Height minus header</div>
\`\`\`

> [!TIP]
> Use \`max-w-prose\` (65ch) for optimal reading width on text-heavy pages!
`
};
