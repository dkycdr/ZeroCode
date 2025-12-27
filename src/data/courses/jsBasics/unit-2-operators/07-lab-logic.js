import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab7Logic = {
    id: 'js-u2-lab-7-logic',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Logic Gates',
    duration: '12 min',
    content: `
# Lab: Logic Gates

## Combining Conditions

Use logical operators to create complex conditions.

---

## Operators:
- \`&&\` - AND (both must be true)
- \`||\` - OR (at least one must be true)
- \`!\` - NOT (invert)

---

## Scenario:
You're building access control for a building. Different people have different access levels.
`,
    tasks: [
        {
            id: 1,
            description: 'AND: const canEnter = hasKeycard && isEmployee',
            completed: false,
            hint: 'Both conditions must be true to enter',
            regex: /const\s+canEnter\s*=\s*hasKeycard\s*&&\s*isEmployee/
        },
        {
            id: 2,
            description: 'OR: const hasAccess = isAdmin || isManager',
            completed: false,
            hint: 'Either admin or manager has access',
            regex: /const\s+hasAccess\s*=\s*isAdmin\s*\|\|\s*isManager/
        },
        {
            id: 3,
            description: 'NOT: const isNotBanned = !isBanned',
            completed: false,
            hint: 'Invert the banned status',
            regex: /const\s+isNotBanned\s*=\s*!isBanned/
        },
        {
            id: 4,
            description: 'Combined: const fullAccess = isEmployee && (isAdmin || isManager)',
            completed: false,
            hint: 'Must be employee AND either admin or manager',
            regex: /const\s+fullAccess\s*=\s*isEmployee\s*&&\s*\(\s*isAdmin\s*\|\|\s*isManager\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Access Control System

// User status:
const hasKeycard = true;
const isEmployee = true;
const isAdmin = false;
const isManager = true;
const isBanned = false;

// Task 1: Can enter building (needs keycard AND employee)


// Task 2: Has elevated access (admin OR manager)


// Task 3: Is not banned (invert isBanned)


// Task 4: Full access (employee AND (admin OR manager))


// Display access levels
console.log("Can enter:", canEnter);
console.log("Has access:", hasAccess);
console.log("Not banned:", isNotBanned);
console.log("Full access:", fullAccess);
`
        }
    ]
};
