import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz4Components = {
    id: 'tailwind-4-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 4 Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'Why is using @apply generally considered an anti-pattern for component reuse?',
            options: [
                'It is too slow',
                'It increases bundle size and obscures HTML structure',
                'It is deprecated',
                'It does not support hover states'
            ],
            correctIndex: 1,
            explanation: 'Extracting to CSS Classes (@apply) creates a separate abstraction layer. Extracting to Template Components (React/Vue) is preferred for reuse.'
        },
        {
            id: 'q2',
            question: 'Which class hides an element visually but keeps it accessible to screen readers?',
            options: [
                'hidden',
                'invisible',
                'sr-only',
                'display-none'
            ],
            correctIndex: 2,
            explanation: '`sr-only` (Screen Reader Only) moves the element out of the viewport visually but keeps it in the DOM for assistive technology.'
        },
        {
            id: 'q3',
            question: 'How do you target the 2nd, 4th, 6th... items in a list?',
            options: [
                'nth:2',
                'even:',
                'odd:',
                'mod-2:'
            ],
            correctIndex: 1,
            explanation: 'The `even:` prefix targets the `nth-child(even)` pseudo-class.'
        },
        {
            id: 'q4',
            question: 'In which tailwind.config.js section should you add custom colors to KEEP the defaults?',
            options: [
                'theme.colors',
                'theme.params',
                'theme.extend.colors',
                'plugins'
            ],
            correctIndex: 2,
            explanation: 'Putting them in `theme.colors` overrides everything. Putting them in `theme.extend.colors` merges them with defaults.'
        },
        {
            id: 'q5',
            question: 'What styling issue does the "peer" modifier solve?',
            options: [
                'Parent-Child styling',
                'Sibling-Sibling styling',
                'Dark mode',
                'Grid layouts'
            ],
            correctIndex: 1,
            explanation: 'Peer allows you to style an element based on the state of a preceding sibling (like a checkbox or input).'
        }
    ]
};
