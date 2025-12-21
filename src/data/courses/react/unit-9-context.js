import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9Context = {
  id: 'react-unit-9',
  title: 'Context & Reducer - Global State Management',
  description: 'Stop prop drilling. Learn to teleport data across your app using Context and manage complex state transitions with Reducer.',
  items: [
    // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
    {
      id: 'react-9-1',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Prop Drilling vs Context 🕳️',
      duration: '20 min read',
      content: `
# Deep Dive: Prop Drilling vs Context 🕳️

## 1. The Problem: Prop Drilling
Imagine you have a \`user\` object in \`App.js\`.
You need to display the username in a \`UserAvatar\` component deep in the navigation bar.
\`App -> Layout -> Header -> Navigation -> UserMenu -> UserAvatar\`
You have to pass \`props.user\` through 5 layers of components that don't even use it!
This is **Prop Drilling**. It makes code brittle.

## 2. The Solution: Teleportation
**Context** provides a way to share values like "global" variables.
You wrap the specific part of the app in a **Provider**.
Any component inside can "hook into" the context using **useContext** to grab the value directly.

## 3. When to use it?
*   **Theme**: Dark/Light mode.
*   **User**: Auth status (Logged in/out).
*   **Settings**: Language preference.
*   **NOT for**: Frequently changing data (like inputs) or complex relationships (use Redux/Zustand for that).
            `
    },
    {
      id: 'react-9-2',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: The Context API 📡',
      duration: '20 min read',
      content: `
# Deep Dive: The Context API 📡

## 1. Create
\`export const ThemeContext = createContext('light');\`
This creates the "Context Object". The argument is the *default value*.

## 2. Provide
\`<ThemeContext.Provider value={theme}> ... </ThemeContext.Provider>\`
The **Provider** component allows consuming components to subscribe to context changes.
The \`value\` prop is what gets passed down.

## 3. Consume
\`const theme = useContext(ThemeContext);\`
This hook says: "Look up the component tree, find the nearest Provider, and give me its value."
            `
    },
    {
      id: 'react-9-3',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: useReducer Pattern 🏭',
      duration: '25 min read',
      content: `
# Deep Dive: useReducer Pattern 🏭

## 1. useState vs useReducer
\`useState\` is great for simple values (strings, numbers).
But what if you have a complex object where fields depend on each other?
Or if the *next* state depends on specific logic?

## 2. The Reducer Function
\`(state, action) => newState\`
This is a Pure Function. It takes the current state and an "Action" (instruction), and returns the new state.
**It never modifies the state directly.** It returns a new copy.

## 3. Dispatching Actions
You don't say "Change color to red".
You say "Dispatch: ACTION_TYPE_ERROR".
The reducer decides *how* to handle that (e.g., set color to red, show error message, hide spinner).
This decouples *what happened* from *how state updates*.
            `
    },
    {
      id: 'react-9-4',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Global State Pattern 🌐',
      duration: '20 min read',
      content: `
# Deep Dive: Global State Pattern 🌐

## 1. Context + Reducer = Variable Superpower
Alone, Context is just a value passer.
Alone, Reducer is just a state logic manager.
**Together**, they form a powerful Global State Management system.

## 2. The Pattern
1.  Create a **Provider Component**.
2.  Inside it, use \`useReducer\` to manage state.
3.  Pass \`state\` and \`dispatch\` into the Context Provider \`value\`.
4.  Wrap your App with the Provider.
5.  Any component can now read global state AND dispatch global actions.

## 3. Optimization
To prevent re-renders, you might split Contexts:
\`StateContext\` (for reading data) and \`DispatchContext\` (for sending commands).
            `
    },

    // PART 2: PRACTICAL LABS (LESSONS)
    {
      id: 'react-9-lesson-1',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 1: Theme Context',
      duration: '20 min',
      content: `
# Lab 1: Theme Context

Build a basic "Dark Mode" switcher using Context.

## The Mission
1.  **Create**: \`createContext(null)\`.
2.  **Provide**: Wrap children in \`Provider\` with value \`{ theme, toggle }\`.
3.  **Consume**: Use \`useContext\` to get the theme and apply class.

## Note
In the lab, define the Context *outside* the component to export it.
            `,
      tasks: [
        {
          id: 1,
          description: 'Context: Create ThemeContext.',
          completed: false,
          regex: /createContext\s*\(/
        },
        {
          id: 2,
          description: 'Provider: Wrap children.',
          completed: false,
          regex: /<ThemeContext\.Provider\s+value\s*=/
        },
        {
          id: 3,
          description: 'Consume: useContext to get theme.',
          completed: false,
          regex: /useContext\s*\(\s*ThemeContext\s*\)/
        }
      ],
      files: [
        {
          name: 'ThemeApp.jsx',
          language: 'javascript',
          content: `import { useState, createContext, useContext } from 'react';

// Task 1: Create Context
const ThemeContext = createContext('light');

export default function ThemeApp() {
    const [theme, setTheme] = useState('light');
    const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

    return (
        // Task 2: Provider
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    // Task 3: Consume
    const theme = 'light'; 
    
    return <button className={theme}>I am {theme}</button>;
}
`
        }
      ]
    },
    {
      id: 'react-9-lesson-2',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 2: Auth Provider',
      duration: '30 min',
      content: `
# Lab 2: Auth Provider

Simulate a user login system.
We want to access \`user\` data anywhere in the app.

## The Mission
1.  **Provider**: Create \`AuthProvider\`.
2.  **State**: \`user\` (null or object).
3.  **Functions**: \`login(name)\`, \`logout()\`.
4.  **Custom Hook**: \`useAuth()\` wrapper for safety.

## Best Practice
The \`useAuth\` hook should check if context exists and throw an error if used outside Provider.
            `,
      tasks: [
        {
          id: 1,
          description: 'Provider: Pass user, login, logout.',
          completed: false,
          regex: /value\s*=\s*{\s*\{\s*user.*login.*logout\s*\}\s*}/s
        },
        {
          id: 2,
          description: 'Hook: Create useAuth wrapper.',
          completed: false,
          regex: /function\s+useAuth\s*\(\s*\)/
        },
        {
          id: 3,
          description: 'Safety: Throw error if null.',
          completed: false,
          regex: /if\s*\(\s*!context\s*\)\s*throw/
        }
      ],
      files: [
        {
          name: 'AuthContext.jsx',
          language: 'javascript',
          content: `import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = (name) => setUser({ name });
    const logout = () => setUser(null);

    // Task 1: Return Provider
    return <>{children}</>; 
}

// Task 2: Custom Hook
export function useAuth() {
    const context = useContext(AuthContext);
    // Task 3: Validation
    
    return context;
}
`
        }
      ]
    },
    {
      id: 'react-9-lesson-3',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 3: Simple Reducer',
      duration: '25 min',
      content: `
# Lab 3: Simple Reducer

Replace \`useState\` with \`useReducer\` for a Counter.
Actions: 'INCREMENT', 'DECREMENT', 'RESET'.

## The Mission
1.  **Reducer**: Function \`(state, action) => newState\`.
2.  **Hook**: \`useReducer(reducer, initialState)\`.
3.  **Dispatch**: \`dispatch({ type: 'INCREMENT' })\`.

## Switch Statement
Reducers almost always use a \`switch(action.type)\` statement.
            `,
      tasks: [
        {
          id: 1,
          description: 'Reducer: Handle INCREMENT.',
          completed: false,
          regex: /case\s*['"]INCREMENT['"]:/
        },
        {
          id: 2,
          description: 'Hook: Initialize useReducer.',
          completed: false,
          regex: /useReducer\s*\(\s*reducer\s*,\s*initialState\s*\)/
        },
        {
          id: 3,
          description: 'Dispatch: Call dispatch on click.',
          completed: false,
          regex: /dispatch\s*\(\s*{\s*type:\s*['"]INCREMENT['"]\s*}\s*\)/
        }
      ],
      files: [
        {
          name: 'CounterReducer.jsx',
          language: 'javascript',
          content: `import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    // Task 1: Switch Statement
    switch (action.type) {
        
        default: return state;
    }
}

export default function Counter() {
    // Task 2: Hook
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {state.count}
            {/* Task 3: Buttons */}
            <button onClick={() => {}}>+</button>
        </div>
    );
}
`
        }
      ]
    },
    {
      id: 'react-9-lesson-4',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 4: The Cart (Context + Reducer)',
      duration: '40 min',
      content: `
# Lab 4: The Cart (Context + Reducer)

The final boss of local state management.
A Shopping Cart that is accessible everywhere.

## The Mission
1.  **Context**: \`CartContext\`.
2.  **Reducer**: Handle 'ADD_ITEM' (push to array).
3.  **Provider**: Combine them. Wrap the app.
4.  **Use**: Dispatch an add action from a button.

## Payload
Actions often have a \`payload\`: \`{ type: 'ADD', payload: { id: 1, name: 'Apple' } }\`.
            `,
      tasks: [
        {
          id: 1,
          description: 'Reducer: Add item logic.',
          completed: false,
          regex: /return\s*\[\s*\.\.\.state\s*,\s*action\.payload\s*\]/
        },
        {
          id: 2,
          description: 'Provider: Pass dispatch in value.',
          completed: false,
          regex: /value\s*=\s*{\s*\{\s*cart.*dispatch\s*\}\s*}/s
        },
        {
          id: 3,
          description: 'Dispatch: Add item with payload.',
          completed: false,
          regex: /dispatch\s*\(\s*{\s*type:.*payload:.*}\s*\)/s
        }
      ],
      files: [
        {
          name: 'CartSystem.jsx',
          language: 'javascript',
          content: `import { useReducer, useContext, createContext } from 'react';

const CartContext = createContext();

function cartReducer(state, action) {
    if (action.type === 'ADD') {
        // Task 1: Return new array with item
        
    }
    return state;
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);
    // Task 2: Provider
    return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
}

export function Product() {
    const { dispatch } = useContext(CartContext);
    const item = { id: 1, name: 'Laptop' };
    
    // Task 3: Dispatch ADD
    return <button onClick={() => {}}>Buy</button>;
}
`
        }
      ]
    },

    // PART 3: ASSESSMENT (QUIZ)
    {
      id: 'react-9-quiz',
      type: CONTENT_TYPES.QUIZ,
      title: 'Context & Reducer Quiz',
      duration: '10 min',
      questions: [
        {
          id: 'q1',
          question: 'What is the primary "problem" that Context solves?',
          options: [
            'Performance issues',
            'Prop Drilling (passing data through many layers)',
            'Complex database queries',
            'Styling conflicts'
          ],
          correctIndex: 1,
          explanation: 'Context allows you to bypass the intermediate components and pass data directly from a Provider to a Consumer.'
        },
        {
          id: 'q2',
          question: 'What happens when a Context value changes?',
          options: [
            'Nothing happens',
            'Only the Provider re-renders',
            'All components consuming that Context re-render',
            'The entire application reloads'
          ],
          correctIndex: 2,
          explanation: 'This is important for performance. Every component using useContext(MyContext) will update when MyContext updates.'
        },
        {
          id: 'q3',
          question: 'In a Reducer, what does "action" typically contain?',
          options: [
            'Just a string',
            'A type (string) and optional payload (data)',
            'A callback function',
            'The previous state'
          ],
          correctIndex: 1,
          explanation: 'Standard convention is `{ type: "ACTION_NAME", payload: ... }`.'
        },
        {
          id: 'q4',
          question: 'Why should you generally wrap a Provider around the outermost component possible?',
          options: [
            'To make it look nice',
            'To ensure the data is available to the entire tree (or subtree) that needs it',
            'To prevents bugs',
            'It is required by React'
          ],
          correctIndex: 1,
          explanation: 'If a component is outside the Provider, `useContext` will return the default value (often null), which breaks the app.'
        },
        {
          id: 'q5',
          question: 'When should you choose useReducer over useState?',
          options: [
            'Always',
            'Never',
            'When state logic is complex or next state depends on previous state in specific ways',
            'When fetching data'
          ],
          correctIndex: 2,
          explanation: 'Reducers are great for complex objects or when you have multiple sub-values (like loading, error, data) changing together.'
        }
      ]
    }
  ]
};
