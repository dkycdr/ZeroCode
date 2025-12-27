import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Timer = {
    id: 'js-u9-lab-4-timer',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Timer App',
    duration: '12 min',
    content: `
# Lab: Timer App

## Practice Async Operations

Use setTimeout and setInterval to build a timer.
`,
    tasks: [
        {
            id: 1,
            description: 'Use setTimeout for delayed message',
            completed: false,
            hint: 'setTimeout(() => { ... }, 1000)',
            regex: /setTimeout\s*\(/
        },
        {
            id: 2,
            description: 'Use setInterval for countdown',
            completed: false,
            hint: 'setInterval runs repeatedly',
            regex: /setInterval\s*\(/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Timer App

// Task 1: Show message after 2 seconds


// Task 2: Countdown from 5 to 0

`
        }
    ]
};
