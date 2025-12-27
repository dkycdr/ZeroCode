import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ComponentSystem = {
    id: 'tailwind-u6-lab-1-components',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Building a Component System',
    duration: '35 min',
    content: `
# Lab: Building a Component System

## Mission

Build a reusable component system using @apply. You'll create buttons, cards, inputs, and badges that can be used across your entire project.

## Why Component Systems?

When a pattern repeats 10+ times, it's time to extract it. This lab teaches you:
- When to use @apply (and when NOT to)
- Semantic naming conventions
- Component composition patterns

## Requirements

1. **Button System**: Primary, secondary, danger variants
2. **Card System**: Header, body, footer structure
3. **Input System**: Default and error states
4. **Badge System**: Small inline labels

Let's build a professional component library! 🎨
\`,
    tasks: [
        {
            id: 1,
            description: 'Create .btn-primary class using @apply with bg-blue-600, text-white, px-6, py-3, rounded-lg',
            completed: false,
            regex: /@apply.*bg-.*text-.*px-.*py-.*rounded/,
            hint: {
                concept: 'The @apply Directive',
                strategy: 'Use @apply to compose Tailwind utilities into a reusable class. Start with background, text color, padding, and border radius.',
                solution: '.btn-primary { @apply bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold; }'
            }
        },
        {
            id: 2,
            description: 'Add hover state to .btn-primary using hover: modifier inside @apply',
            completed: false,
            regex: /@apply.*hover:/,
            hint: {
                concept: 'Hover States in @apply',
                strategy: 'You can include hover: variants inside @apply just like in HTML. Add a darker background on hover.',
                solution: '.btn-primary { @apply bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg; }'
            }
        },
        {
            id: 3,
            description: 'Create .btn-secondary class with gray colors (bg-gray-200, text-gray-800)',
            completed: false,
            regex: /\\.btn-secondary[\\s\\S]*@apply/,
            hint: {
                concept: 'Button Variants',
                strategy: 'Create a secondary button with lighter, neutral colors. Use gray backgrounds instead of blue.',
                solution: '.btn-secondary { @apply bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold; }'
            }
        },
        {
            id: 4,
            description: 'Create .card class with bg-white, rounded-xl, shadow-md, and overflow-hidden',
            completed: false,
            regex: /\\.card[\\s\\S]*@apply.*bg-white.*rounded.*shadow/,
            hint: {
                concept: 'Card Components',
                strategy: 'Cards need a white background, rounded corners, shadow for depth, and overflow-hidden to clip child elements.',
                solution: '.card { @apply bg-white rounded-xl shadow-md overflow-hidden; }'
            }
        },
        {
            id: 5,
            description: 'Create .input class for form inputs with w-full, px-4, py-3, border-2, border-gray-300, rounded-lg, and focus:border-blue-500',
            completed: false,
            regex: /\\.input[\\s\\S]*@apply.*border.*focus:/,
            hint: {
                concept: 'Form Input Styling',
                strategy: 'Inputs need full width, padding, border, and a focus state that changes the border color.',
                solution: '.input { @apply w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none; }'
            }
        },
        {
            id: 6,
            description: 'Create .badge class with inline-flex, items-center, px-3, py-1, text-sm, rounded-full, and bg-blue-100 text-blue-800',
            completed: false,
            regex: /\\.badge[\\s\\S]*@apply.*inline-flex.*px-.*py-.*rounded-full/,
            hint: {
                concept: 'Badge/Tag Components',
                strategy: 'Badges are small inline labels. Use inline-flex for alignment, small padding, and rounded-full for pill shape.',
                solution: '.badge { @apply inline-flex items-center px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800; }'
            }
        },
        {
            id: 7,
            description: 'Add transition-all duration-200 to .btn-primary for smooth hover effects',
            completed: false,
            regex: /@apply.*transition.*duration/,
            hint: {
                concept: 'Smooth Transitions',
                strategy: 'Add transition utilities to make hover effects smooth instead of instant.',
                solution: '.btn-primary { @apply ... transition-all duration-200; }'
            }
        },
        {
            id: 8,
            description: 'Test your components by adding btn-primary, card, input, and badge classes to the HTML elements',
            completed: false,
            regex: /<button.*btn-primary|<div.*card|<input.*input|<span.*badge/,
            hint: {
                concept: 'Using Custom Components',
                strategy: 'Apply your new component classes to the HTML elements in index.html to see them in action.',
                solution: '<button class="btn-primary">Click Me</button>'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: \`/* YOUR TASK: Build a Component System */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ================================
   BUTTON COMPONENTS
   ================================ */

/* Task 1-2: Create .btn-primary with bg, text, padding, rounded, and hover */


/* Task 3: Create .btn-secondary with gray colors */


/* ================================
   CARD COMPONENTS
   ================================ */

/* Task 4: Create .card with bg-white, rounded, shadow */


/* ================================
   FORM COMPONENTS
   ================================ */

/* Task 5: Create .input with border and focus states */


/* ================================
   BADGE COMPONENTS
   ================================ */

/* Task 6: Create .badge with inline-flex, rounded-full */

\`
        },
        {
            name: 'index.html',
            language: 'html',
            content: \`<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
        /* Paste your CSS here for CDN testing */
    </style>
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Component System Demo</h1>
        
        <!-- BUTTONS SECTION -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Buttons</h2>
            <div class="flex gap-4">
                <!-- Task 8: Add btn-primary class -->
                <button class="">Primary</button>
                <!-- Task 8: Add btn-secondary class -->
                <button class="">Secondary</button>
            </div>
        </section>
        
        <!-- CARDS SECTION -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Cards</h2>
            <!-- Task 8: Add card class -->
            <div class="">
                <div class="p-6 border-b">
                    <h3 class="font-bold text-lg">Card Title</h3>
                </div>
                <div class="p-6">
                    <p class="text-gray-600">Card content goes here...</p>
                </div>
            </div>
        </section>
        
        <!-- FORMS SECTION -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Form Inputs</h2>
            <div class="max-w-md">
                <label class="block text-sm font-semibold mb-2">Email</label>
                <!-- Task 8: Add input class -->
                <input type="email" class="" placeholder="you@example.com">
            </div>
        </section>
        
        <!-- BADGES SECTION -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Badges</h2>
            <div class="flex gap-2">
                <!-- Task 8: Add badge class -->
                <span class="">New</span>
                <span class="">Popular</span>
                <span class="">Featured</span>
            </div>
        </section>
    </div>
</body>
</html>\`
        }
    ]
        `
};
