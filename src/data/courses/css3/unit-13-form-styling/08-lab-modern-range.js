import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4ModernRange = {
    id: 'css-unit13-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Modern Range Sliders',
    duration: '30 min',
    content: `
# Lab: Modern Range Sliders (Pseudo-Element Mastery)

## 1. The Concept: Complex Pseudo-Targets
Architect, the HTML5 \`<input type="range">\` is a dual-component element consisting of a **Track** (the line) and a **Thumb** (the knob). To style these effectively for the **Nexus AI Core**, we must target them using vendor-specific pseudo-elements.

These are not standard classes; they are "Internal Elements" managed by the browser. To gain full control, we first strip the default appearance and then rebuild the aesthetic using specialized selectors like \`::-webkit-slider-thumb\`.

---

## 2. The Mission: The Neural Intensity Slider
You are building the **Neural Intensity Controller**—a high-fidelity slider used to calibrate AI output.

### Deployment Parameters:
1.  **Native Reset**: Set \`appearance: none;\` on the range input.
2.  **Track Engineering**: Set the track \`height\` to **4px**, \`background\` to a dark charcoal (\`#1a1a1e\`), and ensure \`border-radius\` is applied.
3.  **Thumb Forge**: Target \`::-webkit-slider-thumb\`. Reset its appearance and set \`width/height\` to **24px**.
4.  **The Glow**: Give the thumb the signature Nexus cyan (\`#4cc9f0\`) background and make it perfectly circular.

---

## 3. Machine Logic: The Shadow DOM Boundary
The "Thumb" of a slider exists in the browser's **Shadow DOM**. Standard CSS selectors cannot "reach" inside to see it. We use the specialized double-colon pseudo-elements to "tunnel" through this boundary and apply our elite styling.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Vendor Divergence**: To support Firefox, you would additionally need to target \`::-moz-range-thumb\`. In this lab, we focus on the Webkit standard (Chrome/Edge/Safari).

> [!TIP]
> **Interactive Feedback**: Add a \`cursor: pointer\` to the thumb and a \`transition\` to the background-color to make the slider feel alive when the user engages with it.
`,
    tasks: [
        {
            id: 1,
            description: 'The Neutral Reset: Set "appearance: none;" on the "input[type="range"]".',
            completed: false,
            regex: /input\[type=['"]range['"]\]\s*\{(?=[\s\S]*?appearance\s*:\s*none;?)[\s\S]*?\}/,
            hint: {
                concept: 'Removing appearance is the mandatory first step for slider customization.',
                strategy: 'General reset on the range type.',
                solution: 'appearance: none;'
            }
        },
        {
            id: 2,
            description: 'The Track Core: Set "height: 6px;", "background: #1a1a1e;", and "border-radius: 3px;".',
            completed: false,
            regex: /input\[type=['"]range['"]\]\s*\{(?=[\s\S]*?height\s*:\s*6px;?)(?=[\s\S]*?background\s*:\s*#1a1a1e;?)(?=[\s\S]*?border-radius\s*:\s*3px;?)[\s\S]*?\}/,
            hint: {
                concept: 'The track is the structural base of the slider.',
                strategy: 'Update the track properties.',
                solution: 'height: 6px; background: #1a1a1e; border-radius: 3px;'
            }
        },
        {
            id: 3,
            description: 'The Thumb Forge: Target "input::-webkit-slider-thumb". Set "appearance: none;", "width: 24px;", and "height: 24px;".',
            completed: false,
            regex: /::-webkit-slider-thumb\s*\{(?=[\s\S]*?appearance\s*:\s*none;?)(?=[\s\S]*?width\s*:\s*24px;?)(?=[\s\S]*?height\s*:\s*24px;?)[\s\S]*?\}/,
            hint: {
                concept: 'The thumb requires its own appearance reset to be styled.',
                strategy: 'Target the Webkit pseudo-element.',
                solution: 'appearance: none; width: 24px; height: 24px;'
            }
        },
        {
            id: 4,
            description: 'The Nexus Core: Set the thumb "background" to "#4cc9f0;" and "border-radius: 50%;".',
            completed: false,
            regex: /::-webkit-slider-thumb\s*\{(?=[\s\S]*?background\s*:\s*#4cc9f0;?)(?=[\s\S]*?border-radius\s*:\s*50%;?)[\s\S]*?\}/,
            hint: {
                concept: 'Applying the brand color and rounding the thumb creates the premium look.',
                strategy: 'Add the visual properties to the thumb.',
                solution: 'background: #4cc9f0; border-radius: 50%;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEURAL INTENSITY CONTROLLER - RANGE ENGINE */
body {
    background: #000;
    padding: 100px;
}

input[type="range"] {
    width: 100%;
    outline: none;
    /* 1 & 2. Reset and style the Track below */

}

/* 3 & 4. Target and forge the Thumb below */
input[type="range"]::-webkit-slider-thumb {
    cursor: pointer;
    box-shadow: 0 0 15px rgba(76, 201, 240, 0.4);
    transition: transform 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.1);
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="max-width: 500px; margin: auto;">
    <label style="color: #4cc9f0; font-family: 'Space Mono', monospace; display: block; margin-bottom: 20px;">
        AI_OUTPUT_INTENSITY
    </label>
    <input type="range" min="0" max="100" value="75">
</div>`
        }
    ]
};
