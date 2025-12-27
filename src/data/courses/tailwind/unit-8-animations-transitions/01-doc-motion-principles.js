import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1MotionPrinciples = {
    id: 'tailwind-u8-doc-1-principles',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Motion Design Principles',
    duration: '10 min read',
    content: `
# Motion Design Principles

## Why Animation Matters

**Analogy: The Traffic Light**

Imagine if traffic lights changed instantly — no yellow warning. Chaos!

Yellow provides **anticipation**. Your brain prepares for the change.

UI animations work the same way:
- **Guide attention** to what changed
- **Provide feedback** that actions worked
- **Create continuity** between states

---

## The Physics of Good Motion

### 1. Easing: Nothing Moves Linearly

Real objects accelerate and decelerate:

| Easing | When to Use |
|--------|-------------|
| \`ease-out\` | Elements entering (fast start, slow end) |
| \`ease-in\` | Elements leaving (slow start, fast end) |
| \`ease-in-out\` | Elements moving position |
| \`linear\` | Loading spinners only |

\`\`\`html
<!-- Element entering the screen -->
<div class="animate-in ease-out duration-300">

<!-- Element transforming in place -->
<button class="hover:scale-105 transition ease-in-out">
\`\`\`

---

### 2. Duration: The Goldilocks Zone

| Duration | Feels Like | Use For |
|----------|------------|---------|
| 75ms | Instant | Tiny interactions (checkbox) |
| 150ms | Snappy | Button hover, small changes |
| 300ms | Natural | Cards, modals appearing |
| 500ms | Deliberate | Major view changes |
| 1000ms+ | Slow | Celebration animations only |

> [!TIP]
> When in doubt, use 200-300ms. It's the "feels right" zone.

---

### 3. Properties: GPU vs CPU

**GPU-accelerated (smooth 60fps):**
- \`transform\` (translate, scale, rotate)
- \`opacity\`

**CPU-intensive (can be janky):**
- \`width\`, \`height\`
- \`top\`, \`left\`, \`right\`, \`bottom\`
- \`margin\`, \`padding\`

\`\`\`html
<!-- ✅ GPU-accelerated hover -->
<div class="hover:-translate-y-1 hover:scale-105 transition-transform">

<!-- ❌ CPU-intensive, avoid -->
<div class="hover:pt-8 transition-all">
\`\`\`

---

## Tailwind's Transition System

### Available Properties

\`\`\`html
transition-none      → No transitions
transition-all       → All properties (⚠️ heavy)
transition-colors    → Color-related only
transition-opacity   → Opacity only
transition-shadow    → Box-shadow only
transition-transform → Transform only
transition           → Standard set (recommended)
\`\`\`

### Duration Modifiers

\`\`\`html
duration-75    → 75ms
duration-100   → 100ms  
duration-150   → 150ms (fast)
duration-200   → 200ms (snappy)
duration-300   → 300ms (natural)
duration-500   → 500ms (deliberate)
duration-700   → 700ms
duration-1000  → 1000ms
\`\`\`

### Delay Modifiers

\`\`\`html
delay-75, delay-100, delay-150...
\`\`\`

Delay is useful for staggered animations (list items appearing one by one).

---

## Key Takeaways

✅ **ease-out** for entering, **ease-in** for leaving
✅ **150-300ms** is the sweet spot
✅ **transform and opacity** are GPU-accelerated
✅ **transition-transform** is lighter than transition-all
✅ **Delay** creates staggered effects
`
};
