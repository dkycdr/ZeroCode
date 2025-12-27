import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5CreateVariables = {
    id: 'js-u1-lab-5-create-variables',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Creating Variables',
    duration: '15 min',
    content: `
# Lab: Creating Variables

## Practice Time!

Now it's time to create your own variables. Remember:
- Use \`const\` for values that won't change
- Use \`let\` for values that will change

---

## Scenario: User Profile

You're building a user profile system. Create variables to store user information.

### Requirements:
1. User ID (constant - never changes)
2. Username (can be updated)
3. Age (can change on birthday)
4. Is verified (true/false)
5. Country (constant)

---

## Tips:
- Use descriptive names: \`userId\` not \`x\`
- Use camelCase: \`isVerified\` not \`is_verified\`
- String values need quotes: \`"Alice"\`
`,
    tasks: [
        {
            id: 1,
            description: 'Create a constant userId with value 12345',
            completed: false,
            hint: 'const userId = 12345;',
            regex: /const\s+userId\s*=\s*12345/
        },
        {
            id: 2,
            description: 'Create a let variable username with value "Guest"',
            completed: false,
            hint: 'let username = "Guest";',
            regex: /let\s+username\s*=\s*["']Guest["']/
        },
        {
            id: 3,
            description: 'Create a let variable age with value 25',
            completed: false,
            hint: 'let age = 25;',
            regex: /let\s+age\s*=\s*25/
        },
        {
            id: 4,
            description: 'Create a let variable isVerified with value false',
            completed: false,
            hint: 'let isVerified = false;',
            regex: /let\s+isVerified\s*=\s*false/
        },
        {
            id: 5,
            description: 'Create a constant country with value "Indonesia"',
            completed: false,
            hint: 'const country = "Indonesia";',
            regex: /const\s+country\s*=\s*["']Indonesia["']/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// User Profile System
// Create variables for a user profile:

// Task 1: User ID (constant, value: 12345)


// Task 2: Username (let, value: "Guest")


// Task 3: Age (let, value: 25)


// Task 4: Is Verified (let, value: false)


// Task 5: Country (constant, value: "Indonesia")


// Log all variables to check
console.log("Profile created!");
`
        }
    ]
};
