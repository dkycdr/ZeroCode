import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1TypographyMastery = {
    id: 'css-unit5-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Typography Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'What identifies a font as "Sans-Serif"?',
            options: [
                'It has decorative feet on the letters.',
                'It has no decorative strokes or "feet".',
                'It is always lowercase.',
                'It only works on smartphones.'
            ],
            correctIndex: 1,
            explanation: '"Sans" is French for "without". Sans-serif fonts are clean and lack the small terminal strokes known as serifs.'
        },
        {
            id: 'q2',
            question: 'What is the primary benefit of using `100svh` over `100vh` on mobile browsers?',
            options: [
                'It makes the font look sharper.',
                'It accounts for the dynamic browser address bar on phones, preventing content from being cut off.',
                'It is compatible with 1990s browsers.',
                'It automatically translates the website.'
            ],
            correctIndex: 1,
            explanation: 'svh (Small Viewport Height) ensures that 100% height truly refers to the visible area between the browser UI bars.'
        },
        {
            id: 'q3',
            question: 'Why is `font-display: swap;` essential for performance?',
            options: [
                'It makes the font file smaller.',
                'It allows a system font to display immediately while the web font downloads, preventing invisible text.',
                'It encrypts the font data.',
                'It allows users to switch fonts manually.'
            ],
            correctIndex: 1,
            explanation: 'Swap prevents the "Flash of Invisible Text" (FOIT), ensuring users can read your content as soon as the HTML loads.'
        },
        {
            id: 'q4',
            question: 'What is a "Font Stack"?',
            options: [
                'A collection of fonts purchased in a single bundle.',
                'A list of fonts in CSS used as fallbacks if the primary font fails to load.',
                'A software tool for creating font files.',
                'A physical pile of old typefaces.'
            ],
            correctIndex: 1,
            explanation: 'A font stack (e.g., Inter, Arial, sans-serif) ensures that if the first font is unavailable, the browser moves to the next best match.'
        },
        {
            id: 'q5',
            question: 'Which font unit scales proportionally with the user\'s browser settings?',
            options: [
                'px',
                'rem',
                'pt',
                'cm'
            ],
            correctIndex: 1,
            explanation: 'rem (Root em) is relative to the base font size of the document. If a user changes their browser settings for better visibility, all rem-based elements will scale automatically.'
        }
    ]
};
