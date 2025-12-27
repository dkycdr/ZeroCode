import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Validation = {
    id: 'html5-u3-doc-3-validation',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Built-in Validation (No JS)',
    duration: '10 min read',
    content: `
# Deep Dive: Built-in Validation (No JS) 🛡️

You don't always need Javascript to validate forms. HTML5 has powerful built-in guards.

## 1. The \`required\` Attribute
Prevents submission if the field is empty.
Browser will show a native popup: "Please fill out this field."

\`\`\`html
<input type="text" required>
\`\`\`

## 2. The \`pattern\` Attribute (Regex)
Allows you to define a specific format using Regular Expressions.

\`\`\`html
<!-- Must be exactly 5 digits (Zip Code) -->
<input type="text" pattern="[0-9]{5}" title="Five digit zip code">
\`\`\`

## 3. Min/Max Logic
Restrict numbers or dates.

\`\`\`html
<!-- Age must be 18+ -->
<input type="number" min="18" max="99">
\`\`\`

## 4. Input Modes
Helps mobile keyboards without enforcing validation.
*   \`inputmode="numeric"\`: Shows numbers.
*   \`inputmode="decimal"\`: Shows numbers + decimal point.
`
};
