import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab7Calculator = {
    id: 'js-u5-lab-7-calculator',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Calculator Functions',
    duration: '15 min',
    content: `
# Lab: Calculator Functions

## Build Reusable Calculator Functions
`,
    tasks: [
        {
            id: 1,
            description: 'Create add(a, b) function',
            completed: false,
            hint: 'function add(a, b) { return a + b; }',
            regex: /function\s+add\s*\(\s*a\s*,\s*b\s*\)\s*\{[\s\S]*return\s*a\s*\+\s*b/
        },
        {
            id: 2,
            description: 'Create subtract(a, b) function',
            completed: false,
            hint: 'Similar to add but with subtraction',
            regex: /function\s+subtract\s*\(\s*a\s*,\s*b\s*\)\s*\{[\s\S]*return\s*a\s*-\s*b/
        },
        {
            id: 3,
            description: 'Create calculate(a, b, operation) that uses other functions',
            completed: false,
            hint: 'Use if/switch to call add or subtract based on operation',
            regex: /function\s+calculate\s*\(\s*a\s*,\s*b\s*,\s*operation\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Calculator Functions

// Task 1: Create add function


// Task 2: Create subtract function


// Task 3: Create calculate function
// It should call add or subtract based on operation parameter


// Tests
console.log(add(10, 5));           // 15
console.log(subtract(10, 5));      // 5
console.log(calculate(10, 5, "add"));      // 15
console.log(calculate(10, 5, "subtract")); // 5
`
        }
    ]
};
