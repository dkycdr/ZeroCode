import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2TransitionSystem = {
  id: 'tailwind-u8-doc-2-transitions',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Tailwind Transition Deep Dive',
  duration: '12 min read',
  content: `
# Tailwind Transition Deep Dive

## Building Blocks

Every transition needs 3 things:
1. **Property** — What to animate
2. **Duration** — How long
3. **Timing** — Acceleration curve

\`\`\`html
<button class="transition-colors duration-200 ease-out hover:bg-blue-600">
\`\`\`

---

## Common Transition Patterns

### The Hover Lift

Creates a "floating card" effect:

\`\`\`html
<div class="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  Card content
</div>
\`\`\`

### The Button Press

Tactile feedback for buttons:

\`\`\`html
<button class="transition-all duration-150 
               hover:-translate-y-1 hover:shadow-lg
               active:translate-y-0 active:shadow-md">
  Click Me
</button>
\`\`\`

### The Scale Grow

For images and avatars:

\`\`\`html
<img class="transition-transform duration-300 hover:scale-110">
\`\`\`

### The Fade In/Out

For overlays and modals:

\`\`\`html
<div class="transition-opacity duration-300 opacity-0 hover:opacity-100">
  Hidden content
</div>
\`\`\`

---

## Focus States

Always animate focus for accessibility:

\`\`\`html
<input class="transition-all duration-200
              border-2 border-gray-300
              focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
\`\`\`

---

## Combining Transforms

Stack multiple transforms:

\`\`\`html
<button class="transition-transform duration-300 
               hover:scale-105 hover:-translate-y-1 hover:rotate-1">
  Playful Button
</button>
\`\`\`

---

## The Group Pattern

Animate children when parent is hovered:

\`\`\`html
<div class="group">
  <img class="transition-transform duration-300 group-hover:scale-110">
  <div class="transition-opacity duration-300 opacity-0 group-hover:opacity-100">
    Overlay text
  </div>
</div>
\`\`\`

---

## Performance Tips

### ✅ DO

\`\`\`html
<!-- Lightweight transitions -->
<div class="transition-transform duration-300">
<div class="transition-opacity duration-200">
<div class="transition-colors duration-150">
\`\`\`

### ❌ AVOID

\`\`\`html
<!-- Heavy transitions -->
<div class="transition-all">  <!-- Animates everything -->
<div class="transition-[width]">  <!-- CPU-intensive -->
\`\`\`

---

## Staggered Animations

Using delay for sequential effects:

\`\`\`html
<ul>
  <li class="opacity-0 animate-fade-in delay-0">Item 1</li>
  <li class="opacity-0 animate-fade-in delay-100">Item 2</li>
  <li class="opacity-0 animate-fade-in delay-200">Item 3</li>
</ul>
\`\`\`

---

## Key Takeaways

✅ **transition + duration + ease** = Complete transition
✅ **hover:-translate-y + shadow** = Lift effect
✅ **active:translate-y-0** = Press effect
✅ **group-hover:** = Child animations on parent hover
✅ **delay-** = Staggered entries
`
};
