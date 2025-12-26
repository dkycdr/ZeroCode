import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2GroupCard = {
    id: 'tailwind-3-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Group Hover Card',
    duration: '25 min',
    content: `
# Lab 2: The "Netflix" Card 🎬

## Scenario
You are designing a movie card for a streaming service.
The card has an Image and a Title.
**Interaction:** When the user hovers over the *image*, you want the *title* below it to light up.
This is a classic "Parent-Child" interaction problem.

## The Mission
1.  **The Parent**: Add \`group\` to the card container.
2.  **The Image**: Zoom it in slightly on hover (\`group-hover:scale-110\`).
3.  **The Title**: Change color to brand blue on hover (\`group-hover:text-blue-600\`).
4.  **The Arrow**: Slide the arrow icon to the right (\`group-hover:translate-x-2\`).

## Logic
The \`group\` class tells Tailwind: "Watch this element for hover states, and let its children react to it."
    `,
    tasks: [
        {
            id: 1,
            description: 'Parent: Add "group" class.',
            completed: false,
            regex: /<a[^>]*class=["'](?=.*\bgroup\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Image: group-hover:scale-110 transition duration-500.',
            completed: false,
            regex: /<img[^>]*class=["'](?=.*\bgroup-hover:scale-110\b)(?=.*\btransition\b)(?=.*\bduration-500\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Text Color: group-hover:text-blue-600.',
            completed: false,
            regex: /<h3[^>]*class=["'](?=.*\bgroup-hover:text-blue-600\b)[^"']*["']/
        },
        {
            id: 4,
            description: 'Icon Move: group-hover:translate-x-2.',
            completed: false,
            regex: /<span[^>]*class=["'](?=.*\bgroup-hover:translate-x-2\b)[^"']*["']/
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
<body class="p-10 bg-gray-50">

    <!-- Task 1: Add "group" to this link -->
    <a href="#" class="block max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        
        <div class="h-48 overflow-hidden">
            <!-- Task 2: Zoom image on hover -->
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" class="w-full h-full object-cover">
        </div>

        <div class="p-6">
            <!-- Task 3: Change text color -->
            <h3 class="text-xl font-bold mb-2 text-gray-900 transition-colors">
                Frontend Mastery
            </h3>
            
            <div class="flex items-center text-gray-500 mt-4">
                Learn more 
                <!-- Task 4: Move arrow right -->
                <span class="ml-2 transition-transform">-></span>
            </div>
        </div>
    </a>

</body>
</html>`
        }
    ]
};
