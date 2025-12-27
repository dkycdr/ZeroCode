import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2MasonryGallery = {
    id: 'css-unit16-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Masonry Gallery (Dense)',
    duration: '25 min',
    content: `
## The Mission
You have a photo gallery. Some photos are Landscape (Wide), others Portrait (Tall).
This leaves ugly gaps. Use **Dense Packing** to fill them.

**Task:**
1.  Set up the grid with \`auto-fill\`.
2.  Enable \`grid-auto-flow: dense\`.
3.  Make landscape items span 2 columns.
`,
    tasks: [
        {
            id: 1,
            description: 'Set grid-template-columns to repeat(auto-fill, minmax(150px, 1fr)).',
            completed: false,
            regex: /\.gallery\s*\{[\s\S]*?grid-template-columns\s*:\s*repeat\(auto-fill,\s*minmax\(150px,\s*1fr\)\)\s*;?[\s\S]*?\}/
        },
        {
            id: 2,
            description: 'Enable grid-auto-flow: dense.',
            completed: false,
            regex: /\.gallery\s*\{[\s\S]*?grid-auto-flow\s*:\s*dense\s*;?[\s\S]*?\}/
        },
        {
            id: 3,
            description: 'Set grid-auto-rows to 150px (implicit height).',
            completed: false,
            regex: /\.gallery\s*\{[\s\S]*?grid-auto-rows\s*:\s*150px\s*;?[\s\S]*?\}/
        },
        {
            id: 4,
            description: 'Make .wide items span 2 columns.',
            completed: false,
            regex: /\.wide\s*\{[\s\S]*?grid-column\s*:\s*span\s+2\s*;?[\s\S]*?\}/
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `.gallery {
    display: grid;
    gap: 10px;
    /* TODO: Set Dense Flow */

}

.wide {
    background: #f0f;
    /* TODO: Span 2 cols */
}`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="gallery">
    <div class="item">1</div>
    <div class="item wide">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>`
        }
    ]
};
