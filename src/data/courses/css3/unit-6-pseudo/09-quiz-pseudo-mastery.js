import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1PseudoMastery = {
    id: 'css-unit6-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Pseudo Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'What property is MANDATORY for a `::before` or `::after` element to appear?',
            options: [
                'display: block',
                'position: absolute',
                'content: ""',
                'z-index: 1'
            ],
            correctIndex: 2,
            explanation: 'Without the `content` property (even if empty), a pseudo-element is not rendered by the browser engine.'
        },
        {
            id: 'q2',
            question: 'Which ordering of link states is the professional standard to ensure the cascade works correctly?',
            options: [
                'Hover, Active, Visited, Link',
                'Link, Visited, Hover, Active',
                'Active, Hover, Link, Visited',
                'It doesn\'t matter as long as they are distinct.'
            ],
            correctIndex: 1,
            explanation: 'The standard mnemonic is LVHA (Love-Ha): Link, Visited, Hover, Active. This ensures that hover and active states override the base link colors.'
        },
        {
            id: 'q3',
            question: 'What is the theoretical "Parent Selector" in modern CSS?',
            options: [
                ':parent',
                ':child-of',
                ':has()',
                ':within'
            ],
            correctIndex: 2,
            explanation: '`:has()` allows you to style an element based on its descendants/children, effectively serving as the long-awaited parent selector.'
        },
        {
            id: 'q4',
            question: 'What does `:nth-child(3n)` target in a generic list?',
            options: [
                'Only the 3rd item.',
                'Every 3rd item (3, 6, 9...).',
                'The first 3 items.',
                'Items 1 and 3 only.'
            ],
            correctIndex: 1,
            explanation: '`3n` is a functional pattern where n starts at 0, targeting every 3rd index.'
        },
        {
            id: 'q5',
            question: 'Which functional pseudo-class allows you to group multiple selectors effectively with ZERO impact on specificity?',
            options: [
                ':is()',
                ':not()',
                ':where()',
                ':at()'
            ],
            correctIndex: 2,
            explanation: '`:where()` behaves identically to `:is()`, but it has a fixed specificity of 0, making it ideal for base styles that should be easily overridden.'
        }
    ]
};
