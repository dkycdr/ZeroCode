import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Grid = {
    id: 'css3-unit-3',
    title: 'CSS Grid: The 2D Revolution',
    description: 'Abandon the "Row-only" mindset. Master the most powerful layout system ever created for the web, controlling both Rows and Columns simultaneously.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit3-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The 2D Revolution',
            duration: '15 min read',
            content: `
# Deep Dive: The 2D Revolution

## The "Why"

For 25 years, CSS layouts were **Content-Driven** (Content Out). You put things in, and they stacked.

Flexbox improved this, but it is still **1-Dimensional** (Row OR Column).

**CSS Grid** is **Layout-First** (Layout In). You define the structure (the white space) *before* you put any content in it.

---

## The Mental Model: Content-Out vs Layout-In

*   **Flexbox**: "I have these items. Arrange them in a line."
*   **Grid**: "I have this empty page. Draw a 12-column mesh on it. Now place items into that mesh."

**ASCII Visualization: The Grid Mesh**

\`\`\`text
   |   Col 1   |   Col 2   |   Col 3   |
-----------------------------------------
 R |           |           |           |
 o |   Cell    |   Cell    |   Cell    |
 w |    1,1    |    1,2    |    1,3    |
 1 |           |           |           |
-----------------------------------------
 R |           |           |           |
 o |   Cell    |   Cell    |   Cell    |
 w |    2,1    |    2,2    |    2,3    |
 2 |           |           |           |
-----------------------------------------
\`\`\`

---

## Machine Logic: Bi-Directional Flow

In Flexbox, items flow in one direction until they hit a wall. In Grid, items are coordinate-based.

You can explicitly tell an item: "Go to Row 2, Column 3". The browser engine calculates intersection points rather than flow direction.

---

## Summary

Use **Flexbox** for components (Navigation, Buttons, Lists). Use **Grid** for the main page skeleton (Header, Sidebar, Main, Footer).
            `
        },
        {
            id: 'css-unit3-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The fr Unit & Track Sizing',
            duration: '20 min read',
            content: `
# Deep Dive: The fr Unit & Track Sizing

## The "Why"

Calculated percentages (e.g., \`width: 33.333%\`) are fragile. They break when you add margins (gaps).

CSS Grid introduced a game-changing unit: **fr** (Fractional Unit). It represents a fraction of the **Available Space**, *after* fixed items are calculated.

---

## The Math of fr

If you write \`grid-template-columns: 1fr 2fr\`:

1.  **Total Fractions**: 1 + 2 = 3 parts.
2.  **Container Width**: 900px.
3.  **Calculation**:
    *   1fr = 1/3 of 900px = 300px.
    *   2fr = 2/3 of 900px = 600px.

---

## The Gap Magic

Here is the killer feature: **fr units automatically account for gaps**.

If you have: \`gap: 20px\` and \`1fr 1fr 1fr\`:

1.  Browser: "Container is 900px".
2.  Browser: "I need 2 gaps of 20px (Total 40px)".
3.  **Available Space**: 900px - 40px = 860px.
4.  **1fr**: 860px / 3 = 286.66px.

You never have to do math again.

---

## Summary

Stop using \`%\` for grid columns. Use \`fr\`. It is chemically engineered to handle spacing perfectly.
            `
        },
        {
            id: 'css-unit3-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Grid Lines & Placement',
            duration: '20 min read',
            content: `
# Deep Dive: Grid Lines & Placement

## The "Why"

We don't place items into "Columns". We place them between **Lines**.

If you have 3 Columns, you actually have **4 Grid Lines**.

---

## The Numbering System (1-Based)

Grid placements use line numbers to define start and end points.

**ASCII Visualization: The Invisible Lines**

\`\`\`text
 Line 1      Line 2      Line 3      Line 4
   |   Col 1   |   Col 2   |   Col 3   |
   |           |           |           |
\`\`\`

Syntax: \`grid-column: 1 / 3\`
*   **Start**: Line 1.
*   **End**: Line 3.
*   **Result**: Spans across Column 1 AND Column 2.

---

## Machine Logic: Negative Indexing

A superpower of Grid is counting backwards.

*   Line \`1\` is the start edge.
*   Line \`-1\` is **always** the end edge.

To span the full width of *any* grid, regardless of column count:
\`grid-column: 1 / -1;\`

---

## Summary

You are drawing coordinates. Defines edges, not sizes.
            `
        },
        {
            id: 'css-unit3-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Grid Areas (The Blueprint)',
            duration: '20 min read',
            content: `
# Deep Dive: Grid Areas (The Blueprint)

## The "Why"

Numbering lines (1 / 5 / 2 / 6) is confusing and hard to read.

**Grid Template Areas** allows you to name sections of your layout and "paint" the grid using text strings. It is basically ASCII art that compiles to CSS.

---

## The Logic

Step 1: Name the children.
\`.header { grid-area: hd; }\`
\`.sidebar { grid-area: sd; }\`
\`.main    { grid-area: mn; }\`

Step 2: Draw the map on the parent.
\`\`\`css
grid-template-areas:
    "hd hd hd"
    "sd mn mn"
    "sd mn mn";
\`\`\`

---

## Browser Internals

The browser parses this string matrix.
*   It sees "hd" spans 3 columns in the first row.
*   It sees "sd" spans 2 rows in the first column.
*   It automatically generates the line numbers for you.

---

## Summary

This is the most readable way to write CSS Layouts in history. If you look at the code 6 months later, you instantly visualize the website structure.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Defining the Grid Structure',
            duration: '20 min',
            content: `
## The Concept

We will start by building a classic "Instagram-style" Photo Gallery.

We want 3 equal columns that automatically resize, separated by clean white gutters (gaps).

---

## The Mission

1.  Enable Grid on the container.
2.  Define 3 columns using fractions (\`1fr\`).
3.  Add a \`20px\` gap between all photos.

---

## Machine Logic

*   **Display Grid**: Switches the context to 2D.
*   **Template Columns**: \`1fr 1fr 1fr\` tells the browser to split available space into 3 equal chunks.
*   **Gap**: Applies spacing to both rows and columns simultaneously.

---

## Senior Warnings

> **Explicit vs Implicit**: We are defining columns Explicitly. We are NOT defining rows. The browser will automatically create "Implicit Rows" as we add more content. This is good default behavior.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Grid Activation: Target .gallery. Display as grid.',
                    completed: false,
                    regex: /\.gallery\s*\{(?=[\s\S]*?display\s*:\s*grid)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'The Triad: Set grid-template-columns to "1fr 1fr 1fr".',
                    completed: false,
                    regex: /\.gallery\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*1fr 1fr 1fr)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Gutters: Set gap to "20px".',
                    completed: false,
                    regex: /\.gallery\s*\{(?=[\s\S]*?gap\s*:\s*20px)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="gallery">
    <div class="photo">Img 1</div>
    <div class="photo">Img 2</div>
    <div class="photo">Img 3</div>
    <div class="photo">Img 4</div>
    <div class="photo">Img 5</div>
    <div class="photo">Img 6</div>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Build the Photo Grid */

.photo { background: #ddd; height: 100px; }

/* 1. Target .gallery */
/* Grid, 3 columns (fr), 20px gap */


`
                }
            ]
        },
        {
            id: 'css-unit3-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Power of repeat()',
            duration: '15 min',
            content: `
## The Concept

Writing \`1fr 1fr 1fr 1fr 1fr 1fr\` is tedious and error-prone.

CSS Grid provides a function \`repeat(count, size)\` to automate pattern creation.

---

## The Mission

Refactor a 12-column Grid System (like Bootstrap) using native CSS Grid.

1.  Create 12 columns.
2.  Each column should be \`1fr\`.

---

## Machine Logic

*   **Syntax**: \`repeat(12, 1fr)\`.
*   **Expansion**: The CSS Parser expands this to \`1fr 1fr ... (12 times)\` at runtime.
*   **Pattern**: You can also do patterns like \`repeat(4, 100px 1fr)\` which creates "Fixed, Fluid, Fixed, Fluid...".

---

## Senior Warnings

> **DevTools**: When debugging Grid, always check the "Grid" badge in Chrome DevTools to visualize your tracks. You cannot see tracks with the naked eye if they are empty.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'System Setup: Target .grid-system. Display grid.',
                    completed: false,
                    regex: /\.grid-system\s*\{(?=[\s\S]*?display\s*:\s*grid)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'The 12 Columns: Use repeat() to create 12 1fr columns.',
                    completed: false,
                    regex: /\.grid-system\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(\s*12\s*,\s*1fr\s*\))[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="grid-system">
    <div class="span-1">1</div>
    <div class="span-1">2</div>
    <div class="span-1">3</div>
    <!-- ...imagine 12 of these -->
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Create the 12-Col System */

/* 1. Target .grid-system */
/* repeat(12, 1fr) */


`
                }
            ]
        },
        {
            id: 'css-unit3-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Spanning & Sizing',
            duration: '25 min',
            content: `
## The Concept

Grids don't have to be boring checkers. We can make items **Span** multiple tracks to create "Hero" items or wide banners.

This breaks the rigid cell structure.

---

## The Mission

Create a "Bento Box" style layout.

1.  Create a 4-column grid.
2.  Make the first item (The Hero) span **2 columns** width and **2 rows** height.
3.  Observe how the other items flow around it into the empty slots (Dense Packing).

---

## Machine Logic

*   **Span Syntax**: \`grid-column: span 2\`. This means "Start where you are, and take up 2 tracks".
*   **Flow**: The Grid Auto-Placement algorithm fills the first available slot that fits the item.

---

## Senior Warnings

> **Shorthand**: \`grid-column: 1 / 3\` is explicit (Line 1 to 3). \`grid-column: span 2\` is relative (Current + 2). Spanning is usually more reusable for components.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Grid Base: Target .bento. Create repeat(4, 1fr) columns and auto rows (100px).',
                    completed: false,
                    regex: /\.bento\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(\s*4\s*,\s*1fr\s*\))(?=[\s\S]*?grid-auto-rows\s*:\s*100px)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Hero Item: Target .hero-item. Span 2 cols and 2 rows.',
                    completed: false,
                    regex: /\.hero-item\s*\{(?=[\s\S]*?grid-column\s*:\s*span 2)(?=[\s\S]*?grid-row\s*:\s*span 2)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="bento">
    <div class="hero-item">HERO</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Create the Bento Layout */

.bento { display: grid; gap: 10px; }
.item { background: #ccc; }
.hero-item { background: #ff4757; color: white; }

/* 1. Modify .bento (repeat 4 cols, auto-rows 100px) */


/* 2. Target .hero-item (span 2 cols, span 2 rows) */


`
                }
            ]
        },
        {
            id: 'css-unit3-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Holy Grail Layout (Grid Areas)',
            duration: '30 min',
            content: `
## The Concept

The "Holy Grail" is the ultimate test: Header, Sidebar, Main Content, and Footer.

We will use **Grid Template Areas** to "draw" this layout in CSS string format. This is the cleanest way to architect whole-page layouts.

---

## The Mission

1.  Define the 3 named areas on children: \`header\`, \`sidebar\`, \`main\`.
2.  Construct the grid on the parent to place them.
3.  Layout: Header on top (full width), Sidebar left, Main right.

---

## Machine Logic

*   **Parsing**: The browser aligns the \`grid-area\` names with the strings provided in \`grid-template-areas\`.
*   **Whitespace**: You can use \`.\` (dot) in the string to designate an empty cell!

---

## Senior Warnings

> **Typos**: The string matrix must be perfect. If you have 3 columns defined, every string in \`grid-template-areas\` MUST have 3 tokens. If one row has 2 tokens, the entire grid declaration is invalid and is discarded.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Naming: Target .header. Set grid-area to "hd".',
                    completed: false,
                    regex: /\.header\s*\{(?=[\s\S]*?grid-area\s*:\s*hd)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Naming: Target .sidebar (sd) and .main (mn).',
                    completed: false,
                    regex: /\.sidebar\s*\{(?=[\s\S]*?grid-area\s*:\s*sd)[\s\S]*?\}\s*\.main\s*\{(?=[\s\S]*?grid-area\s*:\s*mn)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'The Blueprint: Target .page. Define columns "200px 1fr" and the template areas string.',
                    completed: false,
                    regex: /\.page\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*200px 1fr)(?=[\s\S]*?grid-template-areas\s*:\s*"hd hd"\s*"sd mn")[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="page">
    <header class="header">Header</header>
    <aside class="sidebar">Sidebar</aside>
    <main class="main">Main Content</main>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Draw the Holy Grail */

.page { display: grid; height: 100vh; }
.header { background: #333; color: white; }
.sidebar { background: #eee; }
.main { background: white; }

/* 1. Assign grid-areas (hd, sd, mn) */


/* 2. Configure .page */
/* Columns: Hard 200px, then Fluid 1fr */
/* Areas: */
/* "hd hd" */
/* "sd mn" */


`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Grid Architecture',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If you have a grid with 4 Columns, how many Vertical Grid Lines do you have?',
                    options: [
                        '3',
                        '4',
                        '5',
                        '2'
                    ],
                    correctIndex: 2,
                    explanation: 'The number of lines is always Tracks + 1. For 4 columns, we have lines 1, 2, 3, 4, and 5 (the end edge).'
                },
                {
                    id: 'q2',
                    question: 'What does "1fr" fundamentally represent?',
                    options: [
                        '100 pixels',
                        '10% of the container',
                        'One fraction of the calculated FREE Space (Available Space)',
                        'One fraction of the content width'
                    ],
                    correctIndex: 2,
                    explanation: 'The fr unit distributes the space that is LEFT OVER after fixed items and gaps are subtracted from the container.'
                },
                {
                    id: 'q3',
                    question: 'Which is the "End Edge" Line Number of any grid, regardless of size?',
                    options: [
                        '100',
                        '-1',
                        '0',
                        'last'
                    ],
                    correctIndex: 1,
                    explanation: 'Grid supports negative indexing. -1 is always the last grid line, -2 is the second to last, etc.'
                },
                {
                    id: 'q4',
                    question: 'What happens if your "grid-template-areas" string does not match the number of defined columns?',
                    options: [
                        'The browser guesses',
                        'It creates empty cells automatically',
                        'The entire grid declaration is invalidated and ignored',
                        'It defaults to Flexbox'
                    ],
                    correctIndex: 2,
                    explanation: 'Grid Areas are strict. If your matrix is not a perfect rectangle (e.g. Row 1 has 3 tokens, Row 2 has 2 tokens), the syntax is invalid.'
                },
                {
                    id: 'q5',
                    question: 'When should you use Grid over Flexbox?',
                    options: [
                        'Always',
                        'For 1-Dimensional content (lines of buttons)',
                        'For 2-Dimensional page skeletons (Header/Side/Main)',
                        'Never, Grid is too slow'
                    ],
                    correctIndex: 2,
                    explanation: 'Grid is designed for 2D layouts where items need to align on both the X and Y axis simultaneously. Flexbox is better for content strips.'
                }
            ]
        }
    ]
};
