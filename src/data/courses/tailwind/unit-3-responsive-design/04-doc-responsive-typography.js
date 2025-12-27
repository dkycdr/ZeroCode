import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4ResponsiveTypography = {
    id: 'tailwind-u3-doc-4-typography',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Responsive Typography',
    duration: '8 min read',
    content: `
# Responsive Typography

## Scaling Text Responsively

Typography should adapt to screen size for optimal readability.

### Basic Responsive Text

\`\`\`html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  <!-- Mobile: 24px → Tablet: 36px → Desktop: 60px -->
  Responsive Heading
</h1>
\`\`\`

---

## Typography Scale Strategy

### Mobile-First Approach

\`\`\`html
<!-- Article Title -->
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Article Title
</h1>

<!-- Section Heading -->
<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
  Section Heading
</h2>

<!-- Body Text -->
<p class="text-base sm:text-lg md:text-xl leading-relaxed">
  Body paragraph with good readability across devices.
</p>
\`\`\`

---

## Line Height Responsiveness

\`\`\`html
<p class="text-base md:text-lg leading-normal md:leading-relaxed">
  Tighter line height on mobile, more spacious on desktop
</p>
\`\`\`

---

## Responsive Text Alignment

\`\`\`html
<!-- Centered on mobile, left-aligned on desktop -->
<h1 class="text-center md:text-left">
  Heading
</h1>

<!-- Right-aligned on desktop -->
<p class="text-left lg:text-right">
  Caption
</p>
\`\`\`

---

## Fluid Typography with Clamp

\`\`\`html
<!-- Using arbitrary values for fluid scaling -->
<h1 class="text-[clamp(2rem,5vw,4rem)]">
  Fluid Heading
</h1>
\`\`\`

---

## Pro Tips

> [!TIP]
> **Readable Line Lengths:** Max 65-75 characters per line. Use \`max-w-prose\` (65ch)

> [!TIP]
> **Consistent Scale:** Increment by 1 size per breakpoint for smooth transitions

> [!WARNING]
> **Avoid Huge Jumps:** Don't go from text-sm to text-6xl suddenly

---

## Summary

Responsive typography:
- ✅ Scales with viewport
- ✅ Maintains readability
- ✅ Uses consistent increments
- ✅ Adapts line height too
`
};
