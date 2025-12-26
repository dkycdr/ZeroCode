import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3WritingModes = {
    id: 'css-unit11-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Writing Modes',
    duration: '35 min read',
    content: `
# Deep Dive: Writing Modes & Orientation

## 1. The Scenario: The Sideways Identity
Architect, within the **Nexus AI Core**, we occasionally need to present information in unconventional orientations to command attention. Imagine a vertical "Status Badge" attached to the spine of a data card, or a sidebar tab that reads from top to bottom.

In the legacy era, engineers used \`transform: rotate(-90deg)\`. But this created a massive layout glitch: the rotated element still occupied its original horizontal space in the DOM, forcing developers into a "Math Nightmare" to reposition it.

The **Elite Solution** is the **\`writing-mode\`** property. This property changes how the engine renders text from its foundation, automatically rotating the Logical Axes (Inline and Block) without breaking your layout flow.

---

## 2. Machine Logic: Writing Mode States
There are three primary values an Elite Architect must master:

1.  **horizontal-tb (Default)**: Text flows horizontally; blocks stack Top-to-Bottom.
2.  **vertical-rl**: Text flows vertically (Top-to-Bottom); blocks stack Right-to-Left. (Standard for traditional East Asian typography).
3.  **vertical-lr**: Text flows vertically (Top-to-Bottom); blocks stack Left-to-Right.

### The Logical Pivot:
When you switch to \`writing-mode: vertical-rl\`:
- \`inline-start\`, which was "Left," now points to **Top**.
- \`block-start\`, which was "Top," now points to **Right**.

---

## 3. Visual: The Axis Rotation Map
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph LR
    H["horizontal-tb (Standard)"] -->|Logic Pivot| V["vertical-rl (Vertical)"]
    
    subgraph Physics_H ["Physics: Horizontal"]
        HT["Top (block-start)"]
        HL["Left (inline-start)"]
    end
    
    subgraph Physics_V ["Physics: Vertical"]
        VT["Top (now inline-start)"]
        VR["Right (now block-start)"]
    end
    
    style Physics_V fill:#1a1a1e,stroke:#ffd700
    style HT fill:#f72585,stroke:#333
    style HL fill:#4cc9f0,stroke:#333
    style VT fill:#4cc9f0,stroke:#333
    style VR fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 4. Senior Architect's Decision: Typographic Flexibility
Using \`writing-mode\` in tandem with logical properties grants you the power to create highly artistic layouts without sacrificing accessibility. Text rotated via writing modes remains fully readable by Screen Readers and selectable by users in a natural, expected manner—unlike text rotated via raw CSS transforms.

**High-Utility Use Cases:**
- Sidebar navigation labels.
- Technical chart axes.
- Brutalist typography in landing pages.
- Traditional multi-language support (JP/CN/KR).

---

## 5. Mental Model: The Turntable
Imagine your website is a vinyl record on a turntable. 
- Changing the **Writing Mode** is like physically rotating the record. 
- Using **Logical Properties** is like keeping the needle at the "Start" of the track. No matter how you rotate the record, the needle always knows exactly where the music begins.

---

## 6. The Checklist of Creative Orientation
- [ ] Use \`text-combine-upright: all\` if you need numbers (like "24") to remain horizontal within a purely vertical text stream.
- [ ] Always pair \`writing-mode\` with logical properties to ensure padding/margin don't get "trapped" in the wrong physical direction.
- [ ] Check cursor interaction! Scrolling and arrow keys may behave differently in vertical modes.

> [!IMPORTANT]
> **Layout Strategy**: When switching to a vertical mode, your \`block-size\` (physical width) becomes critical. If undefined, the text may overflow or collapse based on parent's constraints.

> [!TIP]
> **Pro Tip**: Want the text rotated but want the letters to stay upright (stacked)? Use \`text-orientation: upright;\` alongside a vertical writing mode. Perfect for vertical banners and street-sign aesthetics.

> [!CAUTION]
> **Font Support**: Not all luxury fonts are designed for vertical orientation. Always test your typography in vertical mode to ensure it maintains its visual integrity and spacing.
`
};
