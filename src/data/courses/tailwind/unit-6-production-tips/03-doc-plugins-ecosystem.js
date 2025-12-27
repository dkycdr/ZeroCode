import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3PluginsEcosystem = {
    id: 'tailwind-u6-doc-3-plugins',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Tailwind Plugin Ecosystem',
    duration: '15 min read',
    content: `
# The Tailwind Plugin Ecosystem

## What Are Plugins?

**Analogy: Smartphone Apps**

Your phone comes with basic apps, but you install more for specific needs:
- Camera app → Photo editing apps
- Phone app → WhatsApp, Telegram

Tailwind plugins work the same way:
- Base Tailwind → Typography, Forms, Aspect Ratio plugins

---

## Official Plugins (Must-Know)

### 1. @tailwindcss/typography

The \`prose\` class for beautiful article content.

\`\`\`bash
npm install @tailwindcss/typography
\`\`\`

\`\`\`javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
\`\`\`

**Usage:**
\`\`\`html
<article class="prose lg:prose-xl dark:prose-invert">
  <h1>My Blog Post</h1>
  <p>This paragraph is automatically styled...</p>
  <ul>
    <li>Lists look great</li>
    <li>No custom CSS needed</li>
  </ul>
</article>
\`\`\`

**Key Classes:**
| Class | Effect |
|-------|--------|
| \`prose\` | Base typography styles |
| \`prose-lg\` | Larger text |
| \`prose-xl\` | Even larger |
| \`prose-invert\` | Dark mode colors |

---

### 2. @tailwindcss/forms

Makes form elements look consistent across browsers.

\`\`\`bash
npm install @tailwindcss/forms
\`\`\`

**Before (ugly browser defaults):**
Checkboxes, selects, and inputs look different everywhere.

**After:**
Clean, consistent form elements that match your design.

\`\`\`html
<input type="text" class="form-input rounded-lg">
<select class="form-select rounded-lg">
<input type="checkbox" class="form-checkbox rounded">
\`\`\`

---

### 3. @tailwindcss/aspect-ratio

Control aspect ratios for images/videos.

\`\`\`bash
npm install @tailwindcss/aspect-ratio
\`\`\`

\`\`\`html
<div class="aspect-w-16 aspect-h-9">
  <iframe src="https://youtube.com/..."></iframe>
</div>
\`\`\`

> [!TIP]
> Modern Tailwind has built-in \`aspect-video\` and \`aspect-square\` — this plugin is for custom ratios.

---

### 4. @tailwindcss/container-queries

Style based on container size, not viewport.

\`\`\`bash
npm install @tailwindcss/container-queries
\`\`\`

\`\`\`html
<div class="@container">
  <div class="@lg:flex @lg:gap-8">
    <!-- Responds to container width, not screen -->
  </div>
</div>
\`\`\`

---

## Community Plugins

### Popular Choices

| Plugin | Purpose |
|--------|---------|
| \`tailwind-scrollbar\` | Custom scrollbars |
| \`tailwindcss-animate\` | Animation utilities |
| \`@headlessui/tailwindcss\` | Headless UI states |
| \`tailwind-merge\` | Merge conflicting classes |

---

## Creating Custom Plugins

### Simple Plugin: Custom Utilities

\`\`\`javascript
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0,0,0,0.3)',
        },
        '.text-shadow-lg': {
          'text-shadow': '4px 4px 8px rgba(0,0,0,0.3)',
        },
      });
    }),
  ],
}
\`\`\`

**Usage:**
\`\`\`html
<h1 class="text-shadow-lg">Shadowed Text</h1>
\`\`\`

### Plugin with Theme Values

\`\`\`javascript
plugin(function({ addUtilities, theme }) {
  const colors = theme('colors');
  const glowUtilities = Object.entries(colors).map(([name, value]) => ({
    [\`.glow-\${name}\`]: {
      'box-shadow': \`0 0 20px \${value[500] || value}\`,
    },
  }));
  addUtilities(glowUtilities);
});
\`\`\`

---

## Plugin Installation Checklist

1. \`npm install\` the plugin
2. Add to \`plugins[]\` in config
3. Restart dev server
4. Use new classes!

---

## Key Takeaways

✅ **Typography plugin** = Instant beautiful articles
✅ **Forms plugin** = Consistent form elements
✅ **Container queries** = Component-level responsive
✅ **Custom plugins** = Extend Tailwind your way
✅ **Community plugins** = Thousands of options
`
};
