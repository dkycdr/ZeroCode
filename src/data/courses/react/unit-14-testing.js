import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit14Testing = {
  id: 'react-unit-14',
  title: 'Testing - Sleep Better at Night',
  description: 'Stop fearing "deploy Friday". Master Vitest and React Testing Library to write tests that resemble actual user behavior.',
  items: [
    // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
    {
      id: 'react-14-1',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Vitest & RTL Fundamentals 🧪',
      duration: '20 min read',
      content: `
# Deep Dive: Vitest & RTL Fundamentals 🧪

## 1. The Tools
*   **Vitest**: The Test Runner (replaces Jest). It is blazing fast because it uses Vite's setup.
*   **React Testing Library (RTL)**: The utility to render components and query the DOM.
*   **jsdom**: A simulated browser environment in Node.js.

## 2. The Philosophy
"The more your tests resemble the way your software is used, the more confidence they can give you." - Kent C. Dodds.

**Don't test**: \`component.state.count === 1\` (Implemenation Detail)
**Do test**: \`screen.getByText('Count: 1')\` (User visible output)

## 3. The Anatomy of a Test
\`\`\`javascript
test('Button clicks', async () => {
  // 1. Arrange (Render)
  render(<Button />);
  
  // 2. Act (Interaction)
  const btn = screen.getByRole('button');
  await userEvent.click(btn);
  
  // 3. Assert (Expectation)
  expect(btn).toHaveTextContent('Clicked');
});
\`\`\`
            `
    },
    {
      id: 'react-14-2',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Queries & Priority 🔍',
      duration: '20 min read',
      content: `
# Deep Dive: Queries & Priority 🔍

## 1. getBy.. vs queryBy.. vs findBy..
*   **getBy**: Fails immediately if not found. Use for things that *should* be there.
*   **queryBy**: Returns null if not found. Use for verifying something is *NOT* there.
*   **findBy**: Returns a Promise. Use for async elements (waiting for API).

## 2. Priority of Queries
Always prefer Accessbility-friendly queries:
1.  **getByRole**: \`('button', { name: /submit/i })\` - Best one.
2.  **getByLabelText**: Good for forms.
3.  **getByPlaceholderText**: Good if no label.
4.  **getByText**: Generic.
5.  **getByTestId**: Last resort (\`data-testid="foo"\`).

## 3. Debugging
Use \`screen.debug()\` to print the current DOM state to the console.
            `
    },
    {
      id: 'react-14-3',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: User Events 🖱️',
      duration: '15 min read',
      content: `
# Deep Dive: User Events 🖱️

## 1. fireEvent vs userEvent
*   \`fireEvent.click(elem)\`: Dispatches a DOM event. Low level.
*   \`userEvent.click(elem)\`: Simulates a REAL user. Firing mouseover, mousedown, focus, mouseup, click.

**Always use userEvent**.

## 2. Setup
\`\`\`javascript
const user = userEvent.setup();
await user.type(input, 'Hello');
\`\`\`

## 3. Async Interactions
All userEvent methods are async. Always \`await\` them.
            `
    },
    {
      id: 'react-14-4',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Mocking & Spying 🕵️',
      duration: '25 min read',
      content: `
# Deep Dive: Mocking & Spying 🕵️

## 1. Why Mock?
You don't want to hit real APIs, pay for credit cards, or navigate browser URLs during tests.

## 2. Spying on Functions
\`const handleClick = vi.fn()\`
Pass it to component: \`<Button onClick={handleClick} />\`
Assert: \`expect(handleClick).toHaveBeenCalledTimes(1)\`

## 3. Mocking Modules
\`vi.mock('axios')\`
Intercepts imports of 'axios' and replaces them with a mock function, so you can control the return value \`axios.get.mockResolvedValue({})\`.
            `
    },

    // PART 2: PRACTICAL LABS (LESSONS)
    {
      id: 'react-14-lesson-1',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 1: Your First Test',
      duration: '20 min',
      content: `
# Lab 1: Your First Test

Write a test to verify a component renders the correct title.

## The Mission
1.  **Import**: \`render\` and \`screen\`.
2.  **Render**: The \`Welcome\` Component.
3.  **Assert**: Check if "Hello React" is in the document.

## Keywords
\`toBeInTheDocument()\` is your bread and butter matcher.
            `,
      tasks: [
        {
          id: 1,
          description: 'Render: the component.',
          completed: false,
          regex: /render\s*\(\s*<Welcome\s*\/>\s*\)/
        },
        {
          id: 2,
          description: 'Query: getByText.',
          completed: false,
          regex: /screen\.getByText\s*\(\s*['"]Hello React['"]\s*\)/
        },
        {
          id: 3,
          description: 'Assert: toBeInTheDocument.',
          completed: false,
          regex: /expect\s*\(.*\)\.toBeInTheDocument\s*\(\s*\)/
        }
      ],
      files: [
        {
          name: 'Welcome.test.jsx',
          language: 'javascript',
          content: `import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders welcome message', () => {
    // Task 1: Render
    
    // Task 2 & 3: Find and Assert
    
});
`
        }
      ]
    },
    {
      id: 'react-14-lesson-2',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 2: Testing Interaction',
      duration: '30 min',
      content: `
# Lab 2: Testing Interaction

Test a Counter component.

## The Mission
1.  **Render**: The Counter.
2.  **Verify**: Starts at 0.
3.  **Act**: Click the "Increment" button using \`userEvent\`.
4.  **Verify**: Count becomes 1.

## Setup
Don't forget \`const user = userEvent.setup()\`.
            `,
      tasks: [
        {
          id: 1,
          description: 'Setup: userEvent.',
          completed: false,
          regex: /const\s+user\s*=\s*userEvent\.setup\s*\(\s*\)/
        },
        {
          id: 2,
          description: 'Act: Click button.',
          completed: false,
          regex: /await\s+user\.click\s*\(/
        },
        {
          id: 3,
          description: 'Assert: New count 1.',
          completed: false,
          regex: /haveTextContent\s*\(\s*['"]1['"]\s*\)/
        }
      ],
      files: [
        {
          name: 'Counter.test.jsx',
          language: 'javascript',
          content: `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments counter', async () => {
    // Task 1: Setup User
    
    render(<Counter />);
    
    const btn = screen.getByRole('button', { name: /increment/i });
    const display = screen.getByTestId('count-display');
    
    // Task 2: Click
    
    // Task 3: Expect 1
    expect(display).toHaveTextContent('0'); // Initial state
});
`
        }
      ]
    },
    {
      id: 'react-14-lesson-3',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 3: Async & API',
      duration: '35 min',
      content: `
# Lab 3: Async & API

Test a component that fetches a user name.
It initially shows "Loading...", then "John Doe".

## The Mission
1.  **Find**: Use \`screen.getByText(/loading/i)\` to sync.
2.  **Await**: Use \`await screen.findByText('John Doe')\` to wait for the update.
3.  **Assert**: Check if name is present.

## Note
We assume MSW or a fetch mock is already set up globally in setupTests.js.
            `,
      tasks: [
        {
          id: 1,
          description: 'Initial: Check loading.',
          completed: false,
          regex: /expect\s*\(.*getByText\s*\(.*Loading.*\)\)\.toBeInTheDocument/
        },
        {
          id: 2,
          description: 'Async: findByText.',
          completed: false,
          regex: /await\s+screen\.findByText\s*\(\s*['"]John Doe['"]\s*\)/
        },
        {
          id: 3,
          description: 'Assert: Final state.',
          completed: false,
          regex: /expect\s*\(.*John Doe.*\)\.toBeInTheDocument/
        }
      ],
      files: [
        {
          name: 'User.test.jsx',
          language: 'javascript',
          content: `import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('loads and displays user', async () => {
    render(<UserProfile />);
    
    // Task 1: Check Loading
    
    // Task 2: Wait for Data
    const nameData = null; // Replace
    
    // Task 3: Assert
});
`
        }
      ]
    },
    {
      id: 'react-14-lesson-4',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 4: Accessibility Testing',
      duration: '15 min',
      content: `
# Lab 4: Accessibility Testing

Ensure your form is accessible.

## The Mission
1.  **Query**: Use \`getByRole('textbox', { name: /email/i })\`.
2.  **Fail**: If the input does not have an associated label, this query fails.
3.  **Fix**: The test forces you to write semantic HTML.

## Query Priority
This proves why \`getByRole\` is superior to \`getByTestId\`.
            `,
      tasks: [
        {
          id: 1,
          description: 'Query: By Role and Name.',
          completed: false,
          regex: /getByRole\s*\(\s*['"]textbox['"]\s*,\s*{\s*name:\s*\/email\/i\s*}\s*\)/
        },
        {
          id: 2,
          description: 'Type: Enter data.',
          completed: false,
          regex: /await\s+user\.type\s*\(/
        },
        {
          id: 3,
          description: 'Assert: Value check.',
          completed: false,
          regex: /toHaveValue\s*\(\s*['"]test@example\.com['"]\s*\)/
        }
      ],
      files: [
        {
          name: 'Form.test.jsx',
          language: 'javascript',
          content: `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

test('input is accessible', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    
    // Task 1: Find by Role (Label text must match 'Email')
    const input = null; 
    
    // Task 2: Type email
    
    // Task 3: Verify value
    expect(input).toBeInTheDocument();
});
`
        }
      ]
    },

    // PART 3: ASSESSMENT (QUIZ)
    {
      id: 'react-14-quiz',
      type: CONTENT_TYPES.QUIZ,
      title: 'Testing Quiz',
      duration: '10 min',
      questions: [
        {
          id: 'q1',
          question: 'What is the recommended query to find a button?',
          options: [
            'getByRole(\'button\')',
            'document.querySelector(\'button\')',
            'getByTestId(\'btn\')',
            'getByClassName(\'btn\')'
          ],
          correctIndex: 0,
          explanation: 'getByRole matches how screen readers see the element and is resilient to class/structure changes.'
        },
        {
          id: 'q2',
          question: 'Which query type returns a Promise (is Async)?',
          options: [
            'getBy...',
            'queryBy...',
            'findBy...',
            'getAllBy...'
          ],
          correctIndex: 2,
          explanation: 'findBy queries accept a timeout and wait for the element to appear, useful for API loading states.'
        },
        {
          id: 'q3',
          question: 'Why should we prefer userEvent over fireEvent?',
          options: [
            'It is faster',
            'It simulates full user interactions (focus, keydown, click) rather than just dispatching a DOM event',
            'It has fewer bugs',
            'It is built into React'
          ],
          correctIndex: 1,
          explanation: 'fireEvent.click might miss things like the element needing focus first. userEvent is more realistic.'
        },
        {
          id: 'q4',
          question: 'When should you use queryByText?',
          options: [
            'Always',
            'When you want to assert that an element is NOT present',
            'When testing async code',
            'For buttons'
          ],
          correctIndex: 1,
          explanation: 'Because QueryBy returns null instead of throwing an error, it is perfect for `expect(...).not.toBeInTheDocument()`.'
        },
        {
          id: 'q5',
          question: 'What does render() return?',
          options: [
            'The HTML string',
            'A DOM node',
            'An object containing query methods (and helpful utilities like debug, unmount)',
            'Nothing'
          ],
          correctIndex: 2,
          explanation: 'It returns an object with destructuring access to queries, although importing `screen` is often preferred for queries.'
        }
      ]
    }
  ]
};
