import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4ClientServer = {
    id: 'nextjs-unit-4',
    title: 'Interactivity & Client State',
    description: 'Learn how to add interactivity, manage state, and use browser APIs in the App Router.',
    items: [
        {
            id: 'nextjs-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'The "use client" Directive',
            duration: '15 min read',
            content: `
# The "use client" Directive

To use React's interactive features (Hooks, Event Listeners) in the App Router, you must mark your component as a **Client Component**.

## How to use it
Add \`'use client';\` at the very top of your file (before imports).

\`\`\`tsx
'use client'; 

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
\`\`\`

## What gets bundled?
When you use \`'use client'\`:
1.  That component becomes a Client Component.
2.  **All components imported into it** are arguably treated as Client Components (they are included in the client bundle).

## Best Practice: Leaf Components
Keep your Client Components at the "leaves" of your tree. 
Don't make your Root Layout a Client Component. 
Instead, make a small \`<SearchBar>\` component and import that into your Server Page.
            `
        },
        {
            id: 'nextjs-4-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building Interactive UI',
            duration: '25 min',
            content: `
# Building Interactive UI

We'll build a simple "Like" button. It needs state (\`isLiked\`) and an event handler (\`onClick\`).

## Rules of Hooks
1.  Only call hooks at the top level.
2.  Only call hooks from React function components.
3.  **Must be in a Client Component**.

---

## Your Mission
1. Add the \`'use client'\` directive.
2. Create a \`liked\` state initialized to false.
3. Toggle the state when the button is clicked.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add \'use client\' directive at the top',
                    completed: false,
                    regex: /['"]use client['"]/
                },
                {
                    id: 2,
                    description: 'Initialize state: const [liked, setLiked] = useState(false)',
                    completed: false,
                    regex: /const\s*\[\s*liked\s*,\s*setLiked\s*\]\s*=\s*useState/
                },
                {
                    id: 3,
                    description: 'Add onClick handler to toggle state',
                    completed: false,
                    regex: /onClick\s*=\s*\{\s*\(\s*\)\s*=>\s*setLiked/
                }
            ],
            files: [
                {
                    name: 'components/LikeButton.tsx',
                    language: 'tsx',
                    content: `// 1. Directive


import { useState } from 'react';

export default function LikeButton() {
    // 2. State
    
    
    return (
        <button 
            // 3. Handler
            
        >
            {/* liked ? 'Unlike' : 'Like' */}
            Like
        </button>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'The Composition Pattern',
            duration: '20 min read',
            content: `
# The Composition Pattern

A common problem: You want to use a Context Provider (Client) but it needs to wrap your entire App (Server).
If you make \`layout.tsx\` a Client Component, you lose Server features (metadata, initial HTML perf).

## Solution: Render Children

Create a Client Component wrapper that takes \`children\`.

\`\`\`tsx
// app/providers.tsx
'use client';

import { ThemeProvider } from 'my-theme-lib';

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
\`\`\`

\`\`\`tsx
// app/layout.tsx (Server Component)
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
\`\`\`

Why this works: \`children\` (the Server Components from pages) are passed as props. The Client Component just renders the "slot" for them. It doesn't need to know what they are, so they stay Server Components.
            `
        },
        {
            id: 'nextjs-4-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lifting State & Prop Drilling',
            duration: '30 min',
            content: `
# Lifting State & Prop Drilling

When multiple components need to share state, "lift" the state up to their closest common ancestor.

## Scenario
- \`Dashboard\` (Parent)
  - \`Sidebar\` (Needs user name)
  - \`Header\` (Needs user name)

If \`Dashboard\` fetches the user (Server), it can pass it down as props.
If the state is interactive (e.g., \`isOpen\`), \`Dashboard\` must become a Client Component OR use Context.

---

## Your Mission
1. Create a \`Sidebar\` and \`Header\` component accepting props.
2. Pass \`userName\` from the Parent to both children.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Sidebar component accepts { userName } prop',
                    completed: false,
                    regex: /function\s+Sidebar\s*\(\s*\{\s*userName\s*\}\s*\)/
                },
                {
                    id: 2,
                    description: 'Header component accepts { userName } prop',
                    completed: false,
                    regex: /function\s+Header\s*\(\s*\{\s*userName\s*\}\s*\)/
                },
                {
                    id: 3,
                    description: 'Parent passes variable "user" to instances',
                    completed: false,
                    regex: /<Sidebar\s+userName=\{user\}\s*\/>[\s\S]*<Header\s+userName=\{user\}\s*\/>/
                }
            ],
            files: [
                {
                    name: 'app/dashboard/layout.tsx',
                    language: 'tsx',
                    content: `function Sidebar({ userName }: any) { return <div>{userName}</div> }
function Header({ userName }: any) { return <div>{userName}</div> }

export default function DashboardLayout() {
    const user = "Alice";
    
    return (
        <div className="flex">
            {/* 1. Pass props to Sidebar */}
            
            
            <main>
                {/* 2. Pass props to Header */}
                
                
            </main>
        </div>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-4-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Browser APIs in Next.js',
            duration: '15 min read',
            content: `
# Browser APIs

Server Components run on Node.js. They don't have \`window\`, \`document\`, or \`localStorage\`.
Attempting to access them causes a crash: \`ReferenceError: window is not defined\`.

## Safe Access

In Client Components, \`window\` is available **only after the component mounts**.
During the initial server render of the Client Component (SSR), \`window\` is still missing.

### Pattern: useEffect check

\`\`\`tsx
'use client';
import { useEffect, useState } from 'react';

export default function WindowSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Only runs in browser
    setWidth(window.innerWidth);
  }, []);

  return <div>Width: {width}</div>;
}
\`\`\`

### Pattern: Typeof check

\`\`\`tsx
if (typeof window !== 'undefined') {
  localStorage.setItem('key', 'value');
}
\`\`\`
            `
        },
        {
            id: 'nextjs-4-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Creating Custom Hooks',
            duration: '25 min',
            content: `
# Creating Custom Hooks

Custom hooks let you reuse logic across components.
Example: \`useLocalStorage\`.

## Logic
1.  Read from localStorage on mount.
2.  Sync state changes to localStorage.

---

## Your Mission
1. Create a \`useLocalStorage\` hook.
2. Use \`useEffect\` to read from localStorage (avoid hydration mismatch).
3. Return \`[value, setValue]\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Export function useLocalStorage',
                    completed: false,
                    regex: /export\s+function\s+useLocalStorage/
                },
                {
                    id: 2,
                    description: 'Get item from window.localStorage inside useEffect',
                    completed: false,
                    regex: /useEffect.*window\.localStorage\.getItem/s
                },
                {
                    id: 3,
                    description: 'Return value and setter',
                    completed: false,
                    regex: /return\s*\[\s*value\s*,\s*setValue\s*\]/
                }
            ],
            files: [
                {
                    name: 'hooks/useLocalStorage.ts',
                    language: 'ts',
                    content: `import { useState, useEffect } from 'react';

export function useLocalStorage(key: string, initialValue: string) {
    const [value, setValue] = useState(initialValue);
    
    // 1. Sync on Mount
    
    
    // 2. Sync on Change
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, value);
        }
    }, [key, value]);
    
    return [value, setValue];
}
`
                }
            ]
        },
        {
            id: 'nextjs-4-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Context API in App Router',
            duration: '20 min read',
            content: `
# Context API

Context allows sharing global state (Theme, Auth User, Cart) without prop drilling.

## Create Context
\`\`\`tsx
'use client';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  // ...
  return <ThemeContext.Provider value={{...}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);
\`\`\`

## Using Context
Wrap your app in the provider (in \`layout.tsx\`) and consume it in any Client Component.
            `
        },
        {
            id: 'nextjs-4-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Implementing Dark Mode',
            duration: '30 min',
            content: `
# Implementing Dark Mode

We'll build a simple Dark Mode toggle using Context.

---

## Your Mission
1. Create the Context.
2. Create the Provider component.
3. Export a custom hook \`useTheme\` to consume it.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create Context object',
                    completed: false,
                    regex: /createContext\s*\(/
                },
                {
                    id: 2,
                    description: 'Export ThemeProvider accepting children',
                    completed: false,
                    regex: /export\s+function\s+ThemeProvider.*children/
                },
                {
                    id: 3,
                    description: 'Return Context.Provider wrapping children',
                    completed: false,
                    regex: /return\s*<.*Provider.*>.*\{children\}.*<\/.*Provider>/
                }
            ],
            files: [
                {
                    name: 'context/ThemeContext.tsx',
                    language: 'tsx',
                    content: `'use client';
import { createContext, useContext, useState } from 'react';

// 1. Create Context


// 2. Create Provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState('light');
    
    return (
        // 3. Wrap Children
        <div>{children}</div>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Interactivity Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Where must the "use client" directive be placed?',
                    options: [
                        'Inside the component function',
                        'At the very top of the file',
                        'In next.config.js',
                        'Before the export statement'
                    ],
                    correctIndex: 1,
                    explanation: 'It must be the very first line of code (comments are allowed before it).'
                },
                {
                    id: 'q2',
                    question: 'Why can\'t you access `window` directly in a Client Component\'s render body?',
                    options: [
                        'Because it is strict mode',
                        'Because Client Components are pre-rendered on the server first (SSR)',
                        'Because Next.js disables the window object',
                        'Because it is deprecated'
                    ],
                    correctIndex: 1,
                    explanation: 'Client Components are still rendered on the server to generate initial HTML. The server has no window.'
                },
                {
                    id: 'q3',
                    question: 'How do you pass Server Data to a Client Component?',
                    options: [
                        'Use Context',
                        'Pass it as Props',
                        'Use localStorage',
                        'Fetch it again'
                    ],
                    correctIndex: 1,
                    explanation: 'The simplest and most performant way is to fetch data in a parent Server Component and pass it down as props.'
                }
            ]
        }
    ]
};
