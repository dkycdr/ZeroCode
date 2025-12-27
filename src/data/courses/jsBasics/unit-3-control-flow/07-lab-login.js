import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab7Login = {
    id: 'js-u3-lab-7-login',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Login Validator',
    duration: '12 min',
    content: `
# Lab: Login Validator

## Combining Conditions

Build a login validation system that checks multiple conditions.

### Requirements:
- Username must not be empty
- Password must be at least 8 characters
- Use ternary for simple messages
`,
    tasks: [
        {
            id: 1,
            description: 'Check if username is truthy: if (username)',
            completed: false,
            hint: 'Empty string is falsy',
            regex: /if\s*\(\s*username\s*\)/
        },
        {
            id: 2,
            description: 'Check password length: password.length >= 8',
            completed: false,
            hint: 'Use .length property',
            regex: /password\.length\s*>=\s*8/
        },
        {
            id: 3,
            description: 'Use ternary for status: isValid ? "Success" : "Failed"',
            completed: false,
            hint: 'condition ? trueValue : falseValue',
            regex: /isValid\s*\?\s*["'].*["']\s*:\s*["'].*["']/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Login Validator
const username = "alice";
const password = "secret123";
let isValid = false;

// Task 1: Check if username exists (is truthy)
// Task 2: Check if password is at least 8 characters
// Set isValid to true only if BOTH conditions pass



// Task 3: Create message using ternary operator
const message = ; // Use ternary: isValid ? "Success" : "Failed"

console.log("Username:", username);
console.log("Password length:", password.length);
console.log("Login:", message);
`
        }
    ]
};
