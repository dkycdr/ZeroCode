import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1ForLoop = {
    id: 'js-u4-doc-1-for',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'For Loop',
    duration: '12 min read',
    content: `
# For Loop

## 1. Why Loops?

Imagine printing numbers 1 to 1000. Without loops, you'd write 1000 console.log statements!

Loops let you **repeat code** automatically.

---

## 2. For Loop Syntax

\`\`\`javascript
for (initialization; condition; update) {
    // Code to repeat
}
\`\`\`

### The Three Parts:
1. **Initialization**: Runs once before the loop starts
2. **Condition**: Checked before each iteration
3. **Update**: Runs after each iteration

---

## 3. Basic Example

\`\`\`javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
\`\`\`

### Step by step:
1. \`let i = 0\` - Create counter, set to 0
2. \`i < 5\` - Is 0 less than 5? Yes, run code
3. \`console.log(i)\` - Print 0
4. \`i++\` - Increment to 1
5. Repeat until i reaches 5

---

## 4. Common Patterns

### Count from 1 to 10:
\`\`\`javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
\`\`\`

### Count backwards:
\`\`\`javascript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1
\`\`\`

### Count by 2s:
\`\`\`javascript
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
\`\`\`

---

## 5. Looping Through Arrays

\`\`\`javascript
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output: apple, banana, orange
\`\`\`

---

## 6. Accumulating Values

### Sum of numbers:
\`\`\`javascript
let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log(total); // 5050
\`\`\`

---

## 7. Common Mistakes

### Off-by-one errors:
\`\`\`javascript
// ❌ Runs 6 times (0,1,2,3,4,5)
for (let i = 0; i <= 5; i++) { }

// ✅ Runs 5 times (0,1,2,3,4)
for (let i = 0; i < 5; i++) { }
\`\`\`

### Infinite loop (dangerous!):
\`\`\`javascript
// ❌ Never ends - i is always 0
for (let i = 0; i < 5; ) {
    console.log(i);
    // Forgot i++
}
\`\`\`
`
};
