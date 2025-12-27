import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Logical = {
    id: 'js-u2-doc-3-logical',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Logical Operators',
    duration: '12 min read',
    content: `
# Logical Operators

## 1. The Three Logical Operators

| Operator | Name | Description |
|:---|:---|:---|
| \`&&\` | AND | Both must be true |
| \`\\|\\|\` | OR | At least one must be true |
| \`!\` | NOT | Inverts true/false |

---

## 2. AND Operator (&&)

Returns \`true\` only if **both** sides are true:

\`\`\`javascript
true && true     // true
true && false    // false
false && true    // false
false && false   // false
\`\`\`

### Real Example:
\`\`\`javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive!");
}
\`\`\`

---

## 3. OR Operator (||)

Returns \`true\` if **at least one** side is true:

\`\`\`javascript
true || true     // true
true || false    // true
false || true    // true
false || false   // false
\`\`\`

### Real Example:
\`\`\`javascript
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No work today!");
}
\`\`\`

---

## 4. NOT Operator (!)

Inverts true to false, and false to true:

\`\`\`javascript
!true   // false
!false  // true
\`\`\`

### Real Example:
\`\`\`javascript
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}
\`\`\`

---

## 5. Short-Circuit Evaluation

JavaScript stops evaluating as soon as the result is known:

### AND (&&):
If first value is false, don't check the rest:
\`\`\`javascript
false && anything  // Returns false immediately
\`\`\`

### OR (||):
If first value is true, don't check the rest:
\`\`\`javascript
true || anything   // Returns true immediately
\`\`\`

### Practical Use - Default Values:
\`\`\`javascript
let username = inputName || "Guest";
// If inputName is empty/null, use "Guest"
\`\`\`

---

## 6. Combining Operators

You can combine multiple conditions:

\`\`\`javascript
let age = 25;
let isMember = true;
let hasTicket = false;

// Complex condition
if (age >= 18 && (isMember || hasTicket)) {
    console.log("Entry allowed");
}
\`\`\`

Use parentheses to make the order clear!

---

## 7. Nullish Coalescing (??)

A newer operator that checks for \`null\` or \`undefined\` only:

\`\`\`javascript
let name = null ?? "Default";      // "Default"
let count = 0 ?? 10;               // 0 (0 is not null)
let empty = "" ?? "fallback";      // "" (empty string is not null)
\`\`\`

Difference from \`||\`:
\`\`\`javascript
let count = 0 || 10;   // 10 (0 is falsy)
let count = 0 ?? 10;   // 0 (0 is not null/undefined)
\`\`\`

---

## Summary

| Operator | Use When |
|:---|:---|
| \`&&\` | All conditions must be true |
| \`\\|\\|\` | Any condition can be true |
| \`!\` | Invert a boolean |
| \`??\` | Provide default for null/undefined |
`
};
