import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9Architecture = {
    id: 'css3-unit-9',
    title: 'Scalable Architecture: BEM & Methodologies',
    description: 'Stop writing messy CSS. Learn the strict naming conventions used by Yandex, Google, and Airbnb to scale to millions of lines of code.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit9-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Global Scope Crisis',
            duration: '15 min read',
            content: `
# Deep Dive: The Global Scope Crisis

## The "Why"

CSS has a fatal design flaw: **Everything is Global**.
If you write \`.button { color: red }\` in your sidebar file, it will accidentally turn the buttons in your footer red too.

This is "Specificity Wars". As a project grows, developers start adding \`!important\` just to win the war. This is the **Death Spiral**.

---

## The Solution: Naming Conventions

Since CSS doesn't have "Modules" (natively, historically), we must simulate scope using **Strict Naming Conventions**.

The industry standard is **BEM** (Block Element Modifier).
It looks ugly (\`card__title--active\`), but it is mathematically scoped.

---

## Machine Logic

*   **Block**: The component (\`card\`).
*   **Element**: A child inside it (\`card__title\`).
*   **Modifier**: A variation (\`card--dark\`).

By using BEM, we flatten Specificity to \`0-1-0\` for everything. No more wars.
            `
        },
        {
            id: 'css-unit9-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: BEM Syntax Deep Dive',
            duration: '20 min read',
            content: `
# Deep Dive: BEM Syntax Deep Dive

## The Formula

\`\`\`css
/* Block */
.btn {}

/* Element (Double Underscore) */
.btn__icon {} 
.btn__text {}

/* Modifier (Double Dash) */
.btn--primary {} 
.btn--disabled {}
\`\`\`

---

## The Rules

1.  **No Grandchildren**: Do not write \`.card__header__title\`. Just use \`.card__title\`. The DOM structure doesn't matter, only the "Block" context matter.
2.  **Element Dependent**: An Element cannot exist without its Block. You can't have \`__icon\` floating alone.
3.  **Modifiers aren't stand-alone**: \`.btn--primary\` extends \`.btn\`. You usually need both classes on the HTML: \`<button class="btn btn--primary">\`.

---

## Summary

BEM forces you to think in components, not just "styling tags".
            `
        },
        {
            id: 'css-unit9-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Utility vs Component',
            duration: '15 min read',
            content: `
# Deep Dive: Utility vs Component

## The "Why"

There are two religions in CSS:
1.  **Semantic (BEM)**: \`.profile-card\` describes *what it is*.
2.  **Functional (Tailwind/Utility)**: \`.bg-blue-500\` describes *what it does*.

---

## When to use which?

**Use Semantics (BEM)** when building a Design System or a reusable molecule (e.g., a complex DatePicker).
**Use Utilities** for layout adjustments (margins, padding) or one-off text colors.

The Best architecture is usually a **Hybrid**.
\`<div class="card mb-4">\`
(Component for look, Utility for spacing).

            `
        },
        {
            id: 'css-unit9-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: 7-1 Folder Structure',
            duration: '15 min read',
            content: `
# Deep Dive: 7-1 Folder Structure

## The "Why"

You cannot put 10,000 lines of code in one file. The SASS 7-1 pattern is the standard file organization method.

---

## The Folders

1.  **Abstracts/**: Variables, Mixins (No output CSS).
2.  **Vendors/**: Bootstrap, jQueryUI (3rd party).
3.  **Base/**: Reset, Typography, HTML tags.
4.  **Layout/**: Header, Footer, Grid.
5.  **Components/**: Buttons, Cards, Forms (The bulk of the work).
6.  **Pages/**: Home, About (Specific overrides).
7.  **Themes/**: Dark, Light.

Then a single \`main.css\` imports them all.

---

## Summary

Organization is not about code; it's about cognitive load. I want to find the Button CSS in 2 seconds, not 2 minutes.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit9-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Refactoring to BEM',
            duration: '25 min',
            content: `
## The Mission

The previous intern wrote messy, nested CSS: \`.nav ul li a\`.
This is slow and brittle. Refactor it to strict BEM.

**Task:**
1.  Block: \`.nav\`
2.  Element: \`.nav__item\`
3.  Element: \`.nav__link\`

---

## Machine Logic

*   **Bad**: \`.nav ul\` (Dependent on HTML structure).
*   **Good**: \`.nav__list\` (Independent of structure. You could change \`ul\` to \`div\` and it still works).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Style .nav (Block) with display flex.',
                    completed: false,
                    regex: /\.nav\s*\{[\s\S]*?display\s*:\s*flex\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Style .nav__link (Element) with red color. No Descendant selectors!',
                    completed: false,
                    regex: /\.nav__link\s*\{[\s\S]*?color\s*:\s*red\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* Old Messy Code (Don't do this) */
/* .nav ul li a { color: red; } */

/* TODO: Refactor to BEM */
.nav {
    
}

/* The Link Element */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<nav class="nav">
    <ul class="nav__list">
        <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
    </ul>
</nav>`
                }
            ]
        },
        {
            id: 'css-unit9-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: BEM Modifiers',
            duration: '20 min',
            content: `
## The Mission

We have a standard \`.btn\`.
We need a "Danger" version and a "Small" version.

**Task:**
1.  Create \`.btn--danger\` (Red background).
2.  Create \`.btn--small\` (Smaller padding).

**Rule**: The modifier class ONLY changes the specific properties it needs to (delta). It relies on the base class for the rest.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create .btn--danger with background: red.',
                    completed: false,
                    regex: /\.btn--danger\s*\{[\s\S]*?background\s*:\s*red\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Create .btn--small with padding: 5px.',
                    completed: false,
                    regex: /\.btn--small\s*\{[\s\S]*?padding\s*:\s*5px\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.btn {
    padding: 10px 20px;
    background: blue;
    color: white;
    border-radius: 4px;
}

/* TODO: Modifiers */
.btn--danger {

}

.btn--small {

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<button class="btn btn--danger btn--small">Delete</button>`
                }
            ]
        },
        {
            id: 'css-unit9-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Media Object',
            duration: '25 min',
            content: `
## The Mission

The "Media Object" is the most famous CSS pattern (Image on left, Text on right).
Build it using BEM to ensure the image and text are coupled correctly.

**Structure**:
*   \`.media\` (Block)
*   \`.media__img\` (Element)
*   \`.media__body\` (Element)

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set .media to display flex and gap 10px.',
                    completed: false,
                    regex: /\.media\s*\{[\s\S]*?display\s*:\s*flex\s*;?[\s\S]*?gap\s*:\s*10px\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Make .media__body take remaining space (flex: 1).',
                    completed: false,
                    regex: /\.media__body\s*\{[\s\S]*?flex\s*:\s*1\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Build the Media Object */

.media {

}

.media__img {
    width: 64px;
    height: 64px;
    background: #ccc;
}

.media__body {

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="media">
    <div class="media__img"></div>
    <div class="media__body">
        <h3>Heading</h3>
        <p>Content goes here...</p>
    </div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit9-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Scoping with Attributes (Data-*)',
            duration: '20 min',
            content: `
## The Mission

Sometimes BEM is too verbose. Modern architects often use \`data-\` attributes for state instead of double-dash modifiers.

**Task:**
Refactor \`.btn--loading\` to \`.btn[data-state="loading"]\`.

This allows JavaScript to just set the data attribute, which is cleaner than removing/adding classes.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Select .btn with data-state="loading" attribute.',
                    completed: false,
                    regex: /\.btn\[\s*data-state\s*=\s*['"]loading['"]\s*\]\s*\{[\s\S]*?opacity\s*:\s*0\.5\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.btn {
    background: blue;
}

/* TODO: Target data-state="loading" */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<button class="btn" data-state="loading">Submitting...</button>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit9-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Architecture',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does BEM stand for?',
                    options: [
                        'Basic Element Manipulation',
                        'Block Element Modifier',
                        'Bold Emphasis Main',
                        'Body Element Main'
                    ],
                    correctIndex: 1,
                    explanation: 'BEM is the standard naming convention for creating strict scope in CSS.'
                },
                {
                    id: 'q2',
                    question: 'Which is a valid BEM Element selector?',
                    options: [
                        '.card-title',
                        '.card__title',
                        '.card--title',
                        '.card_title'
                    ],
                    correctIndex: 1,
                    explanation: 'Elements are separated by two underscores (__).'
                },
                {
                    id: 'q3',
                    question: 'Why do we avoid ID selectors (#header) in CSS Architecture?',
                    options: [
                        'They are too slow',
                        'They are too specific (High Specificity) and hard to override',
                        'They are deprecated',
                        'They cannot use colors'
                    ],
                    correctIndex: 1,
                    explanation: 'IDs have a specificity of 1-0-0. To override them, you need another ID or !important, leading to the specificity wars.'
                },
                {
                    id: 'q4',
                    question: 'What is the "7-1 Pattern"?',
                    options: [
                        'A grid layout technique',
                        'A folder structure for organizing SASS/CSS files',
                        'A font size ratio',
                        'A color palettes rule'
                    ],
                    correctIndex: 1,
                    explanation: 'The 7-1 pattern divides CSS into 7 folders (Abstracts, Base, Components...) and 1 main file.'
                },
                {
                    id: 'q5',
                    question: 'When should you use !important?',
                    options: [
                        'Whenever a style is not applying',
                        'To force a utility class (like .hidden) to always work',
                        'In every selector',
                        'Never, it is illegal'
                    ],
                    correctIndex: 1,
                    explanation: '!important is a nuclear weapon. It should only be used for utility classes that MUST succeed (like display: none), never for component styling.'
                }
            ]
        }
    ]
};
