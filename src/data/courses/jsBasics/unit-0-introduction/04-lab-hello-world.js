import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4HelloWorld = {
    id: 'js-u0-lab-4-hello-world',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Hello World',
    duration: '10 min',
    content: `
# Lab: Hello World

## Your First JavaScript Code!

Every programmer starts with "Hello World". It's a tradition that began in the 1970s.

This simple program proves that:
1. Your code is running
2. You can see the output
3. Everything is set up correctly

---

## The Mission

Use \`console.log()\` to print messages to the console.

### Syntax:
\`\`\`javascript
console.log("Your message here");
\`\`\`

### Rules:
- Text must be in quotes (single \`'\` or double \`"\`)
- End with a semicolon \`;\` (recommended)
- Capitalization matters! It's \`console.log\`, not \`Console.Log\`

---

## Tasks

Complete each task in the code editor:

1. Print exactly: **Hello World**
2. Print exactly: **I am learning JavaScript**
3. Print your name (any name is fine)

---

## Common Mistakes

❌ \`Console.log("Hello");\` - Wrong capitalization
❌ \`console.log(Hello);\` - Missing quotes
❌ \`consolelog("Hello");\` - Missing dot

✅ \`console.log("Hello");\` - Correct!
`,
    tasks: [
        {
            id: 1,
            description: 'Print: Hello World',
            completed: false,
            hint: 'Use console.log("Hello World");',
            regex: /console\.log\s*\(\s*["']Hello World["']\s*\)/
        },
        {
            id: 2,
            description: 'Print: I am learning JavaScript',
            completed: false,
            hint: 'Same pattern, different message',
            regex: /console\.log\s*\(\s*["']I am learning JavaScript["']\s*\)/
        },
        {
            id: 3,
            description: 'Print your name',
            completed: false,
            hint: 'Any name works, just use quotes around it',
            regex: /console\.log\s*\(\s*["'][A-Za-z]+["']\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Welcome to JavaScript!
// Complete the tasks below:

// Task 1: Print "Hello World"


// Task 2: Print "I am learning JavaScript"


// Task 3: Print your name

`
        }
    ]
};
