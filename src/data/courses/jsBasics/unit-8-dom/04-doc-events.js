import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Events = {
    id: 'js-u8-doc-4-events',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Event Listeners',
    duration: '15 min read',
    content: `
# Event Listeners

## 1. What are Events?

Events are actions that happen on the page:
- Click, hover, scroll
- Type, submit form
- Page load, resize

---

## 2. addEventListener

\`\`\`javascript
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});
\`\`\`

---

## 3. Common Events

| Event | Trigger |
|:---|:---|
| \`click\` | Mouse click |
| \`dblclick\` | Double click |
| \`mouseover\` | Mouse enters |
| \`mouseout\` | Mouse leaves |
| \`keydown\` | Key pressed |
| \`keyup\` | Key released |
| \`submit\` | Form submitted |
| \`input\` | Input value changes |
| \`load\` | Page finished loading |

---

## 4. The Event Object

\`\`\`javascript
button.addEventListener("click", function(event) {
    console.log(event.target);  // Element clicked
    console.log(event.type);    // "click"
    event.preventDefault();     // Stop default action
});
\`\`\`

---

## 5. Arrow Function Version

\`\`\`javascript
button.addEventListener("click", (e) => {
    console.log("Clicked!", e.target);
});
\`\`\`

---

## 6. Remove Event Listener

\`\`\`javascript
function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
\`\`\`
`
};
