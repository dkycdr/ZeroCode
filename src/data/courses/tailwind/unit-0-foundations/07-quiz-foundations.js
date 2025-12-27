import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Foundations = {
    id: 'tailwind-u0-quiz-1-foundations',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 0 Quiz: Foundations & Philosophy',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the main advantage of utility-first CSS over traditional CSS?',
            options: [
                'Smaller file sizes in development',
                'No need to invent class names and switch between files',
                'Better browser compatibility',
                'Faster page load times'
            ],
            correctIndex: 1,
            explanation: 'Utility-first CSS allows you to compose designs directly in HTML without inventing class names or context-switching between HTML and CSS files.'
        },
        {
            id: 'q2',
            question: 'Which Tailwind setup method is NOT recommended for production?',
            options: [
                'CDN script tag',
                'Vite with PostCSS',
                'Next.js built-in support',
                'Create React App with Tailwind'
            ],
            correctIndex: 0,
            explanation: 'The CDN version (~3MB) is only for prototyping and learning. Production sites should use a build process to purge unused CSS down to ~5-10KB.'
        },
        {
            id: 'q3',
            question: 'What does the "JIT" in Tailwind JIT Mode stand for?',
            options: [
                'JavaScript Integration Tool',
                'Just-In-Time',
                'Joint Interface Technology',
                'Joyful Interactive Theme'
            ],
            correctIndex: 1,
            explanation: 'JIT stands for Just-In-Time. It generates CSS on-demand as you write classes, enabling arbitrary values and faster build times.'
        },
        {
            id: 'q4',
            question: 'Which is a valid arbitrary value in Tailwind?',
            options: [
                'class="width-137px"',
                'class="w-[137px]"',
                'class="w-{137px}"',
                'class="w-(137px)"'
            ],
            correctIndex: 1,
            explanation: 'Arbitrary values use square brackets: w-[137px], bg-[#bada55], top-[-17px]. This feature is enabled in JIT mode (default in modern Tailwind).'
        },
        {
            id: 'q5',
            question: 'What does the @tailwind base directive do?',
            options: [
                'Loads all utility classes',
                'Loads CSS reset and base styles',
                'Loads component classes',
                'Configures the build process'
            ],
            correctIndex: 1,
            explanation: '@tailwind base includes CSS reset (like normalize.css) and base element styles. @tailwind components and @tailwind utilities load their respective layers.'
        },
        {
            id: 'q6',
            question: 'In tailwind.config.js, what does the "content" array specify?',
            options: [
                'List of CDN URLs to load',
                'Custom theme colors',
                'Files to scan for class names',
                'JavaScript plugins to use'
            ],
            correctIndex: 2,
            explanation: 'The content array tells Tailwind which files to scan for class names. This is crucial for PurgeCSS to work correctly and remove unused styles.'
        },
        {
            id: 'q7',
            question: 'What is the main difference between Tailwind and Bootstrap?',
            options: [
                'Tailwind uses utility classes, Bootstrap uses component classes',
                'Tailwind is faster than Bootstrap',
                'Bootstrap only works with jQuery',
                'Tailwind doesn\'t support responsive design'
            ],
            correctIndex: 0,
            explanation: 'Tailwind provides low-level utility classes (bg-blue-500, p-4), while Bootstrap provides pre-built component classes (btn, card). Tailwind offers more flexibility for custom designs.'
        },
        {
            id: 'q8',
            question: 'When should you use @apply in Tailwind?',
            options: [
                'For every component',
                'Never, it defeats the purpose',
                'Sparingly, only for true duplication across many files',
                'Only in production builds'
            ],
            correctIndex: 2,
            explanation: 'Use @apply sparingly! It defeats the utility-first purpose. Only extract with @apply when you have genuine duplication across many files. Most of the time, component extraction (React/Vue) is better.'
        }
    ]
};
