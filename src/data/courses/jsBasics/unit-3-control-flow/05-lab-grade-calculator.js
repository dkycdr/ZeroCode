import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5GradeCalculator = {
    id: 'js-u3-lab-5-grade',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Grade Calculator',
    duration: '12 min',
    content: `
# Lab: Grade Calculator

## Build a Grade System

Create a program that converts a numeric score to a letter grade.

### Grade Scale:
- 90-100: A
- 80-89: B
- 70-79: C
- 60-69: D
- 0-59: F
`,
    tasks: [
        {
            id: 1,
            description: 'Check for A: if (score >= 90) grade = "A"',
            completed: false,
            hint: 'Start with the highest grade first',
            regex: /if\s*\(\s*score\s*>=\s*90\s*\)/
        },
        {
            id: 2,
            description: 'Check for B: else if (score >= 80) grade = "B"',
            completed: false,
            hint: 'Use else if for the next condition',
            regex: /else\s+if\s*\(\s*score\s*>=\s*80\s*\)/
        },
        {
            id: 3,
            description: 'Check for C: else if (score >= 70) grade = "C"',
            completed: false,
            hint: 'Continue the else-if chain',
            regex: /else\s+if\s*\(\s*score\s*>=\s*70\s*\)/
        },
        {
            id: 4,
            description: 'Check for D and F using else if and else',
            completed: false,
            hint: 'D is >= 60, anything else is F',
            regex: /else\s+if\s*\(\s*score\s*>=\s*60\s*\)[\s\S]*else/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Grade Calculator
const score = 85;
let grade;

// Task 1: If score >= 90, grade is "A"


// Task 2: Else if score >= 80, grade is "B"


// Task 3: Else if score >= 70, grade is "C"


// Task 4: Else if score >= 60, grade is "D", else "F"


console.log(\`Score: \${score} = Grade: \${grade}\`);
`
        }
    ]
};
