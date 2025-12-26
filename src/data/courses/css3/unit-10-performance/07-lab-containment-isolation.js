import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3ContainmentIsolation = {
    id: 'css-unit10-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Containment Isolation',
    duration: '25 min',
    content: `
# Lab: Containment Isolation (Boundary Control)

## 1. The Concept: The Rendering Blast Shield
Architect, imagine you have a localized widget in your sidebar where data updates every millisecond. By default, every time that widget changes size or content, the browser attempts to recalculate the layout of the **entire** page. It is like renovating a single apartment but being forced to recalculate the structural integrity of the entire skyscraper.

The **\`contain\`** property acts as a "Blast Shield." It encapsulates the rendering process so that layout calculations are trapped inside the box, preventing performance "leaks" into the global scope.

---

## 2. The Mission: Isolating the Neural Widget
You must isolate the rendering lifecycle of the **Nexus Core Monitoring Widget** to prevent global reflows.

### Deployment Parameters:
1.  **Strict Dimensioning**: Provide an explicit \`width: 320px;\` and \`height: 480px;\` to the \`.nexus-widget\`.
2.  **Isolation Protocol**: Implement \`contain: strict;\`. This combines layout, style, paint, and size containment into a single performance lock.
3.  **Visual Identity**: Apply the high-fidelity Nexus midnight aesthetic with a sharp cyan border.

---

## 3. Machine Logic: Calculation Lockdown
By declaring \`contain: strict;\`, you are issuing a guarantee to the browser engine: *"This component will never change size from the outside, and nothing inside its border will ever affect the external layout."*

This guarantee is invaluable; the browser can now skip thousands of lines of control code when rendering other parts of your dashboard, leading to a much higher frame rate.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Contextual Usage**: Use containment on complex, high-interaction elements (charts, real-time terminals, infinite feeds) that have fixed outer dimensions.

> [!TIP]
> **Containment Tiers**: If your element has a dynamic height but you still want to isolate its internal repaints, use \`contain: layout paint;\` instead of the more restrictive \`strict\` mode.
`,
    tasks: [
        {
            id: 1,
            description: 'The Physical Limits: On ".nexus-widget", set "width: 320px;" and "height: 480px;".',
            completed: false,
            regex: /\.nexus-widget\s*\{(?=[\s\S]*?width\s*:\s*320px;?)(?=[\s\S]*?height\s*:\s*480px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Strict containment requires an explicit, immutable size.',
                strategy: 'Define width and height in the widget selector.',
                solution: 'width: 320px; height: 480px;'
            }
        },
        {
            id: 2,
            description: 'The Containment Seal: Implement "contain: strict;" to enable rendering isolation.',
            completed: false,
            regex: /\.nexus-widget\s*\{(?=[\s\S]*?contain\s*:\s*strict;?)[\s\S]*?\}/,
            hint: {
                concept: 'contain: strict is the highest level of isolation for a component.',
                strategy: 'Add the contain property.',
                solution: 'contain: strict;'
            }
        },
        {
            id: 3,
            description: 'The Nexus Aesthetic: Set "background: #0a0a0f;", "border: 1px solid #4cc9f0;", and "box-shadow: 0 0 20px rgba(76, 201, 240, 0.1);".',
            completed: false,
            regex: /\.nexus-widget\s*\{(?=[\s\S]*?background\s*:\s*#0a0a0f;?)(?=[\s\S]*?border\s*:\s*1px\s+solid\s+#4cc9f0;?)(?=[\s\S]*?box-shadow\s*:\s*0\s+0\s+20px\s+rgba\(\s*76,\s*201,\s*240,\s*0\.1\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Isolated zones should have a distinct visual presence in the dashboard.',
                strategy: 'Apply the dark background and neon border.',
                solution: 'background: #0a0a0f; border: 1px solid #4cc9f0; box-shadow: 0 0 20px rgba(76, 201, 240, 0.1);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS WIDGET - ISOLATED RENDERING ZONE */
body {
    background: #000;
    padding: 60px;
}

.nexus-widget {
    overflow: hidden;
    border-radius: 4px;
    font-family: 'Space Mono', monospace;
    /* 1, 2, 3. Implement strict containment and styling below */

}

.widget-inner {
    padding: 24px;
    color: #4cc9f0;
    line-height: 1.6;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="nexus-widget">
    <div class="widget-inner">
        <p>[SYSTEM_REPORT]</p>
        <p>RE-LAYOUT_VULNERABILITY: SEALED</p>
        <p>CPU_CYCLES_RESERVED: TRUE</p>
        <div style="height: 1000px; border-left: 1px dashed #222; margin-top: 20px;">
            <!-- Simulated complex nested content -->
        </div>
    </div>
</div>`
        }
    ]
};
