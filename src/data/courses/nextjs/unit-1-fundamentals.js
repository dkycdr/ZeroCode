import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Fundamentals = {
    id: 'nextjs-unit-1',
    title: 'Next.js Fundamentals & Architecture',
    description: 'Master the core concepts of Next.js 14+, App Router, file-based routing, and project structure.',
    items: [
        {
            id: 'nextjs-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Next.js vs React: The Framework Evolution',
            duration: '15 min read',
            content: `
# Next.js vs React: The Framework Evolution

## The "Library" vs "Framework" Distinction

React is technically a **library** for building user interfaces. It focuses purely on the view layer (components). It doesn't have an opinion on routing, data fetching, or build optimization.

Next.js is a **framework** built *on top* of React. It provides the production-grade tooling and structure that React lacks out of the box.

### Comparison Matrix

| Feature | Plain React (Vite/CRA) | Next.js (App Router) |
|---------|------------------------|----------------------|
| **Rendering** | Client-Side (CSR) | Server First (RSC) + CSR |
| **Routing** | Manual (React Router) | File-System Based |
| **Data Fetching**| useEffect + Fetch | async/await in Server Components |
| **SEO** | Poor (Empty HTML shell) | Excellent (Pre-rendered HTML) |
| **Performance** | Load all JS upfront | Automatic Code Splitting |
| **Backend** | Needs separate server | Built-in Route Handlers |

## Key Next.js Capabilities

### 1. Server Components (RSC)
By default, components in the App Router run on the server. This means:
- **Zero Bundle Size**: Large dependencies used on the server don't bloat the client JS.
- **Direct Database Access**: You can query your DB directly inside a component.
- **Security**: Sensitive keys (API secrets) stay on the server.

### 2. Rendering Strategies
Next.js supports multiple rendering modes, often in the same app:
- **Static Site Generation (SSG)**: Pages built at compile time (fastest).
- **Server-Side Rendering (SSR)**: Pages built at request time (dynamic).
- **Incremental Static Regeneration (ISR)**: Update static pages without rebuilding the whole site.

### 3. Smart Routing
No more \`react-router-dom\` configuration files. The file system *is* the router.
- \`app/page.tsx\` -> \`/\`
- \`app/about/page.tsx\` -> \`/about\`
- \`app/blog/[slug]/page.tsx\` -> \`/blog/my-post\`

> 💡 **Mental Model**: Think of Next.js as a "Full Stack React". It blurs the line between frontend and backend, allowing you to build complete applications in a single codebase.
            `
        },
        {
            id: 'nextjs-1-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Project Setup & Anatomy (App Router)',
            duration: '25 min',
            content: `
# Project Setup & Anatomy

## The App Router Structure

Since Next.js 13.4, the **App Router** (\`app/\` directory) is the recommended way to build applications, replacing the old \`pages/\` directory.

### Essential Files

Inside the \`app/\` directory, certain filenames have special meaning:

- \`page.tsx\`: The UI for a route (Unique per route).
- \`layout.tsx\`: Shared UI that wraps children (Nested).
- \`loading.tsx\`: React Suspense loading UI.
- \`error.tsx\`: Error boundary UI.
- \`not-found.tsx\`: 404 UI.
- \`route.ts\`: API endpoint (Backend).

### File Directory Visualization

\`\`\`
src/
├── app/
│   ├── layout.tsx      # Root Layout (Required)
│   ├── page.tsx        # Home Page (/)
│   ├── globals.css     # Global Styles
│   ├── about/
│   │   └── page.tsx    # About Page (/about)
│   └── dashboard/
│       ├── layout.tsx  # Dashboard Sidebar
│       ├── page.tsx    # Dashboard Home (/dashboard)
│       └── settings/
│           └── page.tsx # Settings (/dashboard/settings)
├── components/         # Reusable Components
└── public/             # Static Assets (images, fonts)
\`\`\`

## The Root Layout

Every Next.js app has a root \`app/layout.tsx\`. This is where you define the \`<html>\` and \`<body>\` tags.

\`\`\`tsx
// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Next.js App',
  description: 'Built with ZeroCode',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation could go here */}
        <nav>My Navbar</nav>
        
        {/* Page content is injected here */}
        {children}
      </body>
    </html>
  );
}
\`\`\`

---

## Your Mission
1. Define the Root Layout structure.
2. Create a Home Page component.
3. Configure metadata for SEO.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'In app/layout.tsx, export a RootLayout function accepting `children`',
                    completed: false,
                    regex: /export\s+default\s+function\s+RootLayout\s*\(\s*\{\s*children\s*\}\s*:\s*\{\s*children\s*:\s*React\.ReactNode\s*\}\s*\)/
                },
                {
                    id: 2,
                    description: 'Inside RootLayout, wrap children with <html> and <body> tags',
                    completed: false,
                    regex: /<html[^>]*>[\s\S]*<body[^>]*>[\s\S]*\{children\}[\s\S]*<\/body>[\s\S]*<\/html>/
                },
                {
                    id: 3,
                    description: 'In app/page.tsx, export a default function named Home',
                    completed: false,
                    regex: /export\s+default\s+function\s+Home\s*\(/
                },
                {
                    id: 4,
                    description: 'In app/layout.tsx, export a metadata object with a title',
                    completed: false,
                    regex: /export\s+const\s+metadata\s*=\s*\{\s*title:/
                }
            ],
            files: [
                {
                    name: 'app/layout.tsx',
                    language: 'tsx',
                    content: `import React from 'react';

// 1. Export Metadata


// 2. Export RootLayout
`
                },
                {
                    name: 'app/page.tsx',
                    language: 'tsx',
                    content: `// 3. Export Home Page
`
                }
            ]
        },
        {
            id: 'nextjs-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'File-Based Routing System',
            duration: '20 min read',
            content: `
# File-Based Routing System

Next.js uses the file system to define routes. Folders define routes, and files define the UI.

## Routes & Segments

- **Route Segment**: Each folder in a path is a segment. \`app/blog/slug\` has 3 segments.
- **URL Path**: The URL path is derived from the folder structure.

### Special Folder Conventions

1.  **Route Groups**: Folders with parentheses \`(folderName)\`.
    -   They are **ignored** by the URL path.
    -   Useful for organizing code or sharing layouts without affecting the URL.
    -   Example: \`app/(marketing)/about/page.tsx\` -> \`/about\`

2.  **Private Folders**: Folders starting with underscore \`_folderName\`.
    -   They are **excluded** from routing entirely.
    -   Useful for colocating helper files, util tests, etc.

3.  **Parallel Routes**: Folders starting with \`@slot\`.
    -   Allows rendering multiple pages in the same layout simultaneously.
    -   Example: \`@analytics\` and \`@team\` in a dashboard.

4.  **Intercepting Routes**: Folders starting with \`(.)\` or \`(..)\`.
    -   Allows loading a route within the current layout (like a modal).

## Layouts vs Templates

Both wrap child pages, but they behave differently on navigation.

| Feature | Layout (\`layout.tsx\`) | Template (\`template.tsx\`) |
|---------|-----------------------|---------------------------|
| **Persistence** | Preserves state on navigation | Remounts on navigation |
| **Re-rendering**| Does NOT re-render unchanged segments | Re-renders DOM elements |
| **Use Case** | Navigation, Sidebars, persistent UI | Enter/Exit animations, useEffect per page view |

### Layout Nesting

Layouts nest inside each other.
- \`app/layout.tsx\` (Root)
  - \`app/dashboard/layout.tsx\` (Dashboard Wrapper)
    - \`app/dashboard/page.tsx\` (Content)

The final output is effectively:
\`\`\`jsx
<RootLayout>
  <DashboardLayout>
    <DashboardPage />
  </DashboardLayout>
</RootLayout>
\`\`\`
            `
        },
        {
            id: 'nextjs-1-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Dynamic Routes & Parameters',
            duration: '30 min',
            content: `
# Dynamic Routes

Often you don't know the exact segment names ahead of time (e.g., product IDs, blog slugs). Next.js uses **Square Brackets** for this.

## Single Dynamic Segment

- Folder: \`app/blog/[slug]/page.tsx\`
- Matches: \`/blog/hello-world\`, \`/blog/nextjs-14\`
- **Not** Matches: \`/blog/hello/world\`

### Accessing Params

In the App Router, \`params\` are passed directly as props to the page component.

\`\`\`tsx
// app/blog/[slug]/page.tsx

interface PageProps {
  params: { slug: string }
}

export default function BlogPost({ params }: PageProps) {
  return <h1>Reading post: {params.slug}</h1>
}
\`\`\`

## Catch-All Segments

- Folder: \`app/docs/[...slug]/page.tsx\`
- Matches: \`/docs/guided-tour\`, \`/docs/api/v1/auth\`
- Returns an array: \`['api', 'v1', 'auth']\`

## Optional Catch-All Segments

- Folder: \`app/shop/[[...slug]]/page.tsx\` (Double brackets)
- Matches: \`/shop\`, \`/shop/clothes\`, \`/shop/clothes/tops\`
- Does NOT return 404 for the base \`/shop\` route.

---

## Your Mission
1. Create a dynamic route for product details \`/products/[id]\`.
2. Define the interface for the props to type the params correctly.
3. Render the dynamic ID on the page.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'In app/products/[id]/page.tsx, export default function ProductPage',
                    completed: false,
                    regex: /export\s+default\s+function\s+ProductPage/
                },
                {
                    id: 2,
                    description: 'Define Props interface with params: { id: string }',
                    completed: false,
                    regex: /interface\s+\w+\s*\{\s*params\s*:\s*\{\s*id\s*:\s*string\s*\}\s*\}/
                },
                {
                    id: 3,
                    description: 'Destructure params in the function component',
                    completed: false,
                    regex: /ProductPage\s*\(\s*\{\s*params\s*\}\s*:\s*\w+\s*\)/
                },
                {
                    id: 4,
                    description: 'Render the product ID in an h1 tag',
                    completed: false,
                    regex: /<h1>.*\{params\.id\}.*<\/h1>/
                }
            ],
            files: [
                {
                    name: 'app/products/[id]/page.tsx',
                    language: 'tsx',
                    content: `// Dynamic Route: /products/123

// 1. Define Interface


// 2. Export Page Component
`
                }
            ]
        },
        {
            id: 'nextjs-1-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Navigation: Link & useRouter',
            duration: '15 min read',
            content: `
# Navigation in Next.js

## The \`<Link>\` Component

The primary way to navigate is the \`<Link>\` component from \`next/link\`. It extends the HTML \`<a>\` tag to provide **prefetching** and **client-side navigation**.

\`\`\`tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      {/* Basic Link */}
      <Link href="/">Home</Link>
      
      {/* Dynamic Link */}
      <Link href={\`/blog/\${slug}\`}>Read Post</Link>
      
      {/* Object Syntax */}
      <Link href={{ pathname: '/about', query: { name: 'me' } }}>
        About
      </Link>
    </nav>
  )
}
\`\`\`

### Why use <Link> over <a>?
1.  **SPA Feel**: No full page reload. It just swaps the content.
2.  **Prefetching**: When a \`<Link>\` enters the viewport, Next.js automatically background fetches that route's code and data. Clicking is instant.

## Programmatic Navigation (\`useRouter\`)

Sometimes you need to navigate via code (e.g., after submitting a form). Use the \`useRouter\` hook from \`next/navigation\`.

> ⚠️ **Warning**: Import from \`next/navigation\`, NOT \`next/router\` (that was for the old Pages router).

\`\`\`tsx
'use client'; // Required because it's a hook

import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = async () => {
    await performLogin();
    router.push('/dashboard'); // Navigate
    // router.replace('/dashboard'); // Replace history
    // router.back(); // Go back
  }

  return <button onClick={handleLogin}>Log In</button>
}
\`\`\`
            `
        },
        {
            id: 'nextjs-1-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Styling: CSS Modules & Tailwind',
            duration: '25 min',
            content: `
# Styling in Next.js

Next.js supports multiple styling strategies out of the box.

## 1. Global CSS
Imported **ONLY** in \`app/layout.tsx\`. Applies to the entire application.
\`\`\`tsx
// app/layout.tsx
import './globals.css';
\`\`\`

## 2. CSS Modules
Locally scoped CSS. Files must end in \`.module.css\`. Next.js generates unique class names to avoid collisions.

\`\`\`tsx
// styles.module.css
.container { padding: 20px; }

// Component.tsx
import styles from './styles.module.css';
<div className={styles.container}>Hello</div>
\`\`\`

## 3. Tailwind CSS (Recommended)
Utility-first framework. Next.js creates a \`tailwind.config.ts\` and \`postcss.config.js\` for you.

\`\`\`tsx
<div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
  <h1 className="text-4xl font-bold">Hello Tailwind</h1>
</div>
\`\`\`

## 4. Fonts (next/font)
Next.js automatically optimizes fonts (Google Fonts or local) to prevent **Layout Shift** (CLS).

\`\`\`tsx
// app/layout.tsx
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
\`\`\`

---

## Your Mission
1. Use \`next/font/google\` to configure the 'Inter' font.
2. Apply the font class to the body.
3. Use Tailwind utility classes to style a card component.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Inter font from next/font/google',
                    completed: false,
                    regex: /import\s+\{\s*Inter\s*\}\s+from\s+['"]next\/font\/google['"]/
                },
                {
                    id: 2,
                    description: 'Initialize Inter font object',
                    completed: false,
                    regex: /const\s+inter\s*=\s*Inter\s*\(\s*\{\s*subsets\s*:\s*\[['"]latin['"]\]/
                },
                {
                    id: 3,
                    description: 'Apply inter.className to a div or body',
                    completed: false,
                    regex: /className=\{inter\.className\}/
                },
                {
                    id: 4,
                    description: 'Create a div with Tailwind classes: p-4, rounded-xl, bg-white',
                    completed: false,
                    regex: /className=['"].*p-4.*rounded-xl.*bg-white.*['"]/
                }
            ],
            files: [
                {
                    name: 'app/layout.tsx',
                    language: 'tsx',
                    content: `// 1. Import Font


// 2. Initialize Font


export default function RootLayout() {
    return (
        // 3. Apply Font Class
        <html>
            <body>
                {/* 4. Tailwind Card */}
                <div>
                    <h2>Styled Content</h2>
                </div>
            </body>
        </html>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-1-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Metadata & SEO',
            duration: '15 min read',
            content: `
# Metadata & SEO

Next.js has a Metadata API to define \`meta\` tags (title, description, open graph, favicon) directly in your layout or page files.

## Static Metadata
Export a constant named \`metadata\`.

\`\`\`tsx
// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | My App',
  description: 'The best application ever built',
  openGraph: {
    title: 'My App',
    description: 'The best app',
    images: ['/og-image.png'],
  },
};
\`\`\`

## Dynamic Metadata
Use \`generateMetadata\` function to fetch data and return metadata based on params (e.g., blog post title).

\`\`\`tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // fetch data
  const post = await getPost(params.slug);
 
  return {
    title: \`\${post.title} | My Blog\`,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}
\`\`\`

## Metadata Ordering
Metadata flows from root layout -> nested layout -> page.
- Nested metadata **overrides** data from parents (e.g., title).
- Some fields (like OpenGraph images) can be **inherited** or composed.
            `
        },
        {
            id: 'nextjs-1-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Optimizing Assets: Image & Script',
            duration: '20 min',
            content: `
# Optimizing Assets

## The Image Component

Standard HTML \`<img>\` tags contribute to poor Core Web Vitals (CLS, slow LCP).
Next.js provides \`<Image>\` from \`next/image\`.

### Features
1.  **Size Optimization**: Automatically serves correctly sized images for each device (WebP/AVIF).
2.  **Visual Stability**: Prevents layout shift by requiring width/height.
3.  **Faster Page Loads**: Images are lazy-loaded by default.

\`\`\`tsx
import Image from 'next/image';
import heroPic from './hero.png'; // Local image

export default function Hero() {
  return (
    <>
      {/* Local Image (Determines sizes automatically) */}
      <Image src={heroPic} alt="Hero" />
      
      {/* Remote Image (Requires width/height) */}
      <Image 
        src="https://example.com/pic.jpg" 
        alt="Remote"
        width={800}
        height={600}
        priority // Preload this image (LCP)
      />
    </>
  )
}
\`\`\`

> **Note**: For remote images, you must whitelist the domain in \`next.config.js\`.

## The Script Component

Third-party scripts (Analytics, Ads) often block the main thread.
Use \`<Script>\` from \`next/script\` to control loading strategy.

\`\`\`tsx
import Script from 'next/script';

<Script 
  src="https://analytics.com/script.js"
  strategy="lazyOnload" // Load during idle time
/>
\`\`\`

---

## Your Mission
1. Import the Image component.
2. Render an Image with specific dimensions.
3. Use the 'fill' prop for responsive container-based sizing.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Image from next/image',
                    completed: false,
                    regex: /import\s+Image\s+from\s+['"]next\/image['"]/
                },
                {
                    id: 2,
                    description: 'Render Image with src, alt, width, and height',
                    completed: false,
                    regex: /<Image[^>]*width=\{500\}[^>]*height=\{300\}[^>]*\/>/
                },
                {
                    id: 3,
                    description: 'Render another Image with the "fill" prop',
                    completed: false,
                    regex: /<Image[^>]*fill[^>]*\/>/
                }
            ],
            files: [
                {
                    name: 'app/gallery/page.tsx',
                    language: 'tsx',
                    content: `// 1. Import Image


export default function Gallery() {
    return (
        <div>
            <h1>My Photo Gallery</h1>
            
            {/* 2. Standard Fixed Size Image (500x300) */}
            
            
            <div style={{ position: 'relative', height: '400px' }}>
               {/* 3. Fill Container Image */}
               
            </div>
        </div>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Fundamentals Mastery Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the purpose of the "layout.tsx" file?',
                    options: [
                        'To define the 404 error page',
                        'To create a reusable UI wrapper that persists across navigation',
                        'To define API routes',
                        'To create loading states'
                    ],
                    correctIndex: 1,
                    explanation: 'Layouts share UI (like navbars and footers) between multiple pages and preserve state during navigation.'
                },
                {
                    id: 'q2',
                    question: 'How do you create a dynamic route segment for a blog post slug?',
                    options: [
                        'app/blog/{slug}/page.tsx',
                        'app/blog/[slug]/page.tsx',
                        'app/blog/:slug/page.tsx',
                        'app/blog/$slug/page.tsx'
                    ],
                    correctIndex: 1,
                    explanation: 'Next.js uses square brackets [folderName] to denote dynamic route segments.'
                },
                {
                    id: 'q3',
                    question: 'Which component is the primary way to navigate between pages in Next.js?',
                    options: [
                        '<a href="...">',
                        '<Link to="...">',
                        '<Link href="...">',
                        '<RouterLink path="..."> '
                    ],
                    correctIndex: 2,
                    explanation: 'The <Link> component from "next/link" uses the `href` prop and enables client-side transitions.'
                },
                {
                    id: 'q4',
                    question: 'What happens when you use <Image> without width/height on a remote image?',
                    options: [
                        'Next.js automatically calculates it',
                        'It throws an error (unless "fill" is used)',
                        'It renders at original size',
                        'It defaults to 100x100'
                    ],
                    correctIndex: 1,
                    explanation: 'Remote images require explicit width/height to prevent layout shift, unless you use the `fill` prop.'
                }
            ]
        }
    ]
};
