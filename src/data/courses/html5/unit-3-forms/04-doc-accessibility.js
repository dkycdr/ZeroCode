import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4A11y = {
    id: 'html5-u3-doc-4-a11y',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Accessible Forms (A11y)',
    duration: '15 min read',
    content: `
# Deep Dive: Accessible Forms (A11y) ♿

Forms are the hardest part of the web for disabled users.
If you mess this up, you block people from buying your product.

## 1. Explicit Labels
Always connect labels with \`for\`.
Placing text near an input isn't enough. Screen readers need the programmatic link.

## 2. Fieldsets and Legends
When you have a group of related inputs (like a Radio group), wrap them in a \`<fieldset>\`.
Use \`<legend>\` to title the group.

\`\`\`html
<fieldset>
    <legend>Choose your Plan</legend>
    
    <input type="radio" name="plan" id="free">
    <label for="free">Free</label>
    
    <input type="radio" name="plan" id="pro">
    <label for="pro">Pro</label>
</fieldset>
\`\`\`
Screen reader announces: *"Choose your Plan group. Free, Radio button, not checked."*

## 3. Placeholder is NOT a Label
**Never** use \`placeholder\` as a replacement for \`<label>\`.
Placeholders disappear when you type. They are low contrast. They are bad UX for cognition.
`
};
