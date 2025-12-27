import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ArrayMethods = {
    id: 'js-u6-doc-2-methods',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Array Methods (push, pop, shift)',
    duration: '12 min read',
    content: `
# Array Methods (push, pop, shift)

## 1. Adding Elements

### push() - Add to end:
\`\`\`javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
// ["apple", "banana", "orange"]
\`\`\`

### unshift() - Add to beginning:
\`\`\`javascript
let fruits = ["apple", "banana"];
fruits.unshift("mango");
// ["mango", "apple", "banana"]
\`\`\`

---

## 2. Removing Elements

### pop() - Remove from end:
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
let removed = fruits.pop();
console.log(removed);  // "orange"
console.log(fruits);   // ["apple", "banana"]
\`\`\`

### shift() - Remove from beginning:
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
let removed = fruits.shift();
console.log(removed);  // "apple"
console.log(fruits);   // ["banana", "orange"]
\`\`\`

---

## 3. Visual Summary

\`\`\`text
          unshift ←  [a, b, c]  → push
          shift   →  [a, b, c]  ← pop
\`\`\`

---

## 4. Other Useful Methods

### splice() - Add/Remove at any position:
\`\`\`javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);        // Remove 1 at index 2
// [1, 2, 4, 5]

arr.splice(2, 0, 99);    // Insert 99 at index 2
// [1, 2, 99, 4, 5]
\`\`\`

### concat() - Merge arrays:
\`\`\`javascript
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);  // [1, 2, 3, 4]
\`\`\`

### slice() - Copy portion:
\`\`\`javascript
let arr = [1, 2, 3, 4, 5];
let part = arr.slice(1, 4);  // [2, 3, 4]
\`\`\`
`
};
