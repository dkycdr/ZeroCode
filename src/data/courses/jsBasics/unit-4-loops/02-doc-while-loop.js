import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2WhileLoop = {
    id: 'js-u4-doc-2-while',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'While & Do-While Loops',
    duration: '10 min read',
    content: `
# While & Do-While Loops

## 1. While Loop

A while loop runs as long as the condition is true:

\`\`\`javascript
while (condition) {
    // Code to repeat
}
\`\`\`

### Example:
\`\`\`javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
// Output: 0, 1, 2, 3, 4
\`\`\`

---

## 2. When to Use While vs For

| Use For | Use While |
|:---|:---|
| Known number of iterations | Unknown iterations |
| Looping through arrays | User input validation |
| Counting | Game loops |

---

## 3. Do-While Loop

Runs at least once, then checks the condition:

\`\`\`javascript
do {
    // Code runs at least once
} while (condition);
\`\`\`

### Example:
\`\`\`javascript
let input;

do {
    input = prompt("Enter a number > 0");
} while (input <= 0);
// Keeps asking until valid input
\`\`\`

---

## 4. Key Difference

### While: Checks first
\`\`\`javascript
let x = 10;

while (x < 5) {
    console.log(x); // Never runs!
}
\`\`\`

### Do-While: Runs first
\`\`\`javascript
let x = 10;

do {
    console.log(x); // Runs once!
} while (x < 5);
\`\`\`

---

## 5. Common Use Case: Wait for Condition

\`\`\`javascript
let found = false;
let attempts = 0;

while (!found) {
    attempts++;
    // Try to find something
    if (attempts > 100) break;
}
\`\`\`

---

## 6. Infinite Loop Warning

> [!CAUTION]
> Always ensure your condition will eventually become false!

\`\`\`javascript
// ❌ Infinite loop
while (true) {
    console.log("Forever!");
}

// ✅ Has exit condition
while (true) {
    if (shouldStop) break;
}
\`\`\`
`
};
