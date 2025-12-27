import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz4Files = {
    id: 'py-u8-quiz-files',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: File Handling',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the best way to open files?',
            options: ['open() then close()', 'with statement', 'try/finally', 'file()'],
            correctIndex: 1,
            explanation: 'with statement automatically closes files even if errors occur.'
        },
        {
            id: 'q2',
            question: 'What mode overwrites existing files?',
            options: ['"r"', '"w"', '"a"', '"x"'],
            correctIndex: 1,
            explanation: '"w" write mode creates new file or overwrites existing.'
        },
        {
            id: 'q3',
            question: 'Which reads all lines as a list?',
            options: ['read()', 'readline()', 'readlines()', 'lines()'],
            correctIndex: 2,
            explanation: 'readlines() returns a list of all lines.'
        }
    ]
};
