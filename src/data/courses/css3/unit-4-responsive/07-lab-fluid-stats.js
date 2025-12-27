import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3FluidStats = {
    id: 'css-unit4-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Fluid Core (Clamp)',
    duration: '40 min',
    content: `
# Lab: The Fluid Core (Clamp)

## 1. The Concept: Mathematical Scaling
Architect, writing a media query for every single font-size change is exhausting. Modern professionals use **Fluid Typography**. 

In this lab, you will use the **clamp()** function to create a "Smart" font and spacing system. Your typography will automatically grow and shrink based on the window size, staying perfectly proportioned without you needing to lift a finger.

---

## 2. The Mission: The Reactive Status Card
You are building the **Neural Core Health Card**:
1.  **Fluid Title**: Use \`clamp()\` to make the title move between \`1.5rem\` and \`3rem\`.
2.  **Adaptive Padding**: Make the card's internal padding scale fluidly between \`1rem\` and \`4rem\`.
3.  **Locked Ratio**: Ensure the health bar icon stays perfectly square using \`aspect-ratio\`.

---

## 3. Senior Guidance: The Clamp Syntax
\`clamp(MIN, PREFERRED, MAX)\`
- Use \`vw\` (Viewport Width) for the "preferred" value to link it to the screen size.
- Example: \`clamp(1rem, 5vw, 3rem)\`. If 5% of the screen width is between 1rem and 3rem, it will use that exact value.

> [!IMPORTANT]
> **Mission Objective**: Fluidity. Your goal is a card that looks "Custom Tailored" for every single browser resolution.
`,
    tasks: [
        {
            id: 1,
            description: 'The Fluid Headline: On ".stat-title", set "font-size: clamp(1.5rem, 4vw, 3rem);".',
            completed: false,
            regex: /\.stat-title\s*\{(?=[\s\S]*?font-size\s*:\s*clamp\(\s*1.5rem\s*,\s*4vw\s*,\s*3rem\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Clamp prevents font from becoming too small on phones or too giant on 4K.',
                strategy: 'This will scale between 1.5rem and 3rem based on 4% of viewport width.',
                solution: 'font-size: clamp(1.5rem, 4vw, 3rem);'
            }
        },
        {
            id: 2,
            description: 'The Breathable Padding: On ".stat-card", set "padding: clamp(1rem, 5vw, 4rem);".',
            completed: false,
            regex: /\.stat-card\s*\{(?=[\s\S]*?padding\s*:\s*clamp\(\s*1rem\s*,\s*5vw\s*,\s*4rem\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Fluid padding makes components feel spacious on desktop and compact on mobile.',
                strategy: 'Use the clamp function for the padding property.',
                solution: 'padding: clamp(1rem, 5vw, 4rem);'
            }
        },
        {
            id: 3,
            description: 'The Geometric Lock: On ".status-box", set "width: 100px;" and "aspect-ratio: 1 / 1;".',
            completed: false,
            regex: /\.status-box\s*\{(?=[\s\S]*?width\s*:\s*100px;?)(?=[\s\S]*?aspect-ratio\s*:\s*1\s*\/\s*1;?)[\s\S]*?\}/,
            hint: {
                concept: 'Aspect-ratio ensures the box remains a perfect square even if height is not set.',
                strategy: 'This is the modern way to handle squares.',
                solution: 'aspect-ratio: 1 / 1;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS NEURAL HEALTH */
body {
    background: #020205;
    display: flex;
    justify-content: center;
    padding: 50px;
}

.stat-card {
    background: #111;
    border: 1px solid #333;
    max-width: 800px;
    width: 100%;
}

.stat-title {
    color: #4cc9f0;
    margin: 0 0 20px 0;
    font-weight: 900;
}

.status-box {
    background: #f72585;
    /* 3. Make this a square */
}

p {
    color: #888;
    line-height: 1.6;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="stat-card">
    <h1 class="stat-title">NEURAL_PROCESSOR_HEALTH</h1>
    <div class="status-box"></div>
    <p>Operational efficiency is currently within optimal parameters. No heat spikes detected in the primary cooling manifold.</p>
</div>`
        }
    ]
};
