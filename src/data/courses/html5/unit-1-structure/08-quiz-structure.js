import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizStructure = {
    id: 'html5-u1-quiz-mastery',
    type: CONTENT_TYPES.QUIZ,
    title: 'Structure & SEO Proficiency',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the "Parent" of the <title> tag?',
            options: ['<body>', '<head>', '<html>', '<meta>'],
            correctIndex: 1,
            explanation: 'The <title> tag lives inside the <head> section.'
        },
        {
            id: 'q2',
            question: 'If you are in "pages/about.html" and want to go back to "index.html" in the root, which path do you use?',
            options: ['./index.html', '/index.html', '../index.html', 'index.html'],
            correctIndex: 2,
            explanation: '../ moves you UP one folder level.'
        },
        {
            id: 'q3',
            question: 'Why is <meta name="viewport"> critical?',
            options: [
                'It improves SEO keywords',
                'It prevents the page from crashing',
                'It ensures the site scales correctly on mobile devices',
                'It allows VR headset support'
            ],
            correctIndex: 2,
            explanation: 'Without the viewport meta tag, mobile browsers render pages at desktop width (tiny text).'
        },
        {
            id: 'q4',
            question: 'Which tag conveys "High Importance" or "Seriousness"?',
            options: ['<b>', '<strong>', '<i>', '<mark>'],
            correctIndex: 1,
            explanation: '<strong> is semantic for importance/urgency. <b> is just stylistic.'
        },
        {
            id: 'q5',
            question: 'Which list type should you use for a "Top 10 High Scores" list?',
            options: ['<ul>', '<ol>', '<dl>', '<list>'],
            correctIndex: 1,
            explanation: 'An Ordered List (<ol>) is correct because the ranking (1, 2, 3...) matters.'
        }
    ]
};
