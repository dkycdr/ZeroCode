import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1WhatAreFunctions = {
    id: 'js-u5-doc-1-intro',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'What are Functions?',
    duration: '12 min read',
    content: `
# What are Functions?

## 1. The Problem

Imagine you need to greet 10 users:

\`\`\`javascript
console.log("Hello, Alice! Welcome to our site.");
console.log("Hello, Bob! Welcome to our site.");
console.log("Hello, Charlie! Welcome to our site.");
// ... repeat 10 times
\`\`\`

What if you want to change the greeting? You'd edit 10 lines!

---

## 2. The Solution: Functions

A function is **reusable code** with a name:

\`\`\`javascript
function greet(name) {
    console.log("Hello, " + name + "! Welcome to our site.");
}

greet("Alice");
greet("Bob");
greet("Charlie");
\`\`\`

Now to change the greeting, you edit **one place**.

---

## 3. Function Anatomy

\`\`\`javascript
function functionName(parameter1, parameter2) {
    // Function body
    return value; // Optional
}
\`\`\`

- **function**: Keyword to define a function
- **functionName**: Name to call the function
- **parameters**: Inputs the function accepts
- **body**: Code that runs when called
- **return**: Value the function gives back

---

## 4. Calling a Function

Defining a function doesn't run it. You must **call** it:

\`\`\`javascript
// Define
function sayHello() {
    console.log("Hello!");
}

// Call (execute)
sayHello();  // "Hello!"
sayHello();  // "Hello!" (runs again)
\`\`\`

---

## 5. Why Functions?

### 1. Reusability
Write once, use many times.

### 2. Organization
Break complex code into small, manageable pieces.

### 3. Maintainability
Fix bugs in one place.

### 4. Abstraction
Hide complexity behind a simple name.

---

## 6. Function Naming Best Practices

Functions should be named with **verbs** (actions):

\`\`\`javascript
// ✅ Good - describes what it does
function calculateTotal() { }
function getUserData() { }
function validateEmail() { }
function sendMessage() { }

// ❌ Bad - not descriptive
function stuff() { }
function doIt() { }
function x() { }
\`\`\`
`
};
