import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6Comparison = {
    id: 'js-u2-lab-6-comparison',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Comparison Checker',
    duration: '12 min',
    content: `
# Lab: Comparison Checker

## Practice Comparisons

Use comparison operators to check conditions and store the boolean results.

---

## Remember:
- Use \`===\` (strict equality)
- Use \`!==\` (strict inequality)
- Comparison returns \`true\` or \`false\`

---

## Scenario:
You're building a validation system that checks various conditions.
`,
    tasks: [
        {
            id: 1,
            description: 'Check if age >= 18: const isAdult = age >= 18',
            completed: false,
            hint: 'Use >= for greater than or equal',
            regex: /const\s+isAdult\s*=\s*age\s*>=\s*18/
        },
        {
            id: 2,
            description: 'Check exact match: const isCorrect = password === "secret"',
            completed: false,
            hint: 'Use === for strict equality',
            regex: /const\s+isCorrect\s*=\s*password\s*===\s*["']secret["']/
        },
        {
            id: 3,
            description: 'Check if score > 100: const isHighScore = score > 100',
            completed: false,
            hint: 'Use > for greater than',
            regex: /const\s+isHighScore\s*=\s*score\s*>\s*100/
        },
        {
            id: 4,
            description: 'Check if status is not "banned": const isAllowed = status !== "banned"',
            completed: false,
            hint: 'Use !== for strict inequality',
            regex: /const\s+isAllowed\s*=\s*status\s*!==\s*["']banned["']/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Comparison Checker

// Test values:
const age = 25;
const password = "secret";
const score = 150;
const status = "active";

// Task 1: Check if adult (age >= 18)


// Task 2: Check if password matches "secret"


// Task 3: Check if high score (> 100)


// Task 4: Check if user is not banned


// Display results
console.log("Is adult:", isAdult);
console.log("Password correct:", isCorrect);
console.log("High score:", isHighScore);
console.log("Is allowed:", isAllowed);
`
        }
    ]
};
