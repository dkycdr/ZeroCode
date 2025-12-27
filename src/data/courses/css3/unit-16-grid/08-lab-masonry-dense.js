import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4MasonryDense = {
    id: 'css-unit16-lab-masonry',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Masonry Gallery (Dense)',
    duration: '25 min',
    content: `
# Dense Packing Algorithm

You have a photo gallery. Some photos are **Landscape** (Wide), others **Portrait** (Tall).
Standard Grid leaves ugly gaps when a wide item can't fit in the remaining space of a row.

## The Solution: \`dense\`
\`grid-auto-flow: dense\` tells the browser: "If you find a gap, go back and search for a smaller item that fits, even if it messes up the HTML order."

## Mission
1.  Setup the grid.
2.  Enable Dense Flow.
3.  Watch the small items "time travel" to fill previous gaps.
    `,
    tasks: [
        {
            id: 1,
            description: 'Setup Grid: Columns repeat(auto-fill, minmax(120px, 1fr)) and auto-rows 120px.',
            completed: false,
            regex: /grid-template-columns\s*:\s*repeat\(\s*auto-fill/
        },
        {
            id: 2,
            description: 'Enable Dense Flow: grid-auto-flow: dense.',
            completed: false,
            regex: /grid-auto-flow\s*:\s*dense/
        },
        {
            id: 3,
            description: 'Wide Items: grid-column: span 2.',
            completed: false,
            regex: /\.wide\s*\{[\s\S]*?grid-column\s*:\s*span\s+2/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="container">
    <h1>Moments (Dense)</h1>
    <div class="gallery">
        <div class="photo">1</div>
        <div class="photo wide">2 (Wide)</div>
        <div class="photo tall">3 (Tall)</div>
        <div class="photo">4</div>
        <div class="photo">5</div>
        <div class="photo wide">6 (Wide)</div>
        <div class="photo">7</div>
        <div class="photo">8</div>
    </div>
</div>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    font-family: 'Inter', sans-serif;
    background: #111;
    color: white;
    padding: 2rem;
}

h1 { text-align: center; font-weight: 300; letter-spacing: 2px; }

.gallery {
    display: grid;
    gap: 1rem;
    
    /* TODO: Set Columns & Rows */
    
    
    /* TODO: Enable Dense Flow */
    
}

.photo {
    background: #222;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #555;
    transition: 0.3s;
    background-image: url('https://placehold.co/400/222/555'); /* Placeholder pattern */
    background-size: cover;
}
.photo:hover { filter: brightness(1.2); transform: scale(1.02); }

.wide {
    /* TODO: Span 2 Cols */
    background-color: #3b82f6; /* Blue tint */
    color: white;
}

.tall {
    grid-row: span 2;
    background-color: #a855f7; /* Purple tint */
    color: white;
}
`
        }
    ]
};
