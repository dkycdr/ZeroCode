import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1MobileFirstPhilosophy = {
  id: 'tailwind-u9-doc-1-mobile-first',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'The Mobile-First Philosophy',
  duration: '10 min read',
  content: `
# The Mobile-First Philosophy

## Why Mobile-First?

**Analogy: Packing for a Trip**

When packing for a trip, do you:
- A) Start with everything and remove items?
- B) Start with essentials and add if space allows?

Option B is smarter — and that's mobile-first design!

---

## The Mobile Reality

- **60%+ of web traffic** is mobile
- Mobile users have **limited patience** (slower connections)
- Mobile forces you to **prioritize content**

---

## Desktop-First Problems

\`\`\`css
/* Desktop-first (traditional) */
.sidebar {
  width: 300px;
  float: left;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;  /* Hide it? Move it? Rebuild it? */
  }
}
\`\`\`

**Problems:**
- Desktop complexity must be undone for mobile
- Easy to forget mobile edge cases
- Larger CSS files (overrides on overrides)

---

## Mobile-First Solution

\`\`\`css
/* Mobile-first (Tailwind way) */
.sidebar {
  display: none;  /* Hidden on mobile */
}

@media (min-width: 768px) {
  .sidebar {
    display: block;
    width: 300px;
  }
}
\`\`\`

**Benefits:**
- Start simple, add complexity for larger screens
- Mobile is the default, not an afterthought
- Smaller CSS (additive instead of subtractive)

---

## Tailwind Is Mobile-First by Default

Unprefixed utilities apply to **all screen sizes**:

\`\`\`html
<div class="text-sm">  <!-- Applies to ALL screens -->
<div class="md:text-lg">  <!-- Only md and UP -->
\`\`\`

The \`md:\` prefix means "from medium screens upward", not "only on medium".

---

## Tailwind Breakpoints

| Prefix | Min-width | Devices |
|--------|-----------|---------|
| (none) | 0px | All (mobile base) |
| \`sm:\` | 640px | Landscape phones |
| \`md:\` | 768px | Tablets |
| \`lg:\` | 1024px | Laptops |
| \`xl:\` | 1280px | Desktops |
| \`2xl:\` | 1536px | Large screens |

---

## The Mental Model

**Think in layers:**

1. **Base layer** (mobile): Essential layout, stacked
2. **sm:** Maybe side-by-side on landscape phones
3. **md:** Multi-column, sidebar appears
4. **lg:** Full desktop layout
5. **xl/2xl:** Wider containers, more spacing

---

## Key Takeaways

✅ **Tailwind is mobile-first** by default
✅ **Unprefixed = all screens** (starting from mobile)
✅ **Prefixes add styles** for larger screens
✅ **Start simple**, progressively enhance
✅ **Test on mobile first**, not as an afterthought
`
};
