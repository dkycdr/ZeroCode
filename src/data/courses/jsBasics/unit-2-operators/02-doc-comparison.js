import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Comparison = {
    id: 'js-u2-doc-2-comparison',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Comparison Operators',
    duration: '12 min read',
    content: `
# Comparison Operators

## 1. What are Comparison Operators?

Comparison operators compare two values and return \`true\` or \`false\`.

---

## 2. The Operators

| Operator | Meaning | Example | Result |
|:---|:---|:---|:---|
| \`==\` | Equal (loose) | \`5 == "5"\` | true |
| \`===\` | Equal (strict) | \`5 === "5"\` | false |
| \`!=\` | Not equal (loose) | \`5 != "5"\` | false |
| \`!==\` | Not equal (strict) | \`5 !== "5"\` | true |
| \`>\` | Greater than | \`10 > 5\` | true |
| \`<\` | Less than | \`10 < 5\` | false |
| \`>=\` | Greater or equal | \`5 >= 5\` | true |
| \`<=\` | Less or equal | \`4 <= 5\` | true |

---

## 3. Loose vs Strict Equality

### Loose Equality (\`==\`)
Converts types before comparing:
\`\`\`javascript
5 == "5"      // true (string converted to number)
true == 1     // true (boolean converted to number)
null == undefined  // true (special case)
\`\`\`

### Strict Equality (\`===\`)
No conversion - types must match:
\`\`\`javascript
5 === "5"     // false (different types)
true === 1    // false (different types)
5 === 5       // true (same type and value)
\`\`\`

> [!TIP]
> **Always use \`===\` (strict equality)** to avoid unexpected type conversion bugs.

---

## 4. Comparing Strings

Strings are compared character by character (alphabetically):

\`\`\`javascript
"apple" < "banana"   // true (a comes before b)
"cat" > "car"        // true (t comes after r)
"10" < "9"           // true (string comparison: 1 < 9)
\`\`\`

> [!WARNING]
> Comparing number-strings as strings can give wrong results!
> \`"10" < "9"\` is true because it compares characters, not numbers.

---

## 5. Comparing with null and undefined

These have tricky comparison behaviors:

\`\`\`javascript
null == undefined    // true (special case)
null === undefined   // false (different types)

null == 0            // false
null > 0             // false
null >= 0            // true (weird!)
\`\`\`

Best practice: Always use \`===\` and check explicitly.

---

## 6. Common Patterns

### Check if equal:
\`\`\`javascript
if (password === "secret123") {
    console.log("Access granted");
}
\`\`\`

### Check if greater:
\`\`\`javascript
if (age >= 18) {
    console.log("You can vote");
}
\`\`\`

### Check if not equal:
\`\`\`javascript
if (status !== "banned") {
    console.log("Welcome!");
}
\`\`\`

---

## Summary

| Use Case | Operator |
|:---|:---|
| Check exact match | \`===\` |
| Check not exact match | \`!==\` |
| Greater/less than | \`>\` \`<\` \`>=\` \`<=\` |
| Avoid loose comparison | Never use \`==\` or \`!=\` |
`
};
