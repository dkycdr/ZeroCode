import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Advanced = {
    id: 'tailwind-unit-3',
    title: 'Advanced Styling',
    description: 'Master colors, shadows, and transitions',
    items: [
                {
                    id: 'tailwind-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Colors & Gradients',
                    duration: '8 min read',
                    content: `
# Colors & Gradients in Tailwind

## Color System

Tailwind provides a comprehensive color palette with shades from 50 to 950.

### Available Colors

\`\`\`
slate, gray, zinc, neutral, stone
red, orange, amber, yellow, lime, green
emerald, teal, cyan, sky, blue, indigo
violet, purple, fuchsia, pink, rose
\`\`\`

### Using Colors

\`\`\`html
<!-- Background -->
<div class="bg-blue-500">Blue background</div>
<div class="bg-red-100">Light red background</div>

<!-- Text -->
<p class="text-gray-800">Dark gray text</p>
<p class="text-green-600">Green text</p>

<!-- Border -->
<div class="border-2 border-purple-500">Purple border</div>
\`\`\`

## Opacity

Add opacity with slash notation:

\`\`\`html
<div class="bg-blue-500/50">50% opacity</div>
<div class="bg-red-600/75">75% opacity</div>
<div class="text-gray-900/90">90% opacity text</div>
\`\`\`

## Gradients

\`\`\`html
<!-- Linear gradients -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
    Left to right gradient
</div>

<div class="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
    Diagonal with 3 colors
</div>

<!-- Gradient directions -->
bg-gradient-to-t    <!-- to top -->
bg-gradient-to-tr   <!-- to top right -->
bg-gradient-to-r    <!-- to right -->
bg-gradient-to-br   <!-- to bottom right -->
bg-gradient-to-b    <!-- to bottom -->
bg-gradient-to-bl   <!-- to bottom left -->
bg-gradient-to-l    <!-- to left -->
bg-gradient-to-tl   <!-- to top left -->
\`\`\`

## Custom Colors

You can use arbitrary values:

\`\`\`html
<div class="bg-[#800000]">Custom maroon</div>
<div class="text-[#0a192f]">Custom navy</div>
\`\`\`

## Color Combinations

### Primary Button
\`\`\`html
<button class="bg-blue-600 hover:bg-blue-700 text-white">
    Click me
</button>
\`\`\`

### Card with Gradient Header
\`\`\`html
<div class="bg-white rounded-lg overflow-hidden">
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
        <h2 class="text-white text-2xl font-bold">Title</h2>
    </div>
    <div class="p-6">Content</div>
</div>
\`\`\`

> 💡 **Pro Tip**: Use lighter shades (100-300) for backgrounds, darker shades (600-900) for text and buttons.
                    `
                },
                {
                    id: 'tailwind-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Shadows & Effects',
                    duration: '20 min',
                    content: `
# Shadows & Effects

## Box Shadows

\`\`\`html
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2X large shadow</div>
<div class="shadow-inner">Inner shadow</div>
<div class="shadow-none">No shadow</div>
\`\`\`

## Colored Shadows

\`\`\`html
<div class="shadow-lg shadow-blue-500/50">Blue shadow</div>
<div class="shadow-xl shadow-purple-500/30">Purple shadow</div>
\`\`\`

## Border Radius

\`\`\`html
<div class="rounded-none">No radius</div>
<div class="rounded-sm">Small radius</div>
<div class="rounded">Default radius</div>
<div class="rounded-md">Medium radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-xl">Extra large radius</div>
<div class="rounded-2xl">2X large radius</div>
<div class="rounded-3xl">3X large radius</div>
<div class="rounded-full">Full circle/pill</div>

<!-- Individual corners -->
<div class="rounded-t-lg">Top corners</div>
<div class="rounded-r-lg">Right corners</div>
<div class="rounded-b-lg">Bottom corners</div>
<div class="rounded-l-lg">Left corners</div>
<div class="rounded-tl-lg">Top-left only</div>
\`\`\`

## Opacity

\`\`\`html
<div class="opacity-0">Invisible</div>
<div class="opacity-25">25% visible</div>
<div class="opacity-50">50% visible</div>
<div class="opacity-75">75% visible</div>
<div class="opacity-100">Fully visible</div>
\`\`\`

## Blur

\`\`\`html
<div class="blur-none">No blur</div>
<div class="blur-sm">Small blur</div>
<div class="blur">Default blur</div>
<div class="blur-lg">Large blur</div>
<div class="blur-2xl">Extra large blur</div>

<!-- Backdrop blur (for glassmorphism) -->
<div class="backdrop-blur-sm bg-white/30">
    Glass effect
</div>
\`\`\`

---

## Your Mission
Create a modern card with shadows and effects.
                    `,
                    tasks: [
                        { id: 1, description: 'Add "shadow-lg" or "shadow-xl" class to the main card <div> (line 9) for large shadow', completed: false, regex: /shadow-(lg|xl|2xl)/ },
                        { id: 2, description: 'Add "rounded-xl" or "rounded-2xl" class to the main card <div> (line 9) for extra rounded corners', completed: false, regex: /rounded-(xl|2xl|3xl)/ },
                        { id: 3, description: 'Add "hover:shadow-2xl" class to the main card <div> (line 9) for hover shadow effect', completed: false, regex: /hover:shadow/ },
                        { id: 4, description: 'Add "bg-gradient-to-r from-blue-500 to-purple-600" to the icon <div> (line 10) for gradient background', completed: false, regex: /bg-gradient-to/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8 flex items-center justify-center min-h-screen">
    <!-- Create a modern card with shadows and effects -->
    <div class="bg-white p-8 max-w-md">
        <div class="w-16 h-16 bg-blue-500 mb-4"></div>
        <h2 class="text-2xl font-bold mb-2">Modern Card</h2>
        <p class="text-gray-600 mb-4">
            Add shadows, rounded corners, and hover effects to make this card look amazing!
        </p>
        <button class="bg-blue-600 text-white px-6 py-2">
            Learn More
        </button>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-3-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Transitions & Animations',
                    duration: '25 min',
                    content: `
# Transitions & Animations

## Transitions

Add smooth transitions to property changes:

\`\`\`html
<!-- Transition all properties -->
<button class="transition hover:bg-blue-600">
    Smooth transition
</button>

<!-- Transition specific properties -->
<div class="transition-colors hover:bg-blue-500">Colors only</div>
<div class="transition-transform hover:scale-110">Transform only</div>
<div class="transition-opacity hover:opacity-50">Opacity only</div>
<div class="transition-shadow hover:shadow-lg">Shadow only</div>
\`\`\`

## Duration

\`\`\`html
<div class="transition duration-75">75ms</div>
<div class="transition duration-150">150ms (default)</div>
<div class="transition duration-300">300ms</div>
<div class="transition duration-500">500ms</div>
<div class="transition duration-1000">1000ms</div>
\`\`\`

## Timing Functions

\`\`\`html
<div class="transition ease-linear">Linear</div>
<div class="transition ease-in">Ease in</div>
<div class="transition ease-out">Ease out</div>
<div class="transition ease-in-out">Ease in-out</div>
\`\`\`

## Transform

\`\`\`html
<!-- Scale -->
<div class="hover:scale-105">Scale up 5%</div>
<div class="hover:scale-110">Scale up 10%</div>
<div class="hover:scale-95">Scale down 5%</div>

<!-- Rotate -->
<div class="hover:rotate-45">Rotate 45°</div>
<div class="hover:rotate-90">Rotate 90°</div>
<div class="hover:-rotate-12">Rotate -12°</div>

<!-- Translate -->
<div class="hover:translate-x-2">Move right</div>
<div class="hover:-translate-y-2">Move up</div>

<!-- Skew -->
<div class="hover:skew-x-12">Skew X</div>
<div class="hover:skew-y-6">Skew Y</div>
\`\`\`

## Animations

Built-in animations:

\`\`\`html
<div class="animate-spin">Spinning</div>
<div class="animate-ping">Pinging</div>
<div class="animate-zerocode">Pulsing</div>
<div class="animate-bounce">Bouncing</div>
\`\`\`

## Combining Effects

\`\`\`html
<button class="
    bg-blue-600 text-white px-6 py-3 rounded-lg
    transition-all duration-300
    hover:bg-blue-700 hover:scale-105 hover:shadow-lg
    active:scale-95
">
    Interactive Button
</button>
\`\`\`

---

## Your Mission
Create an interactive card with smooth transitions.
                    `,
                    tasks: [
                        { id: 1, description: 'Add "transition-all" class to all three card <div> elements (lines 5, 11, 17) for smooth animation', completed: false, regex: /transition(-all)?/ },
                        { id: 2, description: 'Add "hover:scale-105" class to all three card <div> elements for zoom effect on hover', completed: false, regex: /hover:scale/ },
                        { id: 3, description: 'Add "hover:shadow-xl" class to all three card <div> elements for shadow on hover', completed: false, regex: /hover:shadow/ },
                        { id: 4, description: 'Add "duration-300" class to all three card <div> elements for 300ms animation duration', completed: false, regex: /duration-\d+/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 p-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Add transitions and hover effects to these cards -->
        <div class="bg-white p-6 rounded-lg">
            <div class="w-12 h-12 bg-blue-500 rounded-full mb-4"></div>
            <h3 class="text-xl font-bold mb-2">Card 1</h3>
            <p class="text-gray-600">Hover over me!</p>
        </div>

        <div class="bg-white p-6 rounded-lg">
            <div class="w-12 h-12 bg-purple-500 rounded-full mb-4"></div>
            <h3 class="text-xl font-bold mb-2">Card 2</h3>
            <p class="text-gray-600">I should scale up!</p>
        </div>

        <div class="bg-white p-6 rounded-lg">
            <div class="w-12 h-12 bg-pink-500 rounded-full mb-4"></div>
            <h3 class="text-xl font-bold mb-2">Card 3</h3>
            <p class="text-gray-600">Add shadow on hover!</p>
        </div>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Advanced Styling Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does "hover:scale-110" do?',
                            options: [
                                'Scales element to 110px',
                                'Scales element to 110% on hover',
                                'Adds 110px padding on hover',
                                'Rotates 110 degrees'
                            ],
                            correctIndex: 1,
                            explanation: 'scale-110 scales the element to 110% of its original size when hovered.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you create a gradient from blue to purple?',
                            options: [
                                'gradient-blue-purple',
                                'bg-gradient blue purple',
                                'bg-gradient-to-r from-blue-500 to-purple-600',
                                'color-gradient-blue-purple'
                            ],
                            correctIndex: 2,
                            explanation: 'Use bg-gradient-to-[direction] with from-[color] and to-[color] classes.'
                        }
                    ]
                }
            ]
};
