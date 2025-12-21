import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Project = {
    id: 'tailwind-unit-5',
    title: 'Final Project',
    description: 'Build a complete landing page',
    items: [
                {
                    id: 'tailwind-3-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'ZeroCode Landing Page',
                    duration: '90 min',
                    difficulty: 'Beginner',
                    description: 'Build a responsive landing page for ZeroCode using Tailwind CSS.',
                    content: `
# 🎯 Project: ZeroCode Landing Page

## Overview
Create a professional, responsive landing page using only Tailwind CSS.

## Requirements

### Sections
- [ ] Navigation bar (sticky)
- [ ] Hero section with CTA
- [ ] Features grid (3 columns on desktop)
- [ ] Testimonials
- [ ] Footer

### Responsive Design
- [ ] Mobile: 1 column
- [ ] Tablet: 2 columns
- [ ] Desktop: 3 columns

### Styling
- [ ] Consistent spacing
- [ ] Hover effects on buttons/links
- [ ] Shadows and rounded corners
- [ ] ZeroCode colors (#800000 maroon, #0a192f navy)

## Grading Criteria

| Criteria | Points |
|----------|--------|
| Responsive layout | 30% |
| Tailwind utilities usage | 25% |
| Design consistency | 20% |
| Hover/interactive states | 15% |
| Code organization | 10% |
                    `,
                    tasks: [
                        { id: 1, description: 'Create sticky navbar with "sticky top-0"', completed: false, regex: /sticky[\s\S]*top-0|top-0[\s\S]*sticky/ },
                        { id: 2, description: 'Use responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)', completed: false, regex: /grid-cols-1[\s\S]*md:grid-cols-2[\s\S]*lg:grid-cols-3/ },
                        { id: 3, description: 'Add hover effects (hover:bg-, hover:text-, etc)', completed: false, regex: /hover:(bg|text|shadow|scale)/ },
                        { id: 4, description: 'Use flex for centering', completed: false, regex: /flex[\s\S]*(items-center|justify-center)/ },
                        { id: 5, description: 'Add shadows (shadow-md, shadow-lg)', completed: false, regex: /shadow-(md|lg|xl)/ }
                    ],
                    starterFiles: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZeroCode - ZeroCode Learning System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'zerocode-maroon': '#800000',
                        'zerocode-navy': '#0a192f',
                    }
                }
            }
    }
    </script>
</head>
<body>
    <!-- Build your landing page here -->

</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `/* Custom CSS if needed (try to use Tailwind only!) */` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-3-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 Tailwind CSS Complete!

## What You Mastered

✅ Utility-first CSS approach
✅ Spacing, colors, typography
✅ Flexbox layouts
✅ Grid layouts
✅ Responsive design (mobile-first)
✅ Hover states and transitions

## Essential Classes

\`\`\`html
<!-- Layout -->
flex, grid, block, hidden

<!-- Spacing -->
p-4, m-4, gap-4

<!-- Colors -->
bg-blue-500, text-gray-800

<!-- Typography -->
text-2xl, font-bold

<!-- Responsive -->
md:grid-cols-2, lg:text-4xl
\`\`\`

## Best Practices

1. **Mobile-First**: Start with mobile, add md:, lg: for larger screens
2. **Consistent Spacing**: Use the spacing scale (4, 6, 8, 12, 16)
3. **Semantic Colors**: Use gray for text, blue for primary actions
4. **Component Classes**: Extract repeated patterns into components

## What's Next?

Continue with **JavaScript Basics** to add interactivity to your Tailwind designs!

> "Tailwind CSS is a productivity multiplier." - Adam Wathan (Creator)
                    `
                }
            ]
};
