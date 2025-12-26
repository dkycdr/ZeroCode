import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3BoxModel = {
    id: 'tailwind-1-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: The Box Model',
    duration: '25 min',
    content: `
# Lab 3: The Box Model 📦

## Scenario
You are building the **Pricing Page** for a SaaS product.
The most important element is the "Call to Action" (CTA) card. It needs to stand out from the gray background, sit perfectly centered, and feel "clickable".

## The Mission
Style the "Upgrade to Pro" card.
1.  **Dimensions**: Don't let it stretch infinitely. Constrain its width (\`max-w\`).
2.  **Centering**: Use the auto-margin hack (\`mx-auto\`) to center it horizontally.
3.  **Surface**: Give it a white background, rounded corners, and a subtle shadow to make it "lift" off the page.

## Concepts
*   **Padding (Internal)**: Space between content and border.
*   **Margin (External)**: Space between border and other elements.
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
};
