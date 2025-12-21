import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8Variables = {
    id: 'css3-unit-8',
    title: 'Architecture with Custom Properties',
    description: 'Stop repeating yourself. Build scalable Design Systems using CSS Variables, Theming, and dynamic calculations.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit8-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The :root of Power',
            duration: '15 min read',
            content: `
# Deep Dive: The :root of Power

## The "Why"

In the old days (SASS/LESS), variables were static. Once compiled, \`$color-primary\` was just a hex code \`#000000\`.
CSS Custom Properties (\`--variable\`) are **LIVE**. They exist in the browser DOM.

This means you can update them with JavaScript, or change them based on media queries (Dark Mode), and the entire site repaints instantly.

---

## Machine Logic: Scope and Inheritance

Variables follow the DOM structure.
1.  **Global Scope**: Defined in \`:root\` (the html tag). Available everywhere.
2.  **Local Scope**: Defined in a class (e.g., \`.card\`). Available only inside that card.

**ASCII Visualization**

\`\`\`text
:root { --main-color: blue; }  <-- Global
       |
       |-- <div class="card"> (Inherits blue)
       |
       |-- <div class="alert"> { --main-color: red; } <-- Local Override
              |
              |-- <span> (I am Red)
\`\`\`

---

## Summary

Think of variables as "Design Tokens". Don't use hex codes in your components. Use tokens.
            `
        },
        {
            id: 'css-unit8-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The JavaScript Bridge',
            duration: '15 min read',
            content: `
# Deep Dive: The JavaScript Bridge

## The "Why"

CSS Variables are the most efficient way for JS to talk to CSS.
Instead of updating the style of 100 elements loop-by-loop, you update **one variable** on the container, and CSS handles the propogation.

---

## The Syntax

\`\`\`javascript
// Reading
const color = getComputedStyle(element).getPropertyValue('--my-var');

// Writing (The Superpower)
element.style.setProperty('--mouseX', '100px');
\`\`\`

This allows for high-performance interactions like "Mouse Follower" effects without triggering layout thrashing.

---

## Summary

Move the **State** to CSS Variables. Let the **Logic** stay in JS.
            `
        },
        {
            id: 'css-unit8-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Dynamic Calc() Integration',
            duration: '20 min read',
            content: `
# Deep Dive: Dynamic Calc() Integration

## The "Why"

Variables become weapons when combined with \`calc()\`.
You can store "Raw Integers" in variables and convert them into units on the fly.

---

## The Formula

\`\`\`css
/* Define unitless values */
:root {
    --base-spacing: 4;
}

/* Convert to pixels */
.btn {
    padding: calc(var(--base-spacing) * 1px); /* 4px */
    margin: calc(var(--base-spacing) * 4px); /* 16px */
}
\`\`\`

This allows you to scale an entire interface by changing one number (e.g., changing \`--base-spacing\` from 4 to 8 doubles the spaciousness of the app).

---

## Summary

Store data, calculate values. This is strictly typed CSS.
            `
        },
        {
            id: 'css-unit8-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Fallback Strategies',
            duration: '15 min read',
            content: `
# Deep Dive: Fallback Strategies

## The "Why"

Robust software engineering requires error handling. What if a variable is missing?
The \`var()\` function accepts a second argument: The Fallback.

---

## The Syntax

\`\`\`css
background: var(--brand-color, black);
\`\`\`

If \`--brand-color\` is not defined (or invalid), the browser uses \`black\`.
This is crucial for "Theming Systems" where some themes might not define every single color.

---

## Senior Warning

> **Performance**: Fallbacks are cheap. Use them. It prevents your website from turning transparent or broken white if a script fails to load.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit8-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Global Theme Keys',
            duration: '20 min',
            content: `
## The Mission

Refactor a hardcoded design into a Themed System.
Move the colors from the elements into the \`:root\` scope.

**Task:**
1.  Define \`--primary\` and \`--bg-color\` in \`:root\`.
2.  Use them in the \`body\` and \`.btn\`.

---

## Machine Logic

*   **Syntax**: Must create variables inside a selector block. \`:root\` is best for globals.
*   **Case Sensitive**: \`--Primary\` is not \`--primary\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define --primary (#3b82f6) and --bg-color (#111) in :root.',
                    completed: false,
                    regex: /:root\s*\{[\s\S]*?--primary\s*:\s*#3b82f6\s*;?[\s\S]*?--bg-color\s*:\s*#111\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Apply var(--bg-color) to body background.',
                    completed: false,
                    regex: /body\s*\{[\s\S]*?background-color\s*:\s*var\(\s*--bg-color\s*\)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Apply var(--primary) to .btn background.',
                    completed: false,
                    regex: /\.btn\s*\{[\s\S]*?background-color\s*:\s*var\(\s*--primary\s*\)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Define :root Variables */
:root {
    
}

body {
    /* Use variable */
    color: white;
}

.btn {
    /* Use variable */
    padding: 10px 20px;
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<button class="btn">Themed Button</button>`
                }
            ]
        },
        {
            id: 'css-unit8-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Dark Mode Prep (Scopes)',
            duration: '20 min',
            content: `
## The Mission

Simulate a Dark Mode switch using classes.
When the \`.dark\` class is added to the body, strictly override the variables.

**Task:**
1.  Set default \`--text\` to black.
2.  Inside \`.dark\`, set \`--text\` to white.
3.  Observe how the paragraph automatically updates without changing its own CSS.

---

## Architecture

This is how modern sites work. We don't write:
\`body.dark p { color: white }\`.
We write:
\`p { color: var(--text) }\`.
And we just swap the variable value at the top level.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set default --text to black in :root.',
                    completed: false,
                    regex: /:root\s*\{[\s\S]*?--text\s*:\s*black\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Override --text to white inside .dark selector.',
                    completed: false,
                    regex: /\.dark\s*\{[\s\S]*?--text\s*:\s*white\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `:root {
    /* Default */
}

.dark {
    /* Override */
}

p {
    color: var(--text);
    font-size: 20px;
}
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<body class="dark">
    <p>I should be white text.</p>
</body>`
                }
            ]
        },
        {
            id: 'css-unit8-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Component Tokenization',
            duration: '25 min',
            content: `
## The Mission

Create a configurable "Card Component" where the local spacing can be tweaked without breaking the layout.

**Task:**
1.  Define \`--card-padding\` inside \`.card\`.
2.  Use it for padding.
3.  Create a \`.card-compact\` variant that redefines \`--card-padding\` to be smaller.

---

## Machine Logic

This demonstrates **Local Scope**. The variable is not global. It only exists for the card and its children.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define --card-padding: 20px inside .card.',
                    completed: false,
                    regex: /\.card\s*\{(?=[\s\S]*?--card-padding\s*:\s*20px)(?=[\s\S]*?padding\s*:\s*var\(\s*--card-padding\s*\))[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Override --card-padding: 10px inside .card-compact.',
                    completed: false,
                    regex: /\.card-compact\s*\{[\s\S]*?--card-padding\s*:\s*10px\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.card {
    background: #f0f0f0;
    /* TODO: Define local var and apply it */

}

.card-compact {
    /* TODO: Override local var */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="card">Normal</div>
<div class="card card-compact">Compact</div>`
                }
            ]
        },
        {
            id: 'css-unit8-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Dynamic RGB (Advanced)',
            duration: '30 min',
            content: `
## The Mission

We want to control the **Opacity** of a color variable.
Problem: You cannot write \`rgba(var(--hex-color), 0.5)\`. It fails.

**Solution:** Store the RGB channels separately (e.g., \`255, 0, 0\`) and inject them into \`rgba()\`.

**Task:**
1.  Define \`--main-rgb\`: \`59, 130, 246\` (Blue).
2.  Use it to create a background with 50% opacity: \`rgba(var(--main-rgb), 0.5)\`.

---

## Senior Tip

This is the secret technique used by Tailwind CSS to enable "Text Opacity" utilities.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define --main-rgb with comma-separated channels (no "rgb" wrapper).',
                    completed: false,
                    regex: /:root\s*\{[\s\S]*?--main-rgb\s*:\s*59,\s*130,\s*246\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Use rgba(var(--main-rgb), 0.5) for the .glass background.',
                    completed: false,
                    regex: /\.glass\s*\{[\s\S]*?background\s*:\s*rgba\(\s*var\(\s*--main-rgb\s*\)\s*,\s*0\.5\s*\)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `:root {
    /* TODO: Store raw channels */

}

.glass {
    width: 100px;
    height: 100px;
    /* TODO: Use channels with alpha */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="glass">See through me</div>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit8-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: CSS Architecture',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Where is the best place to define Global Variables?',
                    options: [
                        'body',
                        '*',
                        ':root',
                        'html'
                    ],
                    correctIndex: 2,
                    explanation: ':root matches the document\'s root element (html) but has higher specificity, making it the standard for global variables.'
                },
                {
                    id: 'q2',
                    question: 'How do you correctly reference a variable?',
                    options: [
                        '$var-name',
                        'var(--var-name)',
                        '--var-name',
                        '%var-name%'
                    ],
                    correctIndex: 1,
                    explanation: 'The var() function is required to retrieve the value. The -- prefix defines the custom property name.'
                },
                {
                    id: 'q3',
                    question: 'Can CSS variables be updated by JavaScript?',
                    options: [
                        'No, they are compiled at build time',
                        'Yes, using setProperty()',
                        'Only if using SASS',
                        'Only on page reload'
                    ],
                    correctIndex: 1,
                    explanation: 'CSS Custom Properties are live in the DOM. JS can update them instantly, triggering a repaint.'
                },
                {
                    id: 'q4',
                    question: 'What happens if a variable inside var() is invalid?',
                    options: [
                        'The site crashes',
                        'It causes a syntax error',
                        'It uses the Fallback value (if provided) or Unset',
                        'It defaults to black'
                    ],
                    correctIndex: 2,
                    explanation: 'CSS is resilient. If the var is missing, it looks for the second argument var(--x, fallback). If that is missing, it treats the property as unset.'
                },
                {
                    id: 'q5',
                    question: 'Why do we use variables for colors?',
                    options: [
                        'It is shorter to type',
                        'To allow for Theming (Dark Mode) and consistency',
                        'It renders faster',
                        'Google requires it'
                    ],
                    correctIndex: 1,
                    explanation: 'Variables allow us to switch the entire color scheme of an application by changing a single source of truth, rather than finding-and-replacing hex codes.'
                }
            ]
        }
    ]
};
