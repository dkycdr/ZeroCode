import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1ConfigMastery = {
    id: 'tailwind-6-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Mastery: Configuration Deep Dive ⚙️',
    duration: '20 min read',
    content: `
# Mastery: Configuration Deep Dive ⚙️

## The Command Center
Think of \`tailwind.config.js\` as the **Mission Control** for your entire design system.
Every color, every spacing value, every breakpoint — it all flows from this single source of truth.

## Analogy: The Restaurant Kitchen

**Default Tailwind:**
You walk into a standardized chain restaurant. The menu is huge, but everything tastes... generic.

**Custom Configuration:**
You hire a private chef. The menu is curated. Every dish reflects YOUR brand's identity. Customers recognize your style immediately.

---

## Configuration Architecture

### The Three Pillars

\`\`\`javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],  // 1. WHERE to look
  theme: { extend: { ... } },          // 2. WHAT to customize
  plugins: [ ... ]                     // 3. HOW to extend
}
\`\`\`

---

## Pillar 1: Content Paths (The Scanner)

**Purpose:** Tell Tailwind which files to scan for class names.

**Why it matters:**
Without this, Tailwind includes EVERY class (3.5 MB).
With this, Tailwind only includes USED classes (~10 KB).

\`\`\`javascript
content: [
  './src/**/*.{html,js,jsx,ts,tsx}',
  './components/**/*.vue',
  './public/index.html'
]
\`\`\`

**Real Impact:**
- ❌ Wrong config: 3.5 MB CSS bundle
- ✅ Correct config: 10 KB CSS bundle
- 💰 Result: 350x smaller file size

---

## Pillar 2: Theme Extension (The Brand DNA)

### The Golden Rule: **EXTEND, Never Replace**

\`\`\`javascript
// ❌ WRONG - Nuclear option
theme: {
  colors: {
    'brand': '#800000'
  }
}
// Result: You lost ALL default colors. Only have 'brand' now.

// ✅ RIGHT - Surgical addition
theme: {
  extend: {
    colors: {
      'brand': '#800000'
    }
  }
}
// Result: You have all defaults PLUS 'brand'.
\`\`\`

### Brand Colors with Shades

Professional apps need color scales, not just single colors.

\`\`\`javascript
theme: {
  extend: {
    colors: {
      'primary': {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... through ...
        900: '#0c4a6e'
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<button class="bg-primary-500 hover:bg-primary-600">
\`\`\`

---

## Pillar 3: Plugins (The Power-Ups)

### Official Plugins

**1. Forms Plugin** — Makes form inputs beautiful by default
\`\`\`bash
npm install @tailwindcss/forms
\`\`\`

**2. Typography Plugin** — The \`prose\` class for blog content
\`\`\`bash
npm install @tailwindcss/typography
\`\`\`

**Usage:**
\`\`\`html
<article class="prose lg:prose-xl">
  <!-- All typography styled automatically -->
  <h1>My Blog Post</h1>
  <p>Content here...</p>
</article>
\`\`\`

---

## Advanced: The Safelist

**Problem:** Dynamic classes get purged because Tailwind can't see them.

\`\`\`javascript
// ❌ Tailwind can't see this
const color = 'blue';
<div className={\`bg-\${color}-500\`}></div>
\`\`\`

**Solution:** Safelist the pattern

\`\`\`javascript
module.exports = {
  safelist: [
    {
      pattern: /bg-(red|green|blue)- (400|500|600)/
    }
  ]
}
\`\`\`

Now those classes won't be purged even if they're dynamically generated.

---

## Production Optimization Checklist

- [ ] Content paths configured
- [ ] Unused styles purged automatically
- [ ] Custom colors use \`extend\`
- [ ] Breakpoints match design specs
- [ ] Plugins installed if needed
- [ ] Safelist configured for dynamic classes
- [ ] Config file documented with comments

---

## Key Takeaways

✅ **Content paths** = What to scan
✅ **Extend** = Add without destroying
✅ **Plugins** = Official power-ups
✅ **Safelist** = Protect dynamic classes
✅ **One config** = Single source of truth
    `
};
