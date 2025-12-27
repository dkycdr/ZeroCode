import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1FrameworkIntegration = {
    id: 'tailwind-10-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Framework Integration: React & Next.js Patterns 🚀',
    duration: '30 min read',
    content: `
# Framework Integration: React & Next.js Patterns 🚀

## The Power Combo
Tailwind + React = Reusable, type-safe, production-ready components.

## Analogy: LEGO Blocks
**Without Framework:** Build everything from scratch every time. Tedious.
**With Framework:** Snap together pre-built, reusable blocks. Efficient.

---

## React Setup

\`\`\`bash
# Create React app
npx create-react-app my-app
cd my-app

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

**Configure tailwind.config.js:**
\`\`\`javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
\`\`\`

**Add to src/index.css:**
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

---

## Component Pattern: Button

\`\`\`jsx
export default function Button({ variant = 'primary', children }) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  };
  
  return (
    <button className={\`px-6 py-3 rounded-lg font-semibold \${variants[variant]}\`}>
      {children}
    </button>
  );
}

// Usage
<Button variant="primary">Click Me</Button>
\`\`\`

---

## Conditional Classes with clsx

\`\`\`bash
npm install clsx
\`\`\`

\`\`\`jsx
import clsx from 'clsx';

function Button({ variant, isLoading, disabled }) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'opacity-50 cursor-not-allowed': disabled,
          'animate-pulse': isLoading,
        }
      )}
    >
      {isLoading ? 'Loading...' : 'Click me'}
    </button>
  );
}
\`\`\`

---

## Next.js Setup (Recommended)

\`\`\`bash
# Create Next.js app with Tailwind built-in
npx create-next-app@latest --tailwind
\`\`\`

That's it! Tailwind is pre-configured.

---

## TypeScript Support

\`\`\`tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', size = 'md', children }: ButtonProps) {
  // ...
}
\`\`\`

Type-safe components with autocomplete.

---

## Component Libraries

**Headless UI** (Recommended for React)
\`\`\`bash
npm install @headlessui/react
\`\`\`

Accessible components with zero styling (you add Tailwind).

**DaisyUI** (Pre-styled components)
\`\`\`bash
npm install -D daisyui
\`\`\`

Adds component classes like \`btn\`, \`card\`.

---

## Production Optimization

**Automatic in modern frameworks:**
✅ PurgeCSS (removes unused styles)
✅ Minification
✅ JIT mode (on-demand generation)

---

## Key Takeaways

✅ Tailwind integrates seamlessly with React/Next.js
✅ Create reusable component patterns
✅ Use clsx for conditional classes
✅ TypeScript adds type safety
✅ Production builds are optimized automatically
    `
};
