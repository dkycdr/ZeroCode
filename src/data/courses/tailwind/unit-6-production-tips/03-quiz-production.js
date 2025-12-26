import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1ProductionMastery = {
    id: 'tailwind-6-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Production Mastery Quiz 🎯',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What does the @apply directive do?',
            options: [
                'Applies CSS to all elements',
                'Extracts Tailwind utilities into custom CSS classes',
                'Applies JavaScript to elements',
                'Applies styles only in production'
            ],
            correctIndex: 1,
            explanation: '@apply lets you extract repeated Tailwind utility patterns into custom CSS classes, making your HTML cleaner and more maintainable.'
        },
        {
            id: 'q2',
            question: 'What is the purpose of the "content" configuration in tailwind.config.js?',
            options: [
                'To add content to your website',
                'To tell Tailwind where to look for class names to include in the final CSS',
                'To configure the content management system',
                'To add custom content types'
            ],
            correctIndex: 1,
            explanation: 'The content configuration tells Tailwind which files to scan for class names. This enables tree-shaking to remove unused styles in production.'
        },
        {
            id: 'q3',
            question: 'When should you use @apply?',
            options: [
                'For every single element',
                'Only for repeated component patterns',
                'Never, always use inline utilities',
                'Only in production'
            ],
            correctIndex: 1,
            explanation: 'Use @apply for repeated component patterns that appear multiple times. For one-off styles, use Tailwind utilities directly in HTML.'
        },
        {
            id: 'q4',
            question: 'What is the difference between "extend" and "replace" in theme configuration?',
            options: [
                'No difference',
                'Extend adds to defaults, replace removes all defaults',
                'Replace is faster',
                'Extend only works in development'
            ],
            correctIndex: 1,
            explanation: 'Using "extend" adds your custom values to Tailwind\'s defaults. Using "replace" (without extend) removes all default values and only uses yours.'
        },
        {
            id: 'q5',
            question: 'Why is it important to configure content paths correctly?',
            options: [
                'For better SEO',
                'To enable PurgeCSS to remove unused styles and reduce file size',
                'To make development faster',
                'To enable dark mode'
            ],
            correctIndex: 1,
            explanation: 'Correct content paths allow Tailwind to scan your files and remove unused CSS in production, dramatically reducing file size from ~3MB to ~10KB.'
        }
    ]
};
