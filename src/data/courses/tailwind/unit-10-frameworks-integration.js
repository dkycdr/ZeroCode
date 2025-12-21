import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10FrameworksIntegration = {
    id: 'tailwind-unit-10',
    title: 'Tailwind with JS Frameworks - React, Vue, Next.js',
    description: 'Master Tailwind CSS integration with modern JavaScript frameworks and build tools',
    items: [
        {
            id: 'tailwind-10-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Tailwind with JS Frameworks - The Complete Guide',
            duration: '30 min read',
            content: `
# Tailwind with JS Frameworks - The Complete Guide

## Why Use Tailwind with Frameworks?

**Tailwind + Modern Frameworks** = Perfect combination for building scalable, maintainable applications.

### Real-World Analogy: LEGO Blocks

Think of Tailwind with frameworks like LEGO:

**Without Framework:**
\`\`\`
Build everything from scratch
Repeat same patterns
Hard to maintain
Difficult to scale
\`\`\`

**With Framework + Tailwind:**
\`\`\`
Reusable components (LEGO blocks)
Consistent styling
Easy to maintain
Scales beautifully
\`\`\`

### Benefits of Integration

**Advantages:**
- ✅ Component-based styling
- ✅ Reusable design patterns
- ✅ Type-safe styling (TypeScript)
- ✅ Better developer experience
- ✅ Automatic purging of unused CSS
- ✅ Hot module replacement
- ✅ Production optimization

## Tailwind with React

### Setup in React

**Install dependencies:**
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
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

**Add to src/index.css:**
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

### React Component Patterns

**Button Component:**
\`\`\`jsx
// components/Button.jsx
export default function Button({ children, variant = 'primary', size = 'md', ...props }) {
  const baseStyles = 'font-semibold rounded-lg transition-colors';
  
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button 
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// Usage
<Button variant="primary" size="lg">Click me</Button>
<Button variant="outline">Cancel</Button>
\`\`\`

**Card Component:**
\`\`\`jsx
// components/Card.jsx
export default function Card({ title, children, footer }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      )}
      
      <div className="px-6 py-4">
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
}

// Usage
<Card 
  title="User Profile"
  footer={<Button>Save Changes</Button>}
>
  <p>Card content goes here</p>
</Card>
\`\`\`

**Modal Component:**
\`\`\`jsx
// components/Modal.jsx
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          
          {/* Title */}
          {title && (
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
          )}
          
          {/* Content */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

// Usage
const [isOpen, setIsOpen] = useState(false);

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure you want to continue?</p>
  <div className="mt-4 flex gap-2">
    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </div>
</Modal>
\`\`\`

### Using clsx for Conditional Classes

**Install clsx:**
\`\`\`bash
npm install clsx
\`\`\`

**Usage:**
\`\`\`jsx
import clsx from 'clsx';

function Button({ variant, isLoading, disabled }) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg font-semibold',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-500 text-white': variant === 'secondary',
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

## Tailwind with Next.js

### Setup in Next.js

**Create Next.js app with Tailwind:**
\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind
cd my-app
\`\`\`

**Or add to existing Next.js app:**
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

**Configure tailwind.config.js:**
\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

**Add to globals.css:**
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

### Next.js App Router Example

**Layout component:**
\`\`\`jsx
// app/layout.jsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">My App</h1>
              <ul className="flex gap-6">
                <li><a href="/" className="hover:text-blue-500">Home</a></li>
                <li><a href="/about" className="hover:text-blue-500">About</a></li>
              </ul>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 My App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
\`\`\`

**Page component:**
\`\`\`jsx
// app/page.jsx
export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-xl mb-6">Build amazing things with Next.js and Tailwind</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
          Get Started
        </button>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Feature {i}</h3>
            <p className="text-gray-600">Description of feature {i}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
\`\`\`

## Tailwind with Vue

### Setup in Vue 3

**Create Vue app:**
\`\`\`bash
npm create vue@latest my-app
cd my-app
npm install

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

**Configure tailwind.config.js:**
\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

**Add to src/assets/main.css:**
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

### Vue Component Example

**Button Component:**
\`\`\`vue
<!-- components/Button.vue -->
<template>
  <button 
    :class="buttonClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
});

const buttonClasses = computed(() => {
  const base = 'font-semibold rounded-lg transition-colors';
  
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return \`\${base} \${variants[props.variant]} \${sizes[props.size]}\`;
});
</script>

<!-- Usage -->
<Button variant="primary" size="lg" @click="handleClick">
  Click me
</Button>
\`\`\`

**Card Component:**
\`\`\`vue
<!-- components/Card.vue -->
<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div v-if="title" class="px-6 py-4 border-b border-gray-200">
      <h3 class="text-xl font-bold text-gray-900">{{ title }}</h3>
    </div>
    
    <div class="px-6 py-4">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>

<!-- Usage -->
<Card title="User Profile">
  <p>Card content</p>
  <template #footer>
    <Button>Save</Button>
  </template>
</Card>
\`\`\`

## Component Libraries with Tailwind

### Headless UI (React/Vue)

**Install:**
\`\`\`bash
# For React
npm install @headlessui/react

# For Vue
npm install @headlessui/vue
\`\`\`

**Dropdown Example (React):**
\`\`\`jsx
import { Menu } from '@headlessui/react';

function Dropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Options
      </Menu.Button>
      
      <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1">
        <Menu.Item>
          {({ active }) => (
            <a
              href="/account"
              className={\`\${active ? 'bg-blue-50' : ''} block px-4 py-2\`}
            >
              Account
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="/settings"
              className={\`\${active ? 'bg-blue-50' : ''} block px-4 py-2\`}
            >
              Settings
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
\`\`\`

### DaisyUI Plugin

**Install:**
\`\`\`bash
npm install -D daisyui@latest
\`\`\`

**Configure:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  plugins: [require("daisyui")],
}
\`\`\`

**Usage:**
\`\`\`html
<button class="btn btn-primary">Button</button>
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>Card content</p>
  </div>
</div>
\`\`\`

## Best Practices

### Component Organization

**Folder structure:**
\`\`\`
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── Input.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   └── features/
│       ├── UserProfile.jsx
│       └── Dashboard.jsx
├── styles/
│   └── globals.css
└── utils/
    └── classNames.js
\`\`\`

### Extract Common Patterns

**Create utility functions:**
\`\`\`javascript
// utils/classNames.js
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Usage
<div className={cn(
  'base-class',
  isActive && 'active-class',
  isDisabled && 'disabled-class'
)} />
\`\`\`

### Use @apply Sparingly

**Good use case:**
\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
  }
}
\`\`\`

**Better: Use components instead:**
\`\`\`jsx
// Prefer this
<Button variant="primary">Click me</Button>

// Over this
<button className="btn-primary">Click me</button>
\`\`\`

## TypeScript Integration

### Typed Component Props

\`\`\`tsx
// Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-semibold rounded-lg transition-colors',
        variants[variant],
        sizes[size],
        isLoading && 'opacity-50 cursor-not-allowed'
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
\`\`\`

### Tailwind IntelliSense

**VS Code extension:**
- Install "Tailwind CSS IntelliSense"
- Get autocomplete for classes
- See color previews
- Lint warnings

## Production Optimization

### Purge Unused CSS

**Automatic in production:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // Tailwind automatically purges in production
}
\`\`\`

### Minification

**Handled by build tools:**
- Vite: Automatic
- Next.js: Automatic
- Create React App: Automatic

### Performance Tips

**DO:**
- ✅ Use PurgeCSS (automatic)
- ✅ Enable JIT mode (default in v3)
- ✅ Minimize custom CSS
- ✅ Use production builds
- ✅ Enable compression

**DON'T:**
- ❌ Include entire Tailwind in production
- ❌ Use too many custom utilities
- ❌ Forget to configure content paths
- ❌ Use development builds in production

## Summary

### Key Takeaways

**Framework Integration:**
- Easy setup with modern frameworks
- Component-based styling
- Reusable patterns
- Type-safe with TypeScript
- Automatic optimization

**Best Practices:**
- Create reusable components
- Use conditional classes wisely
- Organize components logically
- Leverage framework features
- Optimize for production

**Tools:**
- clsx for conditional classes
- Headless UI for accessible components
- DaisyUI for pre-built components
- TypeScript for type safety
- VS Code IntelliSense

### Quick Reference

**React Setup:**
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

**Next.js Setup:**
\`\`\`bash
npx create-next-app@latest --tailwind
\`\`\`

**Vue Setup:**
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

**Component Pattern:**
\`\`\`jsx
function Component({ variant, size }) {
  return (
    <div className={cn(
      'base-classes',
      variants[variant],
      sizes[size]
    )}>
      Content
    </div>
  );
}
\`\`\`
`
        },

        {
            id: 'tailwind-10-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Practice: Tailwind with Frameworks',
            duration: '40 min',
            content: `
# Practice: Tailwind with Frameworks

In this lesson, you'll practice integrating Tailwind CSS with modern JavaScript frameworks.

## Setup Instructions

1. Choose a framework (React, Next.js, or Vue)
2. Setup Tailwind CSS
3. Create reusable components
4. Build a complete application

## Important Notes

- Use the page console to see output (not browser console)
- Create reusable component patterns
- Follow framework best practices
- Test component variations

## Tasks Overview

You'll complete 7 tasks:
1. Setup Tailwind in React/Next.js/Vue
2. Create Button component with variants
3. Build Card component
4. Implement Modal component
5. Create Form components
6. Build Navigation component
7. Create complete page layout
`,
            files: [
                {
                    name: 'Button.jsx',
                    language: 'javascript',
                    content: `// Reusable Button Component
// Instructions:
// 1. Create button with variant prop (primary, secondary, outline)
// 2. Add size prop (sm, md, lg)
// 3. Handle loading state
// 4. Use clsx for conditional classes
// 5. Log "Button rendered: [variant] [size]"

export default function Button({ variant, size, isLoading, children }) {
  // Your code here
  
  return (
    <button>
      {children}
    </button>
  );
}`
                }
            ],
            tasks: [
                {
                    id: 'tailwind-10-task-1',
                    title: 'Setup Tailwind in Framework',
                    instructions: `Setup Tailwind CSS in your chosen framework.

Steps:
1. Install Tailwind: npm install -D tailwindcss
2. Initialize config: npx tailwindcss init -p
3. Configure content paths in tailwind.config.js
4. Add Tailwind directives to CSS
5. Log "Tailwind setup complete in [framework]"

Expected output: "Tailwind setup complete in React" (or Next.js/Vue)`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Tailwind setup complete in (React|Next\.js|Vue)/i
                    }
                },
                {
                    id: 'tailwind-10-task-2',
                    title: 'Create Button Component',
                    instructions: `Build a reusable Button component with variants.

Button should have:
1. variant prop: primary, secondary, outline
2. size prop: sm, md, lg
3. isLoading prop for loading state
4. Proper Tailwind styling
5. Log "Button: [variant] [size] rendered"

Expected output: "Button: primary md rendered"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Button: (primary|secondary|outline) (sm|md|lg) rendered/i
                    }
                },
                {
                    id: 'tailwind-10-task-3',
                    title: 'Build Card Component',
                    instructions: `Create a Card component with flexible content.

Card should have:
1. title prop (optional)
2. children for main content
3. footer slot (optional)
4. Responsive styling
5. Log "Card rendered: [title]"

Expected output: "Card rendered: User Profile" or "Card rendered: no title"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Card rendered: .+/i
                    }
                },
                {
                    id: 'tailwind-10-task-4',
                    title: 'Implement Modal Component',
                    instructions: `Build a Modal component with animations.

Modal should:
1. isOpen prop to control visibility
2. onClose callback
3. Backdrop with click-to-close
4. Fade and scale animations
5. Log "Modal: [state]"

Expected output: "Modal: opened" or "Modal: closed"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Modal: (opened|closed)/i
                    }
                },
                {
                    id: 'tailwind-10-task-5',
                    title: 'Create Form Components',
                    instructions: `Build reusable form input components.

Create:
1. Input component with label
2. Textarea component
3. Select component
4. Proper styling and states
5. Log "Form component: [type] rendered"

Expected output: "Form component: input rendered" or "textarea" or "select"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Form component: (input|textarea|select) rendered/i
                    }
                },
                {
                    id: 'tailwind-10-task-6',
                    title: 'Build Navigation Component',
                    instructions: `Create a responsive navigation component.

Navigation should:
1. Logo/brand section
2. Desktop menu (hidden on mobile)
3. Mobile menu with toggle
4. Responsive breakpoints
5. Log "Navigation: [mode] mode"

Expected output: "Navigation: mobile mode" or "Navigation: desktop mode"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Navigation: (mobile|desktop) mode/i
                    }
                },
                {
                    id: 'tailwind-10-task-7',
                    title: 'Create Complete Page Layout',
                    instructions: `Build a complete page using all components.

Page should include:
1. Navigation component
2. Hero section with Button
3. Grid of Cards
4. Form section
5. Footer
6. Log "Complete page rendered with [count] components"

Expected output: "Complete page rendered with 5 components" (or more)`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Complete page rendered with \d+ components/i
                    }
                }
            ]
        },
        {
            id: 'tailwind-10-3',
            type: CONTENT_TYPES.QUIZ,
            title: 'Quiz: Tailwind with Frameworks',
            duration: '5 min',
            questions: [
                {
                    id: 'tailwind-10-q1',
                    question: 'What is the main benefit of using Tailwind with component-based frameworks?',
                    options: [
                        'Faster page load times',
                        'Reusable, styled components with consistent design',
                        'Smaller bundle sizes',
                        'Better SEO'
                    ],
                    correctAnswer: 1,
                    explanation: 'The main benefit is creating reusable components with consistent styling. You can build a component once with Tailwind classes and reuse it throughout your application with different props.'
                },
                {
                    id: 'tailwind-10-q2',
                    question: 'What is the purpose of the content array in tailwind.config.js?',
                    options: [
                        'To define custom colors',
                        'To specify which files Tailwind should scan for class names',
                        'To configure plugins',
                        'To set breakpoints'
                    ],
                    correctAnswer: 1,
                    explanation: 'The content array tells Tailwind which files to scan for class names. This enables PurgeCSS to remove unused styles in production, keeping your CSS file small.'
                },
                {
                    id: 'tailwind-10-q3',
                    question: 'What is clsx used for in React/Next.js projects?',
                    options: [
                        'To create CSS modules',
                        'To conditionally apply Tailwind classes',
                        'To compile Tailwind CSS',
                        'To create animations'
                    ],
                    correctAnswer: 1,
                    explanation: 'clsx is a utility for conditionally joining class names together. It makes it easier to apply Tailwind classes based on props or state in your components.'
                },
                {
                    id: 'tailwind-10-q4',
                    question: 'How do you setup Tailwind in a Next.js project?',
                    options: [
                        'Just import Tailwind CSS file',
                        'Install tailwindcss, create config, add directives to CSS',
                        'Use a special Next.js plugin',
                        'Tailwind is built into Next.js'
                    ],
                    correctAnswer: 1,
                    explanation: 'You need to: 1) Install tailwindcss as a dev dependency, 2) Create tailwind.config.js with npx tailwindcss init, 3) Add @tailwind directives to your CSS file, 4) Configure content paths.'
                },
                {
                    id: 'tailwind-10-q5',
                    question: 'What is Headless UI?',
                    options: [
                        'A CSS framework',
                        'Unstyled, accessible UI components that work with Tailwind',
                        'A state management library',
                        'A testing framework'
                    ],
                    correctAnswer: 1,
                    explanation: 'Headless UI provides unstyled, fully accessible UI components (like dropdowns, modals, tabs) that you can style with Tailwind. It handles the complex behavior and accessibility while you control the styling.'
                },
                {
                    id: 'tailwind-10-q6',
                    question: 'When should you use @apply in your CSS?',
                    options: [
                        'For every component',
                        'Sparingly, only for frequently repeated patterns',
                        'Never, it is deprecated',
                        'Only in production'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use @apply sparingly, only for frequently repeated utility combinations. It\'s better to create reusable components in your framework rather than extracting classes with @apply.'
                },
                {
                    id: 'tailwind-10-q7',
                    question: 'How does Tailwind handle unused CSS in production?',
                    options: [
                        'Manually remove unused classes',
                        'Automatically purges unused styles based on content configuration',
                        'Keeps all styles',
                        'Requires a separate plugin'
                    ],
                    correctAnswer: 1,
                    explanation: 'Tailwind automatically purges unused styles in production builds by scanning the files specified in the content configuration and removing any classes that aren\'t used.'
                },
                {
                    id: 'tailwind-10-q8',
                    question: 'What is the benefit of using TypeScript with Tailwind components?',
                    options: [
                        'Faster compilation',
                        'Type-safe props and better autocomplete',
                        'Smaller bundle size',
                        'Better styling'
                    ],
                    correctAnswer: 1,
                    explanation: 'TypeScript provides type safety for component props, better IDE autocomplete, and catches errors at compile time. You can define exact prop types like variant: "primary" | "secondary".'
                },
                {
                    id: 'tailwind-10-q9',
                    question: 'What is DaisyUI?',
                    options: [
                        'A React component library',
                        'A Tailwind plugin that adds pre-built component classes',
                        'A CSS preprocessor',
                        'A design tool'
                    ],
                    correctAnswer: 1,
                    explanation: 'DaisyUI is a Tailwind CSS plugin that adds component classes like btn, card, modal, etc. It provides pre-styled components while still using Tailwind\'s utility-first approach.'
                },
                {
                    id: 'tailwind-10-q10',
                    question: 'What is the recommended way to organize Tailwind components in a large project?',
                    options: [
                        'Put everything in one file',
                        'Organize by type: ui/, layout/, features/',
                        'Alphabetically',
                        'By page'
                    ],
                    correctAnswer: 1,
                    explanation: 'Organize components by type: ui/ for reusable UI components (Button, Card), layout/ for layout components (Header, Footer), and features/ for feature-specific components. This makes the codebase more maintainable.'
                }
            ]
        }
    ]
};
