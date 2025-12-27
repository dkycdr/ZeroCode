import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2PurgingOptimization = {
    id: 'tailwind-u6-doc-2-purging',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'CSS Purging & Bundle Optimization',
    duration: '12 min read',
    content: `
# CSS Purging & Bundle Optimization

## The Problem: CSS Bloat

**Analogy: The Moving Truck**

Imagine you're moving to a new house. Would you pack EVERY item from a furniture store, just in case you might need them? No — you'd only pack what you actually own.

Tailwind works the same way:
- **Development:** Access to 10,000+ utility classes
- **Production:** Only ship the ~200 classes you actually use

---

## How Purging Works

### The Scanning Process

Tailwind scans your files and builds a list of used classes:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.vue',
    './pages/**/*.astro'
  ]
}
\`\`\`

### What Gets Scanned

| File Type | Glob Pattern |
|-----------|--------------|
| HTML | \`*.html\` |
| JavaScript | \`*.js, *.jsx, *.ts, *.tsx\` |
| Vue | \`*.vue\` |
| React | \`*.jsx, *.tsx\` |
| Svelte | \`*.svelte\` |

---

## Common Purging Mistakes

### 1. Dynamic Class Names (The Silent Killer)

\`\`\`javascript
// ❌ PROBLEM: Tailwind can't see this
const buttonColor = isPrimary ? 'blue' : 'gray';
<button className={\`bg-\${buttonColor}-500\`}>

// ✅ SOLUTION: Use complete class names
const buttonClass = isPrimary ? 'bg-blue-500' : 'bg-gray-500';
<button className={buttonClass}>
\`\`\`

### 2. Classes in External Files

\`\`\`javascript
// ❌ If this file isn't in content[], classes get purged
// utils/styles.js
export const cardStyles = 'bg-white rounded-lg shadow-md';

// ✅ Add the file to content[]
content: [
  './src/**/*.js',
  './utils/**/*.js'  // Don't forget utility files!
]
\`\`\`

### 3. Third-Party Component Libraries

\`\`\`javascript
// Some libraries use Tailwind internally
content: [
  './node_modules/@your-ui-lib/**/*.js'
]
\`\`\`

---

## The Safelist: Protecting Dynamic Classes

When you MUST use dynamic classes, safelist them:

\`\`\`javascript
module.exports = {
  safelist: [
    // Single classes
    'bg-red-500',
    'text-xl',
    
    // Patterns
    {
      pattern: /bg-(red|green|blue)-(400|500|600)/,
    },
    
    // With variants
    {
      pattern: /bg-(red|green|blue)-(400|500|600)/,
      variants: ['hover', 'focus'],
    }
  ]
}
\`\`\`

---

## Production Build Analysis

### Check Your Bundle Size

\`\`\`bash
# Build for production
npm run build

# Check CSS size
ls -la dist/assets/*.css
\`\`\`

**Target Sizes:**
| Project Type | Ideal Size |
|--------------|------------|
| Landing Page | 5-15 KB |
| Small App | 15-30 KB |
| Large App | 30-50 KB |
| Enterprise | 50-100 KB |

> [!WARNING]
> If your CSS is over 100 KB, something is wrong with your purging config!

---

## Optimization Checklist

- [ ] All template files in \`content[]\` array
- [ ] No dynamic class string concatenation
- [ ] External style files included in scan
- [ ] Safelist only what's necessary
- [ ] Build size under 50 KB for most apps

---

## Key Takeaways

✅ **Purging is automatic** in production builds
✅ **Content paths** must include ALL files with classes
✅ **Avoid dynamic strings** — use complete class names
✅ **Safelist sparingly** — only for truly dynamic cases
✅ **Monitor bundle size** — it should be tiny!
`
};
