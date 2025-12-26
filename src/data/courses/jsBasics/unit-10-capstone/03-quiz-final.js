import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz3Final = {
    id: 'js-u10-quiz-final',
    type: CONTENT_TYPES.QUIZ,
    title: 'Final Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the output? console.log(typeof [])',
            options: ['"array"', '"object"', '"undefined"', '"list"'],
            correctIndex: 1,
            explanation: 'Arrays in JavaScript are technically objects. typeof [] returns "object".'
        },
        {
            id: 'q2',
            question: 'Which method adds an element to the END of an array?',
            options: ['shift()', 'unshift()', 'push()', 'pop()'],
            correctIndex: 2,
            explanation: 'push() adds to end, pop() removes from end, unshift() adds to start, shift() removes from start.'
        },
        {
            id: 'q3',
            question: 'What does the spread operator (...) do with arrays?',
            options: ['Deletes elements', 'Expands/copies array elements', 'Sorts the array', 'Reverses the array'],
            correctIndex: 1,
            explanation: 'The spread operator (...) expands an iterable into individual elements.'
        },
        {
            id: 'q4',
            question: 'How do you prevent the default action of an event?',
            options: ['event.stop()', 'event.cancel()', 'event.preventDefault()', 'event.disable()'],
            correctIndex: 2,
            explanation: 'event.preventDefault() stops the default browser action (like form submission).'
        },
        {
            id: 'q5',
            question: 'What is the purpose of async/await?',
            options: ['Speed up code', 'Make async code look synchronous', 'Create loops', 'Define variables'],
            correctIndex: 1,
            explanation: 'async/await provides a cleaner syntax for working with Promises, making asynchronous code easier to read.'
        },
        {
            id: 'q6',
            question: 'Which is NOT a falsy value?',
            options: ['0', '""', '[]', 'null'],
            correctIndex: 2,
            explanation: 'Empty array [] is truthy! Only false, 0, "", null, undefined, and NaN are falsy.'
        }
    ]
};
