import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6ConsoleMethods = {
    id: 'js-u0-lab-6-console-methods',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Console Methods',
    duration: '12 min',
    content: `
# Lab: Console Methods

## Beyond console.log()

The console has different methods for different situations:

| Method | Use Case | Appearance |
|:---|:---|:---|
| \`console.log()\` | General information | Normal text |
| \`console.warn()\` | Warnings (not critical) | Yellow background |
| \`console.error()\` | Errors (critical) | Red background |

---

## Real-World Example

Imagine you're building a game:

\`\`\`javascript
console.log("Game started");           // Normal info
console.warn("Health is low: 15%");    // Warning
console.error("Connection lost!");     // Critical error
\`\`\`

Using the right method helps you quickly identify important messages.

---

## Scenario: Spaceship Startup

You are programming the startup sequence for a spaceship.
Use the appropriate console method for each message:

1. **Info**: Systems are coming online (normal)
2. **Warning**: Fuel is running low (concerning but not fatal)
3. **Error**: Navigation system failed (critical)
`,
    tasks: [
        {
            id: 1,
            description: 'Log: "Systems online" using console.log()',
            completed: false,
            hint: 'console.log("Systems online");',
            regex: /console\.log\s*\(\s*["']Systems online["']\s*\)/
        },
        {
            id: 2,
            description: 'Warn: "Fuel level: 20%" using console.warn()',
            completed: false,
            hint: 'console.warn("Fuel level: 20%");',
            regex: /console\.warn\s*\(\s*["']Fuel level: 20%["']\s*\)/
        },
        {
            id: 3,
            description: 'Error: "Navigation failed" using console.error()',
            completed: false,
            hint: 'console.error("Navigation failed");',
            regex: /console\.error\s*\(\s*["']Navigation failed["']\s*\)/
        },
        {
            id: 4,
            description: 'Log multiple values: console.log("Speed:", 100)',
            completed: false,
            hint: 'You can pass multiple items separated by commas',
            regex: /console\.log\s*\(\s*["']Speed:["']\s*,\s*100\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Spaceship Startup Sequence
// Use the correct console method for each message:

// Task 1: Normal status message
// Log: "Systems online"


// Task 2: Warning message
// Warn: "Fuel level: 20%"


// Task 3: Critical error
// Error: "Navigation failed"


// Task 4: Log with multiple values
// Show: "Speed:" followed by the number 100

`
        }
    ]
};
