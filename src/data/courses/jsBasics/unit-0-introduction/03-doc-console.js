import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Console = {
    id: 'js-u0-doc-3-console',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Console - Your Debug Tool',
    duration: '10 min read',
    content: `
# The Console - Your Debug Tool

## 1. What is the Console?

The **Console** is a tool in your browser where you can:
- **See output** from your JavaScript code
- **Write and test** JavaScript directly
- **Debug errors** in your programs

### How to Open:
| Browser | Shortcut |
|:---|:---|
| Chrome/Edge | \`F12\` then click "Console" tab |
| Firefox | \`F12\` or \`Ctrl+Shift+K\` |
| Safari | Enable in settings, then \`Cmd+Option+C\` |

---

## 2. console.log() - Your Best Friend

The most common way to output information:

\`\`\`javascript
console.log("Hello, world!");
console.log(42);
console.log(true);
\`\`\`

**Output:**
\`\`\`
Hello, world!
42
true
\`\`\`

### Log Multiple Things:
\`\`\`javascript
console.log("Name:", "Alice", "Age:", 25);
// Output: Name: Alice Age: 25
\`\`\`

---

## 3. Other Console Methods

### console.warn() - Yellow Warning ⚠️
For non-critical issues:
\`\`\`javascript
console.warn("Battery low!");
\`\`\`
Shows with yellow background and warning icon.

### console.error() - Red Error 🚨
For serious problems:
\`\`\`javascript
console.error("Failed to connect!");
\`\`\`
Shows with red background and error icon.

### console.info() - Information ℹ️
For informational messages:
\`\`\`javascript
console.info("User logged in successfully");
\`\`\`

### console.clear() - Clean Up
Clears all console output:
\`\`\`javascript
console.clear();
\`\`\`

---

## 4. console.table() - Pretty Data

Perfect for arrays and objects:

\`\`\`javascript
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

console.table(users);
\`\`\`

**Output:** A nice formatted table!

---

## 5. console.time() - Measure Speed

Want to know how long something takes?

\`\`\`javascript
console.time("loop");

for (let i = 0; i < 1000000; i++) {
    // do something
}

console.timeEnd("loop");
// Output: loop: 5.234ms
\`\`\`

---

## 6. Best Practices

### ✅ Good Logging:
\`\`\`javascript
console.log("User ID:", userId);
console.log("Order total:", total);
console.error("Payment failed:", errorMessage);
\`\`\`

### ❌ Bad Logging:
\`\`\`javascript
console.log("here");
console.log("test");
console.log("why not working???");
\`\`\`

Always include **context** in your logs so you know what you're looking at!

---

## Summary

| Method | Purpose | Color |
|:---|:---|:---|
| \`console.log()\` | General output | Normal |
| \`console.warn()\` | Warnings | Yellow |
| \`console.error()\` | Errors | Red |
| \`console.table()\` | Display data nicely | Table |
| \`console.time()\` | Measure performance | Normal |

**Next:** Time to write your first JavaScript code!
`
};
