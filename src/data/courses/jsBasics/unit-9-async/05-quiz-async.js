import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz5Async = {
    id: 'js-u9-quiz-async',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Async JavaScript',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What are the three states of a Promise?',
            options: ['Start, Running, Done', 'Pending, Fulfilled, Rejected', 'Open, Active, Closed', 'Init, Process, End'],
            correctIndex: 1,
            explanation: 'Promises are Pending (waiting), Fulfilled (success), or Rejected (failure).'
        },
        {
            id: 'q2',
            question: 'Where can you use "await"?',
            options: ['Anywhere', 'Only inside async functions', 'Only in callbacks', 'Only with fetch'],
            correctIndex: 1,
            explanation: 'await can only be used inside functions marked with the async keyword.'
        },
        {
            id: 'q3',
            question: 'How do you handle errors with async/await?',
            options: ['.catch()', 'try/catch', 'onerror', 'if/else'],
            correctIndex: 1,
            explanation: 'With async/await, we use try/catch blocks to handle errors.'
        },
        {
            id: 'q4',
            question: 'What does setTimeout(() => {}, 0) do?',
            options: ['Nothing, runs immediately', 'Runs after all synchronous code', 'Causes an error', 'Runs forever'],
            correctIndex: 1,
            explanation: 'Even with 0ms delay, setTimeout runs AFTER the current synchronous code finishes.'
        }
    ]
};
