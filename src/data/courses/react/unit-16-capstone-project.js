
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
            `
        },

        // LABS
        {
            id: 'react-16-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Global Context Setup',
            duration: '30 min',
            content: `
# Lab 1: Global Context Setup

Initialize the \`AuthContext\` and \`ThemeContext\`.
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
    // Task 1: Initialize User State (null by default)
    const [user, setUser] = useState(null);

    // Mock Login Function
    const login = (name) => setUser({ name, role: 'admin' });
    const logout = () => setUser(null);

    // Task 2: Return Provider
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
             {/* Render children here */}
        </AuthContext.Provider>
    );
}

// Task 3: Create useAuth Hook
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

    // Task 1: Check if user is logged in
    // Task 2: If not, redirect to /login
    
    return (
        <div className="layout">
            <aside>
                <nav>
                    <Link to="/dashboard">Home</Link>
                    <Link to="/dashboard/products">Products</Link>
                </nav>
            </aside>
            <main>
                {/* Task 3: Render Outlet here */}
                
            </main>
        </div>
    );
}
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
        // Task 1: Wrap with AuthProvider
        <BrowserRouter>
             <Routes>
                <Route path="/login" element={<Login />} />
                
                {/* Task 2: Nested Dashboard Route */}
                {/* Task 3: Index Route for Products */}
                
             </Routes>
        </BrowserRouter>
    );
}
`
                },
                {
                    name: 'Login.jsx',
                    language: 'javascript',
                    content: `import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login("Test User");
        navigate("/dashboard");
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <button onClick={handleLogin}>Log In as Guest</button>
        </div>
    );
}`
                },
                {
                    name: 'AuthContext.jsx',
                    language: 'javascript',
                    content: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = (name) => setUser({ name, role: 'admin' });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
             {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}`
                },
                {
                    name: 'DashboardLayout.jsx',
                    language: 'javascript',
                    content: `import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function DashboardLayout() {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" />;
    return (
        <div className="layout">
            <nav><Link to="/dashboard/products">Products</Link></nav>
            <main><Outlet /></main>
        </div>
    );
}`
                },
                {
                    name: 'ProductList.jsx',
                    language: 'javascript',
                    content: `export default function ProductList() { return <h2>Product List</h2>; }`
                }
            ]
        }
    ]
};
