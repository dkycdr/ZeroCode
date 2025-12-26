import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Phase4Responsive = {
    id: 'css3-14-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Phase 4: Mobile Adaptation',
    duration: '40 min',
    content: `
# Capstone Phase 4: Mobile Adaptation (Responsive Audit)

## 1. The Concept: Fluid Survivability
Architect, the final phase of any Elite project is the **Responsive Audit**. A design is not "Done" until it survives the transition to the mobile viewport. 

Our Bento Grid, which looks powerful on desktop, will become unreadable on a phone. The massive typography will overflow the screen boundaries. We will implement a series of **Media Query Overrides** to recalibrate the interface for the thumb-driven mobile environment.

---

## 2. The Mission: The Nexus Mobile Shield
Refactor the HyperCar site to ensure 100% usability on screens narrower than **768px**.

### Deployment Parameters:
1.  **Metric Query**: Create a global media query for \`max-width: 768px\`.
2.  **Typography Pivot**: Inside the query, shrink the massive \`h1\` font-size to **4rem** to fit the portrait screen.
3.  **Grid Collapse**: Reset the \`.specs-grid\` from 3 columns to **1 column** (\`1fr\`).
4.  **Area Deconstruction**: Reset all individual grid spans for \`.speed-card\` and \`.range-card\` back to \`auto\`.
5.  **Nav Simplification**: Hide the desktop \`.nav-links\` entirely to save space on the mobile bar.

---

## 3. Machine Logic: The Override Hierarchy
CSS is a "Cascade." By placing your media query at the bottom of the file, the rules inside it will override the desktop rules because they have equal specificity but appear later in the evaluation. This allows you to pivot the entire layout with just a few strategic overrides.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Avoid Hard Widths**: Ensure your mobile grid uses \`1fr\` or \`100%\`. Never use hard pixel widths in a mobile query, as phone widths vary between 320px and 450px.

> [!TIP]
> **The Ghost Span**: When you use \`grid-column: auto\`, you are telling the browser: *"Stop trying to be clever. Just put this element in the next available slot."* This is the safest way to reset complex desktop grids.
`,
    tasks: [
        {
            id: 1,
            description: 'The Metric Query: Create a media query block for "@media (max-width: 768px)".',
            completed: false,
            regex: /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\}/,
            hint: {
                concept: 'The 768px breakpoint is the conventional boundary for tablet/mobile viewports.',
                strategy: 'Write the query block at the end of the CSS.',
                solution: '@media (max-width: 768px) { ... }'
            }
        },
        {
            id: 2,
            description: 'Typography Pivot: Inside the query, set "h1" to "font-size: 4rem;".',
            completed: false,
            regex: /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*?h1\s*\{(?=[\s\S]*?font-size\s*:\s*4rem;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Smaller viewports require smaller font scales.',
                strategy: 'Add the h1 selector inside the media query.',
                solution: 'font-size: 4rem;'
            }
        },
        {
            id: 3,
            description: 'Grid Collapse: Inside the query, set ".specs-grid" to "grid-template-columns: 1fr;".',
            completed: false,
            regex: /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\.specs-grid\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*1fr;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'A single column ensures the bento grid is readable on narrow screens.',
                strategy: 'Override the grid-template-columns.',
                solution: 'grid-template-columns: 1fr;'
            }
        },
        {
            id: 4,
            description: 'Area Deconstruction: Inside the query, set ".speed-card, .range-card" to "grid-column: auto;" and "grid-row: auto;".',
            completed: false,
            regex: /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*?(\.speed-card,\s*\.range-card|\.range-card,\s*\.speed-card)\s*\{(?=[\s\S]*?grid-column\s*:\s*auto;?)(?=[\s\S]*?grid-row\s*:\s*auto;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Resetting spans to auto allows the grid to flow naturally in a single column.',
                strategy: 'Apply auto to columns and rows.',
                solution: 'grid-column: auto; grid-row: auto;'
            }
        },
        {
            id: 5,
            description: 'Nav Simplification: Inside the query, set ".nav-links" to "display: none;".',
            completed: false,
            regex: /@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\.nav-links\s*\{(?=[\s\S]*?display\s*:\s*none;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Removing non-essential nav links saves valuable screen real estate on mobile.',
                strategy: 'Target the links container.',
                solution: 'display: none;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* HYPERCAR CAPSTONE - PHASE 4 */
/* PREVIOUS STYLES (REQUIRED) */
:root { --neon: #00f3ff; --bg: #050505; }
body { background: var(--bg); color: white; margin: 0; font-family: 'Space Mono', monospace; }

h1 { font-size: 8rem; margin: 0; -webkit-text-stroke: 2px #fff; color: transparent; }

.specs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.speed-card { grid-row: span 2; }
.range-card { grid-column: span 2; }

.card { background: #111; padding: 20px; border: 1px solid #333; }

nav { display: flex; justify-content: space-between; padding: 20px; }
.nav-links { display: flex; gap: 20px; }

/* 1. Implement Mobile Overrides Media Query Below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<nav>
    <div class="logo">HYPER_V</div>
    <div class="nav-links">
        <a href="#">DNA</a>
        <a href="#">TECH</a>
    </div>
    <button>ORDER</button>
</nav>

<section class="hero" style="height: 50vh; display: flex; align-items: center; justify-content: center;">
    <h1>HyperCar</h1>
</section>

<div class="specs-grid">
    <div class="card speed-card">SPEED_1.8s</div>
    <div class="card range-card">RANGE_640MI</div>
    <div class="card price-card">PRICE_$180K</div>
    <div class="card seat-card">SEATS_4</div>
</div>`
        }
    ]
};
