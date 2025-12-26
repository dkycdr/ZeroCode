import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3FloatingLabel = {
    id: 'tailwind-3-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: Floating Input Label',
    duration: '30 min',
    content: `
# Lab 3: Floating Label (Material Design) 📨

## Scenario
You are building the Login form for **"Google"**.
They use the "Floating Label" pattern: The label sits inside the input (like a placeholder), but moves up when you type.
This saves vertical space and looks incredibly clean.

## The Mission
1.  **Peer**: The Input needs to tell the Label (its neighbor) what to do. Add \`peer\` to the Input.
2.  **Placeholder Trick**: We abuse the \`placeholder-shown\` state to detect if the input is empty or has text.
3.  **Float Logic**:
    *   **If empty**: Label sits inside (\`top-2\`).
    *   **If focused OR has text**: Label floats to top (\`-top-3.5\`) and turns blue.

## Connection
Using \`peer\` allows two separate HTML elements to communicate style changes purely with CSS.
    `,
    tasks: [
        {
            id: 1,
            description: 'Input: Add "peer" and "placeholder-transparent".',
            completed: false,
            regex: /<input[^>]*class=["'](?=.*\bpeer\b)(?=.*\bplaceholder-transparent\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Label Base: absolute left-2 -top-3.5 text-gray-600 text-sm transition-all.',
            completed: false,
            regex: /<label[^>]*class=["'](?=.*\babsolute\b)(?=.*\bleft-2\b)(?=.*\b-top-3\.5\b)(?=.*\btext-gray-600\b)(?=.*\btext-sm\b)(?=.*\btransition-all\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Label Return: peer-placeholder-shown:text-base peer-placeholder-shown:top-2.',
            completed: false,
            regex: /<label[^>]*class=["'](?=.*\bpeer-placeholder-shown:text-base\b)(?=.*\bpeer-placeholder-shown:top-2\b)[^"']*["']/
        },
        {
            id: 4,
            description: 'Label Focus: peer-focus:-top-3.5 peer-focus:text-blue-600.',
            completed: false,
            regex: /<label[^>]*class=["'](?=.*\bpeer-focus:-top-3\.5\b)(?=.*\bpeer-focus:text-blue-600\b)[^"']*["']/
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
<body class="p-20 bg-white">

    <div class="relative w-64 mt-10">
        <!-- Task 1: The Peer Input -->
        <input 
            type="text" 
            id="email" 
            placeholder="john@example.com" 
            class="border-b-2 border-gray-300 focus:border-blue-600 outline-none w-full py-2"
        />

        <!-- Task 2,3,4: The Floating Label -->
        <label 
            for="email" 
            class=""
        >
            Email Address
        </label>
    </div>

</body>
</html>`
        }
    ]
};
