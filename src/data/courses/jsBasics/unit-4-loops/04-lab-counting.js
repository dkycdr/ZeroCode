import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4CountingMachine = {
    id: 'js-u4-lab-4-counting',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Counting Machine',
    duration: '12 min',
    content: `
# Lab: Counting Machine

## Practice For Loops

Create different counting patterns using for loops.
`,
    tasks: [
        {
            id: 1,
            description: 'Count from 1 to 5: for (let i = 1; i <= 5; i++)',
            completed: false,
            hint: 'Start at 1, go while <= 5',
            regex: /for\s*\(\s*let\s+i\s*=\s*1\s*;\s*i\s*<=\s*5\s*;\s*i\s*\+\+\s*\)/
        },
        {
            id: 2,
            description: 'Count down from 10 to 1: for (let i = 10; i >= 1; i--)',
            completed: false,
            hint: 'Start at 10, use i--',
            regex: /for\s*\(\s*let\s+i\s*=\s*10\s*;\s*i\s*>=\s*1\s*;\s*i\s*--\s*\)/
        },
        {
            id: 3,
            description: 'Count evens 0-10: for (let i = 0; i <= 10; i += 2)',
            completed: false,
            hint: 'Use i += 2 to skip by 2s',
            regex: /for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<=\s*10\s*;\s*i\s*\+=\s*2\s*\)/
        },
        {
            id: 4,
            description: 'Calculate sum: total += i inside the loop',
            completed: false,
            hint: 'Add each number to total',
            regex: /total\s*\+=\s*i/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Counting Machine

// Task 1: Count from 1 to 5
console.log("Counting up:");


// Task 2: Count down from 10 to 1
console.log("\\nCountdown:");


// Task 3: Count even numbers 0-10
console.log("\\nEven numbers:");


// Task 4: Sum numbers 1-100
let total = 0;

console.log("\\nSum 1-100:", total);
`
        }
    ]
};
