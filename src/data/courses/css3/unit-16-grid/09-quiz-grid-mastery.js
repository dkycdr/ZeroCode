import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1GridMastery = {
    id: 'css-unit16-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Grid Mastery',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What does `grid-auto-flow: dense` do?',
            options: [
                'Compresses images',
                'Forces the browser to backfill empty gaps with smaller items that appear later in the DOM',
                'Makes the grid denser by removing padding',
                'Nothing'
            ],
            correctIndex: 1,
            explanation: 'It breaks the DOM order slightly to optimize visual packing, creating a "Masonry-lite" effect.'
        },
        {
            id: 'q2',
            question: 'What is `subgrid`?',
            options: [
                'A grid inside a grid',
                'A keyword that allows a child to inherit the specific track sizing of its parent',
                'A deprecated feature',
                'A way to make grids smaller'
            ],
            correctIndex: 1,
            explanation: 'Subgrid allows grandchildren to align with each other by sharing the grandparent\'s tracks.'
        },
        {
            id: 'q3',
            question: 'In the RAM pattern (Repeat, Auto, Minmax), what does `1fr` ensure?',
            options: [
                'That columns are exactly 1px',
                'That columns expand to share any remaining space equally',
                'That columns are 100% wide',
                'That columns are flexible'
            ],
            correctIndex: 1,
            explanation: 'minmax(200px, 1fr) means "At least 200px, but if there is space, take it all".'
        },
        {
            id: 'q4',
            question: 'Which property names a grid zone?',
            options: [
                'grid-name',
                'grid-area',
                'area-name',
                'zone'
            ],
            correctIndex: 1,
            explanation: 'grid-area: header assigns the name "header" to that element, which can then be referenced in the template.'
        },
        {
            id: 'q5',
            question: 'What is the "Implicit Grid"?',
            options: [
                'A hidden grid',
                'Tracks that are automatically created by the browser to hold items outside the explicit rows/columns',
                'A bug',
                'The grid inside an iframe'
            ],
            correctIndex: 1,
            explanation: 'If you defined 2 rows but have 10 items, the browser implicitly creates 4 more rows to hold them.'
        }
    ]
};
