import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz7Variables = {
    id: 'py-u1-quiz-variables',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Variables & Data Types',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the naming convention for Python variables?',
            options: ['camelCase', 'PascalCase', 'snake_case', 'kebab-case'],
            correctIndex: 2,
            explanation: 'Python uses snake_case for variables and functions (lowercase with underscores).'
        },
        {
            id: 'q2',
            question: 'Which function returns the type of a value?',
            options: ['typeof()', 'type()', 'getType()', 'class()'],
            correctIndex: 1,
            explanation: 'type() returns the class/type of a value, like <class \'int\'>.'
        },
        {
            id: 'q3',
            question: 'What does "Python"[1:4] return?',
            options: ['"Pyt"', '"yth"', '"ytho"', '"hon"'],
            correctIndex: 1,
            explanation: 'Slicing [1:4] gets characters from index 1 up to (not including) 4: "yth".'
        },
        {
            id: 'q4',
            question: 'What is the result of 7 // 2?',
            options: ['3.5', '3', '4', '2'],
            correctIndex: 1,
            explanation: '// is floor division - it divides and rounds down. 7 // 2 = 3.'
        },
        {
            id: 'q5',
            question: 'How do you create an f-string?',
            options: ['format("...")', '"...".format()', 'f"..."', 'string.format("...")'],
            correctIndex: 2,
            explanation: 'Prefix string with f to create f-string: f"Hello {name}"'
        }
    ]
};
