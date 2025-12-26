import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz3Errors = {
    id: 'py-u9-quiz-errors',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Error Handling',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What keyword catches exceptions?',
            options: ['catch', 'except', 'handle', 'error'],
            correctIndex: 1,
            explanation: 'Python uses "except" (not "catch" like other languages).'
        },
        {
            id: 'q2',
            question: 'Which block always runs?',
            options: ['try', 'except', 'else', 'finally'],
            correctIndex: 3,
            explanation: 'finally always runs, whether error occurred or not.'
        },
        {
            id: 'q3',
            question: 'Which keyword throws a new exception?',
            options: ['throw', 'raise', 'error', 'except'],
            correctIndex: 1,
            explanation: 'raise is used to throw/raise exceptions.'
        }
    ]
};
