import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4ColorsPalette = {
    id: 'tailwind-u1-doc-4-colors',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Color System & Palette',
    duration: '12 min read',
    content: `
# Color System & Palette

## The Color Scale

Tailwind provides **10 shades** (50-900) for each color:

- **50**: Lightest (backgrounds)
- **100-200**: Very light
- **300-400**: Light
- **500**: **Base color**
- **600-700**: Dark
- **800-900**: Very dark (text)

---

## Core Colors

### Gray Scale

\`\`\`html
<div class="bg-gray-50">Lightest gray</div>
<div class="bg-gray-100">Very light gray</div>
<div class="bg-gray-500">Medium gray</div>
<div class="bg-gray-900">Almost black</div>
\`\`\`

### Primary Colors

| Color | Use Case |
|-------|----------|
| **blue** | Primary actions, links |
| **green** | Success, positive |
| **red** | Errors, destructive |
| **yellow** | Warnings, highlights |
| **purple** | Secondary actions |
| **pink** | Accent, fun |
| **indigo** | Professional, tech |
| **teal** | Calm, nature |
| **orange** | Energy, CTA |

---

## Color Utilities

### Background Colors

\`\`\`html
<div class="bg-blue-500">Blue background</div>
<div class="bg-red-600">Dark red background</div>
\`\`\`

### Text Colors

\`\`\`html
<p class="text-gray-900">Dark text</p>
<p class="text-blue-600">Blue text</p>
\`\`\`

### Border Colors

\`\`\`html
<div class="border border-gray-300">Gray border</div>
<div class="border-2 border-blue-500">Thick blue border</div>
\`\`\`

---

## Opacity

Control transparency with opacity suffixes:

\`\`\`html
<div class="bg-blue-500/50">50% opacity blue</div>
<div class="bg-black/25">25% opacity black</div>
<div class="text-gray-900/80">80% opacity text</div>
\`\`\`

---

## Common Color Patterns

### Primary Button

\`\`\`html
<button class="bg-blue-600 text-white hover:bg-blue-700">
  Click Me
</button>
\`\`\`

### Success Alert

\`\`\`html
<div class="bg-green-100 text-green-800 border border-green-300">
  Success message
</div>
\`\`\`

### Card Shadow

\`\`\`html
<div class="bg-white text-gray-900 shadow-lg">
  Card content
</div>
\`\`\`

---

## Semantic Color Usage

| Intent | Background | Text | Border |
|--------|------------|------|--------|
| **Info** | blue-50 | blue-900 | blue-200 |
| **Success** | green-50 | green-900 | green-200 |
| **Warning** | yellow-50 | yellow-900 | yellow-200 |
| **Error** | red-50 | red-900 | red-200 |

---

## Arbitrary Colors

\`\`\`html
<div class="bg-[#bada55]">Custom hex</div>
<div class="text-[rgb(123,45,67)]">Custom RGB</div>
\`\`\`

> [!TIP]
> Stick to the color scale for consistency. Use arbitrary values only when necessary!
`
};
