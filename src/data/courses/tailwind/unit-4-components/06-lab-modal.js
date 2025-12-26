import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Modal = {
    id: 'tailwind-4-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: The Modal Dialog 🪟',
    duration: '35 min',
    content: `
# Lab 2: The Modal Dialog 🪟

## Scenario
A user blindly clicked "Delete Account".
You MUST stop them with a Confirmation Modal.
This modal needs to block the entire screen so they focus on the decision.

## The Mission
1.  **The Blackout**: Create a "Backdrop" that covers the screen (\`fixed inset-0\`) with semi-transparent black (\`bg-gray-500/75\`).
2.  **The Spotlight**: Center the modal panel using Flexbox utilities on the backdrop.
3.  **The Panel**: A white box (\`bg-white\`) with a shadow so deep it looks like it's floating (\`shadow-xl\`).

## Z-Index Logic
The Backdrop needs \`z-50\` to sit on top of everything else on the page.
    `,
    tasks: [
        {
            id: 1,
            description: 'Backdrop: fixed inset-0 bg-gray-500/75 z-50 flex items-center justify-center.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\bfixed\b)(?=.*\binset-0\b)(?=.*\bbg-gray-500\/75\b)(?=.*\bz-50\b)(?=.*\bflex\b)(?=.*\bitems-center\b)(?=.*\bjustify-center\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Modal Panel: bg-white rounded-lg shadow-xl w-full max-w-lg.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\bbg-white\b)(?=.*\brounded-lg\b)(?=.*\bshadow-xl\b)(?=.*\bw-full\b)(?=.*\bmax-w-lg\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Footer: bg-gray-50 px-4 py-3 flex flex-row-reverse.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\bbg-gray-50\b)(?=.*\bpx-4\b)(?=.*\bpy-3\b)(?=.*\bflex\b)(?=.*\bflex-row-reverse\b)[^"']*["']/
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
<body class="h-screen bg-gray-100 p-10">

    <button>Open Modal (Fake)</button>

    <!-- Task 1: The Backdrop Overlay -->
    <div class="" aria-modal="true">
        
        <!-- Task 2: The Modal Panel -->
        <div class="">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Deactivate account</h3>
                <div class="mt-2">
                    <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                </div>
            </div>
            
            <!-- Task 3: Footer Actions -->
            <div class="">
                <button type="button" class="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm text-base font-medium hover:bg-red-700 ml-3">
                    Deactivate
                </button>
                <button type="button" class="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md shadow-sm text-base font-medium hover:bg-gray-50">
                    Cancel
                </button>
            </div>
        </div>
        
    </div>

</body>
</html>`
        }
    ]
};
