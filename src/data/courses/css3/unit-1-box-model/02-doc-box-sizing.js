import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2BoxSizing = {
    id: 'css-unit1-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Sizing Crisis (border-box)',
    duration: '15 min read',
    content: `
# Deep Dive: The Sizing Crisis (border-box)

## 1. The Core Concept: The Math Headache
In the early days of the web, if you wrote \`width: 200px\` and then added \`padding: 20px\`, the total size of your box actually became **240px** (200 + 20 left + 20 right). This made building precise layouts a nightmare of constant mathematical calculation.

---

## 2. Visual: The Calculation Comparison
**A. content-box (The Legacy Way)**
\`\`\`text
Width/Inline-size (200) + Padding (20+20) + Border (2+2) = 244px Final Size
\`\`\`

**B. border-box (The Modern Standard)**
\`\`\`text
Width/Inline-size (200) = Total (200px). 
Padding and Border are absorbed into the defined space.
\`\`\`

---

## 3. Machine Logic: Predictable Geometry
To make layouts predictable, we change how the engine calculates size using the \`box-sizing\` property.

\`\`\`css
* {
    box-sizing: border-box; /* Global Fix */
}
\`\`\`

---

## 4. Senior Architect's Brief: Standard Procedures
At Nexus AI, we always use \`border-box\` globally. This ensures that if you decide a sidebar should be exactly \`260px\`, it will stay \`260px\` no matter how much padding you add to it later.

> [!CAUTION]
> **Architect Warning**: Forgetting \`border-box\` is a leading cause for layouts breaking and dropping to the next line on small screens.

> [!TIP]
> **Pro Tip**: Apply \`box-sizing: border-box\` to the universal selector (\`*\`) at the very top of your CSS file. It is a fundamental rule of modern web development.
`
};
