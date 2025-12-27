import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Performance = {
    id: 'css-unit10-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Performance Engineering',
    duration: '20 min',
    questions: [
        {
            id: 'q1',
            question: 'Which sequence correctly represents the Critical Rendering Path (CRP)?',
            options: [
                'Paint -> Layout -> DOM -> CSSOM',
                'DOM -> CSSOM -> Render Tree -> Layout -> Paint',
                'CSSOM -> DOM -> Paint -> Layout',
                'Layout -> Paint -> DOM -> CSSOM'
            ],
            correctIndex: 1,
            explanation: 'The browser must first construct the object trees (DOM/CSSOM), merge them into the Render Tree, calculate the geometry (Layout), and finally paint the pixels.'
        },
        {
            id: 'q2',
            question: 'Why is modifying properties like "width" or "margin" considered "expensive" for performance?',
            options: [
                'Because they trigger a color shift in adjacent elements.',
                'Because they force a full Layout recalculation (Reflow) of the page.',
                'Because they increase the final CSS file bundle size significantly.',
                'Because they are incompatible with the GPU compositor.'
            ],
            correctIndex: 1,
            explanation: 'Geometric properties affect the coordinates of surrounding elements, forcing the browser to recompute the entire box model hierarchy.'
        },
        {
            id: 'q3',
            question: 'Which CSS properties are the most efficient for animations as they are handled by the GPU (Composite layer)?',
            options: [
                'top & left',
                'padding & margin',
                'transform & opacity',
                'border-width & height'
            ],
            correctIndex: 2,
            explanation: 'Transform and Opacity changes do not alter the geometry or force heavy repaints; the GPU manages them as pre-rendered textures.'
        },
        {
            id: 'q4',
            question: 'What is the primary function of the "content-visibility: auto" property?',
            options: [
                'To make all text content translucent until hovered.',
                'To defer the rendering of off-screen elements until the user scrolls near them.',
                'To permanently remove non-visible elements from the DOM tree.',
                'To optimize the load time of external video assets only.'
            ],
            correctIndex: 1,
            explanation: 'This "Lazy Rendering" technique significantly improves the initial "Time to Interactive" on extremely long or high-density pages.'
        },
        {
            id: 'q5',
            question: 'What is the primary risk of overusing the "will-change" property?',
            options: [
                'It causes the colors of the website to desaturate on mobile.',
                'It exhausts VRAM (Video Memory), potentially causing browser instability or crashes.',
                'It disables the "Smooth Scrolling" feature on most modern browsers.',
                'It prevents search engines from indexing the affected elements.'
            ],
            correctIndex: 1,
            explanation: 'Each promoted layer requires a dedicated memory allocation. Excessive "will-change" usage can saturate GPU resources, especially on mobile devices.'
        }
    ]
};
