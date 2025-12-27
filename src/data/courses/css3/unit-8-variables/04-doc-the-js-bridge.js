import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4TheJSBridge = {
    id: 'css-unit8-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Javascript Bridge (Dynamic State)',
    duration: '35 min read',
    content: `
# Deep Dive: The Javascript Bridge (Dynamic State)

## 1. The Core Concept: The Alive Interface
Architect, the final superpower of CSS Variables is that they can be manipulated by **JavaScript** in real-time. This is the "Secret Sauce" of the **Nexus AI Real-Time Visualizer**. 

Instead of JS directly changing a hundred individual style properties, JS simply updates **one variable** in the \`:root\` or on a specific element, and CSS handles the rest of the visual logic.

---

## 2. Visual: The Control Signal
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph LR
    User["Mouse Movement"] --> JS["1. JavaScript Event"]
    JS -->|setProperty| var["2. --mouse-x: 142px"]
    var --> CSS["3. CSS Styles"]
    CSS --> UI["Glow follows mouse"]
    
    style JS fill:#f72585,stroke:#333
    style var fill:#4cc9f0,stroke:#333
\`\`\`

</div>

---

## 3. The API: \`setProperty\`
To change a variable from JS, we use the \`style.setProperty()\` method.

\`\`\`javascript
// Targeting the whole site
document.documentElement.style.setProperty('--nexus-primary', '#ff0055');

// Targeting a specific button
const btn = document.querySelector('.btn-power');
btn.style.setProperty('--glow-opacity', '1');
\`\`\`

---

## 4. Machine Logic: The Dynamic "Themer"
This is how professional "Dark Mode" toggles or "Color Pickers" work.
1.  The user selects a color.
2.  JavaScript grabs that color value.
3.  JavaScript pushes that value into a CSS Variable: \`--user-theme\`.
4.  All CSS elements that use \`var(--user-theme)\` update instantly and smoothly.

---

## 5. Mental Model: The Dimmer Switch
- **Traditional JS styling** is like running around a room and turning 10 different light switches on/off.
- **CSS Variables with JS** is like a single dimmer switch on the wall. You turn the dial (The JS), and the voltage (\`--brightness\`) changes for every light bulb in the room simultaneously.

---

## 6. Senior Architect's Guidance: Mouse Tracking
A classic "Elite" dashboard effect is making a background glow follow the mouse.
- **The JS**: Updates \`--mouse-x\` and \`--mouse-y\` on every movement.
- **The CSS**: Uses those variables inside a \`radial-gradient\`.
- **Result**: A high-performance, smooth lighting effect that feels like it's part of the engine itself.

---

## 7. Performance Note: The Paint Throttle
Updating CSS variables via JS is very efficient, but if you do it inside a "Scroll" or "Mousemove" event, you should "Throttle" or "Debounce" the calls to ensure you don't overwhelm the browser's rendering cycle.

---

## 8. Summary Checklist
- [ ] Use \`.style.setProperty('--name', 'value')\` to update tokens.
- [ ] Use \`.style.getPropertyValue('--name')\` to read tokens.
- [ ] Use variables for values that need to change frequently (Progress bars, positions).
- [ ] Combine JS updates with CSS \`transition\` for smooth, hardware-accelerated movement.

> [!IMPORTANT]
> **Mission Objective**: Reactive Engineering. Your UI should feel like it is aware of the user. Motion and color should respond to the user's presence logic.

> [!TIP]
> **Pro Tip**: You can pass complex values into variables from JS, including whole gradients or font stacks! \`--dynamic-bg: linear-gradient(...)\`.

> [!CAUTION]
> **Logic Pitfall**: Don't forget the units! If you are passing a position from JS, make sure to add "px" to the string, or use the unitless multiplier trick from Doc 3. \`setProperty('--pos', 50 + 'px')\`.
`
};
