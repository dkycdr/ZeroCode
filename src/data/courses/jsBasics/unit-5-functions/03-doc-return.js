import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Return = {
    id: 'js-u5-doc-3-return',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Return Values',
    duration: '10 min read',
    content: `
# Return Values

## 1. What is Return?

\`return\` sends a value back from a function:

\`\`\`javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);  // 8
\`\`\`

---

## 2. Functions Without Return

If no return, function returns \`undefined\`:

\`\`\`javascript
function sayHello() {
    console.log("Hello!");
    // No return statement
}

let result = sayHello();
console.log(result);  // undefined
\`\`\`

---

## 3. Early Return

Use return to exit early:

\`\`\`javascript
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
\`\`\`

---

## 4. Return Only One Value

You can only return one thing. For multiple values, use an object or array:

\`\`\`javascript
// Return object
function getUser() {
    return { name: "Alice", age: 25 };
}

// Return array
function getMinMax(numbers) {
    return [Math.min(...numbers), Math.max(...numbers)];
}
\`\`\`

---

## 5. Using Returned Values

\`\`\`javascript
// Store in variable
let sum = add(5, 3);

// Use directly in expression
let doubled = add(5, 3) * 2;

// Pass to another function
console.log(add(5, 3));

// Chain function calls
let result = add(add(1, 2), add(3, 4));
\`\`\`

---

## 6. Return vs Console.log

| \`return\` | \`console.log\` |
|:---|:---|
| Gives value back to caller | Just prints to console |
| Can be used in expressions | Returns undefined |
| Value can be stored | Value is lost |
`
};
