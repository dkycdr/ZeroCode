import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Buttons = {
    id: 'html-unit3-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Trigger (Buttons)',
    duration: '15 min read',
    content: `
# Deep Dive: The Trigger (Buttons)

## 1. The Core Concept: Execution
The form is the payload. The **Button** is the launch key.
In modern HTML, we have moved away from \`<input type="submit">\` to the more powerful \`<button>\` tag.

---

## 2. Visual: The Button Trinity
\`\`\`text
[ <button> Tag ]
      │
      ├── [ type="submit" ] --->  Action: Submits Form (Default)
      │
      ├── [ type="reset" ]  --->  Action: Clears All Data (Dangerous)
      │
      └── [ type="button" ] --->  Action: Nothing (Waits for JS)
\`\`\`

---

## 3. The Modern Syntax
\`\`\`html
<!-- OLD SCHOOL (Limited styling) -->
<input type="submit" value="Send Data">

<!-- MODERN STANDARD (Rich Content) -->
<button type="submit">
    <img src="icon-send.svg" alt="">
    <strong>Send Data</strong>
</button>
\`\`\`

The \`<button>\` element is a container. You can put icons, bold text, or spans inside it. \`<input>\` is self-closing and can only have text.

---

## 4. The Default Trap
**Crucial Warning**: A \`<button>\` inside a form is \`type="submit"\` by default.
If you add a "Cancel" button, it will submit the form unless you explicitly stop it!

\`\`\`html
<form>
    <!-- Submits the form! -->
    <button>Save</button>
    
    <!-- Also submits the form! (Oops) -->
    <button>Cancel</button> 
    
    <!-- Does NOT submit (Correct) -->
    <button type="button">Cancel</button>
</form>
\`\`\`

---

## 5. Senior Architect's Guidance: The Reset Button
**Never use \`type="reset"\`.**
It is a relic from the 90s. Users accidentally click it and lose all their work. It provides almost no value in modern UX. If you need a clear function, implement it carefully with JavaScript and a confirmation dialog.

> [!IMPORTANT]
> **Mission Objective**: Intentionality. Always declare \`type=""\` on your buttons. Never leave it to the browser to guess. \`<button type="button">\` is the safest default for non-submit interactions.
`
};
