import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Counter = {
    id: 'js-u8-lab-5-counter',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Counter App',
    duration: '15 min',
    content: `
# Lab: Counter App

## Build an Interactive Counter
`,
    tasks: [
        {
            id: 1,
            description: 'Select counter display: document.querySelector("#count")',
            completed: false,
            hint: 'Use querySelector with ID selector',
            regex: /document\.querySelector\s*\(\s*["']#count["']\s*\)/
        },
        {
            id: 2,
            description: 'Add click event: button.addEventListener("click", ...)',
            completed: false,
            hint: 'Use addEventListener with "click"',
            regex: /\.addEventListener\s*\(\s*["']click["']/
        },
        {
            id: 3,
            description: 'Update display: countDisplay.textContent = count',
            completed: false,
            hint: 'Change textContent to update the number',
            regex: /\.textContent\s*=\s*count/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Counter</title>
</head>
<body>
    <h1 id="count">0</h1>
    <button id="increment">+</button>
    <button id="decrement">-</button>
    <script src="script.js"></script>
</body>
</html>`
        },
        {
            name: 'script.js',
            language: 'javascript',
            content: `// Counter App
let count = 0;

// Task 1: Select the count display


// Task 2: Select buttons and add click events


// Task 3: Update display when clicked

`
        }
    ]
};
