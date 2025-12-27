import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab7Numbers = {
    id: 'js-u1-lab-7-numbers',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Number Operations',
    duration: '12 min',
    content: `
# Lab: Number Operations

## Math Practice

Let's use the Math object to solve real problems.

---

## Scenario: Shopping Cart

You're calculating prices for an e-commerce site.

### Need to:
1. Round prices to 2 decimal places
2. Calculate discounts
3. Find the minimum price
4. Generate a random discount code

---

## Key Methods:
- \`.toFixed(2)\` - Format to 2 decimals
- \`Math.floor()\` - Round down
- \`Math.min()\` - Find smallest
- \`Math.random()\` - Random number
`,
    tasks: [
        {
            id: 1,
            description: 'Round price to 2 decimals: const formatted = price.toFixed(2)',
            completed: false,
            hint: '.toFixed(2) returns a string with 2 decimal places',
            regex: /const\s+formatted\s*=\s*price\.toFixed\s*\(\s*2\s*\)/
        },
        {
            id: 2,
            description: 'Round down: const whole = Math.floor(price)',
            completed: false,
            hint: 'Math.floor() removes decimals',
            regex: /const\s+whole\s*=\s*Math\.floor\s*\(\s*price\s*\)/
        },
        {
            id: 3,
            description: 'Find minimum: const cheapest = Math.min(10, 5, 8)',
            completed: false,
            hint: 'Math.min() returns the smallest number',
            regex: /const\s+cheapest\s*=\s*Math\.min\s*\(\s*10\s*,\s*5\s*,\s*8\s*\)/
        },
        {
            id: 4,
            description: 'Random 0-100: const random = Math.floor(Math.random() * 100)',
            completed: false,
            hint: 'Math.random() * 100 gives 0-99.999, floor makes it 0-99',
            regex: /const\s+random\s*=\s*Math\.floor\s*\(\s*Math\.random\s*\(\s*\)\s*\*\s*100\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Shopping Cart Calculator

// Starter variable:
const price = 29.95678;

// Task 1: Round price to 2 decimal places
// Expected: "29.96"


// Task 2: Round price down to whole number
// Expected: 29


// Task 3: Find the cheapest item
// Compare: 10, 5, 8


// Task 4: Generate random discount (0-99)


// Log results
console.log("Formatted:", formatted);
console.log("Whole:", whole);
console.log("Cheapest:", cheapest);
console.log("Random discount:", random);
`
        }
    ]
};
