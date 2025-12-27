import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1CleanCode = {
    id: 'html5-u7-doc-1-clean',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Philosophy: Code is for Humans',
    duration: '10 min read',
    content: `
# Code is for Humans, not Machines.

Machines can read anything. They don't care about spaces, names, or mess.
**Humans do.**
You write code once. You (and your team) will read it 100 times.

## Core Principles

### 1. DRY (Don't Repeat Yourself)
If you copy-paste the same code 3 times, you have created a maintenance nightmare.
*   **Bad**: 3 buttons with identical inline styles.
*   **Good**: 3 buttons sharing one CSS class.

### 2. KISS (Keep It Simple, Stupid)
Don't be clever. Be clear.
*   **Clever**: Using a complex RegEx to validate a name.
*   **Clear**: Using \`<input type="text" required>\`.

### 3. YAGNI (You Ain't Gonna Need It)
Don't add features "just in case" you need them next year. You won't.
`
};
