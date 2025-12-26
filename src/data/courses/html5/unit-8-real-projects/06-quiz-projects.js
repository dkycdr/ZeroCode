import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizProjects = {
    id: 'html5-u8-quiz-mastery',
    type: CONTENT_TYPES.QUIZ,
    title: 'Project Lifecycle Certification',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the correct order of the web development lifecycle?',
            options: [
                'Build -> Plan -> Deploy -> Design',
                'Plan -> Design -> Build -> Deploy',
                'Design -> Deploy -> Build -> Plan',
                'Deploy -> Build -> Plan -> Design'
            ],
            correctIndex: 1,
            explanation: 'Always plan before you design, design before you build, and build before you deploy.'
        },
        {
            id: 'q2',
            question: 'Why do we keep CSS in a separate file (e.g., style.css)?',
            options: [
                'To make the HTML file smaller',
                'Because inline styles are illegal',
                'Separation of Concerns and Caching efficiency',
                'Because CSS is harder than HTML'
            ],
            correctIndex: 2,
            explanation: 'It keeps the code maintainable and allows the browser to cache the style sheet separately.'
        },
        {
            id: 'q3',
            question: 'What does "Mobile First" mean?',
            options: [
                'Only building for phones',
                'Designing/Coding for mobile screens first, then adding complexity for desktops',
                'Buying a new phone before coding',
                'Using a mobile app to write code'
            ],
            correctIndex: 1,
            explanation: 'Mobile constraints force you to focus on the essential content. It is easier to scale up than to scale down.'
        },
        {
            id: 'q4',
            question: 'Which is a modern deployment platform?',
            options: ['Floppy Disk', 'FTP Client', 'Vercel / Netlify', 'Email Attachment'],
            correctIndex: 2,
            explanation: 'Platforms like Vercel and Netlify offer automated Git-based deployment and free SSL.'
        }
    ]
};
