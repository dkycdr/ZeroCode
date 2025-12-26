import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const project1FinalAssembly = {
    id: 'tailwind-5-project',
    type: CONTENT_TYPES.PROJECT,
    title: 'Final Integration: Complete Assembly 🎬',
    duration: '60 min',
    description: 'Combine all sections into a production-ready landing page',
    content: `
# Final Integration: Complete Assembly 🎬

## The Final Boss
You've built the components. Now assemble them into a complete, scrollable, professional landing page.

## Architecture Checklist

### ✅ Section 1: Navigation
- [ ] Fixed position with glassmorphism
- [ ] Logo left, CTA button right
- [ ] Subtle border-bottom

### ✅ Section 2: Hero
- [ ] Responsive flex layout (col on mobile, row on desktop)
- [ ] Gradient CTA button with hover effects
- [ ] Large heading (\`text-5xl lg:text-6xl\`)
- [ ] Padding to account for fixed nav (\`pt-32\`)

### ✅ Section 3: Feature Grid
- [ ] Responsive grid (1/2/3 columns)
- [ ] Cards with hover lift effect
- [ ] Icon containers with brand colors
- [ ] Consistent spacing (\`py-20\`)

### ✅ Section 4: Pricing Table
- [ ] 3 pricing tiers
- [ ] Middle tier ("Pro") visually highlighted:
  - \`scale-105\` (slightly larger)
  - \`ring-2 ring-indigo-500\` (border glow)
  - \`bg-indigo-50\` or different background
- [ ] Each tier has clear CTA button

### ✅ Section 5: Footer (Simple)
- [ ] 4-column grid (responsive to 1 col on mobile)
- [ ] Social links, Legal links, Contact info
- [ ] Dark background (\`bg-slate-900\`)
- [ ] Light text (\`text-slate-400\`)

## Advanced Challenge

### The "Blob" Background
Add a unique visual element using arbitrary values:

\`\`\`html
<div class="absolute top-0 right-0 w-96 h-96 
             bg-gradient-to-br from-purple-400 to-indigo-600 
             opacity-20 rounded-full blur-3xl -z-10">
</div>
\`\`\`

This creates a soft, blurred gradient "blob" behind your hero section.

### Scroll Behavior
Add smooth scrolling:

\`\`\`html
<html class="scroll-smooth">
\`\`\`

Now anchor links scroll smoothly instead of jumping.

## Deployment Checklist
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test nav sticky behavior
- [ ] Test hover effects
- [ ] Check color contrast (accessibility)
- [ ] Verify all CTAs are clickable
    `,
    tasks: [
        {
            id: 1,
            description: 'Full Page Structure (Nav, Hero, Features, Pricing, Footer)',
            completed: false,
            regex: /<nav[\s\S]*<footer/
        },
        {
            id: 2,
            description: 'Pricing: scale-105 or ring-2 for highlighted plan',
            completed: false,
            regex: /scale-105|ring-2/
        }
    ],
    starterFiles: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZeroSaaS - Automate Your Future</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50">
    <!-- Assemble all sections here -->
    
    <!-- Nav -->
    
    <!-- Hero -->
    
    <!-- Features -->
    
    <!-- Pricing -->
    
    <!-- Footer -->
</body>
</html>`
        }
    ]
};
