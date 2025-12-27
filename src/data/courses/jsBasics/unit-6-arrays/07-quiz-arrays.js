import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz7Arrays = {
    id: 'js-u6-quiz-arrays',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Arrays',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the index of the first element in an array?',
            options: ['1', '0', '-1', 'first'],
            correctIndex: 1,
            explanation: 'Arrays are zero-indexed. The first element is at index 0.'
        },
        {
            id: 'q2',
            question: 'What does push() do?',
            options: ['Adds to beginning', 'Adds to end', 'Removes from end', 'Removes from beginning'],
            correctIndex: 1,
            explanation: 'push() adds elements to the END of an array.'
        },
        {
            id: 'q3',
            question: 'What does filter() return?',
            options: ['One element', 'A new array with matching elements', 'The original array modified', 'Boolean'],
            correctIndex: 1,
            explanation: 'filter() returns a NEW array containing only elements that pass the test.'
        },
        {
            id: 'q4',
            question: 'What does find() return?',
            options: ['All matching elements', 'First matching element', 'Index of first match', 'Boolean'],
            correctIndex: 1,
            explanation: 'find() returns the FIRST element that passes the test (or undefined).'
        },
        {
            id: 'q5',
            question: 'Which method transforms each element into a new value?',
            options: ['forEach', 'map', 'filter', 'find'],
            correctIndex: 1,
            explanation: 'map() creates a new array with the results of calling a function on every element.'
        }
    ]
};
