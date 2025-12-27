import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1DarkModePhilosophy = {
    id: 'tailwind-u7-doc-1-philosophy',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Dark Mode Philosophy',
    duration: '10 min read',
    content: `
# The Dark Mode Philosophy

## Why Dark Mode Matters

**Analogy: The Movie Theater**

When you enter a movie theater, they dim the lights. Not because they're cheap — but because:
- Reduced eye strain in low-light environments
- Better focus on the content
- Creates a premium, immersive experience

Dark mode does the same for digital interfaces.

---

## The Three Reasons for Dark Mode

### 1. User Preference (Primary)
- 82% of smartphone users enable dark mode
- Many users prefer it all the time, not just at night
- Accessibility: some users with visual impairments prefer dark

### 2. Battery Life (OLED Screens)
- True black pixels are OFF on OLED displays
- Can save 30-60% battery on dark interfaces
- Important for mobile apps and PWAs

### 3. Aesthetic Appeal
- Gaming and developer tools are predominantly dark
- Feels more "premium" and modern
- Creates visual hierarchy with glowing elements

---

## Tailwind's Dark Mode Strategies

### Strategy 1: \`media\` (System Preference)

\`\`\`javascript
// tailwind.config.js
module.exports = {
  darkMode: 'media'  // Uses prefers-color-scheme
}
\`\`\`

**How it works:**
- Follows OS/browser dark mode setting
- No toggle needed — automatic
- User has no manual control

**Best for:** Marketing sites, content sites

---

### Strategy 2: \`class\` (Manual Toggle)

\`\`\`javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class'  // Uses .dark class on html/body
}
\`\`\`

**How it works:**
- You add/remove \`dark\` class on \`<html>\`
- Full user control via toggle button
- Can save preference to localStorage

**Best for:** Apps, dashboards, user-configurable sites

---

## The dark: Modifier

With either strategy, you use the \`dark:\` modifier:

\`\`\`html
<div class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-900 dark:text-white">Hello</h1>
  <p class="text-gray-600 dark:text-gray-300">Content</p>
</div>
\`\`\`

**Pattern:** Always put light mode first, then \`dark:\` variant.

---

## Dark Mode Color Principles

### 1. Never Use Pure Black

\`\`\`html
<!-- ❌ Too harsh -->
<div class="dark:bg-black">

<!-- ✅ Softer dark -->
<div class="dark:bg-gray-900">
\`\`\`

### 2. Reduce Contrast for Text

\`\`\`html
<!-- Light mode: high contrast -->
<p class="text-gray-900">

<!-- Dark mode: slightly lower contrast -->
<p class="dark:text-gray-100">
\`\`\`

### 3. Dim Images and Media

\`\`\`html
<img class="dark:opacity-80 dark:contrast-90">
\`\`\`

---

## Key Takeaways

✅ **\`media\`** = Automatic, follows system preference
✅ **\`class\`** = Manual control with toggle
✅ **\`dark:\`** = The modifier for dark-mode styles
✅ **Avoid pure black** = Use gray-900 instead
✅ **Lower contrast** = Easier on the eyes in dark mode
\`
`
};
