import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Calculator = {
    id: 'js-u2-lab-5-calculator',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Calculator App',
    duration: '15 min',
    content: `
# Lab: Calculator App

## Building a Calculator

Let's practice arithmetic operators by building a simple calculator.

---

## Your Tasks:

You have two numbers \`a\` and \`b\`. Calculate:
1. Sum (addition)
2. Difference (subtraction)
3. Product (multiplication)
4. Quotient (division)
5. Remainder (modulo)

Store each result in its own variable.
`,
    tasks: [
        {
            id: 1,
            description: 'Calculate sum: const sum = a + b',
            completed: false,
            hint: 'Add a and b together',
            regex: /const\s+sum\s*=\s*a\s*\+\s*b/
        },
        {
            id: 2,
            description: 'Calculate difference: const difference = a - b',
            completed: false,
            hint: 'Subtract b from a',
            regex: /const\s+difference\s*=\s*a\s*-\s*b/
        },
        {
            id: 3,
            description: 'Calculate product: const product = a * b',
            completed: false,
            hint: 'Multiply a and b',
            regex: /const\s+product\s*=\s*a\s*\*\s*b/
        },
        {
            id: 4,
            description: 'Calculate quotient: const quotient = a / b',
            completed: false,
            hint: 'Divide a by b',
            regex: /const\s+quotient\s*=\s*a\s*\/\s*b/
        },
        {
            id: 5,
            description: 'Calculate remainder: const remainder = a % b',
            completed: false,
            hint: 'Use modulo operator',
            regex: /const\s+remainder\s*=\s*a\s*%\s*b/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Simple Calculator
const a = 20;
const b = 6;

// Task 1: Calculate the sum


// Task 2: Calculate the difference


// Task 3: Calculate the product


// Task 4: Calculate the quotient


// Task 5: Calculate the remainder


// Display results
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
`
        }
    ]
};
