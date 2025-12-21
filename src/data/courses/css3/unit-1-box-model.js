import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1BoxModel = {
    id: 'css3-unit-1',
    title: 'Box Model: Geometry & Spacing Architecture',
    description: 'Master the geometry of the web. Understand how browser engines calculate width, spacing, and layout flow using the Box Model.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit1-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Anatomy of a Box',
            duration: '15 min read',
            content: `
# Deep Dive: The Anatomy of a Box

## The "Why"

To a rendering engine like Blink (Chrome) or WebKit (Safari), **EVERYTHING** is a rectangle. Even a circle created with \`border-radius\` is, mathematically, a rectangle with clipped paint.

Mastering the properties that define this rectangle is the first step to becoming a Layout Architect.

---

## Browser Internals: The Layout Tree

When the CSSOM is built, the browser generates a **Layout Tree**. Each node in this tree represents a box.

If you have a paragraph of text, the browser wraps each line in an "Anonymous Box". You cannot style these directly, but they exist to satisfy the Box Model rules.

**ASCII Visualization: The Layers**

\`\`\`text
       Margin (External Spacing)
   ---------------------------------
   |   Border (The "Wall")         |
   |  ---------------------------  |
   |  | Padding (Internal Air)  |  |
   |  |  ---------------------  |  |
   |  |  |      CONTENT      |  |  |
   |  |  |   (Width/Height)  |  |  |
   |  |  ---------------------  |  |
   |  ---------------------------  |
   ---------------------------------
\`\`\`

1.  **Content**: The actual text, image, or child elements.
2.  **Padding**: Transparent space *inside* the border. It takes on the background color.
3.  **Border**: The boundary line. It takes up actual pixel space.
4.  **Margin**: Transparent space *outside* the border. It pushes neighbors away.

---

## Machine Logic: The Painting Order

The browser paints these layers in a specific order (Stacking Context):

1.  **Background Color** (Paints over Padding + Content).
2.  **Background Image**.
3.  **Border**.
4.  **Content** (Text/Images).
5.  **Outline** (Paints *on top* of everything, does not take space).

---

## Summary

The Box Model is not just styling; it is the collision geometry of the web. Margins determine "push", Padding determines "breathing room".
            `
        },
        {
            id: 'css-unit1-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Box-Sizing & The Mathematics of Width',
            duration: '20 min read',
            content: `
# Deep Dive: Box-Sizing & The Mathematics of Width

## The "Why"

In the early days of the web, the W3C made a questionable decision: \`width\` controlled *only* the **Content Box**.

This meant that if you set \`width: 100%\` and added \`padding: 20px\`, your element became **100% + 40px** wide, causing a horizontal scrollbar. This is the #1 confusing behavior for juniors.

---

## The Two Regimes

We have two ways to calculate geometry:

1.  **content-box (Default)**:
    *   Size = Content.
    *   Total Width = Width + Padding + Border.
    *   *Result*: Boxes grow outwards.

2.  **border-box (The Professional Standard)**:
    *   Size = Total Width (Border-to-Border).
    *   Content Width = Width - Padding - Border.
    *   *Result*: Boxes stay the size you tell them.

**ASCII Visualization: The Comparison**

\`\`\`text
CSS: width: 100px; padding: 20px; border: 5px;

[ content-box ] -> Total Visual Size: 150px
   (100 content) + (40 padding) + (10 border)

[ border-box ]  -> Total Visual Size: 100px
   (50 content)  + (40 padding) + (10 border)
\`\`\`

---

## Browser Logic: Layout Recalculation

When you use \`content-box\` (default), changing padding triggers a **Layout Thrashing** event because the element's outer dimensions change, pushing all neighbors around.

With \`border-box\`, changing padding only affects the *internal* layout of the box. The neighbors stay put. This is computationally cheaper for the browser engine.

---

## Summary

In modern web development, we almost **ALWAYS** reset everything to \`border-box\`. It matches our mental model: "I want a 300px card" means "300px total".
            `
        },
        {
            id: 'css-unit1-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Margin Collapse',
            duration: '15 min read',
            content: `
# Deep Dive: Margin Collapse

## The "Why"

Margin Collapse is strictly a vertical phenomenon. It was designed for "Document Flow" (like Word documents) to prevent huge gaps between paragraphs.

However, in "App Design", it is often a source of frustration where margins seem to disappear or merge unexpectedly.

---

## The Rules of Collapse

Margins collapse in three specific scenarios:

1.  **Adjacent Siblings**: The bottom margin of \`<h1>\` and the top margin of \`<p>\` will merge. The browser uses the **larger** of the two values.

2.  **Parent & First/Last Child**: If a parent has no padding or border, its child's margin can "leak" out and push the parent.

3.  **Empty Blocks**: If a block has no content and borders, its top and bottom margins collapse into one.

**ASCII Visualization: The Merge**

\`\`\`text
Block A (margin-bottom: 50px)
       |
       v
    [ Gap is 50px, NOT 80px ]
       ^
       |
Block B (margin-top: 30px)
\`\`\`

---

## Browser Logic: The Block Formatting Context (BFC)

Collapse happens within the same BFC. You can **break** margin collapse by establishing a new BFC.

Common ways to stop collapse (The "Walls"):
*   Adding \`padding: 1px\` to the parent.
*   Adding \`border: 1px solid transparent\`.
*   Setting \`overflow: hidden\`.
*   Using Flexbox or Grid (Margins **NEVER** collapse in Flex/Grid contexts).

---

## Summary

Margin collapse is a feature, not a bug. It keeps text rhythm consistent. But for UI components, we often prefer Padding or Flex gaps to avoid it.
            `
        },
        {
            id: 'css-unit1-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Overflow & The Scroll Container',
            duration: '15 min read',
            content: `
# Deep Dive: Overflow & The Scroll Container

## The "Why"

The web is an infinite canvas, but our screens are finite windows. **Overflow** determines what happens when the "Water" (Content) creates a volume larger than the "Bucket" (Box).

---

## The Four Modes of Overflow

1.  **visible** (Default): The content spills out. It hangs over other elements. It does NOT trigger scrollbars. This is basically a "graphic glitch".

2.  **hidden**: The content is clipped. It physically ceases to exist for the user (pixels are discarded).

3.  **scroll**: The browser forces scrollbars, even if not needed.

4.  **auto**: The browser adds scrollbars *only* if content overflows.

**ASCII Visualization: The Paint Layer**

\`\`\`text
   ---------------------
   | [ Container ]     |
   |                   |
   | Content...........|...... (visible) spills out
   |                   |
   ---------------------
\`\`\`

---

## Browser Internals: Compositing Layers

When you set \`overflow: scroll\` or \`auto\`, the browser often promotes that element to a **Composited Layer**.

This means screen painting happens on the GPU. The main page stays static, and the GPU shifts the texture of your scroll container. This results in silky smooth 60fps scrolling on mobile devices.

---

## Summary

Managing overflow is key to Responsive Design. Never assume content fits. Always plan for the spill.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Content-Box Trap',
            duration: '20 min',
            content: `
## The Concept

We will investigate the default **content-box** behavior. This is the raw math of 1998.

You must manually calculate the total width of an element by adding strict pixel values for borders and padding.

---

## The Mission

You are tasked with building a "Retro Button" that must be **exactly 240px** wide on the screen, but using legacy methods.

1.  Set the inner \`width\` to **200px**.
2.  Add **10px** of padding on all sides.
3.  Add a **10px** solid border.
4.  Observe how the total width expands.

---

## Machine Logic

*   **Render Formula**: \`Total = Width + (PaddingLeft + PaddingRight) + (BorderLeft + BorderRight)\`.
*   **Your Math**: \`200 + (10 + 10) + (10 + 10) = 240px\`.

---

## Senior Warnings

> **Design Sync**: If a Designer gives you a Figma file saying "Width: 240px", and you write \`width: 240px\` with padding, you will actually ship a **280px** button. This is why devs hate \`content-box\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Core Dimension: Select .retro-btn. Set width to "200px".',
                    completed: false,
                    regex: /\.retro-btn\s*\{(?=[\s\S]*?width\s*:\s*200px)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Internal Air: Add "10px" padding.',
                    completed: false,
                    regex: /\.retro-btn\s*\{(?=[\s\S]*?padding\s*:\s*10px)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'The Wall: Add a "10px solid black" border.',
                    completed: false,
                    regex: /\.retro-btn\s*\{(?=[\s\S]*?border\s*:\s*10px solid black)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="canvas">
    <button class="retro-btn">Legacy Mode</button>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Build the 240px Total Width Button */
/* NOTE: Use the content-box math! */

/* 1. Target .retro-btn */


`
                }
            ]
        },
        {
            id: 'css-unit1-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Border-Box Reset',
            duration: '20 min',
            content: `
## The Concept

Now we enter the modern era. **border-box** forces the browser to absorb padding and border *into* the declared width.

This puts the math on the browser, not you.

---

## The Mission

Fix a broken split-screen layout.

1.  We have two columns set to \`width: 50%\`.
2.  Adding padding breaks them onto new lines (because 50% + padding > 50%).
3.  Apply \`box-sizing: border-box\` to constrain them.

---

## Machine Logic

*   **Constraint Solver**: The browser sees \`width: 50%\`. It locks the outer edges.
*   **Inner Shrink**: When it encounters Padding, it shrinks the *Content* area to preserve the outer width.

---

## Senior Warnings

> **Universal Reset**: In a real project, you should apply \`* { box-sizing: border-box; }\` at the very top of your CSS. Do not apply it per-component like this. We are doing it here for learning purposes.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Broken State: Select .col. Set width to "50%", padding to "20px", float to "left".',
                    completed: false,
                    regex: /\.col\s*\{(?=[\s\S]*?width\s*:\s*50%)(?=[\s\S]*?padding\s*:\s*20px)(?=[\s\S]*?float\s*:\s*left)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'The Fix: Apply "box-sizing: border-box" to force them to fit.',
                    completed: false,
                    regex: /\.col\s*\{(?=[\s\S]*?box-sizing\s*:\s*border-box)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="row">
    <div class="col" style="background: #ffb7b2;">Left Wing</div>
    <div class="col" style="background: #b2f7ef;">Right Wing</div>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Fix the Broken Split Layout */

/* 1. Target .col */
/* Width 50%, Padding 20px, Float left */


/* 2. Add the Box-Sizing Fix */

`
                }
            ]
        },
        {
            id: 'css-unit1-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Managing Margins',
            duration: '25 min',
            content: `
## The Concept

**Margins** create the "rhythm" of your page. Unlike padding, margins push elements away from each other.

We need to master the shorthand syntax and understand **Centering**.

---

## The Mission

Style a "Card Component" that floats in the center of the screen.

1.  Use the margin shorthand to set different values for Top/Bottom vs Left/Right.
2.  Use the \`auto\` keyword to trigger horizontal centering.

---

## Machine Logic

*   **Shorthand Clock**: \`margin: Top Right Bottom Left\`.
*   **Shorthand Axis**: \`margin: Vertical Horizontal\`.
*   **Auto Magic**: When \`margin-left\` and \`margin-right\` are both \`auto\`, the browser calculates the remaining space and divides it by 2.

---

## Senior Warnings

> **The Center Trap**: \`margin: 0 auto\` ONLY works if the element has a declared \`width\` (or \`max-width\`). If the element is full width (default block), there is no space to distribute!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Card Shell: Select .card. Set width to "300px" and background to "white".',
                    completed: false,
                    regex: /\.card\s*\{(?=[\s\S]*?width\s*:\s*300px)(?=[\s\S]*?background\s*:\s*white)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Vertical Rhythm: Add "50px" margin to Top and Bottom.',
                    completed: false,
                    regex: /\.card\s*\{(?=[\s\S]*?margin\s*:\s*50px)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Horizontal Centering: Set Left and Right margin to "auto". (Use the shorthand margin: 50px auto)',
                    completed: false,
                    regex: /\.card\s*\{(?=[\s\S]*?margin\s*:\s*50px auto)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="page-background" style="background: #e2e8f0; height: 100vh; padding: 1px;">
    <div class="card">
        <h2>Dashboard</h2>
    </div>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Center the Card */

/* 1. Target .card */
/* Width: 300px, Background: white */
/* Margin: 50px auto (Top/Bottom 50px, L/R Auto) */


`
                }
            ]
        },
        {
            id: 'css-unit1-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Overflow & Scroll',
            duration: '25 min',
            content: `
## The Concept

What happens when content is too big? By default, text will spill out (visible overflow).

For UI components like "Chat Windows" or "Terms of Service", we need to contain this content and allow scrolling.

---

## The Mission

Build a constrained "Terms of Service" box.

1.  Restrict the height of the box.
2.  Set \`overflow-y\` to \`auto\` to enable vertical scrolling only when needed.
3.  Add padding so the text doesn't touch the scrollbar.

---

## Machine Logic

*   **Hit Testing**: When you set \`overflow: auto\`, the browser creates a new input layer to capture scroll wheel events.
*   **Clipping**: The content outside the box bounds is not painted, saving GPU resources.

---

## Senior Warnings

> **Mobile Scroll**: On iOS, scrolling can feel "sticky" or dead. We used to need \`-webkit-overflow-scrolling: touch;\` to fix this, though modern browsers handle it better now.

> **Double Scrollbars**: Be careful nesting scroll containers inside scroll containers. It creates a terrible UX.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'The Cage: Select .terms-box. Set height to "150px" and border to "1px solid #ccc".',
                    completed: false,
                    regex: /\.terms-box\s*\{(?=[\s\S]*?height\s*:\s*150px)(?=[\s\S]*?border\s*:\s*1px solid #ccc)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'The Scroll: Set overflow-y to "auto".',
                    completed: false,
                    regex: /\.terms-box\s*\{(?=[\s\S]*?overflow-y\s*:\s*auto)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Breathing Room: Add "20px" padding.',
                    completed: false,
                    regex: /\.terms-box\s*\{(?=[\s\S]*?padding\s*:\s*20px)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="terms-box">
    <h3>Terms of Service</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Create the Scroll Container */

/* 1. Target .terms-box */
/* Height: 150px */
/* Border: 1px solid #ccc */
/* Overflow: auto */
/* Padding: 20px */

`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Box Model Architecture',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If an element has width: 100px, padding: 20px, and box-sizing: border-box, what is the width of the CONTENT area?',
                    options: [
                        '100px',
                        '140px',
                        '60px',
                        '80px'
                    ],
                    correctIndex: 2,
                    explanation: 'The Total Width is locked at 100px. We subtract padding (20px left + 20px right = 40px). 100 - 40 = 60px.'
                },
                {
                    id: 'q2',
                    question: 'Which CSS property breaks Margin Collapse effectively without adding visual changes?',
                    options: [
                        'padding: 1px;',
                        'color: red;',
                        'z-index: 10;',
                        'pointer-events: none;'
                    ],
                    correctIndex: 0,
                    explanation: 'Adding even 1px of padding (or a transparent border) acts as a physical wall between the parent and child, preventing their margins from touching and collapsing.'
                },
                {
                    id: 'q3',
                    question: 'In the Layout Tree, which part of the Box Model is known as the "Transparent Area" outside the border?',
                    options: [
                        'Content',
                        'Padding',
                        'Margin',
                        'Outline'
                    ],
                    correctIndex: 2,
                    explanation: 'Margins are external whitespace. They are transparent and push other elements away. Background colors do not extend into the margin.'
                },
                {
                    id: 'q4',
                    question: 'Why does "margin: 0 auto" center an element?',
                    options: [
                        'It turns off margins',
                        'The browser splits the remaining free space equally between Left and Right margins',
                        'It aligns the text to the center',
                        'It uses Flexbox internally'
                    ],
                    correctIndex: 1,
                    explanation: 'The "auto" keyword tells the Layout engine: "Take all available space remaining on this line and distribute it here". If used on both sides, it divides by 2.'
                },
                {
                    id: 'q5',
                    question: 'What happens to pixels that "Overflow" when overflow: hidden is set?',
                    options: [
                        'They are moved to a new line',
                        'They are painted but invisible',
                        'They are clipped and not painted (Pixel Discard)',
                        'They trigger a scrollbar'
                    ],
                    correctIndex: 2,
                    explanation: 'With overflow: hidden, the rendering engine makes a clipping mask. Pixels outside this mask are discarded early in the pipeline.'
                }
            ]
        }
    ]
};
