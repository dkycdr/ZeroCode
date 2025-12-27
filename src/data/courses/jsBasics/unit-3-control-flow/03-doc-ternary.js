import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Ternary = {
    id: 'js-u3-doc-3-ternary',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Ternary Operator',
    duration: '8 min read',
    content: `
# Ternary Operator

## 1. What is the Ternary Operator?

The ternary operator is a **shorthand if-else** for simple conditions:

\`\`\`javascript
condition ? valueIfTrue : valueIfFalse
\`\`\`

---

## 2. Basic Example

### Long way (if-else):
\`\`\`javascript
let age = 20;
let status;

if (age >= 18) {
    status = "adult";
} else {
    status = "minor";
}
\`\`\`

### Short way (ternary):
\`\`\`javascript
let age = 20;
let status = age >= 18 ? "adult" : "minor";
\`\`\`

Both do the same thing, but ternary is one line!

---

## 3. Common Use Cases

### Setting values:
\`\`\`javascript
let price = isMember ? 10 : 20;
let greeting = isLoggedIn ? "Welcome back!" : "Please log in";
\`\`\`

### In template literals:
\`\`\`javascript
console.log(\\\`Status: \\\${isOnline ? "🟢 Online" : "⚫ Offline"}\\\`);
\`\`\`

### In function returns:
\`\`\`javascript
function getDiscount(isMember) {
    return isMember ? 0.2 : 0;
}
\`\`\`

---

## 4. Nested Ternary (Use Sparingly!)

You can nest ternary operators, but it gets hard to read:

\`\`\`javascript
// Hard to read
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// Better: use if-else for complex logic
\`\`\`

> [!TIP]
> Only use ternary for **simple, two-option** conditions.

---

## 5. When to Use

### ✅ Good for:
- Setting a variable to one of two values
- Simple conditional expressions
- Inline conditions in JSX/templates

### ❌ Bad for:
- Multiple conditions
- Complex logic
- When you need to run multiple statements

---

## Summary

| Situation | Use |
|:---|:---|
| Simple A or B choice | Ternary \`? :\` |
| Multiple conditions | if-else chain |
| Many specific values | switch |
`
};
