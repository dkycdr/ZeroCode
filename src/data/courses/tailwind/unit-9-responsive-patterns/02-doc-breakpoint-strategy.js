import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2BreakpointStrategy = {
  id: 'tailwind-u9-doc-2-breakpoints',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Breakpoint Strategy & Patterns',
  duration: '12 min read',
  content: `
# Breakpoint Strategy & Patterns

## Stacking Breakpoint Modifiers

You can chain multiple responsive utilities:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg xl:text-xl">
  Progressively larger text
</div>
\`\`\`

Each breakpoint builds on the previous.

---

## Common Responsive Patterns

### 1. Hide/Show Elements

\`\`\`html
<!-- Mobile menu button (hidden on desktop) -->
<button class="md:hidden">☰</button>

<!-- Desktop navigation (hidden on mobile) -->
<nav class="hidden md:flex">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>
\`\`\`

### 2. Responsive Columns

\`\`\`html
<!-- Stack on mobile, 2 columns on md, 4 on lg -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
\`\`\`

### 3. Responsive Flex Direction

\`\`\`html
<!-- Column on mobile, row on desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <aside class="md:w-64">Sidebar</aside>
  <main class="flex-1">Main content</main>
</div>
\`\`\`

### 4. Responsive Text Alignment

\`\`\`html
<h1 class="text-center md:text-left">
  Centered on mobile, left on desktop
</h1>
\`\`\`

### 5. Responsive Spacing

\`\`\`html
<section class="px-4 md:px-8 lg:px-16">
  More padding on larger screens
</section>
\`\`\`

---

## Responsive Component Example

\`\`\`html
<header class="flex flex-col md:flex-row md:items-center md:justify-between p-4">
  <div class="flex justify-between items-center mb-4 md:mb-0">
    <h1 class="text-xl font-bold">Logo</h1>
    <button class="md:hidden">☰</button>
  </div>
  <nav class="hidden md:flex gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
\`\`\`

---

## Custom Breakpoints

You can define custom breakpoints:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      // ...
      '3xl': '1920px',
    }
  }
}
\`\`\`

---

## Responsive Hover/Focus

Combine responsive with state:

\`\`\`html
<button class="bg-blue-500 md:hover:bg-blue-600">
  Hover effect only on desktop
</button>
\`\`\`

---

## Key Takeaways

✅ **\`hidden md:block\`** = Hide on mobile, show on md+
✅ **\`flex-col md:flex-row\`** = Stack → Side-by-side
✅ **\`grid-cols-1 md:grid-cols-3\`** = Responsive grid
✅ **Chain breakpoints** for progressive enhancement
✅ **Combine with states** like \`md:hover:\`
`
};
