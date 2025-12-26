import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6BasicFunctions = {
    id: 'js-u5-lab-6-basic',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Basic Functions',
    duration: '12 min',
    content: `
# Lab: Basic Functions

## Create Your First Functions

Practice creating and calling functions.
`,
    tasks: [
        {
            id: 1,
            description: 'Create function greet() that returns "Hello!"',
            completed: false,
            hint: 'function greet() { return "Hello!"; }',
            regex: /function\s+greet\s*\(\s*\)\s*\{[\s\S]*return\s*["']Hello!["']/
        },
        {
            id: 2,
            description: 'Create function double(num) that returns num * 2',
            completed: false,
            hint: 'function double(num) { return num * 2; }',
            regex: /function\s+double\s*\(\s*num\s*\)\s*\{[\s\S]*return\s*num\s*\*\s*2/
        },
        {
            id: 3,
            description: 'Create arrow function triple: const triple = n => n * 3',
            completed: false,
            hint: 'Use arrow syntax',
            regex: /const\s+triple\s*=\s*n\s*=>\s*n\s*\*\s*3/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Basic Functions Lab

// Task 1: Create greet() function


// Task 2: Create double(num) function


// Task 3: Create triple arrow function


// Test your functions
console.log(greet());      // Should print: Hello!
console.log(double(5));    // Should print: 10
console.log(triple(4));    // Should print: 12
`
        }
    ]
};
