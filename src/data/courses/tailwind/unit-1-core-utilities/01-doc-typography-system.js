import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1TypographySystem = {
    id: 'tailwind-u1-doc-1-typography',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Typography System Deep Dive',
    duration: '15 min read',
    content: `
# Typography System Deep Dive

## The Typography Scale

Tailwind provides a **constraint-based typography system** that prevents random font sizes and promotes consistency.

### Font Size Utilities

| Class | Size | Line Height | Use Case |
|-------|------|-------------|----------|
| \`text-xs\` | 0.75rem (12px) | 1rem (16px) | Fine print, labels |
| \`text-sm\` | 0.875rem (14px) | 1.25rem (20px) | Small text, captions |
| \`text-base\` | 1rem (16px) | 1.5rem (24px) | Body text (default) |
| \`text-lg\` | 1.125rem (18px) | 1.75rem (28px) | Large body text |
| \`text-xl\` | 1.25rem (20px) | 1.75rem (28px) | Small headings |
| \`text-2xl\` | 1.5rem (24px) | 2rem (32px) | H3 headings |
| \`text-3xl\` | 1.875rem (30px) | 2.25rem (36px) | H2 headings |
| \`text-4xl\` | 2.25rem (36px) | 2.5rem (40px) | H1 headings |
| \`text-5xl\` | 3rem (48px) | 1 | Hero headings |
| \`text-6xl\` | 3.75rem (60px) | 1 | Large hero text |
| \`text-7xl\` | 4.5rem (72px) | 1 | Extra large |
| \`text-8xl\` | 6rem (96px) | 1 | Massive text |
| \`text-9xl\` | 8rem (128px) | 1 | Ultra massive |

### Example Usage

\`\`\`html
<h1 class="text-4xl">Main Heading</h1>
<h2 class="text-3xl">Sub Heading</h2>
<p class="text-base">Body paragraph text</p>
<small class="text-sm">Fine print</small>
\`\`\`

---

## Font Weight

Control text thickness:

| Class | Weight | Visual |
|-------|--------|--------|
| \`font-thin\` | 100 | Very thin |
| \`font-extralight\` | 200 | Extra light |
| \`font-light\` | 300 | Light |
| \`font-normal\` | 400 | **Normal (default)** |
| \`font-medium\` | 500 | Medium |
| \`font-semibold\` | 600 | Semi bold |
| \`font-bold\` | 700 | **Bold** |
| \`font-extrabold\` | 800 | Extra bold |
| \`font-black\` | 900 | Black |

\`\`\`html
<p class="font-light">Light text</p>
<p class="font-normal">Normal text</p>
<p class="font-bold">Bold text</p>
<p class="font-black">Ultra bold text</p>
\`\`\`

---

## Line Height (Leading)

Control spacing between lines:

| Class | Line Height | Use Case |
|-------|-------------|----------|
| \`leading-none\` | 1 | Tight headings |
| \`leading-tight\` | 1.25 | Headings |
| \`leading-snug\` | 1.375 | Short paragraphs |
| \`leading-normal\` | 1.5 | Body text (default) |
| \`leading-relaxed\` | 1.625 | Comfortable reading |
| \`leading-loose\` | 2 | Very spacious |

\`\`\`html
<h1 class="text-4xl leading-tight">Tight Heading</h1>
<p class="text-base leading-relaxed">
  This paragraph has relaxed line height for comfortable reading.
</p>
\`\`\`

---

## Letter Spacing (Tracking)

Adjust space between characters:

| Class | Letter Spacing | Use Case |
|-------|----------------|----------|
| \`tracking-tighter\` | -0.05em | Condensed |
| \`tracking-tight\` | -0.025em | Headings |
| \`tracking-normal\` | 0 | Default |
| \`tracking-wide\` | 0.025em | Uppercase text |
| \`tracking-wider\` | 0.05em | Labels |
| \`tracking-widest\` | 0.1em | Very spread out |

\`\`\`html
<p class="uppercase tracking-wider">TRACKING EXAMPLE</p>
<h1 class="text-5xl tracking-tight">Big Heading</h1>
\`\`\`

---

## Text Alignment

| Class | Effect |
|-------|--------|
| \`text-left\` | Left align |
| \`text-center\` | Center align |
| \`text-right\` | Right align |
| \`text-justify\` | Justify |

---

## Text Transform

| Class | Effect |
|-------|--------|
| \`uppercase\` | CONVERT TO UPPERCASE |
| \`lowercase\` | convert to lowercase |
| \`capitalize\` | Capitalize Each Word |
| \`normal-case\` | Reset to normal |

---

## Text Decoration

| Class | Effect |
|-------|--------|
| \`underline\` | Underline text |
| \`line-through\` | ~~Strike through~~ |
| \`no-underline\` | Remove decoration |

\`\`\`html
<a href="#" class="underline hover:no-underline">Hover to remove underline</a>
<p class="line-through">Deleted text</p>
\`\`\`

---

## Font Family

\`\`\`html
<p class="font-sans">Sans-serif font (default)</p>
<p class="font-serif">Serif font</p>
<p class="font-mono">Monospace font</p>
\`\`\`

---

## Text Color

Control text color with \`text-{color}-{shade}\`:

\`\`\`html
<p class="text-gray-900">Very dark gray</p>
<p class="text-blue-500">Medium blue</p>
<p class="text-red-600">Dark red</p>
\`\`\`

We'll cover the full color system in a dedicated lesson!

---

## Real-World Example: Blog Post

\`\`\`html
<article>
  <!-- Title -->
  <h1 class="text-4xl font-bold leading-tight text-gray-900 mb-4">
    The Ultimate Guide to Tailwind CSS
  </h1>
  
  <!-- Meta info -->
  <p class="text-sm text-gray-500 uppercase tracking-wider mb-6">
    Posted on December 27, 2025
  </p>
  
  <!-- Body -->
  <p class="text-lg leading-relaxed text-gray-700 mb-4">
    Tailwind CSS has revolutionized the way we write CSS...
  </p>
  
  <!-- Quote -->
  <blockquote class="text-xl font-medium italic text-center text-gray-600 border-l-4 border-blue-500 pl-4 my-8">
    "Utility-first CSS is the future of styling."
  </blockquote>
</article>
\`\`\`

---

## Pro Tips

> [!TIP]
> **Use semantic sizing:** \`text-4xl\` for H1, \`text-3xl\` for H2, \`text-base\` for body. This creates visual hierarchy.

> [!TIP]
> **Combine utilities:** \`text-3xl font-bold leading-tight\` creates perfect headings.

> [!WARNING]
> **Don't overuse large sizes:** text-9xl is HUGE. Use sparingly for hero sections only.

---

## Responsive Typography

Make text responsive with breakpoint prefixes:

\`\`\`html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Small on mobile, huge on desktop
</h1>
\`\`\`

We'll cover responsive design in Unit 3!

---

## Summary

Typography utilities in Tailwind give you:
- ✅ **Consistent scale** (no random sizes)
- ✅ **Fast prototyping** (no CSS writing)
- ✅ **Easy maintenance** (change classes, not CSS)
- ✅ **Responsive design** (breakpoint prefixes)

Master typography, and you're halfway to beautiful designs! 🎨
`
};
