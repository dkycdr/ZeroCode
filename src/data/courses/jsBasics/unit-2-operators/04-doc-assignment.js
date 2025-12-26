import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Assignment = {
    id: 'js-u2-doc-4-assignment',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Assignment & Shorthand Operators',
    duration: '8 min read',
    content: `
# Assignment & Shorthand Operators

## 1. Basic Assignment

The \`=\` operator assigns a value:

\`\`\`javascript
let score = 0;
score = 10;  // Now score is 10
\`\`\`

---

## 2. Compound Assignment Operators

Instead of writing \`x = x + 5\`, you can use shorthand:

| Operator | Long Form | Short Form |
|:---|:---|:---|
| \`+=\` | \`x = x + 5\` | \`x += 5\` |
| \`-=\` | \`x = x - 5\` | \`x -= 5\` |
| \`*=\` | \`x = x * 5\` | \`x *= 5\` |
| \`/=\` | \`x = x / 5\` | \`x /= 5\` |
| \`%=\` | \`x = x % 5\` | \`x %= 5\` |
| \`**=\` | \`x = x ** 2\` | \`x **= 2\` |

---

## 3. Examples

\`\`\`javascript
let score = 100;

score += 10;   // 110 (add 10)
score -= 20;   // 90 (subtract 20)
score *= 2;    // 180 (multiply by 2)
score /= 3;    // 60 (divide by 3)

console.log(score);  // 60
\`\`\`

---

## 4. String Concatenation Shorthand

Works with strings too:

\`\`\`javascript
let message = "Hello";
message += " World";
console.log(message);  // "Hello World"
\`\`\`

---

## 5. Common Use Cases

### Counter:
\`\`\`javascript
let count = 0;
count += 1;  // or count++
\`\`\`

### Accumulator:
\`\`\`javascript
let total = 0;
total += price1;
total += price2;
total += price3;
\`\`\`

### Building Strings:
\`\`\`javascript
let html = "";
html += "<div>";
html += "Content";
html += "</div>";
\`\`\`

---

## 6. Increment/Decrement Recap

Special shortcuts for +1 and -1:

\`\`\`javascript
count++;  // Same as count += 1
count--;  // Same as count -= 1
\`\`\`

---

## Summary

| Writing This | Instead of This |
|:---|:---|
| \`x += 5\` | \`x = x + 5\` |
| \`x -= 5\` | \`x = x - 5\` |
| \`x *= 5\` | \`x = x * 5\` |
| \`x /= 5\` | \`x = x / 5\` |
| \`x++\` | \`x = x + 1\` |

Use shorthand operators to write cleaner, more readable code!
`
};
