import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1ContainerQueries = {
    id: 'css-unit12-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Container Logic',
    duration: '20 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the primary conceptual shift when moving from Media Queries to Container Queries?',
            options: [
                'Switching from viewport-dependent layout to parent-dependent layout.',
                'Switching from Flexbox to Grid as the primary layout engine.',
                'Reducing the total amount of CSS code transmitted via the network.',
                'Removing the need for CSS Variables in component styling.'
            ],
            correctIndex: 0,
            explanation: 'Container Queries allow components to adapt to the specific space provided by their parent container, rather than just the global browser window.'
        },
        {
            id: 'q2',
            question: 'Which property must be applied to an ancestor to allow children to use @container rules?',
            options: [
                'display: container',
                'contain: strict',
                'container-type: inline-size',
                'overflow: hidden'
            ],
            correctIndex: 2,
            explanation: 'The container-type property establishes the containment context. inline-size is the most common choice for horizontal responsiveness.'
        },
        {
            id: 'q3',
            question: 'What is the function of the "cqw" unit?',
            options: [
                'It represents 1% of the total Viewport Width.',
                'It represents 1% of the parent container\'s width (inline-size).',
                'It stands for "CSS Quick Width" and is used for rapid prototyping.',
                'It calculates the width of an element based on its character count.'
            ],
            correctIndex: 1,
            explanation: 'Container Query Width (cqw) allows units like font-size or padding to scale proportionally with the local container width.'
        },
        {
            id: 'q4',
            question: 'Why is "container-type: size" (measuring both axes) frequently discouraged compared to "inline-size"?',
            options: [
                'It is not yet supported in Chromium-based browsers.',
                'It forces the element to take a square shape.',
                'It breaks "Intrinsic Sizing," often causing containers to collapse to 0px height if they depend on their children for size.',
                'It disables hardware acceleration for the entire page.'
            ],
            correctIndex: 2,
            explanation: 'Specifying height containment often prevents elements from growing to fit their text, leading to severe layout breakage.'
        },
        {
            id: 'q5',
            question: 'How do you target a specific ancestor when multiple nested containers exist?',
            options: [
                'By using the !important flag in the query.',
                'By targeting the container\'s ID using @container #id.',
                'By naming the container with "container-name" and referencing it in the query: @container [name] (min-width: ...).',
                'By using the "z-index" property to determine query priority.'
            ],
            correctIndex: 2,
            explanation: 'Named containers allow components to bypass immediate parents and respond to specific higher-level structural boundaries.'
        }
    ]
};
