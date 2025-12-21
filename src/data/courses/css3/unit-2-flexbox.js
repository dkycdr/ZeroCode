import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Flexbox = {
    id: 'css3-unit-2',
    title: 'Flexbox: Non-Linear Layout Engine',
    description: 'Master the 1D layout engine. Control axis, alignment, and space distribution to build responsive interfaces without rigid math.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit2-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Flex Formatting Context',
            duration: '15 min read',
            content: `
# Deep Dive: The Flex Formatting Context

## The "Why"

Before Flexbox (2009), we used floats and tables for layout. It was a hack.

Flexbox introduced the **Flex Formatting Context (FFC)**. The moment you write \`display: flex\`, you transform the element into a "Direction-Agnostic" container. It no longer thinks in "Block/Inline" rules; it thinks in **Axes**.

---

## The Mental Model: Two Axes

You must abandon "Left/Right" and "Top/Bottom". In Flexbox, we only have:

1.  **Main Axis**: The direction the content flows (Default: Horizontal ➡️).
2.  **Cross Axis**: The perpendicular direction (Default: Vertical ⬇️).

**ASCII Visualization: The Default Axes (Row)**

\`\`\`text
       [ Cross Axis: align-items ]
                 |
                 v
   -----------------------------------
   |  [Item 1] -> [Item 2] -> [Item 3]   --> Main Axis: justify-content
   -----------------------------------
\`\`\`

---

## Machine Logic: Flipping The World

When you switch to \`flex-direction: column\`, you are NOT just "looping vertically". You are physically rotating the coordinate system of the container by 90 degrees.

*   The **Main Axis** becomes Vertical.
*   The **Cross Axis** becomes Horizontal.

**ASCII Visualization: Column Mode**

\`\`\`text
         Main Axis (justify-content)
                 |
                 v
   -------------------
   |    [Item 1]     |  <- Cross Axis (align-items)
   |       |         |
   |    [Item 2]     |
   |       |         |
   |    [Item 3]     |
   -------------------
\`\`\`

---

## Summary

If \`justify-content\` stops working, ask yourself: "Which way is my Main Axis pointing?" mastering this rotation is the key to responsive design.
            `
        },
        {
            id: 'css-unit2-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Alignment Algorithms',
            duration: '20 min read',
            content: `
# Deep Dive: Alignment Algorithms

## The "Why"

Centering a div used to require \`margin: 0 auto\`, absolute positioning, and a sacrifice to the browser gods.

Flexbox solves this with two algorithmic properties: one for distributing "Free Space" and one for aligning "Mass".

---

## Algorithm 1: Justify Content (Main Axis)

Browser Logic:
1.  Calculate total width of all items.
2.  Subtract from Container Width.
3.  Result = **Positive Free Space**.

\`justify-content\` tells the browser where to put this Free Space.

*   **flex-start**: Put free space at the End.
*   **flex-end**: Put free space at the Start.
*   **space-between**: Divide free space by (N-1) gaps.
*   **space-around**: Divide free space by (2N) half-gaps.

**ASCII Visualization: Space Distribution**

\`\`\`text
[Item 1] [Free Space] [Item 2]  (space-between)

[1/2 Space] [Item 1] [Space] [Item 2] [1/2 Space] (space-around)
\`\`\`

---

## Algorithm 2: Align Items (Cross Axis)

This controls the "Height" (or width in column mode) of items within their line.

*   **stretch** (Default): Force items to fill the container's cross-size.
*   **center**: Find the midpoint of the cross-axis and snap the item's midpoint to it.

---

## Summary

\`justify\` = Main Axis distribution. \`align\` = Cross Axis positioning. Memorize this distinction.
            `
        },
        {
            id: 'css-unit2-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Space Distribution Algorithm',
            duration: '20 min read',
            content: `
# Deep Dive: The Space Distribution Algorithm

## The "Why"

The real power of Flexbox isn't alignment; it's **Elasticity**.

How does the browser decide that "Item A gets 200px" and "Item B gets 500px"? It uses the \`flex-grow\`, \`flex-shrink\`, and \`flex-basis\` algorithm.

---

## The Equation

When you write \`flex: 1\`, you are actually writing:
\`flex-grow: 1; flex-shrink: 1; flex-basis: 0%;\`

**The Calculation Step-by-Step**:

1.  **Basis**: The browser looks at \`flex-basis\`. This is the "Ideal Size" before any stretching happens. If set to \`auto\`, it looks at \`width\`.

2.  **Free Space check**:
    *   Container Width (1000px) - Total Basis (200px + 200px) = **600px Free Space**.

3.  **Grow Factor**:
    *   Item A (flex-grow: 1)
    *   Item B (flex-grow: 2)
    *   Total Shares = 3.

4.  **Distribution**:
    *   Item A gets 1/3 of 600px (+200px). Final: 400px.
    *   Item B gets 2/3 of 600px (+400px). Final: 600px.

---

## Machine Logic: Negative Free Space

If the items are TOO BIG for the container, the **Shrink Factor** kicks in.

It doesn't just shrink them equally; it shrinks them weighted by their size (larger items shrink more significantly to preserve visibility).

---

## Summary

\`flex: 1\` essentially means "Take all remaining space". \`flex-grow\` is the ratio of greediness.
            `
        },
        {
            id: 'css-unit2-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Multi-line Layouts (Wrapping)',
            duration: '15 min read',
            content: `
# Deep Dive: Multi-line Layouts (Wrapping)

## The "Why"

By default, Flex containers are **Single Line**. They will shrink items to microscopic sizes just to keep them on one row.

By enabling \`flex-wrap: wrap\`, you allow the layout to break into multiple **Flex Lines**.

---

## Browser Internals: Flex Lines

When wrapping occurs, the browser effectively creates multiple mini-flex containers stacked vertically.

*   **Line 1**: Acts as its own independent flex context.
*   **Line 2**: Acts as its own independent flex context.

**Critical Note**: \`justify-content\` works per line! You cannot "justify" an item from Line 1 to align with an item on Line 2.

---

## The new Property: Align-Content

Once you have multiple lines, you have "Cross Axis Free Space" *between the lines*.

\`align-content\` controls the spacing of the ROWS, not the ITEMS.

*   \`flex-start\`: Pack all rows at the top.
*   \`space-between\`: Distribute empty vertical space between rows.

**ASCII Visualization**

\`\`\`text
Container Height: 500px

Line 1 [Item] [Item]  ^
                      |  <-- align-content spacing
Line 2 [Item] [Item]  v
\`\`\`

---

## Summary

Use \`align-items\` to position items inside a SINGLE line. Use \`align-content\` to position the LINES themselves within the container.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Navigation Bar',
            duration: '20 min',
            content: `
## The Concept

The classic "Split Nav". Logo on the left, Links on the right.

Historically, this required \`float: right\` or absolute positioning. With Flexbox, it is a single line of alignment logic.

---

## The Mission

1.  Turn the header into a Flex Container.
2.  Use \`justify-content\` to push the Logo and Nav elements to opposite edges.
3.  Align them vertically so the text is centered relative to the logo height.

---

## Machine Logic

*   **Space-Between**: The browser calculates: Container Width - (Logo Width + Nav Width).
*   It places that positive free space *between* the two elements.
*   **Align-Items: Center**: It finds the tallest element (Main Axis Height) and creates a centerline.

---

## Senior Warnings

> **Gap vs Margin**: Modern browsers support \`gap: 20px\` in Flexbox (hallelujah!). Use this instead of adding \`margin-left\` to every link. It's cleaner and requires no "last-child" reset.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Flex Activation: Target .navbar. Display as flex.',
                    completed: false,
                    regex: /\.navbar\s*\{(?=[\s\S]*?display\s*:\s*flex)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'The Split: Use justify-content to push items apart.',
                    completed: false,
                    regex: /\.navbar\s*\{(?=[\s\S]*?justify-content\s*:\s*space-between)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Vertical Center: Use align-items to center content vertically.',
                    completed: false,
                    regex: /\.navbar\s*\{(?=[\s\S]*?align-items\s*:\s*center)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<header class="navbar">
    <div class="logo">ACME Corp</div>
    <nav class="links">
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>
</header>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Build the Split Navigation */

.logo { font-weight: bold; font-size: 20px; }
.links a { margin-left: 20px; text-decoration: none; color: black; }

/* 1. Target .navbar */
/* Display Flex, Space Between, Align Center */


`
                }
            ]
        },
        {
            id: 'css-unit2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Holy Grail Centering',
            duration: '15 min',
            content: `
## The Concept

Centering an element vertically and horizontally was the hardest problem in CSS for 15 years.

Flexbox solved it definitively. We align the **Main Axis** (Center) and the **Cross Axis** (Center).

---

## The Mission

You have a "Hero Message" that needs to be perfectly centered in the viewport.

1.  Make the container full viewport height (\`100vh\`).
2.  Center the child content on both axes.

---

## Machine Logic

*   **Axis 1**: \`justify-content: center\` finds the horizontal midpoint.
*   **Axis 2**: \`align-items: center\` finds the vertical midpoint.
*   **Intersection**: The item is placed at the (X,Y) coordinate where these midpoints cross.

---

## Senior Warnings

> **Height Awareness**: \`align-items: center\` ONLY works if the container HAS height! If your container is only as tall as the content (\`height: auto\`), centering vertically does nothing because the "middle" is just the current position.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Full Height: Target .hero-section. Set height to "100vh".',
                    completed: false,
                    regex: /\.hero-section\s*\{(?=[\s\S]*?height\s*:\s*100vh)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Flex Engine: Enable Flexbox.',
                    completed: false,
                    regex: /\.hero-section\s*\{(?=[\s\S]*?display\s*:\s*flex)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'The Dual Center: Center on Main and Cross axis.',
                    completed: false,
                    regex: /\.hero-section\s*\{(?=[\s\S]*?justify-content\s*:\s*center)(?=[\s\S]*?align-items\s*:\s*center)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<section class="hero-section">
    <div class="message">
        <h1>Welcome Future</h1>
        <button>Start</button>
    </div>
</section>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: The Holy Grail Center */

.message { text-align: center; }

/* 1. Target .hero-section */
/* Height 100vh, Flex, Center/Center */


`
                }
            ]
        },
        {
            id: 'css-unit2-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Mobile Card (Axis Flipping)',
            duration: '20 min',
            content: `
## The Concept

This lesson covers the most important behavior in Responsive Design: **Switching Axes**.

On Desktop, we want a Row (Image Left, Text Right). On Mobile, we want a Column (Image Top, Text Bottom).

---

## The Mission

We are building the "Mobile View" of a product card.

1.  Change the Flex Direction to \`column\`.
2.  Use \`justify-content: center\` to align items vertically (Wait, what? Yes, because the axis flipped!).
3.  Add a gap between the image and text.

---

## Machine Logic

*   **Rotation**: \`flex-direction: column\` rotates the Main Axis to Vertical.
*   **Justify Reversal**: \`justify-content\` NOW controls vertical alignment.
*   **Align Reversal**: \`align-items\` NOW controls horizontal alignment (width stretching).

---

## Senior Warnings

> **The Image Stretch**: By default, \`align-items: stretch\` is active. This might make your image stretch weirdly to fill the container width. You often need \`align-items: center\` or specific widths on children to prevent distortion.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Column Mode: Target .product-card. Set flex-direction to "column".',
                    completed: false,
                    regex: /\.product-card\s*\{(?=[\s\S]*?flex-direction\s*:\s*column)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Vertical Balance: Center items on the new Main Axis (Vertical).',
                    completed: false,
                    regex: /\.product-card\s*\{(?=[\s\S]*?justify-content\s*:\s*center)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Cross Axis: Center items horizontally (Cross Axis) to prevent stretching.',
                    completed: false,
                    regex: /\.product-card\s*\{(?=[\s\S]*?align-items\s*:\s*center)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="product-card" style="display: flex; height: 300px; border: 1px solid #ddd;">
    <div class="img-box" style="width: 50px; height: 50px; background: red;"></div>
    <h3>Gaming Mouse</h3>
    <p>$49.99</p>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Build the Mobile Stack Layout */

/* 1. Target .product-card */
/* Direction Column, Center logic */


`
                }
            ]
        },
        {
            id: 'css-unit2-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Managing Free Space (Flex Grow)',
            duration: '25 min',
            content: `
## The Concept

Normally, items only take up the space they *need* (Content-based). \`flex-grow\` allows items to consume space they *want* (Container-based).

This is essential for "Sidebar + Main Content" layouts where the Sidebar is fixed, and Main Content fills the rest.

---

## The Mission

Build an Application Layout.

1.  Keep the Sidebar fixed at 250px (Limit its growth).
2.  Force the Main Content to expand and consume **ALL** remaining screen real estate.

---

## Machine Logic

*   **Flex: 1**: This shorthand sets \`flex-grow: 1\`, \`flex-shrink: 1\`, \`flex-basis: 0%\`.
*   **The Calculation**: The browser sees the fixed sidebar (250px). It subtracts 250px from the screen width. It then awards 100% of that remainder to the Main Content area because it is the only one "asking" for growth.

---

## Senior Warnings

> **Collapse Protection**: Always add \`min-width: 0\` to flex children if they contain text truncation or large images. Flexbox has a quirk where it refuses to shrink items smaller than their content unless you force it.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Flex Parent: Target .app-layout. Display flex.',
                    completed: false,
                    regex: /\.app-layout\s*\{(?=[\s\S]*?display\s*:\s*flex)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Fixed Sidebar: Target .sidebar. Set width to "250px" and prevent growing (flex: none).',
                    completed: false,
                    regex: /\.sidebar\s*\{(?=[\s\S]*?width\s*:\s*250px)(?=[\s\S]*?flex\s*:\s*none)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Fluid Content: Target .main-content. Set flex to "1" to consume space.',
                    completed: false,
                    regex: /\.main-content\s*\{(?=[\s\S]*?flex\s*:\s*1)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="app-layout" style="height: 100vh;">
    <aside class="sidebar" style="background: #333; color: white;">Sidebar</aside>
    <main class="main-content" style="background: #fff;">
        <h1>Dashboard</h1>
        <p>This area should fill the rest of the screen.</p>
    </main>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Create Fixed Sidebar + Fluid Content */

/* 1. Target .app-layout (flex) */
/* Display flex */


/* 2. Target .sidebar (fixed 250px, no flex) */
/* Width 250px, flex none */


/* 3. Target .main-content (flex: 1) */
/* flex 1 */


`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Flex Architecture',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If you set "flex-direction: column", which property centers items VERTICALLY?',
                    options: [
                        'align-items: center',
                        'justify-content: center',
                        'text-align: center',
                        'align-self: center'
                    ],
                    correctIndex: 1,
                    explanation: 'When Direction is Column, the Main Axis becomes Vertical. justify-content ALWAYS controls the Main Axis, so it now controls vertical alignment.'
                },
                {
                    id: 'q2',
                    question: 'What does "flex: 1" actually assume?',
                    options: [
                        'flex-grow: 1, flex-shrink: 1, flex-basis: 0%',
                        'flex-grow: 1, flex-shrink: 0, flex-basis: auto',
                        'flex-grow: 0, flex-shrink: 1, flex-basis: auto',
                        'width: 100%'
                    ],
                    correctIndex: 0,
                    explanation: 'The shorthand "flex: 1" sets the basis to 0%. This is important because it means "Start from 0 and distribute ALL space equally", ignoring the content size.'
                },
                {
                    id: 'q3',
                    question: 'Which property controls the spacing BETWEEN multiple lines of wrapped content?',
                    options: [
                        'align-items',
                        'justify-content',
                        'align-content',
                        'line-height'
                    ],
                    correctIndex: 2,
                    explanation: 'Align-Content controls the distribution of extra space in the Cross Axis when there are multiple lines (wrapped).'
                },
                {
                    id: 'q4',
                    question: 'What is the default value of "align-items"?',
                    options: [
                        'center',
                        'flex-start',
                        'stretch',
                        'baseline'
                    ],
                    correctIndex: 2,
                    explanation: 'Default is "stretch". This is why flex items automatically expand to match the height of the tallest item in the row.'
                },
                {
                    id: 'q5',
                    question: 'How is "Positive Free Space" calculated?',
                    options: [
                        'Container Width + Item Width',
                        'Container Width - Total Flex Basis of Items',
                        'Screen Width - Margin',
                        'It is random'
                    ],
                    correctIndex: 1,
                    explanation: 'The browser subtracts the total requested size (Basis) of all children from the container size. The result is the Free Space available for distribution (Flex-Grow).'
                }
            ]
        }
    ]
};
