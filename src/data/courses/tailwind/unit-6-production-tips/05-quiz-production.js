import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Production = {
    id: 'tailwind-u6-quiz-1-production',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 6 Quiz: Production Mastery',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the purpose of the "content" array in tailwind.config.js?',
            options: [
                'To define custom CSS content',
                'To specify which files to scan for class names',
                'To load external CDN resources',
                'To configure build output directory'
            ],
            correctIndex: 1,
            explanation: 'The content array tells Tailwind which files to scan for class names. This is crucial for PurgeCSS to remove unused styles and keep your bundle small.'
        },
        {
            id: 'q2',
            question: 'What is the "Golden Rule" when customizing the theme in tailwind.config.js?',
            options: [
                'Always use !important',
                'Replace the default theme completely',
                'Use theme.extend to add without destroying defaults',
                'Only use official plugins'
            ],
            correctIndex: 2,
            explanation: 'Use theme.extend to ADD new values while keeping all defaults. Directly modifying theme (without extend) replaces everything!'
        },
        {
            id: 'q3',
            question: 'Why does this code cause problems: className={`bg-${color}-500`}?',
            options: [
                'Template literals are not allowed in JSX',
                'Tailwind cannot detect dynamically constructed class names',
                'The syntax is incorrect',
                'Color variables are not supported'
            ],
            correctIndex: 1,
            explanation: 'Tailwind scans files for complete class names. Dynamic string concatenation creates classes at runtime that Tailwind never sees, so they get purged.'
        },
        {
            id: 'q4',
            question: 'What is the safelist used for?',
            options: [
                'Listing allowed team members',
                'Protecting dynamic classes from being purged',
                'Defining safe color combinations',
                'Setting security headers'
            ],
            correctIndex: 1,
            explanation: 'The safelist tells Tailwind to always include certain classes, even if they are not found during the file scan. Use it for truly dynamic classes.'
        },
        {
            id: 'q5',
            question: 'When should you use @apply?',
            options: [
                'For every component to keep HTML clean',
                'Never, it defeats the purpose of Tailwind',
                'Sparingly, for patterns repeated 10+ times across many files',
                'Only in production builds'
            ],
            correctIndex: 2,
            explanation: 'Use @apply sparingly! It is meant for truly repeated patterns (10+ occurrences). For most components, use framework components (React/Vue) instead.'
        },
        {
            id: 'q6',
            question: 'Which official plugin adds the "prose" class for article content?',
            options: [
                '@tailwindcss/forms',
                '@tailwindcss/typography',
                '@tailwindcss/aspect-ratio',
                '@tailwindcss/prose'
            ],
            correctIndex: 1,
            explanation: '@tailwindcss/typography provides the "prose" class which automatically styles article content including headings, paragraphs, lists, and more.'
        },
        {
            id: 'q7',
            question: 'What should be the target CSS bundle size for most apps?',
            options: [
                '500 KB - 1 MB',
                '100 - 200 KB',
                '10 - 50 KB',
                '1 - 5 KB'
            ],
            correctIndex: 2,
            explanation: 'With proper purging, most apps should have a CSS bundle between 10-50 KB. If yours is over 100 KB, your content paths are likely misconfigured.'
        },
        {
            id: 'q8',
            question: 'What is the correct way to name component variants?',
            options: [
                'btn-blue, btn-red, btn-green (color-based)',
                'btn-primary, btn-secondary, btn-danger (semantic)',
                'button-1, button-2, button-3 (numbered)',
                'primaryButton, secondaryButton (camelCase)'
            ],
            correctIndex: 1,
            explanation: 'Use semantic names like btn-primary, btn-danger. This way, if you change your brand color from blue to purple, you only update the @apply, not every usage.'
        }
    ]
};
