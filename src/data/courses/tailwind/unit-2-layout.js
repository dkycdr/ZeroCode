
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Layout = {
    id: 'tailwind-unit-2',
    title: 'Unit 2: The Layout Engine',
    description: 'Master the art of placing things on the screen. From Flexbox alignment to complex Grids and absolute positioning.',
    items: [
        // 1. Deep Dive: Flexbox
        {
            id: 'tailwind-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Flexbox Architecture 🧩',
            duration: '20 min read',
            content: `
# Deep Dive: Flexbox Architecture 🧩

## 1. The Two Axes
Flexbox creates a 1D layout context. You must understand the two axes:
1.  **Main Axis**: Defined by \`flex-direction\`.
2.  **Cross Axis**: Perpendicular to Main Axis.

### The Axis Swap
| Class | Main Axis | Cross Axis |
| :--- | :--- | :--- |
| \`flex-row\` (Default) | Horizontal (Left → Right) | Vertical (Top ↓ Bottom) |
| \`flex-col\` | Vertical (Top ↓ Bottom) | Horizontal (Left → Right) |

## 2. Alignment Utilities

### Main Axis (\`justify-*\`)
Controls distribution of space along the main line.
*   \`justify-start\`: Pack to start.
*   \`justify-center\`: Pack to center.
*   \`justify-between\`: Push first/last items to edges.
*   \`justify-end\`: Pack to end.

### Cross Axis (\`items-*\`)
Controls alignment perpendicular to the flow.
*   \`items-center\`: Center vertically (in a row).
*   \`items-start\`: Align to top.
*   \`items-stretch\`: Stretch to fill container height (Default).

## 3. Nesting Flexboxes
Real layouts usually involve nested flex containers.
*   **Outer**: Centered Page (\`flex justify-center\`).
*   **Inner**: Card (\`flex-col\`).
*   **Inner-Inner**: Card Footer (\`flex-row justify-between\`).

> [!TIP]
> Use \`gap-x-4\` and \`gap-y-4\` to control spacing between flex items without using margins on the items themselves.
            `
        },
        // 2. Deep Dive: CSS Grid
        {
            id: 'tailwind-2-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Grid System 🕸️',
            duration: '15 min read',
            content: `
# Deep Dive: The Grid System 🕸️

## 1. Explicit Grids
Unlike Bootstrap's 12-column system where you put classes on *children* (\`col-6\`), Tailwind puts the grid definition on the *parent*.

\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <!-- These will automatically take up 1/3 width -->
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4 (Wraps to next row)</div>
</div>
\`\`\`

## 2. Spanning Columns
Sometimes you want one item to be wider.
*   \`col-span-2\`: Take up 2 slots.
*   \`col-span-full\`: Take up the whole row.

## 3. Subgrid & Auto-Fit
Tailwind supports advanced grid features.
*   \`grid-flow-col\`: Switch to column-first flow.
*   \`auto-cols-max\`: Size columns based on content.

> [!NOTE]
> Grid is perfect for **2D layouts** (rows AND columns), while Flexbox is best for **1D layouts** (rows OR columns). However, 90% of UI components can be built with Flexbox.
            `
        },
        // 3. Deep Dive: Responsive Design
        {
            id: 'tailwind-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Mobile-First Strategy 📱',
            duration: '20 min read',
            content: `
# Deep Dive: Mobile-First Strategy 📱

## 1. The Golden Rule
**Unprefixed classes are for MOBILE.**
Prefixes apply to that breakpoint **and larger**.

## 2. The Breakpoints
| Prefix | Min-Width | Device |
| :--- | :--- | :--- |
| \`sm:\` | 640px | Large Phones |
| \`md:\` | 768px | Tablets (iPad) |
| \`lg:\` | 1024px | Small Laptops |
| \`xl:\` | 1280px | Desktops |
| \`2xl:\` | 1536px | Large Monitors |

## 3. Common Mistake: " Desktop First"
User code:
\`\`\`html
<!-- WRONG: Trying to "undo" desktop styles on mobile -->
<div class="flex-row sm:flex-col">...</div>
\`\`\`
This assumes "Desktop is default". In Tailwind, "Mobile is default".
**Correct:**
\`\`\`html
<!-- Start with col (mobile), Switch to row (tablet+) -->
<div class="flex flex-col md:flex-row">...</div>
\`\`\`

## 4. Hiding Elements
How to show a Hamburger menu on mobile but a Full menu on Desktop?
*   Hamburger: \`block md:hidden\` (Visible by default, Hidden on MD+).
*   Full Menu: \`hidden md:block\` (Hidden by default, Visible on MD+).
            `
        },
        // 4. Deep Dive: Positioning
        {
            id: 'tailwind-2-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Absolute & Relative 📍',
            duration: '15 min read',
            content: `
# Deep Dive: Absolute & Relative 📍

## 1. Creating a Context
To position an element absolutely *inside* a container, the container needs \`relative\`.
If you forget this, the element will position itself relative to the \`body\`.

\`\`\`html
<div class="relative w-64 h-64 bg-gray-200">
    <div class="absolute top-0 right-0 p-2 bg-red-500">
        New!
    </div>
</div>
\`\`\`

## 2. Insets
Instead of \`top: 0; left: 0; right: 0; bottom: 0;\`, use:
**\`inset-0\`**.

## 3. Z-Index
Control the stack order.
*   \`z-0\` (Default)
*   \`z-10\`, \`z-20\`, ..., \`z-50\`.
*   \`z-auto\`.

> [!WARNING]
> \`z-index\` only works on positioned elements (relative, absolute, fixed, sticky). It does nothing on static elements.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        // Lab 1: Flexbox Navigation
        {
            id: 'tailwind-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Flexbox Navigation',
            duration: '25 min',
            content: `
# Lab 1: Flexbox Navigation

Build a classic "Space Between" navbar.
Logo on the Left. Links in the Center. Login Button on the Right.

## The Mission
1.  **Structure**: A \`nav\` container with \`flex\`, \`items-center\`, \`justify-between\`, \`p-4\`.
2.  **Logo**: Bold text with \`text-xl\`.
3.  **Links**: A \`div\` containing links with \`gap-4\`. Note: You need \`flex\` on this inner div too!
4.  **Button**: Standard blue button.

## Layout Analysis
\`\`\`text
[ Logo ] <--- justify-between ---> [ Links ] <--- justify-between ---> [ Button ]
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Container: flex justify-between items-center p-4 bg-white shadow.',
                    completed: false,
                    regex: /<nav[^>]*class=["'](?=.*\bflex\b)(?=.*\bjustify-between\b)(?=.*\bitems-center\b)(?=.*\bp-4\b)(?=.*\bbg-white\b)(?=.*\bshadow\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Links Group: flex gap-6 text-gray-600.',
                    completed: false,
                    regex: /<ul[^>]*class=["'](?=.*\bflex\b)(?=.*\bgap-6\b)(?=.*\btext-gray-600\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Button: bg-blue-600 text-white px-4 py-2 rounded.',
                    completed: false,
                    regex: /<button[^>]*class=["'](?=.*\bbg-blue-600\b)(?=.*\btext-white\b)(?=.*\bpx-4\b)(?=.*\bpy-2\b)(?=.*\brounded\b)[^"']*["']/
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
<body class="bg-gray-100">

    <!-- Task 1: Main Container -->
    <nav class="">
        
        <div class="font-bold text-xl">ZeroCode</div>

        <!-- Task 2: Links Container -->
        <ul class="">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
        </ul>

        <!-- Task 3: CTA Button -->
        <button class="">Sign In</button>

    </nav>

</body>
</html>`
                }
            ]
        },
        // Lab 2: Responsive Grid
        {
            id: 'tailwind-2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Responsive Grid',
            duration: '25 min',
            content: `
# Lab 2: Responsive Product Grid

Build a grid that adapts to the device width.
*   **Mobile**: 1 column.
*   **Tablet**: 2 columns.
*   **Desktop**: 3 columns.

## The Mission
1.  **Grid**: \`grid\` \`grid-cols-1\`.
2.  **Breakpoints**: \`md:grid-cols-2\`, \`lg:grid-cols-3\`.
3.  **Gap**: \`gap-6\`.

## Visualization
*Mobile*
[ Card ]
[ Card ]

*Tablet*
[ Card ] [ Card ]
[ Card ] [ Card ]
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Mobile Base: grid grid-cols-1 gap-6.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bgrid\b)(?=.*\bgrid-cols-1\b)(?=.*\bgap-6\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Tablet: Add md:grid-cols-2.',
                    completed: false,
                    regex: /class=["'](?=.*\bmd:grid-cols-2\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Desktop: Add lg:grid-cols-3.',
                    completed: false,
                    regex: /class=["'](?=.*\blg:grid-cols-3\b)[^"']*["']/
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
<body class="p-10">

    <h1 class="text-2xl font-bold mb-6">Our Products</h1>

    <!-- Task 1, 2, 3: Configure the Grid -->
    <div class="">
        <!-- Card 1 -->
        <div class="bg-white p-6 shadow rounded-lg border">Product 1</div>
        <!-- Card 2 -->
        <div class="bg-white p-6 shadow rounded-lg border">Product 2</div>
        <!-- Card 3 -->
        <div class="bg-white p-6 shadow rounded-lg border">Product 3</div>
        <!-- Card 4 -->
        <div class="bg-white p-6 shadow rounded-lg border">Product 4</div>
        <!-- Card 5 -->
        <div class="bg-white p-6 shadow rounded-lg border">Product 5</div>
        <!-- Card 6 -->
        <div class="bg-white p-6 shadow rounded-lg border">Product 6</div>
    </div>

</body>
</html>`
                }
            ]
        },
        // Lab 3: Sidebar Layout
        {
            id: 'tailwind-2-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Sidebar Application',
            duration: '30 min',
            content: `
# Lab 3: The Sidebar Application

The "Dashboard" layout is standard in SaaS apps.
*   **Sidebar**: Fixed width (e.g., 64 units = 16rem = 256px), full height, fixed position.
*   **Main**: Margin-left equal to sidebar width (\`ml-64\`).

## The Mission
1.  **Sidebar**: \`fixed\`, \`inset-y-0\` (top & bottom 0), \`left-0\`, \`w-64\`, \`bg-gray-900\`, \`text-white\`.
2.  **Main Content**: \`ml-64\`, \`p-8\`, \`min-h-screen\`.

## Logic
Because the sidebar is \`fixed\`, it is taken out of flow. The main content would slide *under* it unless we add the margin.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Sidebar: fixed inset-y-0 left-0 w-64 bg-gray-900.',
                    completed: false,
                    regex: /<aside[^>]*class=["'](?=.*\bfixed\b)(?=.*\binset-y-0\b)(?=.*\bleft-0\b)(?=.*\bw-64\b)(?=.*\bbg-gray-900\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Sidebar Content: Add p-6 and text-white.',
                    completed: false,
                    regex: /<aside[^>]*class=["'](?=.*\bp-6\b)(?=.*\btext-white\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Main Wrapper: ml-64 p-8 min-h-screen.',
                    completed: false,
                    regex: /<main[^>]*class=["'](?=.*\bml-64\b)(?=.*\bp-8\b)(?=.*\bmin-h-screen\b)[^"']*["']/
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
<body class="bg-gray-50">

    <!-- Task 1 & 2: The Sidebar -->
    <aside class="">
        <h1 class="font-bold text-2xl">Dashboard</h1>
        <ul class="mt-8 space-y-4">
            <li>Overview</li>
            <li>Analytics</li>
            <li>Settings</li>
        </ul>
    </aside>

    <!-- Task 3: Main Content Area -->
    <main class="">
        <div class="bg-white p-8 rounded shadow">
            <h2 class="text-xl font-bold">Welcome back!</h2>
            <p class="mt-4 text-gray-600">Here is your daily report.</p>
        </div>
    </main>

</body>
</html>`
                }
            ]
        },
        // Lab 4: Absolute Overlay
        {
            id: 'tailwind-2-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Hero Overlay',
            duration: '30 min',
            content: `
# Lab 4: Hero Overlay

Text often looks unreadable on top of images. The solution? A semi-transparent overlay.

## The Mission
1.  **Image**: Use an \`<img>\` with \`w-full h-full object-cover\`.
2.  **Overlay**: A \`div\` with \`absolute inset-0 bg-black/50\` (50% opacity black).
3.  **Grouping**: Wrap them in a \`relative\` container so the \`absolute\` overlay stays inside.
4.  **Text**: Center text on top using Flexbox on the Overlay div.

## Layers (Z-Index)
1.  Image (Bottom)
2.  Overlay Div (Middle)
3.  Text (Top - inside Overlay)
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Wrapper: relative h-64 overflow-hidden rounded-xl.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\brelative\b)(?=.*\bh-64\b)(?=.*\boverflow-hidden\b)(?=.*\brounded-xl\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Image: absolute inset-0 w-full h-full object-cover.',
                    completed: false,
                    regex: /<img[^>]*class=["'](?=.*\babsolute\b)(?=.*\binset-0\b)(?=.*\bw-full\b)(?=.*\bh-full\b)(?=.*\bobject-cover\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Overlay: absolute inset-0 bg-black\/50 flex items-center justify-center.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\babsolute\b)(?=.*\binset-0\b)(?=.*\bbg-black\/50\b)(?=.*\bflex\b)(?=.*\bitems-center\b)(?=.*\bjustify-center\b)[^"']*["']/
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
<body class="p-10">

    <!-- Task 1: Relative Container -->
    <div class="">
        
        <!-- Task 2: Background Image -->
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" alt="Tech" class="">

        <!-- Task 3: Overlay with Centered Text -->
        <div class="">
            <h1 class="text-white text-4xl font-bold border-b-4 border-blue-500 pb-2">Future Tech</h1>
        </div>

    </div>

</body>
</html>`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'tailwind-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 2 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which class aligns items vertically in the center of a flex row?',
                    options: [
                        'justify-center',
                        'align-middle',
                        'items-center',
                        'vertical-center'
                    ],
                    correctIndex: 2,
                    explanation: '`items-*` controls the Cross Axis. In a row (default), that is the vertical axis.'
                },
                {
                    id: 'q2',
                    question: 'What does "md:flex" mean?',
                    options: [
                        'Apply flex only on tablet screens',
                        'Apply flex on tablet screens AND larger',
                        'Apply flex on screens smaller than tablet',
                        'Apply medium flex spacing'
                    ],
                    correctIndex: 1,
                    explanation: 'Tailwind is mobile-first. Breakpoints like `md:` apply to that screen size and everything larger.'
                },
                {
                    id: 'q3',
                    question: 'How do you make an element take up 2 columns in a grid?',
                    options: [
                        'grid-width-2',
                        'col-2',
                        'col-span-2',
                        'span-2'
                    ],
                    correctIndex: 2,
                    explanation: '`col-span-2` makes a grid item span across two columns.'
                },
                {
                    id: 'q4',
                    question: 'To position an element "absolute", what does the parent usually need?',
                    options: [
                        'static',
                        'relative',
                        'fixed',
                        'absolute'
                    ],
                    correctIndex: 1,
                    explanation: '`relative` on the parent creates a positioning context. Without it, `absolute` ignores the parent.'
                },
                {
                    id: 'q5',
                    question: 'What does "inset-0" do?',
                    options: [
                        'Sets margin to 0',
                        'Sets padding to 0',
                        'Sets top, right, bottom, left to 0',
                        'Sets z-index to 0'
                    ],
                    correctIndex: 2,
                    explanation: 'It is a shorthand for anchoring an absolute element to all four edges of its container.'
                }
            ]
        }
    ]
};
