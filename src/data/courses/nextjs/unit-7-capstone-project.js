import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7CapstoneProject = {
    id: 'nextjs-unit-7',
    title: 'Capstone: Full-Stack Markdown Blog',
    description: 'Build a production-grade blog platform with MDX, Search, Admin Dashboard, and Postgres.',
    items: [
        {
            id: 'nextjs-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'System Design: Blog Architecture',
            duration: '20 min read',
            content: `
# System Architecture

We are building a "Dev.to" clone.

## Tech Stack
- **Frontend**: Next.js App Router, Tailwind CSS.
- **Backend**: Route Handlers, Server Actions.
- **Database**: Postgres (via Prisma).
- **Content**: MDX (Markdown + JSX).
- **Auth**: NextAuth.js (GitHub).

## Data Schema
1.  **User**: ID, Name, Image, Role (Admin/User).
2.  **Post**: ID, Slug, Title, Content (MDX), ViewCount, AuthorID.
3.  **Comment**: ID, Content, PostID, AuthorID.

## Routes
- \`/\` (Public): List latest posts.
- \`/post/[slug]\` (Public): Read post (SSG + ISR).
- \`/admin\` (Private): CMS for creating posts.
            `
        },
        {
            id: 'nextjs-7-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 1: Database & Models',
            duration: '40 min',
            content: `
# Phase 1: Database

We need to define our Prisma schema.

---

## Your Mission
1. Define a \`User\` model.
2. Define a \`Post\` model with a relation to User.
3. Define the \`published\` boolean default false.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define User model with id (Int @id) and email',
                    completed: false,
                    regex: /model\s+User\s*\{[\s\S]*Int\s+@id/
                },
                {
                    id: 2,
                    description: 'Define Post model with title and authorId',
                    completed: false,
                    regex: /model\s+Post\s*\{[\s\S]*authorId/
                },
                {
                    id: 3,
                    description: 'Create relation fields (posts in User, author in Post)',
                    completed: false,
                    regex: /posts\s+Post\[\]/
                }
            ],
            files: [
                {
                    name: 'schema.prisma',
                    language: 'prisma',
                    content: `// Prisma Schema

model User {
    id    Int     @id @default(autoincrement())
    email String  @unique
    // 1. Add relation field
    
}

model Post {
    id        Int     @id @default(autoincrement())
    title     String
    published Boolean @default(false)
    // 2. Add Author Relation
    authorId  Int
    
}
`
                }
            ]
        },
        {
            id: 'nextjs-7-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'MDX: Markdown + Components',
            duration: '15 min read',
            content: `
# Rendering Content with MDX

MDX allows you to write Markdown content and import React components inside it.

## Remote MDX
For a CMS-based blog, we store the MDX string in the DB.
We use \`next-mdx-remote\` to compile and render it securely on the server.

\`\`\`tsx
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Post({ source }) {
  return <MDXRemote source={source} components={{ Alert, YouTube }} />
}
\`\`\`
            `
        },
        {
            id: 'nextjs-7-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 2: Rendering Posts',
            duration: '40 min',
            content: `
# Phase 2: Post Page

We need a dynamic route \`/post/[slug]\` that:
1.  Fetches raw MDX from DB.
2.  Compiles it.
3.  Renders with a custom \`H1\` component.

---

## Your Mission
1. Import \`MDXRemote\`.
2. Fetch the post by slug.
3. Pass \`content\` to source.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import MDXRemote',
                    completed: false,
                    regex: /import\s+\{\s*MDXRemote\s*\}\s+from/
                },
                {
                    id: 2,
                    description: 'Fetch post using prisma (mock)',
                    completed: false,
                    regex: /await\s+prisma\.post\.findUnique/
                },
                {
                    id: 3,
                    description: 'Render MDXRemote component',
                    completed: false,
                    regex: /<MDXRemote/
                }
            ],
            files: [
                {
                    name: 'lib/db.ts',
                    language: 'typescript',
                    content: `// Mock Prisma Client
export const prisma = {
    post: {
        findMany: async () => [],
        findUnique: async () => ({ title: 'Mock Post', content: 'Hello World' }),
        create: async () => {},
        update: async () => {},
        delete: async () => {}
    }
};`
                },
                {
                    name: 'app/post/[slug]/page.tsx',
                    language: 'tsx',
                    content: `import { prisma } from '@/lib/db';
// 1. Import


export default async function PostPage({ params }: { params: { slug: string } }) {
    // 2. Fetch
    const post = 
    
    if (!post) return <div>404</div>;

    return (
        <article>
            <h1>{post.title}</h1>
            {/* 3. Render MDX */}
            
        </article>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-7-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Search & Filtering Algorithms',
            duration: '15 min read',
            content: `
# Search Implementation

## URL-Driven State
Instead of \`useState\` for search text, use the URL Query Params (\`?q=react\`).
This allows users to share the search results link.

## Implementation
1.  **Search Input**: Updates URL on debounce.
2.  **Server Component**: Reads \`searchParams.q\`.
3.  **DB Query**: \`prisma.post.findMany({ where: { title: { contains: q }}})\`.
            `
        },
        {
            id: 'nextjs-7-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 3: Search Functionality',
            duration: '30 min',
            content: `
# Phase 3: Search

Implement the server-side search logic.

---

## Your Mission
1. Helper function \`getPosts(query)\`.
2. Prisma where clause using \`contains\`.
3. Render list of results.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Access searchParams prop',
                    completed: false,
                    regex: /searchParams\s*:\s*\{\s*q/
                },
                {
                    id: 2,
                    description: 'Prisma query with contains filter',
                    completed: false,
                    regex: /where:.*title:.*contains:/s
                },
                {
                    id: 3,
                    description: 'Map over results',
                    completed: false,
                    regex: /posts\.map/
                }
            ],
            files: [
                {
                    name: 'lib/db.ts',
                    language: 'typescript',
                    content: `// Mock Prisma Client
export const prisma = {
    post: {
        findMany: async () => [],
        findUnique: async () => null,
        create: async () => {},
        update: async () => {},
        delete: async () => {}
    }
};`
                },
                {
                    name: 'app/page.tsx',
                    language: 'tsx',
                    content: `import { prisma } from '@/lib/db';

export default async function Home({ searchParams }: { searchParams: { q?: string } }) {
    const query = searchParams.q || '';
    
    // 1. Query DB
    const posts = await prisma.post.findMany({
        
    });
    
    return (
        <div>
            {/* 2. Render List */}
            
        </div>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-7-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Admin Dashboard Requirements',
            duration: '10 min read',
            content: `
# Admin CMS

The Admin area requires:
- **Layout**: Sidebar navigation.
- **Protection**: Middleware check for role.
- **Data Mutation**: Server Actions for Create/Update/Delete.

## Server Actions (Mutation)
\`\`\`ts
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await prisma.post.create({ data: { title } });
  revalidatePath('/');
}
\`\`\`
            `
        },
        {
            id: 'nextjs-7-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 4: Create Post Action',
            duration: '35 min',
            content: `
# Phase 4: Server Actions

Create a form that submits to a Server Action to create a new post.

---

## Your Mission
1. Define a function with \`'use server'\`.
2. Extract title from formData.
3. Use the action in the form \`action\` prop.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add use server directive to function',
                    completed: false,
                    regex: /['"]use server['"]/
                },
                {
                    id: 2,
                    description: 'Get title from formData',
                    completed: false,
                    regex: /formData\.get\s*\(\s*['"]title['"]\s*\)/
                },
                {
                    id: 3,
                    description: 'Connect action to form',
                    completed: false,
                    regex: /<form\s+action=\{createPost\}/
                }
            ],
            files: [
                {
                    name: 'lib/db.ts',
                    language: 'typescript',
                    content: `// Mock Prisma Client
export const prisma = {
    post: {
        findMany: async () => [],
        findUnique: async () => null,
        create: async () => {},
        update: async () => {},
        delete: async () => {}
    }
};`
                },
                {
                    name: 'app/admin/new/page.tsx',
                    language: 'tsx',
                    content: `import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default function NewPost() {
    // 1. Server Action
    async function createPost(formData: FormData) {
        
        // 2. Logic
        
        revalidatePath('/');
    }

    return (
        // 3. Form
        <form>
            <input name="title" />
            <button>Create</button>
        </form>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Capstone Defense Quiz',
            duration: '15 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why store Search Query State in the URL instead of useState?',
                    options: [
                        'It is faster',
                        'It allows the search results to be shareable via link',
                        'Server Components cannot read useState',
                        'Both B and C'
                    ],
                    correctIndex: 3,
                    explanation: 'URL state is shareable and accessible to Server Components, enabling Server-side rendering of search results.'
                },
                {
                    id: 'q2',
                    question: 'What is MDX?',
                    options: [
                        'A database format',
                        'Markdown with embedded JSX components',
                        'A CSS preprocessor',
                        'A deployment tool'
                    ],
                    correctIndex: 1,
                    explanation: 'MDX allows you to import and use React components (like <Chart /> or <Alert />) directly inside your Markdown content.'
                },
                {
                    id: 'q3',
                    question: 'What directive is required for Server Actions?',
                    options: [
                        '"use client"',
                        '"use server"',
                        '"use action"',
                        '"server-side"'
                    ],
                    correctIndex: 1,
                    explanation: 'Server Actions function bodies must start with "use server" if defined inline, or the file must start with it.'
                }
            ]
        }
    ]
};
