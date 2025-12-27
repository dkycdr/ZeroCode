import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labSvg = {
    id: 'html5-u4-lab-4-svg',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Vector Corp Brand (SVG)',
    duration: '25 min',
    content: `
# Lab: Vector Corp Brand

## The Assignment
Use Inline SVG to create a logo that changes via CSS interaction.
SVG elements can be styled like HTML elements!

## Key Concepts
- Inline SVG is part of the DOM
- SVG shapes can be targeted with CSS
- CSS transitions work on SVG properties

`,
    tasks: [
        {
            id: 1,
            description: 'Add an inline <svg> element with viewBox="0 0 100 100"',
            completed: false,
            regex: /<svg[\s\S]*?viewBox="0 0 100 100"/i,
            hint: {
                concept: 'SVG ViewBox',
                strategy: 'viewBox defines the coordinate system for SVG.',
                solution: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">'
            }
        },
        {
            id: 2,
            description: 'Add a <circle> shape inside the SVG',
            completed: false,
            regex: /<circle[\s\S]*?cx="[^"]+"/i,
            hint: {
                concept: 'SVG Circle',
                strategy: 'circle uses cx, cy for center and r for radius.',
                solution: '<circle cx="50" cy="50" r="48" stroke="white" fill="none"/>'
            }
        },
        {
            id: 3,
            description: 'Add a <polygon> shape inside the SVG',
            completed: false,
            regex: /<polygon[\s\S]*?points="[^"]+"/i,
            hint: {
                concept: 'SVG Polygon',
                strategy: 'points attribute lists x,y coordinates.',
                solution: '<polygon points="50,20 80,80 20,80" fill="#333"/>'
            }
        },
        {
            id: 4,
            description: 'Add CSS hover effect: .logo-container:hover polygon { fill: #00ffff; }',
            completed: false,
            regex: /:hover[\s\S]*?polygon[\s\S]*?\{[\s\S]*?fill:/i,
            hint: {
                concept: 'SVG CSS Styling',
                strategy: 'SVG shapes can be targeted with CSS selectors.',
                solution: '.logo-container:hover polygon { fill: #00ffff; }'
            }
        },
        {
            id: 5,
            description: 'Add CSS transition for smooth animation',
            completed: false,
            regex: /polygon[\s\S]*?\{[\s\S]*?transition:/i,
            hint: {
                concept: 'SVG Animation',
                strategy: 'CSS transitions animate property changes.',
                solution: 'polygon { transition: fill 0.3s, transform 0.3s; }'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Vector Corp</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="logo-container">
        <!-- ============================================
            BUILD THE SVG LOGO
            1. <svg> with viewBox
            2. <circle> for outer ring
            3. <polygon> for inner triangle
        ============================================ -->
        
    </div>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh;
    background: #111;
    margin: 0;
}

.logo-container {
    width: 150px;
    cursor: pointer;
}

/* SVG Styling */
svg {
    width: 100%;
    height: auto;
}

/* TODO: Add transition to polygon */
polygon {
    /* transition: fill 0.3s, transform 0.3s; */
}

/* TODO: Add hover effect */
/* .logo-container:hover polygon { fill: #00ffff; transform: scale(1.1); } */`
        }
    ]
};
