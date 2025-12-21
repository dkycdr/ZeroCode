import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit12ContainerQueries = {
    id: 'css3-unit-12',
    title: 'Component Response: Container Queries',
    description: 'Move beyond the Viewport. Build components that adapt to their parent container, making them truly portable.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit12-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Media Query Problem',
            duration: '15 min read',
            content: `
# Deep Dive: The Media Query Problem

## The "Why"
Traditional \`@media (min-width)\` looks at the **Browser Window**.
But what if you put a "Wide Card" component into a narrow "Sidebar"?

The Media Query thinks the screen is huge (Desktop), so it renders the Card in "Wide Mode". But the Sidebar is tiny (300px).
**Result**: The card breaks inside the sidebar.

---

## The Solution: Container Queries
\`@container\` allows an element to ask: *"How big is my direct parent?"*

This decouples the component from the page layout. A card can look like a "mobile card" when trapped in a sidebar, even on a 4k monitor.
            `
        },
        {
            id: 'css-unit12-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Defining The Context',
            duration: '15 min read',
            content: `
# Deep Dive: Defining The Context

## Syntax

You must mark a parent element as a "Container" before children can query it.

\`\`\`css
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}
\`\`\`

*   **inline-size**: Calculate width (safest, most common).
*   **size**: Calculate width AND height (careful, this breaks intrinsic sizing and can cause 0px height bugs).

            `
        },
        {
            id: 'css-unit12-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The @container Rule',
            duration: '20 min read',
            content: `
# Deep Dive: The @container Rule

## Syntax

It looks just like a media query.

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: flex; /* Switch to Row layout if container > 400px */
  }
}
\`\`\`

If this card is in the main content area (800px), it uses Flex Row.
If this card is in the sidebar (300px), it stays Stacked.
**One Component code. Multiple layouts.**

            `
        },
        {
            id: 'css-unit12-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: CQ Units (cqw)',
            duration: '15 min read',
            content: `
# Deep Dive: CQ Units (cqw)

## The "Why"
We know \`vw\` (Viewport Width). But \`vw\` is dangerous inside small widgets.
Enter \`cqw\` (Container Query Width).

\`\`\`css
h1 {
  font-size: 10cqw; /* 10% of the CONTAINER width */
}
\`\`\`

This creates fluid typography that scales perfectly inside *any* box.

            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit12-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Adapting Card',
            duration: '25 min',
            content: `
## The Mission
You have a Product Card.
It sits in two places:
1.  Main Grid (Wide).
2.  Sidebar (Narrow).

**Task:**
1.  Make \`.wrapper\` a container.
2.  Use \`@container\` to make the card switch to Flex Row only when it has > 400px of space.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set container-type: inline-size on .wrapper.',
                    completed: false,
                    regex: /\.wrapper\s*\{[\s\S]*?container-type\s*:\s*inline-size\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set default card layout to flex-direction: column (Phone Mode).',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?flex-direction\s*:\s*column\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Create a query: @container (min-width: 400px).',
                    completed: false,
                    regex: /@container\s*\(\s*min-width\s*:\s*400px\s*\)\s*\{[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Inside query, switch .card to flex-direction: row.',
                    completed: false,
                    regex: /@container\s*\(\s*min-width\s*:\s*400px\s*\)\s*\{[\s\S]*?\.card\s*\{[\s\S]*?flex-direction\s*:\s*row\s*;?[\s\S]*?\}[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.wrapper {
    /* TODO: Define container context */
    
}

.card {
    display: flex;
    /* TODO: Default Stack */
    gap: 10px;
}

/* TODO: Query the container */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="wrapper">
    <div class="card">
        <img src="img.jpg">
        <p>Product Name</p>
    </div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit12-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Fluid Container Typography',
            duration: '20 min',
            content: `
## The Mission
We want a Headline that always fits one line, regardless of container width.
If we use \`px\`, it wraps. If we use \`vw\`, it ignores the sidebar width.

**Task:**
Use \`cqw\` units. Set font-size to \`5cqw\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set container-type: inline-size on .banner.',
                    completed: false,
                    regex: /\.banner\s*\{[\s\S]*?container-type\s*:\s*inline-size\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set font-size to 15cqw on the .headline.',
                    completed: false,
                    regex: /\.headline\s*\{[\s\S]*?font-size\s*:\s*15cqw\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Add a fallback pixel value (font-size: 20px) before the cqw line.',
                    completed: false,
                    regex: /\.headline\s*\{(?=[\s\S]*?font-size\s*:\s*20px)(?=[\s\S]*?font-size\s*:\s*15cqw)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.banner {
    /* TODO: Set Context */
}

.headline {
    /* TODO: Scale relative to banner width */
    /* Remember fallback! */
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="banner">
    <h1 class="headline">RESPONSIVE</h1>
</div>`
                }
            ]
        },
        {
            id: 'css-unit12-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Named Containers',
            duration: '20 min',
            content: `
## The Mission
Sometimes you have nested containers.
You want the grandchild to query the *Grandparent*, not the Parent.
To do this, you must **Name** the container.

**Task:**
1.  Name the grandparent \`dashboard\`.
2.  Query \`dashboard\` specifically.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'On .main-layout, set container-name: dashboard.',
                    completed: false,
                    regex: /\.main-layout\s*\{[\s\S]*?container-name\s*:\s*dashboard\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set container-type: inline-size on .main-layout as well.',
                    completed: false,
                    regex: /\.main-layout\s*\{[\s\S]*?container-type\s*:\s*inline-size\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Query the dashboard specifically: @container dashboard (min-width: 800px).',
                    completed: false,
                    regex: /@container\s+dashboard\s*\(\s*min-width\s*:\s*800px\s*\)\s*\{[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.main-layout {
    /* TODO: Name it */

}

.widget {
    /* TODO: Query the specific container */
    
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="main-layout">
    <div class="sidebar">
        <div class="widget">I react to Main Layout, not Sidebar</div>
    </div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit12-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Dynamic Grid',
            duration: '25 min',
            content: `
## The Mission
You want a Grid that changes its column count based on available space.
But using Media Queries is rigid.
If the grid is inside a small modal, it should be 1 column. If fully expanded, 3 columns.

**Task:**
Use \`@container\` to adjust \`grid-template-columns\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Default (small): Set grid-template-columns to 1fr.',
                    completed: false,
                    regex: /\.grid\s*\{[\s\S]*?grid-template-columns\s*:\s*1fr\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'If container > 300px, set columns to repeat(2, 1fr).',
                    completed: false,
                    regex: /@container\s*\(\s*min-width\s*:\s*300px\s*\)\s*\{[\s\S]*?\.grid\s*\{[\s\S]*?grid-template-columns\s*:\s*repeat\(2,\s*1fr\)\s*;?[\s\S]*?\}[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'If container > 500px, set columns to repeat(3, 1fr).',
                    completed: false,
                    regex: /@container\s*\(\s*min-width\s*:\s*500px\s*\)\s*\{[\s\S]*?\.grid\s*\{[\s\S]*?grid-template-columns\s*:\s*repeat\(3,\s*1fr\)\s*;?[\s\S]*?\}[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.wrapper { container-type: inline-size; }

.grid {
    display: grid;
    /* TODO: Default 1 col */
    gap: 10px;
}

/* TODO: Expand to 2 cols */

/* TODO: Expand to 3 cols */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="wrapper">
    <div class="grid">
        <div>1</div><div>2</div><div>3</div>
    </div>
</div>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit12-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Container Logic',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the main advantage of Container Queries over Media Queries?',
                    options: [
                        'They are faster',
                        'They allow components to respond to their parent context, not just the whole viewport',
                        'They replace Flexbox',
                        'They work in IE11'
                    ],
                    correctIndex: 1,
                    explanation: 'This enables true "Write Once, Run Anywhere" components that look correct whether in a sidebar or main content.'
                },
                {
                    id: 'q2',
                    question: 'Which property creates a containment context?',
                    options: [
                        'display: container',
                        'container-type: inline-size',
                        'position: relative',
                        'contain: strict'
                    ],
                    correctIndex: 1,
                    explanation: 'container-type: inline-size is the standard way to activate width-based queries.'
                },
                {
                    id: 'q3',
                    question: 'What unit represents 1% of the container width?',
                    options: [
                        'vw',
                        'cw',
                        'cqw',
                        '%'
                    ],
                    correctIndex: 2,
                    explanation: 'cqw (Container Query Width) is the logical equivalent of vw.'
                },
                {
                    id: 'q4',
                    question: 'Why avoid `container-type: size` (both dimensions)?',
                    options: [
                        'It is not supported',
                        'It causes layout bugs because most block elements rely on their children for height (Intrinsic sizing)',
                        'It is too slow',
                        'It forces the element to be square'
                    ],
                    correctIndex: 1,
                    explanation: 'If you constrain height, the container cannot grow to fit its text. This often leads to overflow or 0px height issues.'
                },
                {
                    id: 'q5',
                    question: 'Can you name a container?',
                    options: [
                        'No, they are anonymous',
                        'Yes, using container-name',
                        'Yes, using id',
                        'Yes, using class'
                    ],
                    correctIndex: 1,
                    explanation: 'container-name allows nested children to target specific ancestors (e.g., skip the immediate parent and query the "card-wrapper").'
                }
            ]
        }
    ]
};
