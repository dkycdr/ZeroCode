import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Composition = {
    id: 'tailwind-1-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Component Composition',
    duration: '30 min',
    content: `
# Lab 4: Component Composition 🧩

## Scenario
You are building **"FaceSpace"** (A social network).
You need a reusable **User Badge** component to display author info across the site.
It needs to be compact, rounded (pill-shaped), and include an avatar image next to the username.

## The Mission
1.  **The "Pill"**: A rounded container that hugs its content (\`inline-flex\`).
2.  **The Context**: Use \`items-center\` to ensure the text and image are vertically aligned.
3.  **The Polish**: Add a subtle shadow and padding to make it look touchable.

## Why "inline-flex"?
A normal \`div\` is a block (full width). We want the badge to be only as wide as the name inside it.
    `,
    tasks: [
        {
            id: 1,
            description: 'Pill Container: inline-flex items-center bg-white rounded-full p-1 pr-4 shadow.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\binline-flex\b)(?=.*\bitems-center\b)(?=.*\bbg-white\b)(?=.*\brounded-full\b)(?=.*\bp-1\b)(?=.*\bpr-4\b)(?=.*\bshadow\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Avatar: w-8 h-8 rounded-full bg-blue-500.',
            completed: false,
            regex: /<img[^>]*class=["'](?=.*\bw-8\b)(?=.*\bh-8\b)(?=.*\brounded-full\b)(?=.*\bbg-blue-500\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Text: ml-3 font-medium text-gray-700.',
            completed: false,
            regex: /<span[^>]*class=["'](?=.*\bml-3\b)(?=.*\bfont-medium\b)(?=.*\btext-gray-700\b)[^"']*["']/
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
<body class="p-10 bg-gray-100">

    <!-- Task 1: The Pill Wrapper -->
    <div class="">
        
        <!-- Task 2: Avatar Image (using a placeholder src) -->
        <img 
            src="https://avatars.githubusercontent.com/u/1?v=4" 
            alt="User" 
            class=""
        >
        
        <!-- Task 3: Name -->
        <span class="">
            Mojombo
        </span>
        
    </div>

</body>
</html>`
        }
    ]
};
