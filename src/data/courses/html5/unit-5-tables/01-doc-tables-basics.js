import { CONTENT_TYPES } from '../../../curriculumStructure';

export const doc1TablesBasics = {
    id: 'unit-5-doc-basics',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'HTML Tables Basics - Mental Models & Structure',
    duration: '15 min read',
    content: `
# HTML Tables Basics - Mental Models & Structure

## 1. Visual Mental Model: Row vs Cell

A table is a grid. You build it **Row by Row** (\`<tr>\`), and inside each row, you place **Cells** (\`<td>\` or \`<th>\`).

\`\`\`text
      +-----------------------------+
      |  TABLE CONTAINER (<table>)  |
      |                             |
      |  +-----------------------+  |
      |  |  Cell 1   |  Cell 2   |  | -> <tr> (Row 1)
      |  +-----------------------+  |
      |  +-----------------------+  |
      |  |  Cell 3   |  Cell 4   |  | -> <tr> (Row 2)
      |  +-----------------------+  |
      |                             |
      +-----------------------------+
\`\`\`

*   **\`<tr>\` (Table Row)**: A horizontal slice of the table.
*   **\`<td>\` (Table Data)**: The standard cell containing data.
*   **\`<th>\` (Table Header)**: A special bold cell for titles (like "Name" or "Price").

---

## 2. Semantic Sections: Head, Body, Foot

Modern tables represent data logic, not just boxes.

| Tag | Name | Visual Location | Purpose |
| :--- | :--- | :--- | :--- |
| **\`<thead>\`** | Table Head | Top | Column titles (Name, Age, Year). Repeated usually on print pages. |
| **\`<tbody>\`** | Table Body | Middle | The actual data rows. Can be multiple chunks. |
| **\`<tfoot>\`** | Table Foot | Bottom | Summaries, totals, or global notes. |

\`\`\`html
<table>
    <thead> ... </thead>
    <tbody> ... </tbody>
    <tfoot> ... </tfoot>
</table>
\`\`\`

---

## 3. Merging Cells (Colspan & Rowspan)

This is where beginners break tables. You must **calculate** the cells you remove.

### Colspan (Merge Horizontal)
"I want to take up 2 spots in this row."

**Visual Before:**
\`\`\`text
|  A  |  B  |  C  |
\`\`\`
**Visual After (\`colspan="2"\` on A):**
\`\`\`text
|     A     |  C  |  (B is deleted from code!)
\`\`\`

**Rule:** If you add \`colspan="2"\`, you must **delete 1 cell** in that row code to keep the grid even.

### Rowspan (Merge Vertical)
"I want to take up this spot and the spot below me."

**Visual Before:**
\`\`\`text
Row 1: |  A  |  B  |
Row 2: |  C  |  D  |
\`\`\`
**Visual After (\`rowspan="2"\` on A):**
\`\`\`text
Row 1: |  A  |  B  |
Row 2: | (x) |  D  |  (C is deleted from code!)
\`\`\`

**Rule:** If you set \`rowspan="2"\` in Row 1, you must **delete the corresponding cell** in Row 2.

---

## ⛔ CRITICAL WARNING: Tables vs Layout

**NEVER** use tables to position images, sidebars, or entire websites.

*   **Bad (1990s style):** Using a table to put a logo on the left and a menu on the right.
*   **Why?** Screen readers read it as "Row 1, Column 1: Logo". It ruins accessibility and mobile responsiveness.
*   **Solution:** Use **CSS Grid** or **Flexbox** for layout. Use Tables **only for data** (charts, schedules, scores).
    `
};
