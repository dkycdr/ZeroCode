import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5TodoList = {
    id: 'js-u6-lab-5-todo',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Todo List',
    duration: '15 min',
    content: `
# Lab: Todo List

## Array Operations Practice

Build a simple todo list using array methods.
`,
    tasks: [
        {
            id: 1,
            description: 'Add item: todos.push("Learn Arrays")',
            completed: false,
            hint: 'Use push to add to end',
            regex: /todos\.push\s*\(\s*["']Learn Arrays["']\s*\)/
        },
        {
            id: 2,
            description: 'Remove last: todos.pop()',
            completed: false,
            hint: 'pop removes and returns last item',
            regex: /todos\.pop\s*\(\s*\)/
        },
        {
            id: 3,
            description: 'Add to start: todos.unshift("First Task")',
            completed: false,
            hint: 'unshift adds to beginning',
            regex: /todos\.unshift\s*\(\s*["']First Task["']\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Todo List
let todos = ["Buy groceries", "Clean room"];

console.log("Initial:", todos);

// Task 1: Add "Learn Arrays" to the end

console.log("After push:", todos);

// Task 2: Remove the last item

console.log("After pop:", todos);

// Task 3: Add "First Task" to the beginning

console.log("After unshift:", todos);
`
        }
    ]
};
