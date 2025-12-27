import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Destructuring = {
    id: 'js-u7-doc-3-destructuring',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Object Destructuring',
    duration: '10 min read',
    content: `
# Object Destructuring

## 1. The Old Way

\`\`\`javascript
const user = { name: "Alice", age: 25 };

const name = user.name;
const age = user.age;
\`\`\`

---

## 2. Destructuring (Modern Way)

\`\`\`javascript
const user = { name: "Alice", age: 25 };

const { name, age } = user;

console.log(name);  // "Alice"
console.log(age);   // 25
\`\`\`

---

## 3. Renaming Variables

\`\`\`javascript
const user = { name: "Alice" };

const { name: userName } = user;

console.log(userName);  // "Alice"
\`\`\`

---

## 4. Default Values

\`\`\`javascript
const user = { name: "Alice" };

const { name, age = 18 } = user;

console.log(age);  // 18 (default)
\`\`\`

---

## 5. Nested Destructuring

\`\`\`javascript
const user = {
    name: "Alice",
    address: {
        city: "Jakarta"
    }
};

const { address: { city } } = user;
console.log(city);  // "Jakarta"
\`\`\`

---

## 6. Function Parameters

\`\`\`javascript
function greet({ name, age }) {
    console.log(\\\`Hello \\\${name}, you are \\\${age}\\\`);
}

greet({ name: "Alice", age: 25 });
\`\`\`

---

## 7. Spread Operator

\`\`\`javascript
const user = { name: "Alice", age: 25 };

// Clone object
const clone = { ...user };

// Merge objects
const updated = { ...user, age: 26 };
\`\`\`
`
};
