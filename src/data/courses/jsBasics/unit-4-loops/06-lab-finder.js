import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6NumberFinder = {
    id: 'js-u4-lab-6-finder',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Number Finder',
    duration: '10 min',
    content: `
# Lab: Number Finder

## Using Break & Continue

Find a specific number in an array and skip negative numbers.
`,
    tasks: [
        {
            id: 1,
            description: 'Loop through numbers: for (let num of numbers)',
            completed: false,
            hint: 'Use for...of loop',
            regex: /for\s*\(\s*let\s+num\s+of\s+numbers\s*\)/
        },
        {
            id: 2,
            description: 'Skip negative: if (num < 0) continue;',
            completed: false,
            hint: 'Use continue to skip negatives',
            regex: /if\s*\(\s*num\s*<\s*0\s*\)\s*continue/
        },
        {
            id: 3,
            description: 'Find target: if (num === target) and break',
            completed: false,
            hint: 'Use break when found',
            regex: /if\s*\(\s*num\s*===\s*target\s*\)[\s\S]*break/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Number Finder
const numbers = [3, -1, 7, -2, 5, -3, 10, 2];
const target = 5;
let found = false;
let steps = 0;

// Task 1: Loop through numbers with for...of

// Task 2: If number is negative, skip it (continue)

// Task 3: If number equals target, set found = true and break


console.log("Target:", target);
console.log("Found:", found);
console.log("Steps taken:", steps);
`
        }
    ]
};
