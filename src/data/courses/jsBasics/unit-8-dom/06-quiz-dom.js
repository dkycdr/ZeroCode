import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz6DOM = {
    id: 'js-u8-quiz-dom',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: DOM Manipulation',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What does DOM stand for?',
            options: ['Data Object Model', 'Document Object Model', 'Display Object Method', 'Document Oriented Model'],
            correctIndex: 1,
            explanation: 'DOM = Document Object Model. It represents the HTML document as a tree of objects.'
        },
        {
            id: 'q2',
            question: 'Which method returns the FIRST matching element?',
            options: ['querySelectorAll', 'getElementsByClassName', 'querySelector', 'getElementsByTagName'],
            correctIndex: 2,
            explanation: 'querySelector returns only the first element matching the CSS selector.'
        },
        {
            id: 'q3',
            question: "How do you change an element's text?",
            options: ['element.text = "..."', 'element.textContent = "..."', 'element.content = "..."', 'element.value = "..."'],
            correctIndex: 1,
            explanation: 'textContent property sets/gets the text content of an element.'
        },
        {
            id: 'q4',
            question: 'Which method is used to listen for events?',
            options: ['onEvent', 'listenEvent', 'addEventListener', 'attachEvent'],
            correctIndex: 2,
            explanation: 'addEventListener is the standard method to attach event handlers to elements.'
        }
    ]
};
