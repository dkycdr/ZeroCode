import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labSemanticData = {
    id: 'html5-u5-lab-1-tables',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Creating a Semantic Data Table',
    duration: '25 min',
    content: `
# Lab: Creating a Semantic Data Table

## The Assignment
Build a financial report table step-by-step using proper semantic table elements.

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
|  Total Costs           | $1150| <-- Tfoot (colspan!)
+------------------------------+
\`\`\`

`,
    tasks: [
        {
            id: 1,
            description: 'Create <table> with <caption>Monthly Expenses</caption>',
            completed: false,
            regex: /<table[^>]*>[\s\S]*?<caption>\s*Monthly Expenses\s*<\/caption>/i,
            hint: {
                concept: 'Table Caption',
                strategy: '<caption> provides a title for the table.',
                solution: '<table>\n    <caption>Monthly Expenses</caption>\n</table>'
            }
        },
        {
            id: 2,
            description: 'Add <thead> with one row of 3 headers: Item, Category, Cost',
            completed: false,
            regex: /<thead>[\s\S]*?<tr>[\s\S]*?<th>\s*Item\s*<\/th>[\s\S]*?<th>\s*Category\s*<\/th>[\s\S]*?<th>\s*Cost\s*<\/th>[\s\S]*?<\/tr>[\s\S]*?<\/thead>/i,
            hint: {
                concept: 'Table Header',
                strategy: '<thead> contains <tr> with <th> header cells.',
                solution: '<thead>\n    <tr>\n        <th>Item</th>\n        <th>Category</th>\n        <th>Cost</th>\n    </tr>\n</thead>'
            }
        },
        {
            id: 3,
            description: 'Add <tbody> with first row: Rent, Housing, $800',
            completed: false,
            regex: /<tbody>[\s\S]*?<tr>[\s\S]*?<td>\s*Rent\s*<\/td>[\s\S]*?<td>\s*Housing\s*<\/td>[\s\S]*?<td>\s*\$800\s*<\/td>[\s\S]*?<\/tr>/i,
            hint: {
                concept: 'Table Body',
                strategy: '<tbody> contains data rows with <td> cells.',
                solution: '<tbody>\n    <tr>\n        <td>Rent</td>\n        <td>Housing</td>\n        <td>$800</td>\n    </tr>\n</tbody>'
            }
        },
        {
            id: 4,
            description: 'Add two more rows: Food/Living/$300 and Internet/Utility/$50',
            completed: false,
            regex: /<tbody>[\s\S]*?<td>\s*Food\s*<\/td>[\s\S]*?<td>\s*Internet\s*<\/td>[\s\S]*?<\/tbody>/i,
            hint: {
                concept: 'Multiple Data Rows',
                strategy: 'Each data row is a <tr> inside <tbody>.',
                solution: '<tr><td>Food</td><td>Living</td><td>$300</td></tr>\n<tr><td>Internet</td><td>Utility</td><td>$50</td></tr>'
            }
        },
        {
            id: 5,
            description: 'Add <tfoot> with Total Costs spanning 2 columns (colspan="2")',
            completed: false,
            regex: /<tfoot>[\s\S]*?<tr>[\s\S]*?<t[hd]\s+colspan=["']2["']>\s*Total Costs\s*<\/t[hd]>[\s\S]*?<t[hd]>\s*\$1150\s*<\/t[hd]>[\s\S]*?<\/tr>[\s\S]*?<\/tfoot>/i,
            hint: {
                concept: 'Column Spanning',
                strategy: 'colspan="2" makes one cell span 2 columns.',
                solution: '<tfoot>\\n    <tr>\\n        <td colspan="2">Total Costs</td>\\n        <td>$1150</td>\\n    </tr>\\n</tfoot>'
            }
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
    <!-- ============================================
        BUILD THE EXPENSE TABLE
        1. <table> with <caption>Monthly Expenses</caption>
        2. <thead> with one row of 3 headers
        3. <tbody> with 3 rows of data
        4. <tfoot> with Total row (use colspan="2")
    ============================================ -->
    
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    font-family: -apple-system, sans-serif;
    padding: 2rem;
    background: #f4f4f9;
}

table {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border-collapse: collapse; 
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 8px;
    overflow: hidden;
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
};
