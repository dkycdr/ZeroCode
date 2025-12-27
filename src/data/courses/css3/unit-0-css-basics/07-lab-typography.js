import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Typography = {
    id: 'css-unit0-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Data Font (Typography)',
    duration: '30 min',
    content: `
# Lab: The Data Font (Typography)

## 1. The Theory: Legibility vs Readability
- **Legibility**: Can you identify the letter "b" from "h"? (Function)
- **Readability**: Is it comfortable to read a whole page? (Experience)
- **Monospace**: Every letter has the same width. Used by coders and terminals.

## 2. The Golden Ratio: 1.6
For comfortable reading, your \`line-height\` (space between lines) should be about 1.5x to 1.6x the font size. Anything less creates a "Wall of Text".

## 3. Mission Instructions
Calibrate the Nexus text engine.
**Step 1**: Use the **'Inter'** font for a clean, modern UI.
**Step 2**: The paragraph is too cramped. Increase \`line-height\` to **1.6**.
**Step 3**: The system log needs to look robotic. Spread the letters out (\`2px\`) and force **UPPERCASE**.
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: On `body`, set `font-family: \'Inter\', sans-serif;`',
            completed: false,
            regex: /body\s*\{(?=[\s\S]*?font-family\s*:\s*'?Inter'?\s*,\s*sans-serif;?)[\s\S]*?\}/,
            hint: {
                concept: 'Font Family',
                strategy: 'Always provide a fallback (sans-serif) in case the font fails to load.',
                solution: "font-family: 'Inter', sans-serif;"
            }
        },
        {
            id: 2,
            description: 'Step 2: On `.content-text`, set `line-height: 1.6;`',
            completed: false,
            regex: /\.content-text\s*\{(?=[\s\S]*?line-height\s*:\s*1\.6;?)[\s\S]*?\}/,
            hint: {
                concept: 'Line Height (Vertical Rhythm)',
                strategy: 'Use a unitless number (1.6) so it scales with the font size.',
                solution: 'line-height: 1.6;'
            }
        },
        {
            id: 3,
            description: 'Step 3: On `.system-log`, set `letter-spacing: 2px;` and `text-transform: uppercase;`',
            completed: false,
            regex: /\.system-log\s*\{(?=[\s\S]*?letter-spacing\s*:\s*2px;?)(?=[\s\S]*?text-transform\s*:\s*uppercase;?)[\s\S]*?\}/,
            hint: {
                concept: 'Text Transform',
                strategy: 'Don\'t type in ALL CAPS in HTML. Use CSS to transform it.',
                solution: 'letter-spacing: 2px; text-transform: uppercase;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `
/* --- STEP 1: GLOBAL FONT --- */
body {
    background: #000;
    color: #fff;
    /* TODO: Set font-family to 'Inter', sans-serif */
    
}

/* --- STEP 2: READABILITY (Vertical Rhythm) --- */
.content-text {
    max-width: 600px;
    font-size: 16px;
    /* TODO: Set line-height to 1.6 */
    
}

/* --- STEP 3: TERMINAL STYLE --- */
.system-log {
    background: #111;
    padding: 10px;
    font-family: monospace;
    color: #00ff41;
    /* TODO: Set letter-spacing to 2px */
    /* TODO: Set text-transform to uppercase */
    
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="padding: 50px;">
    <h1>OPERATIONAL_REPORT</h1>
    <p class="content-text">
        The Nexus AI engine has successfully processed 4.2TB of incoming neural data. 
        All systems are operating within expected parameters. No anomalies detected.
    </p>
    
    <div class="system-log">
        log_entry: successful_handshake
    </div>
</div>`
        }
    ]
};
