import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit15DesignPatterns = {
  id: 'react-unit-15',
  title: 'Advanced Patterns - The Architect\'s Toolkit',
  description: 'Move beyond basic component composition. Master standard patterns like Compound Components, HOCs, and Render Props to build reusable UI libraries.',
  items: [
    // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
    {
      id: 'react-15-1',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Compound Components 🍱',
      duration: '25 min read',
      content: `
# Deep Dive: Compound Components 🍱

## 1. The Problem
You have a \`<Select />\` component.
You need to pass options, labels, and event handlers deep down.
Result: \`<Select options={options} onChange={...} label={...} />\` (Prop Explosion).

## 2. The Solution: Compound Pattern
Think of \`<select>\` and \`<option>\` in HTML. They work together.
We can do the same in React using **Context**.

\`\`\`jsx
<Select onChange={val => console.log(val)}>
  <Select.Label>Choose a fruit</Select.Label>
  <Select.Option value="apple">Apple</Select.Option>
  <Select.Option value="banana">Banana</Select.Option>
</Select>
\`\`\`

## 3. How it Works
1.  Parent (\`Select\`) creates a Context.
2.  Children (\`Select.Option\`) consume the context to register themselves or trigger updates.
3.  Flexible layout: You can put \`<div>\` wrappers in between!
            `
    },
    {
      id: 'react-15-2',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Higher-Order Components (HOC) 📦',
      duration: '20 min read',
      content: `
# Deep Dive: Higher-Order Components (HOC) 📦

## 1. Definition
A function that takes a component and returns a *new* component.
\`const EnhancedComponent = withExtra(OriginalComponent);\`.

## 2. Use Cases
*   **Authentication**: \`withAuth(Dashboard)\` checks if user is logged in.
*   **Logging**: \`withLogger(Button)\` logs every click.
*   **Data Injection**: \`withUser(Profile)\` fetches and injects user prop.

## 3. The Modern View
Hooks have replaced many HOC use cases (e.g., \`useAuth()\` vs \`withAuth()\`).
However, HOCs are still useful for **conditional rendering logic** (like lazy loading or permission boundaries) that you don't want to repeat in every helper.
            `
    },
    {
      id: 'react-15-3',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Render Props 🎨',
      duration: '20 min read',
      content: `
# Deep Dive: Render Props 🎨

## 1. The Concept
Passing a **function** as a prop, which determines *what* to render.
It allows the child component to pass *state* back to the parent's generic logic.

\`\`\`jsx
<MouseTracker render={({ x, y }) => (
  <h1>The mouse is at {x}, {y}</h1>
)} />
\`\`\`

## 2. Inversion of Control
The component handles the *logic* (tracking mouse), but gives control of the *UI* to the consumer.

## 3. Children as a Function
A common variation:
\`<Toggle>{({ on, toggle }) => <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>}</Toggle>\`
            `
    },
    {
      id: 'react-15-4',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Layout Components 📐',
      duration: '15 min read',
      content: `
# Deep Dive: Layout Components 📐

## 1. Split Screens
Separating layout structure from content.
\`\`\`jsx
<SplitPane
  left={<Sidebar />}
  right={<MainContent />}
/>
\`\`\`

## 2. Slot Pattern
Passing distinct components into specific named "slots" (props).
Unlike \`children\` (which is just one slot), this enables complex layouts.

\`\`\`jsx
<AppShell
  header={<Header />}
  sidebar={<Nav />}
  content={<Page />} // Naming can be anything
  footer={<Footer />}
/>
\`\`\`
            `
    },

    // PART 2: PRACTICAL LABS (LESSONS)
    {
      id: 'react-15-lesson-1',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 1: Compound Toggle',
      duration: '35 min',
      content: `
# Lab 1: Compound Toggle

Build a \`<Toggle>\` component that shares state with \`<Toggle.On>\` and \`<Toggle.Off>\`.

## The Mission
1.  **Context**: Create \`ToggleContext\`.
2.  **Parent**: \`Toggle\` provider holds \`on\` state.
3.  **Children**:
    *   \`Toggle.On\`: Renders children if \`on\` is true.
    *   \`Toggle.Off\`: Renders children if \`on\` is false.
    *   \`Toggle.Button\`: Switches state.

## Usage
\`\`\`jsx
<Toggle>
  <Toggle.On>The light is ON</Toggle.On>
  <Toggle.Off>The light is OFF</Toggle.Off>
  <Toggle.Button />
</Toggle>
\`\`\`
            `,
      tasks: [
        {
          id: 1,
          description: 'Context: Create and Provide.',
          completed: false,
          regex: /createContext\s*\(/
        },
        {
          id: 2,
          description: 'Parent: value={ on, toggle }.',
          completed: false,
          regex: /<ToggleContext\.Provider\s+value\s*=\s*{\s*{\s*on/
        },
        {
          id: 3,
          description: 'Child: Consume context.',
          completed: false,
          regex: /useContext\s*\(\s*ToggleContext\s*\)/
        }
      ],
      files: [
        {
          name: 'Toggle.jsx',
          language: 'javascript',
          content: `import { createContext, useState, useContext } from 'react';

// Task 1: Create Context
const ToggleContext = createContext();

export default function Toggle({ children }) {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(!on);

    // Task 2: Provider
    return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>;
}

// Subcomponents
Toggle.On = function({ children }) {
    // Task 3: Use Context
    const { on } = useContext(ToggleContext);
    return on ? children : null;
};

Toggle.Off = function({ children }) {
    const { on } = useContext(ToggleContext);
    return on ? null : children;
};

Toggle.Button = function() {
    const { on, toggle } = useContext(ToggleContext);
    return <button onClick={toggle}>{on ? 'Switch Off' : 'Switch On'}</button>;
};
`
        }
      ]
    },
    {
      id: 'react-15-lesson-2',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 2: withLogger HOC',
      duration: '25 min',
      content: `
# Lab 2: withLogger HOC

Create a HOC that logs to the console whenever a component mounts.

## The Mission
1.  **Function**: \`withLogger(WrappedComponent)\`.
2.  **Return**: A new component that renders \`WrappedComponent\`.
3.  **Effect**: Add \`useEffect\` to log "Component Mounted".
4.  **Props**: Pass all props through using spread syntax \`{...props}\`.

## Prop Drilling in HOCs
If you don't spread \`...props\`, the data stops at the HOC wrapper!
            `,
      tasks: [
        {
          id: 1,
          description: 'HOC: Return function.',
          completed: false,
          regex: /return\s+function\s+Log/
        },
        {
          id: 2,
          description: 'Effect: Log on mount.',
          completed: false,
          regex: /useEffect.*console\.log/s
        },
        {
          id: 3,
          description: 'Render: Spread props.',
          completed: false,
          regex: /<WrappedComponent\s*{\s*\.\.\.props\s*}/
        }
      ],
      files: [
        {
          name: 'withLogger.jsx',
          language: 'javascript',
          content: `import { useEffect } from 'react';

export function withLogger(WrappedComponent) {
    return function LoggingComponent(props) {
        // Task 2: Effect
        
        // Task 3: Render
        return <WrappedComponent />; 
    };
}

// Usage Example via a Test Component
function Button({ label }) {
    return <button>{label}</button>;
}

export const LoggedButton = withLogger(Button);
`
        }
      ]
    },
    {
      id: 'react-15-lesson-3',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 3: Render Props List',
      duration: '30 min',
      content: `
# Lab 3: Render Props List

Create a \`List\` component that handles the iteration logic, but lets the parent decide HOW to render each item.

## The Mission
1.  **Prop**: Accept \`renderItem\` prop (function).
2.  **Loop**: Map over \`items\`.
3.  **Call**: Inside map, call \`renderItem(item)\`.

## Flexibility
Child doesn't need to know if it's an \`<li>\`, \`<div>\`, or \`<Card>\`.
            `,
      tasks: [
        {
          id: 1,
          description: 'Map: Iterate items.',
          completed: false,
          regex: /items\.map/
        },
        {
          id: 2,
          description: 'Render: Call prop function.',
          completed: false,
          regex: /renderItem\s*\(\s*item\s*\)/
        }
      ],
      files: [
        {
          name: 'List.jsx',
          language: 'javascript',
          content: `// Generic List Component
export default function List({ items, renderItem }) {
    return (
        <div>
            {/* Task 1 & 2: Map and Render */}
            {items.map(item => (
                <div key={item.id}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
}

// Usage in App (Mental Model)
// <List items={data} renderItem={(user) => <UserCard user={user} />} />
`
        }
      ]
    },
    {
      id: 'react-15-lesson-4',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 4: The Slot Pattern',
      duration: '20 min',
      content: `
# Lab 4: The Slot Pattern

Create a Modal that accepts specific slots for header, content, and footer.

## The Mission
1.  **Props**: Accept \`header\`, \`footer\`, \`children\`.
2.  **Layout**: Place them in specific containers with styling.
3.  **Conditional**: Only render footer container if \`footer\` prop exists.

## The Power of Composition
This is cleaner than passing \`title\` string props because you can pass Buttons, Icons, or anything into the slots.
            `,
      tasks: [
        {
          id: 1,
          description: 'Props: header/footer slots.',
          completed: false,
          regex: /function\s+Modal\s*\(\s*{\s*header\s*,\s*footer/
        },
        {
          id: 2,
          description: 'Render: Place slots.',
          completed: false,
          regex: /<div.*class.*header.*>\s*{\s*header\s*}/
        },
        {
          id: 3,
          description: 'Conditional: Footer check.',
          completed: false,
          regex: /{\s*footer\s*&&\s*<div/
        }
      ],
      files: [
        {
          name: 'Modal.jsx',
          language: 'javascript',
          content: `export default function Modal({ header, footer, children }) {
    return (
        <div className="modal">
            <div className="modal-header">
                {header}
            </div>
            <div className="modal-body">
                {children}
            </div>
            {/* Task 3 */}
            {footer && 
                <div className="modal-footer">
                    {footer}
                </div>
            }
        </div>
    );
}
`
        }
      ]
    },

    // PART 3: ASSESSMENT (QUIZ)
    {
      id: 'react-15-quiz',
      type: CONTENT_TYPES.QUIZ,
      title: 'Design Patterns Quiz',
      duration: '10 min',
      questions: [
        {
          id: 'q1',
          question: 'What is the main benefit of Compound Components?',
          options: [
            'Better performance',
            'Implicit state sharing via Context, avoiding prop drilling between parent and related children',
            'They allow higher order functions',
            'They render faster'
          ],
          correctIndex: 1,
          explanation: 'Compound components communicate "behind the scenes" using Context, making the API clean for the user.'
        },
        {
          id: 'q2',
          question: 'What is a "Render Prop"?',
          options: [
            'A prop that is a boolean',
            'A prop whose value is a function that a component calls to determine what to render',
            'A prop that renders strings only',
            'A deprecated pattern'
          ],
          correctIndex: 1,
          explanation: 'It creates logic reuse by letting the parent decide the UI for the data exposed by the child.'
        },
        {
          id: 'q3',
          question: 'In a Higher Order Component (HOC), why must you spread props?',
          options: [
            'To clone the element',
            'To pass data from the parent through the HOC wrapper down to the original component',
            'To prevent errors',
            'To make it secure'
          ],
          correctIndex: 1,
          explanation: 'If you do not `{...props}`, the wrapped component will lose any props passed to the enhanced version.'
        },
        {
          id: 'q4',
          question: 'Which pattern solves the "Prop Explosion" (passing too many config props)?',
          options: [
            'Compound Components',
            'Singletons',
            'Prop Types',
            'Global Styles'
          ],
          correctIndex: 0,
          explanation: 'Instead of `<Modal title=".." onClose=".." footer=".." headerColor=".." />`, you use `<Modal.Header>`, `<Modal.Footer>`, splitting the props naturally.'
        },
        {
          id: 'q5',
          question: 'Why are Slots useful compared to just "children"?',
          options: [
            'They are faster',
            'They allow placing content in multiple distinct areas of a layout (header vs footer)',
            'They are required in React',
            'They use less memory'
          ],
          correctIndex: 1,
          explanation: '`children` fills one hole. Slots (via props) allow you to fill multiple holes in a layout template.'
        }
      ]
    }
  ]
};
