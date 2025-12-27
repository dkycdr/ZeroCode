import { CONTENT_TYPES } from '../../index';

export const quizMultimedia = {
    id: 'html5-unit-4-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Multimedia Mastery',
    description: 'Test your knowledge of Audio, Video, SVGs, and Responsive Images.',
    questions: [
        {
            id: 'q1',
            text: 'Which HTML5 element allows you to provide multiple image sources for different screen sizes?',
            options: [
                { id: 'a', text: '<picture>', isCorrect: true },
                { id: 'b', text: '<video>', isCorrect: false },
                { id: 'c', text: '<canvas>', isCorrect: false },
                { id: 'd', text: '<image-set>', isCorrect: false }
            ],
            explanation: 'The <picture> element (used with <source>) allows "Art Direction" by letting you switch image files based on device width.'
        },
        {
            id: 'q2',
            text: 'What is the correct way to add subtitles to a <video>?',
            options: [
                { id: 'a', text: '<track kind="subtitles" src="...">', isCorrect: true },
                { id: 'b', text: '<subtitle src="...">', isCorrect: false },
                { id: 'c', text: '<caption src="...">', isCorrect: false },
                { id: 'd', text: 'Videos cannot have subtitles in HTML.', isCorrect: false }
            ],
            explanation: 'The <track> element is nested inside <video> to provide text tracks like subtitles and captions.'
        },
        {
            id: 'q3',
            text: 'Why do we use Inline SVG instead of an <img> tag?',
            options: [
                { id: 'a', text: 'To allow styling paths with CSS (fill, stroke)', isCorrect: true },
                { id: 'b', text: 'It loads faster than JPEG', isCorrect: false },
                { id: 'c', text: 'It supports animation', isCorrect: false },
                { id: 'd', text: 'All of the above', isCorrect: false }
            ],
            explanation: 'While B and C are often true, the unique super-power of Inline SVG is direct CSS manipulation of its internal paths.'
        },
        {
            id: 'q4',
            text: 'Which attribute prevents a video from playing automatically with sound?',
            options: [
                { id: 'a', text: 'muted', isCorrect: true },
                { id: 'b', text: 'silent', isCorrect: false },
                { id: 'c', text: 'quiet', isCorrect: false },
                { id: 'd', text: 'autoplay="false"', isCorrect: false }
            ],
            explanation: 'Browsers block autoplay video unless it is also `muted`. This prevents unexpected noise for users.'
        },
        {
            id: 'q5',
            text: 'What is the semantic purpose of <figcaption>?',
            options: [
                { id: 'a', text: 'To provide a caption for a <figure>', isCorrect: true },
                { id: 'b', text: 'To make text bold', isCorrect: false },
                { id: 'c', text: 'To link an image', isCorrect: false },
                { id: 'd', text: 'To add alt text', isCorrect: false }
            ],
            explanation: '<figcaption> provides a visible caption or legend for the content grouped within a <figure> element.'
        }
    ]
};
