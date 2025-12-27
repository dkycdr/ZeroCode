import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz5Lists = {
    id: 'py-u4-quiz-lists',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Lists & Tuples',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'Which method adds an item to end of list?',
            options: ['add()', 'push()', 'append()', 'insert()'],
            correctIndex: 2,
            explanation: 'append() adds an item to the end. insert() requires an index.'
        },
        {
            id: 'q2',
            question: 'What is the main difference between list and tuple?',
            options: ['Lists are faster', 'Tuples are mutable', 'Lists are mutable', 'No difference'],
            correctIndex: 2,
            explanation: 'Lists are mutable (can be changed), tuples are immutable (cannot).'
        },
        {
            id: 'q3',
            question: 'What does nums.pop() return?',
            options: ['The first item', 'The last item', 'Nothing', 'The length'],
            correctIndex: 1,
            explanation: 'pop() removes and returns the last item (or item at given index).'
        },
        {
            id: 'q4',
            question: 'How do you create a single-element tuple?',
            options: ['(42)', '(42,)', '[42]', 'tuple(42)'],
            correctIndex: 1,
            explanation: 'Single-element tuples need a trailing comma: (42,)'
        }
    ]
};
