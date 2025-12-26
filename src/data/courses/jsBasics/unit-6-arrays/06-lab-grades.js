import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6Grades = {
    id: 'js-u6-lab-6-grades',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Student Grades',
    duration: '12 min',
    content: `
# Lab: Student Grades

## Transforming and Filtering Data
`,
    tasks: [
        {
            id: 1,
            description: 'Filter passing grades: grades.filter(g => g >= 60)',
            completed: false,
            hint: 'filter keeps items that return true',
            regex: /grades\.filter\s*\(\s*g\s*=>\s*g\s*>=\s*60\s*\)/
        },
        {
            id: 2,
            description: 'Calculate average using reduce',
            completed: false,
            hint: 'reduce((sum, g) => sum + g, 0) / length',
            regex: /grades\.reduce\s*\(/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Student Grades
const grades = [85, 52, 90, 45, 78, 95, 38, 72];

console.log("All grades:", grades);

// Task 1: Filter only passing grades (>= 60)
const passing = ;

console.log("Passing:", passing);

// Task 2: Calculate average of all grades
const average = ;

console.log("Average:", average);
`
        }
    ]
};
