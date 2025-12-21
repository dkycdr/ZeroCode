import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit0CSSBasics = {
    id: 'css3-unit-0',
    title: 'CSS Basics: Internals & Architecture',
    description: 'A deep dive into the CSS Object Model (CSSOM), the Cascade algorithm, and the precise mechanics of browser rendering.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit0-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The CSS-Object Model (CSSOM)',
            duration: '15 min read',
            content: `
# Deep Dive: The CSS-Object Model (CSSOM)

## The "Why"

Most developers think CSS is just "styling". To a browser engineer, CSS is a complex database query that runs 60 times per second.

Understanding mechanisms like the **CSSOM** separates "React developers" from "Frontend Engineers". We need to know how the browser turns text into pixels.

---

## Browser Internals: From Bytes to Paint

When Chrome receives your \`.css\` file, it doesn't just "read" it. It performs a violent transformation.

1.  **Bytes**: The raw 0s and 1s are read from the network.

2.  **Characters**: Converted to text used UTF-8 (e.g. \`body { ... }\`).

3.  **Tokens**: Broken into meaningful chunk (StartTag, Identifier, brace).

4.  **Nodes**: Objects created in memory.

5.  **CSSOM Tree**: A tree structure representing all styles.

**ASCII Visualization: The Critical Path**

\`\`\`text
   HTML  --->  DOM Tree
                  |
                  v
               Render Tree  --->  Layout  --->  Paint  --->  Composite
                  ^
                  |
    CSS  --->  CSSOM Tree
\`\`\`

The browser **cannot** render the page until the CSSOM is built. This is why CSS is "Render Blocking".

---

## Machine Logic: The "Recalculate Styles" Event

When you change a class via JavaScript, the browser must traverse the Rule Tree.

*   It matches selectors from Right-to-Left (key selector).

*   It calculates the **Computed Value** for every property.

*   It constructs a "RenderObject" for visual elements.

---

## Summary

You are not painting; you are manipulating the CSSOM API. Efficient CSS means a smaller tree and faster construction times.
            `
        },
        {
            id: 'css-unit0-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Cascade Algorithm',
            duration: '20 min read',
            content: `
# Deep Dive: The Cascade Algorithm

## The "Why"

The "C" in CSS stands for **Cascading**. It is the fundamental algorithm that resolves conflicts. If you don't master this, you will spend your life writing \`!important\` and fighting your own code.

---

## The 3 Pillars of Conflict Resolution

When the browser sees two rules for \`h1\`, it follows this strict order:

1.  **Origin**: Where did the style come from? (User Agent vs User vs Author).

2.  **Specificity**: The math score of selectors.

3.  **Source Order**: The "Tie-Breaker". Last declared wins.

**ASCII Visualization: The Waterfall**

\`\`\`text
[ Browser Defaults ]  (User Agent Stylesheet)
         |
         v
[ User Preferences ]  (Accessibility/OS Settings)
         |
         v
[ Author Styles ]     (Your Code - The most powerful*)
         |
         v
[ !important ]        (The Nuclear Option)
\`\`\`

---

## Browser Logic: Origin Precedence

The browser actually merges these trees. A common misconception is that your code always wins.

*   **Fact**: A User's \`!important\` override (for accessibility) beats YOUR \`!important\`.

*   **Fact**: Inline styles (in HTML) beat ID selectors in CSS files.

---

## Summary

The Cascade isn't random; it's a weighted scoring system. Master the weights, control the paint.
            `
        },
        {
            id: 'css-unit0-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Specificity & Matching Performance',
            duration: '15 min read',
            content: `
# Deep Dive: Specificity & Matching Performance

## The "Why"

Specificity is the "Weight" of a selector. But did you know that the complexity of your selector directly impacts the framerate of your scrolling?

---

## The Math of Specificity (0-0-0)

We represent specificity as a 3-column integer aka \`(ID, Class, Tag)\`.

*   **ID Column**: Unbeatable by classes.

*   **Class Column**: Includes classes, attributes \`[type="text"]\`, and pseudo-classes \`:hover\`.

*   **Tag Column**: Includes element names and pseudo-elements \`::before\`.

**The Calculation**:

\`\`\`text
#nav .list li:hover  -->  (1, 2, 1)
\`\`\`

1 ID (\`#nav\`) + 2 Classes (\`.list\`, \`:hover\`) + 1 Tag (\`li\`).

---

## Browser Internals: Right-to-Left Matching

Why do we avoid \`div span a\`?

Because the browser reads **Right-to-Left**.

1.  First, it finds **ALL** \`<a>\` tags on the page (The "Key Selector").

2.  Then, it checks if their parent is a \`span\`.

3.  Then, it checks if that span is in a \`div\`.

*   **Performance Hit**: If you have 1000 links, the browser does 1000 checks instantly.

*   **Optimization**: Use \`.link\`. The browser finds only elements with that class.

---

## Summary

Specificity determines *what* wins. Selector complexity determines *how fast* it wins.
            `
        },
        {
            id: 'css-unit0-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Inheritance & The Value Pipeline',
            duration: '15 min read',
            content: `
# Deep Dive: Inheritance & The Value Pipeline

## The "Why"

Why does \`color\` apply to children, but \`border\` does not? This is **Inheritance**.

Understanding the "Value Processing Pipeline" explains how \`font-size: 2em\` becomes \`32px\` on your screen.

---

## The Value Pipeline

Every property goes through 4 stages before rendering:

1.  **Specified Value**: What you wrote (e.g. \`2em\`) or the default.

2.  **Computed Value**: Absolute values resolved (e.g. \`2em\` -> \`32px\`). Inheritance happens here.

3.  **Used Value**: Layout dependencies resolved (e.g. \`width: 50%\` -> \`400px\`).

4.  **Actual Value**: Device limits applied (e.g. \`400.6px\` -> \`401px\`).

**ASCII Visualization**

\`\`\`text
CSS File:  color: inherit;
              |
              v
Parent:    color: blue;
              |
              v
Child:     Computed Value = blue;
\`\`\`

---

## Browser Logic: The inherit Keyword

Every property has a definition in the spec: "Inherited: Yes/No".

*   **Yes**: Typography properties (\`color\`, \`font-\`, \`line-height\`).

*   **No**: Box model properties (\`margin\`, \`padding\`, \`border\`).

You can force inheritance: \`border: inherit;\` commands the browser to lookup the Computed Value of the parent.

---

## Summary

Don't guess. The browser follows a rigid pipeline to calculate value. Know the pipeline.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit0-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Selectors & Strict Syntax',
            duration: '20 min',
            content: `
## The Concept

**Syntactical Exactness** is required. A single missing brace or semicolon can invalidate the entire stylesheet (or following rules) during the **Tokenization** phase.

We will focus on the three core selectors: **Tags**, **Classes**, and **IDs**.

---

## The Mission

You are styling a "System Status" component. It has rigid requirements:

1.  Target the container by **Class** to give it structure.

2.  Target the heading by **Tag** to apply typography.

3.  Target the specific status indicator by **ID** to apply color.

---

## Machine Logic

*   **Tokenization**: The browser scanner looks for the \`.\` or \`#\` token to switch modes.

*   **Class Lookup**: Uses a Hash Map for O(1) access speed.

*   **ID Lookup**: Optimized as a unique pointer in the DOM.

---

## Senior Warnings

> **Variable Integrity**: Never start class names with a number (e.g., \`.2cool\`). It is invalid CSS syntax and the parser will discard it silently.

> **Global Pollution**: Styling bare tags like \`div\` or \`span\` is dangerous in large apps. It affects *everything*. Always scope with classes.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Class Targeting: Select ".status-card".',
                    completed: false,
                    regex: /\.status-card\s*\{[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Tag Targeting: Select the "h2" element.',
                    completed: false,
                    regex: /h2\s*\{[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'ID Targeting: Select the "#indicator" element.',
                    completed: false,
                    regex: /#indicator\s*\{[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="status-card">
    <h2>System Online</h2>
    <div id="indicator">Active</div>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Implement the Selector Strategy */

/* 1. Target the class .status-card */


/* 2. Target the tag h2 */


/* 3. Target the ID #indicator */

`
                }
            ]
        },
        {
            id: 'css-unit0-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Color Space',
            duration: '20 min',
            content: `
## The Concept

Digital Color is manipulated via the **RGB Model** (Red, Green, Blue).

The browser's painting engine (Skia in Chrome) mixes these channels to produce the final pixel value. We control this via **Hexadecimal** (Base-16) notation.

---

## The Mission

Engineer a "Critical Alert" state.

1.  Set the background to a soft red using Hex.

2.  Set the border to a solid dark red.

3.  Ensure high contrast for the text color.

---

## Machine Logic

*   **Hex Parsing**: \`#FF0000\` -> Browser sees \`RR GG BB\`.

*   **Base-16**: \`FF\` = 255 (Max Intensity). \`00\` = 0 (No Intensity).

*   **Composite**: The GPU blends the background color with the layer below it if transparency exists.

---

## Senior Warnings

> **Contrast Ratios**: Accessibility (a11y) tools require a contrast ratio of at least 4.5:1 for normal text.

> **Shorthand Danger**: \`#F00\` expands to \`#FF0000\`. Be careful not to confuse \`#123\` with \`#112233\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Background: Set .alert to background-color "#fee2e2" (soft red).',
                    completed: false,
                    regex: /\.alert\s*\{(?=[\s\S]*?background-color\s*:\s*#fee2e2)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Border: Set border to "1px solid #991b1b" (dark red).',
                    completed: false,
                    regex: /\.alert\s*\{(?=[\s\S]*?border\s*:\s*1px solid #991b1b)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Text: Set color to "#7f1d1d".',
                    completed: false,
                    regex: /\.alert\s*\{(?=[\s\S]*?color\s*:\s*#7f1d1d)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="alert">
    <strong>Error:</strong> Connection Failed.
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Engineer the Color Palette */

/* 1. Target .alert */
/* Background: #fee2e2 */
/* Border: 1px solid #991b1b */
/* Color: #7f1d1d */

`
                }
            ]
        },
        {
            id: 'css-unit0-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Typography System',
            duration: '25 min',
            content: `
## The Concept

**Typography** dictates the rhythm of the page.

Browsers render text using specific **Shaping Engines** (like HarfBuzz). We control size, weight, and family.

---

## The Mission

Format a "Blog Post Header".

1.  Set the font stack to a system-native sans-serif.

2.  Establish hierarchy with size distinctions.

3.  Use weight to emphasize importance.

---

## Machine Logic

*   **Font Stack**: \`"Inter", sans-serif\`. The browser queries the OS Font Book. If "Inter" is missing, it falls back to the next item.

*   **Line-Height**: Determines the "leading". Crucial for readability. The text sits in the middle of this "line box".

---

## Senior Warnings

> **Generic Families**: ALWAYS end your \`font-family\` list with a generic category like \`sans-serif\` or \`serif\`. This is your safety net if the user doesn't have your custom font.

> **Legibility**: Avoid \`font-size\` smaller than \`12px\` (or \`0.75rem\`) for body text. It becomes unreadable on mobile screens.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Font Family: Select .post-title. Set font-family to "Verdana, sans-serif".',
                    completed: false,
                    regex: /\.post-title\s*\{(?=[\s\S]*?font-family\s*:\s*Verdana, sans-serif)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Size & Weight: Set font-size to "32px" and font-weight to "700" (bold).',
                    completed: false,
                    regex: /\.post-title\s*\{(?=[\s\S]*?font-size\s*:\s*32px)(?=[\s\S]*?font-weight\s*:\s*700)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Metadata: Select .date. Set color to "gray" and font-size to "14px".',
                    completed: false,
                    regex: /\.date\s*\{(?=[\s\S]*?color\s*:\s*gray)(?=[\s\S]*?font-size\s*:\s*14px)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<article>
    <h1 class="post-title">The Future of Rendering</h1>
    <p class="date">Dec 21, 2025</p>
</article>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Define the Typography System */

/* 1. Target .post-title */


/* 2. Target .date */

`
                }
            ]
        },
        {
            id: 'css-unit0-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Specificity Strategy',
            duration: '30 min',
            content: `
## The Concept

**Specificity** is the battleground of CSS.

To write scalable CSS, you must learn to "manage the weight" of your selectors, ensuring that overrides happen intentionally, not accidentally.

---

## The Mission

You have a conflict. A generic button style is preventing your "Save" button from looking correct.

1.  Establish the base \`.btn\` class.

2.  Create a high-specificity override using an ID (\`#submit-btn\`) to force the color change.

---

## Machine Logic

*   **Comparison**: Values are compared column-by-column.

*   \`(0, 1, 0)\` beats \`(0, 0, 10)\`. One CLASS beats ten TAGS.

*   \`(1, 0, 0)\` beats \`(0, 100, 0)\`. One ID beats one hundred CLASSES.

---

## Senior Warnings

> **The !important Trap**: Adding \`!important\` creates a standard war that ends in unmaintainable code. Only use it to override inline styles or third-party libraries you cannot control.

> **ID Usage**: In large teams, we often BAN the use of IDs for styling because they are *too* powerful. We prefer chaining classes (e.g., \`.btn.primary\`).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Base Layer: Select .btn. Set background-color to "#e5e7eb" (gray) and color to "black".',
                    completed: false,
                    regex: /\.btn\s*\{(?=[\s\S]*?background-color\s*:\s*#e5e7eb)(?=[\s\S]*?color\s*:\s*black)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'High Specificity Layer: Select #submit-btn. Set background-color to "#2563eb" (blue) and color to "white".',
                    completed: false,
                    regex: /#submit-btn\s*\{(?=[\s\S]*?background-color\s*:\s*#2563eb)(?=[\s\S]*?color\s*:\s*white)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div>
    <button class="btn">Cancel</button>
    <button class="btn" id="submit-btn">Save</button>
</div>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Resolve the Specificity Conflict */

/* 1. Define Base .btn */


/* 2. Override with #submit-btn */

`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit0-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: CSS Architecture',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'In the CSSOM, what happens if the browser encounters an invalid CSS token?',
                    options: [
                        'It crashes the rendering engine',
                        'It discards the entire file',
                        'It discards only that specific rule declaration and continues parsing',
                        'It automatically corrects the error'
                    ],
                    correctIndex: 2,
                    explanation: 'CSS has a graceful failure mechanism. It ignores parts it does not understand (like a typo property) but continues to parse the rest of the file.'
                },
                {
                    id: 'q2',
                    question: 'Why is standardizing "Specificity" important for team scalability?',
                    options: [
                        'It makes the file size smaller',
                        'It prevents "Specificity Wars" where developers must constantly use IDs or !important to override each other',
                        'It allows the browser to load faster',
                        'It is required by the W3C'
                    ],
                    correctIndex: 1,
                    explanation: 'Consistency in specificity (e.g., always using Single Class architecture) allows for predictable overrides without escalation.'
                },
                {
                    id: 'q3',
                    question: 'Which of the following selectors causes the most performance overhead during "Right-to-Left" matching?',
                    options: [
                        '#nav-bar',
                        '.menu-item',
                        'div > ul > li > a',
                        '.btn-primary'
                    ],
                    correctIndex: 2,
                    explanation: 'The browser finds EVERY <a> tag, then checks parents, then grandparents. Deeply nested tag selectors are the most expensive to match.'
                },
                {
                    id: 'q4',
                    question: 'What is the "Computed Value" in the pipeline?',
                    options: [
                        'The value you typed (e.g., 2em)',
                        'The final pixel value after inheritance and absolute conversion (e.g., 32px)',
                        'The value applied after layout constraints',
                        'The value shown on the screen'
                    ],
                    correctIndex: 1,
                    explanation: 'Computed Value is the stage where relative units (em, %) and inheritance are resolved into absolute values, before layout happens.'
                },
                {
                    id: 'q5',
                    question: 'How does the browser determine "Source Order" precedence?',
                    options: [
                        'Alphabetical order of files',
                        'The order in which rules appear in the CSSOM (last one wins)',
                        'The size of the CSS file',
                        'First declared wins'
                    ],
                    correctIndex: 1,
                    explanation: 'If Specificity is equal, the rule that appears LAST in the CSS (and thus processed last in the CSSOM construction) overwrites previous ones.'
                }
            ]
        }
    ]
};
