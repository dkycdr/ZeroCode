// Tailwind CSS - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const tailwindCourse = {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'Master utility-first CSS framework for rapid UI development.',
    
    units: [
        // ============================================
        // UNIT 1: Introduction to Tailwind
        // ============================================
        {
            id: 'tailwind-unit-1',
            title: 'Introduction to Tailwind',
            description: 'Understand utility-first CSS approach',
            items: [
                {
                    id: 'tailwind-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is Tailwind CSS?',
                    duration: '5 min read',
                    content: `
# What is Tailwind CSS?

**Tailwind CSS** is a utility-first CSS framework that lets you build designs directly in your HTML.

## Traditional CSS vs Tailwind

### Traditional CSS
\`\`\`html
<div class="card">
    <h2 class="card-title">Title</h2>
</div>
\`\`\`

\`\`\`css
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.card-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}
\`\`\`

### Tailwind CSS
\`\`\`html
<div class="bg-white p-5 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-gray-800">Title</h2>
</div>
\`\`\`

No CSS file needed! 🎉

## Benefits

| Benefit | Description |
|---------|-------------|
| **Fast Development** | No context switching between HTML and CSS |
| **Consistent Design** | Predefined spacing, colors, sizes |
| **Responsive** | Mobile-first utilities built-in |
| **Small Bundle** | Only includes classes you use |
| **No Naming** | No more "what should I call this class?" |

## Who Uses Tailwind?

- GitHub, Netflix, NASA
- Laravel, Next.js (official docs)
- Over 1 million developers

> 💡 "Tailwind CSS is the most popular CSS framework in 2024" - State of CSS Survey
                    `
                },
                {
                    id: 'tailwind-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Tailwind Basics',
                    duration: '20 min',
                    content: `
# Tailwind Basics

## Core Concepts

### Utility Classes
Each class does ONE thing:

\`\`\`html
<!-- Padding -->
<div class="p-4">      <!-- padding: 1rem (16px) -->
<div class="px-4">     <!-- padding-left & right -->
<div class="py-4">     <!-- padding-top & bottom -->
<div class="pt-4">     <!-- padding-top only -->

<!-- Margin -->
<div class="m-4">      <!-- margin: 1rem -->
<div class="mx-auto">  <!-- margin: 0 auto (center) -->

<!-- Colors -->
<div class="bg-blue-500">      <!-- background -->
<div class="text-red-600">     <!-- text color -->
<div class="border-gray-300">  <!-- border color -->
\`\`\`

## Spacing Scale

Tailwind uses a consistent spacing scale:

| Class | Value | Pixels |
|-------|-------|--------|
| \`p-0\` | 0 | 0px |
| \`p-1\` | 0.25rem | 4px |
| \`p-2\` | 0.5rem | 8px |
| \`p-4\` | 1rem | 16px |
| \`p-8\` | 2rem | 32px |
| \`p-16\` | 4rem | 64px |

## Color Palette

\`\`\`html
<!-- Shades: 50 (lightest) to 950 (darkest) -->
<div class="bg-blue-50">    <!-- Very light blue -->
<div class="bg-blue-500">   <!-- Medium blue -->
<div class="bg-blue-900">   <!-- Very dark blue -->
\`\`\`

## Typography

\`\`\`html
<h1 class="text-4xl font-bold">Heading</h1>
<p class="text-base text-gray-600">Paragraph</p>
<span class="text-sm italic">Small text</span>
\`\`\`

---

## Your Mission
Build a card component using Tailwind utilities.
                    `,
                    tasks: [
                        { id: 1, description: 'Add "bg-white" class to the <div> card container (line 8) for white background', completed: false, regex: /bg-white/ },
                        { id: 2, description: 'Add "p-6" or "p-8" class to the <div> card container (line 8) for padding', completed: false, regex: /p-[468]/ },
                        { id: 3, description: 'Add "rounded-lg" class to the <div> card container (line 8) for rounded corners', completed: false, regex: /rounded-lg/ },
                        { id: 4, description: 'Add "shadow-md" or "shadow-lg" class to the <div> card container (line 8) for shadow', completed: false, regex: /shadow-(md|lg)/ },
                        { id: 5, description: 'Add "text-2xl font-bold" classes to the <h2> element (line 9) for heading style', completed: false, regex: /text-2xl[\s\S]*font-bold|font-bold[\s\S]*text-2xl/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <!-- Build a card here using Tailwind classes -->
    <div class="">
        <h2 class="">Card Title</h2>
        <p class="">This is a card component built with Tailwind CSS.</p>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `/* No custom CSS needed with Tailwind! */` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Tailwind Basics Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does "utility-first" mean?',
                            options: [
                                'Utilities come before CSS',
                                'Small single-purpose classes',
                                'JavaScript utilities',
                                'Mobile-first design'
                            ],
                            correctIndex: 1,
                            explanation: 'Utility-first means using small, single-purpose classes instead of writing custom CSS.'
                        },
                        {
                            id: 'q2',
                            question: 'What does "p-4" do?',
                            options: [
                                'Adds 4px padding',
                                'Adds 1rem (16px) padding',
                                'Adds 4rem padding',
                                'Adds 40px padding'
                            ],
                            correctIndex: 1,
                            explanation: 'p-4 adds 1rem (16px) padding on all sides. The scale is: 1=4px, 2=8px, 4=16px, 8=32px.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Layout with Tailwind
        // ============================================
        {
            id: 'tailwind-unit-2',
            title: 'Layout with Tailwind',
            description: 'Build responsive layouts with Flexbox and Grid',
            items: [
                {
                    id: 'tailwind-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Flexbox in Tailwind',
                    duration: '25 min',
                    content: `
# Flexbox in Tailwind

## Basic Flexbox

\`\`\`html
<div class="flex">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
\`\`\`

## Direction

\`\`\`html
<div class="flex flex-row">      <!-- Horizontal (default) -->
<div class="flex flex-col">      <!-- Vertical -->
<div class="flex flex-row-reverse">  <!-- Reverse -->
\`\`\`

## Justify Content (Main Axis)

\`\`\`html
<div class="flex justify-start">     <!-- Left -->
<div class="flex justify-center">    <!-- Center -->
<div class="flex justify-end">       <!-- Right -->
<div class="flex justify-between">   <!-- Space between -->
<div class="flex justify-around">    <!-- Space around -->
\`\`\`

## Align Items (Cross Axis)

\`\`\`html
<div class="flex items-start">    <!-- Top -->
<div class="flex items-center">   <!-- Middle -->
<div class="flex items-end">      <!-- Bottom -->
<div class="flex items-stretch">  <!-- Fill height -->
\`\`\`

## Gap

\`\`\`html
<div class="flex gap-4">   <!-- 1rem gap between items -->
<div class="flex gap-x-4"> <!-- Horizontal gap only -->
<div class="flex gap-y-4"> <!-- Vertical gap only -->
\`\`\`

## Perfect Centering

\`\`\`html
<div class="flex items-center justify-center h-screen">
    <div>Perfectly Centered!</div>
</div>
\`\`\`

---

## Your Mission
Build a navigation bar with Flexbox.
                    `,
                    tasks: [
                        { id: 1, description: 'Add "flex" class to the <div> inside <nav> (line 9) to create a flexbox container', completed: false, regex: /class="[^"]*flex[^"]*"/ },
                        { id: 2, description: 'Add "justify-between" class to the <div> container (line 9) for spacing between logo and menu', completed: false, regex: /justify-between/ },
                        { id: 3, description: 'Add "items-center" class to the <div> container (line 9) for vertical alignment', completed: false, regex: /items-center/ },
                        { id: 4, description: 'Add "gap-4" or "gap-6" class to the menu links <div> (line 11) for spacing between links', completed: false, regex: /gap-[46]/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Build a navbar with Flexbox -->
    <nav class="bg-gray-800 text-white p-4">
        <div class="">
            <div class="text-xl font-bold">ZeroCode</div>
            <div class="">
                <a href="#" class="hover:text-blue-400">Home</a>
                <a href="#" class="hover:text-blue-400">Courses</a>
                <a href="#" class="hover:text-blue-400">About</a>
            </div>
            <button class="bg-blue-500 px-4 py-2 rounded">Login</button>
        </div>
    </nav>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Responsive Design',
                    duration: '20 min',
                    content: `
# Responsive Design in Tailwind

## Breakpoints

Tailwind is mobile-first. Add prefixes for larger screens:

| Prefix | Min Width | Device |
|--------|-----------|--------|
| (none) | 0px | Mobile (default) |
| \`sm:\` | 640px | Small tablet |
| \`md:\` | 768px | Tablet |
| \`lg:\` | 1024px | Laptop |
| \`xl:\` | 1280px | Desktop |
| \`2xl:\` | 1536px | Large desktop |

## Example

\`\`\`html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
</div>
\`\`\`

## Responsive Text

\`\`\`html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
    Responsive Heading
</h1>
\`\`\`

## Hide/Show on Different Screens

\`\`\`html
<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">Desktop Only</div>

<!-- Show on mobile, hide on desktop -->
<div class="block lg:hidden">Mobile Only</div>
\`\`\`

---

## Your Mission
Create a responsive card grid.
                    `,
                    tasks: [
                        { id: 1, description: 'Add "grid grid-cols-1" classes to the grid container <div> (line 10) for 1 column on mobile', completed: false, regex: /grid[\s\S]*grid-cols-1/ },
                        { id: 2, description: 'Add "md:grid-cols-2" class to the grid container <div> (line 10) for 2 columns on tablet', completed: false, regex: /md:grid-cols-2/ },
                        { id: 3, description: 'Add "lg:grid-cols-3" class to the grid container <div> (line 10) for 3 columns on desktop', completed: false, regex: /lg:grid-cols-3/ },
                        { id: 4, description: 'Add "gap-4" or "gap-6" class to the grid container <div> (line 10) for spacing between cards', completed: false, regex: /gap-[46]/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <h1 class="text-3xl font-bold mb-6">Responsive Grid</h1>
    
    <!-- Create responsive grid here -->
    <div class="">
        <div class="bg-white p-6 rounded-lg shadow">Course 1</div>
        <div class="bg-white p-6 rounded-lg shadow">Course 2</div>
        <div class="bg-white p-6 rounded-lg shadow">Course 3</div>
        <div class="bg-white p-6 rounded-lg shadow">Course 4</div>
        <div class="bg-white p-6 rounded-lg shadow">Course 5</div>
        <div class="bg-white p-6 rounded-lg shadow">Course 6</div>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Layout Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does "md:text-2xl" mean?',
                            options: [
                                'Medium text size',
                                'Text size 2xl on medium screens and up',
                                'Text size 2xl on mobile only',
                                'Markdown text'
                            ],
                            correctIndex: 1,
                            explanation: 'md: prefix applies styles on medium screens (768px) and larger.'
                        },
                        {
                            id: 'q2',
                            question: 'Tailwind is mobile-first. What does this mean?',
                            options: [
                                'Only works on mobile',
                                'Base styles are for mobile, add prefixes for larger screens',
                                'Desktop styles come first',
                                'Requires a mobile device'
                            ],
                            correctIndex: 1,
                            explanation: 'Mobile-first means unprefixed classes apply to all screens, then you add md:, lg: etc for larger screens.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: Advanced Styling
        // ============================================
        {
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
        },

        // ============================================
        // UNIT 4: Components & Patterns
        // ============================================
        {
            id: 'tailwind-unit-4',
            title: 'Components & Patterns',
            description: 'Build reusable UI components',
            items: [
                {
                    id: 'tailwind-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Common UI Patterns',
                    duration: '10 min read',
                    content: `
# Common UI Patterns

## Button Variants

### Primary Button
\`\`\`html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
    Primary Action
</button>
\`\`\`

### Secondary Button
\`\`\`html
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition">
    Secondary Action
</button>
\`\`\`

### Outline Button
\`\`\`html
<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition">
    Outline Button
</button>
\`\`\`

### Ghost Button
\`\`\`html
<button class="text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition">
    Ghost Button
</button>
\`\`\`

## Card Patterns

### Basic Card
\`\`\`html
<div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-600">Card content goes here.</p>
</div>
\`\`\`

### Card with Image
\`\`\`html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="image.jpg" class="w-full h-48 object-cover">
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Card Title</h3>
        <p class="text-gray-600">Card content.</p>
    </div>
</div>
\`\`\`

### Hover Card
\`\`\`html
<div class="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl hover:scale-105 cursor-pointer">
    <h3 class="text-xl font-bold mb-2">Interactive Card</h3>
    <p class="text-gray-600">Hover over me!</p>
</div>
\`\`\`

## Form Inputs

### Text Input
\`\`\`html
<input 
    type="text" 
    class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
    placeholder="Enter text..."
>
\`\`\`

### Textarea
\`\`\`html
<textarea 
    class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"
    rows="4"
    placeholder="Enter message..."
></textarea>
\`\`\`

### Select Dropdown
\`\`\`html
<select class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>
\`\`\`

## Badges & Tags

\`\`\`html
<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
    New
</span>

<span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
    Active
</span>

<span class="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
    Urgent
</span>
\`\`\`

## Alerts

\`\`\`html
<!-- Success Alert -->
<div class="bg-green-50 border-l-4 border-green-500 p-4 rounded">
    <p class="text-green-800 font-semibold">Success!</p>
    <p class="text-green-700 text-sm">Your action was completed.</p>
</div>

<!-- Error Alert -->
<div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
    <p class="text-red-800 font-semibold">Error!</p>
    <p class="text-red-700 text-sm">Something went wrong.</p>
</div>
\`\`\`

> 💡 **Pro Tip**: Save these patterns as snippets in your code editor for quick reuse!
                    `
                },
                {
                    id: 'tailwind-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Build a Component Library',
                    duration: '30 min',
                    content: `
# Build a Component Library

Create reusable components for your projects.

## Component Structure

Each component should be:
- **Consistent**: Use the same spacing, colors, sizes
- **Responsive**: Work on all screen sizes
- **Accessible**: Include proper ARIA labels
- **Interactive**: Provide visual feedback

## Example: Profile Card Component

\`\`\`html
<div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Cover Image -->
    <div class="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
    
    <!-- Avatar -->
    <div class="relative px-6 -mt-16">
        <img 
            src="avatar.jpg" 
            class="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        >
    </div>
    
    <!-- Content -->
    <div class="px-6 py-4">
        <h2 class="text-2xl font-bold text-gray-800">John Doe</h2>
        <p class="text-gray-600">Software Engineer</p>
        
        <!-- Stats -->
        <div class="flex gap-4 mt-4">
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-800">1.2K</div>
                <div class="text-xs text-gray-500">Followers</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-800">543</div>
                <div class="text-xs text-gray-500">Following</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-800">89</div>
                <div class="text-xs text-gray-500">Posts</div>
            </div>
        </div>
        
        <!-- Action Button -->
        <button class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
            Follow
        </button>
    </div>
</div>
\`\`\`

---

## Your Mission
Build a complete component library with buttons, cards, and forms.
                    `,
                    tasks: [
                        { id: 1, description: 'Create at least 3 button variants', completed: false, regex: /(bg-blue|bg-gray|border-2).*button/i },
                        { id: 2, description: 'Create a card with image and content', completed: false, regex: /(img|image)[\s\S]*<div/ },
                        { id: 3, description: 'Create a form with styled inputs', completed: false, regex: /<input[\s\S]*border-2/ },
                        { id: 4, description: 'Add hover effects to interactive elements', completed: false, regex: /hover:(bg|scale|shadow)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <h1 class="text-4xl font-bold mb-8">Component Library</h1>
    
    <!-- Build your components here -->
    <div class="space-y-8">
        <section>
            <h2 class="text-2xl font-bold mb-4">Buttons</h2>
            <!-- Add button variants here -->
        </section>
        
        <section>
            <h2 class="text-2xl font-bold mb-4">Cards</h2>
            <!-- Add card components here -->
        </section>
        
        <section>
            <h2 class="text-2xl font-bold mb-4">Forms</h2>
            <!-- Add form components here -->
        </section>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Components Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What makes a good reusable component?',
                            options: [
                                'Lots of custom CSS',
                                'Consistent styling and responsive design',
                                'Complex JavaScript',
                                'Inline styles'
                            ],
                            correctIndex: 1,
                            explanation: 'Good components are consistent, responsive, accessible, and provide visual feedback.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you create a pill-shaped badge?',
                            options: [
                                'rounded-pill',
                                'rounded-full',
                                'border-radius-full',
                                'shape-pill'
                            ],
                            correctIndex: 1,
                            explanation: 'rounded-full creates a fully rounded element, perfect for pills and circles.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 5: Final Project
        // ============================================
        {
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
        }
    ]
};

export default tailwindCourse;
