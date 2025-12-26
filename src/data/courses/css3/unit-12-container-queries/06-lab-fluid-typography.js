import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2FluidTypography = {
    id: 'css-unit12-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Fluid Container Typography',
    duration: '20 min',
    content: `
# Lab: Fluid Container Typography (CQ Units)

## 1. The Concept: Internal Fluidity
Architect, we often require headlines that automatically scale to fill their container's width, ensuring the text never overflows or leaves awkward gaps. 

While \`vw\` units scale according to the global window, **\`cqw\`** (Container Query Width) units scale according to the **Local Container**. This allows a headline to look massive in the hero section but perfectly legible when embedded in a smaller analytics widget.

---

## 2. The Mission: The Kinetic Headline
You are tasked with engineering a **Kinetic Headline** for the Nexus AI Dashboard. The text must dynamically resize based on the width of the \`.banner-context\`.

### Deployment Parameters:
1.  **Metric Registration**: Register the \`.banner-context\` as a container using the \`inline-size\` protocol.
2.  **The Fluid Command**: Set the \`font-size\` of the \`.headline\` to **12cqw**. 
3.  **Safety Protocol**: Provide a fallback \`font-size: 24px;\` before the fluid unit to support legacy systems or missing contexts.
4.  **Visual Polish**: Center the text using \`text-align: center\` and apply the signature neon glow.

---

## 3. Machine Logic: Relative Precision
When you apply \`12cqw\`, the browser calculates exactly 12% of the parent's width and assigns that value to the character height. As you resize the parent container, the calculation updates in real-time on the layout thread.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Unit Dependency**: \`cqw\` will not function correctly unless the parent has an established \`container-type\`. If the context is missing, the unit will often fallback to the screen's viewport width.

> [!TIP]
> **Clamping**: In production, you would often wrap your unit in a \`clamp()\` function (e.g., \`clamp(20px, 12cqw, 80px)\`) to prevent the text from becoming illegibly small or excessively large.
`,
    tasks: [
        {
            id: 1,
            description: 'The Context Lock: On ".banner-context", set "container-type: inline-size;".',
            completed: false,
            regex: /\.banner-context\s*\{(?=[\s\S]*?container-type\s*:\s*inline-size;?)[\s\S]*?\}/,
            hint: {
                concept: 'This establishment of context is required for cqw units to function.',
                strategy: 'Apply property to the context wrapper.',
                solution: 'container-type: inline-size;'
            }
        },
        {
            id: 2,
            description: 'The Fluid Unit: On ".headline", set "font-size: 12cqw;".',
            completed: false,
            regex: /\.headline\s*\{(?=[\s\S]*?font-size\s*:\s*12cqw;?)[\s\S]*?\}/,
            hint: {
                concept: 'cqw units are relative to the direct container width.',
                strategy: 'Use the cqw unit for font sizing.',
                solution: 'font-size: 12cqw;'
            }
        },
        {
            id: 3,
            description: 'The Safety Fallback: Ensure "font-size: 24px;" appears BEFORE the cqw value.',
            completed: false,
            regex: /\.headline\s*\{(?=[\s\S]*?font-size\s*:\s*24px;?)(?=[\s\S]*?font-size\s*:\s*12cqw;?)[\s\S]*?\}/,
            hint: {
                concept: 'Browsers process CSS downwards; the fallback provides a value if cqw is unsupported.',
                strategy: 'Add the pixel-based font size above the fluid one.',
                solution: 'font-size: 24px; font-size: 12cqw;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS KINETIC HEADLINE - FLUID ENGINE */
body {
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
}

.banner-context {
    border: 2px solid #1a1a1e;
    background: #0a0a0f;
    padding: 40px;
    width: 80%; /* Try changing this width in the UI */
    /* 1. Establish the containment context below */

}

.headline {
    color: #4cc9f0;
    font-family: 'Space Mono', monospace;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    /* 2 & 3. Implement fluid font-size with fallback below */

}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="banner-context">
    <h1 class="headline">SYSTEM_SYNC_ACTIVE</h1>
</div>

<p style="color: #666; font-family: sans-serif; margin-top: 20px;">
    Architect, observe the headline resize as you adjust the width of the .banner-context.
</p>`
        }
    ]
};
