import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2FlexFlow = {
    id: 'css-unit2-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Traffic Control (Direction & Wrap)',
    duration: '25 min read',
    content: `
# Deep Dive: Traffic Control (Direction & Wrap)

## 1. The Core Concept: Defining the Flow
Architect, in the previous session, we activated the Flex Container. Now, we must learn how to steer the traffic. Just as a civil engineer decides whether a road flows North-South or East-West, you must decide how your content flows through the **Nexus AI** interface.

By default, Flexbox assumes you want a **Row**. But what if you are building an Admiral's Command Sidebar? Or a mobile-view feed? This is where \`flex-direction\` and \`flex-wrap\` come into play.

---

## 2. Visual: The Axis Swap
This is the "Aha!" moment for every Senior Architect. When you change the direction, the **Entire Coordinate System** rotates with it.

\`\`\`mermaid
graph TD
    subgraph RowMode [flex-direction: row]
        RMain[Main Axis -- Horizontal]
        RCross[Cross Axis -- Vertical]
    end
    
    subgraph ColumnMode [flex-direction: column]
        CMain[Main Axis -- Vertical]
        CCross[Cross Axis -- Horizontal]
    end
    
    RowMode --- ColumnMode
    
    style RMain fill:#4cc9f0,stroke:#333
    style CMain fill:#f72585,stroke:#333
\`\`\`

---

## 3. Deep Logic: Properties of Direction
Flexbox provides four primary directions:

1.  **\`row\` (Default)**: Items line up from Left-to-Right (in LTR languages).
2.  **\`row-reverse\`**: Items start from the Right and flow Left. Great for "Last Message First" chat logs.
3.  **\`column\`**: Items stack vertically. Imagine a pile of paper.
4.  **\`column-reverse\`**: Items stack from the bottom up. Perfect for notification stacks that "rise" from the bottom of the screen.

---

## 4. The Wrapping Protocol: \`flex-wrap\`
By default, Flexbox is **stubborn**. It will try to force 100 items into a single line, even if they have to shrink to 1px wide to fit. This is called "No-Wrap."

To fix this, we use the \`flex-wrap\` property:
- **\`nowrap\` (Default)**: Items stay on one line. They will shrink until they break.
- **\`wrap\`**: Items will jump to a second line ("a new flex line") if there isn't enough room.
- **\`wrap-reverse\`**: Like \`wrap\`, but new lines appear **above** the previous ones.

---

## 5. Mental Model: The Bookshelf vs. The Scroll
- **The Scroll (\`nowrap\`)**: One long continuous strip of paper. It can get infinitely wide, but everything stays in one sequence.
- **The Bookshelf (\`wrap\`)**: When the shelf is full, you start a new row below it. This is how most modern "Grid of Cards" layouts are built before they move to CSS Grid.

---

## 6. Under the Hood: Flex Lines
When you set \`flex-wrap: wrap\`, the browser engine doesn't just "push text down." It creates multiple **Independent Flex Lines**. This is a secret detail that many developers miss:
- Alignment commands (like \`align-items\`) are per-line. 
- Items on Line 1 don't care about the height of items on Line 2. 
- If you want to control how those lines are spaced out against each other, you need a different command: \`align-content\`.

---

## 7. Senior Architect's Decision: Mobile-First Strategy
One of the most powerful uses of \`flex-direction\` is for **Media Queries**.
- **Desktop**: Set \`flex-direction: row\` for a wide dashboard.
- **Mobile**: Use a single line of CSS to swap it to \`flex-direction: column\`. 

Suddenly, your complex multi-column layout becomes a perfectly vertical mobile list. This is the foundation of Responsive Design.

---

## 8. Summary Checklist
- [ ] Use \`flex-direction\` to choose your coordinate system.
- [ ] Always check if your "Main Axis" is Horizontal or Vertical.
- [ ] Use \`flex-wrap: wrap\` if you want a multi-line "Gallery" view.
- [ ] Combine them with the shorthand \`flex-flow: column wrap;\`.

> [!IMPORTANT]
> **Mission Objective**: Your goal is to mastery the "Pivot." You should be able to visualize how switching from row to column will affect every child element inside the Nexus console.

> [!TIP]
> **Pro Tip**: If your layout looks "smushed" and your items are ignoring their \`width\`, 99% of the time it's because you forgot to enable \`flex-wrap: wrap\`.

> [!CAUTION]
> **Performance Note**: While wrapping is powerful, a container with thousands of wrapping flex items can cause significant "Layout Thrashing" (heavy CPU usage) during window resizing. For massive lists, consider "Virtual Scrolling" or simpler block layouts.
`
};
