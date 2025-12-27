import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Formatter = {
    id: 'html5-u7-lab-1-formatter',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Indentation Nightmare',
    duration: '15 min',
    content: `
# Lab: Fix the Nesting

## The Problem
The code works, but it is impossible to read.
Everything is flattened to the left. Visualize the tree structure!

## Rules
- Use 2 or 4 spaces (be consistent)
- Indent children of every parent element

`,
    tasks: [
        {
            id: 1,
            description: 'Indent the <h1> inside the <header>',
            completed: false,
            regex: /\n\s+<h1/,
            hint: {
                concept: 'Code Indentation',
                strategy: 'Child elements get indented from their parent.',
                solution: '<header>\n    <h1>My Website</h1>\n</header>'
            }
        },
        {
            id: 2,
            description: 'Indent the <li> items inside the <ul>',
            completed: false,
            regex: /\n\s+<li/,
            hint: {
                concept: 'List Indentation',
                strategy: 'Each <li> should be indented inside <ul>.',
                solution: '<ul>\n    <li>Home</li>\n    <li>About</li>\n</ul>'
            }
        },
        {
            id: 3,
            description: 'Indent the <button> inside the <form>',
            completed: false,
            regex: /\n\s+<button/,
            hint: {
                concept: 'Form Indentation',
                strategy: 'Form controls should be indented inside <form>.',
                solution: '<form>\n    <button>Submit</button>\n</form>'
            }
        },
        {
            id: 4,
            description: 'Indent <main> content inside <body>',
            completed: false,
            regex: /\n\s+<main/,
            hint: {
                concept: 'Document Indentation',
                strategy: 'The whole tree should be consistently indented.',
                solution: '<body>\\n    <header>...\\n    <main>...'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<body>
<header>
<h1>My Website</h1>
</header>
<main>
<ul>
<li>Home</li>
<li>About</li>
</ul>
<form>
<button>Submit</button>
</form>
</main>
</body>`
        }
    ]
};
