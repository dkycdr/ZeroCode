import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit11Router = {
  id: 'react-unit-11',
  title: 'React Router - The Navigation Superhighway',
  description: 'Single Page Apps need URLs too. Master React Router v6+ to handle navigation, specialized layouts, and robust route protection.',
  items: [
    // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
    {
      id: 'react-11-1',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Single Page Apps (SPA) 🗺️',
      duration: '20 min read',
      content: `
# Deep Dive: Single Page Apps (SPA) 🗺️

## 1. The Illusion
In a traditional website, clicking a link fetches a whole new HTML file (screen flashes white).
In an SPA, clicking a link **prevents** the browser request.
Instead, JavaScript (React Router) swaps the component on the screen and pushes a new entry to the browser History.
It *feels* like a new page, but it's just the DOM updating.

## 2. Server vs Client Routing
*   **Server Routing**: URL \`/about\` -> Server finds \`about.html\`.
*   **Client Routing**: URL \`/about\` -> Server serves \`index.html\` (again). React reads the URL and renders \`<About />\`.

## 3. The 404 Problem
If you deploy an SPA to Netlify/Vercel, refreshing \`/about\` might give a 404.
Why? Because the server looks for a real file.
**Solution**: Configure the server to redirect 404s to \`index.html\`, so React can handle the routing.
            `
    },
    {
      id: 'react-11-2',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Layouts & Outlets 🖼️',
      duration: '20 min read',
      content: `
# Deep Dive: Layouts & Outlets 🖼️

## 1. Shared UI
You usually want a Sidebar and Navbar to stay on screen while the main content changes.
Instead of copying them into every page, we use a **Layout Route**.

## 2. The Outlet Component
\`<Outlet />\` is a placeholder. It tells React Router: "Render the matching child route HERE."

\`\`\`jsx
function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Outlet /> {/* Child page goes here */}
      </main>
    </div>
  );
}
\`\`\`

## 3. Nested URL Structure
\`\`\`
/dashboard          -> DashboardLayout + Index
/dashboard/settings -> DashboardLayout + Settings
/dashboard/profile  -> DashboardLayout + Profile
\`\`\`
            `
    },
    {
      id: 'react-11-3',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Dynamic Routes & Params 🎣',
      duration: '25 min read',
      content: `
# Deep Dive: Dynamic Routes & Params 🎣

## 1. The Pattern
You can't write a route for every user (\`/user/1\`, \`/user/2\`).
You write a **Pattern**: \`/user/:userId\`.
The colon \`:\` tells React this part is dynamic.

## 2. useParams()
Inside the component, you grab the value:
\`const { userId } = useParams();\`
It is always a STRING. If you need a number, \`parseInt(userId)\`.

## 3. Search Params (Query Strings)
\`/search?q=react&sort=new\`
Use \`useSearchParams()\`. It acts like \`useState\`, but for the URL query string.
            `
    },
    {
      id: 'react-11-4',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Deep Dive: Protected Routes 🛡️',
      duration: '20 min read',
      content: `
# Deep Dive: Protected Routes 🛡️

## 1. The Wrapper Pattern
We can just wrap a route in a component that checks for auth conditions.
\`<ProtectedRoute><Dashboard /></ProtectedRoute>\`

## 2. The Logic
\`\`\`jsx
if (isLoading) return <Spinner />;
if (!user) return <Navigate to="/login" replace />;
return children;
\`\`\`

## 3. Redirecting
Using \`<Navigate />\` component allows us to declaratively redirect users.
The \`replace\` prop is important: it replaces the current history entry so the "Back" button doesn't take them back to the protected page (creating a loop).
            `
    },

    // PART 2: PRACTICAL LABS (LESSONS)
    {
      id: 'react-11-lesson-1',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 1: Basic Routing Setup',
      duration: '25 min',
      content: `
# Lab 1: Basic Routing Setup

Set up the router and 3 simple pages.

## The Mission
1.  **Wrap**: \`BrowserRouter\` around everything.
2.  **Define**: \`Routes\` container.
3.  **Map**: \`/\` -> Home, \`/about\` -> About.
4.  **Nav**: Create Links to switch pages.

## Remember
Using \`<a href>\` causes a hard refresh. Use \`<Link to>\` instead!
            `,
      tasks: [
        {
          id: 1,
          description: 'Import: Router components.',
          completed: false,
          regex: /import\s*{\s*[\s\S]*BrowserRouter/
        },
        {
          id: 2,
          description: 'Structure: Browser/Routes/Route.',
          completed: false,
          regex: /<BrowserRouter>.*<Routes>.*<Route/s
        },
        {
          id: 3,
          description: 'Nav: Use Link component.',
          completed: false,
          regex: /<Link\s+to\s*=\s*['"]\/['"]>|<Link\s+to\s*=\s*['"]\/about['"]>/
        }
      ],
      files: [
        {
          name: 'App.jsx',
          language: 'javascript',
          content: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

export default function App() {
    return (
        // Task 1, 2, 3: Setup Router and Nav
        <div>
            <nav>
                {/* Links go here */}
            </nav>

            {/* Routes go here */}
        </div>
    );
}
`
        }
      ]
    },
    {
      id: 'react-11-lesson-2',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 2: Dynamic User Profile',
      duration: '25 min',
      content: `
# Lab 2: Dynamic User Profile

Create a profile page that changes based on the URL ID.

## The Mission
1.  **Route**: Path \`/user/:id\`.
2.  **Hook**: \`useParams()\` to get the ID.
3.  **Display**: "Welcome User [ID]".

## URL Params
If you visit \`/user/alice\`, the params object will be \`{ id: 'alice' }\`.
            `,
      tasks: [
        {
          id: 1,
          description: 'Route: Define dynamic path.',
          completed: false,
          regex: /path\s*=\s*['"]\/user\/:id['"]/
        },
        {
          id: 2,
          description: 'Component: Extract using useParams.',
          completed: false,
          regex: /const\s*{\s*id\s*}\s*=\s*useParams\s*\(\s*\)/
        },
        {
          id: 3,
          description: 'Display: Show the ID.',
          completed: false,
          regex: /User:\s*{\s*id\s*}/
        }
      ],
      files: [
        {
          name: 'UserProfile.jsx',
          language: 'javascript',
          content: `import { Routes, Route, useParams } from 'react-router-dom';

function Profile() {
    // Task 2: Get ID
    const id = "placeholder";

    return <h1>User: {id}</h1>; // Task 3
}

export default function App() {
    return (
        <Routes>
            {/* Task 1: Dynamic Route */}
            
        </Routes>
    );
}
`
        }
      ]
    },
    {
      id: 'react-11-lesson-3',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 3: Shared Layout',
      duration: '30 min',
      content: `
# Lab 3: Shared Layout

Create a Dashboard with a persistent sidebar using Nested Routes.

## The Mission
1.  **Layout**: Component with \`<nav>\` and \`<Outlet />\`.
2.  **Parent Route**: Path \`/dashboard\` uses the Layout.
3.  **Child Routes**: \`stats\` and \`settings\`.

## The Hierarchy
Visiting \`/dashboard/stats\` should render:
\`Layout -> Outlet -> Stats\`
            `,
      tasks: [
        {
          id: 1,
          description: 'Layout: Render Outlet.',
          completed: false,
          regex: /<Outlet\s*\/>/
        },
        {
          id: 2,
          description: 'Routes: Nest children inside parent.',
          completed: false,
          regex: /<Route\s+path=['"]dashboard['"]\s+element\s*=\s*{\s*<Layout\s*\/>\s*}>\s*<Route/s
        },
        {
          id: 3,
          description: 'Child: Define stats path.',
          completed: false,
          regex: /path\s*=\s*['"]stats['"]/
        }
      ],
      files: [
        {
          name: 'Dashboard.jsx',
          language: 'javascript',
          content: `import { Routes, Route, Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ width: 200 }}>
                <Link to="stats">Stats</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <main style={{ flex: 1 }}>
                {/* Task 1: Outlet */}
                
            </main>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            {/* Task 2 & 3: Nested Routes */}
            
        </Routes>
    );
}
`
        }
      ]
    },
    {
      id: 'react-11-lesson-4',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab 4: The 404 Page',
      duration: '15 min',
      content: `
# Lab 4: The 404 Page

Handle invalid URLs gracefully.

## The Mission
1.  **Route**: Path \`*\` (asterisk).
2.  **Order**: Place it **LAST** in the Routes list (actually order doesn't matter in v6+, algorithm ranking handles it, but good habit).
3.  **Component**: Render a "Not Found" message.

## The Wildcard
\`*\` matches *anything* that hasn't been matched by a specific route yet.
            `,
      tasks: [
        {
          id: 1,
          description: 'Route: Allow wildcard path.',
          completed: false,
          regex: /path\s*=\s*['"]\*['"]/
        },
        {
          id: 2,
          description: 'Nav: Link back to home.',
          completed: false,
          regex: /<Link\s+to\s*=\s*['"]\/['"]\s*>/
        },
        {
          id: 3,
          description: 'Message: 404.',
          completed: false,
          regex: /<h1>.*404.*<\/h1>/
        }
      ],
      files: [
        {
          name: 'NotFound.jsx',
          language: 'javascript',
          content: `import { Routes, Route, Link } from 'react-router-dom';

function Home() { return <h1>Home</h1>; }

function NotFound() {
    return (
        <div>
            {/* Task 3 */}
            <h1>404 Not Found</h1>
            {/* Task 2 */}
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Task 1: Catch-all route */}
            
        </Routes>
    );
}
`
        }
      ]
    },

    // PART 3: ASSESSMENT (QUIZ)
    {
      id: 'react-11-quiz',
      type: CONTENT_TYPES.QUIZ,
      title: 'React Router Quiz',
      duration: '10 min',
      questions: [
        {
          id: 'q1',
          question: 'What is the main difference between <Link> and <a href>?',
          options: [
            '<Link> uses JavaScript to change the URL without reloading the page',
            '<Link> is faster because it prefetches data',
            '<Link> only works for external websites',
            '<Link> has better SEO'
          ],
          correctIndex: 0,
          explanation: 'The anchor tag causes a browser refresh (destroying React state). <Link> uses the History API to swap the view seamlessly.'
        },
        {
          id: 'q2',
          question: 'What does the <Outlet /> component do?',
          options: [
            'It renders nothing',
            'It sends data to the server',
            'It renders the matching child route component within a parent layout',
            'It handles 404 errors'
          ],
          correctIndex: 2,
          explanation: 'Outlet is the placeholder where nested routes appear inside their parent route element.'
        },
        {
          id: 'q3',
          question: 'How do you define a dynamic route segment?',
          options: [
            '/users/{id}',
            '/users/$id',
            '/users/:id',
            '/users/*'
          ],
          correctIndex: 2,
          explanation: 'The colon syntax (`:userId`) denotes a parameter that will be parsed by `useParams`.'
        },
        {
          id: 'q4',
          question: 'What is the "index" prop on a <Route> used for?',
          options: [
            'To set the z-index',
            'To define the default child route to render when at the parent path',
            'To list the route in a sitemap',
            'To speed up rendering'
          ],
          correctIndex: 1,
          explanation: 'An index route renders when the URL matches the parent exactly, but has no additional path segments.'
        },
        {
          id: 'q5',
          question: 'Which hook would you use to change the page programmatically (e.g., after login)?',
          options: [
            'useHistory',
            'useNavigate',
            'useRedirect',
            'useGo'
          ],
          correctIndex: 1,
          explanation: 'In React Router v6, `useNavigate` replaced `useHistory`. You call `navigate("/path")`.'
        }
      ]
    }
  ]
};
