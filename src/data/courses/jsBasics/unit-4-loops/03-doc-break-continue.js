import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3BreakContinue = {
    id: 'js-u4-doc-3-break-continue',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Break & Continue',
    duration: '8 min read',
    content: `
# Break & Continue

## 1. Break - Exit the Loop

\`break\` immediately exits the loop:

\`\`\`javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit when i is 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
\`\`\`

---

## 2. Continue - Skip This Iteration

\`continue\` skips to the next iteration:

\`\`\`javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip when i is 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4 (skips 2)
\`\`\`

---

## 3. Practical Examples

### Break: Find and stop
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
let found = null;

for (let num of numbers) {
    if (num === 3) {
        found = num;
        break; // Stop searching
    }
}
\`\`\`

### Continue: Skip invalid items
\`\`\`javascript
const scores = [85, -1, 92, -1, 78];

for (let score of scores) {
    if (score < 0) {
        continue; // Skip invalid scores
    }
    console.log(score);
}
// Output: 85, 92, 78
\`\`\`

---

## 4. Visual Comparison

\`\`\`text
Break:       Continue:
0            0
1            1
2 → EXIT     2 → SKIP
             3
             4
\`\`\`

---

## 5. Nested Loops

Break only exits the inner loop:

\`\`\`javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break; // Exits inner loop
        console.log(i, j);
    }
}
// Output: (0,0), (1,0), (2,0)
\`\`\`

---

## Summary

| Statement | Effect |
|:---|:---|
| \`break\` | Exit the entire loop |
| \`continue\` | Skip to next iteration |
`
};
