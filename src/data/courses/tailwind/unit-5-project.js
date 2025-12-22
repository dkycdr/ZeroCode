
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Project = {
    id: 'tailwind-unit-5',
    title: 'Unit 5: Capstone Project',
    description: 'Build a production-grade SaaS Landing Page. From Mobile-First to Desktop.',
    items: [
        // 1. Brief
        {
            id: 'tailwind-5-brief',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Project Brief: ZeroSaaS 🚀',
            duration: '10 min read',
            content: `
# Project Brief: ZeroSaaS 🚀

## The Client
ZeroSaaS is a new startup needing a high-performance landing page.
They want a design that screams "Premium" and works perfectly on mobile phones.

## Design System
*   **Primary Color**: Indigo (\`bg-indigo-600\`).
*   **Secondary**: Slate (\`text-slate-600\`).
*   **Font**: Inter / Sans.
*   **Spacing**: Generous (\`py-20\`, \`gap-8\`).

## Requirements
1.  **Sticky Navbar**: Glassmorphism effect (\`backdrop-blur\`).
2.  **Hero Section**: Split layout (Text Left, Image Right) on Desktop. Stacked on Mobile.
3.  **Feature Grid**: 3-Column Grid with hover effects.
4.  **Pricing**: Highlighted "Pro" plan with scale effect.
            `
        },
        // Phase 1: Header & Hero
        {
            id: 'tailwind-5-phase-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 1: Hero & Nav',
            duration: '30 min',
            content: `
# Phase 1: Hero & Nav

Build the top fold of the website.

## The Mission
1.  **Nav**: \`fixed w-full z-50 bg-white/90 backdrop-blur-md\`.
2.  **Hero Container**: \`flex flex-col-reverse lg:flex-row items-center gap-12 pt-32 pb-20 px-6\`.
3.  **Text**: \`text-4xl lg:text-6xl font-black tracking-tight\`.
4.  **Button**: Gradients! \`bg-gradient-to-r from-indigo-600 to-purple-600\`.

## Responsive Logic
*   **Mobile**: Flex Col Reverse (Image Top, Text Bottom? No, usually Image Bottom or Top).
*   Let's do \`flex-col lg:flex-row\`: Text top on mobile, Left on desktop.

`,
            tasks: [
                {
                    id: 1,
                    description: 'Nav: fixed w-full backdrop-blur-md',
                    completed: false,
                    regex: /<nav[^>]*class=["'](?=.*\bfixed\b)(?=.*\bbackdrop-blur-md\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Hero Layout: flex flex-col lg:flex-row',
                    completed: false,
                    regex: /<section[^>]*class=["'](?=.*\bflex\b)(?=.*\bflex-col\b)(?=.*\blg:flex-row\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Gradient Button: bg-gradient-to-r from-indigo-600 to-purple-600',
                    completed: false,
                    regex: /<button[^>]*class=["'](?=.*\bbg-gradient-to-r\b)(?=.*\bfrom-indigo-600\b)(?=.*\bto-purple-600\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head><script src="https://cdn.tailwindcss.com"></script></head>
<body>
    <!-- 1. Nav -->
    <nav class="border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span class="font-bold text-xl">ZeroSaaS</span>
            <button class="bg-black text-white px-4 py-2 rounded-lg">Get Started</button>
        </div>
    </nav>

    <!-- 2. Hero -->
    <section class="max-w-7xl mx-auto">
        <!-- Content here -->
        <h1>Automate Your Future</h1>
        <button>Start Now</button>
    </section>
</body>
</html>`
                }
            ]
        },
        // Phase 2: The Grid (Features)
        {
            id: 'tailwind-5-phase-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 2: Feature Grid',
            duration: '30 min',
            content: `
# Phase 2: Feature Grid

Create a responsive 3-column grid for features.

## The Mission
1.  **Grid**: \`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\`.
2.  **Card**: \`p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all\`.
3.  **Icon**: \`w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center\`.

## Polish
Add \`group\` to the card and \`group-hover:scale-110\` to the icon for a micro-interaction.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Grid: grid-cols-1 lg:grid-cols-3 gap-8',
                    completed: false,
                    regex: /class=["'](?=.*\bgrid\b)(?=.*\bgrid-cols-1\b)(?=.*\blg:grid-cols-3\b)(?=.*\bgap-8\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Card: hover:shadow-lg transition-all',
                    completed: false,
                    regex: /class=["'](?=.*\bhover:shadow-lg\b)(?=.*\btransition-all\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Icon Box: w-12 h-12 bg-indigo-50',
                    completed: false,
                    regex: /class=["'](?=.*\bw-12\b)(?=.*\bh-12\b)(?=.*\bbg-indigo-50\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'features.html',
                    language: 'html',
                    content: `<div class="py-20 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
        
        <div class="">
            <!-- Card 1 -->
            <div class="">
                <div class="">🚀</div>
                <h3 class="mt-4 font-bold">Fast</h3>
                <p class="mt-2 text-slate-600">Blazing fast performance.</p>
            </div>
            
            <!-- Card 2 -->
            
            <!-- Card 3 -->
            
        </div>
    </div>
</div>`
                }
            ]
        },
        // Final Project
        {
            id: 'tailwind-5-project',
            type: CONTENT_TYPES.PROJECT,
            title: 'Final Assembly',
            duration: '60 min',
            description: 'Assemble all sections into a continuous Landing Page.',
            content: `
# Final Assembly

Combine Header, Hero, Features, Pricing, and Footer.

## Checklist
1.  [ ] **Header**: Sticky, Glassmorphism.
2.  [ ] **Hero**: Responsive Layout.
3.  [ ] **Features**: 3-Column Grid.
4.  [ ] **Pricing**: 3 Cards. Center one is "Popular" (scale-105, ring-2).
5.  [ ] **Footer**: Simple 4-column layout.

## Challenge
Use **Arbitrary Values** for a unique background blob:
\`bg-[url('https://...')] bg-no-repeat bg-center\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Full Page Structure',
                    completed: false,
                    regex: /<nav[\s\S]*<header|section[\s\S]*<footer/
                },
                {
                    id: 2,
                    description: 'Pricing: scale-105 or different bg for Popular plan',
                    completed: false,
                    regex: /scale-105|bg-indigo-50|ring-2/
                }
            ],
            starterFiles: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<!-- Assemble your full page here -->`
                }
            ]
        }
    ]
};
