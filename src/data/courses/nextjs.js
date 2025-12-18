// Next.js - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const nextjsCourse = {
    id: 'nextjs',
    title: 'Next.js',
    description: 'Build full-stack React applications with Next.js - SSR, SSG, and App Router.',
    
    units: [
        {
            id: 'nextjs-unit-1',
            title: 'Next.js Fundamentals',
            description: 'Understand Next.js and its benefits over plain React',
            items: [
                {
                    id: 'nextjs-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is Next.js?',
                    duration: '10 min read',
                    content: `
# What is Next.js?

## React Framework for Production

**Next.js** is a React framework that provides:
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- File-based routing
- API routes
- Built-in optimizations

## Why Next.js?

| Feature | React | Next.js |
|---------|-------|---------|
| Routing | Manual (React Router) | Built-in (file-based) |
| SSR | Manual setup | Built-in |
| SEO | Poor (client-side) | Excellent (SSR/SSG) |
| API Routes | Need separate server | Built-in |
| Image Optimization | Manual | Built-in |
| Code Splitting | Manual | Automatic |

## Rendering Methods

### Client-Side Rendering (CSR)
- Browser downloads JS, renders page
- Poor SEO, slower initial load

### Server-Side Rendering (SSR)
- Server renders HTML, sends to browser
- Great SEO, fast initial load

### Static Site Generation (SSG)
- Pages generated at build time
- Fastest, great for static content

### Incremental Static Regeneration (ISR)
- Static pages that update periodically
- Best of both worlds

## Who Uses Next.js?

Netflix, TikTok, Twitch, Nike, Notion, and many more!
                    `
                },
                {
                    id: 'nextjs-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Project Setup & Structure',
                    duration: '20 min',
                    content: `
# Next.js Project Setup

## Create Next.js App

\`\`\`bash
npx create-next-app@latest my-app
# Options:
# - TypeScript? Yes
# - ESLint? Yes
# - Tailwind CSS? Yes
# - src/ directory? Yes
# - App Router? Yes
\`\`\`

## Project Structure (App Router)

\`\`\`
my-app/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page (/)
│   ├── globals.css     # Global styles
│   ├── about/
│   │   └── page.tsx    # About page (/about)
│   └── api/
│       └── hello/
│           └── route.ts # API route (/api/hello)
├── components/
├── public/             # Static files
├── next.config.js
└── package.json
\`\`\`

## File-Based Routing

| File | Route |
|------|-------|
| \`app/page.tsx\` | \`/\` |
| \`app/about/page.tsx\` | \`/about\` |
| \`app/blog/[slug]/page.tsx\` | \`/blog/:slug\` |
| \`app/shop/[...slug]/page.tsx\` | \`/shop/*\` |

## Basic Page

\`\`\`tsx
// app/page.tsx
export default function Home() {
    return (
        <main>
            <h1>Welcome to Next.js!</h1>
        </main>
    );
}
\`\`\`

## Layout

\`\`\`tsx
// app/layout.tsx
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
\`\`\`

---

## Your Mission
Create a Next.js page structure.
                    `,
                    tasks: [
                        { id: 1, description: 'Create home page: export default function Home() { return <h1>Home</h1> } (app/page.tsx)', completed: false, regex: /export\s+default\s+function\s+Home/ },
                        { id: 2, description: 'Create about page: export default function About() { ... } (app/about/page.tsx)', completed: false, regex: /export\s+default\s+function\s+About/ },
                        { id: 3, description: 'Create layout with children prop (app/layout.tsx)', completed: false, regex: /children\s*:\s*React\.ReactNode/ },
                        { id: 4, description: 'Add metadata export: export const metadata = { title: "My App" }', completed: false, regex: /export\s+const\s+metadata\s*=/ }
                    ],
                    files: [
                        { name: 'app/page.tsx', language: 'typescript', content: `// Home Page

export default function Home() {
    return (
        <main>
            {/* Add your content */}
        </main>
    );
}
` },
                        { name: 'app/about/page.tsx', language: 'typescript', content: `// About Page

export default function About() {
    return (
        <main>
            {/* Add about content */}
        </main>
    );
}
` },
                        { name: 'app/layout.tsx', language: 'typescript', content: `// Root Layout

export const metadata = {
    title: 'My Next.js App',
    description: 'Built with Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
` }
                    ]
                },
                {
                    id: 'nextjs-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Next.js Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the main benefit of Next.js over plain React?',
                            options: ['Faster development', 'Built-in SSR/SSG for better SEO', 'Smaller bundle size', 'More components'],
                            correctIndex: 1,
                            explanation: 'Next.js provides built-in Server-Side Rendering and Static Site Generation, which greatly improves SEO and initial load performance.'
                        },
                        {
                            id: 'q2',
                            question: 'How does routing work in Next.js App Router?',
                            options: ['React Router', 'File-based routing', 'Manual configuration', 'URL parameters only'],
                            correctIndex: 1,
                            explanation: 'Next.js uses file-based routing where the file structure in the app/ directory determines the routes.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'nextjs-unit-2',
            title: 'Data Fetching',
            description: 'Learn different data fetching strategies in Next.js',
            items: [
                {
                    id: 'nextjs-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Server Components & Data Fetching',
                    duration: '25 min',
                    content: `
# Data Fetching in Next.js

## Server Components (Default)

In App Router, components are Server Components by default:

\`\`\`tsx
// app/users/page.tsx - Server Component
async function getUsers() {
    const res = await fetch('https://api.example.com/users');
    return res.json();
}

export default async function UsersPage() {
    const users = await getUsers();
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
\`\`\`

## Caching & Revalidation

\`\`\`tsx
// Cache forever (default)
fetch('https://api.example.com/data');

// Revalidate every 60 seconds
fetch('https://api.example.com/data', {
    next: { revalidate: 60 }
});

// No cache (always fresh)
fetch('https://api.example.com/data', {
    cache: 'no-store'
});
\`\`\`

## Static vs Dynamic

\`\`\`tsx
// Static (generated at build time)
export default async function Page() {
    const data = await fetch('https://api.example.com/static');
    return <div>{data}</div>;
}

// Dynamic (generated on each request)
export const dynamic = 'force-dynamic';

export default async function Page() {
    const data = await fetch('https://api.example.com/dynamic', {
        cache: 'no-store'
    });
    return <div>{data}</div>;
}
\`\`\`

## Loading & Error States

\`\`\`tsx
// app/users/loading.tsx
export default function Loading() {
    return <div>Loading...</div>;
}

// app/users/error.tsx
'use client';
export default function Error({ error, reset }) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
\`\`\`

---

## Your Mission
Fetch and display data in a Next.js page.
                    `,
                    tasks: [
                        { id: 1, description: 'Create async function to fetch data: async function getData() { ... } (line 3)', completed: false, regex: /async\s+function\s+getData\s*\(\s*\)/ },
                        { id: 2, description: 'Use fetch with await: const res = await fetch("url") (line 4)', completed: false, regex: /const\s+res\s*=\s*await\s+fetch\s*\(/ },
                        { id: 3, description: 'Make page component async: export default async function Page() (line 10)', completed: false, regex: /export\s+default\s+async\s+function/ },
                        { id: 4, description: 'Add revalidation: fetch(url, { next: { revalidate: 60 } }) (line 5)', completed: false, regex: /next\s*:\s*\{\s*revalidate/ }
                    ],
                    files: [
                        { name: 'app/products/page.tsx', language: 'typescript', content: `// Products Page - Server Component

// Fetch function
async function getProducts() {
    // Fetch from API with revalidation
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

// Page component (make it async)
export default function ProductsPage() {
    // Call getProducts() and render
    
    return (
        <main>
            <h1>Products</h1>
            {/* Map over products */}
        </main>
    );
}
` },
                        { name: 'app/products/loading.tsx', language: 'typescript', content: `// Loading state
export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
    );
}
` },
                        { name: 'app/products/error.tsx', language: 'typescript', content: `'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
            <p className="text-gray-600 mt-2">{error.message}</p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Try again
            </button>
        </div>
    );
}
` }
                    ]
                },
                {
                    id: 'nextjs-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Data Fetching Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the default component type in Next.js App Router?',
                            options: ['Client Component', 'Server Component', 'Hybrid Component', 'Static Component'],
                            correctIndex: 1,
                            explanation: 'In App Router, all components are Server Components by default. Use "use client" directive for Client Components.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you revalidate cached data every 60 seconds?',
                            options: ['cache: 60', 'revalidate: 60', 'next: { revalidate: 60 }', 'timeout: 60'],
                            correctIndex: 2,
                            explanation: 'Use fetch(url, { next: { revalidate: 60 } }) to revalidate the cache every 60 seconds.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'nextjs-unit-3',
            title: 'API Routes',
            description: 'Build backend APIs with Next.js Route Handlers',
            items: [
                {
                    id: 'nextjs-3-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Route Handlers',
                    duration: '25 min',
                    content: `
# API Routes in Next.js

## Route Handlers (App Router)

Create API endpoints using route.ts files:

\`\`\`typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ];
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const body = await request.json();
    // Create user...
    return NextResponse.json({ message: 'User created' }, { status: 201 });
}
\`\`\`

## Dynamic Routes

\`\`\`typescript
// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const user = await getUser(params.id);
    if (!user) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(user);
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const user = await updateUser(params.id, body);
    return NextResponse.json(user);
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    await deleteUser(params.id);
    return new NextResponse(null, { status: 204 });
}
\`\`\`

## Query Parameters

\`\`\`typescript
// app/api/search/route.ts
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const page = searchParams.get('page') || '1';
    
    const results = await search(query, parseInt(page));
    return NextResponse.json(results);
}
\`\`\`

## Headers & Cookies

\`\`\`typescript
import { cookies, headers } from 'next/headers';

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    
    const headersList = headers();
    const auth = headersList.get('authorization');
    
    return NextResponse.json({ token, auth });
}
\`\`\`

---

## Your Mission
Create a REST API with Route Handlers.
                    `,
                    tasks: [
                        { id: 1, description: 'Create GET handler: export async function GET() { return NextResponse.json(...) }', completed: false, regex: /export\s+async\s+function\s+GET\s*\(/ },
                        { id: 2, description: 'Create POST handler: export async function POST(request: Request) { ... }', completed: false, regex: /export\s+async\s+function\s+POST\s*\(/ },
                        { id: 3, description: 'Parse request body: const body = await request.json()', completed: false, regex: /await\s+request\.json\s*\(\s*\)/ },
                        { id: 4, description: 'Return with status: NextResponse.json(data, { status: 201 })', completed: false, regex: /NextResponse\.json\s*\([^)]*status\s*:\s*201/ }
                    ],
                    files: [
                        { name: 'app/api/products/route.ts', language: 'typescript', content: `import { NextResponse } from 'next/server';

// In-memory database
let products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 }
];

// GET all products
export async function GET() {
    // Return products as JSON
}

// POST create product
export async function POST(request: Request) {
    // Parse body
    // Create product
    // Return with status 201
}
` },
                        { name: 'app/api/products/[id]/route.ts', language: 'typescript', content: `import { NextResponse } from 'next/server';

// GET single product
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Find product by id
    // Return 404 if not found
    // Return product
}

// PUT update product
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Parse body
    // Update product
    // Return updated product
}

// DELETE product
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Delete product
    // Return 204 No Content
}
` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "nextjs-api",
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start"
    },
    "dependencies": {
        "next": "^14.0.0",
        "react": "^18.0.0",
        "react-dom": "^18.0.0"
    }
}` }
                    ]
                },
                {
                    id: 'nextjs-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'API Routes Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What file creates an API route in Next.js App Router?',
                            options: ['api.ts', 'route.ts', 'handler.ts', 'endpoint.ts'],
                            correctIndex: 1,
                            explanation: 'In App Router, API routes are created using route.ts (or route.js) files in the app/api directory.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you access URL parameters in a route handler?',
                            options: ['request.params', '{ params } from second argument', 'request.query', 'URL.params'],
                            correctIndex: 1,
                            explanation: 'Route handlers receive params as the second argument: { params }: { params: { id: string } }'
                        }
                    ]
                }
            ]
        },

        {
            id: 'nextjs-unit-4',
            title: 'Client Components & Interactivity',
            description: 'Add interactivity with Client Components',
            items: [
                {
                    id: 'nextjs-4-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Client Components',
                    duration: '20 min',
                    content: `
# Client Components

## When to Use Client Components

Use Client Components when you need:
- Event handlers (onClick, onChange)
- useState, useEffect, useRef
- Browser APIs
- Third-party libraries that use client features

## Creating Client Components

\`\`\`tsx
'use client'; // Add this directive at the top

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
\`\`\`

## Server vs Client Components

| Feature | Server | Client |
|---------|--------|--------|
| Fetch data | ✅ async/await | ❌ useEffect |
| Access backend | ✅ Direct | ❌ API calls |
| useState/useEffect | ❌ | ✅ |
| Event handlers | ❌ | ✅ |
| Browser APIs | ❌ | ✅ |
| Bundle size | Smaller | Larger |

## Composition Pattern

\`\`\`tsx
// Server Component (page.tsx)
import Counter from './Counter'; // Client Component

export default async function Page() {
    const data = await fetchData(); // Server-side fetch
    
    return (
        <div>
            <h1>{data.title}</h1>
            <Counter /> {/* Client Component */}
        </div>
    );
}
\`\`\`

## Passing Server Data to Client

\`\`\`tsx
// Server Component
export default async function Page() {
    const products = await getProducts();
    return <ProductList products={products} />;
}

// Client Component
'use client';
export function ProductList({ products }) {
    const [filter, setFilter] = useState('');
    // Use products and add interactivity
}
\`\`\`

---

## Your Mission
Create interactive Client Components.
                    `,
                    tasks: [
                        { id: 1, description: 'Add "use client" directive at the top of the file', completed: false, regex: /['"]use client['"]/ },
                        { id: 2, description: 'Import useState: import { useState } from "react"', completed: false, regex: /import\s*\{\s*useState\s*\}\s*from\s*['"]react['"]/ },
                        { id: 3, description: 'Create state: const [value, setValue] = useState(initialValue)', completed: false, regex: /const\s*\[\s*\w+\s*,\s*set\w+\s*\]\s*=\s*useState/ },
                        { id: 4, description: 'Add onClick handler: onClick={() => setValue(newValue)}', completed: false, regex: /onClick\s*=\s*\{\s*\(\s*\)\s*=>/ }
                    ],
                    files: [
                        { name: 'components/Counter.tsx', language: 'typescript', content: `// Add 'use client' directive


// Import useState


export default function Counter() {
    // Create count state
    
    return (
        <div className="p-4 border rounded">
            <p className="text-2xl">Count: {/* count */}</p>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded"
                // Add onClick to increment
            >
                Increment
            </button>
        </div>
    );
}
` },
                        { name: 'components/SearchFilter.tsx', language: 'typescript', content: `'use client';

import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

export default function SearchFilter({ products }: { products: Product[] }) {
    const [search, setSearch] = useState('');
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />
            <ul>
                {filtered.map(product => (
                    <li key={product.id} className="p-2 border-b">
                        {product.name} - \${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
` },
                        { name: 'app/page.tsx', language: 'typescript', content: `import Counter from '@/components/Counter';
import SearchFilter from '@/components/SearchFilter';

// Server Component - can fetch data
async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=5');
    return res.json();
}

export default async function Home() {
    const products = await getProducts();
    
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-8">Next.js Demo</h1>
            
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Counter (Client Component)</h2>
                <Counter />
            </section>
            
            <section>
                <h2 className="text-xl font-semibold mb-4">Products (Server Data + Client Filter)</h2>
                <SearchFilter products={products} />
            </section>
        </main>
    );
}
` }
                    ]
                },
                {
                    id: 'nextjs-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Client Components Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'How do you create a Client Component?',
                            options: ['export client', 'use client directive', 'client: true', 'type="client"'],
                            correctIndex: 1,
                            explanation: 'Add "use client" directive at the top of the file to make it a Client Component.'
                        },
                        {
                            id: 'q2',
                            question: 'Can you use useState in Server Components?',
                            options: ['Yes', 'No', 'Only with async', 'Only in layouts'],
                            correctIndex: 1,
                            explanation: 'useState and other React hooks that require client-side state cannot be used in Server Components.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'nextjs-unit-5',
            title: 'Authentication & Middleware',
            description: 'Implement authentication and route protection',
            items: [
                {
                    id: 'nextjs-5-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Authentication in Next.js',
                    duration: '15 min read',
                    content: `
# Authentication in Next.js

## Authentication Options

### NextAuth.js (Auth.js)
Most popular authentication library for Next.js:

\`\`\`bash
npm install next-auth
\`\`\`

\`\`\`typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Verify credentials
                const user = await verifyUser(credentials);
                return user;
            }
        })
    ],
    pages: {
        signIn: '/login',
    }
});

export { handler as GET, handler as POST };
\`\`\`

## Middleware for Route Protection

\`\`\`typescript
// middleware.ts (root of project)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    
    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*']
};
\`\`\`

## Session Management

\`\`\`tsx
// Server Component
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
    const session = await getServerSession();
    
    if (!session) {
        redirect('/login');
    }
    
    return <h1>Welcome, {session.user.name}</h1>;
}

// Client Component
'use client';
import { useSession } from 'next-auth/react';

export function UserMenu() {
    const { data: session, status } = useSession();
    
    if (status === 'loading') return <div>Loading...</div>;
    if (!session) return <a href="/login">Sign In</a>;
    
    return <span>Hello, {session.user.name}</span>;
}
\`\`\`
                    `
                },
                {
                    id: 'nextjs-5-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Middleware',
                    duration: '20 min',
                    content: `
# Next.js Middleware

Middleware runs before a request is completed, allowing you to modify the response.

## Basic Middleware

\`\`\`typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Log all requests
    console.log('Request:', request.nextUrl.pathname);
    
    return NextResponse.next();
}
\`\`\`

## Route Matching

\`\`\`typescript
export const config = {
    matcher: [
        '/dashboard/:path*',  // Match /dashboard and all sub-routes
        '/api/:path*',        // Match all API routes
        '/((?!_next|static).*)', // Match all except _next and static
    ]
};
\`\`\`

## Common Use Cases

### Authentication Check
\`\`\`typescript
export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth-token');
    
    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}
\`\`\`

### Add Headers
\`\`\`typescript
export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    response.headers.set('x-custom-header', 'my-value');
    return response;
}
\`\`\`

### Geolocation Redirect
\`\`\`typescript
export function middleware(request: NextRequest) {
    const country = request.geo?.country || 'US';
    
    if (country === 'ID') {
        return NextResponse.redirect(new URL('/id', request.url));
    }
}
\`\`\`

---

## Your Mission
Create middleware for route protection.
                    `,
                    tasks: [
                        { id: 1, description: 'Create middleware function: export function middleware(request: NextRequest) { ... }', completed: false, regex: /export\s+function\s+middleware\s*\(\s*request\s*:\s*NextRequest\s*\)/ },
                        { id: 2, description: 'Get cookie: const token = request.cookies.get("token")', completed: false, regex: /request\.cookies\.get\s*\(\s*["']token["']\s*\)/ },
                        { id: 3, description: 'Redirect if no token: NextResponse.redirect(new URL("/login", request.url))', completed: false, regex: /NextResponse\.redirect\s*\(\s*new\s+URL\s*\(/ },
                        { id: 4, description: 'Add matcher config: export const config = { matcher: [...] }', completed: false, regex: /export\s+const\s+config\s*=\s*\{\s*matcher/ }
                    ],
                    files: [
                        { name: 'middleware.ts', language: 'typescript', content: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Get auth token from cookies
    
    // Check if accessing protected route without token
    
    // Redirect to login if not authenticated
    
    // Continue if authenticated
    return NextResponse.next();
}

// Configure which routes to protect
export const config = {
    matcher: [
        // Add protected routes here
    ]
};
` },
                        { name: 'app/dashboard/page.tsx', language: 'typescript', content: `// Protected Dashboard Page

export default function Dashboard() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p>This page is protected by middleware.</p>
        </main>
    );
}
` },
                        { name: 'app/login/page.tsx', language: 'typescript', content: `'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Call login API
        // Set cookie
        // Redirect to dashboard
        router.push('/dashboard');
    };
    
    return (
        <main className="p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button className="w-full p-2 bg-blue-500 text-white rounded">
                    Login
                </button>
            </form>
        </main>
    );
}
` }
                    ]
                },
                {
                    id: 'nextjs-5-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Auth & Middleware Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Where should middleware.ts be placed?',
                            options: ['In app/ folder', 'In pages/ folder', 'In root of project', 'In api/ folder'],
                            correctIndex: 2,
                            explanation: 'middleware.ts should be placed in the root of your project (same level as app/ or pages/).'
                        },
                        {
                            id: 'q2',
                            question: 'What does the matcher config do?',
                            options: ['Matches file types', 'Specifies which routes middleware runs on', 'Matches user agents', 'Matches HTTP methods'],
                            correctIndex: 1,
                            explanation: 'The matcher config specifies which routes the middleware should run on.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'nextjs-unit-6',
            title: 'Deployment',
            description: 'Deploy Next.js applications to production',
            items: [
                {
                    id: 'nextjs-6-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Deploying Next.js',
                    duration: '10 min read',
                    content: `
# Deploying Next.js

## Vercel (Recommended)

Vercel is the creator of Next.js and offers the best deployment experience:

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

Or connect your GitHub repo to Vercel for automatic deployments.

## Other Platforms

### Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Static Export
\`\`\`javascript
// next.config.js
module.exports = {
    output: 'export'
};
\`\`\`

Then deploy the \`out/\` folder to any static host.

## Environment Variables

\`\`\`bash
# .env.local (development)
DATABASE_URL=...
NEXT_PUBLIC_API_URL=...

# Production: Set in Vercel/hosting dashboard
\`\`\`

## Build Optimization

\`\`\`javascript
// next.config.js
module.exports = {
    images: {
        domains: ['example.com'],
    },
    experimental: {
        optimizeCss: true,
    }
};
\`\`\`

## Performance Checklist

- ✅ Use Image component for images
- ✅ Use dynamic imports for large components
- ✅ Implement proper caching strategies
- ✅ Use Server Components where possible
- ✅ Minimize Client Components
- ✅ Set up proper error boundaries
                    `
                },
                {
                    id: 'nextjs-6-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Deployment Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the recommended platform for deploying Next.js?',
                            options: ['Heroku', 'Vercel', 'Netlify', 'AWS'],
                            correctIndex: 1,
                            explanation: 'Vercel is the creator of Next.js and provides the best deployment experience with zero configuration.'
                        }
                    ]
                }
            ]
        }
    ]
};

export default nextjsCourse;
