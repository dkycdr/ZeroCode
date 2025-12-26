import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Hello = {
    id: 'tailwind-1-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: Hello Tailwind',
    duration: '20 min',
    content: `
# Lab 1: Hello Tailwind 🏁

## Scenario
You've just been hired by **"StartupX"**. The CEO is pitching to investors in 20 minutes, but the landing page is completely unstyled (Times New Roman).
Your task: Create a bold, professional "Hero Header" immediately.

## The Mission
Transform the ugly HTML into a vibrant banner using Tailwind utilities.
1.  **Container**: Make it pop with a deep indigo background and spacious padding.
2.  **Typography**: Make the title huge and white.
3.  **Subtitle**: Use a softer shade of indigo for hierarchy.

## Design Preview
The goal is a clean, modern aesthetic similar to Stripe or Vercel's branding.
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
};
