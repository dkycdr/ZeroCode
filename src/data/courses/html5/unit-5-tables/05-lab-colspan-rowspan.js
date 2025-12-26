import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5ColspanRowspan = {
    id: 'html5-u5-lab-5-merge',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Mastering Colspan & Rowspan',
    duration: '30 min',
    content: `
# Lab: Mastering Colspan & Rowspan

## The Scenario

You are building a **Class Schedule Table** for a school. The schedule has:
- Time slots as rows
- Days of the week as columns
- Some classes span multiple periods (like "Physical Education" = 2 hours)
- Some classes span multiple days (like "Art Club" = Mon-Wed)

## Visual Target

\`\`\`text
┌─────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│  Time   │  Monday  │ Tuesday  │Wednesday │ Thursday │  Friday  │
├─────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│ 08:00   │   Math   │ Science  │   Math   │ Science  │   Quiz   │
├─────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│ 09:00   │          │     Physical Education (spans 4 columns)  │
│ 10:00   │          │     Physical Education (continued)        │
├─────────┼──────────┼──────────┴──────────┴──────────┴──────────┤
│ 11:00   │  English │          Art Club (Mon-Wed)     │  Music  │
├─────────┼──────────┼───────────────────────────────────────────┤
│ 12:00   │                    LUNCH BREAK                       │
└─────────┴──────────────────────────────────────────────────────┘
\`\`\`

## Key Concepts

### Colspan: Merge Horizontal
When a cell takes up **2 or more columns**, add \`colspan="N"\` and **delete N-1 cells** from that row.

\`\`\`html
<!-- 3 columns, but "Lunch" spans all 3 -->
<tr>
    <td colspan="3">Lunch Break</td>
    <!-- NO MORE <td>s! We already filled 3 slots -->
</tr>
\`\`\`

### Rowspan: Merge Vertical
When a cell takes up **2 or more rows**, add \`rowspan="N"\` and **delete the corresponding cell** from the next N-1 rows.

\`\`\`html
<!-- Row 1: "PE" spans 2 rows -->
<tr>
    <td>09:00</td>
    <td rowspan="2">Physical Education</td>
</tr>
<!-- Row 2: Do NOT add a second cell! PE already occupies it -->
<tr>
    <td>10:00</td>
    <!-- PE cell from row 1 extends here -->
</tr>
\`\`\`

## The Mission

Build the schedule table with these requirements:
1. Use \`<thead>\` for the header row (Time + Days)
2. Use \`<tbody>\` for the data rows
3. Use \`colspan\` for "Lunch Break" spanning all 6 columns
4. Use \`rowspan\` for "Physical Education" spanning 2 time slots
5. Add proper \`scope\` attributes for accessibility
`,
    tasks: [
        {
            id: 1,
            description: 'Create <table> with <caption> "Weekly Class Schedule"',
            completed: false,
            regex: /<table[^>]*>\s*<caption>\s*Weekly Class Schedule\s*<\/caption>/i,
            hint: {
                concept: 'Table Caption',
                strategy: 'Caption must be the first child of <table>',
                solution: '<table>\\n    <caption>Weekly Class Schedule</caption>'
            }
        },
        {
            id: 2,
            description: 'Create <thead> with header row: Time, Monday, Tuesday, Wednesday, Thursday, Friday (use scope="col")',
            completed: false,
            regex: /<thead>\s*<tr>\s*(<th\s+scope="col"[^>]*>[^<]*<\/th>\s*){6}/i,
            hint: {
                concept: 'Column Headers',
                strategy: 'Use <th scope="col"> for each column header',
                solution: '<th scope="col">Time</th>\\n<th scope="col">Monday</th>...'
            }
        },
        {
            id: 3,
            description: 'Create the "Physical Education" cell with rowspan="2"',
            completed: false,
            regex: /<td\s+[^>]*rowspan\s*=\s*["']2["'][^>]*>\s*Physical Education\s*<\/td>/i,
            hint: {
                concept: 'Rowspan',
                strategy: 'This cell spans 09:00 and 10:00 time slots',
                solution: '<td rowspan="2">Physical Education</td>'
            }
        },
        {
            id: 4,
            description: 'Create the "Lunch Break" cell with colspan="6" (spans Time + 5 weekdays)',
            completed: false,
            regex: /<td\s+[^>]*colspan\s*=\s*["']6["'][^>]*>\s*Lunch Break\s*<\/td>/i,
            hint: {
                concept: 'Colspan',
                strategy: 'This cell spans all 6 columns in the lunch row',
                solution: '<td colspan="6">Lunch Break</td>'
            }
        },
        {
            id: 5,
            description: 'Use <th scope="row"> for the time cells (08:00, 09:00, etc.)',
            completed: false,
            regex: /<th\s+scope\s*=\s*["']row["'][^>]*>\s*\d{2}:\d{2}/i,
            hint: {
                concept: 'Row Headers',
                strategy: 'Time slots are row headers that label the entire row',
                solution: '<th scope="row">08:00</th>'
            }
        },
        {
            id: 6,
            description: 'Ensure no extra cells in rows where rowspan/colspan extends',
            completed: false,
            regex: /<tr>\s*<th\s+scope="row">\s*10:00\s*<\/th>\s*(?!<td[^>]*rowspan)(?:<td>[^<]*<\/td>\s*){4,5}\s*<\/tr>/i,
            hint: {
                concept: 'Cell Count',
                strategy: 'The 10:00 row should have fewer <td> because PE extends from 09:00',
                solution: 'The 10:00 row only needs 4-5 cells (not 6)'
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
    <title>Class Schedule</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🏫 School Schedule Builder</h1>
    
    <!-- 
    ╔══════════════════════════════════════════════════════════════════╗
    ║  TASK: Build the Weekly Schedule Table                          ║
    ║  Requirements:                                                   ║
    ║  1. <caption> with "Weekly Class Schedule"                       ║
    ║  2. <thead> with 6 column headers (Time + 5 weekdays)           ║
    ║  3. <tbody> with time rows                                       ║
    ║  4. "Physical Education" cell with rowspan="2"                   ║
    ║  5. "Lunch Break" cell with colspan="6"                          ║
    ║  6. Use scope="col" for column headers                           ║
    ║  7. Use scope="row" for time cells                               ║
    ╚══════════════════════════════════════════════════════════════════╝
    -->
    
    <table>
        <!-- Task 1: Add caption here -->
        
        
        <!-- Task 2: Create thead with header row -->
        <thead>
            <tr>
                <!-- Add 6 <th scope="col"> elements: Time, Mon, Tue, Wed, Thu, Fri -->
                
            </tr>
        </thead>
        
        <tbody>
            <!-- Row 1: 08:00 - Normal classes -->
            <tr>
                <!-- Task 5: Use <th scope="row"> for time -->
                <td>08:00</td>
                <td>Math</td>
                <td>Science</td>
                <td>Math</td>
                <td>Science</td>
                <td>Quiz Day</td>
            </tr>
            
            <!-- Row 2: 09:00 - PE starts (spans 2 rows) -->
            <tr>
                <td>09:00</td>
                <td>English</td>
                <!-- Task 3: Add Physical Education with rowspan="2" -->
                <td>PE</td>
                <td>History</td>
                <td>Geography</td>
                <td>Music</td>
            </tr>
            
            <!-- Row 3: 10:00 - PE continues (fewer cells needed!) -->
            <tr>
                <td>10:00</td>
                <td>English</td>
                <!-- NOTE: No PE cell here! It extends from row above -->
                <td>History</td>
                <td>Geography</td>
                <td>Music</td>
            </tr>
            
            <!-- Row 4: 11:00 - Normal classes -->
            <tr>
                <td>11:00</td>
                <td>Art</td>
                <td>Music</td>
                <td>Art</td>
                <td>Music</td>
                <td>Free Period</td>
            </tr>
            
            <!-- Row 5: 12:00 - Lunch (spans all columns) -->
            <tr>
                <!-- Task 4: Add Lunch Break with colspan="6" -->
                <td>12:00</td>
                <td>Lunch</td>
                <td>Lunch</td>
                <td>Lunch</td>
                <td>Lunch</td>
                <td>Lunch</td>
            </tr>
        </tbody>
    </table>
    
    <div class="tips">
        <h3>💡 Tips</h3>
        <ul>
            <li><strong>Colspan:</strong> When you add colspan="N", delete N-1 cells from that row</li>
            <li><strong>Rowspan:</strong> When you add rowspan="N", delete the corresponding cell from the next N-1 rows</li>
            <li><strong>Scope:</strong> Helps screen readers understand data relationships</li>
        </ul>
    </div>
</body>
</html>
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `/* Modern Table Styling */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    min-height: 100vh;
    padding: 40px 20px;
    color: #fff;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
}

table {
    width: 100%;
    max-width: 900px;
    margin: 0 auto 30px;
    border-collapse: collapse;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    color: #333;
}

caption {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
}

thead {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

thead th {
    padding: 14px 12px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 1px;
}

tbody th,
tbody td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #eee;
}

/* Row headers (time slots) */
tbody th[scope="row"] {
    background: #f8f9fa;
    font-weight: 600;
    color: #667eea;
}

/* Alternating row colors */
tbody tr:nth-child(even) {
    background: #fafafa;
}

tbody tr:hover {
    background: #e8f4fc;
}

/* Highlight merged cells */
td[colspan],
td[rowspan] {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    font-weight: 600;
    color: #333;
}

/* Tips section */
.tips {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 12px;
}

.tips h3 {
    margin-bottom: 12px;
}

.tips li {
    margin-bottom: 8px;
    list-style-position: inside;
}

/* Responsive */
@media (max-width: 768px) {
    table {
        display: block;
        overflow-x: auto;
    }
    
    h1 {
        font-size: 1.5rem;
    }
}
`
        }
    ]
};
