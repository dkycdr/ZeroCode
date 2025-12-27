import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4FilterFindReduce = {
    id: 'js-u6-doc-4-filter-find',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Filter, Find, Reduce',
    duration: '15 min read',
    content: `
# Filter, Find, Reduce

## 1. filter() - Keep Matching Elements

Returns a new array with only matching elements:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]
\`\`\`

---

## 2. find() - Get First Match

Returns the first matching element (or undefined):

\`\`\`javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: "Bob" }
\`\`\`

---

## 3. findIndex() - Get First Match Index

\`\`\`javascript
const numbers = [10, 20, 30];
const index = numbers.findIndex(n => n === 20);
// 1
\`\`\`

---

## 4. reduce() - Accumulate to Single Value

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, n) => total + n, 0);
// 15
\`\`\`

### How reduce works:
\`\`\`text
Step 0: total = 0 (initial)
Step 1: total = 0 + 1 = 1
Step 2: total = 1 + 2 = 3
Step 3: total = 3 + 3 = 6
Step 4: total = 6 + 4 = 10
Step 5: total = 10 + 5 = 15
\`\`\`

---

## 5. includes() - Check if Contains

\`\`\`javascript
const fruits = ["apple", "banana"];
fruits.includes("apple");  // true
fruits.includes("mango");  // false
\`\`\`

---

## 6. every() & some()

\`\`\`javascript
const numbers = [2, 4, 6];

numbers.every(n => n % 2 === 0);  // true (all are even)
numbers.some(n => n > 5);          // true (at least one > 5)
\`\`\`
`
};
