import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Architecture = {
    id: 'html5-u8-doc-2-arch',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Project Architecture & Organization',
    duration: '10 min read',
    content: `
# A Clean House = A Happy Developer

As your project grows, "putting everything in one file" becomes a nightmare.

## Standard Folder Structure

\`\`\`text
/my-project
  ├── index.html
  ├── /css
  │    ├── style.css       (The main file)
  │    ├── variables.css   (Global colors/fonts)
  │    └── reset.css       (Normalization)
  ├── /js
  │    └── app.js
  └── /assets
       ├── /images
       └── /fonts
\`\`\`

## Why?
1.  **Cache Efficiency**: Browsers can cache your CSS layout while you just update the HTML text.
2.  **Mental Load**: When you want to fix a color, you know exactly where to go (\`/css/variables.css\`).
`
};
