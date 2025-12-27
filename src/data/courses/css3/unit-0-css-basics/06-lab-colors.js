import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Colors = {
    id: 'css-unit0-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Chromatic Engine (Colors)',
    duration: '30 min',
    content: `
# Lab: The Chromatic Engine (Colors)

## 1. The Theory: Mixing Light
Computer screens are just millions of tiny Red, Green, and Blue light bulbs.
- **HEX (#FF0000)**: A robotic code. Hard to guess.
- **RGB (255, 0, 0)**: Mixing paint. "Max Red, No Green, No Blue".
- **HSL (0, 100%, 50%)**: Natural language. "Which Color? How Vivid? How Bright?"

## 2. Why HSL Wins
Imagine you want a "Darker Blue".
- **In Hex (#0000FF)**: You have to do math to get #0000AA.
- **In HSL**: You just turn the "Lightness" knob down. \`hsl(240, 100%, 30%)\`. Simple.

## 3. Mission Instructions
The Nexus Dashboard is dark, but it needs life.
**Step 1**: Give the status card a glowing green border using **HSL**.
**Step 2**: Create a "Critical Alert" dot using pure **RGB** red.
**Step 3**: Create a modern "Glass" panel using **RGBA** (Alpha = Transparency).
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: On `.status-card`, set `border-color: hsl(140, 100%, 50%);`',
            completed: false,
            regex: /\.status-card\s*\{(?=[\s\S]*?border-color\s*:\s*hsl\(\s*140\s*,\s*100%\s*,\s*50%\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'HSL (Hue, Saturation, Lightness)',
                strategy: 'Hue 140 is Green. Saturation 100% is vivid.',
                solution: 'border-color: hsl(140, 100%, 50%);'
            }
        },
        {
            id: 2,
            description: 'Step 2: On `.alert-dot`, set `background-color: rgb(255, 0, 0);`',
            completed: false,
            regex: /\.alert-dot\s*\{(?=[\s\S]*?background-color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'RGB (Red, Green, Blue)',
                strategy: '255 is the maximum value for a color channel.',
                solution: 'background-color: rgb(255, 0, 0);'
            }
        },
        {
            id: 3,
            description: 'Step 3: On `.panel-info`, set `background-color: rgba(255, 255, 255, 0.1);`',
            completed: false,
            regex: /\.panel-info\s*\{(?=[\s\S]*?background-color\s*:\s*rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.1\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'RGBA (Alpha Channel)',
                strategy: '0.1 means 10% visible (very transparent).',
                solution: 'background-color: rgba(255, 255, 255, 0.1);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS COLOR SYSTEM */
:root {
    --nexus-green: hsl(140, 100%, 50%);
    --nexus-red: rgb(255, 0, 0);
}

.status-card {
    border-width: 2px;
    border-style: solid;
    padding: 20px;
    background: #111;
    
    /* --- STEP 1: HSL BORDER --- */
    /* TODO: Set border-color to hsl(140, 100%, 50%) */
    
}

.alert-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    
    /* --- STEP 2: RGB BACKGROUND --- */
    /* TODO: Set background-color to rgb(255, 0, 0) */
    
}

.panel-info {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 15px;
    color: white;
    
    /* --- STEP 3: GLASS EFFECT (RGBA) --- */
    /* TODO: Set background-color to rgba(255, 255, 255, 0.1) */
    
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="dashboard" style="background: black; padding: 50px; height: 100vh;">
    <!-- Status Card Component -->
    <div class="status-card">
        <h3>STATION_01 <span class="alert-dot"></span></h3>
        
        <!-- Glassmorphism Panel -->
        <div class="panel-info">
            ENCRYPTION: ACTIVE
        </div>
    </div>
</div>`
        }
    ]
};
