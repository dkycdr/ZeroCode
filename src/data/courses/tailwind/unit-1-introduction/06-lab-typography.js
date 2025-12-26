import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Typography = {
    id: 'tailwind-1-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Typography Masterclass',
    duration: '25 min',
    content: `
# Lab 2: Typography Masterclass ✍️

## Scenario
You are designing a blog for a **High-End Tech Magazine**.
The editor demands that the typography looks "expensive" and "polished".
Standard font sizes won't cut it. You need to control **tracking** (letter-spacing), **weight**, and **leading** (line-height).

## The Mission
Style the article header to perfection:
1.  **Category Tag ("Engineering")**: Needs to be tiny, uppercase, and wide-spaced (High-end aesthetic).
2.  **Headline**: Massive, bold, and commanding.
3.  **Lead Paragraph**: Easy to read, optimal line height.

## Visual Reference
Think: The New York Times meets Wired Magazine.
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
};
