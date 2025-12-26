import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Pattern = {
    id: 'js-u4-lab-5-pattern',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Pattern Printer',
    duration: '10 min',
    content: `
# Lab: Pattern Printer

## Nested Loops

Use nested loops to print patterns.

### Target Pattern:
\`\`\`
*
**
***
****
*****
\`\`\`
`,
    tasks: [
        {
            id: 1,
            description: 'Outer loop: for (let row = 1; row <= 5; row++)',
            completed: false,
            hint: 'Loop through rows 1 to 5',
            regex: /for\s*\(\s*let\s+row\s*=\s*1\s*;\s*row\s*<=\s*5\s*;\s*row\s*\+\+\s*\)/
        },
        {
            id: 2,
            description: 'Build line with repeat: "*".repeat(row)',
            completed: false,
            hint: 'String repeat method creates multiple characters',
            regex: /["']\*["']\.repeat\s*\(\s*row\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Pattern Printer

// Task 1: Create outer loop for rows


// Task 2: Inside loop, create a line of stars
// Use: "*".repeat(row) to create the pattern


console.log("Pattern complete!");
`
        }
    ]
};
