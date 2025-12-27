import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3WillChange = {
    id: 'css-unit10-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Hardware Acceleration',
    duration: '35 min read',
    content: `
# Deep Dive: Hardware Acceleration (will-change)

## 1. The Scenario: The Predictive Engine
Architect, imagine you are driving a supercar on the **Nexus AI Digital Circuit**. Before you stomp on the gas pedal, the engine must already be warm and primed. In the world of the browser, allocating memory for the Graphics Card (GPU) takes a few milliseconds.

If you only tell the browser to use the GPU at the exact moment an animation begins, you will often see "Jank"—a tiny, stuttering lag in the first frame. The **\`will-change\`** property is our way of signaling to the browser: *"Prepare yourself; this element is about to move!"*

---

## 2. Machine Logic: Layer Promotion
Normally, all elements of a website are drawn on a single large "Canvas" (The Root Layer). When you use \`will-change\`, the browser **Promotes** that element to its own dedicated layer (like putting it on its own separate sheet of transparent plastic).

### Syntax Protocol:
\`\`\`css
.nexus-sidebar {
    /* Signal upcoming motion on the transform path */
    will-change: transform;
}
\`\`\`

By declaring this, the browser pre-allocates VRAM in the background. When the user interacts, the element is already on the high-speed graphic tracks.

---

## 3. Visual: Memory Allocation
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph RAM ["Main System RAM (Standard)"]
        Tree["Main DOM Tree"]
        Static["Static Content Cards"]
    end
    
    subgraph VRAM ["High-Speed VRAM (GPU)"]
        LayerA["Promoted Layer: .nexus-sidebar"]
        LayerB["Promoted Layer: .nexus-modal"]
    end
    
    Tree -->|will-change| LayerA
    Tree -->|scroll-event| LayerB
    
    style LayerA fill:#4cc9f0,stroke:#333
    style LayerB fill:#f72585,stroke:#333
    style VRAM fill:#1a1a1e,stroke:#ffd700
\`\`\`

</div>

---

## 4. The Danger Level: VRAM Saturation
Why not add \`will-change\` to **every** element to make everything fast? Because GPUs have limited video memory (VRAM). 

Every time you promote an element to a new layer, the browser consumes a portion of that dedicated memory. If you have too many layers, the browser will lag dramatically, drain the mobile device's battery, and eventually crash (The Black Screen of Death).

---

## 5. Mental Model: The Pre-Heated Oven
- **Standard CSS** is putting the pizza in the oven and *then* turning it on. You have to wait for the heat to build (The Jank).
- **will-change** is pre-heating the oven. When the pizza (The Interaction) arrives, it starts cooking instantly at the correct temperature.

---

## 6. Senior Architect's Guidance: Just-In-Time Optimization
In the Nexus environment, we follow the "Minimize Layers" philosophy:
1.  **Don't start with it**: Write your animations normally first.
2.  **Measure**: If you detect jank on lower-spec devices, only then add \`will-change\`.
3.  **Temporary Usage**: Ideally, use JavaScript to add \`will-change\` when the user hovers over a trigger, and then **remove it** once the animation ends to release GPU memory.

---

## 7. The Checklist of Wise Acceleration
- [ ] Only use for GPU-supported properties (\`transform\` & \`opacity\`).
- [ ] Never use \`will-change: all;\`. The browser won't know what to optimize and will simply waste memory.
- [ ] Provide "Preparation Lead Time". Don't declare \`will-change\` on the same CSS rule that triggers the animation; it needs time to process the promotion.

> [!CAUTION]
> **Warning**: Never promote massive elements (like a full-page wrapper) to the GPU. This can cause rendering artifacts or memory overflow on mobile browsers.

> [!TIP]
> **Pro Tip**: Use the **Layers** panel in Chrome DevTools to see exactly which elements have been promoted to the GPU. Look for the "Composited Layer" count.

> [!IMPORTANT]
> **Ethical Engineering**: Excessive use of hardware acceleration is literally "stealing" battery life from your mobile users. Use it sparingly.
`
};
