import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6Strings = {
    id: 'js-u1-lab-6-strings',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Working with Strings',
    duration: '15 min',
    content: `
# Lab: Working with Strings

## String Manipulation Practice

In this lab, you'll practice common string operations that every developer uses daily.

---

## Scenario: Text Processor

You're building a text processor that formats user input.

### Tasks:
1. Create a greeting using template literals
2. Convert text to uppercase
3. Extract part of a string
4. Check if a string contains a word

---

## Helpful Methods:
- \`\\\`Hello, \\\${name}\\\`\` - Template literal
- \`.toUpperCase()\` - Convert to uppercase
- \`.slice(start, end)\` - Extract substring
- \`.includes(text)\` - Check if contains
`,
    tasks: [
        {
            id: 1,
            description: 'Create a greeting: const greeting = `Hello, ${name}!`',
            completed: false,
            hint: 'Use backticks and ${} for interpolation',
            regex: /const\s+greeting\s*=\s*`[^`]*\$\{name\}[^`]*`/
        },
        {
            id: 2,
            description: 'Create shout: const shout = message.toUpperCase()',
            completed: false,
            hint: 'Call .toUpperCase() on the message variable',
            regex: /const\s+shout\s*=\s*message\.toUpperCase\s*\(\s*\)/
        },
        {
            id: 3,
            description: 'Extract first 5 characters: const short = text.slice(0, 5)',
            completed: false,
            hint: 'slice(0, 5) gets characters 0-4',
            regex: /const\s+short\s*=\s*text\.slice\s*\(\s*0\s*,\s*5\s*\)/
        },
        {
            id: 4,
            description: 'Check if contains "code": const hasCode = text.includes("code")',
            completed: false,
            hint: 'includes() returns true or false',
            regex: /const\s+hasCode\s*=\s*text\.includes\s*\(\s*["']code["']\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Text Processor
// Starter variables (don't change these):
const name = "Alice";
const message = "hello world";
const text = "I love coding with JavaScript";

// Task 1: Create a greeting using template literal
// Expected: "Hello, Alice!"


// Task 2: Convert message to uppercase
// Expected: "HELLO WORLD"


// Task 3: Get first 5 characters of text
// Expected: "I lov"


// Task 4: Check if text contains "code"
// Expected: true


// Log your results
console.log(greeting);
console.log(shout);
console.log(short);
console.log(hasCode);
`
        }
    ]
};
