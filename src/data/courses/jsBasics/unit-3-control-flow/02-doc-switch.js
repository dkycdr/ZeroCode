import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Switch = {
    id: 'js-u3-doc-2-switch',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Switch Statements',
    duration: '10 min read',
    content: `
# Switch Statements

## 1. When to Use Switch

Use \`switch\` when you have many conditions checking the **same variable** for **specific values**.

### Instead of this:
\`\`\`javascript
if (day === "monday") {
    // ...
} else if (day === "tuesday") {
    // ...
} else if (day === "wednesday") {
    // ...
}
\`\`\`

### Use this:
\`\`\`javascript
switch (day) {
    case "monday":
        // ...
        break;
    case "tuesday":
        // ...
        break;
}
\`\`\`

---

## 2. Switch Syntax

\`\`\`javascript
switch (expression) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no match
}
\`\`\`

---

## 3. Full Example

\`\`\`javascript
let day = "wednesday";

switch (day) {
    case "monday":
        console.log("Start of work week");
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("Midweek");
        break;
    case "friday":
        console.log("TGIF!");
        break;
    case "saturday":
    case "sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}
\`\`\`

---

## 4. The Break Statement

> [!WARNING]
> **Forgetting \`break\` causes fall-through!**

\`\`\`javascript
let num = 1;

switch (num) {
    case 1:
        console.log("One");
        // No break - falls through!
    case 2:
        console.log("Two");
        break;
}
// Output: "One" AND "Two"
\`\`\`

Each \`case\` needs a \`break\` (unless you intentionally want fall-through).

---

## 5. Grouping Cases

Sometimes multiple values need the same action:

\`\`\`javascript
let fruit = "apple";

switch (fruit) {
    case "apple":
    case "pear":
    case "banana":
        console.log("Common fruit");
        break;
    case "dragon fruit":
    case "durian":
        console.log("Exotic fruit");
        break;
}
\`\`\`

---

## 6. Default Case

Always include \`default\` to handle unexpected values:

\`\`\`javascript
switch (status) {
    case "success":
        console.log("✅ Done");
        break;
    case "error":
        console.log("❌ Failed");
        break;
    default:
        console.log("❓ Unknown status");
}
\`\`\`

---

## 7. Switch vs If-Else

| Use Switch When | Use If-Else When |
|:---|:---|
| Checking one variable for many values | Checking different conditions |
| Comparing exact values | Using ranges (>, <, >=) |
| Many specific cases | Few conditions |
`
};
