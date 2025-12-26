import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3FlexAlignment = {
    id: 'css-unit2-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Master of Balance (Alignment)',
    duration: '25 min read',
    content: `
# Deep Dive: Master of Balance (Alignment)

## 1. The Core Concept: Solving the Space Problem
Architect, in the old days, the hardest thing about web design wasn't colors or fonts—it was **Space Management**. How do you take three boxes and put them exactly in the middle of a screen? How do you put equal distance between them without hard-coding pixel values that break on other monitors?

Flexbox alignment properties are the "Brain" of the engine. They calculate the **Available White Space** and treat it like a luxury resource that must be distributed according to your laws.

---

## 2. Visual: The 4 Masters of Space
There are four primary properties that control the balance of your Nexus AI UI:

| Property | Axis Controlled | Core Job |
| :--- | :--- | :--- |
| **\`justify-content\`** | **Main Axis** | Horizontal balance (usually). |
| **\`align-items\`** | **Cross Axis** | Vertical balance (usually). |
| **\`align-self\`** | **Cross Axis** | Overrides a single item's balance. |
| **\`align-content\`** | **Cross Axis** | Balance *between* multiple flex lines. |

\`\`\`mermaid
graph LR
    subgraph JustifyContent [justify-content: Main Axis]
        S1[Start] --- C1[Center] --- E1[End]
        SB[Space Between] --- SA[Space Around] --- SE[Space Evenly]
    end
    
    subgraph AlignItems [align-items: Cross Axis]
        ST[Stretch] --- CL[Center] --- FL[Flex-Start/End]
    end
    
    style S1 fill:#4cc9f0
    style ST fill:#f72585
\`\`\`

---

## 3. The Main Axis King: \`justify-content\`
This property only cares about the **Main Axis**. It decides how to use up the "dead space" left over when your items aren't wide enough to fill the container.
- **\`flex-start\`**: Packs items at the beginning.
- **\`flex-end\`**: Packs items at the finish line.
- **\`center\`**: Packs them into a tight cluster in the middle.
- **\`space-between\`**: The first item sticks to the left, the last to the right, and the rest spread out. Perfect for navbars.
- **\`space-around\`**: Every item gets an equal "halo" of space around it.
- **\`space-evenly\`**: The gaps between every item (including the edges) are exactly the same size.

---

## 4. The Cross Axis Guardian: \`align-items\`
This controls the "Gravity" of your items.
- **\`stretch\` (Default)**: Items will grow to fill the container's height. This is why flexbox is famous for "Equal Height Columns."
- **\`center\`**: The "Holy Grail" of CSS. Perfectly centers an item vertically without any hacks.
- **\`flex-start / flex-end\`**: Aligns them to the top or bottom walls.
- **\`baseline\`**: Aligns the items based on the "baseline" of the text inside them. Crucial for buttons with different font sizes.

---

## 5. Mental Model: The Magnet vs. The Balloon
- **Magnet (\`flex-start/end/center\`)**: Your items are heavy. The command simply tells the browser which "wall" to pull them towards.
- **Balloon (\`space-between/around\`)**: Your items are surrounded by invisible "space balloons" that inflate to push the items apart until they hit the container limits.

---

## 6. Edge Case: \`align-content\` vs \`align-items\`
This is the single most confusing part of CSS layout.
- **\`align-items\`**: Controls how items sit inside their **own** line.
- **\`align-content\`**: Controls how multiple **rows** of items are spread out against each other. 
> [!NOTE]
> **Important Rule**: \`align-content\` does **NOTHING** if you only have one single row of items (no wrap). It only works when \`flex-wrap: wrap\` is active.

---

## 7. Under the Hood: The "Auto Margin" Hack
Did you know you can use Flexbox without using \`justify-content\`? 
If you have a flex container and you set \`margin-left: auto\` on an item, it will effectively "push" itself to the far right. 
- Why? Because in a Flex context, \`auto\` margin absorbs all the available space on that side. 
- Professional Tip: This is how you create those cool sub-menus in a header that sit far away from the logo.

---

## 8. Senior Architect's Guidance: Visual Hierarchy
When building a Data Table for Nexus AI, use **\`align-items: center\`** to make sure the "Status Indicators" are perfectly centered next to the user's name, even if the user's name has a larger font.

> [!IMPORTANT]
> **Mission Objective**: Total control. You should never "hope" that an item lands in the right spot. You should define its position using the 4 Masters of Space.

> [!TIP]
> **Pro Tip**: If \`justify-content: center\` is not working, check if your container has a \`width\`. If the container is only as wide as the items inside it, there is no "space" to distribute!

> [!CAUTION]
> **Accessibility Note**: Changing the **visual order** of items using alignment or the \`order\` property does not change their **tab order**. Always ensure that the logical reading order in HTML matches the visual order in CSS for screen reader users.
`
};
