import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6TrafficLight = {
    id: 'js-u3-lab-6-traffic',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Traffic Light',
    duration: '10 min',
    content: `
# Lab: Traffic Light

## Switch Statement Practice

Build a traffic light controller using switch statements.

### Colors:
- "red" → "STOP"
- "yellow" → "SLOW DOWN"
- "green" → "GO"
- anything else → "INVALID"
`,
    tasks: [
        {
            id: 1,
            description: 'Create switch statement: switch (color)',
            completed: false,
            hint: 'switch (color) { ... }',
            regex: /switch\s*\(\s*color\s*\)/
        },
        {
            id: 2,
            description: 'Add case "red" with action = "STOP" and break',
            completed: false,
            hint: 'case "red": action = "STOP"; break;',
            regex: /case\s*["']red["']\s*:[\s\S]*["']STOP["'][\s\S]*break/
        },
        {
            id: 3,
            description: 'Add case "yellow" with action = "SLOW DOWN" and break',
            completed: false,
            hint: 'case "yellow": action = "SLOW DOWN"; break;',
            regex: /case\s*["']yellow["']\s*:[\s\S]*break/
        },
        {
            id: 4,
            description: 'Add case "green" and default case',
            completed: false,
            hint: 'Include default for invalid colors',
            regex: /case\s*["']green["'][\s\S]*default\s*:/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Traffic Light Controller
const color = "green";
let action;

// Task 1: Create switch statement for color


// Task 2: Case "red" -> "STOP"


// Task 3: Case "yellow" -> "SLOW DOWN"


// Task 4: Case "green" -> "GO", default -> "INVALID"


console.log(\`Light: \${color} = Action: \${action}\`);
`
        }
    ]
};
