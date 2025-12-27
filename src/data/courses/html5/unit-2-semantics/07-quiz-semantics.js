import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizSemantics = {
    id: 'html5-u2-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 2 Assessment: Semantic Architecture',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is "Div Soup"?',
            options: [
                'A popular web developer meal',
                'A website structure using excessive <div> tags instead of semantic tags',
                'A CSS layout technique',
                'A new HTML5 feature'
            ],
            correctIndex: 1,
            explanation: 'Div Soup refers to code that is unreadable and meaningless because everything is a generic <div>.'
        },
        {
            id: 'q2',
            question: 'Which tag should contain the main navigation menu of your site?',
            options: [
                '<menu>',
                '<navigation>',
                '<nav>',
                '<div id="nav">'
            ],
            correctIndex: 2,
            explanation: '<nav> is the correct semantic tag for primary navigation blocks.'
        },
        {
            id: 'q3',
            question: 'When should you use <article> instead of <section>?',
            options: [
                'When the content is just a chapter of a larger story',
                'When the content relies on the surrounding page to make sense',
                'When the content is independent and reusable (like a blog post or news item)',
                'Never, they are the same'
            ],
            correctIndex: 2,
            explanation: '<article> implies independence. <section> implies being a part of a whole.'
        },
        {
            id: 'q4',
            question: 'What is the most important tag for Screen Readers to find the content?',
            options: [
                '<main>',
                '<body>',
                '<article>',
                '<center>'
            ],
            correctIndex: 0,
            explanation: 'Screen readers look for <main> to skip the navigation and header and jump straight to the content.'
        },
        {
            id: 'q5',
            question: 'What is the correct purpose of <aside>?',
            options: [
                'To put text on the left side',
                'For content tangentially related to the main content (Ads, Sidebar, Bio)',
                'For footnotes',
                'For hidden comments'
            ],
            correctIndex: 1,
            explanation: '<aside> means "related but not critical". If removed, the main article should still make sense.'
        },
        {
            id: 'q6',
            question: 'How many <main> tags should be visible on a single page?',
            options: [
                'As many as you want',
                'One per section',
                'Exactly One',
                'Zero'
            ],
            correctIndex: 2,
            explanation: 'There should only be one unique <main> content area per document.'
        }
    ]
};
