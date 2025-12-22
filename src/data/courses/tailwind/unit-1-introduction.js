
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Introduction = {
    id: 'tailwind-unit-1',
    title: 'Unit 1: The Utility-First Paradigm',
    description: 'Abandon your preconceptions about "semantic class names". Learn to build modern, constraint-based UIs directly in your markup using the Tailwind ecosystem.',
    items: [
        // 1. Deep Dive: CSS Methodology
        {
            id: 'tailwind-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Utility-First Architecture 🏗️',
            duration: '15 min read',
            content: `
# Deep Dive: Utility-First Architecture 🏗️

## 1. The "Traditional" Problem
For years, we were taught to separate concerns.
*   **HTML**: Structure (\`<div class="card">\`)
*   **CSS**: Style (\`.card { ... }\`)

**The Reality:**
As projects grow, "semantic" CSS becomes a nightmare.
1.  **Naming things is hard**: \`card-inner-wrapper-bottom-left\`.
2.  **Append-only CSS**: You are afraid to delete CSS because you don't know what it might break.
3.  **Dead Code**: Huge CSS bundles full of unused styles.

## 2. The Tailwind Solution
Tailwind takes a different approach. Instead of writing CSS, you **apply** pre-existing classes directly to your HTML.

### Comparison

| Method | Code |
| :--- | :--- |
| **Traditional** | \`<div class="notification error">\` + 10 lines of CSS in another file. |
| **Inline Styles** | \`<div style="padding: 10px; background: red; ...">\` (Hard to maintain, no media queries). |
| **Tailwind** | \`<div class="p-4 bg-red-500 rounded-lg shadow-md">\` |

## 3. Benefits of Utility Classes
1.  **No Context Switching**: You don't have to tab back and forth between HTML and CSS files.
2.  **Smaller Bundle Sizes**: Tailwind automatically removes unused CSS (Tree Shaking).
3.  **Consistency**: You can't just pick "any" color. You must pick from the Design System (\`bg-blue-500\`, \`bg-blue-600\`).

> [!IMPORTANT]
> Tailwind is NOT inline styles. Utility classes allow for **Media Queries** (\`md:p-4\`), **Pseudo-states** (\`hover:bg-blue-600\`), and use design tokens from a centralized config.

## 4. The Mental Model
Think of Tailwind like **LEGO**.
You have a bucket of standard bricks (classes). You can build *anything* by combining them, but the individual bricks are immutable.
            `
        },
        // 2. Deep Dive: The Design System (Spacing & Colors)
        {
            id: 'tailwind-1-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Constraint System 📏',
            duration: '20 min read',
            content: `
# Deep Dive: The Constraint System 📏

## 1. The Magic Number is 4
Tailwind's default spacing scale is based on \`rem\` units.
**1 unit = 0.25rem = 4px.**

### The Spacing Scale
| Class | Math | Pixels | Use Case |
| :--- | :--- | :--- | :--- |
| \`p-1\` | 1 × 4 | **4px** | Micro spacing |
| \`p-2\` | 2 × 4 | **8px** | Icon padding, tight groups |
| \`p-4\` | 4 × 4 | **16px** | Standard container padding |
| \`p-6\` | 6 × 4 | **24px** | Spacious cards |
| \`p-8\` | 8 × 4 | **32px** | Section padding |

**Why?**
Using a scale prevents "Magic Numbers". You won't have one button with \`13px\` padding and another with \`15px\`. Everything aligns to the grid.

## 2. The Color Palette
Tailwind provides expertly crafted color scales.
Each color has a numeric grade from **50** (lightest) to **950** (darkest).

*   \`bg-sky-50\`: Subtle background tint.
*   \`bg-sky-500\`: Standard brand color.
*   \`bg-sky-900\`: High contrast text.

\`\`\`html
<button class="bg-indigo-500 hover:bg-indigo-600 text-white">
  Commit Changes
</button>
\`\`\`

## 3. Typography
No more \`font-size: 18px\`.
*   \`text-xs\` (12px)
*   \`text-sm\` (14px)
*   \`text-base\` (16px) - Default
*   \`text-lg\` (18px)
*   \`text-xl\` (20px)

> [!TIP]
> **Line Height (Leading)** is automatically paired with font size in Tailwind 2.0+, but you can override it: \`text-lg leading-relaxed\`.
            `
        },
        // 3. Deep Dive: The JIT Engine
        {
            id: 'tailwind-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Just-In-Time (JIT) ⚡',
            duration: '15 min read',
            content: `
# Deep Dive: Just-In-Time (JIT) ⚡

## 1. How it works
Historically, CSS frameworks like Bootstrap gave you a massive 200KB CSS file with *every possible class*.
Tailwind's **JIT Engine** watches your HTML files.
When you type \`text-blue-500\`, it **instantly generates** that specific CSS rule and injects it.

## 2. Arbitrary Values
Because the CSS is generated on the fly, you can "break out" of the system when necessary using square brackets.

*   Need a very specific width? \`w-[342px]\`
*   Need a specific brand hex code? \`bg-[#1da1f2]\`

\`\`\`html
<!-- Specific Twitter Blue -->
<button class="bg-[#1da1f2] text-white">
  Tweet
</button>
\`\`\`

> [!WARNING]
> Use arbitrary values sparingly! If you reuse \`bg-[#1da1f2]\` everywhere, you should probably add it to your \`tailwind.config.js\` theme instead.

## 3. Dynamic Class Limitations
Tailwind scans your source code for *full class names*.
**This will NOT work:**
\`\`\`javascript
// BAD ❌
const color = "red";
<div className={\`bg-\${color}-500\`} />
\`\`\`
Tailwind cannot verify that \`bg-red-500\` is used.
**Instead, map full names:**
\`\`\`javascript
// GOOD ✅
const colors = {
  red: "bg-red-500",
  blue: "bg-blue-500"
}
<div className={colors[color]} />
\`\`\`
            `
        },
        // 4. Deep Dive: Editor Setup
        {
            id: 'tailwind-1-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Power User Setup 💻',
            duration: '10 min read',
            content: `
# Deep Dive: Power User Setup 💻

## 1. VS Code Extension
To write Tailwind effectively, you **MUST** install the official **Tailwind CSS IntelliSense** extension.
It provides:
1.  **Autocomplete**: Type \`flex j\` -> suggests \`justify-center\`, \`justify-between\`, etc.
2.  **Linting**: Warns about css syntax errors.
3.  **Hover Preview**: Hover over \`w-64\` to see \`width: 16rem; /* 256px */\`.

## 2. Prettier Sorting
There is an official Prettier plugin: \`prettier-plugin-tailwindcss\`.
It automatically sorts your classes in a standard order (Layout -> Box Model -> Typography -> Visuals).

**Before Save:**
\`\`\`html
<div class="p-4 text-center border bg-white flex">
\`\`\`

**After Save:**
\`\`\`html
<div class="flex border bg-white p-4 text-center">
\`\`\`
This reduces cognitive load when scanning code.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        // Lab 1: Hello Tailwind
        {
            id: 'tailwind-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Hello Tailwind',
            duration: '20 min',
            content: `
# Lab 1: Hello Tailwind

Let's break the ice. You are building a simple "Welcome Banner".
We will use background colors, text styling, and basic spacing.

## The Mission
1.  **Container**: Create a \`div\` with \`bg-indigo-600\` and a generous \`p-10\` padding.
2.  **Typography**: Inside it, add an \`h1\` that is \`text-4xl\`, \`font-bold\`, and \`text-white\`.
3.  **Subtitle**: Add a \`p\` tag below with \`text-indigo-200\` (a lighter shade).

## Design Preview
The banner should look bold and professional vs the default unstyled Times New Roman.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Container: Create a wrapper <div class="bg-indigo-600 p-10">.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bbg-indigo-600\b)(?=.*\bp-10\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Heading: Add <h1 class="text-4xl font-bold text-white">.',
                    completed: false,
                    regex: /<h1[^>]*class=["'](?=.*\btext-4xl\b)(?=.*\bfont-bold\b)(?=.*\btext-white\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Subtitle: Add <p class="text-indigo-200">.',
                    completed: false,
                    regex: /<p[^>]*class=["'](?=.*\btext-indigo-200\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Task 1: The Container -->
    <div class="">
    
        <!-- Task 2: The Heading -->
        <h1 class="">Welcome to ZeroCode</h1>

        <!-- Task 3: The Subtitle -->
        <p class="">Mastering the modern web.</p>
        
    </div>
</body>
</html>`
                }
            ]
        },
        // Lab 2: Typography Masterclass
        {
            id: 'tailwind-1-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Typography Masterclass',
            duration: '25 min',
            content: `
# Lab 2: Typography Masterclass

Typography is 90% of web design. Tailwind gives you granular control over size, weight, leading (line-height), and tracking (letter-spacing).

## The Mission
Format a Blog Post Header.
1.  **Tag**: A small "Category" badge. \`text-xs\`, \`font-bold\`, \`tracking-widest\`, \`uppercase\`, \`text-gray-500\`.
2.  **Title**: A massive headline. \`text-5xl\`, \`font-black\` (weight 900), \`text-gray-900\`.
3.  **Lead**: An introductory paragraph. \`text-xl\`, \`text-gray-600\`, \`leading-relaxed\`.

## Visualization
*   CATEGORY
*   **The Future of AI**
*   This is the lead paragraph that introduces the article...
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Category Tag: text-xs font-bold tracking-widest uppercase text-gray-500.',
                    completed: false,
                    regex: /<span[^>]*class=["'](?=.*\btext-xs\b)(?=.*\bfont-bold\b)(?=.*\btracking-widest\b)(?=.*\buppercase\b)(?=.*\btext-gray-500\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Headline: text-5xl font-black text-gray-900.',
                    completed: false,
                    regex: /<h1[^>]*class=["'](?=.*\btext-5xl\b)(?=.*\bfont-black\b)(?=.*\btext-gray-900\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Lead Text: text-xl text-gray-600 leading-relaxed.',
                    completed: false,
                    regex: /<p[^>]*class=["'](?=.*\btext-xl\b)(?=.*\btext-gray-600\b)(?=.*\bleading-relaxed\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-10 font-sans">
    
    <article class="max-w-2xl mx-auto">
        <!-- Task 1: Category Tag -->
        <span class="">Engineering</span>

        <!-- Task 2: Headline -->
        <h1 class="mt-2 mb-6">The Rise of Generative UI</h1>

        <!-- Task 3: Lead Paragraph -->
        <p class="">
            As LLMs become more integrated into our workflows, the way we construct user interfaces is fundamentally shifting.
        </p>
    </article>

</body>
</html>`
                }
            ]
        },
        // Lab 3: The Box Model
        {
            id: 'tailwind-1-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Box Model',
            duration: '25 min',
            content: `
# Lab 3: The Box Model

Control \`margin\`, \`padding\`, \`border\`, and \`radius\` with precision.

## The Mission
Create a "Call to Action" (CTA) card.
1.  **Card Body**: \`bg-white\`, \`rounded-xl\` (extra large radius), \`p-8\`, \`shadow-lg\`, \`border border-gray-100\`.
2.  **Constraint**: Use \`max-w-sm\` to prevent the card from stretching full width. \`mx-auto\` to center it horizontally.

## Concepts
*   \`max-w-sm\`: Sets \`max-width: 24rem\`.
*   \`mx-auto\`: Sets \`margin-left: auto; margin-right: auto\`.
*   \`border\`: Adds a 1px border.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Layout: Add max-w-sm mx-auto.',
                    completed: false,
                    regex: /class=["'](?=.*\bmax-w-sm\b)(?=.*\bmx-auto\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Surface: Add bg-white rounded-xl shadow-lg border border-gray-100.',
                    completed: false,
                    regex: /class=["'](?=.*\bbg-white\b)(?=.*\brounded-xl\b)(?=.*\bshadow-lg\b)(?=.*\bborder\b)(?=.*\bborder-gray-100\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Spacing: Add p-8.',
                    completed: false,
                    regex: /class=["'](?=.*\bp-8\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-20">

    <!-- Task 1, 2, 3: Style this wrapper div -->
    <div class="">
        <h2 class="text-xl font-bold mb-2">Upgrade to Pro</h2>
        <p class="text-gray-600 mb-4">Unlock all features including analytics.</p>
        <button class="bg-black text-white px-4 py-2 rounded-lg w-full">Get Started</button>
    </div>

</body>
</html>`
                }
            ]
        },
        // Lab 4: Composition (Pills & Badges)
        {
            id: 'tailwind-1-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Component Composition',
            duration: '30 min',
            content: `
# Lab 4: Component Composition

Let's build a classic UI element: The "User Pill" or "Status Badge".
We want a rounded element that contains an Avatar and a Name.

## The Mission
1.  **The Pill**: \`inline-flex\`, \`items-center\`, \`bg-white\`, \`rounded-full\`, \`p-1\` (padding 1), \`pr-4\` (padding-right 4 for text space), \`shadow\`.
2.  **The Avatar**: \`w-8\`, \`h-8\`, \`rounded-full\`, \`bg-blue-500\`.
3.  **The Text**: \`ml-3\`, \`font-medium\`, \`text-gray-700\`.

## Why "inline-flex"?
Because standard \`flex\` is block-level (full width). \`inline-flex\` lets the element shrink to wrap its content.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Pill Container: inline-flex items-center bg-white rounded-full p-1 pr-4 shadow.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\binline-flex\b)(?=.*\bitems-center\b)(?=.*\bbg-white\b)(?=.*\brounded-full\b)(?=.*\bp-1\b)(?=.*\bpr-4\b)(?=.*\bshadow\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Avatar: w-8 h-8 rounded-full bg-blue-500.',
                    completed: false,
                    regex: /<img[^>]*class=["'](?=.*\bw-8\b)(?=.*\bh-8\b)(?=.*\brounded-full\b)(?=.*\bbg-blue-500\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Text: ml-3 font-medium text-gray-700.',
                    completed: false,
                    regex: /<span[^>]*class=["'](?=.*\bml-3\b)(?=.*\bfont-medium\b)(?=.*\btext-gray-700\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-10 bg-gray-100">

    <!-- Task 1: The Pill Wrapper -->
    <div class="">
        
        <!-- Task 2: Avatar Image (using a placeholder src) -->
        <img 
            src="https://avatars.githubusercontent.com/u/1?v=4" 
            alt="User" 
            class=""
        >
        
        <!-- Task 3: Name -->
        <span class="">
            Mojombo
        </span>
        
    </div>

</body>
</html>`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'tailwind-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 1 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the default pixel value of padding "p-4"?',
                    options: [
                        '4px',
                        '8px',
                        '16px',
                        '12px'
                    ],
                    correctIndex: 2,
                    explanation: 'Tailwind spacing scale is 4px per unit. 4 * 4px = 16px (1rem).'
                },
                {
                    id: 'q2',
                    question: 'How do you apply a class layout with Flexbox?',
                    options: [
                        'display-flex',
                        'flex',
                        'flexbox',
                        'layout-flex'
                    ],
                    correctIndex: 1,
                    explanation: 'The class `flex` sets `display: flex`. Additional utilities like `flex-col` or `justify-center` control behavior.'
                },
                {
                    id: 'q3',
                    question: 'What happens to unused Tailwind classes in production?',
                    options: [
                        'They remain in the bundle',
                        'They are tree-shaken (removed)',
                        'They are hidden via CSS',
                        'They cause errors'
                    ],
                    correctIndex: 1,
                    explanation: 'The JIT engine scans your HTML and only generates the CSS for the classes you actually used.'
                },
                {
                    id: 'q4',
                    question: 'Which class makes an element completely round (circle)?',
                    options: [
                        'radius-full',
                        'circle',
                        'rounded-full',
                        'round-lg'
                    ],
                    correctIndex: 2,
                    explanation: '`rounded-full` applies a large border-radius (9999px), making square elements perfect circles.'
                },
                {
                    id: 'q5',
                    question: 'How would you write a custom width of 500px using arbitrary values?',
                    options: [
                        'w-500',
                        'w-500px',
                        'w-[500px]',
                        'width-[500px]'
                    ],
                    correctIndex: 2,
                    explanation: 'Square brackets `[]` allow you to break out of the design system and apply arbitrary CSS values on the fly.'
                }
            ]
        }
    ]
};
