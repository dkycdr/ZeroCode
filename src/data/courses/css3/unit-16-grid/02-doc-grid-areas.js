import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2GridAreas = {
    id: 'css-unit16-doc-areas',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Grid Areas (ASCII Architecture)',
    duration: '15 min read',
    content: `
# Deep Dive: Grid Areas (ASCII Architecture)

## 1. The Visual Syntax
Most CSS is key-value pairs. **Grid Areas** are literally a drawing of your website in code.

\`\`\`css
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main   main"
        "footer footer  footer";
}
\`\`\`

## 2. Why "Senior Devs" Love This
1.  **Readability**: You can see the layout structure without calculating \`grid-column: 1 / 4\`.
2.  **Responsiveness**: You only change the *string* in Media Queries, not the element properties.

**Mobile Map:**
\`\`\`css
grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
\`\`\`

## 3. The Rules
*   Every row string must have the **same number of cells** (names or dots).
*   Rectangles must be **rectangular** (no L-shapes or T-shapes allowed).
*   Use \`.\` (dot) to leave an empty cell.

> [!TIP]
> **Pro Tip**: Name your zones abstractly (\`pos1\`, \`pos2\`) if you plan to move things wildly, but semantic names (\`head\`, \`nav\`) are better for maintenance.
`
};
