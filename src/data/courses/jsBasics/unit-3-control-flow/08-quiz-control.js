import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz8ControlFlow = {
    id: 'js-u3-quiz-control',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Control Flow',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What happens if you forget "break" in a switch case?',
            options: [
                'Error is thrown',
                'Only that case runs',
                'Fall-through: next cases also run',
                'Switch exits immediately'
            ],
            correctIndex: 2,
            explanation: 'Without break, execution "falls through" to the next case(s) until a break is found or the switch ends.'
        },
        {
            id: 'q2',
            question: 'Which of these is a FALSY value?',
            options: [
                '[]',
                '{}',
                '""',
                '"false"'
            ],
            correctIndex: 2,
            explanation: 'Empty string "" is falsy. Empty array [] and empty object {} are truthy. String "false" is also truthy.'
        },
        {
            id: 'q3',
            question: 'What does this return: true ? "A" : "B"',
            options: [
                'true',
                '"A"',
                '"B"',
                'Error'
            ],
            correctIndex: 1,
            explanation: 'Ternary operator: condition ? valueIfTrue : valueIfFalse. Since condition is true, it returns "A".'
        },
        {
            id: 'q4',
            question: 'What is the output? if (0) console.log("yes"); else console.log("no");',
            options: [
                'yes',
                'no',
                '0',
                'Error'
            ],
            correctIndex: 1,
            explanation: '0 is a falsy value, so the if condition is false, and the else block runs.'
        },
        {
            id: 'q5',
            question: 'Is empty array [] truthy or falsy?',
            options: [
                'Truthy',
                'Falsy',
                'Neither',
                'Error'
            ],
            correctIndex: 0,
            explanation: 'Empty array [] is TRUTHY. Only these are falsy: false, 0, "", null, undefined, NaN.'
        },
        {
            id: 'q6',
            question: 'When should you use switch instead of if-else?',
            options: [
                'When checking ranges like > or <',
                'When checking one variable against many specific values',
                'When you have only 2 conditions',
                'Never, always use if-else'
            ],
            correctIndex: 1,
            explanation: 'Switch is best when comparing one variable to many exact values. Use if-else for ranges or complex conditions.'
        }
    ]
};
