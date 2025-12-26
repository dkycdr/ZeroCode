import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Button = {
    id: 'tailwind-3-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: The Perfect Button',
    duration: '20 min',
    content: `
# Lab 1: The Perfect Button 👆

## Scenario
You are building the **Design System** for a new app.
The "Primary Button" needs to feel tactile and satisfying to click.
It's not just a rectangle; it's an interactive surface.

## The Mission
1.  **Base Layer**: A majestic blue button. Rounded, with a subtle shadow.
2.  **Hover (Lift)**: When hovered, the button should "lift" up slightly (\`translate-y\`) and cast a larger shadow to simulate depth.
3.  **Active (Press)**: When clicked, it should snap back down to the surface (\`scale-95\`).

## Physics Settings
Use \`transition-all\` with \`duration-200\` and \`ease-out\` for a snappy feel.
    `,
    tasks: [
        {
            id: 1,
            description: 'Base Styles: bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold.',
            completed: false,
            regex: /<button[^>]*class=["'](?=.*\bbg-blue-600\b)(?=.*\btext-white\b)(?=.*\bpx-6\b)(?=.*\bpy-3\b)(?=.*\brounded-lg\b)(?=.*\bshadow-md\b)(?=.*\bfont-semibold\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Hover State: hover:bg-blue-500 hover:-translate-y-1 hover:shadow-lg.',
            completed: false,
            regex: /<button[^>]*class=["'](?=.*\bhover:bg-blue-500\b)(?=.*\bhover:-translate-y-1\b)(?=.*\bhover:shadow-lg\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Active State: active:bg-blue-700 active:translate-y-0 active:shadow-sm.',
            completed: false,
            regex: /<button[^>]*class=["'](?=.*\bactive:bg-blue-700\b)(?=.*\bactive:translate-y-0\b)(?=.*\bactive:shadow-sm\b)[^"']*["']/
        },
        {
            id: 4,
            description: 'Transition: transition-all duration-200.',
            completed: false,
            regex: /<button[^>]*class=["'](?=.*\btransition-all\b)(?=.*\bduration-200\b)[^"']*["']/
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
</head>
<body class="p-20 flex justify-center bg-gray-100">

    <!-- Task 1-4: The Perfect Button -->
    <button class="">
        Click Me
    </button>

</body>
</html>`
        }
    ]
};
