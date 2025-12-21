import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit16LegacyGrid = {
    id: 'css3-unit-16',
    title: 'Advanced Grid Mastery',
    description: 'Unlock the full power of the Grid spec. Master Grid Areas, Auto-fit/fill, Dense Packing, and the modern Subgrid.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit16-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Implicit Grid & Dense Packing',
            duration: '15 min read',
            content: `
# Deep Dive: The Implicit Grid & Dense Packing

## The "Why"
You define rows/columns for the main content (Explicit Grid).
But what happens if you add 100 extra items?
They land in the **Implicit Grid**.

## Implicit Tracks
By default, implicit tracks have \`auto\` size. You can control them:
\`\`\`css
grid-auto-rows: 200px; /* New rows will be 200px tall */
\`\`\`

## Intense Tetris (Dense)
If you have a grid with gaps because of different sized items, use **Dense Packing**.
\`\`\`css
grid-auto-flow: dense;
\`\`\`
The browser will backfill empty spaces with smaller items that fit later in the DOM order.
            `
        },
        {
            id: 'css-unit16-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Grid Areas (City Planning)',
            duration: '15 min read',
            content: `
# Deep Dive: Grid Areas (City Planning)

## The "Why"
Line numbers (\`grid-column: 1 / 3\`) are hard to read.
**Grid Areas** let you draw your layout with ASCII art.

1.  **Name the Zones**:
    \`\`\`css
    .header { grid-area: head; }
    .sidebar { grid-area: side; }
    \`\`\`
2.  **Draw the Map**:
    \`\`\`css
    .container {
        grid-template-areas:
            "head head"
            "side content";
    }
    \`\`\`
            `
        },
        {
            id: 'css-unit16-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The RAM Pattern',
            duration: '20 min read',
            content: `
# Deep Dive: The RAM Pattern

## The "Why"
**R**epeat, **A**uto, **M**inmax.
This is the holy grail of responsive grids. No media queries needed.

\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
\`\`\`

1.  **minmax(200px, 1fr)**: "I want to be at least 200px, but I'll grow to fill space."
2.  **auto-fit**: "Fit as many of these columns as possible into the row."

Result: A responsive card grid that flows perfectly from Mobile to Desktop.
            `
        },
        {
            id: 'css-unit16-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Subgrid',
            duration: '15 min read',
            content: `
# Deep Dive: Subgrid

## The "Why"
Imagine a Card Grid. Each card has a \`img\`, \`h3\`, and \`p\`.
The \`h3\` in Card A is 1 line. In Card B, it's 3 lines.
Because formatting is isolated inside the card, **the headings don't align**.

**Subgrid** solves this. It lets the grandchildren align to the grandparent's grid.

\`\`\`css
.card {
     grid-template-rows: subgrid; /* Inherit rows from parent */
     grid-row: span 3; /* Take 3 rows: Image, Title, Text */
}
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit16-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Magazine Layout (Areas)',
            duration: '30 min',
            content: `
## The Mission
Build a responsive Magazine Layout using **Grid Areas**.
On Mobile, it stacks. On Desktop, it's a 3-column layout.

**Task:**
1.  Name the zones (\`head\`, \`main\`, \`side\`, \`foot\`).
2.  Define the Mobile Map (Vertical).
3.  Define the Desktop Map (Complex).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Assign grid-area: head to .header.',
                    completed: false,
                    regex: /\.header\s*\{[\s\S]*?grid-area\s*:\s*head\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Assign grid-area: side to .sidebar.',
                    completed: false,
                    regex: /\.sidebar\s*\{[\s\S]*?grid-area\s*:\s*side\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Set default (mobile) template areas to "head" "main" "side" "foot".',
                    completed: false,
                    regex: /\.layout\s*\{[\s\S]*?grid-template-areas\s*:\s*['"]head['"]\s*['"]main['"]\s*['"]side['"]\s*['"]foot['"]\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Inside @media (min-width: 800px), set typical desktop map "head head" "side main".',
                    completed: false,
                    regex: /@media\s*\(\s*min-width\s*:\s*800px\s*\)\s*\{[\s\S]*?\.layout\s*\{[\s\S]*?grid-template-areas\s*:\s*['"]head\s*head['"]\s*['"]side\s*main['"]\s*['"]foot\s*foot['"]\s*;?[\s\S]*?\}[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.layout {
    display: grid;
    gap: 10px;
    height: 100vh;
    /* TODO: Mobile Map */
    
}

.header { /* TODO */ }
.sidebar { /* TODO */ }
.main { grid-area: main; }
.footer { grid-area: foot; }

/* Desktop Map */
@media (min-width: 800px) {
    .layout {
        
    }
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="layout">
    <div class="header">Header</div>
    <div class="sidebar">Ads</div>
    <div class="main">Article</div>
    <div class="footer">Footer</div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit16-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Masonry Gallery (Dense)',
            duration: '25 min',
            content: `
## The Mission
You have a photo gallery. Some photos are Landscape (Wide), others Portrait (Tall).
This leaves ugly gaps. Use **Dense Packing** to fill them.

**Task:**
1.  Set up the grid with \`auto-fill\`.
2.  Enable \`grid-auto-flow: dense\`.
3.  Make landscape items span 2 columns.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set grid-template-columns to repeat(auto-fill, minmax(150px, 1fr)).',
                    completed: false,
                    regex: /\.gallery\s*\{[\s\S]*?grid-template-columns\s*:\s*repeat\(auto-fill,\s*minmax\(150px,\s*1fr\)\)\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Enable grid-auto-flow: dense.',
                    completed: false,
                    regex: /\.gallery\s*\{[\s\S]*?grid-auto-flow\s*:\s*dense\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Set grid-auto-rows to 150px (implicit height).',
                    completed: false,
                    regex: /\.gallery\s*\{[\s\S]*?grid-auto-rows\s*:\s*150px\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Make .wide items span 2 columns.',
                    completed: false,
                    regex: /\.wide\s*\{[\s\S]*?grid-column\s*:\s*span\s+2\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.gallery {
    display: grid;
    gap: 10px;
    /* TODO: Set Dense Flow */

}

.wide {
    background: #f0f;
    /* TODO: Span 2 cols */
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="gallery">
    <div class="item">1</div>
    <div class="item wide">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit16-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: RAM Pattern (Responsive Cards)',
            duration: '20 min',
            content: `
## The Mission
Create a card layout that "Just Works" on every screen size without a single \`@media\` query.
Use the **RAM** pattern.

**Task:**
Use \`repeat(auto-fit, minmax(250px, 1fr))\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set display: grid and gap 20px.',
                    completed: false,
                    regex: /\.cards\s*\{[\s\S]*?display\s*:\s*grid\s*;?[\s\S]*?gap\s*:\s*20px\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Implement the RAM pattern: repeat(auto-fit, minmax(250px, 1fr)).',
                    completed: false,
                    regex: /\.cards\s*\{[\s\S]*?grid-template-columns\s*:\s*repeat\(auto-fit,\s*minmax\(250px,\s*1fr\)\)\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Set min-height for cards to 200px.',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?min-height\s*:\s*200px\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.cards {
    /* TODO: RAM Pattern */

}

.card {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    /* TODO: Size */
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="cards">
    <div class="card">A</div>
    <div class="card">B</div>
    <div class="card">C</div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit16-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Subgrid Alignment',
            duration: '30 min',
            content: `
## The Mission
You have 3 cards. Card B has a very long title.
Normally, Card A's title would look disconnected because it's shorter.
Use **Subgrid** so *all titles share the same row height*, aligning perfectly.

**Task:**
1.  Set the parent grid to have auto-rows.
2.  Set the child (.card) to span 3 rows.
3.  Set the child's \`grid-template-rows\` to \`subgrid\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Parent: Set grid-auto-rows to auto auto 1fr (Title, Subtitle, Body).',
                    completed: false,
                    regex: /\.grid\s*\{[\s\S]*?grid-auto-rows\s*:\s*auto\s+auto\s+1fr\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Card: Set grid-row to span 3.',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?grid-row\s*:\s*span\s+3\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Card: Activate Subgrid on rows.',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?grid-template-rows\s*:\s*subgrid\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Card: Set display: grid (Subgrid requires the element to be a grid container too).',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?display\s*:\s*grid\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* TODO: Row definitions for children to inherit */
    
}

.card {
    background: #eee;
    /* TODO: Connect to parent rows */
    
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="grid">
    <div class="card">
        <h3>Short</h3>
        <p>Content</p>
    </div>
    <div class="card">
        <h3>Very Long Title That Wraps</h3>
        <p>Content</p>
    </div>
</div>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit16-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Grid Mastery',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does `grid-auto-flow: dense` do?',
                    options: [
                        'Compresses images',
                        'Forces the browser to backfill empty gaps with smaller items that appear later in the DOM',
                        'Makes the grid denser by removing padding',
                        'Nothing'
                    ],
                    correctIndex: 1,
                    explanation: 'It breaks the DOM order slightly to optimize visual packing, creating a "Masonry-lite" effect.'
                },
                {
                    id: 'q2',
                    question: 'What is `subgrid`?',
                    options: [
                        'A grid inside a grid',
                        'A keyword that allows a child to inherit the specific track sizing of its parent',
                        'A deprecated feature',
                        'A way to make grids smaller'
                    ],
                    correctIndex: 1,
                    explanation: 'Subgrid allows grandchildren to align with each other by sharing the grandparent\'s tracks.'
                },
                {
                    id: 'q3',
                    question: 'In the RAM pattern (Repeat, Auto, Minmax), what does `1fr` ensure?',
                    options: [
                        'That columns are exactly 1px',
                        'That columns expand to share any remaining space equally',
                        'That columns are 100% wide',
                        'That columns are flexible'
                    ],
                    correctIndex: 1,
                    explanation: 'minmax(200px, 1fr) means "At least 200px, but if there is space, take it all".'
                },
                {
                    id: 'q4',
                    question: 'Which property names a grid zone?',
                    options: [
                        'grid-name',
                        'grid-area',
                        'area-name',
                        'zone'
                    ],
                    correctIndex: 1,
                    explanation: 'grid-area: header assigns the name "header" to that element, which can then be referenced in the template.'
                },
                {
                    id: 'q5',
                    question: 'What is the "Implicit Grid"?',
                    options: [
                        'A hidden grid',
                        'Tracks that are automatically created by the browser to hold items outside the explicit rows/columns',
                        'A bug',
                        'The grid inside an iframe'
                    ],
                    correctIndex: 1,
                    explanation: 'If you defined 2 rows but have 10 items, the browser implicitly creates 4 more rows to hold them.'
                }
            ]
        }
    ]
};
