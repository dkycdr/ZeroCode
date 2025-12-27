import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4NamedLines = {
    id: 'css-unit16-doc-lines',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Named Lines Strategy',
    duration: '15 min read',
    content: `
# Deep Dive: Named Lines Strategy

## 1. Beyond Numbers
Using \`grid-column: 1 / 3\` is fine for small demos.
But in large apps, "Line 3" might become "Line 4" if you add a sidebar. Your layout breaks.

**Solution**: Give names to your invisible lines.

\`\`\`css
.container {
    display: grid;
    grid-template-columns: [main-start] 1fr [content-mid] 1fr [main-end];
}

.item {
    grid-column: main-start / main-end;
}
\`\`\`

## 2. The Framework Approach (Bootstrap-ish)
You can create a robust 12-column system where every track has the same name.

\`\`\`css
grid-template-columns: repeat(12, [col-start] 1fr [col-end]);
\`\`\`

Wait, multiple lines with the same name? **Yes.**
CSS Grid is smart.
*   \`grid-column: col-start / col-end\` -> Spans 1 column (the first one found).
*   \`grid-column: col-start 1 / col-end 3\` -> Spans from the 1st "start" marker to the 3rd "end" marker.

## 3. -start and -end Magic
If you name a Grid Area \`sidebar\`, the lines surrounding it actomatically get implicit names:
*   \`sidebar-start\`
*   \`sidebar-end\`

You can leverage this to overlap items onto the sidebar area without explicitly using the area name.

> [!TIP]
> Use Named Lines when building **Design Systems** where other developers will consume your grid classes.
`
};
