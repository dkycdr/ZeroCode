import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4CqUnits = {
    id: 'css-unit12-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: CQ Units (Container Units)',
    duration: '35 min read',
    content: `
# Deep Dive: CQ Units (The Fluid Engine)

## 1. The Scenario: The Adaptive Headline
Architect, imagine you have a large "Headline" component. You want this text to be as large as possible, but you don't want it to wrap to a second line.

If you use \`px\`, the text is static. 
If you use \`vw\` (Viewport Width), the text responds to the browser window. But if that headline lives in a small sidebar, \`vw\` will make the text massive compared to its tiny container, causing a horrific overflow.

To solve this, we use **CQ Units (Container Query Units)**. These units are relative to the size of the *container*, not the window.

---

## 2. Machine Logic: The Unit Protocol
The most powerful unit in this family is **\`cqw\`** (Container Query Width).

- **1cqw** = 1% of the container's inline size (width).
- **1cqh** = 1% of the container's block size (height).
- **1cqmin** = The smaller of \`cqw\` or \`cqh\`.
- **1cqmax** = The larger of \`cqw\` or \`cqh\`.

### Implementation:
\`\`\`css
.nexus-title {
    /* Always take up 15% of the container's width */
    font-size: 15cqw; 
}
\`\`\`

---

## 3. Visual: Viewport vs. Container Units
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Viewport_Context ["Viewport Units (vw)"]
        V1["Large Screen (Text: 100px)"]
        V2["Small Screen (Text: 40px)"]
    end
    
    subgraph Container_Context ["Container Units (cqw)"]
        C1["Main Slot (Text: 100px)"]
        C2["Sidebar Slot (Text: 25px)"]
    end
    
    style V1 fill:#1a1a1e,stroke:#333
    style C1 fill:#1a1a1e,stroke:#333
    style V2 fill:#f72585,stroke:#333
    style C2 fill:#4cc9f0,stroke:#333
\`\`\`

</div>

---

## 4. Senior Architect's Decision: Liquid Typography
In the **Nexus AI Core**, we utilize \`cqw\` for any component that needs to maintain its internal visual ratio regardless of where it is "plugged in." 

Think of it as **Internal Fluidity**. Your component carries its own responsiveness rules. When the container shrinks, the font shrinks, the padding adjusts, and the margins contract—all in perfect, automated harmony.

---

## 5. Mental Model: The Inflatable Suit
Imagine an inflatable mascot suit. 
- **VW** is like the suit inflating based on how big the stadium is. If the stadium is huge, the suit becomes giant, even if the person inside is small.
- **CQW** is like the suit inflating based on the size of the person wearing it. It always fits the "Container" (the person) perfectly, no matter if they are in a stadium or a hallway.

---

## 6. The Checklist of Fluidity
- [ ] Ensure the parent has \`container-type: inline-size\`. Without this, CQ units fall back to the viewport size (becoming identical to \`vw\`).
- [ ] Use \`cqw\` for SVG-like scaling of text and icons.
- [ ] Combine with \`clamp()\` to prevent the text from becoming microscopic in very small containers.

> [!IMPORTANT]
> **Fallback Requirement**: Always provide a fallback value for older browsers or if containment hasn't been established. The browser will use the last valid declaration.
> \`font-size: 20px; font-size: 5cqw;\`

> [!TIP]
> **Precision Sizing**: \`cqw\` is also excellent for setting border-radius or padding that scales with the component size, keeping the "visual weight" of the UI consistent across all dashboard slots.
`
};
