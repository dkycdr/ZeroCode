import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1MobileFirst = {
    id: 'tailwind-u3-doc-1-mobile-first',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Mobile-First Philosophy',
    duration: '12 min read',
    content: `
# Mobile-First Philosophy

## What is Mobile-First?

**Mobile-first** means designing for mobile devices first, then progressively enhancing for larger screens.

### Traditional Approach (Desktop-First)
\`\`\`css
/* Default: Desktop styles */
.container {
  width: 1200px;
}

/* Then shrink for mobile */
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
\`\`\`

### Mobile-First Approach
\`\`\`css
/* Default: Mobile styles */
.container {
  width: 100%;
}

/* Then expand for desktop */
@media (min-width: 768px) {
  .container {
    width: 1200px;
  }
}
\`\`\`

---

## Why Mobile-First?

### 1. **Mobile Usage Dominates**
- 📱 60%+ of web traffic is mobile
- 🌍 Mobile-first in emerging markets
- 🚀 Google's mobile-first indexing

### 2. **Easier to Scale Up**
- Start simple, add complexity
- Better performance on mobile
- Forces content prioritization

### 3. **Better Performance**
- Smaller initial payload
- Progressive enhancement
- Faster mobile experience

---

## Tailwind's Mobile-First Breakpoints

By default, Tailwind is **mobile-first**. Unprefixed utilities apply to all screen sizes:

\`\`\`html
<!-- This is ALWAYS blue -->
<div class="bg-blue-500">Mobile First</div>

<!-- Blue on mobile, red on medium+ screens -->
<div class="bg-blue-500 md:bg-red-500">
  Blue → Red
</div>
\`\`\`

---

## Breakpoint System

| Prefix | Min Width | CSS |
|--------|-----------|-----|
| *none* | 0px | Default (mobile) |
| \`sm:\` | 640px | Small devices |
| \`md:\` | 768px | Tablets |
| \`lg:\` | 1024px | Laptops |
| \`xl:\` | 1280px | Desktops |
| \`2xl:\` | 1536px | Large screens |

---

## Real-World Examples

### Responsive Text Size

\`\`\`html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  <!-- Mobile: 24px → Tablet: 36px → Desktop: 60px -->
  Responsive Heading
</h1>
\`\`\`

### Responsive Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- Mobile: 1 column → Tablet: 2 columns → Desktop: 4 columns -->
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
\`\`\`

### Responsive Padding

\`\`\`html
<section class="px-4 md:px-8 lg:px-16">
  <!-- Mobile: 16px → Tablet: 32px → Desktop: 64px padding -->
  Content
</section>
\`\`\`

### Hide/Show Elements

\`\`\`html
<!-- Show only on mobile -->
<div class="block md:hidden">
  Mobile Menu Icon
</div>

<!-- Hide on mobile, show on tablet+ -->
<nav class="hidden md:flex gap-6">
  Desktop Navigation
</nav>
\`\`\`

---

## Mobile-First Workflow

### Step 1: Design Mobile Layout
\`\`\`html
<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Title</h1>
  <p class="text-base">Content</p>
</div>
\`\`\`

### Step 2: Add Tablet Enhancements
\`\`\`html
<div class="p-4 md:p-8">
  <h1 class="text-2xl md:text-4xl font-bold mb-4">Title</h1>
  <p class="text-base md:text-lg">Content</p>
</div>
\`\`\`

### Step 3: Add Desktop Polish
\`\`\`html
<div class="p-4 md:p-8 lg:p-16">
  <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Title</h1>
  <p class="text-base md:text-lg lg:text-xl">Content</p>
</div>
\`\`\`

---

## Common Patterns

### Responsive Navigation

\`\`\`html
<header>
  <!-- Mobile: Hamburger menu -->
  <button class="md:hidden">☰</button>
  
  <!-- Desktop: Full navigation -->
  <nav class="hidden md:flex gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
\`\`\`

### Responsive Hero Section

\`\`\`html
<section class="h-screen flex items-center">
  <div class="text-center md:text-left px-4 md:px-8">
    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
      Hero Title
    </h1>
    <p class="text-lg md:text-xl lg:text-2xl mt-4">
      Subtitle text
    </p>
  </div>
</section>
\`\`\`

---

## Testing Responsive Designs

### Browser DevTools
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Test different viewports

### Tailwind's Arbitrary Values
\`\`\`html
<!-- Custom breakpoint at 900px -->
<div class="hidden min-[900px]:block">
  Visible above 900px
</div>
\`\`\`

---

## Best Practices

> [!TIP]
> **Content First:** Design mobile content hierarchy before styling

> [!TIP]
> **Touch Targets:** Minimum 44x44px for mobile buttons

> [!WARNING]
> **Avoid max-width:** Tailwind is min-width based. Use mobile-first thinking!

> [!TIP]
> **Test on Real Devices:** Emulators don't catch everything

---

## Summary

Mobile-first with Tailwind means:
- ✅ Default styles = Mobile styles
- ✅ Use breakpoint prefixes to enhance
- ✅ Start small, scale up
- ✅ Better performance on mobile
- ✅ Forced content prioritization

Embrace mobile-first, and your designs will work everywhere! 📱
`
};
