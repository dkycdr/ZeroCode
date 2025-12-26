import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizA11y = {
    id: 'html5-u6-quiz-mastery',
    type: CONTENT_TYPES.QUIZ,
    title: 'Accessibility Certification',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the "First Rule of ARIA"?',
            options: [
                'Always use ARIA on every element',
                'Do not use ARIA if a native HTML element (like <button>) serves the purpose',
                'ARIA is only for images',
                'ARIA stands for "Always Really Important Attributes"'
            ],
            correctIndex: 1,
            explanation: 'Native sematic HTML is always preferred because it has built-in accessibility features.'
        },
        {
            id: 'q2',
            question: 'Which tabindex value allows an element to be focused in the natural tab order?',
            options: ['tabindex="1"', 'tabindex="-1"', 'tabindex="0"', 'tabindex="auto"'],
            correctIndex: 2,
            explanation: 'tabindex="0" makes an element focusable in the natural flow. -1 removes it from flow. Positive values are dangerous.'
        },
        {
            id: 'q3',
            question: 'What is the "Curb Cut Effect"?',
            options: [
                'When accessible design helps everyone, not just disabled users',
                'A CSS property for rounding corners',
                'A search engine penalty for bad code',
                'Cutting costs on development'
            ],
            correctIndex: 0,
            explanation: 'Like ramps for wheelchairs also helping strollers, semantic HTML helps SEO and power users.'
        },
        {
            id: 'q4',
            question: 'Why is <div onClick="..."> bad for a button?',
            options: [
                'It is too slow',
                'It does not handle Keyboard Focus or Screen Reader announcement by default',
                'It requires more CSS',
                'It is deprecated'
            ],
            correctIndex: 1,
            explanation: 'Divs have no semantic meaning and are invisible to keyboard navigation without complex ARIA/JS polyfills.'
        },
        {
            id: 'q5',
            question: 'If an icon is purely decorative, what should you do?',
            options: [
                'Give it a long alt text describing it',
                'Use aria-hidden="true" or an empty alt="" attribute',
                'Delete it',
                'Make it blink'
            ],
            correctIndex: 1,
            explanation: 'Decorative icons should be hidden from screen readers to reduce noise.'
        }
    ]
};
