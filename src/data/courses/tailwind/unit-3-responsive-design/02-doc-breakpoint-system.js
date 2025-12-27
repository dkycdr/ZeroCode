import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2BreakpointSystem = {
    id: 'tailwind-u3-doc-2-breakpoints',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Breakpoint System Mastery',
    duration: '10 min read',
    content: `
# Breakpoint System Mastery

## Default Breakpoints

Tailwind's breakpoint system is based on **min-width** media queries:

| Breakpoint | Min Width | Target Devices |
|------------|-----------|----------------|
| \`sm:\` | 640px | Large phones (landscape) |
| \`md:\` | 768px | Tablets |
| \`lg:\` | 1024px | Laptops |
| \`xl:\` | 1280px | Desktops |
| \`2xl:\` | 1536px | Large displays |

---

## How Breakpoints Work

### Stacking Principle

\`\`\`html
<div class="text-sm md:text-base lg:text-lg xl:text-xl">
  Text
</div>
\`\`\`

**Size at each breakpoint:**
- **0-639px:** \`text-sm\` (14px)
- **640-767px:** \`text-sm\` (still 14px)
- **768-1023px:** \`text-base\` (16px)
- **1024-1279px:** \`text-lg\` (18px)
- **1280px+:** \`text-xl\` (20px)

> [!IMPORTANT]
> Once a breakpoint applies, it continues until overridden by a larger breakpoint!

---

## Targeting Specific Ranges

### Standard Approach (Min-Width)

\`\`\`html
<!-- Blue on mobile, red on md+, green on lg+ -->
<div class="bg-blue-500 md:bg-red-500 lg:bg-green-500">
  Content
</div>
\`\`\`

### Max-Width Modifiers

\`\`\`html
<!-- Show only on mobile (below md) -->
<div class="max-md:block md:hidden">
  Mobile only
</div>

<!-- Show only between md and lg -->
<div class="hidden md:block lg:hidden">
  Tablet only
</div>
\`\`\`

---

## Common Responsive Patterns

### 1. Responsive Grid Columns

\`\`\`html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <!-- 1 col → 2 cols → 3 cols → 4 cols -->
</div>
\`\`\`

### 2. Responsive Spacing

\`\`\`html
<section class="p-4 sm:p-6 md:p-8 lg:p-12">
  <!-- Padding grows with screen size -->
</section>
\`\`\`

### 3. Responsive Typography

\`\`\`html
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Heading
</h1>

<p class="text-sm sm:text-base md:text-lg">
  Body text
</p>
\`\`\`

### 4. Show/Hide Elements

\`\`\`html
<!-- Mobile menu button -->
<button class="lg:hidden">☰</button>

<!-- Desktop navigation -->
<nav class="hidden lg:flex">...</nav>
\`\`\`

---

## Responsive Utilities Quick Reference

### Display

\`\`\`html
<div class="hidden md:block">Tablet+</div>
<div class="block md:hidden">Mobile only</div>
<div class="hidden md:flex lg:grid">Flex on tablet, Grid on desktop</div>
\`\`\`

### Flexbox Direction

\`\`\`html
<div class="flex flex-col md:flex-row">
  <!-- Vertical on mobile, horizontal on tablet+ -->
</div>
\`\`\`

### Text Alignment

\`\`\`html
<p class="text-center md:text-left">
  Centered on mobile, left-aligned on tablet+
</p>
\`\`\`

### Width

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- 100% → 50% → 33.33% -->
</div>
\`\`\`

---

## Custom Breakpoints

### Arbitrary Values

\`\`\`html
<!-- Custom breakpoint at 900px -->
<div class="hidden min-[900px]:block">
  Visible at 900px+
</div>

<!-- Between 600px and 800px -->
<div class="min-[600px]:block max-[800px]:hidden">
  Tablet range
</div>
\`\`\`

### Configure in tailwind.config.js

\`\`\`javascript
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    }
  }
}
\`\`\`

---

## Responsive Design Strategy

### 1. Start Mobile
\`\`\`html
<div class="p-4">
  Mobile base styles
</div>
\`\`\`

### 2. Add Tablet Adjustments
\`\`\`html
<div class="p-4 md:p-8">
  Enhanced for tablets
</div>
\`\`\`

### 3. Optimize for Desktop
\`\`\`html
<div class="p-4 md:p-8 lg:p-16 lg:flex lg:gap-8">
  Desktop layout with flexbox
</div>
\`\`\`

---

## Real-World Example

### Responsive Card Grid

\`\`\`html
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
    <div class="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-xl transition">
      <img class="w-full h-48 sm:h-56 lg:h-64 object-cover rounded" src="...">
      <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mt-4">Card Title</h3>
      <p class="text-sm sm:text-base text-gray-600 mt-2">Description</p>
    </div>
  </div>
</div>
\`\`\`

**Breakdown:**
- **Container padding:** 16px → 24px → 32px
- **Grid columns:** 1 → 2 → 3 → 4
- **Gap:** 16px → 24px → 32px
- **Card padding:** 16px → 24px
- **Image height:** 192px → 224px → 256px
- **Title size:** 18px → 20px → 24px

---

## Pro Tips

> [!TIP]
> **Use consistent scale:** Apply breakpoints to all aspects (spacing, text, layouts) for cohesive design

> [!TIP]
> **Test thoroughly:** Check all breakpoints, not just mobile and desktop

> [!WARNING]
> **Don't over-breakpoint:** Too many breakpoints = maintenance nightmare

> [!TIP]
> **Embrace defaults:** Often, mobile styles work fine on desktop without changes

---

## Summary

Master breakpoints by:
- ✅ Understanding min-width stacking
- ✅ Using consistent responsive scales
- ✅ Starting mobile, enhancing upward
- ✅ Testing all breakpoints
- ✅ Keeping it simple

Breakpoints are your responsive superpower! 🦸‍♂️
`
};
