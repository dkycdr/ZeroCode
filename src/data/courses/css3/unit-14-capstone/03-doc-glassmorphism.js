import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Glassmorphism = {
    id: 'css-unit14-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Glassmorphism & Visuals',
    duration: '25 min read',
    content: `
# Deep Dive: Glassmorphism & High-Fidelity Visuals

## 1. The Scenario: Depth in the Digital Dark
Architect, to sell a luxury product like the **Nexus HyperCar**, the interface must feel expensive. Simple flat colors and hard borders feel "Basic." We want to create a sense of **Depth** and **Materiality**.

We will achieve this using the **Glassmorphism** aesthetic—a combination of translucency, background blurring, and high-contrast highlights that makes the UI feel like it's crafted from frosted glass floating over a futuristic engine.

---

## 2. Machine Logic: The Backdrop Filter
The heart of glassmorphism is the **\`backdrop-filter\`** property. Unlike a standard \`filter\` (which blurs the element itself), a \`backdrop-filter\` blurs the content *behind* the element.

### The Elite Glass Recipe:
\`\`\`css
.hypercar-card {
  /* 1. Translucency (Semi-transparent background) */
  background: rgba(255, 255, 255, 0.05); 
  
  /* 2. The Blur (Frosted Effect) */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  
  /* 3. The Highlight (Subtle Border) */
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  /* 4. The Depth (Inner Shadow) */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
}
\`\`\`

---

## 3. Visual: Layering Depth
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    A["Background: Dark Engine Render"]
    B["Glass Card (RGBA 0.05)"]
    C["Content (Text/Icons)"]
    
    A --- B
    B --- C
    
    style B fill:rgba(255,255,255,0.1),stroke:#fff,stroke-dasharray: 5 5
    style C fill:#4cc9f0,stroke:#333
\`\`\`

</div>

---

## 4. Senior Architect's Decision: Performance Budget
Glassmorphism is computationally expensive. Each pixel under the "glass" must be sampled, blurred, and re-rendered in every frame. 

In the **Nexus Dashboard**, we only apply \`backdrop-filter\` to persistent, high-value elements like the **Navigation Bar** or **Primary Stat Cards**. We avoid applying it to hundreds of small list items, which would drop the framerate of the launch site significantly on mobile devices.

---

## 5. Mental Model: The Frosted Window
Imagine you are looking through a frosted bathroom window. 
- You can see the *colors* of the flowers outside, but the *shapes* are soft and diffused.
- This creates a beautiful contrast where the details of your UI (the text) are sharp, but the background doesn't distract from readability.

---

## 6. The Checklist of High-Fidelity UI
- [ ] Use \`rgba()\` with very low opacity (\`0.05\` to \`0.1\`) for the background.
- [ ] Always provide a background color fallback for browsers that don't support \`backdrop-filter\`.
- [ ] Add a \`border-radius\` (usually \`16px\`+) to reinforce the "object-like" feeling.

> [!IMPORTANT]
> **Check the Alpha**: If your background opacity is too high (e.g., \`0.8\`), you won't be able to see the blur effect. Keep it low to let the background light through.

> [!TIP]
> **Text Stroke**: For the massive HyperCar headings, use \`-webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent;\`. This creates a sophisticated "Ghost Text" look that feels ultra-premium.
`
};
