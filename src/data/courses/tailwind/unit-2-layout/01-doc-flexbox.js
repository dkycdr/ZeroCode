import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Flexbox = {
    id: 'tailwind-2-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Flexbox Architecture 🧩',
    duration: '20 min read',
    content: `
# Deep Dive: Flexbox Architecture 🧩

## 1. The "Elastic" Concept
Imagine a row of books on a shelf.
*   If you push them together, they squish.
*   If you take one out, the others slide over to fill the gap.
**That is Flexbox.** It is designed for **1-Dimensional** layouts (Row OR Column).

---

## 2. The Two Axes (The Compass)
You cannot use Flexbox without understanding direction.

### The Main Axis (\`flex-direction\`)
The direction the "books" are flowing.
*   \`flex-row\` (Default): Left ➡ Right.
*   \`flex-col\`: Top ⬇ Bottom.

### The Cross Axis
The direction *perpendicular* to the flow.
*   In a **Row**, the Cross Axis is **Vertical**.
*   In a **Col**, the Cross Axis is **Horizontal**.

---

## 3. Justify vs Items (The Confusion Killer)
Most people guess. Don't guess.

| Command | Controls | Axis |
| :--- | :--- | :--- |
| **\`justify-*\`** | Distribution | **Main Axis** (Direction of flow) |
| **\`items-*\`** | Alignment | **Cross Axis** (Opposite of flow) |

**Example:**
*   \`flex-row justify-between\`: Pushes items to Left/Right edges.
*   \`flex-row items-center\`: Centers items vertically in the middle of the shelf.

---

## 4. Nesting: The Russian Doll Technique
Complex layouts are just Flexboxes inside Flexboxes.
*   **Level 1**: The Page (Center the card).
*   **Level 2**: The Card (Column layout: Image on top, Text below).
*   **Level 3**: The Card Footer (Row layout: Price on left, Button on right).

> [!TIP]
> **Gap > Margin**: Instead of putting \`margin-right\` on every item (and trying to remove it from the last one), just use \`gap-4\` on the parent container. It's cleaner.
    `
};
