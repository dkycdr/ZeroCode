import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1DesignSystem = {
    id: 'css-unit5-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Typographic Design System',
    duration: '45 min',
    content: `
# Lab: The Typographic Design System

## 1. The Concept: Semantic Foundation
Architect, a pro-level dashboard shouldn't have random font-sizes scattered everywhere. You must define a **Design System**. This ensures that every page in the **Nexus AI Network** feels like it was built by the same hand.

In this lab, you will initialize the Root Font Protocol. You will set a base font size on the \`html\` element and then use **Relative Units (rem)** to build a scalable hierarchy that works for all users.

---

## 2. The Mission: The Typography Core
You are building the **Central Data Manifesto**:
1.  **The Root Sync**: Set the base font size to \`16px\` on the \`html\` element.
2.  **Global Typeface**: Apply the "Inter" font to the entire \`body\`.
3.  **The Stack**: Ensure a clean fallback to \`sans-serif\` in case of connection failure.

---

## 3. Senior Guidance: Why 16px?
While we want to be flexible, \`16px\` is the universal browser default. By explicitly setting it, you create a stable "Ground Zero" for all your \`rem\` calculations. If you later decide to make your site "Bigger," you only have to change this one number.

> [!IMPORTANT]
> **Mission Objective**: Consistency. Ensure no heading or paragraph uses a pixel value (\`px\`) for font-size.
`,
    tasks: [
        {
            id: 1,
            description: 'The Root Anchor: In "style.css", set "html { font-size: 16px; }".',
            completed: false,
            regex: /html\s*\{(?=[\s\S]*?font-size\s*:\s*16px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Setting the root font size defines what 1rem equals.',
                strategy: 'Target the html tag.',
                solution: 'html { font-size: 16px; }'
            }
        },
        {
            id: 2,
            description: 'The Primary Voice: Set the "body" to use "\'Inter\', sans-serif;".',
            completed: false,
            regex: /body\s*\{(?=[\s\S]*?font-family\s*:\s*(['"])Inter\1\s*,\s*sans-serif;?)[\s\S]*?\}/,
            hint: {
                concept: 'Inheritance ensures all children will use this font unless overridden.',
                strategy: 'Update the font-family property on the body.',
                solution: "font-family: 'Inter', sans-serif;"
            }
        },
        {
            id: 3,
            description: 'The Baseline Height: Set the "body" to "line-height: 1.6;".',
            completed: false,
            regex: /body\s*\{(?=[\s\S]*?line-height\s*:\s*1\.6;?)[\s\S]*?\}/,
            hint: {
                concept: 'Line-height improves readability by adding space between lines of text.',
                strategy: 'Apply a unitless value (1.6) for best results.',
                solution: 'line-height: 1.6;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS DESIGN SYSTEM: TYPOGRAPHY */

/* 1. Initialize Root Size */

/* 2, 3. Set Body Typeface and Line Height */
body {
    background: #000;
    color: #eee;
    margin: 50px;
}

h1 {
    color: #4cc9f0;
}

p {
    max-width: 60ch;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<h1>NEXUS_CORE_MANIFESTO</h1>
<p>This document outlines the protocols for the visual communication department. All data must be presented with absolute clarity and maximum performance. We prioritize the user's ability to ingest information over decorative flair.</p>`
        }
    ]
};
