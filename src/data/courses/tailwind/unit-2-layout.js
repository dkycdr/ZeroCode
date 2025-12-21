import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Layout = {
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
};
