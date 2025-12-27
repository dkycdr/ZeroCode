import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1AdaptiveShell = {
    id: 'css-unit4-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Adaptive Shell (Mobile-First)',
    duration: '45 min',
    content: `
# Lab: The Adaptive Shell (Mobile-First)

## 1. The Concept: Progressive Expansion
Architect, the **Nexus AI Core Interface** must be accessible to field agents on mobile handsets. We cannot afford a "Desktop-Only" mindset. 

In this lab, you will implement the **Mobile-First Strategy**. You will write the base styles for a single-column mobile view, and then use a **min-width Media Query** to expand into a professional multi-column dashboard for desktop users.

---

## 2. The Mission: The Comms Terminal
You are building the **Global Communications Terminal**:
1.  **Compact Base**: Set the \`.terminal-container\` to be a single column by default (Mobile-First).
2.  **The Expansion Query**: Use \`@media (min-width: 768px)\` to detect tablet/desktop screens.
3.  **Lattice Activation**: Inside the query, turn the container into a 2-column Grid.

---

## 3. Senior Guidance: The Cascading Flow
Remember, any code you write in the "Base" (outside the query) will still apply on Desktop. You only need to write the *differences* inside the Media Query. This makes your CSS lightweight and logical.

> [!IMPORTANT]
> **Mission Objective**: Efficiency. Ensure that your mobile view looks intentional and polished, not just like a "shrunken" desktop site.
`,
    tasks: [
        {
            id: 1,
            description: 'The Compact Base: Ensure ".terminal-container" has "display: flex;" and "flex-direction: column;" as its default (mobile) state.',
            completed: false,
            regex: /\.terminal-container\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?flex-direction\s*:\s*column;?)[\s\S]*?\}/,
            hint: {
                concept: 'Mobile-first means the default styles are for the smallest screen.',
                strategy: 'The flex-direction column stacks items vertically.',
                solution: 'display: flex; flex-direction: column;'
            }
        },
        {
            id: 2,
            description: 'The Viewport Trigger: Create a media query for "@media (min-width: 768px)".',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\}/,
            hint: {
                concept: 'min-width targets screens at or wider than the specified value.',
                strategy: 'Write the @media block at the bottom of the CSS file.',
                solution: '@media (min-width: 768px) { ... }'
            }
        },
        {
            id: 3,
            description: 'The Structural Shift: Inside the media query, change ".terminal-container" to "display: grid;" and "grid-template-columns: 1fr 1fr;".',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\.terminal-container\s*\{(?=[\s\S]*?display\s*:\s*grid;?)(?=[\s\S]*?grid-template-columns\s*:\s*1fr\s+1fr;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Nested selectors inside media queries override the base styles.',
                strategy: 'Make sure your .terminal-container rule is inside the @media braces.',
                solution: '.terminal-container { display: grid; grid-template-columns: 1fr 1fr; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS GLOBAL COMMS TERMINAL */
body {
    background: #05050a;
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 20px;
}

/* 1. Base Mobile Styles (Vertical) */
.terminal-container {
    gap: 20px;
}

.comms-module {
    background: #111;
    border-left: 4px solid #4cc9f0;
    padding: 24px;
}

.comms-module h3 {
    margin: 0 0 10px 0;
    font-size: 14px;
    letter-spacing: 2px;
}

.status-indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #0f0;
    border-radius: 50%;
    margin-right: 8px;
}

/* 2, 3. Add the Media Query and Grid Shift below */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="terminal-container">
    <div class="comms-module">
        <h3>SIGNAL_RECEIVER_A</h3>
        <p><span class="status-indicator"></span> UP_LINK ACTIVE</p>
    </div>
    
    <div class="comms-module">
        <h3>SIGNAL_RECEIVER_B</h3>
        <p><span class="status-indicator"></span> LOW_LATENCY MODE</p>
    </div>
</div>`
        }
    ]
};
