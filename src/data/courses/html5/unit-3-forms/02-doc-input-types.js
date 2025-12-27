import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2InputEcosystem = {
    id: 'html5-u3-doc-2-inputs',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Input Ecosystem',
    duration: '12 min read',
    content: `
# Deep Dive: The Input Ecosystem ⌨️

HTML5 gave us "Smart Inputs".
Instead of just \`type="text"\`, we have specific types that trigger special keyboards on mobile phones.

## 1. The Smart Types

*   **\`type="email"\`**: Triggers keyboard with \`@\` and \`.com\`. Validates format automatically.
*   **\`type="tel"\`**: Triggers numeric keypad.
*   **\`type="url"\`**: Triggers keyboard with \`/\` and \`.com\`.
*   **\`type="search"\`**: Adds an "X" to clear text.

## 2. The Selection Types

### Radio Buttons (Pick One)
Used for mutually exclusive choices (e.g., Gender, Yes/No).
**Rule**: They must share the same \`name\` attribute.

\`\`\`html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
\`\`\`

### Checkboxes (Pick Many)
Used for independent options (e.g., "Subscribe to newsletter").

\`\`\`html
<input type="checkbox" name="hobbies" value="coding"> Coding
<input type="checkbox" name="hobbies" value="gaming"> Gaming
\`\`\`

## 3. The Dropdown (\`<select>\`)
Used when you have too many options for radio buttons (e.g., Country list).

\`\`\`html
<select name="country">
    <option value="id">Indonesia</option>
    <option value="us">United States</option>
</select>
\`\`\`
`
};
