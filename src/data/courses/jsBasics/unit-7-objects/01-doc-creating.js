import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1CreatingObjects = {
    id: 'js-u7-doc-1-creating',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Creating Objects',
    duration: '12 min read',
    content: `
# Creating Objects

## 1. What is an Object?

An object stores data as **key-value pairs**:

\`\`\`javascript
const user = {
    name: "Alice",
    age: 25,
    isAdmin: false
};
\`\`\`

---

## 2. Object Anatomy

\`\`\`javascript
{
    key: value,      // Property
    name: "Alice",   // String value
    age: 25,         // Number value
    active: true     // Boolean value
}
\`\`\`

---

## 3. Creating Objects

### Object literal:
\`\`\`javascript
const user = {
    name: "Alice",
    age: 25
};
\`\`\`

### Empty object:
\`\`\`javascript
const empty = {};
\`\`\`

---

## 4. Accessing Properties

### Dot notation (preferred):
\`\`\`javascript
console.log(user.name);  // "Alice"
console.log(user.age);   // 25
\`\`\`

### Bracket notation:
\`\`\`javascript
console.log(user["name"]);  // "Alice"

// Useful for dynamic keys
const key = "age";
console.log(user[key]);  // 25
\`\`\`

---

## 5. Modifying Objects

\`\`\`javascript
const user = { name: "Alice" };

// Add property
user.age = 25;

// Update property  
user.name = "Bob";

// Delete property
delete user.age;
\`\`\`

> [!NOTE]
> Even with \`const\`, you can modify properties. You just can't reassign the variable.

---

## 6. Nested Objects

\`\`\`javascript
const user = {
    name: "Alice",
    address: {
        city: "Jakarta",
        zip: "12345"
    }
};

console.log(user.address.city);  // "Jakarta"
\`\`\`
`
};
