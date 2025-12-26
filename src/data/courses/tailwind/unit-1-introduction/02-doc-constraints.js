import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Constraints = {
    id: 'tailwind-1-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Constraint System 📏',
    duration: '20 min read',
    content: `
# Deep Dive: The Constraint System 📏

## 1. The "Magic Number" is 4
Tailwind's entire spacing universe revolves around the number **4**.
Everything is based on \`rem\`, where \`1rem = 16px\`.

**The Golden Formula:**
> **Class Number × 4 = Pixels**

### The Spacing Scale
| Class | Math | Pixels | Real World Analogy |
| :--- | :--- | :--- | :--- |
| \`p-1\` | 1 × 4 | **4px** | A thin mint |
| \`p-2\` | 2 × 4 | **8px** | A pencil width |
| \`p-4\` | 4 × 4 | **16px** | A standard button padding |
| \`p-6\` | 6 × 4 | **24px** | A comfortable card margin |
| \`p-8\` | 8 × 4 | **32px** | Section separation |

> [!TIP]
> Why not pixels? Because \`rem\` units respect the user's browser font size settings (Accessibility).

---

## 2. Colors: Painting by Numbers 🎨
Instead of "picking a color" from a color picker (giving you 16 million choices), you choose from a curated palette.

### The Shades (50-950)
Every color comes in 11 shades.
*   **50-100**: Background tints (Light)
*   **400-500**: Borders and decorative elements
*   **600-700**: Main buttons / Text links (Good contrast)
*   **900-950**: Headings / Very dark text

\`\`\`html
<!-- A complete button using the scale -->
<button class="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700">
  Click Me
</button>
\`\`\`

---

## 3. Typography
Forget \`12px\`, \`14px\`, \`18px\`. Think in T-Shirt sizes.

*   **text-xs**: Extra Small (Legal text)
*   **text-sm**: Small (Metadata, captions)
*   **text-base**: Standard (Paragraphs)
*   **text-lg**: Large (Subheadings)
*   **text-xl**: Extra Large (Card Titles)
*   **text-4xl**: Massive (Page Titles)

> [!NOTE]
> Tailwind automatically sets the **Line Height** (leading) for you. \`text-lg\` has a slightly tighter line height than \`text-base\` proportionally.
    `
};
