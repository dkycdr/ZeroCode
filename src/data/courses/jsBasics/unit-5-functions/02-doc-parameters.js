import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Parameters = {
    id: 'js-u5-doc-2-parameters',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Parameters & Arguments',
    duration: '10 min read',
    content: `
# Parameters & Arguments

## 1. Parameters vs Arguments

- **Parameters**: Variables in the function definition
- **Arguments**: Actual values passed when calling

\`\`\`javascript
// name is the PARAMETER
function greet(name) {
    console.log("Hello, " + name);
}

// "Alice" is the ARGUMENT
greet("Alice");
\`\`\`

---

## 2. Multiple Parameters

\`\`\`javascript
function add(a, b) {
    return a + b;
}

add(5, 3);  // 8
\`\`\`

Order matters! First argument → first parameter.

---

## 3. Default Parameters

Set default values for missing arguments:

\`\`\`javascript
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Alice");  // "Hello, Alice"
greet();         // "Hello, Guest"
\`\`\`

---

## 4. Rest Parameters

Accept unlimited arguments with \`...\`:

\`\`\`javascript
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

sum(1, 2);        // 3
sum(1, 2, 3, 4);  // 10
\`\`\`

---

## 5. Object Destructuring in Parameters

Pass objects and extract properties:

\`\`\`javascript
function greetUser({ name, age }) {
    console.log(\\\`Hello \\\${name}, you are \\\${age}\\\`);
}

greetUser({ name: "Alice", age: 25 });
\`\`\`

---

## 6. Common Mistakes

### Wrong number of arguments:
\`\`\`javascript
function add(a, b) {
    return a + b;
}

add(5);       // NaN (b is undefined)
add(1, 2, 3); // 3 (extra argument ignored)
\`\`\`

### Wrong order:
\`\`\`javascript
function divide(dividend, divisor) {
    return dividend / divisor;
}

divide(2, 10);  // 0.2 (not 5!)
\`\`\`
`
};
