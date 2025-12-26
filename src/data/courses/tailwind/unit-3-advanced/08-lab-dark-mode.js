import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4DarkMode = {
    id: 'tailwind-3-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Dark Mode Toggle',
    duration: '25 min',
    content: `
# Lab 4: Dark Mode 🌙

## Scenario
It's 2 AM. Your user opens your app. A bright white screen blinds them.
You need to support **Dark Mode**.
However, relying on the OS setting isn't enough; users want a manual toggle switch.

## The Mission
We will simulate a "Class-based" Dark Mode logic.
1.  **The Trigger**: We add the class \`dark\` to the parent container (simulating the \`<html>\` tag).
2.  **The Adaptation**:
    *   **Background**: White ➡ Gray-800.
    *   **Text**: Black ➡ White.
    *   **Description**: Gray-500 ➡ Gray-400 (Adjust contrast).

## Concept
Prefixing a class with \`dark:\` tells it: "Only apply this style IF a parent has the class \`dark\`."
    `,
    tasks: [
        {
            id: 1,
            description: 'Wrapper: Ensure class="dark" is present (for simulation).',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\b(dark)\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Card Background: bg-white dark:bg-gray-800.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\bbg-white\b)(?=.*\bdark:bg-gray-800\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Title Text: text-gray-900 dark:text-white.',
            completed: false,
            regex: /<h3[^>]*class=["'](?=.*\btext-gray-900\b)(?=.*\bdark:text-white\b)[^"']*["']/
        },
        {
            id: 4,
            description: 'Body Text: text-gray-500 dark:text-gray-400.',
            completed: false,
            regex: /<p[^>]*class=["'](?=.*\btext-gray-500\b)(?=.*\bdark:text-gray-400\b)[^"']*["']/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
    </script>
</head>
<body class="p-10 bg-gray-200">

    <!-- Task 1: Add "dark" here to test dark mode -->
    <div class="p-10">
        
        <!-- Task 2: Card Background -->
        <div class="rounded-lg shadow-lg p-6 max-w-sm mx-auto">
            
            <!-- Task 3: Title -->
            <h3 class="text-2xl font-bold mb-2">Dark Mode Ready</h3>
            
            <!-- Task 4: Body -->
            <p class="">
                This card automatically adapts to system themes or user toggles.
            </p>

        </div>

    </div>

</body>
</html>`
        }
    ]
};
