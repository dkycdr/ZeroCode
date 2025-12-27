import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Responsive = {
    id: 'tailwind-u9-quiz-1-responsive',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 9 Quiz: Responsive Design Mastery',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'In Tailwind, what does an unprefixed utility like "text-lg" apply to?',
            options: [
                'Only mobile screens',
                'Only desktop screens',
                'All screen sizes (mobile-first base)',
                'Medium screens only'
            ],
            correctIndex: 2,
            explanation: 'Tailwind is mobile-first. Unprefixed utilities apply to all screen sizes, starting from the smallest. Prefixes like md: add styles for larger screens.'
        },
        {
            id: 'q2',
            question: 'What does "hidden md:block" mean?',
            options: [
                'Hidden on all screens',
                'Hidden on mobile, visible on medium screens and up',
                'Visible on mobile, hidden on medium screens',
                'Hidden only on medium screens'
            ],
            correctIndex: 1,
            explanation: '"hidden" hides the element by default (all screens). "md:block" overrides this at medium breakpoint and up, making it visible.'
        },
        {
            id: 'q3',
            question: 'What is the correct order for responsive classes following mobile-first?',
            options: [
                'lg:text-xl md:text-lg text-base',
                'text-base md:text-lg lg:text-xl',
                'text-xl md:text-lg lg:text-base',
                'The order does not matter'
            ],
            correctIndex: 1,
            explanation: 'Mobile-first means start small and add styles for larger screens. So: base (mobile) → md → lg → xl.'
        },
        {
            id: 'q4',
            question: 'Which class creates a grid that is 1 column on mobile, 2 on tablet, 4 on desktop?',
            options: [
                'grid-cols-1-2-4',
                'grid cols-1 md:cols-2 lg:cols-4',
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
                'responsive-grid-1-2-4'
            ],
            correctIndex: 2,
            explanation: 'Each breakpoint needs the full utility name: grid-cols-1, md:grid-cols-2, lg:grid-cols-4.'
        },
        {
            id: 'q5',
            question: 'What is the difference between media queries and container queries?',
            options: [
                'Media queries are for CSS, container queries are for JavaScript',
                'Media queries respond to viewport size, container queries respond to parent container size',
                'They are the same thing',
                'Container queries are faster than media queries'
            ],
            correctIndex: 1,
            explanation: 'Media queries style based on viewport (screen) size. Container queries style based on the parent container size, making components truly reusable.'
        },
        {
            id: 'q6',
            question: 'Which Tailwind breakpoint targets tablet-sized devices (768px+)?',
            options: [
                'sm:',
                'md:',
                'lg:',
                'tablet:'
            ],
            correctIndex: 1,
            explanation: 'md: is the medium breakpoint at 768px minimum width, which typically corresponds to tablets in portrait mode.'
        },
        {
            id: 'q7',
            question: 'How do you make a flex layout that stacks vertically on mobile but is horizontal on desktop?',
            options: [
                'flex-stack md:flex-horizontal',
                'flex flex-col md:flex-row',
                'flex-mobile md:flex-desktop',
                'flex-vertical md:flex-horizontal'
            ],
            correctIndex: 1,
            explanation: 'Use flex-col for vertical stacking (mobile), then md:flex-row overrides to horizontal layout on medium screens and up.'
        },
        {
            id: 'q8',
            question: 'To use container queries in Tailwind, what do you need to do?',
            options: [
                'They work out of the box',
                'Install @tailwindcss/container-queries plugin and use @container class',
                'Add containers: true to config',
                'Use the :container pseudo-selector'
            ],
            correctIndex: 1,
            explanation: 'Container queries require the @tailwindcss/container-queries plugin. Then add @container to define a container and use @md: etc. for queries.'
        }
    ]
};
