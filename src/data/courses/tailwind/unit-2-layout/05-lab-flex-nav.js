import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1FlexNav = {
    id: 'tailwind-2-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: Flexbox Navigation',
    duration: '25 min',
    content: `
# Lab 1: Flexbox Navigation 🧭

## Scenario
You are building the main navigation header for **"CloudScale"**, a modern SaaS platform.
A header is the most viewed component on any site. It needs to be perfectly aligned.
You have 3 groups of items: The Logo (Left), The Links (Center), and The Sign In Button (Right).

## The Mission
1.  **Structure**: Use a \`nav\` container. Align items horizontally using Flexbox to avoid manual floats or positioning.
2.  **Distribution**: Use \`justify-between\` to push the Logo and Button to the far edges, leaving the links in the middle.
3.  **Spacing**: Use \`items-center\` to ensure the logo and button are vertically aligned perfectly in the center of the bar.

## Layout Logic
\`\`\`text
[Logo] <----- justify-between -----> [Links] <----- justify-between -----> [Button]
\`\`\`
    `,
    tasks: [
        {
            id: 1,
            description: 'Container: flex justify-between items-center p-4 bg-white shadow.',
            completed: false,
            regex: /<nav[^>]*class=["'](?=.*\bflex\b)(?=.*\bjustify-between\b)(?=.*\bitems-center\b)(?=.*\bp-4\b)(?=.*\bbg-white\b)(?=.*\bshadow\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Links Group: flex gap-6 text-gray-600.',
            completed: false,
            regex: /<ul[^>]*class=["'](?=.*\bflex\b)(?=.*\bgap-6\b)(?=.*\btext-gray-600\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Button: bg-blue-600 text-white px-4 py-2 rounded.',
            completed: false,
            regex: /<button[^>]*class=["'](?=.*\bbg-blue-600\b)(?=.*\btext-white\b)(?=.*\bpx-4\b)(?=.*\bpy-2\b)(?=.*\brounded\b)[^"']*["']/
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
<body class="bg-gray-100">

    <!-- Task 1: Main Container -->
    <nav class="">
        
        <div class="font-bold text-xl">ZeroCode</div>

        <!-- Task 2: Links Container -->
        <ul class="">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
        </ul>

        <!-- Task 3: CTA Button -->
        <button class="">Sign In</button>

    </nav>

</body>
</html>`
        }
    ]
};
