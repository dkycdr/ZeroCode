import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1CreatingArrays = {
    id: 'js-u6-doc-1-creating',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Creating Arrays',
    duration: '10 min read',
    content: `
# Creating Arrays

## 1. What is an Array?

An array is a list of values stored in one variable:

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
\`\`\`

---

## 2. Creating Arrays

### Array literal (recommended):
\`\`\`javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
\`\`\`

### Empty array:
\`\`\`javascript
let empty = [];
\`\`\`

---

## 3. Accessing Elements

Arrays are **zero-indexed** (first element is at index 0):

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
console.log(fruits[2]);  // "orange"
console.log(fruits[3]);  // undefined
\`\`\`

---

## 4. Array Length

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length);  // 3
\`\`\`

Last element: \`fruits[fruits.length - 1]\`

---

## 5. Modifying Elements

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

fruits[1] = "mango";  // Replace banana
console.log(fruits);  // ["apple", "mango", "orange"]
\`\`\`

---

## 6. Arrays Can Contain Anything

\`\`\`javascript
let nested = [[1, 2], [3, 4]];       // 2D array
let objects = [{name: "A"}, {name: "B"}];
let functions = [() => 1, () => 2];
\`\`\`
`
};
