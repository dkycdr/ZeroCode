import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Phase3Nav = {
    id: 'css3-14-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Phase 3: The Floating Nav',
    duration: '35 min',
    content: `
# Capstone Phase 3: The Floating Nav (Sticky & Layering)

## 1. The Concept: Persistent Context
Architect, as users scroll through the immersive phases of the **HyperCar Launch Site**, they must always have a "Way Back." A static navigation bar that disappears is a failure in UX. 

We will engineer a **Floating Navigation Bar** that remains "Sticky" at the top of the viewport. We will also utilize **Flexbox Alignment** to create the classic professional spacing pattern (Logo - Links - CTA) and apply a translucent glass layer to ensure readability over any background.

---

## 2. The Mission: The Persistent Command Bar
Implement the global navigation layer using sticky positioning and advanced hover micro-interactions.

### Deployment Parameters:
1.  **Sticky Protocol**: Make the \`<nav>\` element \`position: sticky;\` at \`top: 0\` with a high \`z-index: 1000\`.
2.  **Navigation Mesh**: Use Flexbox on the \`<nav>\` to create a \`space-between\` distribution.
3.  **Elite CTA**: Style the \`.btn-order\` with the brand \`var(--neon)\` background, black text, and a massive \`50px\` border-radius.
4.  **Kinetic Response**: Add a hover state to the button that scales it (\`1.1\`) and rotates it slightly (\`2deg\`) for a "Playful Tech" feeling.

---

## 3. Machine Logic: The Sticky Sentinel
Sticky positioning is a hybrid of relative and fixed. The element behaves normally until it reaches the specified \`top\` threshold, at which point it "Locks" into place relative to the viewport. Setting a high \`z-index\` ensures it floats *above* the snapping sections.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Stacking Context**: If your navigation bar "disappears" behind a section, check the \`z-index\` of the sections. Navigation must always be the highest z-index on the page.

> [!TIP]
> **Blurry Transitions**: Applying \`backdrop-filter: blur(8px);\` to the nav bar allows the background colors of each section to "bleed through" as the user scrolls, creating a beautiful organic transition effect.
`,
    tasks: [
        {
            id: 1,
            description: 'The Sticky Protocol: On "nav", set "position: sticky;", "top: 0;", and "z-index: 1000;".',
            completed: false,
            regex: /nav\s*\{(?=[\s\S]*?position\s*:\s*sticky;?)(?=[\s\S]*?top\s*:\s*0;?)(?=[\s\S]*?z-index\s*:\s*1000;?)[\s\S]*?\}/,
            hint: {
                concept: 'Sticky positioning keeps the nav visible throughout the entire scroll journey.',
                strategy: 'Apply position, top, and z-index.',
                solution: 'position: sticky; top: 0; z-index: 1000;'
            }
        },
        {
            id: 2,
            description: 'The Nav Mesh: On "nav", set "display: flex;" and "justify-content: space-between;".',
            completed: false,
            regex: /nav\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?justify-content\s*:\s*space-between;?)[\s\S]*?\}/,
            hint: {
                concept: 'Space-between pulls the items to the far edges of the container.',
                strategy: 'Define the flex layout on the nav.',
                solution: 'display: flex; justify-content: space-between;'
            }
        },
        {
            id: 3,
            description: 'The Elite CTA: On ".btn-order", set "background: var(--neon);", "color: #000;", and "border-radius: 50px;".',
            completed: false,
            regex: /\.btn-order\s*\{(?=[\s\S]*?background\s*:\s*var\(--neon\);?)(?=[\s\S]*?color\s*:\s*#000;?)(?=[\s\S]*?border-radius\s*:\s*50px;?)[\s\S]*?\}/,
            hint: {
                concept: 'The "Order" button is the primary goal; it needs high-contrast neon styling.',
                strategy: 'Update the button properties.',
                solution: 'background: var(--neon); color: #000; border-radius: 50px;'
            }
        },
        {
            id: 4,
            description: 'Kinetic Response: In ".btn-order:hover", set "transform: scale(1.1) rotate(2deg);".',
            completed: false,
            regex: /\.btn-order:hover\s*\{(?=[\s\S]*?transform\s*:\s*scale\(1\.1\)\s+rotate\(2deg\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Micro-animations make the UI feel reactive and premium.',
                strategy: 'Apply the composite transform on hover.',
                solution: 'transform: scale(1.1) rotate(2deg);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* HYPERCAR CAPSTONE - PHASE 3 */
:root { --neon: #00f3ff; --bg: #050505; }

body { background: var(--bg); margin: 0; font-family: 'Space Mono', monospace; }

nav {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    padding: 20px 60px;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    /* 1 & 2. Implement Sticky & Mesh below */

}

.logo { font-weight: 900; letter-spacing: 4px; color: white; }

.nav-links { display: flex; gap: 40px; }
.nav-links a { color: #888; text-decoration: none; font-size: 0.8rem; text-transform: uppercase; }
.nav-links a:hover { color: white; }

.btn-order {
    border: none;
    padding: 12px 32px;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    /* 3. Implement CTA Styles below */

}

/* 4. Implement Hover Logic */

section { height: 100vh; display: flex; justify-content: center; align-items: center; }
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<nav>
    <div class="logo">HYPER_V</div>
    <div class="nav-links">
        <a href="#">Model_S</a>
        <a href="#">Power_Grid</a>
        <a href="#">DNA</a>
    </div>
    <button class="btn-order">SECURE_RESERVATION</button>
</nav>

<section>Section 1 (Hero)</section>
<section>Section 2 (Specs)</section>
<section>Section 3 (Gallery)</section>`
        }
    ]
};
