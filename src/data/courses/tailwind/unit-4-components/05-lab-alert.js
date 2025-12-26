import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Alert = {
    id: 'tailwind-4-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: Reusable Alerts 🚨',
    duration: '25 min',
    content: `
# Lab 1: Reusable Alerts 🚨

## Scenario
You are building the **Notification System** for a banking app.
Users need to see "Success", "Error", and "Warning" messages.
These alerts need to be consistent, clear, and look "official".

## The Mission
Build the **Success Alert**.
1.  **Identify**: Use Green. \`bg-green-50\` for the box, \`text-green-800\` for text.
2.  **Accent**: Add a thick left border (\`border-l-4\`) using \`border-green-400\`. This adds visual weight.
3.  **Layout**: Use Flexbox to put the Checkmark Icon next to the Text.

## Concept
Using "Tints" (Green-50) for backgrounds and "Shades" (Green-800) for text is the secret to professional UI color pairing.
    `,
    tasks: [
        {
            id: 1,
            description: 'Container: bg-green-50 border-l-4 border-green-400 p-4 rounded-r.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\bbg-green-50\b)(?=.*\bborder-l-4\b)(?=.*\bborder-green-400\b)(?=.*\bp-4\b)(?=.*\brounded-r\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Layout: Flex connection.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\bflex\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Title: text-green-800 font-bold.',
            completed: false,
            regex: /<h3[^>]*class=["'](?=.*\btext-green-800\b)(?=.*\bfont-bold\b)[^"']*["']/
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
<body class="p-10">
    <!-- Task 1: Alert Container -->
    <div class="">
        <!-- Task 2: Flex Wrapper -->
        <div class="">
            <div class="flex-shrink-0">
                <!-- Icon Placeholder -->
                <div class="h-5 w-5 bg-green-400 rounded-full"></div>
            </div>
            <div class="ml-3">
                <!-- Task 3: Title -->
                <h3 class="">Success</h3>
                <div class="text-sm text-green-700">
                    <p>Your account was successfully registered.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
        }
    ]
};
