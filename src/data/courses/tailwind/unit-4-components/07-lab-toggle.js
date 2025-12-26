import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Toggle = {
    id: 'tailwind-4-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: Toggle Switch 🎚️',
    duration: '25 min',
    content: `
# Lab 3: Toggle Switch 🎚️

## Scenario
You are building the "Settings" page for an iPhone app.
You need that satisfying "Slide to Unlock" feeling for the configuration toggles.
We are building a pure CSS toggle (Checkboxes in disguise).

## The Mission
1.  **The Track**: A rounded pill (\`rounded-full\`). Gray when off, Blue when on (\`peer-checked:bg-blue-600\`).
2.  **The Thumb**: A white circle. Left when off, Right when on (\`peer-checked:translate-x-full\`).

## Logic
We use the Checkbox as the "Brain" (Logic), but we hide it visually.
The "Track" and "Thumb" are just decorative divs that react to the Checkbox's state via \`peer\`.
    `,
    tasks: [
        {
            id: 1,
            description: 'Track: bg-gray-200 peer-checked:bg-blue-600 w-11 h-6 rounded-full.',
            completed: false,
            regex: /<div[^>]*class=["'](?=.*\bbg-gray-200\b)(?=.*\bpeer-checked:bg-blue-600\b)(?=.*\bw-11\b)(?=.*\bh-6\b)(?=.*\brounded-full\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Thumb: peer-checked:translate-x-full absolute top-[2px] left-[2px] bg-white rounded-full.',
            completed: false,
            regex: /class=["'](?=.*\bpeer-checked:translate-x-full\b)(?=.*\babsolute\b)(?=.*\bbg-white\b)(?=.*\brounded-full\b)[^"']*["']/
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
<body class="p-20">

    <div class="mt-10">
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer">
            <!-- Task 1: Track -->
            <div class="">
                <!-- Track acts as container -->
            </div>
            <!-- Task 2: Thumb (Absolute) -->
            <div class=""></div>
            
            <span class="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
        </label>
    </div>

</body>
</html>`
        }
    ]
};
