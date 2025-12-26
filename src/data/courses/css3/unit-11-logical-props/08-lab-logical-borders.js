import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4LogicalBorders = {
    id: 'css-unit11-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Logical Borders',
    duration: '20 min',
    content: `
# Lab: Logical Borders (Semantic Accents)

## 1. The Concept: Intent-Based Borders
Architect, imagine you want to create a **high-precision blockquote** that features a thick accent line at the start of the text for dramatic emphasis. If you use \`border-left\`, a user viewing the site in Arabic (RTL) will see the line at the *end* of the quote (the left side), which breaks the design logic as it should intuitively lead the text.

We will implement **Logical Border Properties**. This allows us to target the "Start" or "End" side of an element regardless of its physical orientation on the display.

---

## 2. The Mission: The Nexus Quote Module
Your task is to style a **Nexus Command Quote** so that it always features an accent at the start of the text stream.

### Deployment Parameters:
1.  **Logical Width**: Define the thickness of the starting line using \`border-inline-start-width: 8px;\`.
2.  **Logical Style**: Set the line type using \`border-inline-start-style: solid;\`.
3.  **Logical Color**: Assign the signature Nexus cyan using \`border-inline-start-color: #4cc9f0;\`.
4.  **The Result**: Observe the HTML file. Even with the \`dir="rtl"\` attribute active, the neon accent will "follow" the start of the sentence to the right side.

---

## 3. Machine Logic: The Directional Tracker
When you declare a \`border-inline-start\`, the browser engine doesn't just look at the screen coordinates; it queries the \`dir\` (direction) attribute of the parent element or the document itself. This is the intelligent way to build UI components that are truly modular and "Global-Ready."

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Avoid Premature Shorthands**: While \`border-inline-start\` supports a shorthand (e.g., \`8px solid #4cc9f0\`), in this lab, we require you to use the expanded properties. This ensures you master every sub-component of the logical border system (width, style, color).

> [!TIP]
> **Common Use Cases**: This technique is perfect for comment sections, warning banners, or highlighted notes in complex administrative dashboards.
`,
    tasks: [
        {
            id: 1,
            description: 'The Logical Width: In "blockquote", set "border-inline-start-width: 8px;".',
            completed: false,
            regex: /blockquote\s*\{(?=[\s\S]*?border-inline-start-width\s*:\s*8px;?)[\s\S]*?\}/,
            hint: {
                concept: 'border-inline-start-width targets the thickness of the line at the beginning of the text flow.',
                strategy: 'Add the width property to the blockquote selector.',
                solution: 'border-inline-start-width: 8px;'
            }
        },
        {
            id: 2,
            description: 'The Logical Style: Set "border-inline-start-style: solid;".',
            completed: false,
            regex: /blockquote\s*\{(?=[\s\S]*?border-inline-start-style\s*:\s*solid;?)[\s\S]*?\}/,
            hint: {
                concept: 'Style determines the visual appearance of the border stroke.',
                strategy: 'Set the style property to solid.',
                solution: 'border-inline-start-style: solid;'
            }
        },
        {
            id: 3,
            description: 'The Logical Color: Set "border-inline-start-color: #4cc9f0;".',
            completed: false,
            regex: /blockquote\s*\{(?=[\s\S]*?border-inline-start-color\s*:\s*#4cc9f0;?)[\s\S]*?\}/,
            hint: {
                concept: 'Use the official Nexus cyan for a high-high-performance look.',
                strategy: 'Apply the color property.',
                solution: 'border-inline-start-color: #4cc9f0;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS COMMAND QUOTE - LOGICAL ACCENT ENGINE */
blockquote {
    background: #0a0a0f;
    color: #4cc9f0;
    font-family: 'Space Mono', monospace;
    padding: 30px 40px;
    margin: 0;
    font-style: italic;
    font-size: 1.2rem;
    line-height: 1.6;
    border-radius: 2px;
    
    /* 1, 2, 3. Implement expanded logical border properties below */

}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="background: #000; height: 100vh; padding: 100px;">
    <!-- Simulated RTL environment (Right-to-Left) -->
    <blockquote dir="rtl">
        "Efficiency is the silent language of the machine. The Architect speaks it through logical constraints and directional independence."
    </blockquote>
</div>`
        }
    ]
};
