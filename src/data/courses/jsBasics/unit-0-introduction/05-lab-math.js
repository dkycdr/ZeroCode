import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Math = {
    id: 'js-u0-lab-5-math',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Math in JavaScript',
    duration: '15 min',
    content: `
# Lab: Math in JavaScript

## JavaScript as a Calculator

At its core, a computer is just a very fast calculator. JavaScript can do math instantly!

---

## Basic Operators

| Operator | Meaning | Example |
|:---|:---|:---|
| \`+\` | Addition | \`5 + 3\` → 8 |
| \`-\` | Subtraction | \`10 - 4\` → 6 |
| \`*\` | Multiplication | \`6 * 7\` → 42 |
| \`/\` | Division | \`20 / 4\` → 5 |
| \`%\` | Remainder (Modulo) | \`10 % 3\` → 1 |
| \`**\` | Power (Exponent) | \`2 ** 3\` → 8 |

---

## Important: Numbers vs Strings

\`\`\`javascript
console.log(10 + 5);      // 15 (math)
console.log("10" + "5");  // "105" (text joined together)
\`\`\`

When you use quotes, JavaScript treats it as text, not numbers!

---

## Order of Operations

JavaScript follows standard math rules (PEMDAS):
1. **P**arentheses first \`()\`
2. **E**xponents \`**\`
3. **M**ultiplication & **D**ivision
4. **A**ddition & **S**ubtraction

\`\`\`javascript
console.log(2 + 3 * 4);     // 14 (not 20!)
console.log((2 + 3) * 4);   // 20 (parentheses first)
\`\`\`

---

## Tasks

Complete each calculation:
`,
    tasks: [
        {
            id: 1,
            description: 'Addition: Calculate 25 + 17',
            completed: false,
            hint: 'console.log(25 + 17);',
            regex: /console\.log\s*\(\s*25\s*\+\s*17\s*\)/
        },
        {
            id: 2,
            description: 'Subtraction: Calculate 100 - 37',
            completed: false,
            hint: 'console.log(100 - 37);',
            regex: /console\.log\s*\(\s*100\s*-\s*37\s*\)/
        },
        {
            id: 3,
            description: 'Multiplication: Calculate 8 * 12',
            completed: false,
            hint: 'Use the asterisk * for multiplication',
            regex: /console\.log\s*\(\s*8\s*\*\s*12\s*\)/
        },
        {
            id: 4,
            description: 'Division: Calculate 144 / 12',
            completed: false,
            hint: 'Use forward slash / for division',
            regex: /console\.log\s*\(\s*144\s*\/\s*12\s*\)/
        },
        {
            id: 5,
            description: 'Complex: Calculate (10 + 5) * 2',
            completed: false,
            hint: 'Use parentheses to control the order',
            regex: /console\.log\s*\(\s*\(\s*10\s*\+\s*5\s*\)\s*\*\s*2\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// JavaScript Calculator
// Complete each calculation:

// Task 1: 25 + 17


// Task 2: 100 - 37


// Task 3: 8 * 12


// Task 4: 144 / 12


// Task 5: (10 + 5) * 2

`
        }
    ]
};
