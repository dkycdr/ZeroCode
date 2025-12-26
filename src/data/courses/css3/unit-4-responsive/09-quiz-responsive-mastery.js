import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1ResponsiveMastery = {
    id: 'css-unit4-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Responsive Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the purpose of the <meta name="viewport"> tag?',
            options: [
                'It allows the website to load faster.',
                'It tells the browser to match the website width to the device width and sets the initial zoom.',
                'It sends GPS data to the server.',
                'It changes the background color of the browser UI.'
            ],
            correctIndex: 1,
            explanation: 'Without this tag, mobile browsers will assume a width of 980px and zoom out, making your content tiny and unreadable.'
        },
        {
            id: 'q2',
            question: 'Why is the "Mobile-First" approach considered best practice today?',
            options: [
                'Browsers process min-width faster than max-width.',
                'It results in cleaner, more efficient code by starting with simplicity and only adding complexity where needed.',
                'It prevents Desktop users from seeing the website.',
                'It is required by law in most countries.'
            ],
            correctIndex: 1,
            explanation: 'Mobile-first design (using min-width) ensures that lower-powered devices receive the simplest code, and complex features are added only for devices that can handle/display them.'
        },
        {
            id: 'q3',
            question: 'What is the difference between `rem` and `em` units?',
            options: [
                'Rem is for mobile; Em is for desktop.',
                'Rem scales based on the root font size; Em scales based on the elements own or parent font size.',
                'Rem is a fixed unit; Em is a fluid unit.',
                'There is no difference; they are interchangeable.'
            ],
            correctIndex: 1,
            explanation: 'rem (Root em) is globally consistent across the site, making it ideal for layout and general typography. em is local/contextual, ideal for scaling elements proportionally to their text.'
        },
        {
            id: 'q4',
            question: 'Which CSS function allows you to set a font-size that scales with the screen but stays within a specific range?',
            options: [
                'calc()',
                'aspect-ratio()',
                'clamp()',
                'min-max()'
            ],
            correctIndex: 2,
            explanation: '`clamp(min, preferred, max)` is the modern way to ensure typography (or any value) stays fluid but safely bounded.'
        },
        {
            id: 'q5',
            question: 'What does `height: 100vh;` represent?',
            options: [
                '100% of the horizontal width.',
                '100% of the Parent elements height.',
                '100% of the Viewport (screen) height.',
                '100 Virtual Hectares.'
            ],
            correctIndex: 2,
            explanation: 'vh stands for Viewport Height. 100vh will always span the exact vertical height of the current browser window.'
        }
    ]
};
