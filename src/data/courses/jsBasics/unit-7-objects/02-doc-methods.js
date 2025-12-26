import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Methods = {
    id: 'js-u7-doc-2-methods',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Methods in Objects',
    duration: '10 min read',
    content: `
# Methods in Objects

## 1. What are Methods?

Methods are functions stored as object properties:

\`\`\`javascript
const user = {
    name: "Alice",
    greet: function() {
        console.log("Hello!");
    }
};

user.greet();  // "Hello!"
\`\`\`

---

## 2. Shorthand Syntax

\`\`\`javascript
const user = {
    name: "Alice",
    greet() {
        console.log("Hello!");
    }
};
\`\`\`

---

## 3. The "this" Keyword

\`this\` refers to the current object:

\`\`\`javascript
const user = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name);
    }
};

user.greet();  // "Hello, Alice"
\`\`\`

---

## 4. Object Methods Examples

\`\`\`javascript
const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this;  // For chaining
    },
    subtract(n) {
        this.value -= n;
        return this;
    },
    result() {
        return this.value;
    }
};

calculator.add(10).add(5).subtract(3);
console.log(calculator.result());  // 12
\`\`\`

---

## 5. Built-in Object Methods

\`\`\`javascript
const user = { name: "Alice", age: 25 };

Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Alice", 25]
Object.entries(user); // [["name", "Alice"], ["age", 25]]
\`\`\`
`
};
