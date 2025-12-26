import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Arithmetic = {
    id: 'js-u2-doc-1-arithmetic',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Arithmetic Operators',
    duration: '10 min read',
    content: `
# Arithmetic Operators

## 1. Basic Math Operators

JavaScript supports all standard math operations:

| Operator | Name | Example | Result |
|:---|:---|:---|:---|
| \`+\` | Addition | \`5 + 3\` | 8 |
| \`-\` | Subtraction | \`10 - 4\` | 6 |
| \`*\` | Multiplication | \`6 * 7\` | 42 |
| \`/\` | Division | \`20 / 4\` | 5 |
| \`%\` | Modulo (Remainder) | \`10 % 3\` | 1 |
| \`**\` | Exponentiation | \`2 ** 3\` | 8 |

---

## 2. The Modulo Operator (%)

Modulo returns the **remainder** after division:

\`\`\`javascript
console.log(10 % 3);  // 1 (10 ÷ 3 = 3 remainder 1)
console.log(15 % 5);  // 0 (15 ÷ 5 = 3 remainder 0)
console.log(7 % 2);   // 1 (7 ÷ 2 = 3 remainder 1)
\`\`\`

### Common Uses:
- **Check even/odd**: \`num % 2 === 0\` means even
- **Wrap around**: \`index % array.length\`
- **Cycle through values**: \`count % 3\` gives 0, 1, 2, 0, 1, 2...

---

## 3. Increment & Decrement

Shortcuts to add or subtract 1:

\`\`\`javascript
let count = 5;

count++;  // count is now 6 (same as count = count + 1)
count--;  // count is now 5 (same as count = count - 1)
\`\`\`

### Prefix vs Postfix:
\`\`\`javascript
let a = 5;
console.log(a++);  // 5 (logs first, then increments)
console.log(a);    // 6

let b = 5;
console.log(++b);  // 6 (increments first, then logs)
\`\`\`

---

## 4. Order of Operations (PEMDAS)

JavaScript follows standard math order:

1. **P**arentheses \`()\`
2. **E**xponentiation \`**\`
3. **M**ultiplication, **D**ivision, modulo
4. **A**ddition, **S**ubtraction

\`\`\`javascript
console.log(2 + 3 * 4);     // 14 (not 20!)
console.log((2 + 3) * 4);   // 20 (parentheses first)
console.log(2 ** 3 * 2);    // 16 (exponent first: 8 * 2)
\`\`\`

---

## 5. Working with Decimals

JavaScript uses floating-point numbers, which can cause precision issues:

\`\`\`javascript
console.log(0.1 + 0.2);  // 0.30000000000000004 (weird!)
\`\`\`

### Solution:
\`\`\`javascript
let result = 0.1 + 0.2;
console.log(result.toFixed(2));  // "0.30"
\`\`\`

---

## Summary

| Operator | Purpose |
|:---|:---|
| \`+\` | Add |
| \`-\` | Subtract |
| \`*\` | Multiply |
| \`/\` | Divide |
| \`%\` | Get remainder |
| \`**\` | Power/exponent |
| \`++\` | Add 1 |
| \`--\` | Subtract 1 |
`
};
