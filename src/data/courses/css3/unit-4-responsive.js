import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Responsive = {
    id: 'css3-unit-4',
    title: 'Responsive Design: Viewports & Fluidity',
    description: 'Mastering the "One Web" philosophy using Math, Media Queries, and Fluid Topology.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit4-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Viewport & The "Mobile Lie"',
            duration: '15 min read',
            content: `
# Deep Dive: The Viewport & The "Mobile Lie"

## The "Why"

By default, mobile browsers **lie** to you.

When you load a website on an iPhone (width: 375px), the browser *pretends* the screen is **980px** wide. It renders the desktop version and shrinks it down, making text unreadable. This is the "Virtual Viewport".

To build responsive sites, we must force the browser to tell the truth.

---

## Machine Logic: The Virtual Viewport

Without intervention, the rendering engine decouples the **Layout Viewport** from the **Visual Viewport**.

**ASCII Visualization: The Disconnect**

\`\`\`text
[ Real Device Screen (375px) ]
|--------------------------|
|  [ Virtual Viewport (980px) ] <--- Browser renders this
|  | Header | Content |      |
|  |------------------|      |
|                          |
|--------------------------|
Result: Everything is tiny (0.3x scale).
\`\`\`

---

## The Fix: Meta Viewport

We inject a specific instruction into the HTML Head to sync the pixels.

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

*   **width=device-width**: "Set the rendering width equal to the hardware width."
*   **initial-scale=1**: "Do not zoom out. Keep 1 CSS pixel = 1 Device pixel."

---

## Senior Warnings

> **Zoom Locking**: Never use \`user-scalable=no\`. It destroys accessibility for visually impaired users who need to pinch-zoom.

> **100vw Scrollbar Bug**: Be careful using \`width: 100vw\`. If a vertical scrollbar exists, the Viewport Width includes the scrollbar, causing horizontal overflow. Use \`width: 100%\` for containers.
            `
        },
        {
            id: 'css-unit4-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Media Queries (CSS Conditionals)',
            duration: '20 min read',
            content: `
# Deep Dive: Media Queries

## The "Why"

Media Queries are **If-Statements** for CSS. They allow the browser to switch logic branches based on environmental constraints (Screen Width, Print Mode, Dark Mode).

---

## The Syntax logic

The browser evaluates queries efficiently. If the condition is false, the engine **skips** parsing the block entirely (mostly).

\`\`\`css
/* Base Logic (Global) */
body { background: white; }

/* Conditional Logic */
@media (min-width: 768px) {
  /* Only executes if viewport >= 768px */
  body { background: black; }
}
\`\`\`

---

## Standard Breakpoints (Tailwind Style)

We don't target specific devices (e.g., "iPhone 12"). We target **Content Ranges**.

| Class | Width (min) | Target Device |
| :--- | :--- | :--- |
| **sm** | \`640px\` | Large Phones / Small Tablets |
| **md** | \`768px\` | Tablets (iPad Portrait) |
| **lg** | \`1024px\` | Laptops / iPad Landscape |
| **xl** | \`1280px\` | Desktops |

---

## Summary

Media queries allow us to move layout blocks. We typically transform **Stacks** (Mobile) into **Grids** (Desktop).
            `
        },
        {
            id: 'css-unit4-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Mobile-First Strategy',
            duration: '15 min read',
            content: `
# Deep Dive: Mobile-First Strategy

## The "Why"

Mobile-First is not just a buzzword; it is a **Code Architecture Strategy**.

Mobile layouts are usually simpler (single column). Desktop layouts are complex. It is cleaner code to **Add Complexity** as screens get wider, rather than **Remove Complexity** as screens get smaller.

---

## Min-Width (Additive) vs Max-Width (Destructive)

**❌ Bad Architecture (Desktop First / Max-Width)**

\`\`\`css
/* Huge code block for desktop */
.card { width: 50%; float: left; }

/* Undo everything for mobile */
@media (max-width: 600px) {
  .card { width: 100%; float: none; } /* Overriding/Undoing */
}
\`\`\`

**✅ Good Architecture (Mobile First / Min-Width)**

\`\`\`css
/* Simple base code (Mobile) */
.card { width: 100%; }

/* Add layout for desktop */
@media (min-width: 768px) {
  .card { width: 50%; display: flex; }
}
\`\`\`

---

## Machine Logic

Browsers on mobile phones parse the CSS from top to bottom. In a Mobile-First approach, they read the base styles and **ignore** the media query blocks entirely. This is slightly more performant than reading desktop styles, applying them, and then overwriting them.

---

## Summary

Start with the constraints. Build the single column view. Then expanding the screen adds columns.
            `
        },
        {
            id: 'css-unit4-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Fluid Units (rem, vw, clamp)',
            duration: '20 min read',
            content: `
# Deep Dive: Fluid Units

## The "Why"

Pixels (\`px\`) are dead for layout. They are rigid.

To build "Elite" UIs, we use math-based units that react to the user's environment.

---

## The Unit Roster

| Unit | Base | Behavior | Use Case |
| :--- | :--- | :--- | :--- |
| **px** | Static | Fixed dots on screen | Borders, Shadows (rarely layout) |
| **em** | Parent | Multiplier of parent font | Components that scale together |
| **rem** | Root | Multiplier of \`<html>\` font | Global Sizing, Margins, Padding |
| **vw** | Viewport | % of Window Width | Hero Typography, Full-width Containers |
| **%** | Parent | % of Parent Width | Grid columns |

---

## The Modern Weapon: clamp()

Instead of writing 3 media queries to change font size, use Math.

\`\`\`css
/* logic: clamp(MIN, PREFERRED, MAX) */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
\`\`\`

1.  **Min**: Never go below \`2rem\`.
2.  **Preferred**: Try to be \`5%\` of the screen width.
3.  **Max**: Never go above \`4rem\`.

**ASCII Visualization: The Slope**

\`\`\`text
   Size
    ^
    |           /------ (Max: 4rem)
    |          /
    |         / (Preferred: 5vw - The Slope)
    |  /-----
    |  (Min: 2rem)
    |
    +-------------------> Screen Width
\`\`\`

---

## Summary

Stop setting fixed sizes. Set **relationships**.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Viewport Fix',
            duration: '15 min',
            content: `
## The Mission

You are initializing a new project. The HTML rendering looks broken on the mobile simulator; the text is unreadable and the page is zoomed out.

**Task:** Inject the correct standard Viewport Meta Tag into the \`<head>\`.

---

## Machine Logic

*   **Target**: The browser's internal scaling engine.
*   **Goal**: Sync CSS pixels (software) to Device pixels (hardware).

---

## Senior Warnings

> **Strict Syntax**: HTML attributes are sensitive. Ensure you use \`width=device-width\` exactly.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add the <meta> viewport tag inside <head>.',
                    completed: false,
                    regex: /<meta\s+name=["']viewport["']\s+content=["']width=device-width,\s*initial-scale=1["']\s*\/?>/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <title>Mobile Fix</title>
</head>
<body>
    <h1>Welcome to Mobile</h1>
    <p>This text should be readable.</p>
</body>
</html>`
                }
            ]
        },
        {
            id: 'css-unit4-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Breakpoint (Flex Swap)',
            duration: '25 min',
            content: `
## The Mission

We have a navigation menu. On **Mobile**, it should be a vertical stack. On **Desktop** (screens wider than 768px), it should be a horizontal row.

**Task:** Use a \`min-width\` media query to change the \`flex-direction\`.

---

## Architecture

*   **Default State**: \`flex-direction: column\` (Mobile Native).
*   **Desktop State**: \`flex-direction: row\` (Triggered at 768px).

---

## Senior Warnings

> **Nesting**: Ensure your new rule is INSIDE the \`@media\` block braces.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create a @media query for min-width: 768px.',
                    completed: false,
                    regex: /@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Inside the query, target .nav-list and set flex-direction to row.',
                    completed: false,
                    regex: /@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\.nav-list\s*\{[\s\S]*?flex-direction\s*:\s*row\s*;?[\s\S]*?\}[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.nav-list {
    display: flex;
    flex-direction: column; /* Mobile Default */
    gap: 1rem;
    list-style: none;
}

/* TODO: Add Desktop Override */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<ul class="nav-list">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>`
                }
            ]
        },
        {
            id: 'css-unit4-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Mobile-First Refactoring',
            duration: '25 min',
            content: `
## The Mission

Refactor a legacy "Desktop First" component.
Currently, it uses valid CSS, but the logic is backwards. We want to start simple and add complexity.

1.  **Mobile Base**: The background should be \`red\`.
2.  **Desktop Override**: When screen > 1024px, background becomes \`blue\`.

---

## Machine Logic

*   **Cascade**: The browser reads line-by-line. The Media Query must come **AFTER** the base style to override it successfully.

---

## Senior Warnings

> **Overriding**: If you put the media query *before* the base style, the base style will overwrite it due to the cascade, making your query useless.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set base .box background to red.',
                    completed: false,
                    regex: /\.box\s*\{[\s\S]*?background-color\s*:\s*red\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Create query for min-width 1024px.',
                    completed: false,
                    regex: /@media\s*\(\s*min-width\s*:\s*1024px\s*\)\s*\{[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Inside query, set .box background to blue.',
                    completed: false,
                    regex: /@media\s*\(\s*min-width\s*:\s*1024px\s*\)\s*\{[\s\S]*?\.box\s*\{[\s\S]*?background-color\s*:\s*blue\s*;?[\s\S]*?\}[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Refactor to Mobile First */

/* 1. Base Styles (Mobile - Red) */


/* 2. Desktop Override (Blue) */

`
                }
            ]
        },
        {
            id: 'css-unit4-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Fluid Typography (Clamp)',
            duration: '20 min',
            content: `
## The Mission

We want a "Hero Headline" that is massive on desktop but doesn't overflow on mobile.
Instead of using 5 different media queries, use **Math**.

**Task:** Implement \`clamp()\`.
*   Minimum size: \`2rem\`
*   Ideal size: \`5vw\` (5% of viewport width)
*   Maximum size: \`5rem\`

---

## Machine Logic

The browser calculates: \`Math.max(2rem, Math.min(5vw, 5rem))\` on every single frame of a window resize.

---

## Senior Warnings

> **Browser Support**: Clamp is supported in all modern browsers (>95%). It is safe to use in production today.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Target .hero-text and use the clamp() function for font-size.',
                    completed: false,
                    regex: /\.hero-text\s*\{[\s\S]*?font-size\s*:\s*clamp\(\s*2rem\s*,\s*5vw\s*,\s*5rem\s*\)\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.hero-text {
    font-weight: 800;
    /* TODO: Add fluid font-size here */

}`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Responsive Logic',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If you do NOT add the <meta name="viewport"> tag, what width does a mobile browser assume?',
                    options: [
                        'The actual device width (e.g. 375px)',
                        '~980px (Desktop Virtual Viewport)',
                        '1920px (Full HD)',
                        '0px'
                    ],
                    correctIndex: 1,
                    explanation: 'Browsers default to a virtual viewport of roughly 980px to emulate old-school desktop sites, forcing the user to zoom out.'
                },
                {
                    id: 'q2',
                    question: 'In a "Mobile-First" strategy, which Media Query is used for overrides?',
                    options: [
                        '@media (max-width: ...)',
                        '@media (min-width: ...)',
                        '@media (device-width: ...)',
                        '@media (orientation: ...)'
                    ],
                    correctIndex: 1,
                    explanation: 'Mobile First means the default CSS is for small screens. We use min-width (Upwards) to add styles for larger screens.'
                },
                {
                    id: 'q3',
                    question: 'Which unit is relative to the width of the browser window?',
                    options: [
                        'rem',
                        'em',
                        'vw',
                        'px'
                    ],
                    correctIndex: 2,
                    explanation: 'vw stands for Viewport Width. 1vw = 1% of the current browser window width.'
                },
                {
                    id: 'q4',
                    question: 'What does clamp(1rem, 50%, 3rem) do?',
                    options: [
                        'Sets the size strictly to 50%',
                        'Sets the size to 50%, but never smaller than 1rem and never larger than 3rem',
                        'Calculates the average of the three values',
                        'It is invalid CSS syntax'
                    ],
                    correctIndex: 1,
                    explanation: 'Clamp applies the middle value (preferred), ensuring it stays within the lower and upper boundaries.'
                },
                {
                    id: 'q5',
                    question: 'Why is `width: 100vw` potentially dangerous compared to `width: 100%`?',
                    options: [
                        'It is not supported in Chrome',
                        'It ignores the vertical scrollbar width, often causing horizontal scrolling',
                        'It is slower to render',
                        'It makes text blurry'
                    ],
                    correctIndex: 1,
                    explanation: '100vw includes the scrollbar track. If your OS has a visible scrollbar (e.g., Windows), 100vw puts content slightly off-screen.'
                }
            ]
        }
    ]
};