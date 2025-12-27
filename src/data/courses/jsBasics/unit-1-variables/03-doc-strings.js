import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Strings = {
    id: 'js-u1-doc-3-strings',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Strings & String Methods',
    duration: '12 min read',
    content: `
# Strings & String Methods

## 1. Creating Strings

Three ways to create strings:

\`\`\`javascript
let single = 'Hello';
let double = "World";
let template = \\\`Hello World\\\`;
\`\`\`

### Template Literals (Backticks)

The modern way - allows variables inside strings:

\`\`\`javascript
let name = "Alice";
let greeting = \\\`Hello, \\\${name}!\\\`;
console.log(greeting); // "Hello, Alice!"
\`\`\`

Also allows multi-line strings:
\`\`\`javascript
let message = \\\`
    Line 1
    Line 2
    Line 3
\\\`;
\`\`\`

---

## 2. Common String Methods

### Length:
\`\`\`javascript
let text = "JavaScript";
console.log(text.length); // 10
\`\`\`

### Change Case:
\`\`\`javascript
let word = "Hello";
console.log(word.toUpperCase()); // "HELLO"
console.log(word.toLowerCase()); // "hello"
\`\`\`

### Trim Whitespace:
\`\`\`javascript
let messy = "   Hello World   ";
console.log(messy.trim()); // "Hello World"
\`\`\`

---

## 3. Finding Text

### includes() - Check if contains:
\`\`\`javascript
let sentence = "I love JavaScript";
console.log(sentence.includes("love")); // true
console.log(sentence.includes("hate")); // false
\`\`\`

### indexOf() - Find position:
\`\`\`javascript
let text = "Hello World";
console.log(text.indexOf("World")); // 6
console.log(text.indexOf("xyz"));   // -1 (not found)
\`\`\`

### startsWith() / endsWith():
\`\`\`javascript
let file = "image.png";
console.log(file.endsWith(".png"));   // true
console.log(file.startsWith("img")); // false
\`\`\`

---

## 4. Extracting Text

### slice(start, end):
\`\`\`javascript
let text = "JavaScript";
console.log(text.slice(0, 4));  // "Java"
console.log(text.slice(4));     // "Script"
console.log(text.slice(-6));    // "Script" (from end)
\`\`\`

### substring(start, end):
\`\`\`javascript
let text = "Hello World";
console.log(text.substring(0, 5)); // "Hello"
\`\`\`

---

## 5. Replacing Text

### replace():
\`\`\`javascript
let text = "I like cats";
let newText = text.replace("cats", "dogs");
console.log(newText); // "I like dogs"
\`\`\`

### replaceAll():
\`\`\`javascript
let text = "cat cat cat";
console.log(text.replaceAll("cat", "dog")); // "dog dog dog"
\`\`\`

---

## 6. Splitting & Joining

### split() - String to Array:
\`\`\`javascript
let csv = "apple,banana,orange";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "orange"]
\`\`\`

### join() - Array to String:
\`\`\`javascript
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"
\`\`\`

---

## Quick Reference

| Method | Purpose | Example |
|:---|:---|:---|
| \`.length\` | Get length | \`"Hi".length\` → 2 |
| \`.toUpperCase()\` | ALL CAPS | \`"hi".toUpperCase()\` → "HI" |
| \`.toLowerCase()\` | all lower | \`"HI".toLowerCase()\` → "hi" |
| \`.includes()\` | Contains? | \`"hello".includes("ell")\` → true |
| \`.slice()\` | Extract part | \`"hello".slice(0,2)\` → "he" |
| \`.replace()\` | Replace text | \`"hi".replace("i","ey")\` → "hey" |
| \`.split()\` | To array | \`"a,b".split(",")\` → ["a","b"] |
`
};
