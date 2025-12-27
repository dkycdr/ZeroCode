import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2TransitionsTransforms = {
    id: 'tailwind-u4-doc-2-transitions',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Transitions & Transforms',
    duration: '10 min read',
    content: `
# Transitions & Transforms

## CSS Transitions

Smooth animations between states:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 transition">
  Smooth color change
</button>

<!-- Control duration -->
<div class="transition duration-150">Fast (150ms)</div>
<div class="transition duration-300">Normal (300ms)</div>
<div class="transition duration-700">Slow (700ms)</div>

<!-- Control easing -->
<div class="transition ease-linear">Linear</div>
<div class="transition ease-in">Ease in</div>
<div class="transition ease-out">Ease out</div>
<div class="transition ease-in-out">Ease in-out</div>

<!-- Control delay -->
<div class="transition delay-150">150ms delay</div>
\`\`\`

## Transform Properties

### Scale

\`\`\`html
<div class="scale-50">50% size</div>
<div class="scale-100 hover:scale-110">Grow on hover</div>
<div class="scale-125">125% size</div>
\`\`\`

### Rotate

\`\`\`html
<div class="rotate-45">45° rotation</div>
<div class="hover:rotate-180 transition">180° on hover</div>
<div class="-rotate-90">-90° rotation</div>
\`\`\`

### Translate

\`\`\`html
<div class="translate-x-4">Move right 16px</div>
<div class="translate-y-8">Move down 32px</div>
<div class="hover:translate-y-2 transition">Lift on hover</div>
\`\`\`

### Skew

\`\`\`html
<div class="skew-x-12">Skew horizontally</div>
<div class="skew-y-6">Skew vertically</div>
\`\`\`

## Combining Transforms

\`\`\`html
<div class="hover:scale-110 hover:rotate-6 hover:-translate-y-1 transition">
  Multi-transform on hover
</div>
\`\`\`

## Real Examples

### Lift Card

\`\`\`html
<div class="hover:shadow-xl hover:-translate-y-2 transition duration-300">
  Lifts on hover
</div>
\`\`\`

### Button Press

\`\`\`html
<button class="active:scale-95 transition">
  Shrinks when clicked
</button>
\`\`\`

### Smooth Everything

\`\`\`html
<div class="transition-all hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
  Smooth all properties
</div>
\`\`\`

---

## Transition Properties

| Utility | CSS Property |
|---------|--------------|
| \`transition\` | All properties |
| \`transition-colors\` | Colors only |
| \`transition-opacity\` | Opacity only |
| \`transition-shadow\` | Box shadow only |
| \`transition-transform\` | Transform only |

---

## Duration Scale

| Class | Duration |
|-------|----------|
| \`duration-75\` | 75ms |
| \`duration-100\` | 100ms |
| \`duration-150\` | 150ms |
| \`duration-200\` | 200ms |
| \`duration-300\` | 300ms (default) |
| \`duration-500\` | 500ms |
| \`duration-700\` | 700ms |
| \`duration-1000\` | 1000ms (1s) |

---

## Best Practices

> [!TIP]
> **Use transition, not transition-all:** Specify exact properties for better performance

> [!TIP]
> **Duration sweet spot:** 200-300ms feels natural for most interactions

> [!WARNING]
> **Don't over-animate:** Too many transitions can feel sluggish

---

## Summary

Master transitions and transforms for:
- ✅ Smooth state changes
- ✅ Interactive feedback
- ✅ Polished user experience
- ✅ Modern aesthetic
`
};
