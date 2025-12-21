import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Pseudo = {
    id: 'css3-unit-6',
    title: 'Pseudo-Classes & Shadow Elements',
    description: 'DOM Alchemy. Create elements that do not exist in the HTML and manage complex interactive states.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit6-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Generated Content Pipeline',
            duration: '15 min read',
            content: `
# Deep Dive: The Generated Content Pipeline

## The "Why"

Sometimes you need a visual decoration (a bullet point, an icon, a quote mark) that adds **Meaningless Noise** to your clean HTML.

Enter **Pseudo-Elements** (\`::before\` and \`::after\`). These allow you to inject renderable nodes into the DOM via CSS without polluting the markup.

---

## Machine Logic: The Virtual DOM Node

When you write \`.card::before { content: "X"; }\`, the browser actually modifies the DOM Tree in memory.

**ASCII Visualization**

\`\`\`text
[ <div class="card"> ]
      |
      |-- [ ::before ] (Virtual Child 1)
      |
      |-- [ "Text Content" ] (Real Child)
      |
      |-- [ ::after  ] (Virtual Child 2)
\`\`\`

The \`content\` property is **mandatory**. Without it, the virtual node has 0x0 dimensions and isn't rendered.

---

## Summary

Use Pseudo-elements for "Decorations" (Icons, gradients, shapes). Use real HTML elements for "Content" (Text, Images for accessibility).
            `
        },
        {
            id: 'css-unit6-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: State Machines (:hover, :focus, :active)',
            duration: '15 min read',
            content: `
# Deep Dive: State Machines

## The "Why"

A button is not a static object. It is a **State Machine**. It changes appearance based on user interaction.

The order in which you define these states matters because of the **Cascade**.

---

## The LVHA Order

If you get the order wrong, the browser might ignore your styles (e.g., if you define \`:visited\` after \`:hover\`, the hover effect might break on visited links).

1.  \`:link\` (Unvisited)
2.  \`:visited\`
3.  \`:hover\`
4.  \`:active\` (Currently being clicked)

**Mnemonic**: **L**o**V**e **H**ates **A**narchy.

---

## The Accessibility State: :focus-visible

Never remove outline with \`outline: none\`. This creates a keyboard trap for users navigating with Tab.

Instead, use \`:focus-visible\`. This allows the browser to decide:
*   Show ring if user is using Keyboard (Tab).
*   Hide ring if user is using Mouse (Click).

---

## Summary

Think of CSS components as living objects that react to input, not just static paintings.
            `
        },
        {
            id: 'css-unit6-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Structural Math (:nth-child)',
            duration: '20 min read',
            content: `
# Deep Dive: Structural Math (:nth-child)

## The "Why"

Targeting specific items in a list used to require messy classes (\`.odd\`, \`.last\`).
**Structural Pseudo-Classes** allow us to select elements based on their index in the DOM array.

---

## The Formula: An+B

The syntax \`:nth-child(An+B)\` is an algebraic loop.
*   \`A\`: The cycle size.
*   \`n\`: The counter (starts at 0).
*   \`B\`: The offset.

**Examples:**
*   \`2n\` -> 2(0), 2(1), 2(2)... -> 0, 2, 4, 6 (Evens)
*   \`2n+1\` -> 1, 3, 5, 7 (Odds)
*   \`3n\` -> Every 3rd item.

---

## The Traps

\`:nth-child\` looks at the **Index**, not the Type.
If you have \`p:nth-child(1)\` but the first child is an \`h1\`, nothing gets selected!

**Solution**: Use \`:nth-of-type(1)\`. This filters the array by tag name *before* counting.

---

## Summary

Use math to style repeating data (tables, grids) without adding thousands of class names.
            `
        },
        {
            id: 'css-unit6-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Backdrop (:backdrop)',
            duration: '15 min read',
            content: `
# Deep Dive: The Backdrop

## The "Why"

With the introduction of native \`<dialog>\` and Popover API, we gained access to a new layer of the browser: **The Top Layer**.

The \`::backdrop\` pseudo-element sits behind a modal but above the rest of the page.

---

## Machine Logic: The Stacking Context

Standard \`z-index\` wars are messy. The **Top Layer** exists outside the normal DOM hierarchy.
When you open a \`<dialog>\`, the browser promotes it into this special rendering plane.

The \`::backdrop\` is instantly generated to cover the *entire viewport* below the dialog. We use it to create the "dimmed" background effect.

---

## Summary

Stop creating \`<div class="overlay">\`. Use native \`<dialog>\` and styling the \`::backdrop\`.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit6-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The CSS Tooltip',
            duration: '25 min',
            content: `
## The Mission

We need a tooltip that appears when hovering over a button.
**Constraint**: No JavaScript allowed. No extra HTML elements.

**Task:**
1.  Use the \`data-tooltip\` attribute on the button to store the text.
2.  Use \`::after\` to generate the bubble.
3.  Use \`attr(data-tooltip)\` to pull the text from the HTML into the CSS.

---

## Machine Logic

*   **Content Function**: \`content: attr(data-tooltip)\`. This reads the DOM attribute value and paints it.
*   **Positioning**: The Button is \`relative\`, the Pseudo is \`absolute\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set button position relative.',
                    completed: false,
                    regex: /\.tooltip-btn\s*\{[\s\S]*?position\s*:\s*relative\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Configure ::after with content: attr(data-tooltip).',
                    completed: false,
                    regex: /\.tooltip-btn::after\s*\{[\s\S]*?content\s*:\s*attr\(\s*data-tooltip\s*\)\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Show tooltip on hover (opacity: 1).',
                    completed: false,
                    regex: /\.tooltip-btn:hover::after\s*\{[\s\S]*?opacity\s*:\s*1\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.tooltip-btn {
    padding: 10px 20px;
    background: #333;
    color: white;
    /* 1. TODO: Set position relative context */

}

/* 2. TODO: Create the Tooltip */
.tooltip-btn::after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0; /* Hidden by default */
    pointer-events: none;
    /* TODO: content from attribute */

}

/* 3. TODO: Show on hover */
.tooltip-btn:hover::after {

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<button class="tooltip-btn" data-tooltip="I am pure CSS!">Hover Me</button>`
                }
            ]
        },
        {
            id: 'css-unit6-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Zebra Striping (nth-child)',
            duration: '15 min',
            content: `
## The Mission

You have a data table with 100 rows. It's hard to read.
Style every **even** row with a light gray background to improve readability.

**Task:** Use \`:nth-child(even)\`.

---

## Machine Logic

The browser iterates the children.
i=1 (odd), i=2 (even), i=3 (odd)...
It applies the style only when \`i % 2 == 0\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Target every EVEN row (.row) and set background to #f3f3f3.',
                    completed: false,
                    regex: /\.row:nth-child\(\s*even\s*\)\s*\{[\s\S]*?background-color\s*:\s*#f3f3f3\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.row {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

/* TODO: Zebra Stripe the rows */
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="table">
    <div class="row">Row 1</div>
    <div class="row">Row 2 (Should be gray)</div>
    <div class="row">Row 3</div>
    <div class="row">Row 4 (Should be gray)</div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit6-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Interactive Forms (:focus-within)',
            duration: '20 min',
            content: `
## The Mission

Make a form field "glow" when the **Input** is focused.
However, we want to style the **Parent Container** (the input group), not just the input itself.

**Concept**: \`:focus-within\` triggers on a parent whenever *any* of its children has focus.

---

## Use Case

This is famously used by Google Material Design inputs. The border wraps the whole group, including the icon.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'When .input-group contains focus, change border color to blue.',
                    completed: false,
                    regex: /\.input-group:focus-within\s*\{[\s\S]*?border-color\s*:\s*blue\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.input-group {
    border: 2px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    transition: border-color 0.2s;
}

input {
    border: none;
    outline: none;
}

/* TODO: Highlight the GROUP when input is active */
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="input-group">
    <span>🔍</span>
    <input type="text" placeholder="Search...">
</div>`
                }
            ]
        },
        {
            id: 'css-unit6-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Custom Checkbox',
            duration: '25 min',
            content: `
## The Mission

Native browser checkboxes are ugly and hard to style.
We will build a custom one using the **Input Hack**.

**Task**:
1.  Hide the real \`<input type="checkbox">\` (ensure it remains accessible).
2.  Style the \`label::before\` to act as the visual box.
3.  Use the \`:checked + label::before\` selector to change the box color when checked.

---

## Machine Logic

The \`+\` combinator is the "Adjacent Sibling" selector.
It allows the state of the Input (Checked/Unchecked) to affect the styling of the Label next to it.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Hide the .real-checkbox visually (opacity 0, absolute).',
                    completed: false,
                    regex: /\.real-checkbox\s*\{[\s\S]*?opacity\s*:\s*0\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Style label::before as a 20px box.',
                    completed: false,
                    regex: /label::before\s*\{[\s\S]*?width\s*:\s*20px\s*;?[\s\S]*?height\s*:\s*20px\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'When checked, make label::before blue.',
                    completed: false,
                    regex: /\.real-checkbox:checked\s*\+\s*label::before\s*\{[\s\S]*?background-color\s*:\s*blue\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* 1. Hide the ugly default */
.real-checkbox {
    position: absolute;
    /* TODO: hide it */

}

label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

/* 2. Create the custom box */
label::before {
    content: '';
    border: 2px solid #333;
    transition: 0.2s;
    /* TODO: size it */

}

/* 3. React to state */
/* If checkbox is checked, style the label's pseudo element */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<input type="checkbox" id="c1" class="real-checkbox">
<label for="c1">Agree to Terms</label>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Selector logic',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which CSS property is MANDATORY for ::before and ::after to work?',
                    options: [
                        'display',
                        'content',
                        'position',
                        'z-index'
                    ],
                    correctIndex: 1,
                    explanation: 'Without the content property (even if empty string ""), the pseudo-element is not generated by the browser.'
                },
                {
                    id: 'q2',
                    question: 'What is the correct order for link states?',
                    options: [
                        'Hover, Visit, Link, Active',
                        'Link, Visited, Hover, Active',
                        'Active, Hover, Link, Visited',
                        'Link, Hover, Visited, Active'
                    ],
                    correctIndex: 1,
                    explanation: 'LVHA (Love Hates Anarchy): Link, Visited, Hover, Active. This ensures the cascade overrides correctly.'
                },
                {
                    id: 'q3',
                    question: 'What does :nth-child(2n) select?',
                    options: [
                        'The 2nd item only',
                        'All odd items',
                        'All even items',
                        'The last 2 items'
                    ],
                    correctIndex: 2,
                    explanation: '2n implies multiples of 2 (2, 4, 6, 8...). This targets even rows.'
                },
                {
                    id: 'q4',
                    question: 'What is the "Adjacent Sibling" combinator?',
                    options: [
                        '+',
                        '~',
                        '>',
                        'Space'
                    ],
                    correctIndex: 0,
                    explanation: 'The + selector targets the element immediately following the former element.'
                },
                {
                    id: 'q5',
                    question: 'Which pseudo-class detects if a child element has focus?',
                    options: [
                        ':focus',
                        ':active',
                        ':focus-within',
                        ':target'
                    ],
                    correctIndex: 2,
                    explanation: ':focus-within matches an element if the element itself OR any of its descendants has focus.'
                }
            ]
        }
    ]
};
