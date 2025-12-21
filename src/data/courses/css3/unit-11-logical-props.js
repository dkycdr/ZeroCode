import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit11LogicalProps = {
    id: 'css3-unit-11',
    title: 'Modern Layouts: Logical Properties',
    description: 'Stop thinking in Left and Right. Start thinking in Start and End. Prepare your layouts for a global audience.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit11-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Physical vs Logical',
            duration: '15 min read',
            content: `
# Deep Dive: Physical vs Logical

## The "Why"
Traditionally, we used **Physical Properties**: \`margin-left\`, \`padding-top\`.
This assumes the user reads from **Left to Right** (LTR).

But in Hebrew or Arabic, the user reads **Right to Left** (RTL).
Before 2018, you had to write a separate stylesheet to flip every single \`margin-left\` to \`margin-right\`.

---

## The Logical Revolution
**Logical Properties** adapt automatically based on the document's \`dir="rtl"\` attribute.

*   \`margin-left\` -> \`margin-inline-start\` (The start of the text flow).
*   \`margin-top\` -> \`margin-block-start\` (The top of the text block).

If the language changes, the layout flips instantly. Zero extra code.
            `
        },
        {
            id: 'css-unit11-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Block vs Inline Axis',
            duration: '15 min read',
            content: `
# Deep Dive: Block vs Inline Axis

## The "Why"
To use Logical Properties, you must understand the two axes of the web.

1.  **Inline Axis**: The direction text flows.
    *   In English: Left -> Right.
    *   In Arabic: Right -> Left.
    *   In Japanese (Vertical): Top -> Bottom.

2.  **Block Axis**: The direction paragraphs stack.
    *   In English: Top -> Bottom.
    *   In Japanese (Vertical): Right -> Left.

---

## New Syntax Memory Map

*   \`width\` -> \`inline-size\`
*   \`height\` -> \`block-size\`
*   \`top/bottom\` -> \`block-start / block-end\`
*   \`left/right\` -> \`inline-start / inline-end\`

            `
        },
        {
            id: 'css-unit11-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Writing Modes',
            duration: '20 min read',
            content: `
# Deep Dive: Writing Modes

## The "Why"
Sometimes you want text to run vertically for stylistic reasons (e.g., a sideways badge on a card).

\`\`\`css
.badge {
  writing-mode: vertical-rl;
}
\`\`\`

If you used \`margin-top\`, the margin would still be at the "physical top".
If you use \`margin-block-start\`, the margin rotates with the text to sit at the "logical start" (which is now visually on the right).

---

## Summary
Logical properties allow you to rotate and flip components without breaking their internal spacing.
            `
        },
        {
            id: 'css-unit11-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Shorthands',
            duration: '15 min read',
            content: `
# Deep Dive: The Shorthands

## The "Why"
We all know \`margin: 10px 20px\` (Top/Bottom, Left/Right).
The logical equivalent is cleaner.

---

## Syntax

\`\`\`css
/* Logical */
margin-block: 10px;       /* Top AND Bottom */
margin-inline: 20px;      /* Left AND Right */
padding-inline: auto;
\`\`\`

This is fantastic for centering or applying consistent vertical rhythm without overwriting the sides.

            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit11-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Converting to Logical',
            duration: '20 min',
            content: `
## The Mission
You have a legacy button with \`margin-right: 10px\` to separate the icon from the text.
Refactor it to support RTL layouts automatically.

**Task:**
Replace all physical margins with logical ones.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Replace margin-left: 0 with margin-inline-start: 0.',
                    completed: false,
                    regex: /\.icon\s*\{[\s\S]*?margin-inline-start\s*:\s*0\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Replace margin-right: 10px with margin-inline-end: 10px.',
                    completed: false,
                    regex: /\.icon\s*\{[\s\S]*?margin-inline-end\s*:\s*10px\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Replace margin-top: 5px with margin-block-start: 5px.',
                    completed: false,
                    regex: /\.icon\s*\{[\s\S]*?margin-block-start\s*:\s*5px\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Ensure text-align is set to start (not left).',
                    completed: false,
                    regex: /\.btn\s*\{[\s\S]*?text-align\s*:\s*start\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.btn {
    display: flex;
    align-items: center;
    /* TODO: Logical text align */
    text-align: left;
}

.icon {
    /* TODO: Make this logical */
    margin-left: 0;
    margin-right: 10px; 
    margin-top: 5px;
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<button class="btn" dir="rtl">
    <span class="icon">Example Icon</span>
    <span>Should be on right in RTL</span>
</button>`
                }
            ]
        },
        {
            id: 'css-unit11-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Vertical Rhythm Shorthand',
            duration: '15 min',
            content: `
## The Mission
Give a section padding on the Top and Bottom only, but leave Left/Right alone.
Old way: \`padding-top: 50px; padding-bottom: 50px;\`.
New way: \`padding-block\`.

**Task:**
Apply padding to both axes logically.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set padding-block to 50px (Top/Bottom equivalent).',
                    completed: false,
                    regex: /\.section\s*\{[\s\S]*?padding-block\s*:\s*50px\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set padding-inline to 20px (Left/Right equivalent).',
                    completed: false,
                    regex: /\.section\s*\{[\s\S]*?padding-inline\s*:\s*20px\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Use margin-inline: auto to center the inner container.',
                    completed: false,
                    regex: /\.container\s*\{[\s\S]*?margin-inline\s*:\s*auto\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.section {
    background: #f0f0f0;
    /* TODO: Add logical padding */

}

.container {
    max-width: 800px;
    /* TODO: Center logically */
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<section class="section">
    <div class="container">Content</div>
</section>`
                }
            ]
        },
        {
            id: 'css-unit11-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Vertical Text Layout',
            duration: '25 min',
            content: `
## The Mission
create a "Sideways" tag for a sale banner.
Use \`writing-mode\` to rotate the text flow.

**Task:**
1.  Set \`writing-mode\` to \`vertical-rl\`.
2.  Observe how \`inline-size\` now controls the *height* visually.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set writing-mode to vertical-rl.',
                    completed: false,
                    regex: /\.tag\s*\{[\s\S]*?writing-mode\s*:\s*vertical-rl\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set inline-size (visual height) to 200px.',
                    completed: false,
                    regex: /\.tag\s*\{[\s\S]*?inline-size\s*:\s*200px\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Set block-size (visual width) to 50px.',
                    completed: false,
                    regex: /\.tag\s*\{[\s\S]*?block-size\s*:\s*50px\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.tag {
    background: red;
    color: white;
    padding: 10px;
    /* TODO: Rotate text flow and size it logically */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="tag">50% OFF</div>`
                }
            ]
        },
        {
            id: 'css-unit11-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Logical Borders',
            duration: '20 min',
            content: `
## The Mission
You want a border on the "Start" of the quote, regardless of language direction.
In English, it's the Left. In Arabic, it's the Right.

**Task:**
Use \`border-inline-start\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set border-inline-start-width to 5px.',
                    completed: false,
                    regex: /blockquote\s*\{[\s\S]*?border-inline-start-width\s*:\s*5px\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set border-inline-start-style to solid.',
                    completed: false,
                    regex: /blockquote\s*\{[\s\S]*?border-inline-start-style\s*:\s*solid\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Set border-inline-start-color to blue.',
                    completed: false,
                    regex: /blockquote\s*\{[\s\S]*?border-inline-start-color\s*:\s*blue\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `blockquote {
    background: #eee;
    padding: 20px;
    /* TODO: Add start border properties separately */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<blockquote>Wise words...</blockquote>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit11-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Logical Thinking',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the logical equivalent of `margin-left` in an LTR website?',
                    options: [
                        'margin-inline-end',
                        'margin-block-start',
                        'margin-inline-start',
                        'margin-left-logical'
                    ],
                    correctIndex: 2,
                    explanation: 'In Left-to-Right languages, the "Start" of the inline axis is the Left.'
                },
                {
                    id: 'q2',
                    question: 'If you set `writing-mode: vertical-rl`, what logical property controls the visual Height?',
                    options: [
                        'height',
                        'block-size',
                        'inline-size',
                        'width'
                    ],
                    correctIndex: 2,
                    explanation: 'The inline axis follows the text flow. In vertical text, lines flow Top-to-Bottom, so inline-size determines the length of that line (which visually looks like height).'
                },
                {
                    id: 'q3',
                    question: 'Which shorthand controls Top and Bottom padding together?',
                    options: [
                        'padding-vertical',
                        'padding-y',
                        'padding-block',
                        'padding-logical'
                    ],
                    correctIndex: 2,
                    explanation: 'padding-block affects the block axis (Start and End).'
                },
                {
                    id: 'q4',
                    question: 'Why are Logical Properties better than Physical Properties?',
                    options: [
                        'They are faster',
                        'They automatically adapt to RTL (Right-to-Left) languages and Writing Modes without code duplication',
                        'They allow you to use emojis in CSS',
                        'They are required by Google'
                    ],
                    correctIndex: 1,
                    explanation: 'They abstract the directionality away, making your layout internationalization-ready by default.'
                },
                {
                    id: 'q5',
                    question: 'Which attribute tells the browser the content is Right-to-Left?',
                    options: [
                        'lang="ar"',
                        'dir="rtl"',
                        'mode="rtl"',
                        'rtl="true"'
                    ],
                    correctIndex: 1,
                    explanation: 'The dir="rtl" attribute on the HTML tag triggers the logical flipping of properties.'
                }
            ]
        }
    ]
};
