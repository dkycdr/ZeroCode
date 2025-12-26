import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4GridTemplates = {
    id: 'css-unit3-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Visual Layouts (Areas & Auto-Fit)',
    duration: '30 min read',
    content: `
# Deep Dive: Visual Layouts (Areas & Auto-Fit)

## 1. The Core Concept: Semantic Grid Mapping
Architect, this is the pinnacle of CSS layout. Until now, we’ve used line numbers like coordinates. But for a complex system like the **Nexus AI Command Center**, numbers can get confusing.

What if you could draw your layout using words? **Grid Template Areas** allow you to map out your grid visually directly inside your CSS. It is the most readable and maintainable way to build a professional interface.

---

## 2. Visual: The ASCII Map
Look at how easy it is to understand this layout without reading a single line of alignment code:

\`\`\`css
grid-template-areas:
    "head head head"
    "side main main"
    "side foot foot";
\`\`\`

You then simply tell each child element which "Area" it belongs to:
\`\`\`css
.header { grid-area: head; }
.sidebar { grid-area: side; }
\`\`\`

---

## 3. The Responsive Secret: \`auto-fit\` vs \`auto-fill\`
When building for a world with thousands of different screen sizes, you cannot always know how many columns you need.
Senior Architects use the **Dynamic Repeat System**:

\`\`\`css
/* The "Magic" Responsive Line */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`

### How it works:
1.  The browser fills the row with as many 250px columns as possible.
2.  If there is extra room, the columns expand (\`1fr\`) to fill it.
3.  If the screen gets smaller, columns automatically drop to the next line.
4.  **No Media Queries Required.** This is the "Holy Grail" of responsive design.

---

## 4. Under the Hood: The \`fr\` calculation in Auto-Fit
- **\`auto-fill\`**: Creates as many tracks as can possibly fit, even if some of them are empty. Use this if you want to keep your grid visible (like a photo gallery grid).
- **\`auto-fit\`**: Creates as many tracks as can fit, but then **collapses** the empty tracks to 0px. This makes your existing items grow to fill the entire row. 90% of the time, this is what you want.

---

## 5. Machine Logic: The Named Line Shortcut
Did you know that when you define a Grid Area (e.g., \`main\`), the browser automatically creates named lines for you?
- \`main-start\`
- \`main-end\`
You can use these names for any other elements that need to align perfectly with the boundaries of that area.

---

## 6. Mental Model: The Painted Canvas
Imagine a blank canvas divided into a grid. 
- First, you take a pencil and label each region (\`head\`, \`nav\`, \`hero\`). 
- Then, you take your actual objects (the HTML items) and place them onto the regions you labeled. 
- If you decide to move the sidebar to the right, you only have to change the label on the canvas, not the objects themselves.

---

## 7. Senior Architect's Decision: Future-Proofing
By using Grid Template Areas, you make your code incredibly easy to maintain. A year from today, another architect can look at your CSS and instantly understand the layout structure without having to count grid lines or interpret complex spanning math.

---

## 8. Summary Checklist
- [ ] Use \`grid-template-areas\` for complex, readable layouts.
- [ ] Use \`repeat(auto-fit, minmax(...))\` for responsive grids without media queries.
- [ ] Use \`grid-area\` on the child elements to attach them to your map.

> [!IMPORTANT]
> **Mission Objective**: Absolute Clarity. Your code should be a mirror of your visual design. If your layout is complex, don't use line numbers—use named areas.

> [!TIP]
> **Pro Tip**: You can use a period \`.\` in your template areas to represent an empty grid cell. 
> \`"header . profile"\` creates a header, an empty hole in the middle, and a profile slot on the right.

> [!CAUTION]
> **Logic Pitfall**: All regions in a \`grid-template-areas\` map must form a perfect rectangle. You cannot create "L-shaped" or complex irregular areas. If you try, the browser will ignore the entire law.
`
};
