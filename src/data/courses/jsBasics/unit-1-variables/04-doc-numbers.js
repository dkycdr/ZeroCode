import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Numbers = {
    id: 'js-u1-doc-4-numbers',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Numbers & Math Object',
    duration: '10 min read',
    content: `
# Numbers & Math Object

## 1. Number Basics

JavaScript has one number type for all numeric values:

\`\`\`javascript
let integer = 42;
let decimal = 3.14;
let negative = -100;
let million = 1_000_000; // Underscores for readability
\`\`\`

---

## 2. Special Numbers

\`\`\`javascript
let infinite = Infinity;    // Larger than any number
let negInf = -Infinity;     // Smaller than any number
let invalid = NaN;          // "Not a Number"
\`\`\`

### NaN (Not a Number):
\`\`\`javascript
console.log("hello" * 2);   // NaN
console.log(NaN === NaN);   // false (weird but true!)
console.log(isNaN("hello")); // true
\`\`\`

---

## 3. The Math Object

JavaScript has a built-in \`Math\` object with useful methods:

### Rounding:
\`\`\`javascript
Math.round(4.5);  // 5 (rounds to nearest)
Math.floor(4.9);  // 4 (rounds down)
Math.ceil(4.1);   // 5 (rounds up)
Math.trunc(4.9);  // 4 (removes decimals)
\`\`\`

### Min & Max:
\`\`\`javascript
Math.max(1, 5, 3);    // 5
Math.min(1, 5, 3);    // 1
\`\`\`

### Power & Square Root:
\`\`\`javascript
Math.pow(2, 3);   // 8 (2³)
Math.sqrt(16);    // 4
\`\`\`

### Random Numbers:
\`\`\`javascript
Math.random();              // 0.0 to 0.999...
Math.floor(Math.random() * 10); // 0 to 9
\`\`\`

### Absolute Value:
\`\`\`javascript
Math.abs(-5);  // 5
Math.abs(5);   // 5
\`\`\`

---

## 4. Type Conversion

### String to Number:
\`\`\`javascript
Number("42");      // 42
parseInt("42");    // 42
parseFloat("3.14"); // 3.14
+"42";             // 42 (shortcut)
\`\`\`

### Number to String:
\`\`\`javascript
let num = 42;
String(num);       // "42"
num.toString();    // "42"
num + "";          // "42" (shortcut)
\`\`\`

---

## 5. Useful Number Methods

### toFixed() - Decimal Places:
\`\`\`javascript
let price = 19.99999;
console.log(price.toFixed(2)); // "19.99"
\`\`\`

### isNaN() - Check if Not a Number:
\`\`\`javascript
isNaN("hello");  // true
isNaN(123);      // false
\`\`\`

### isFinite() - Check if Finite:
\`\`\`javascript
isFinite(123);      // true
isFinite(Infinity); // false
\`\`\`

---

## Quick Reference

| Method | Purpose | Example |
|:---|:---|:---|
| \`Math.round()\` | Round to nearest | \`Math.round(4.5)\` → 5 |
| \`Math.floor()\` | Round down | \`Math.floor(4.9)\` → 4 |
| \`Math.ceil()\` | Round up | \`Math.ceil(4.1)\` → 5 |
| \`Math.random()\` | Random 0-1 | \`Math.random()\` → 0.7234... |
| \`Math.abs()\` | Absolute value | \`Math.abs(-5)\` → 5 |
| \`.toFixed(n)\` | n decimal places | \`(3.14159).toFixed(2)\` → "3.14" |
`
};
