import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4ArrowFunctions = {
    id: 'js-u5-doc-4-arrow',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Arrow Functions',
    duration: '10 min read',
    content: `
# Arrow Functions

## 1. The Modern Syntax

Arrow functions are a shorter way to write functions:

### Traditional:
\`\`\`javascript
function add(a, b) {
    return a + b;
}
\`\`\`

### Arrow:
\`\`\`javascript
const add = (a, b) => {
    return a + b;
};
\`\`\`

---

## 2. Shorter Syntax

### One-line with implicit return:
\`\`\`javascript
const add = (a, b) => a + b;
\`\`\`

No curly braces = automatic return!

### One parameter (no parentheses):
\`\`\`javascript
const double = n => n * 2;
\`\`\`

### No parameters:
\`\`\`javascript
const sayHello = () => "Hello!";
\`\`\`

---

## 3. When to Use Arrow Functions

### ✅ Good for:
- Short, simple functions
- Callbacks
- Array methods (map, filter, etc.)

\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
\`\`\`

### ⚠️ Be careful with:
- Functions that need their own \`this\`
- Methods in objects (sometimes)

---

## 4. Comparison

\`\`\`javascript
// Traditional
function square(x) {
    return x * x;
}

// Arrow (full)
const square = (x) => {
    return x * x;
};

// Arrow (short)
const square = x => x * x;
\`\`\`

All three do the same thing!

---

## 5. Returning Objects

Wrap in parentheses to return object directly:

\`\`\`javascript
// ❌ Won't work (braces are seen as function body)
const getUser = () => { name: "Alice", age: 25 };

// ✅ Correct
const getUser = () => ({ name: "Alice", age: 25 });
\`\`\`

---

## Summary

| Form | Example |
|:---|:---|
| Full | \`(a, b) => { return a + b; }\` |
| One-liner | \`(a, b) => a + b\` |
| One param | \`x => x * 2\` |
| No params | \`() => "Hi"\` |
`
};
