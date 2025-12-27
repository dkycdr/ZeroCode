import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Phase2Bento = {
    id: 'css3-14-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Phase 2: The Tech Bento Grid',
    duration: '50 min',
    content: `
# Capstone Phase 2: The Tech Bento Grid (Grid Orchestration)

## 1. The Concept: Information Density
Architect, representing technical specifications (0-60 time, range, pricing) requires a layout that feels organized yet dynamic. We will utilize the **Bento Grid** pattern—a style popularized by high-end tech landing pages.

Instead of a standard sequence of boxes, we will use **Grid Spanning** to create a varying visual rhythm, making key stats like "Speed" more prominent than secondary data.

---

## 2. The Mission: The Specs Mesh
Construct the technical specification grid using advanced Grid layouts and the Elite "Glassmorphism" aesthetic.

### Deployment Parameters:
1.  **Grid Mesh**: Configure \`.specs-grid\` as a 3-column grid with a **24px** gap.
2.  **Vertical Dominance**: Make the \`.speed-card\` span **2 rows** to emphasize velocity.
3.  **Horizontal Scope**: Make the \`.range-card\` span **2 columns** to emphasize distance.
4.  **Glass Material**: Apply a semi-transparent background (\`rgba(255, 255, 255, 0.05)\`) and a **10px** blur to all \`.card\` elements.
5.  **Reactive Glow**: Add a hover state that illuminates the card's border with the \`var(--neon)\` color.

---

## 3. Machine Logic: Explicit Placement
By using \`grid-row: span 2\` and \`grid-column: span 2\`, you override the default 1x1 placement logic. The browser's layout engine calculates the complex offsets required to "flow" the remaining cards around these larger blocks, creating a balanced, professional "Bento" look.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Backdrop Support**: Remember to include the \`-webkit-backdrop-filter\` prefix. Without it, your glass effect will not render on Safari or most mobile browsers.

> [!TIP]
> **Box Sizing**: Use \`box-sizing: border-box\` globally (usually in your reset) to ensure that the 1px highlight border doesn't add width to your grid cells and break the alignment.
`,
    tasks: [
        {
            id: 1,
            description: 'The Grid Mesh: On ".specs-grid", set "display: grid;", "grid-template-columns: repeat(3, 1fr);", and "gap: 24px;".',
            completed: false,
            regex: /\.specs-grid\s*\{(?=[\s\S]*?display\s*:\s*grid;?)(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(3,\s*1fr\);?)(?=[\s\S]*?gap\s*:\s*24px;?)[\s\S]*?\}/,
            hint: {
                concept: 'A 3-column grid provides the perfect resolution for bento-style layouts.',
                strategy: 'Define the grid and the gap.',
                solution: 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;'
            }
        },
        {
            id: 2,
            description: 'Vertical Dominance: Set ".speed-card { grid-row: span 2; }".',
            completed: false,
            regex: /\.speed-card\s*\{(?=[\s\S]*?grid-row\s*:\s*span\s+2;?)[\s\S]*?\}/,
            hint: {
                concept: 'Spanning rows vertically makes the card taller.',
                strategy: 'Apply grid-row to the specific card.',
                solution: 'grid-row: span 2;'
            }
        },
        {
            id: 3,
            description: 'Horizontal Scope: Set ".range-card { grid-column: span 2; }".',
            completed: false,
            regex: /\.range-card\s*\{(?=[\s\S]*?grid-column\s*:\s*span\s+2;?)[\s\S]*?\}/,
            hint: {
                concept: 'Spanning columns horizontally makes the card wider.',
                strategy: 'Apply grid-column to the specific card.',
                solution: 'grid-column: span 2;'
            }
        },
        {
            id: 4,
            description: 'Glass Material: On ".card", set "background: rgba(255, 255, 255, 0.05);" and "backdrop-filter: blur(10px);".',
            completed: false,
            regex: /\.card\s*\{(?=[\s\S]*?background\s*:\s*rgba\(255,\s*255,\s*255,\s*0\.05\);?)(?=[\s\S]*?backdrop-filter\s*:\s*blur\(10px\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Glassmorphism creates depth by blurring the background behind the card.',
                strategy: 'Combine low-alpha background with backdrop-filter.',
                solution: 'background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* HYPERCAR CAPSTONE - PHASE 2 */
:root { --neon: #00f3ff; --bg: #050505; }

body { background: var(--bg); color: white; margin: 0; font-family: 'Space Mono', monospace; }

.section-specs {
    height: 100vh;
    padding: 100px;
    display: flex;
    flex-direction: column;
}

/* 1. Implement Grid Mesh */
.specs-grid {
    width: 100%;
    max-width: 1000px;
    margin: auto;
}

.card {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 32px;
    transition: all 0.3s ease;
    /* 4. Implement Glass Material */

}

.card:hover {
    /* 5. Implement Reactive Glow */
    border-color: var(--neon);
    transform: translateY(-5px);
}

/* 2 & 3. Implement Spanning Logic */

.card h3 { font-size: 0.8rem; color: #666; margin: 0; }
.card .value { font-size: 2.5rem; font-weight: bold; color: var(--neon); }
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<section class="section-specs">
    <div class="specs-grid">
        <div class="card speed-card">
            <h3>ZERO_TO_SIXTY</h3>
            <div class="value">1.8S</div>
        </div>
        <div class="card range-card">
            <h3>MAX_RANGE</h3>
            <div class="value">640 MI</div>
        </div>
        <div class="card price-card">
            <h3>BASE_PRICE</h3>
            <div class="value">$180K</div>
        </div>
        <div class="card seats-card">
            <h3>SEATING</h3>
            <div class="value">4</div>
        </div>
    </div>
</section>`
        }
    ]
};
