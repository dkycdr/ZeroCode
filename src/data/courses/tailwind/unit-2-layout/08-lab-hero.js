import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Hero = {
    id: 'tailwind-2-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Hero Overlay',
    duration: '30 min',
    content: `
# Lab 4: Hero Overlay (The "Netflix" Effect) 🎬

## Scenario
The design team handed you a stunning cover image for the new movie release.
However, when you put white text on top of it, the text is unreadable against the bright parts of the image.
You need to add a **Dark Dimmer** (Overlay) between the image and the text.

## The Mission
1.  **The Stack**: Use a \`relative\` container to hold the stack.
2.  **Layer 1 (Bottom)**: The Image (\`absolute inset-0\`).
3.  **Layer 2 (Middle)**: The Overlay (\`bg-black/50\`). This is a black background with 50% opacity.
4.  **Layer 3 (Top)**: The Text. Centered using Flexbox.

## Z-Index Mental Model
Think of this like a sandwich.
Bottom Bun: Image
Cheese: Overlay
Patty: Text
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
};
