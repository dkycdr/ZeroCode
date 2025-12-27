import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4UserProfile = {
    id: 'js-u7-lab-4-user',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: User Profile',
    duration: '12 min',
    content: `
# Lab: User Profile

## Working with Objects
`,
    tasks: [
        {
            id: 1,
            description: 'Create user object with name, email, age properties',
            completed: false,
            hint: 'const user = { name: "...", email: "...", age: ... }',
            regex: /const\s+user\s*=\s*\{[\s\S]*name\s*:[\s\S]*email\s*:[\s\S]*age\s*:/
        },
        {
            id: 2,
            description: 'Add a greet() method that uses this.name',
            completed: false,
            hint: 'greet() { return "Hello, " + this.name }',
            regex: /greet\s*\(\s*\)\s*\{[\s\S]*this\.name/
        },
        {
            id: 3,
            description: 'Use destructuring: const { name, email } = user',
            completed: false,
            hint: 'Destructure name and email',
            regex: /const\s*\{\s*name\s*,\s*email\s*\}\s*=\s*user/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// User Profile

// Task 1: Create user object with name, email, age


// Task 2: Add greet() method that uses this.name


// Task 3: Use destructuring to extract name and email


console.log(name);
console.log(email);
console.log(user.greet());
`
        }
    ]
};
