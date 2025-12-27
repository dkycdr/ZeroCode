import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Iterating = {
    id: 'js-u6-doc-3-iterating',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Iterating Arrays (forEach, map)',
    duration: '12 min read',
    content: `
# Iterating Arrays (forEach, map)

## 1. forEach - Do Something with Each Element

\`\`\`javascript
const fruits = ["apple", "banana", "orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});
// apple
// banana
// orange
\`\`\`

---

## 2. map - Transform Each Element

Returns a NEW array with transformed values:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]
\`\`\`

---

## 3. forEach vs map

| forEach | map |
|:---|:---|
| No return value | Returns new array |
| For side effects | For transformations |
| Original array unchanged | Creates new array |

---

## 4. With Index

Both provide the index as second argument:

\`\`\`javascript
fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
});
// 0: apple
// 1: banana
// 2: orange
\`\`\`

---

## 5. for...of Loop

Modern way to loop:

\`\`\`javascript
for (const fruit of fruits) {
    console.log(fruit);
}
\`\`\`

---

## 6. Comparison

\`\`\`javascript
// Traditional for
for (let i = 0; i < arr.length; i++) { }

// forEach
arr.forEach(item => { });

// for...of
for (const item of arr) { }

// map (returns new array)
const newArr = arr.map(item => item * 2);
\`\`\`
`
};
