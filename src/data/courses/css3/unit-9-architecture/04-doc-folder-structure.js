import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4FolderStructure = {
    id: 'css-unit9-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The 7-1 Pattern',
    duration: '35 min read',
    content: `
# Deep Dive: The 7-1 Pattern

## 1. The Core Concept: The Mountain of Code
Architect, imagine you are building the primary interface for the **Nexus AI Command Center**. This project will eventually house 200 pages, 500 unique components, and tens of thousands of lines of CSS. If you put all of that code into a single \`style.css\` file, you are creating a Maintenance Nightmare.

Finding the code for a specific "Navigation Button" inside a 20,000-line file is an impossible mission. That is why an Elite Architect must master **Standardized Folder Structures**. We will now explore the **7-1 Pattern**, the most recognized industry method for managing large-scale CSS.

---

## 2. Machine Logic: 7 Folders, 1 Source of Truth
The philosophy of the 7-1 pattern is simple: Divide your CSS into **7 categories** (folders) and merge them into **1 main file** (\`main.css\`).

### The Architectural Hierarchy:
1.  **Abstracts/**: The "Pure Data" layer. Contains variables, mixins, and functions. (Does not generate CSS on its own).
2.  **Vendors/**: Third-party code (e.g., Bootstrap, Google Fonts) so it doesn't pollute your custom logic.
3.  **Base/**: The Foundation. CSS resets, global typography, and basic HTML tag styles.
4.  **Layout/**: The Skeleton. Header, Footer, Sidebar, Navigation, and Grid definitions.
5.  **Components/**: The Heart of BEM. Buttons, Cards, Modals, Sliders. (This is usually the busiest folder).
6.  **Pages/**: Custom styles specific to individual pages (e.g., \`_home.scss\`).
7.  **Themes/**: The Visual Identity. Used if the console has multi-client themes (Dark, Light, High-Contrast).

---

## 3. Visual: The 7-1 Architecture
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Main["main.css (The Entry Point)"]
    
    subgraph Folders ["The 7 Folders"]
        Main --> F1["1. Abstracts (Variables)"]
        Main --> F2["2. Vendors (Third-party)"]
        Main --> F3["3. Base (Reset/Reset)"]
        Main --> F4["4. Layout (Structural)"]
        Main --> F5["5. Components (Isolated UI)"]
        Main --> F6["6. Pages (Situational)"]
        Main --> F7["7. Themes (Theming)"]
    end
    
    F5 --> E1["_buttons.css"]
    F5 --> E2["_cards.css"]
    F5 --> E3["_modals.css"]
    
    style Main fill:#f72585,stroke:#333
    style F5 fill:#4cc9f0,stroke:#333
\`\`\`

</div>

---

## 4. The Power of "Partials" (\`_\`)
In this architecture, files inside the folders are often called **Partials**. They are usually named with a leading underscore (e.g., \`_buttons.css\`). 
- This underscores tells the developer: "This is a fragment of the system, not a standalone stylesheet."
- It forces you to keep your logic modular and compartmentalized.

---

## 5. Mental Model: The Filing Cabinet
Imagine the Nexus Headquarters.
- If all documents are thrown on the floor (One big CSS file), you can’t find anything.
- In the 7-1 pattern, every document has a specific folder based on its **Functionality**. 
A new engineer can walk into the room, look at the labels on the drawer (The Folders), and know exactly where the "Login Page" layout is stored without needing to search.

---

## 6. Senior Architect's Decision: Import Order
The order of operations is critical. You must import the layers in this exact sequence:
1.  **Abstracts** must come first (variables are needed by everyone else).
2.  **Base** must come second (foundations must be laid before building walls).
3.  **Components/Layout** can follow.

If you import the Base layer *after* the Components, your Reset styles might accidentally overwrite your beautiful Button styles.

---

## 7. The Checklist of Order
- [ ] **One File, One Component**: Each BEM block gets its own dedicated file.
- [ ] **Limited Length**: Keep files under 300 lines. If it gets larger, split it.
- [ ] **Clean Entry**: Your \`main.css\` should only contain \`@import\` statements. No direct styling logic.

> [!IMPORTANT]
> **Industrial Standard**: Using the 7-1 structure is a standard requirement when applying for Senior Frontend positions at major tech companies (FAANG). It proves you can manage complexity.

> [!TIP]
> **Pro Tip**: Use a **"_shame.css"** file! This is an (unofficial) 8th folder for "Hacks" or "Quick-fixes" you write under pressure. Isolating your "dirty" code makes it much easier to find and clean up later.

> [!CAUTION]
> **Logic Pitfall**: Don't over-categorize. If a component only has 5 lines of code, don't give it a separate file yet—keep it in a shared \`_elements.css\` until it grows. Avoid "Folder Bloat."
`
};
