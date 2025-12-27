import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2DataFetching = {
    id: 'nextjs-unit-2',
    title: 'Rendering & Data Fetching',
    description: 'Deep dive into Rendering paradigms (SSR, SSG, ISR) and data fetching strategies in the App Router.',
    items: [
        {
            id: 'nextjs-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Server vs Client Components: The Paradigm Shift',
            duration: '20 min read',
            content: `
# Server vs Client Components

## The Default: Server Components (RSC)

In Next.js App Router, **everything is a Server Component by default**.

### What does this mean?
1.  **Backend Logic in UI**: You can read files (fs), connect to DBs, and use secrets directly in your component.
2.  **No Ship to Browser**: The component logic stays on the server. Only the *result* (HTML/Virtual DOM data) is sent. 
3.  **Non-Interactive**: Server components cannot use \`useState\`, \`useEffect\`, or \`onClick\`.

## The Exception: Client Components (\`"use client"\`)

To make a component interactive, you add the \`"use client"\` directive at the top of the file.

\`\`\`tsx
'use client'; // This marks the boundary

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // Valid here!
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
\`\`\`

### When to use which?

| Use Case | Server Component | Client Component |
|----------|------------------|------------------|
| Fetch data | ✅ | ❌ (Not Recommended) |
| Access Backend (DB/API) | ✅ | ❌ |
| Store Secrets | ✅ | ❌ (Leaks to client) |
| Event Listeners (onClick) | ❌ | ✅ |
| Lifecycle (useEffect) | ❌ | ✅ |
| Browser APIs (localStorage) | ❌ | ✅ |

### The "Boundary" Concept

When you import a Client Component into a Server Component, you create a boundary. The Client component and *all its children* become part of the client bundle.
            `
        },
        {
            id: 'nextjs-2-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Fetching Data in Server Components',
            duration: '25 min',
            content: `
# Fetching Data in Server Components

Gone are the days of \`useEffect\` and loading spinners for initial data.
In Server Components, you just use \`async/await\` directly.

## The Async Component

\`\`\`tsx
// app/users/page.tsx

async function getUsers() {
  const res = await fetch('https://api.example.com/users');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers(); // Pause rendering until data is ready

  return (
    <main>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </main>
  );
}
\`\`\`

## Handling Loading States

Since the component "pauses" while fetching, the screen might be blank.
Create a \`loading.tsx\` file in the same folder to show an instant skeleton/spinner.

\`\`\`tsx
// app/users/loading.tsx
export default function Loading() {
  return <p>Loading users...</p>;
}
\`\`\`

## Handling Errors

If the fetch fails (throws error), catch it with \`error.tsx\`.

\`\`\`tsx
// app/users/error.tsx
'use client'; // Error boundaries must be client components

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
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
1. Create an async helper function to fetch dummy products.
2. Convert the page component to \`async\`.
3. Await the data and render it.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define async function getProducts() that fetches from API',
                    completed: false,
                    regex: /async\s+function\s+getProducts\s*\(\s*\)/
                },
                {
                    id: 2,
                    description: 'Make the Page component async',
                    completed: false,
                    regex: /export\s+default\s+async\s+function\s+Page/
                },
                {
                    id: 3,
                    description: 'Await getProducts inside the component',
                    completed: false,
                    regex: /const\s+products\s*=\s*await\s+getProducts\(\)/
                },
                {
                    id: 4,
                    description: 'Map over products array in JSX',
                    completed: false,
                    regex: /products\.map\s*\(/
                }
            ],
            files: [
                {
                    name: 'app/shop/page.tsx',
                    language: 'tsx',
                    content: `// 1. Define Fetch Function
// Endpoint: https://fakestoreapi.com/products


// 2. Make Component Async
export default function Page() {
    // 3. Fetch Data
    
    return (
        <div>
            <h1>Shop</h1>
            {/* 4. Render List */}
            
        </div>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Static Site Generation (SSG)',
            duration: '15 min read',
            content: `
# Static Site Generation (SSG)

SSG builds your HTML pages at **build time** (when you run \`npm run build\`).
These pages are reused for every request. This is the fastest rendering method.

## Default Behavior

By default, Next.js tries to make every page Static if it doesn't use dynamic features (like cookies, headers, or dynamic URL params).

## Fetch Defaults

When you use \`fetch\` in a server component, Next.js defaults to:
\`\`\`ts
fetch('https://...', { cache: 'force-cache' }) // Default
\`\`\`
It fetches once at build time and caches the JSON forever.

## SSG with Dynamic Routes

If you have a route like \`/blog/[slug]\`, Next.js doesn't know which slugs exist at build time.
You must tell it using \`generateStaticParams\`.

\`\`\`tsx
// app/blog/[slug]/page.tsx

// Replaces getStaticPaths
export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) { ... }
\`\`\`

Next.js will take the array returned by \`generateStaticParams\` and build a static HTML file for each one (e.g., \`blog/post-1.html\`, \`blog/post-2.html\`).
            `
        },
        {
            id: 'nextjs-2-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Implementing generateStaticParams',
            duration: '30 min',
            content: `
# Implementing generateStaticParams

You are building a blog. You want all blog posts to be pre-rendered as static HTML for instant load speeds and perfect SEO.

The function \`generateStaticParams\` must return an array of objects. Each object represents the params for one route.

## Syntax

\`\`\`ts
export async function generateStaticParams() {
  // Fetch IDs from DB/CMS
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ]
}
\`\`\`

If a user visits a path that wasn't returned by this function, Next.js will try to render it dynamically on demand (unless \`dynamicParams = false\` is set).

---

## Your Mission
1. Create a \`generateStaticParams\` function in a dynamic route.
2. Fetch a list of user IDs.
3. Map them to the correct param structure.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Export async function generateStaticParams',
                    completed: false,
                    regex: /export\s+async\s+function\s+generateStaticParams/
                },
                {
                    id: 2,
                    description: 'Return an array of objects with an `id` property',
                    completed: false,
                    regex: /return\s+users\.map.*id:/
                },
                {
                    id: 3,
                    description: 'Ensure Page component accepts params prop',
                    completed: false,
                    regex: /Page\s*\(\s*\{\s*params\s*\}\s*\)/
                }
            ],
            files: [
                {
                    name: 'app/user/[id]/page.tsx',
                    language: 'tsx',
                    content: `// Dynamic User Profile Page

// Mock DB function
const getAllUserIds = async () => [{id: '1'}, {id: '2'}, {id: '3'}];

// 1. Generate Static Params
export async function generateStaticParams() {
    const users = await getAllUserIds();
    // 2. Return params array
    
}

export default function Page({ params }: { params: { id: string } }) {
    return <h1>User Profile {params.id}</h1>
}
`
                }
            ]
        },
        {
            id: 'nextjs-2-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Dynamic Rendering (SSR) & Streaming',
            duration: '20 min read',
            content: `
# Dynamic Rendering (SSR)

Sometimes data changes constantly (e.g., Stock Market, User Profile). You can't cache it. You need **Dynamic Rendering**.

## Forcing Dynamic Rendering

You can force a route to be dynamic in two ways:

1.  **Using Dynamic Functions**: If you use \`cookies()\`, \`headers()\`, or \`searchParams\`, Next.js switches to dynamic mode automatically.
2.  **Using Fetch Options**:
    \`\`\`ts
    fetch('...', { cache: 'no-store' }) // Never cache
    \`\`\`
3.  **Route Segment Config**:
    \`\`\`ts
    export const dynamic = 'force-dynamic';
    \`\`\`

## Streaming with Suspense

In traditional SSR, the user sees nothing until the *entire* page is ready.
With **Streaming**, you send the HTML in chunks.

1.  Send the static shell (Navbar/Sidebar) immediately.
2.  Pause the part that needs data.
3.  Fetch data on server.
4.  Stream the rest of the HTML when ready.

You implement this simply by wrapping asynchronous components in \`<Suspense>\`.

\`\`\`tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <section>
      <h1>My Feed</h1>
      <Suspense fallback={<p>Loading Feed...</p>}>
        <NewsFeed />
      </Suspense>
    </section>
  )
}
\`\`\`
            `
        },
        {
            id: 'nextjs-2-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Streaming & Loading UI',
            duration: '25 min',
            content: `
# Streaming & Loading UI

Let's build a dashboard with two widgets:
1.  **Weather**: Fast API (50ms).
2.  **Sales Data**: Slow API (3000ms).

Without streaming, the page would wait 3 seconds for Sales Data before showing anything.
With streaming, we show Weather immediately and a spinner for Sales.

## React Suspense

Since Server Components are async, they define a "boundary" that Suspense can wait for.

---

## Your Mission
1. Wrap the \`SlowComponent\` in a \`Suspense\` boundary.
2. Provide a fallback UI (Loading...) for the Suspense.
3. Ensure the \`FastComponent\` renders outside the Suspense.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Suspense from react',
                    completed: false,
                    regex: /import\s+\{\s*Suspense\s*\}\s+from\s+['"]react['"]/
                },
                {
                    id: 2,
                    description: 'Wrap SlowWidget in Suspense',
                    completed: false,
                    regex: /<Suspense.*>[\s\S]*<SlowWidget\s*\/>[\s\S]*<\/Suspense>/
                },
                {
                    id: 3,
                    description: 'Provide a fallback prop to Suspense',
                    completed: false,
                    regex: /<Suspense\s+fallback=\{.*\}\s*>/
                }
            ],
            files: [
                {
                    name: 'app/dashboard/page.tsx',
                    language: 'tsx',
                    content: `import { Suspense } from 'react';

async function FastWidget() { return <div>Weather: Sunny</div> }
async function SlowWidget() { 
    await new Promise(r => setTimeout(r, 3000));
    return <div>Sales: $10,000</div> 
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            
            {/* Render Fast Component immediately */}
            <FastWidget />
            
            {/* Wrap Slow Component to stream it in */}
            
            
        </div>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-2-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Incremental Static Regeneration (ISR)',
            duration: '15 min read',
            content: `
# Incremental Static Regeneration (ISR)

ISR is the "Best of Both Worlds". It gives you:
1.  Speed of Static (SSG).
2.  Freshness of Dynamic (SSR).

## How it works
1.  User visits page. Next.js serves the cached static HTML (Instant).
2.  If the cache is "stale" (older than the revalidate time), Next.js triggers a rebuild in the background.
3.  The *next* user gets the new version.

## Usage in App Router

It's just a simple fetch option:

\`\`\`ts
// Revalidate this data at most every 60 seconds
const res = await fetch('https://...', { 
  next: { revalidate: 60 } 
});
\`\`\`

## On-Demand Revalidation

Sometimes waiting 60 seconds is too long (e.g., when you update a CMS).
You can trigger a manual revalidation via API or Server Action:

\`\`\`ts
import { revalidatePath, revalidateTag } from 'next/cache';

revalidatePath('/blog/[slug]'); // Clear cache for specific path
revalidateTag('posts'); // Clear cache for any fetch tagged with 'posts'
\`\`\`
            `
        },
        {
            id: 'nextjs-2-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Implementing ISR',
            duration: '20 min',
            content: `
# Implementing ISR

We want our news feed to stay mostly static but update at least once every 10 seconds.

## Fetch Config

\`\`\`ts
fetch(url, { next: { revalidate: 10 } })
\`\`\`

You can also set this globally for an entire page segment if you aren't using fetch (e.g., connecting to DB directly).

\`\`\`ts
export const revalidate = 10; // seconds
\`\`\`

---

## Your Mission
1. Implement fetch with a revalidate time of 3600 seconds (1 hour).
2. Add a 'collection' tag to the fetch for on-demand invalidation.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add next.revalidate: 3600 to fetch options',
                    completed: false,
                    regex: /next\s*:\s*\{\s*revalidate\s*:\s*3600/
                },
                {
                    id: 2,
                    description: 'Add tags array: tags: ["collection"]',
                    completed: false,
                    regex: /tags\s*:\s*\[\s*['"]collection['"]\s*\]/
                }
            ],
            files: [
                {
                    name: 'app/shop/page.tsx',
                    language: 'tsx',
                    content: `export default async function Page() {
    // Modify this fetch to use ISR
    const res = await fetch('https://api.my-shop.com/products', {
        
    });
    
    const data = await res.json();
    return <div>{JSON.stringify(data)}</div>
}
`
                }
            ]
        },
        {
            id: 'nextjs-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Rendering Mastery Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which component type allows direct database access?',
                    options: [
                        'Client Components',
                        'Server Components',
                        'Both',
                        'Neither'
                    ],
                    correctIndex: 1,
                    explanation: 'Server Components run purely on the server, so they can safely import DB drivers and access environment secrets.'
                },
                {
                    id: 'q2',
                    question: 'How do you force a fetch request to never cache (Dynamic)?',
                    options: [
                        '{ next: { revalidate: 0 } }',
                        '{ cache: "no-store" }',
                        '{ dynamic: true }',
                        'Both A and B'
                    ],
                    correctIndex: 3,
                    explanation: 'Setting revalidate to 0 or cache to "no-store" both effectively opt-out of caching, making the request dynamic.'
                },
                {
                    id: 'q3',
                    question: 'What happens to the User Interface during React Streaming (Suspense)?',
                    options: [
                        'The screen remains white until everything loads',
                        'Interactive parts load first, then static parts',
                        'Static parts (fallback) load first, then async content pops in',
                        'The page reloads automatically'
                    ],
                    correctIndex: 2,
                    explanation: 'Streaming allows the browser to render the initial HTML shell and any "fallback" loader immediately, then streams in the heavy data as it finishes.'
                }
            ]
        }
    ]
};
