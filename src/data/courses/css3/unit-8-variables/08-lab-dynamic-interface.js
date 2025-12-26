import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4DynamicInterface = {
    id: 'css-unit8-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Reactive Interface',
    duration: '55 min',
    content: `
# Lab: The Reactive Interface

## 1. The Concept: Total Fluidity
Architect, you have reached the summit of Unit 8. In the **Nexus AI Core**, the environment must react to the presence of the user. This requires a handshake between **JavaScript** and **CSS Variables**.

In this lab, you will build a **Mouse-Tracking Glow**. JavaScript will track the mouse coordinates and update two CSS variables (\`--x\` and \`--y\`). Your CSS will then use these values to move a radial-gradient background. This is a high-performance interactive pattern used in elite tech dashboards.

---

## 2. The Mission: The Neural Tracking Panel
1.  **Coordinate Receipt**: Handle the \`--mouse-x\` and \`--mouse-y\` variables in your CSS.
2.  **The Lighting FX**: Use those variables inside a \`radial-gradient\` for the background of the \`.tracking-panel\`.
3.  **The Smooth Follow**: Add a subtle transition to the background-position to make the glow feel like it's "Floating" rather than snapping.

---

## 3. Senior Guidance: The Logic of Units
When JS passes a value like \`150\`, CSS doesn't know if that's pixels, rems, or degrees. 
- **The Pro Hack**: Multiply your unitless variable by 1px in CSS. 
- \`calc(var(--mouse-x) * 1px)\`. 
- This allows your JS to stay purely numeric and your CSS to handle the unit conversion.

> [!IMPORTANT]
> **Mission Objective**: Responsiveness. The glow should follow the cursor without any perceived lag, using the browser's hardware-accelerated rendering path.
`,
    tasks: [
        {
            id: 1,
            description: 'The FX Logic: On ".tracking-panel", set "background: radial-gradient(circle at calc(var(--x) * 1px) calc(var(--y) * 1px), #4cc9f0, transparent);".',
            completed: false,
            regex: /\.tracking-panel\s*\{(?=[\s\S]*?background\s*:\s*radial-gradient\(\s*circle\s+at\s+calc\(\s*var\(--x\)\s*\*\s*1px\s*\)\s+calc\(\s*var\(--y\)\s*\*\s*1px\s*\)\s*,\s*#4cc9f0\s*,\s*transparent\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'We are using variables to define the center point of a radial gradient.',
                strategy: 'Update the background property.',
                solution: 'background: radial-gradient(circle at calc(var(--x) * 1px) calc(var(--y) * 1px), #4cc9f0, transparent);'
            }
        },
        {
            id: 2,
            description: 'The Glow Dimmer: On ".tracking-panel", set "background-size: 300px 300px;" and "background-repeat: no-repeat;".',
            completed: false,
            regex: /\.tracking-panel\s*\{(?=[\s\S]*?background-size\s*:\s*300px\s+300px;?)(?=[\s\S]*?background-repeat\s*:\s*no-repeat;?)[\s\S]*?\}/,
            hint: {
                concept: 'Controlling the size prevents the glow from repeating across the whole screen.',
                strategy: 'Add these size and repeat properties.',
                solution: 'background-size: 300px 300px; background-repeat: no-repeat;'
            }
        },
        {
            id: 3,
            description: 'The Stealth Layer: Set the base ".tracking-panel" to "--x: 0;" and "--y: 0;".',
            completed: false,
            regex: /\.tracking-panel\s*\{(?=[\s\S]*?--x\s*:\s*0;?)(?=[\s\S]*?--y\s*:\s*0;?)[\s\S]*?\}/,
            hint: {
                concept: 'Initial values prevent CSS from breaking before JavaScript starts sending data.',
                strategy: 'Define the default local tokens.',
                solution: '--x: 0; --y: 0;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS REACTION ENGINE */
body {
    background: #000;
    margin: 0;
    overflow: hidden;
    height: 100vh;
}

.tracking-panel {
    width: 100%;
    height: 100%;
    /* 1, 2, 3. Implement Dynamic FX below */
}

.label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: monospace;
    font-size: 2rem;
    pointer-events: none;
    letter-spacing: 5px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="tracking-panel"></div>
<div class="label">NEURAL_INTERFACE_ACTIVE</div>

<script>
    // THE JS BRIDGE (Internal Logic for this Lab)
    const panel = document.querySelector('.tracking-panel');
    window.addEventListener('mousemove', (e) => {
        panel.style.setProperty('--x', e.clientX);
        panel.style.setProperty('--y', e.clientY);
    });
</script>
`
        }
    ]
};
