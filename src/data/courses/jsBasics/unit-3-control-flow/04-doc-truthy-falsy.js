import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4TruthyFalsy = {
    id: 'js-u3-doc-4-truthy-falsy',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Truthy & Falsy Values',
    duration: '10 min read',
    content: `
# Truthy & Falsy Values

## 1. What are Truthy and Falsy?

In JavaScript, every value has an inherent "truthiness" when used in a boolean context (like if statements).

- **Truthy**: Values that act like \`true\`
- **Falsy**: Values that act like \`false\`

---

## 2. The Falsy Values (Memorize These!)

There are only **6 falsy values** in JavaScript:

| Value | Type | Description |
|:---|:---|:---|
| \`false\` | Boolean | The actual false |
| \`0\` | Number | Zero |
| \`""\` | String | Empty string |
| \`null\` | Null | No value |
| \`undefined\` | Undefined | No value assigned |
| \`NaN\` | Number | Not a Number |

**Everything else is truthy!**

---

## 3. Examples

\`\`\`javascript
// Falsy - these all skip the if block
if (false) { }
if (0) { }
if ("") { }
if (null) { }
if (undefined) { }
if (NaN) { }

// Truthy - these all run the if block
if (true) { }
if (1) { }
if ("hello") { }
if ([]) { }      // Empty array is truthy!
if ({}) { }      // Empty object is truthy!
if ("0") { }     // String "0" is truthy!
\`\`\`

---

## 4. Common Gotchas

### Empty array is truthy!
\`\`\`javascript
let items = [];

if (items) {
    console.log("Has items"); // This runs!
}

// Check length instead:
if (items.length > 0) {
    console.log("Has items");
}
\`\`\`

### String "0" is truthy!
\`\`\`javascript
let value = "0";

if (value) {
    console.log("Truthy"); // This runs!
}
\`\`\`

### Negative numbers are truthy!
\`\`\`javascript
if (-1) {
    console.log("Truthy"); // This runs!
}
\`\`\`

---

## 5. Practical Uses

### Check if variable has a value:
\`\`\`javascript
let username = "";

if (username) {
    console.log("Welcome, " + username);
} else {
    console.log("No username provided");
}
\`\`\`

### Default values with ||:
\`\`\`javascript
let name = inputName || "Guest";
// If inputName is falsy, use "Guest"
\`\`\`

### Check before accessing:
\`\`\`javascript
let user = null;

if (user && user.email) {
    console.log(user.email);
}
\`\`\`

---

## 6. Converting to Boolean

Use \`Boolean()\` or \`!!\` to explicitly convert:

\`\`\`javascript
Boolean("hello");  // true
Boolean(0);        // false

!!"hello";         // true (double NOT)
!!0;               // false
\`\`\`

---

## Summary

| Falsy Values | Truthy (Everything Else) |
|:---|:---|
| \`false\`, \`0\`, \`""\` | \`true\`, \`1\`, \`"hello"\` |
| \`null\`, \`undefined\` | \`[]\`, \`{}\` |
| \`NaN\` | \`"0"\`, \`-1\` |
`
};
