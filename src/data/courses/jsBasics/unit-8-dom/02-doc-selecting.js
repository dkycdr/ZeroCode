import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Selecting = {
    id: 'js-u8-doc-2-selecting',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Selecting Elements',
    duration: '12 min read',
    content: `
# Selecting Elements

## 1. getElementById

Select by ID (returns single element):

\`\`\`javascript
const header = document.getElementById("main-header");
\`\`\`

---

## 2. querySelector (Recommended)

Select using CSS selectors (returns first match):

\`\`\`javascript
const header = document.querySelector("#main-header");
const button = document.querySelector(".btn");
const input = document.querySelector("input[type='email']");
\`\`\`

---

## 3. querySelectorAll

Select ALL matching elements:

\`\`\`javascript
const buttons = document.querySelectorAll(".btn");
// Returns NodeList - like an array

buttons.forEach(btn => {
    console.log(btn);
});
\`\`\`

---

## 4. Other Methods

\`\`\`javascript
document.getElementsByClassName("active");  // By class
document.getElementsByTagName("p");         // By tag
\`\`\`

---

## 5. Quick Reference

| Method | Returns | Selector Type |
|:---|:---|:---|
| \`getElementById\` | Single element | ID only |
| \`querySelector\` | First match | CSS selector |
| \`querySelectorAll\` | All matches | CSS selector |
`
};
