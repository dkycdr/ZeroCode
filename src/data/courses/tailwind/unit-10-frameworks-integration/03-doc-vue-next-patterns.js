import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3VueNextPatterns = {
  id: 'tailwind-u10-doc-3-vue-next',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Vue & Next.js Integration',
  duration: '10 min read',
  content: `
# Vue & Next.js Integration

## Vue.js + Tailwind

### Setup

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
}
\`\`\`

### Single File Components

\`\`\`vue
<template>
  <button 
    :class="[
      'px-6 py-3 rounded-lg font-semibold transition-colors',
      variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
    ]">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
});
</script>
\`\`\`

### Dynamic Classes in Vue

\`\`\`vue
<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['elevated']);

const cardClasses = computed(() => [
  'bg-white rounded-xl p-6',
  props.elevated ? 'shadow-xl' : 'shadow-md'
]);
</script>
\`\`\`

---

## Next.js + Tailwind

### Setup (App Router)

Next.js has built-in Tailwind support:

\`\`\`bash
npx create-next-app@latest my-app
# Select "Yes" when asked about Tailwind
\`\`\`

### Configuration

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}
\`\`\`

### Server Components

Tailwind works in React Server Components:

\`\`\`jsx
// app/page.js (Server Component)
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold">Hello Next.js!</h1>
    </main>
  );
}
\`\`\`

### Client Components

\`\`\`jsx
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button 
      onClick={() => setCount(c => c + 1)}
      className={cn(
        'px-6 py-3 rounded-lg font-semibold',
        count > 10 ? 'bg-red-600' : 'bg-blue-600',
        'text-white'
      )}>
      Count: {count}
    </button>
  );
}
\`\`\`

---

## Shared Patterns

### Design System Structure

\`\`\`
src/
├── components/
│   ├── ui/               # Primitive components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Input.jsx
│   └── layout/           # Layout components
│       ├── Header.jsx
│       └── Footer.jsx
├── lib/
│   └── utils.js          # cn() helper
└── styles/
    └── globals.css       # @tailwind directives
\`\`\`

---

## Key Takeaways

✅ **Vue:** Use :class binding with arrays/objects
✅ **Next.js:** Works in Server and Client components
✅ **Share cn()** helper across frameworks
✅ **Organize components** in ui/ folder
✅ **Configure content paths** for all component files
`
};
