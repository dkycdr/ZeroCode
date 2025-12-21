import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Introduction = {
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
    <!-- YOUR TASK: Build a card using Tailwind utility classes
         
         Add these classes to the div below:
         1. bg-white - for white background
         2. p-6 or p-8 - for padding
         3. rounded-lg - for rounded corners
         4. shadow-md or shadow-lg - for shadow effect
         
         Add these classes to the h2:
         5. text-2xl font-bold - for heading style
         
         TIPS:
         - Tailwind uses utility classes (each class does one thing)
         - p-4 = padding: 1rem (16px)
         - bg-blue-500 = background-color: blue
         - text-gray-600 = color: gray
    -->
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
};
