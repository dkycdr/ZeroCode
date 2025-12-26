import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Phase1Hero = {
    id: 'css3-14-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Phase 1: The Immersive Hero',
    duration: '45 min',
    content: `
# Capstone Phase 1: The Immersive Hero (Viewport & Snapping)

## 1. The Concept: The Digital Stage
Architect, we begin our **HyperCar Launch Site** by setting the stage. The "Hero Section" must immediately capture the user's attention. To achieve this, we will use a **Full-Screen Viewport** strategy and implement **Scroll Snapping** to lock the user's focus.

This ensures that the "HyperCar" title and call-to-action are perfectly centered, providing a cinematic experience rather than a traditional scrolling page.

---

## 2. The Mission: Viewport Orchestration
Initialize the global styles and the Hero section for the HyperCar site.

### Deployment Parameters:
1.  **Brand Tokens**: Initialize \`:root\` with \`--neon: #00f3ff;\` and \`--bg: #050505;\`.
2.  **Scroll Container**: Turn the \`html\` tag into a Y-axis scroll container with \`mandatory\` snapping.
3.  **Section Alignment**: Ensure every \`<section>\` fills the viewport (\`100vh\`) and aligns to the \`start\` of the snap context.
4.  **The Typography**: Style the \`h1\` with an massive size (\`8rem\`) and the signature "Ghost Stroke" effect (\`transparent\` color with a \`2px white\` stroke).

---

## 3. Machine Logic: Structural Integrity
By setting \`height: 100vh\` on sections and \`mandatory\` snapping on the HTML, you create a "Slide-Deck" behavior. The browser will auto-correct any partial scrolls, centering the current section's start edge to the viewport's top edge.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Smooth Behavior**: Add \`scroll-behavior: smooth;\` to the HTML tag to ensure that any programmatic jumps (like clicking the "Features" link) are animated rather than instant.

> [!TIP]
> **Stroke Effect**: The stroke effect is achieved via \`-webkit-text-stroke\`. It is a powerful way to create light, airy typography that still stands out against dark, photographic backgrounds.
`,
    tasks: [
        {
            id: 1,
            description: 'The Brand Tokens: Define "--neon: #00f3ff;" and "--bg: #050505;" in ":root".',
            completed: false,
            regex: /:root\s*\{(?=[\s\S]*?--neon\s*:\s*#00f3ff;?)(?=[\s\S]*?--bg\s*:\s*#050505;?)[\s\S]*?\}/,
            hint: {
                concept: 'Variable tokens ensure brand consistency throughout the project.',
                strategy: 'Add the variables to the :root pseudo-selector.',
                solution: '--neon: #00f3ff; --bg: #050505;'
            }
        },
        {
            id: 2,
            description: 'The Snap Container: On "html", set "scroll-snap-type: y mandatory;" and "overflow-y: scroll;".',
            completed: false,
            regex: /html\s*\{(?=[\s\S]*?scroll-snap-type\s*:\s*y\s+mandatory;?)(?=[\s\S]*?overflow-y\s*:\s*scroll;?)[\s\S]*?\}/,
            hint: {
                concept: 'The scroll-snap-type property activates the snapping engine on the container.',
                strategy: 'Apply to the root html element.',
                solution: 'scroll-snap-type: y mandatory; overflow-y: scroll;'
            }
        },
        {
            id: 3,
            description: 'The Section Guard: On "section", set "height: 100vh;" and "scroll-snap-align: start;".',
            completed: false,
            regex: /section\s*\{(?=[\s\S]*?height\s*:\s*100vh;?)(?=[\s\S]*?scroll-snap-align\s*:\s*start;?)[\s\S]*?\}/,
            hint: {
                concept: 'Every section must match the viewport height and tell the container where to snap.',
                strategy: 'Target the generic section tag.',
                solution: 'height: 100vh; scroll-snap-align: start;'
            }
        },
        {
            id: 4,
            description: 'The Hero Layout: Use Flexbox to center content in ".hero" (justify/align center).',
            completed: false,
            regex: /\.hero\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?justify-content\s*:\s*center;?)(?=[\s\S]*?align-items\s*:\s*center;?)[\s\S]*?\}/,
            hint: {
                concept: 'Flex centering is the gold standard for hero layouts.',
                strategy: 'Apply the standard flex centering trio.',
                solution: 'display: flex; justify-content: center; align-items: center;'
            }
        },
        {
            id: 5,
            description: 'The Ghost Typography: On "h1", set "font-size: 8rem;", "color: transparent;", and "-webkit-text-stroke: 2px white;".',
            completed: false,
            regex: /h1\s*\{(?=[\s\S]*?font-size\s*:\s*8rem;?)(?=[\s\S]*?color\s*:\s*transparent;?)(?=[\s\S]*?-webkit-text-stroke\s*:\s*2px\s+white;?)[\s\S]*?\}/,
            hint: {
                concept: 'The stroke effect provides a sophisticated, high-end automotive look.',
                strategy: 'Update h1 properties.',
                solution: 'font-size: 8rem; color: transparent; -webkit-text-stroke: 2px white;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* HYPERCAR CAPSTONE - PHASE 1 */
:root {
    /* 1. Define Brand Tokens */

}

html {
    scroll-behavior: smooth;
    /* 2. Implement Snap Container */

}

body {
    background: var(--bg);
    margin: 0;
    color: white;
    font-family: 'Space Mono', monospace;
}

section {
    /* 3. Implement Section Guards */
    position: relative;
    border-bottom: 1px solid #1a1a1e;
}

.hero {
    /* 4. Implement Centering Logic */
    background: radial-gradient(circle at center, #111 0%, #000 100%);
    flex-direction: column;
}

h1 {
    /* 5. Implement Ghost Typography */
    margin: 0;
    text-transform: uppercase;
}

p {
    color: var(--neon);
    letter-spacing: 12px;
    text-transform: uppercase;
    font-size: 0.9rem;
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

<section id="specs" style="background: #050505; display: flex; justify-content: center; align-items: center;">
    <h2>[ PHASE_2_PREVIEW: SPECS_GRID ]</h2>
</section>`
        }
    ]
};
