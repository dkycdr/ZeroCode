import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2DataTypes = {
    id: 'js-u1-doc-2-data-types',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Primitive Data Types',
    duration: '15 min read',
    content: `
# Primitive Data Types

## 1. What is a Data Type?

Data types tell JavaScript what **kind of data** you're working with.

Different types behave differently:
- Numbers can be added: \`5 + 3 = 8\`
- Strings are joined: \`"Hello" + "World" = "HelloWorld"\`

---

## 2. The 7 Primitive Types

JavaScript has 7 "primitive" (basic) types:

| Type | Example | Description |
|:---|:---|:---|
| **String** | \`"Hello"\` | Text |
| **Number** | \`42\`, \`3.14\` | Integers and decimals |
| **Boolean** | \`true\`, \`false\` | Yes/No values |
| **Undefined** | \`undefined\` | Variable declared but no value |
| **Null** | \`null\` | Intentionally empty |
| **Symbol** | \`Symbol('id')\` | Unique identifier (advanced) |
| **BigInt** | \`9007199254740991n\` | Very large numbers |

---

## 3. Strings - Text Data

Text wrapped in quotes:

\`\`\`javascript
let single = 'Hello';
let double = "World";
let backticks = \\\`Template\\\`;
\`\`\`

### String Length:
\`\`\`javascript
let name = "Alice";
console.log(name.length); // 5
\`\`\`

### Access Characters:
\`\`\`javascript
let word = "Hello";
console.log(word[0]); // "H"
console.log(word[4]); // "o"
\`\`\`

---

## 4. Numbers - Numeric Data

JavaScript has ONE number type (no separate int/float):

\`\`\`javascript
let integer = 42;
let decimal = 3.14159;
let negative = -17;
let scientific = 2.5e6; // 2,500,000
\`\`\`

### Special Numbers:
\`\`\`javascript
let infinite = Infinity;
let negInfinite = -Infinity;
let notANumber = NaN; // "Not a Number"
\`\`\`

---

## 5. Booleans - True or False

Only two possible values:

\`\`\`javascript
let isLoggedIn = true;
let hasPermission = false;
\`\`\`

### From Comparisons:
\`\`\`javascript
let result = 5 > 3;  // true
let check = 10 === 5; // false
\`\`\`

---

## 6. Undefined vs Null

### Undefined (Automatic Empty):
When you declare a variable but don't give it a value:
\`\`\`javascript
let x;
console.log(x); // undefined
\`\`\`

### Null (Intentional Empty):
When you explicitly say "this is empty":
\`\`\`javascript
let user = null; // "No user yet"
\`\`\`

### The Difference:
- \`undefined\` = "I forgot to put something here"
- \`null\` = "I intentionally left this empty"

---

## 7. Checking Types with typeof

\`\`\`javascript
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (⚠️ JavaScript bug!)
\`\`\`

> [!NOTE]
> \`typeof null\` returns "object" due to a historical bug that can't be fixed without breaking websites.

---

## Summary

| Type | Example | typeof |
|:---|:---|:---|
| String | \`"hello"\` | "string" |
| Number | \`42\` | "number" |
| Boolean | \`true\` | "boolean" |
| Undefined | \`undefined\` | "undefined" |
| Null | \`null\` | "object" (bug) |
`
};
