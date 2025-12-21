import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit14Capstone = {
    id: 'css3-unit-14',
    title: 'Capstone: The "HyperCar" Launch Site',
    description: 'The Final Boss. Build a production-grade, animated, scroll-snapping landing page for a luxury EV.',
    items: [
        {
            id: 'css3-14-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 1: The Immersive Hero',
            duration: '45 min',
            content: `
## Phase 1: The Immersive Hero Section

We start with the "Fold". It needs to take up exactly 100% of the screen height and snap into place.

**Design Specs:**
1.  **Full Screen**: \`height: 100vh\`.
2.  **Scroll Snap**: The user can't stop halfway.
3.  **Typography**: Massive 8rem heading, centered.
4.  **Background**: Dark gradient (simulation of video).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set :root variables for brand colors (--neon: #00f3ff, --bg: #050505).',
                    completed: false,
                    regex: /:root\s*\{(?=[\s\S]*?--neon\s*:\s*#00f3ff)(?=[\s\S]*?--bg\s*:\s*#050505)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Turn <html> into a scroll-container (overflow-y: scroll, snap-type: y mandatory).',
                    completed: false,
                    regex: /html\s*\{(?=[\s\S]*?overflow-y\s*:\s*scroll)(?=[\s\S]*?scroll-snap-type\s*:\s*y\s+mandatory)[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Make each <section> take full viewport height (100vh) and snap-align: start.',
                    completed: false,
                    regex: /section\s*\{(?=[\s\S]*?height\s*:\s*100vh)(?=[\s\S]*?scroll-snap-align\s*:\s*start)[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Center the hero text using Flexbox (justify/align center) and set flex-direction column.',
                    completed: false,
                    regex: /\.hero\s*\{(?=[\s\S]*?display\s*:\s*flex)(?=[\s\S]*?justify-content\s*:\s*center)(?=[\s\S]*?align-items\s*:\s*center)(?=[\s\S]*?flex-direction\s*:\s*column)[\s\S]*?\}/
                },
                {
                    id: 5,
                    description: 'Style the H1: font-size 8rem, letter-spacing -5px, transparent text with white stroke (webkit-text-stroke: 2px white).',
                    completed: false,
                    regex: /h1\s*\{(?=[\s\S]*?font-size\s*:\s*8rem)(?=[\s\S]*?-webkit-text-stroke\s*:\s*2px\s+white)(?=[\s\S]*?color\s*:\s*transparent)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* 1. Global Variables */
:root {
    
}

/* 2. Scroll Container */
html {
    
}

/* 3. Section Logic */
section {
    position: relative;
    border-bottom: 1px solid #333;
}

/* 4. Hero Layout */
.hero {
    background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
    /* Use Flexbox */
}

/* 5. Typography */
h1 {
    font-family: sans-serif;
    text-transform: uppercase;
    /* Stroke Effect */
}
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<section class="hero">
    <h1>HyperCar</h1>
    <p>The Future is Electric</p>
</section>
<section>Features</section>`
                }
            ]
        },
        {
            id: 'css3-14-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 2: The Tech Bento Grid',
            duration: '50 min',
            content: `
## Phase 2: The Specs Grid (Bento)

We need to display the car's 0-60 time, Range, and Horsepower.
Instead of a boring list, we use a **Grid Layout** where cells span multiple areas.

**Layout:**
*   **Speed**: Large vertical block (Left).
*   **Range**: Horizontal block (Top Right).
*   **Price**: Square block (Bottom Right).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define a 3-column Grid on .specs with a 20px gap.',
                    completed: false,
                    regex: /\.specs\s*\{(?=[\s\S]*?display\s*:\s*grid)(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(3,\s*1fr\))(?=[\s\S]*?gap\s*:\s*20px)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Make the .speed card span 2 rows vertically (grid-row: span 2).',
                    completed: false,
                    regex: /\.speed\s*\{[\s\S]*?grid-row\s*:\s*span\s+2\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Make the .range card span 2 columns horizontally (grid-column: span 2).',
                    completed: false,
                    regex: /\.range\s*\{[\s\S]*?grid-column\s*:\s*span\s+2\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Give cards a Glassmorphism look: background rgba(255,255,255,0.05), backdrop-filter blur 10px.',
                    completed: false,
                    regex: /\.card\s*\{(?=[\s\S]*?background\s*:\s*rgba\(255,\s*255,\s*255,\s*0\.05\))(?=[\s\S]*?backdrop-filter\s*:\s*blur\(10px\))[\s\S]*?\}/
                },
                {
                    id: 5,
                    description: 'On Hover, make the cards glow: border 1px solid var(--neon).',
                    completed: false,
                    regex: /\.card:hover\s*\{[\s\S]*?border\s*:\s*1px\s+solid\s+var\(--neon\)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.specs {
    padding: 100px;
    height: 100%;
    /* 1. Grid Definition */

}

.card {
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 40px;
    transition: 0.3s;
    /* 4. Glass Effect */
}

/* 2. Spanning */
.speed { }

/* 3. Spanning */
.range { }

/* 5. Interaction */
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<section class="specs">
    <div class="card speed">1.9s 0-60</div>
    <div class="card range">600mi Range</div>
    <div class="card price">$200k</div>
    <div class="card seats">4 Seats</div>
</section>`
                }
            ]
        },
        {
            id: 'css3-14-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 3: The Floating Nav (Sticky)',
            duration: '35 min',
            content: `
## Phase 3: The Sticky Navigation

The user needs to navigate. We want a Bar that sticks to the top.
It should be transparent initially, but accessible over any background.

**Design Specs:**
1.  **Sticky**: \`position: sticky; top: 0\`.
2.  **Layering**: Must be above everything (\`z-index: 100\`).
3.  **Layout**: Logo Left, Links Center, "Order" Button Right.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Make <nav> sticky at top: 0 with z-index 100.',
                    completed: false,
                    regex: /nav\s*\{(?=[\s\S]*?position\s*:\s*sticky)(?=[\s\S]*?top\s*:\s*0)(?=[\s\S]*?z-index\s*:\s*100)[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Layout Nav items using Flexbox: Space-Between.',
                    completed: false,
                    regex: /nav\s*\{[\s\S]*?justify-content\s*:\s*space-between\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Style the Order Button: background var(--neon), color black, font-weight bold.',
                    completed: false,
                    regex: /\.btn-nav\s*\{(?=[\s\S]*?background\s*:\s*var\(--neon\))(?=[\s\S]*?color\s*:\s*black)(?=[\s\S]*?font-weight\s*:\s*bold)[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'On Hover, the Order Button should scale up (1.1) and rotate slightly (3deg).',
                    completed: false,
                    regex: /\.btn-nav:hover\s*\{[\s\S]*?transform\s*:\s*scale\(1\.1\)\s+rotate\(3deg\)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `nav {
    display: flex;
    padding: 20px 40px;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
    align-items: center;
    /* 1-2. Sticky & Layout */

}

.logo { font-weight: 900; letter-spacing: 2px; }

.links { display: flex; gap: 20px; }

.btn-nav {
    border: none;
    padding: 10px 25px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy */
    /* 3. Button Styles */

}

/* 4. Hover State */
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<nav>
    <div class="logo">HYPER</div>
    <div class="links">
        <a href="#">Model S</a>
        <a href="#">Model X</a>
    </div>
    <button class="btn-nav">Order</button>
</nav>`
                }
            ]
        },
        {
            id: 'css3-14-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 4: Mobile Adaptation',
            duration: '40 min',
            content: `
## Phase 4: Mobile Responsiveness

The Bento Grid breaks on mobile because 3 columns is too wide.
We need to "Stack" everything when the screen is < 768px.

**Logic:**
Instead of redefining every single grid area, we just reset \`grid-template-columns\` to \`1fr\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create a media query for max-width 768px.',
                    completed: false,
                    regex: /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Inside query: Make h1 smaller (4rem).',
                    completed: false,
                    regex: /h1\s*\{[\s\S]*?font-size\s*:\s*4rem\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Inside query: Set .specs grid to 1 column.',
                    completed: false,
                    regex: /\.specs\s*\{[\s\S]*?grid-template-columns\s*:\s*1fr\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Inside query: Reset all spans (grid-column: auto, grid-row: auto) for .speed and .range.',
                    completed: false,
                    regex: /\.speed,\s*\.range\s*\{(?=[\s\S]*?grid-column\s*:\s*auto)(?=[\s\S]*?grid-row\s*:\s*auto)[\s\S]*?\}/
                },
                {
                    id: 5,
                    description: 'Inside query: Hide the desktop Navigation links (display: none).',
                    completed: false,
                    regex: /\.links\s*\{[\s\S]*?display\s*:\s*none\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* Prior CSS ... */

/* TODO: Mobile Overrides */
@media (max-width: 768px) {
    /* 2. Smaller Text */

    /* 3. Stack Grid */
    
    /* 4. Reset Area Spans */

    /* 5. Simplfy Nav */
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<!-- Same HTML -->`
                }
            ]
        }
    ]
};
