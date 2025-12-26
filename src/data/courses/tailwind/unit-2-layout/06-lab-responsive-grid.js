import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2ResponsiveGrid = {
    id: 'tailwind-2-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Responsive Grid',
    duration: '25 min',
    content: `
# Lab 2: Responsive Product Grid 📱💻

## Scenario
**"Shopify"** has hired you to redesign their product listing page.
The current grid assumes everyone is on a desktop. Mobile users are seeing tiny, unreadable cards.
You need a "Adaptive Layout" that changes based on screen size.

## The Mission
1.  **Mobile First**: Start with a single column stack (\`grid-cols-1\`).
2.  **Tablet Upgrade**: When the screen hits \`md\` (iPad size), split into 2 columns.
3.  **Desktop View**: On large screens (\`lg\`), show 3 columns side-by-side.

## Visualization
*   **Mobile**: 1 Stack
*   **Tablet**: 2x2 Grid
*   **Desktop**: 3x3 Grid
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
};
