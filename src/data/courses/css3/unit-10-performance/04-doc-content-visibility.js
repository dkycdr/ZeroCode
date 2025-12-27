import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4ContentVisibility = {
    id: 'css-unit10-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Lazy Rendering',
    duration: '35 min read',
    content: `
# Deep Dive: Lazy Rendering (content-visibility)

## 1. The Scenario: The Infinite Registry
Architect, imagine you are building a log-viewer module for the **Nexus AI** that displays 50,000 system entries on a single page. If the browser tries to calculate the layout and paint every pixel of all 50,000 entries upon page load, your console will "Hang" for several minutes.

However, the user only sees the first 10 entries on their screen. The rest are "Off-Screen." Why waste the browser's energy rendering what is invisible?

Welcome to **\`content-visibility\`**, a revolutionary CSS performance feature that allows us to perform "Lazy Loading" on the rendering process itself.

---

## 2. Machine Logic: Skipping the Heavy Work
By default, the browser performs Layout and Paint for every element in the HTML. With this property, we can issue a specialized instruction:

\`\`\`css
.nexus-log-feed {
    /* "Do not render anything inside this container until the user scrolls near it" */
    content-visibility: auto;
}
\`\`\`

### Behind the Scenes:
The browser treats the element as if it has a pseudo-\`display: none\` for the layout engine, yet it remains fully available in the DOM for search and accessibility. As the element approaches the viewport, the browser performs a "Just-in-Time" render.

---

## 3. The Companion: \`contain-intrinsic-size\`
There is a catch: if an element isn't rendered, the browser doesn't know its height. This causes the website's scrollbar to "jump" erratically as the user scrolls (as the page height suddenly changes).

The solution is to provide a "Height Estimate":
\`\`\`css
.nexus-log-feed {
    content-visibility: auto;
    /* Estimated Width 0 (auto), Estimated Height 500px */
    contain-intrinsic-size: auto 500px; 
}
\`\`\`

---

## 4. Visual: Rendering Power Efficiency
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Viewport_Active ["Viewport: High Rendering Priority"]
        A["Active Render (In Visual Frame)"]
    end
    
    subgraph Registry_Standby ["Off-Screen: Low Rendering Priority"]
        B["content-visibility: auto"]
        C["Skipped Layout & Paint Cycle"]
    end
    
    UserScroll["User Scrolls Downward"] --> B
    B -->|Just-in-Time Promotion| A
    
    style A fill:#4cc9f0,stroke:#333
    style B fill:#ffd700,stroke:#333
    style C fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 5. Senior Architect's Decision: The 7x Boost
Google research indicates that implementing \`content-visibility\` on long-form content can improve total rendering performance by up to **7 times**. This is the difference between a "Sluggish" dashboard and an "Instant" experience.

**High-Impact Target Areas:**
- Massive footer sections.
- Long product grids or lists.
- Infinite scrolling social feeds.
- Complex nested data tables.

---

## 6. Mental Model: The Stage Manager
- **Standard CSS** is a play where every actor is on stage all at once, even if they aren't in the scene. The stage is crowded and confusing.
- **content-visibility** is a stage manager keeping actors in the wings (Off-Screen). They are ready to go, and they move into the spotlight only when their scene begins. 

---

## 7. The Checklist of Instant Loads
- [ ] Provide an accurate \`contain-intrinsic-size\` estimate to preserve scrollbar stability.
- [ ] Use only for "Below-the-Fold" content. Using it on header elements causes an unnecessary delay in the first paint.
- [ ] Monitor the **Performance** tab in Chrome DevTools; look for a reduction in "Update Layer Tree" time.

> [!IMPORTANT]
> **Compatibility Note**: This is a modern standard. Chromium-based browsers (Chrome, Edge) support it fully. Other browsers will simply ignore it, falling back to standard rendering without breaking your layout.

> [!TIP]
> **Pro Tip**: Use \`content-visibility: hidden;\` for tabbed interfaces. unlike \`display: none;\`, the browser keeps the element's state "hot" in memory, but stops all rendering cycles until you switch it to \`auto\` or \`visible\`.

> [!NOTE]
> **Fun Fact**: This technology is borrowed from high-end game engines (Unreal/Unity), where it is known as "Frustum Culling"—only drawing what the camera can see.
`
};
