import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1AnimationMastery = {
    id: 'css-unit7-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Animation Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'Which CSS properties are "GPU Accelerated" and optimal for performance?',
            options: [
                'width, height, margin',
                'color, background-color, border-width',
                'transform, opacity',
                'padding, font-size'
            ],
            correctIndex: 2,
            explanation: 'Transform and Opacity are handled by the compositor layer (GPU), bypassing the heavy Layout and Paint stages of the browser pipeline.'
        },
        {
            id: 'q2',
            question: 'What is the primary difference between a Transition and a Keyframe Animation?',
            options: [
                'Transitions are faster.',
                'Transitions require a state change (A to B), whereas Keyframes can run autonomously and loop.',
                'Keyframes only work for colors.',
                'There is no difference.'
            ],
            correctIndex: 1,
            explanation: 'Transitions react to state changes (like hover), while @keyframes define a complex timeline that can play independently.'
        },
        {
            id: 'q3',
            question: 'What does `animation-fill-mode: forwards;` do?',
            options: [
                'It makes the animation go faster.',
                'It ensures the element keeps the styles of the LAST keyframe after the animation ends.',
                'It forces the animation to loop.',
                'It moves the element to the front of the screen.'
            ],
            correctIndex: 1,
            explanation: 'Forwards prevents the element from snapping back to its original (0%) state after the animation finishes.'
        },
        {
            id: 'q4',
            question: 'Which timing function is best for an element ENTERING the screen?',
            options: [
                'ease-in (slow start)',
                'ease-out (fast start, slow end)',
                'linear (constant speed)',
                'step-start (jumpy)'
            ],
            correctIndex: 1,
            explanation: 'Ease-out feels snappy and responsive because the element starts moving quickly and then comes to a graceful stop.'
        },
        {
            id: 'q5',
            question: 'Why must we use `prefers-reduced-motion`?',
            options: [
                'To save computer battery.',
                'To support older Internet Explorer browsers.',
                'To prevent physical discomfort or illness for users with vestibular sensitivities.',
                'To make the code more complex.'
            ],
            correctIndex: 2,
            explanation: 'Large-scale animations can cause vertigo or migraines; respecting the user\'s system settings for reduced motion is a critical accessibility standard.'
        }
    ]
};
