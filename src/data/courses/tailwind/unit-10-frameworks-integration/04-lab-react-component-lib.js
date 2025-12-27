import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ReactComponentLib = {
  id: 'tailwind-u10-lab-1-react-lib',
  type: CONTENT_TYPES.LESSON,
  title: 'Lab: Building a React Component Library',
  duration: '35 min',
  content: `
# Lab: Building a React Component Library

## Mission

Build a reusable component library with Button, Card, and Input components. Each component should:
- Support multiple variants
- Accept custom className prop
- Use the cn() helper for class merging

## Requirements

1. **Button**: primary, secondary, danger variants + sizes
2. **Card**: with optional elevation prop
3. **Input**: with error state support

Let's build professional-grade components! 🧩
`,
  tasks: [
    {
      id: 1,
      description: 'Create the cn() helper function using clsx and twMerge (or just combine strings)',
      completed: false,
      regex: /function cn|const cn|export.*cn/,
      hint: {
        concept: 'The cn() Helper',
        strategy: 'Create a function that combines class strings and handles conditional classes.',
        solution: 'function cn(...classes) { return classes.filter(Boolean).join(" "); }'
      }
    },
    {
      id: 2,
      description: 'Create a Button component with variant prop (primary, secondary)',
      completed: false,
      regex: /function Button|const Button.*=.*variant/,
      hint: {
        concept: 'Component Variants',
        strategy: 'Accept a variant prop and use conditional logic to apply different styles.',
        solution: 'function Button({ variant = "primary", children }) { ... }'
      }
    },
    {
      id: 3,
      description: 'Create a variants object with primary and secondary button styles',
      completed: false,
      regex: /variants.*primary.*secondary|const.*primary.*bg-/,
      hint: {
        concept: 'Variants Object',
        strategy: 'Define an object with variant names as keys and Tailwind classes as values.',
        solution: 'const variants = { primary: "bg-blue-600 text-white", secondary: "bg-gray-200 text-gray-800" };'
      }
    },
    {
      id: 4,
      description: 'Apply the variant classes dynamically in Button using template literals or cn()',
      completed: false,
      regex: /className.*\$\{|className.*cn\(/,
      hint: {
        concept: 'Dynamic Classes',
        strategy: 'Use template literals or the cn() function to combine base classes with variant classes.',
        solution: 'className={cn("px-6 py-3 rounded-lg", variants[variant])}'
      }
    },
    {
      id: 5,
      description: 'Add className prop to Button that allows custom classes to be passed',
      completed: false,
      regex: /Button.*\{.*className.*\}|className.*props\.className/,
      hint: {
        concept: 'Customization via Props',
        strategy: 'Accept className as a prop and merge it with component classes.',
        solution: 'function Button({ variant, className, children }) { ... className={cn(..., className)} }'
      }
    },
    {
      id: 6,
      description: 'Create a Card component with base styles and optional elevated prop',
      completed: false,
      regex: /function Card|const Card.*elevated/,
      hint: {
        concept: 'Boolean Props for Variants',
        strategy: 'Use a boolean prop (elevated) to conditionally add shadow-xl instead of shadow-md.',
        solution: 'function Card({ elevated, children }) { return <div className={cn("bg-white rounded-xl p-6", elevated ? "shadow-xl" : "shadow-md")}>{children}</div>; }'
      }
    },
    {
      id: 7,
      description: 'Create an Input component with error prop that changes border to red',
      completed: false,
      regex: /function Input|const Input.*error/,
      hint: {
        concept: 'Error States',
        strategy: 'When error prop is true, change border color to red-500 instead of gray-300.',
        solution: 'className={cn("border-2 rounded-lg px-4 py-3", error ? "border-red-500" : "border-gray-300")}'
      }
    },
    {
      id: 8,
      description: 'Export all components and test them in the App',
      completed: false,
      regex: /<Button|<Card|<Input/,
      hint: {
        concept: 'Using Your Components',
        strategy: 'Import and use your components with different props to verify they work.',
        solution: '<Button variant="primary">Click</Button><Card elevated><Input error /></Card>'
      }
    }
  ],
  files: [
    {
      name: 'App.jsx',
      language: 'javascript',
      content: `// React Component Library Lab

// Task 1: Create the cn() helper
function cn(...classes) {
  // Combine class strings, filter out falsy values
  
}

// Task 2-5: Create Button component
function Button({ variant = 'primary', className, children }) {
  // Task 3: Define variants object
  const variants = {
    // Add primary and secondary variants
  };
  
  return (
    <button 
      className={/* Task 4: Combine classes dynamically */}>
      {children}
    </button>
  );
}

// Task 6: Create Card component
function Card({ elevated = false, className, children }) {
  return (
    <div className={/* Add conditional shadow based on elevated */}>
      {children}
    </div>
  );
}

// Task 7: Create Input component
function Input({ error = false, className, ...props }) {
  return (
    <input 
      className={/* Add conditional border color based on error */}
      {...props}
    />
  );
}

// Task 8: Test your components
export default function App() {
  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Component Library Demo</h1>
      
      {/* Buttons */}
      <section>
        <h2 className="text-xl font-bold mb-4">Buttons</h2>
        <div className="flex gap-4">
          {/* Add Button variants here */}
        </div>
      </section>
      
      {/* Cards */}
      <section>
        <h2 className="text-xl font-bold mb-4">Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Add Card examples here */}
        </div>
      </section>
      
      {/* Inputs */}
      <section>
        <h2 className="text-xl font-bold mb-4">Inputs</h2>
        <div className="max-w-md space-y-4">
          {/* Add Input examples here */}
        </div>
      </section>
    </div>
  );
}`
    }
  ]
};
