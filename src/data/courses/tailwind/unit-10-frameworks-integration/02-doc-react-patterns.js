import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ReactPatterns = {
  id: 'tailwind-u10-doc-2-react',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'React & Tailwind Best Practices',
  duration: '12 min read',
  content: `
# React & Tailwind Best Practices

## Managing Class Names

### The Template Literal Pattern

\`\`\`jsx
function Button({ variant, size, children }) {
  return (
    <button 
      className={\`
        px-6 py-3 rounded-lg font-semibold transition-colors
        \${variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}
        \${size === 'large' ? 'text-lg px-8 py-4' : ''}
      \`}>
      {children}
    </button>
  );
}
\`\`\`

### The clsx/classnames Library

\`\`\`bash
npm install clsx
\`\`\`

\`\`\`jsx
import clsx from 'clsx';

function Button({ variant, size, disabled, className, children }) {
  return (
    <button 
      className={clsx(
        'px-6 py-3 rounded-lg font-semibold transition-colors',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
          'text-lg px-8 py-4': size === 'large',
          'opacity-50 cursor-not-allowed': disabled,
        },
        className // Allow custom classes to be passed
      )}
      disabled={disabled}>
      {children}
    </button>
  );
}
\`\`\`

---

## The tailwind-merge Library

**Problem:** Conflicting classes override incorrectly.

\`\`\`jsx
// ❌ Problem: Both padding classes applied
<Button className="p-8">  // Already has p-6 from Button
\`\`\`

**Solution:** tailwind-merge handles conflicts:

\`\`\`bash
npm install tailwind-merge
\`\`\`

\`\`\`jsx
import { twMerge } from 'tailwind-merge';

function Button({ className, children }) {
  return (
    <button 
      className={twMerge(
        'px-6 py-3 bg-blue-600 text-white rounded-lg',
        className  // Override classes win
      )}>
      {children}
    </button>
  );
}

// Usage: p-8 correctly overrides px-6 py-3
<Button className="p-8">Large Padding</Button>
\`\`\`

---

## The cn() Helper (clsx + tailwind-merge)

The best of both worlds:

\`\`\`jsx
// lib/utils.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
\`\`\`

\`\`\`jsx
// Usage
import { cn } from '@/lib/utils';

function Card({ className, children }) {
  return (
    <div className={cn(
      'bg-white rounded-xl shadow-md p-6',
      className
    )}>
      {children}
    </div>
  );
}
\`\`\`

---

## Component Variants Pattern

\`\`\`jsx
const buttonVariants = {
  variant: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
  },
  size: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  },
};

function Button({ variant = 'primary', size = 'md', className, children }) {
  return (
    <button 
      className={cn(
        'rounded-lg font-semibold transition-colors',
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}>
      {children}
    </button>
  );
}
\`\`\`

---

## Key Takeaways

✅ **clsx** = Conditional class composition
✅ **tailwind-merge** = Handle class conflicts
✅ **cn()** = Combine both for best results
✅ **Variants object** = Organized, scalable styling
✅ **className prop** = Allow customization
`
};
