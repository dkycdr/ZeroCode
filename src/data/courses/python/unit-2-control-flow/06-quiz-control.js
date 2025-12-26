import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz6ControlFlow = {
    id: 'py-u2-quiz-control',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Control Flow',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What ends an if statement line in Python?',
            options: ['Semicolon ;', 'Colon :', 'Curly brace {', 'Nothing'],
            correctIndex: 1,
            explanation: 'Python uses a colon : to end the if statement line, followed by indented code.'
        },
        {
            id: 'q2',
            question: 'What is the Python keyword for "else if"?',
            options: ['else if', 'elseif', 'elif', 'elsif'],
            correctIndex: 2,
            explanation: 'Python uses "elif" as shorthand for "else if".'
        },
        {
            id: 'q3',
            question: 'What does "and" return if both conditions are True?',
            options: ['False', 'True', 'None', 'Error'],
            correctIndex: 1,
            explanation: 'The "and" operator returns True only if both conditions are True.'
        },
        {
            id: 'q4',
            question: 'What is the Python ternary syntax?',
            options: ['a ? b : c', 'b if a else c', 'a then b else c', 'if(a, b, c)'],
            correctIndex: 1,
            explanation: 'Python ternary: "value_if_true if condition else value_if_false"'
        }
    ]
};
