import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Tables = {
    id: 'html5-unit-5',
    title: 'Tables - Displaying Tabular Data',
    description: 'Master HTML tables: structure, headers, footers, and accessibility best practices. Learn to build semantic data references, not layout grids.',
    items: [
        {
            id: 'html5-5-1',
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
Row 1 |  |  Cell 1   |  Cell 2   |  | -> <tr>
      |  +-----------------------+  |
      |  +-----------------------+  |
Row 2 |  |  Cell 3   |  Cell 4   |  | -> <tr>
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
        },
        {
            id: 'html5-5-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Creating a Semantic Data Table',
            duration: '20 min',
            content: `
# Creating a Semantic Data Table

We will build a financial report table step-by-step. Focus on the structure.

## The Target Result

\`\`\`text
+------------------------------+
|       Monthly Expenses       |  <-- Caption
+------------------------------+
|  Item      |  Category | Cost|  <-- Thead
+------------+-----------+-----+
|  Rent      |  Housing  | $800|  <-- Tbody
|  Food      |  Living   | $300|
|  Internet  |  Utility  | $50 |
+------------+-----------+-----+
|  Total Costs           | $1150| <-- Tfoot (Colspan used!)
+------------------------------+
\`\`\`

## Your Tasks
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create the Main Container: Add a <table> tag with a <caption> set to "Monthly Expenses".',
                    completed: false,
                    // Regex checks for table overlapping caption
                    regex: /<table[^>]*>[\s\S]*?<caption>\s*Monthly Expenses\s*<\/caption>/i
                },
                {
                    id: 2,
                    description: 'Build the Header: Add a <thead> containing one <tr> with 3 <th> cells: "Item", "Category", "Cost".',
                    completed: false,
                    // Regex ensures thead > tr > 3 ths
                    regex: /<thead>[\s\S]*?<tr>[\s\S]*?<th>\s*Item\s*<\/th>[\s\S]*?<th>\s*Category\s*<\/th>[\s\S]*?<th>\s*Cost\s*<\/th>[\s\S]*?<\/tr>[\s\S]*?<\/thead>/i
                },
                {
                    id: 3,
                    description: 'Start the Body: Add a <tbody> and create the first row (Rent, Housing, $800) using <td> tags.',
                    completed: false,
                    regex: /<tbody>[\s\S]*?<tr>[\s\S]*?<td>\s*Rent\s*<\/td>[\s\S]*?<td>\s*Housing\s*<\/td>[\s\S]*?<td>\s*\$800\s*<\/td>[\s\S]*?<\/tr>/i
                },
                {
                    id: 4,
                    description: 'Fill the Data: Add two more rows to <tbody>: (Food, Living, $300) and (Internet, Utility, $50).',
                    completed: false,
                    // Checking for existence of Food and Internet rows inside tbody
                    regex: /<tbody>[\s\S]*?<td>\s*Food\s*<\/td>[\s\S]*?<td>\s*Internet\s*<\/td>[\s\S]*?<\/tbody>/i
                },
                {
                    id: 5,
                    description: 'Add the Footer: Create a <tfoot>. Inside, add a row with a cell "Total Costs" spanning 2 columns (colspan="2") and a final cell "$1150".',
                    completed: false,
                    // Validates tfoot structure and colspan usage
                    regex: /<tfoot>[\s\S]*?<tr>[\s\S]*?<t[hd]\s+colspan=["']2["']>\s*Total Costs\s*<\/t[hd]>[\s\S]*?<t[hd]>\s*\$1150\s*<\/t[hd]>[\s\S]*?<\/tr>[\s\S]*?<\/tfoot>/i
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Report</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 
        Task Guide:
        1. <table> with <caption>Monthly Expenses</caption>
        2. <thead> with one row of 3 headers
        3. <tbody> with 3 rows of data
        4. <tfoot> with Total row (use colspan="2" for the label)
    -->
    
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `body {
    font-family: 'Inter', sans-serif;
    padding: 2rem;
    background: #f4f4f9;
}

/* Boilerplate Table Styling */
table {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    /* FIX: Merges double borders into single sharp lines */
    border-collapse: collapse; 
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

caption {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
}

th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: left;
}

thead {
    background-color: #009879;
    color: white;
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

tfoot {
    background-color: #e9e9e9;
    font-weight: bold;
    color: #333;
}`
                }
            ]
        },
        {
            id: 'html5-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Advanced: Accessibility & Scope',
            duration: '10 min read',
            content: `
# Advanced: Scope & Accessibility

Tables can be confusing for blind users relying on screen readers. Use attributes to guide them.

## The \`scope\` Attribute

The \`scope\` attribute explicitly tells the browser: "This header applies to this column" or "This header applies to this row".

\`\`\`html
<thead>
    <tr>
        <!-- This header controls the column below it -->
        <th scope="col">Date</th>
        <th scope="col">Event</th>
        <th scope="col">Location</th>
    </tr>
</thead>
<tbody>
    <tr>
        <!-- This header controls the row to the right of it -->
        <th scope="row">Jan 1</th>
        <td>New Year</td>
        <td>Times Square</td>
    </tr>
</tbody>
\`\`\`

### Regex & Validation
When validating your code, ensure you place \`scope\` on \`<th>\` tags, not \`<td>\`.

## Responsive Tables?
Tables are rigid. On mobile, they often break layout.
**Modern Solution:** Use CSS to allow horizontal scrolling:

\`\`\`css
.table-wrapper {
    overflow-x: auto;
}
\`\`\`

\`\`\`html
<div class="table-wrapper">
    <table>...</table>
</div>
\`\`\`

This is safer than trying to force tables into flex/grid structures.
            `
        },
        {
            id: 'html5-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Tables Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If you have a row with 3 cells, and you use colspan="2" on the first cell, how many total cell tags should be in your code for that row?',
                    options: ['1', '2', '3', '4'],
                    correctIndex: 1,
                    explanation: 'The first cell counts as 2 slots. You only need 1 more cell tag to fill the 3rd slot. Total tags = 2.'
                },
                {
                    id: 'q2',
                    question: 'Which CSS property removes the space between table cell borders?',
                    options: ['border: none', 'border-spacing: 0', 'border-collapse: collapse', 'display: grid'],
                    correctIndex: 2,
                    explanation: 'border-collapse: collapse; merges adjacent borders into a single clean line.'
                },
                {
                    id: 'q3',
                    question: 'Why should you avoid using tables for webpage layout?',
                    options: [
                        'It is too hard to code',
                        'Browsers do not support it anymore',
                        'It hurts Accessibility (Screen Readers) and SEO',
                        'Tables are only for numbers'
                    ],
                    correctIndex: 2,
                    explanation: 'Tables confuse screen readers when used for layout (linearizing content incorrectly) and are difficult to make responsive.'
                },
                {
                    id: 'q4',
                    question: 'What is the correct scope to use for a vertical list of headers on the left side of a table?',
                    options: ['scope="col"', 'scope="row"', 'scope="vertical"', 'scope="side"'],
                    correctIndex: 1,
                    explanation: 'scope="row" indicates that the header cell applies to the data cells in that same horizontal row.'
                },
                {
                    id: 'q5',
                    question: 'Where would you legally place the <caption> element?',
                    options: [
                        'Immediately after the opening <table> tag',
                        'Inside the <thead>',
                        'After the </table> tag',
                        'Anywhere inside the table'
                    ],
                    correctIndex: 0,
                    explanation: 'The <caption> must be the very first child of the <table> element.'
                }
            ]
        }
    ]
};
