import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Variables = {
    id: 'js-u1-doc-1-variables',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Variables: let, const, var',
    duration: '15 min read',
    content: `
# Variables: let, const, var

## 1. What is a Variable?

A variable is like a **labeled box** where you store data.

\`\`\`javascript
let age = 25;
\`\`\`

- \`let\` → "I want to create a box"
- \`age\` → "The label on the box"
- \`=\` → "Put this inside"
- \`25\` → "The value stored inside"

---

## 2. The Three Keywords

JavaScript has three ways to create variables:

| Keyword | Can Reassign? | Can Redeclare? | Scope |
|:---|:---|:---|:---|
| \`const\` | ❌ No | ❌ No | Block |
| \`let\` | ✅ Yes | ❌ No | Block |
| \`var\` | ✅ Yes | ✅ Yes | Function |

---

## 3. const - The Constant

Use \`const\` when the value should **never change**.

\`\`\`javascript
const PI = 3.14159;
const API_URL = "https://api.example.com";

PI = 3.14; // ❌ ERROR! Cannot reassign
\`\`\`

> [!TIP]
> **Best Practice**: Always start with \`const\`. Only use \`let\` when you know the value needs to change.

---

## 4. let - The Variable

Use \`let\` when the value **will change** later.

\`\`\`javascript
let score = 0;
score = 10;  // ✅ OK - updating the value
score = 25;  // ✅ OK - updating again

let score = 50; // ❌ ERROR! Cannot redeclare
\`\`\`

Common uses for \`let\`:
- Counters: \`let count = 0;\`
- Toggles: \`let isOpen = false;\`
- User input: \`let username = "";\`

---

## 5. var - The Old Way (Avoid!)

\`var\` is from old JavaScript (before 2015). It has problems:

\`\`\`javascript
var x = 10;
var x = 20; // ✅ Allowed (dangerous!)

if (true) {
    var leaked = "I escaped!";
}
console.log(leaked); // ✅ Still accessible (bad!)
\`\`\`

> [!WARNING]
> **Never use \`var\`** in new code. It exists only for old websites to keep working.

---

## 6. Naming Rules

### Valid Names:
- Start with letter, \`_\`, or \`$\`
- Can contain letters, numbers, \`_\`, \`$\`
- Case-sensitive (\`age\` ≠ \`Age\`)

### Good Examples:
\`\`\`javascript
let userName = "Alice";
let _privateData = 123;
let $price = 9.99;
let totalItems2024 = 50;
\`\`\`

### Bad Examples:
\`\`\`javascript
let 2fast = "error";     // ❌ Cannot start with number
let my-var = "error";    // ❌ No hyphens
let let = "error";       // ❌ Reserved word
\`\`\`

---

## 7. Naming Conventions

### camelCase (Recommended):
\`\`\`javascript
let firstName = "John";
let isLoggedIn = true;
let totalItemCount = 42;
\`\`\`

### SCREAMING_SNAKE_CASE (For constants):
\`\`\`javascript
const MAX_USERS = 100;
const API_KEY = "abc123";
\`\`\`

---

## Summary

| Situation | Use |
|:---|:---|
| Value never changes | \`const\` |
| Value will change | \`let\` |
| Old code compatibility | \`var\` (avoid) |
`
};
