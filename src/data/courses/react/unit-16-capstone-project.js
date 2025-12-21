import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit16Capstone = {
    id: 'react-unit-16',
    title: 'Capstone Project - The Final Exam',
    description: 'Combine everything you have learned: Components, Hooks, Context, Router, Forms, and Patterns to build a production-grade E-Commerce Dashboard.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-16-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Briefing: The E-Commerce Dashboard 💼',
            duration: '15 min read',
            content: `
# Briefing: The E-Commerce Dashboard 💼

## 1. The Requirement
You have been hired to build the frontend for a new store, "ReactMart".
The client needs an Admin Dashboard where they can:
1.  **View Products** (Data Fetching, Lists).
2.  **Add/Edit Products** (Forms, Validation).
3.  **Manage Settings** (Context, Global Settings).
4.  **Navigate** seamlessly (Router).

## 2. Technical Stack
*   **Routing**: Nested routes for \`/dashboard/products\` and \`/dashboard/settings\`.
*   **State**: Global \`AuthContext\` for user session.
*   **Patterns**: Component Composition for the Layout.
*   **Performance**: Lazy load the Settings page.

## 3. Success Criteria
*   Clean, modular code folder structure.
*   No prop drilling > 2 levels.
*   Handling loading and error states gracefully.
            `
        },
        {
            id: 'react-16-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: State Architecture 🏗️',
            duration: '20 min read',
            content: `
# Deep Dive: State Architecture 🏗️

## 1. Global State (Context)
*   **User**: Who is logged in? (AuthContext)
*   **Theme**: Dark/Light mode? (ThemeContext)

## 2. Server State (Cache)
*   **Products List**: Fetched from API. Should be kept in a \`useProducts\` hook or React Query.
*   **Orders**: Another async resource.

## 3. Local State (useState)
*   **Form Inputs**: Creating a product.
*   **Modal Open/Close**: UI state.

## 4. Lifted State
*   **Search Filter**: Needs to be shared between the SearchBar and the ProductList. Lift it to the common parent (ProductPage).
            `
        },
        {
            id: 'react-16-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Folder Structure 🗂️',
            duration: '15 min read',
            content: `
# Deep Dive: Folder Structure 🗂️

## Recommended Structure
\`\`\`
src/
  features/
    auth/           # Login logic
    products/       # Product logic
      components/
      hooks/
      context/
  components/       # Shared UI (Button, Modal)
  layouts/          # DashboardLayout
  pages/            # Next.js style pages
  App.jsx           # Routes definition
\`\`\`

## Feature-Driven
Group files by **feature**, not just by file type.
Don't put all components in one giant \`components/\` folder.
            `
        },
        {
            id: 'react-16-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Production Checklist ✅',
            duration: '15 min read',
            content: `
# Deep Dive: Production Checklist ✅

## 1. Error Handling
Did you wrap features in Error Boundaries?
Do failed API calls show a toast notification?

## 2. Loading States
Avoiding "layout shift" (jumping content).
Use Skeletons or Spinners while data loads.

## 3. Optimization
Is the bundle huge? Lazy load routes.
Are specific lists lagging? Use \`memo\` or \`useMemo\`.

## 4. Accessibility
Basic keyboard navigation.
Alt tags on images.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-16-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Global Context Setup',
            duration: '30 min',
            content: `
# Lab 1: Global Context Setup

Initialize the \`AuthContext\` and \`ThemeContext\`.

## The Mission
1.  **Auth**: User object (name, role).
2.  **Theme**: 'light' or 'dark'.
3.  **Provide**: Wrap the App.
4.  **Hook**: Create custom hook \`useAuth\`.

## Architecture
This foundation will power the Protected Routes in later steps.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Context: Create AuthContext.',
                    completed: false,
                    regex: /createContext\s*\(/
                },
                {
                    id: 2,
                    description: 'Provider: Wrap children.',
                    completed: false,
                    regex: /AuthContext\.Provider/
                },
                {
                    id: 3,
                    description: 'Hook: Export useAuth.',
                    completed: false,
                    regex: /export\s+function\s+useAuth/
                }
            ],
            files: [
                {
                    name: 'AuthContext.jsx',
                    language: 'javascript',
                    content: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Task 1: State
    const [user, setUser] = useState(null);

    const login = (name) => setUser({ name, role: 'admin' });
    const logout = () => setUser(null);

    // Task 2: Provider
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Task 3: Hook
export function useAuth() {
    return useContext(AuthContext);
}
`
                }
            ]
        },
        {
            id: 'react-16-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Dashboard Layout',
            duration: '35 min',
            content: `
# Lab 2: Dashboard Layout

Create the Shell using Nested Routes.

## The Mission
1.  **Layout**: Sidebar (Nav) + Main Content (Outlet).
2.  **Protection**: Redirect to \`/login\` if no user.
3.  **Routes**:
    *   \`/dashboard\` -> Index (Stats)
    *   \`/dashboard/products\` -> Product List

## Redirect Logic
If \`!user\`, return \`<Navigate to="/login" />\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Protect: Check user.',
                    completed: false,
                    regex: /if\s*\(\s*!user\s*\)/
                },
                {
                    id: 2,
                    description: 'Redirect: Navigate component.',
                    completed: false,
                    regex: /<Navigate\s+to\s*=\s*['"]\/login['"]/
                },
                {
                    id: 3,
                    description: 'Outlet: Render child routes.',
                    completed: false,
                    regex: /<Outlet\s*\/>/
                }
            ],
            files: [
                {
                    name: 'DashboardLayout.jsx',
                    language: 'javascript',
                    content: `import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function DashboardLayout() {
    const { user } = useAuth();

    // Task 1 & 2: Protection
    
    return (
        <div className="layout">
            <aside>
                <Link to="/previous-orders">Orders</Link>
                <Link to="/products">Products</Link>
            </aside>
            <main>
                {/* Task 3 */}
                
            </main>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-16-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Product Management',
            duration: '45 min',
            content: `
# Lab 3: Product Management

Build a Product List with Optimistic Deletion.

## The Mission
1.  **Fetch**: Load products on mount.
2.  **Delete**: Button to delete product.
3.  **Optimistic**: Remove from UI immediately.
4.  **Error**: Restore if API fails.

## Real World
Users hate waiting for the spinner just to delete an item. Make it snappy.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Effect: Fetch data.',
                    completed: false,
                    regex: /useEffect/
                },
                {
                    id: 2,
                    description: 'Optimistic: Filter local state.',
                    completed: false,
                    regex: /setProducts\s*\(\s*p\s*=>\s*p\.filter/
                },
                {
                    id: 3,
                    description: 'Rollback: Restore on error.',
                    completed: false,
                    regex: /catch.*setProducts\s*\(\s*previous/s
                }
            ],
            files: [
                {
                    name: 'ProductList.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    // Task 1: Fetch
    
    const handleDelete = async (id) => {
        const previous = products;
        
        // Task 2: Optimistic Update
        
        try {
            await deleteProductAPI(id);
        } catch (err) {
            // Task 3: Rollback
            alert("Failed to delete");
            
        }
    };

    return (
        <ul>
            {products.map(p => (
                <li key={p.id}>
                    {p.name}
                    <button onClick={() => handleDelete(p.id)}>X</button>
                </li>
            ))}
        </ul>
    );
}

// Mock API
const deleteProductAPI = () => new Promise(r => setTimeout(r, 500));
`
                }
            ]
        },
        {
            id: 'react-16-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Final Assembly',
            duration: '30 min',
            content: `
# Lab 4: The Final Assembly

Wire up the Routes in App.jsx.

## The Mission
1.  **Providers**: Wrap with AuthProvider.
2.  **Router**: BrowserRouter.
3.  **Routes**: Login, Dashboard (Nested).
4.  **404**: Catch all.

## Structure
\`\`\`
/ (Login)
/dashboard
  / (Stats)
  /products
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Wrap: Providers.',
                    completed: false,
                    regex: /<AuthProvider>/
                },
                {
                    id: 2,
                    description: 'Nested: Dashboard Route.',
                    completed: false,
                    regex: /<Route\s*element\s*=\s*{\s*<DashboardLayout/
                },
                {
                    id: 3,
                    description: 'Index: Default child.',
                    completed: false,
                    regex: /<Route\s*index\s*element/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import DashboardLayout from './DashboardLayout';
import ProductList from './ProductList';
import Login from './Login';

export default function App() {
    return (
        // Task 1
        <BrowserRouter>
             <Routes>
                <Route path="/login" element={<Login />} />
                
                {/* Task 2: Protected Layout */}
                <Route path="/dashboard" element={null}>
                    {/* Task 3: Index */}
                    <Route path="products" element={<ProductList />} />
                </Route>
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
            id: 'react-16-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Final Exam',
            duration: '15 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Where should global user authentication state live?',
                    options: [
                        'In a global variable',
                        'In localStorage only',
                        'In a Context Provider wrapping the App',
                        'In every component'
                    ],
                    correctIndex: 2,
                    explanation: 'Context is the standard way to broadcast global data like Auth/Theme to the components that need it.'
                },
                {
                    id: 'q2',
                    question: 'How do you protect a route from unauthenticated users?',
                    options: [
                        'Delete the route',
                        'Render a component that checks the user and returns <Navigate /> if falsy',
                        'Use CSS to hide it',
                        'Ask the user nicely'
                    ],
                    correctIndex: 1,
                    explanation: 'The "Protected Route" wrapper pattern allows you to centrally manage access control.'
                },
                {
                    id: 'q3',
                    question: 'What is "Optimistic UI"?',
                    options: [
                        'Hoping the code works',
                        'Updating the UI assuming success before the server responds',
                        'Using bright colors',
                        'Writing clean code'
                    ],
                    correctIndex: 1,
                    explanation: 'It removes perceived latency, making the app feel instant.'
                },
                {
                    id: 'q4',
                    question: 'If you have a complex dashboard with many pages, what performance trick helps initial load?',
                    options: [
                        'Remove all CSS',
                        'Code Splitting (Lazy Loading) the routes',
                        'Use more JPGs',
                        'Put everything in one file'
                    ],
                    correctIndex: 1,
                    explanation: '`const Page = lazy(() => import("./Page"))` ensures the user only downloads the code for the page they are viewing.'
                },
                {
                    id: 'q5',
                    question: 'Congratulations! You reached the end.',
                    options: [
                        'I am a React Master',
                        'I am a React Beginner',
                        'I prefer Angular',
                        'I prefer Vue'
                    ],
                    correctIndex: 0,
                    explanation: 'You have completed the Elite React Curriculum. Go build something great!'
                }
            ]
        }
    ]
};
