import { CONTENT_TYPES } from '../../../curriculumStructure';

export const doc2AccessibilityScope = {
    id: 'unit-5-doc-scope',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Advanced: Accessibility & Scope',
    duration: '10 min read',
    content: `
# Advanced: Scope & Accessibility

Tables can be confusing for blind users relying on screen readers. Use attributes to guide them.

## The \`scope\` Attribute

The \`scope\` attribute explicitly tells the browser: "This header applies to this column" or "This header applies to this row".

\`\`\`html
<thead>
    <tr>
        <!-- This header controls the column below it -->
        <th scope="col">Date</th>
        <th scope="col">Event</th>
        <th scope="col">Location</th>
    </tr>
</thead>
<tbody>
    <tr>
        <!-- This header controls the row to the right of it -->
        <th scope="row">Jan 1</th>
        <td>New Year</td>
        <td>Times Square</td>
    </tr>
</tbody>
\`\`\`

### Regex & Validation
When validating your code, ensure you place \`scope\` on \`<th>\` tags, not \`<td>\`.

## Responsive Tables?
Tables are rigid. On mobile, they often break layout.
**Modern Solution:** Use CSS to allow horizontal scrolling:

\`\`\`css
.table-wrapper {
    overflow-x: auto;
}
\`\`\`

\`\`\`html
<div class="table-wrapper">
    <table>...</table>
</div>
\`\`\`

This is safer than trying to force tables into flex/grid structures.
    `
};
