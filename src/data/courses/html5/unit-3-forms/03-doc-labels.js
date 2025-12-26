import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Labels = {
    id: 'html-unit3-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Connection (Labels & Access)',
    duration: '15 min read',
    content: `
# Deep Dive: The Connection (Labels & Access)

## 1. The Core Concept: The Invisible Wire
An \`input\` tag sitting alone is a mystery. A \`label\` tag gives it identity.
But simply putting them next to each other is not enough. You must **wire them together**.

This wiring creates a "Hit Area Extension" that improves usability for everyone, not just screen reader users.

---

## 2. Visual: The Wiring Diagram
\`\`\`text
[ Label: "Username" ]  --- (for="user") --->  (( THE WIRE ))  --- (id="user") --->  [ Input Tag ]
\`\`\`

---

## 3. The Syntax: For = ID
The value of the label's \`for\` attribute MUST match the input's \`id\`.

\`\`\`html
<!-- The Wire -->
<label for="newsletter">Subscribe to Newsletter</label>
<input type="checkbox" id="newsletter" name="subscribe">
\`\`\`

**Try it**: Click the *text* "Subscribe to Newsletter". The checkbox will toggle!
- This transforms a tiny 20px checkbox into a massive 300px clickable zone.
- Critical for mobile users with "fat fingers."

---

## 4. Implicit Nesting (The Short Circuit)
You can also wrap the input *inside* the label.
\`\`\`html
<label>
    Subscribe to Newsletter
    <input type="checkbox" name="subscribe">
</label>
\`\`\`
This works without ID/For, but generally, the **Explicit (For/ID)** method is preferred by Senior Architects for better CSS styling control.

---

## 5. Senior Architect's Guidance: Screen Readers
When a blind user focuses on an input:
- **With Label**: "Subscribe to Newsletter, Checkbox, unchecked."
- **Without Label**: "Checkbox, unchecked." (User asks: "Checked for WHAT?")

> [!IMPORTANT]
> **Mission Objective**: Total Connectivity. Run a "Click Test" on your forms. If clicking the text doesn't activate the input, your wiring is broken.

> [!CAUTION]
> **ID Collision**: IDs must be unique on the page. You cannot have two inputs with \`id="email"\`. If you have a Login form AND a Register form on the same page, use \`id="login-email"\` and \`id="reg-email"\`.
`
};
