import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit13Performance = {
  id: 'react-unit-13',
  title: 'Performance Optimization - Speed is a Feature',
  description: 'React is fast, but you can make it slow. Learn to audit renders, understand referential equality, and use memoization surgery to fix bottlenecks.',
  items: [
    // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
    {
      id: 'react-13-1',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Render Cycle & Reconciliation 🔄',
      duration: '20 min read',
      content: `
# Deep Dive: Render Cycle & Reconciliation 🔄

## 1. When does React Render?
React renders a component when:
1.  **State Changes**: \`setState\` is called.
2.  **Parent Renders**: If a parent renders, **ALL** children render (recursively), regardless of props, unless optimized.
3.  **Context Changes**: All consumers of a Context provider render when the value changes.

## 2. The Virtual DOM
Rendering doesn't mean "Changing the Browser DOM".
Rendering means "Calling your function and diffing the result".
If the result is the same as last time, React touches nothing in the real DOM.
However, **running the function still costs CPU**.

## 3. The Commit Phase
If differences are found, React "Commits" changes to the real DOM. This is slow.
Our goal is to prevent the "Render Phase" (calling the function) when unnecessary.
            `
    },
    {
      id: 'react-13-2',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Referential Equality 🔗',
      duration: '25 min read',
      content: `
# Deep Dive: Referential Equality 🔗

## 1. The Inequality of Objects
In JS:
\`true === true\` (True)
\`1 === 1\` (True)
\`{} === {}\` (**False**)
\`[] === []\` (**False**)

## 2. The Dependency Array Trap
\`useEffect(() => {}, [options])\`
If \`options\` is an object created in the render body:
\`const options = { color: 'red' }\`
It is a **new object** every render.
So the Effect runs **every render**.

## 3. Props breakdown
If you pass \`<Child data={{ id: 1 }} />\`, Child receives new props every time.
Even if you use \`React.memo(Child)\`, it sees "New Props" and re-renders.
This is where **useMemo** saves the day.
            `
    },
    {
      id: 'react-13-3',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Memoization Strategy 🧠',
      duration: '20 min read',
      content: `
# Deep Dive: Memoization Strategy 🧠

## 1. React.memo
Wraps a component. Checks: "Did props change?"
If previous props === next props (shallow comparison), it skips rendering.
**Cost**: It has to compare props. Don't wrap simple components.

## 2. useMemo
Caches a **value** (number, object, array).
\`const value = useMemo(() => calculate(), [deps])\`
Use for: Expensive calculations (looping 1000 items) or preserving referential identity of objects.

## 3. useCallback
Caches a **function definition**.
\`const handleClick = useCallback(() => {}, [deps])\`
Use for: Passing functions to optimized children (Wrapped in React.memo) or as dependencies to Effects.
            `
    },
    {
      id: 'react-13-4',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Code Splitting ✂️',
      duration: '15 min read',
      content: `
# Deep Dive: Code Splitting ✂️

## 1. The Bundle
By default, React bundles your whole app into one \`bundle.js\`.
If your app is huge, the user waits 5 seconds for a white screen.

## 2. React.lazy
Allows you to "Dynamic Import" a component.
\`const Widget = React.lazy(() => import('./Widget'))\`
Webpack splits this into a separate chunk. It loads only when rendered.

## 3. Suspense
While the chunk is downloading over the network, React needs to show something.
\`<Suspense fallback={<Spinner />}>\` wraps the lazy component.
            `
    },

    // PART 2: PRACTICAL LABS (LESSONS)
    {
      id: 'react-13-lesson-1',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 1: React.memo',
      duration: '25 min',
      content: `
# Lab 1: React.memo

A parent component updates frequently. A child component is static but keeps re-rendering.
Stop the madness.

## The Mission
1.  **Analyze**: Add \`console.log\` to Child. Verify it logs on every click.
2.  **Optimize**: Wrap Child export in \`memo\`.
3.  **Verify**: Click parent button. Child should NOT log anymore.

## Note
Standard \`export default function\` syntax needs to be changed to \`const Child = memo(function() {...})\`.
            `,
      tasks: [
        {
          id: 1,
          description: 'Analyze: Log render.',
          completed: false,
          regex: /console\.log\s*\(\s*['"]Child Rendered['"]\s*\)/
        },
        {
          id: 2,
          description: 'Import: memo from react.',
          completed: false,
          regex: /import\s*{\s*memo\s*}/
        },
        {
          id: 3,
          description: 'Optimize: Wrap component.',
          completed: false,
          regex: /const\s+Child\s*=\s*memo\s*\(\s*function/
        }
      ],
      files: [
        {
          name: 'Memoization.jsx',
          language: 'javascript',
          content: `import { useState, memo } from 'react';

// Task 3: Wrap me!
const Child = function() {
    // Task 1: Log here
    
    return <p>I am a static child.</p>;
};

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(c => c+1)}>++</button>
            <Child />
        </div>
    );
}
`
        }
      ]
    },
    {
      id: 'react-13-lesson-2',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 2: useCallback Fix',
      duration: '30 min',
      content: `
# Lab 2: useCallback Fix

You optimized \`<Button />\` with \`memo\`, but it STILL re-renders.
Why? Because the \`onClick\` function you are passing is new every time.

## The Mission
1.  **Child**: A memoized Button component.
2.  **Parent**: Updates \`count\`. Params \`handleClick\` to child.
3.  **Fix**: Wrap \`handleClick\` in \`useCallback\`.

## Dependencies
What does \`handleClick\` need? If nothing, \`[]\`.
            `,
      tasks: [
        {
          id: 1,
          description: 'Hook: Import useCallback.',
          completed: false,
          regex: /import\s*.*useCallback/
        },
        {
          id: 2,
          description: 'Optimize: Wrap function.',
          completed: false,
          regex: /const\s+increment\s*=\s*useCallback\s*\(/
        },
        {
          id: 3,
          description: 'Deps: Empty array.',
          completed: false,
          regex: /,\s*\[\s*\]\s*\)/
        }
      ],
      files: [
        {
          name: 'CallbackFix.jsx',
          language: 'javascript',
          content: `import { useState, useCallback, memo } from 'react';

const Button = memo(({ onClick, children }) => {
    console.log("Button Rendered");
    return <button onClick={onClick}>{children}</button>;
});

export default function App() {
    const [count, setCount] = useState(0);

    // Task 2: This function breaks the memoization of Button! Fix it.
    const increment = () => {
        setCount(c => c + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={increment}>Click Me</Button>
        </div>
    );
}
`
        }
      ]
    },
    {
      id: 'react-13-lesson-3',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 3: Expensive Calculation',
      duration: '35 min',
      content: `
# Lab 3: Expensive Calculation

We have a list of 10,000 items (simulated slow loop).
Typing in the input field lags because the list re-calculates unnecessarily.

## The Mission
1.  **Simulate**: Create a slow function \`slowFilter\`.
2.  **Measure**: Notice lag when typing interacting with other state.
3.  **Optimize**: Use \`useMemo\` to only calculate when \`filter\` text changes.

## Performance
Typing in "Dark Mode" toggle should NOT trigger the slow filter.
            `,
      tasks: [
        {
          id: 1,
          description: 'Hook: Import useMemo.',
          completed: false,
          regex: /import\s*.*useMemo/
        },
        {
          id: 2,
          description: 'Optimize: Wrap slow calculation.',
          completed: false,
          regex: /useMemo\s*\(\s*\(\s*\)\s*=>/
        },
        {
          id: 3,
          description: 'Deps: Only recalculate on items/filter.',
          completed: false,
          regex: /\[\s*items\s*,\s*filter\s*\]/
        }
      ],
      files: [
        {
          name: 'SlowList.jsx',
          language: 'javascript',
          content: `import { useState, useMemo } from 'react';

function expensiveFilter(items, filter) {
    console.log("Calculating...");
    // Simulate slowness
    const start = performance.now();
    while (performance.now() - start < 100) {} 
    
    return items.filter(i => i.includes(filter));
}

export default function App() {
    const [items] = useState(['Apple', 'Banana', 'Cherry', 'Date']);
    const [filter, setFilter] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // Task 2: This runs even when I toggle Dark Mode! Fix it.
    const visibleItems = expensiveFilter(items, filter);

    return (
        <div style={{ background: darkMode ? '#333' : '#fff' }}>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <button onClick={() => setDarkMode(d => !d)}>Toggle Theme</button>
            <ul>
                {visibleItems.map(i => <li key={i}>{i}</li>)}
            </ul>
        </div>
    );
}
`
        }
      ]
    },
    {
      id: 'react-13-lesson-4',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 4: Lazy Loading Routes',
      duration: '25 min',
      content: `
# Lab 4: Lazy Loading Routes

Split your app into chunks.
Load the "Admin" page only if the user navigates there.

## The Mission
1.  **Import**: \`lazy\` and \`Suspense\`.
2.  **Define**: \`const Admin = lazy(() => import('./Admin'))\`.
3.  **Wrap**: Wrap Routes in \`Suspense\` with a fallback.

## Default Export
Lazy only works with modules that have a \`default\` export.
            `,
      tasks: [
        {
          id: 1,
          description: 'Lazy: Import component dynamically.',
          completed: false,
          regex: /const\s+Admin\s*=\s*lazy\s*\(\s*\(\s*\)\s*=>\s*import/
        },
        {
          id: 2,
          description: 'Suspense: Wrap routes.',
          completed: false,
          regex: /<Suspense\s+fallback/
        },
        {
          id: 3,
          description: 'Routes: Use the lazy component.',
          completed: false,
          regex: /element\s*=\s*{\s*<Admin\s*\/>\s*}/
        }
      ],
      files: [
        {
          name: 'LazyApp.jsx',
          language: 'javascript',
          content: `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Task 1: Lazy Import
// import Admin from './Admin'; <-- Remove this

function Home() { return <h1>Home</h1>; }

export default function App() {
    return (
        <BrowserRouter>
            {/* Task 2: Suspense Wrapper */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Task 3 */}
                <Route path="/admin" element={null} /> 
            </Routes>
        </BrowserRouter>
    );
}
`
        }
      ]
    },

    // PART 3: ASSESSMENT (QUIZ)
    {
      id: 'react-13-quiz',
      type: CONTENT_TYPES.QUIZ,
      title: 'Performance Quiz',
      duration: '10 min',
      questions: [
        {
          id: 'q1',
          question: 'What triggers a React component to re-render by default?',
          options: [
            'Only when its props change',
            'When its parent re-renders, or its state/context changes',
            'Every 16ms',
            'When the DOM updates'
          ],
          correctIndex: 1,
          explanation: 'A re-render cascade starts at the parent and goes down, unless stopped by React.memo.'
        },
        {
          id: 'q2',
          question: 'Why might React.memo FAIL to stop a re-render?',
          options: [
            'It is broken',
            'Because a prop is an object/array/function created fresh in the parent',
            'Because the component has state',
            'Because it only works on Class components'
          ],
          correctIndex: 1,
          explanation: 'Shallow comparison sees `{ a: 1 } !== { a: 1 }` because they are different references in memory.'
        },
        {
          id: 'q3',
          question: 'When should you use useMemo?',
          options: [
            'For every variable',
            'To memoize JSX elements',
            'For expensive calculations or referential stability of dependency arrays',
            'To cache network requests'
          ],
          correctIndex: 2,
          explanation: 'Overusing useMemo adds overhead. Save it for heavy math or objects passed to useEffect/memoized children.'
        },
        {
          id: 'q4',
          question: 'What is the "fallback" prop in Suspense used for?',
          options: [
            'To show an error message',
            'To show a loading indicator while code is downloading',
            'To redirect the user',
            'To retry the download'
          ],
          correctIndex: 1,
          explanation: 'It renders immediately while the Promise (lazy import) is pending.'
        },
        {
          id: 'q5',
          question: ' Does useCallback prevent the function from being recreated?',
          options: [
            'Yes, completely',
            'No, the function is created but discarded if deps match; it mostly preserves the REFERENCE for others',
            'Yes, but only in production',
            'It uses a global variable'
          ],
          correctIndex: 1,
          explanation: 'The arrow function `() => ...` is still created in JS runtime every render, but `useCallback` returns the cached version if deps match, keeping the reference stable.'
        }
      ]
    }
  ]
};
