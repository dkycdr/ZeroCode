import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Animations = {
    id: 'tailwind-u8-quiz-1-animations',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 8 Quiz: Animation Mastery',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'Which CSS properties are GPU-accelerated for smooth 60fps animations?',
            options: [
                'width and height',
                'transform and opacity',
                'margin and padding',
                'top and left'
            ],
            correctIndex: 1,
            explanation: 'Transform (translate, scale, rotate) and opacity are GPU-accelerated. Width, height, margin, padding, top, left are CPU-intensive and can cause jank.'
        },
        {
            id: 'q2',
            question: 'What is the ideal duration for most UI transitions?',
            options: [
                '50-75ms (instant)',
                '150-300ms (natural)',
                '500-700ms (deliberate)',
                '1000ms+ (slow and obvious)'
            ],
            correctIndex: 1,
            explanation: '150-300ms feels natural for most UI transitions. Too fast feels jarring, too slow feels sluggish.'
        },
        {
            id: 'q3',
            question: 'Which easing function should you use for elements entering the screen?',
            options: [
                'ease-linear',
                'ease-in (slow start)',
                'ease-out (slow end)',
                'ease-in-out'
            ],
            correctIndex: 2,
            explanation: 'ease-out (fast start, slow end) feels natural for elements appearing. ease-in is better for elements leaving.'
        },
        {
            id: 'q4',
            question: 'What is the hover lift pattern?',
            options: [
                'Changing the element color on hover',
                'Moving element up (negative translate-y) with increased shadow',
                'Increasing font size on hover',
                'Rotating the element 180 degrees'
            ],
            correctIndex: 1,
            explanation: 'The hover lift pattern uses hover:-translate-y-1 with hover:shadow-lg to create a floating effect, as if the element is lifting off the page.'
        },
        {
            id: 'q5',
            question: 'Why should you use transition-transform instead of transition-all?',
            options: [
                'transition-all does not work',
                'transition-transform is GPU-accelerated and lighter on performance',
                'transition-all only works on divs',
                'There is no difference'
            ],
            correctIndex: 1,
            explanation: 'transition-all animates every property that changes, which can include CPU-intensive properties. transition-transform only animates transform, which is GPU-accelerated.'
        },
        {
            id: 'q6',
            question: 'Which built-in animation is used for loading spinners?',
            options: [
                'animate-bounce',
                'animate-pulse',
                'animate-spin',
                'animate-ping'
            ],
            correctIndex: 2,
            explanation: 'animate-spin rotates the element 360 degrees continuously, perfect for loading indicators.'
        },
        {
            id: 'q7',
            question: 'What is the purpose of motion-reduce: modifier?',
            options: [
                'To speed up animations',
                'To disable animations for users who prefer reduced motion',
                'To reduce file size',
                'To enable motion blur'
            ],
            correctIndex: 1,
            explanation: 'motion-reduce: respects the prefers-reduced-motion media query. Some users have vestibular disorders affected by animations.'
        },
        {
            id: 'q8',
            question: 'How do you create staggered animations for list items?',
            options: [
                'Use different animation names',
                'Use delay-100, delay-200, delay-300 etc. on each item',
                'Use a slower duration',
                'Use ease-in instead of ease-out'
            ],
            correctIndex: 1,
            explanation: 'Use incrementing delay classes (delay-100, delay-200, delay-300) on sequential items to create a staggered entry effect.'
        }
    ]
};
