import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Sidebar = {
    id: 'tailwind-2-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: The Sidebar Application',
    duration: '30 min',
    content: `
# Lab 3: The Sidebar Application 📊

## Scenario
You are building the **Admin Dashboard** for a crypto analytics platform.
The user needs to navigate between "Portfolio", "Market", and "Settings" quickly.
The navigation sidebar must remain **Fixed** on the left side, even when the user scrolls down a long list of transactions.

## The Mission
1.  **The Sidebar**: Pin it to the left edge using \`fixed\`. Make it full height (\`inset-y-0\`) and give it a dark theme.
2.  **The Main Content**: If you just add content, it will disappear *under* the sidebar. You must add a **Left Margin** (\`ml-64\`) equal to the sidebar's width to push the content into view.

## Concept
**Fixed Position** removes an element from the document flow. You have to manually compensate for the space it occupied.
    `,
    tasks: [
        {
            id: 1,
            description: 'Sidebar: fixed inset-y-0 left-0 w-64 bg-gray-900.',
            completed: false,
            regex: /<aside[^>]*class=["'](?=.*\bfixed\b)(?=.*\binset-y-0\b)(?=.*\bleft-0\b)(?=.*\bw-64\b)(?=.*\bbg-gray-900\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Sidebar Content: Add p-6 and text-white.',
            completed: false,
            regex: /<aside[^>]*class=["'](?=.*\bp-6\b)(?=.*\btext-white\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Main Wrapper: ml-64 p-8 min-h-screen.',
            completed: false,
            regex: /<main[^>]*class=["'](?=.*\bml-64\b)(?=.*\bp-8\b)(?=.*\bmin-h-screen\b)[^"']*["']/
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
<body class="bg-gray-50">

    <!-- Task 1 & 2: The Sidebar -->
    <aside class="">
        <h1 class="font-bold text-2xl">Dashboard</h1>
        <ul class="mt-8 space-y-4">
            <li>Overview</li>
            <li>Analytics</li>
            <li>Settings</li>
        </ul>
    </aside>

    <!-- Task 3: Main Content Area -->
    <main class="">
        <div class="bg-white p-8 rounded shadow">
            <h2 class="text-xl font-bold">Welcome back!</h2>
            <p class="mt-4 text-gray-600">Here is your daily report.</p>
        </div>
    </main>

</body>
</html>`
        }
    ]
};
