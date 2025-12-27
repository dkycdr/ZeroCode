import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3ColorSystemDark = {
    id: 'tailwind-u7-doc-3-colors',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Color Systems for Dark Mode',
    duration: '10 min read',
    content: `
# Color Systems for Dark Mode

## The Problem: Inverting Colors Doesn't Work

You might think: "Just swap white with black!"

\`\`\`html
<!-- ❌ Naive approach -->
Light: bg-white, text-black
Dark:  bg-black, text-white
\`\`\`

**Why this fails:**
- Pure black is too harsh
- Colors look wrong on dark backgrounds
- Shadows become invisible
- Links and accents clash

---

## The Professional Approach: Semantic Colors

### Background Layers

| Layer | Light Mode | Dark Mode |
|-------|------------|-----------|
| Page background | \`bg-gray-50\` | \`dark:bg-gray-950\` |
| Surface (cards) | \`bg-white\` | \`dark:bg-gray-900\` |
| Elevated surface | \`bg-gray-50\` | \`dark:bg-gray-800\` |
| Overlay | \`bg-white\` | \`dark:bg-gray-900\` |

### Text Hierarchy

| Type | Light Mode | Dark Mode |
|------|------------|-----------|
| Primary text | \`text-gray-900\` | \`dark:text-gray-100\` |
| Secondary | \`text-gray-600\` | \`dark:text-gray-400\` |
| Muted | \`text-gray-400\` | \`dark:text-gray-500\` |
| Disabled | \`text-gray-300\` | \`dark:text-gray-600\` |

---

## Brand Colors in Dark Mode

Colors that pop on white may overwhelm on dark:

\`\`\`html
<!-- ❌ Same blue looks too bright on dark -->
<button class="bg-blue-600 dark:bg-blue-600">

<!-- ✅ Adjust saturation for dark mode -->
<button class="bg-blue-600 dark:bg-blue-500">
\`\`\`

**Rule of thumb:**
- Use lighter shades (500 instead of 600) in dark mode
- Reduce saturation for large color areas
- Keep full saturation for small accents (icons, badges)

---

## Shadows in Dark Mode

Shadows work differently on dark backgrounds:

\`\`\`html
<!-- Light mode: shadow provides depth -->
<div class="shadow-lg dark:shadow-none dark:border dark:border-gray-800">
\`\`\`

**Options for dark mode:**
1. Remove shadows, add subtle border
2. Use glow effect instead
3. Adjust shadow opacity

---

## Images and Media

Images designed for light backgrounds can be jarring:

\`\`\`html
<!-- Dim images in dark mode -->
<img class="dark:opacity-90 dark:brightness-90">

<!-- Or apply filter -->
<img class="dark:invert">  <!-- For icons/logos -->
\`\`\`

---

## Borders and Dividers

\`\`\`html
<!-- Borders need to flip too -->
<div class="border border-gray-200 dark:border-gray-700">

<hr class="border-gray-200 dark:border-gray-800">
\`\`\`

---

## Focus and Interactive States

\`\`\`html
<input class="focus:ring-blue-500 dark:focus:ring-blue-400
              focus:border-blue-500 dark:focus:border-blue-400">

<button class="hover:bg-gray-100 dark:hover:bg-gray-800">
\`\`\`

---

## Complete Component Example

\`\`\`html
<div class="bg-white dark:bg-gray-900 
            rounded-xl shadow-lg dark:shadow-none 
            dark:border dark:border-gray-800">
  <h2 class="text-gray-900 dark:text-white font-bold">
    Card Title
  </h2>
  <p class="text-gray-600 dark:text-gray-400">
    Description text...
  </p>
  <button class="bg-blue-600 dark:bg-blue-500 
                 hover:bg-blue-700 dark:hover:bg-blue-400 
                 text-white">
    Action
  </button>
</div>
\`\`\`

---

## Key Takeaways

✅ **Use gray-900/950** for dark backgrounds, not pure black
✅ **Reduce text contrast** slightly in dark mode
✅ **Adjust brand colors** (lighter shades on dark)
✅ **Replace shadows** with borders or glows
✅ **Dim images** with opacity or brightness
\`
`
};
