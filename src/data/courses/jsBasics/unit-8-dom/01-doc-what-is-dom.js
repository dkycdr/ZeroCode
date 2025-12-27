import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1WhatIsDOM = {
    id: 'js-u8-doc-1-what-is-dom',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'What is the DOM?',
    duration: '12 min read',
    content: `
# What is the DOM?

## 1. Document Object Model

The DOM is a tree representation of your HTML that JavaScript can interact with.

\`\`\`text
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p
\`\`\`

---

## 2. Everything is a Node

- **Document**: The entire page
- **Elements**: HTML tags (div, p, h1)
- **Text**: Text inside elements
- **Attributes**: id, class, src, etc.

---

## 3. Why It Matters

JavaScript can:
- Read HTML content
- Change HTML content
- Add/remove elements
- Change styles
- React to events

---

## 4. The document Object

\`document\` is your entry point to the DOM:

\`\`\`javascript
console.log(document);  // The entire page
console.log(document.title);  // Page title
console.log(document.body);   // Body element
\`\`\`
`
};
