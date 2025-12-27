import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz5Loops = {
    id: 'py-u3-quiz-loops',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Loops',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What does range(3) produce?',
            options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '3'],
            correctIndex: 1,
            explanation: 'range(3) produces 0, 1, 2 - starts at 0 and goes up to (not including) 3.'
        },
        {
            id: 'q2',
            question: 'Which keyword exits a loop immediately?',
            options: ['exit', 'stop', 'break', 'return'],
            correctIndex: 2,
            explanation: 'break exits the current loop immediately.'
        },
        {
            id: 'q3',
            question: 'Which keyword skips to the next iteration?',
            options: ['skip', 'next', 'continue', 'pass'],
            correctIndex: 2,
            explanation: 'continue skips the rest of current iteration and goes to the next one.'
        },
        {
            id: 'q4',
            question: 'What is [x**2 for x in range(3)]?',
            options: ['[0, 1, 4]', '[1, 4, 9]', '[0, 2, 4]', 'Error'],
            correctIndex: 0,
            explanation: 'List comprehension: 0**2=0, 1**2=1, 2**2=4 → [0, 1, 4]'
        }
    ]
};
