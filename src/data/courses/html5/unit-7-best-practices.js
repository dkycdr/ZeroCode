import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7BestPractices = {
    id: 'html5-unit-7',
    title: 'Best Practices - Writing Clean Code',
    description: 'Write professional, maintainable HTML. Master indentation, naming conventions, file organization, and code hygiene.',
    items: [
        {
            id: 'html5-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'The Art of Clean Code',
            duration: '15 min read',
            content: `
# The Art of Clean Code

Writing code that works is easy. Writing code that **others** (and your future self) can read is a skill.

## 1. Indentation & Formatting
HTML structure is a tree. Visually representing this nesting is crucial.

\`\`\`text
 DIRTY vs CLEAN
+-------------------------+    +-------------------------+
| <header><nav>           |    | <header>                |
| <ul><li><a href="#">    |    |   <nav>                 |
| Home</a></li></ul>      |    |     <ul>                |
| </nav></header>         |    |       <li>              |
|                         |    |         <a href="#">... |
+-------------------------+    +-------------------------+
\`\`\`

**Standard practice:** Use **2 spaces** or **4 spaces** per level. This lets you instantly track open and closed tags.

## 2. Naming Conventions: Purpose vs. Visual
When naming CSS classes and IDs, describe **what it is**, not **what it looks like**.

| Bad Name (Visual) | Good Name (Semantic/Purpose) | Why? |
| :--- | :--- | :--- |
| \`id="blue-box"\` | \`id="alert-banner"\` | What if you change the color to red later? |
| \`class="big-text"\` | \`class="hero-title"\` | "Big" is relative. "Hero Title" is structural. |
| \`id="top-right"\` | \`id="user-menu"\` | You might move the menu to the left later. |

## 3. The DRY Principle (Don't Repeat Yourself)
Instead of creating unique IDs for every element that looks the same, use **classes**.

**Bad (Repetitive):**
\`\`\`html
<button id="blue-btn-1">Save</button>
<button id="blue-btn-2">Cancel</button>
\`\`\`

**Good (Reusable):**
\`\`\`html
<button class="btn-primary">Save</button>
<button class="btn-primary">Cancel</button>
\`\`\`

## 4. Case Sensitivity: The Lowercase Standard
HTML5 allows uppercase, but standard Clean Code strictly uses lowercase for **tags and attributes**.

*   ❌ \`<DIV CLASS="CONTAINER">\` (Looks like screaming).
*   ✅ \`<div class="container">\` (Professional).

## 5. Commenting Strategy
Comments should explain **"Why"**, not "What".

**Bad (Noise):**
\`\`\`html
<!-- Opening the header -->
<header>
\`\`\`

**Good (Context):**
\`\`\`html
<!-- Main navigation: Toggles visibility on mobile -->
<nav id="main-nav">
\`\`\`
            `
        },
        {
            id: 'html5-7-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Refactoring Spaghetti Code',
            duration: '20 min',
            content: `
# Refactoring Spaghetti Code

You have inherited a file from a messy developer. It works, but it causes eye pain. Your job is to clean it up step-by-step.

## The Messy Requirements
1.  **Uppercase Tags**: (\`<DIV>\`, \`<SPAN>\`).
2.  **Visual Naming**: (\`id="RED-BOX"\`).
3.  **No Indentation**: Everything is mashed together.

## Your Tasks
Follow the steps below to professionalize the code.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Convert "Screaming Code": Change all uppercase HTML Tags (<DIV>, <SPAN>) to lowercase (<div>, <span>). Content text can remain uppercase.',
                    completed: false,
                    // Regex: Match line start, ensuring no tag starting with <[A-Z] exists anywhere in the string.
                    // The 's' flag isn't defaulted here, so we pattern match across the whole input if possible, or line by line.
                    // A safe check: ensure no occurrence of <[A-Z]
                    regex: /^((?!<[A-Z]).)*$/s,
                    hint: 'Using lowercase tags is the global industry standard for consistency.'
                },
                {
                    id: 2,
                    description: 'Fix ID Naming: Rename id="RED-BOX" to the semantic name id="urgent-alert".',
                    completed: false,
                    regex: /id="urgent-alert"/,
                    hint: 'Change names based on purpose (what it does), not visual traits (what it looks like).'
                },
                {
                    id: 3,
                    description: 'Fix Class Naming: Rename class="big-text" to class="alert-message".',
                    completed: false,
                    regex: /class="alert-message"/,
                    hint: 'Class names should describe the component, e.g., "alert-message" instead of "big-text".'
                },
                {
                    id: 4,
                    description: 'Fix Indentation: Break the code into multiple lines with proper nesting.',
                    completed: false,
                    // Regex checks for multiple newlines followed by spaces/tabs (structure)
                    regex: /(\n\s+<){2,}/,
                    hint: 'Good indentation helps you spot unclosed tags instantly.'
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<body>
<!-- TODO: Refactor this code. Keep the semantic meaning, but fix the style. -->
<!-- Warning: The text content like "SERVER DOWN" can remain uppercase if it's content. -->

<DIV ID="RED-BOX">
<SPAN CLASS="big-text">SERVER DOWN DETECTED</SPAN>
<BUTTON>RETRY CONNECTION</BUTTON>
</DIV>

</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* 
   Note: In a real refactor, you'd update CSS too.
   For this lesson, focus on the HTML structure.
*/
#urgent-alert {
    background-color: #ffcccc;
    border: 1px solid red;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.alert-message {
    font-size: 24px;
    font-weight: bold;
    color: darkred;
    display: block;
    margin-bottom: 10px;
}`
                }
            ]
        },
        {
            id: 'html5-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Clean Code Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why is standard indentation (nesting) important?',
                    options: [
                        'It makes the file size smaller',
                        'It helps visualizes the parent-child relationships',
                        'Browsers cannot read code without it',
                        'It colors the code'
                    ],
                    correctIndex: 1,
                    explanation: 'Indentation visualizes the tree structure, making it obvious which elements are inside others.'
                },
                {
                    id: 'q2',
                    question: 'Which ID name follows the "Purpose-Based" convention best?',
                    options: [
                        'id="top-bar-blue"',
                        'id="header-nav"',
                        'id="font-20px"',
                        'id="box-1"'
                    ],
                    correctIndex: 1,
                    explanation: '"header-nav" describes the function of the element, not its appearance or order.'
                },
                {
                    id: 'q3',
                    question: 'In modern HTML5, why do we use lowercase tags (e.g., <div>)?',
                    options: [
                        'uppercase tags are invalid/error',
                        'It is required by the browser engine',
                        'It is the industry standard for readability and consistency',
                        'uppercase tags are safer'
                    ],
                    correctIndex: 2,
                    explanation: 'While HTML5 is case-insensitive, lowercase is the global industry standard for readability.'
                },
                {
                    id: 'q4',
                    question: 'What is the DRY principle in HTML/CSS?',
                    options: [
                        'Do Repeat Yourself',
                        'Don\'t Repeat Yourself',
                        'Do Read Yourself',
                        'Data Repeat Yield'
                    ],
                    correctIndex: 1,
                    explanation: 'DRY stands for Don\'t Repeat Yourself. Use reusable classes instead of repeating the same styles or IDs.'
                }
            ]
        }
    ]
};
