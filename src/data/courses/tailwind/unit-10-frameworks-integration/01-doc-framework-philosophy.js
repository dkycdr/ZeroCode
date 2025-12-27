import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1FrameworkPhilosophy = {
  id: 'tailwind-u10-doc-1-philosophy',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Tailwind in Component-Based Frameworks',
  duration: '10 min read',
  content: `
# Tailwind in Component-Based Frameworks

## The Perfect Match

Tailwind and component frameworks (React, Vue, Svelte) are a natural fit:

| Tailwind Provides | Framework Provides |
|-------------------|-------------------|
| Styling utilities | Component structure |
| Design consistency | Reusability |
| Rapid prototyping | State management |

---

## Why They Work Together

### Traditional CSS + Components = Problems

\`\`\`jsx
// Old way: CSS files + class naming
import './Button.css';

function Button() {
  return <button className="btn btn-primary">Click</button>;
}
\`\`\`

**Issues:**
- CSS naming conflicts (global scope)
- Hunting for CSS files
- Dead CSS accumulates
- Hard to see styles in component

### Tailwind + Components = Beautiful

\`\`\`jsx
// Tailwind way: Styles in component
function Button({ children, variant = 'primary' }) {
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  };
  
  return (
    <button className={\`px-6 py-3 rounded-lg font-semibold \${styles[variant]}\`}>
      {children}
    </button>
  );
}
\`\`\`

**Benefits:**
- Styles live with component
- No naming conflicts
- Delete component = delete styles
- Easy to read and modify

---

## Installation Patterns

### Vite (React/Vue)

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

### Next.js

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
}
\`\`\`

---

## The Component Extraction Pattern

Instead of @apply, extract to components:

\`\`\`jsx
// ❌ Instead of @apply in CSS
.btn-primary {
  @apply bg-blue-600 text-white px-6 py-3 rounded-lg;
}

// ✅ Extract to component
function Button({ children }) {
  return (
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
      {children}
    </button>
  );
}
\`\`\`

---

## Key Takeaways

✅ **Components replace @apply** for reusability
✅ **Styles stay with component** — no separate CSS files
✅ **No naming conflicts** — class strings are isolated
✅ **Deletion is clean** — remove component, remove styles
✅ **Configure content paths** — include all component files
`
};
