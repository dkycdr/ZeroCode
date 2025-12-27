import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3ApiRoutes = {
    id: 'nextjs-unit-3',
    title: 'API Routes & Backend',
    description: 'Learn to build a full-featured REST API directly inside Next.js using Route Handlers.',
    items: [
        {
            id: 'nextjs-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Route Handlers Anatomy',
            duration: '15 min read',
            content: `
# Route Handlers

Next.js isn't just a frontend framework; it's a backend too. 
You can define API endpoints using \`route.ts\` files inside \`app/\`.

## Naming Convention

Unlike \`page.tsx\`, which exports a React component, \`route.ts\` exports **Async Functions** named after HTTP verbs:

\`\`\`ts
// app/api/hello/route.ts

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello World' });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'Created' });
}
\`\`\`

Supported methods: \`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`, \`HEAD\`, \`OPTIONS\`.

## The Request Object

The first argument is the standard Web \`Request\` object (not an Express req object).

\`\`\`ts
export async function POST(request: Request) {
  // Reading Body
  const body = await request.json();
  
  // Reading Headers
  const auth = request.headers.get('Authorization');
  
  // Reading Cookies
  const cookie = request.cookies.get('session');
  
  // Reading Query Params
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
}
\`\`\`

## The Response Object

Use \`NextResponse\` (extends standard Response) for helper methods:
- \`NextResponse.json({ ... })\`
- \`NextResponse.redirect(url)\`
- \`NextResponse.rewrite(url)\`
            `
        },
        {
            id: 'nextjs-3-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building a CRUD API',
            duration: '30 min',
            content: `
# Building a CRUD API

Let's build a simple Todo API.
Route: \`/api/todos\`

## Handling GET and POST

\`\`\`ts
// app/api/todos/route.ts
import { NextResponse } from 'next/server';

const todos = []; // In-memory DB

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const body = await request.json();
  todos.push(body);
  return NextResponse.json(body, { status: 201 });
}
\`\`\`

---

## Your Mission
1. Create a \`GET\` handler that returns a hardcoded list of users.
2. Create a \`POST\` handler that parses the JSON body.
3. Return the parsed body with a \`201 Created\` status code.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Export an async function named GET',
                    completed: false,
                    regex: /export\s+async\s+function\s+GET/
                },
                {
                    id: 2,
                    description: 'Return a boolean success response from GET',
                    completed: false,
                    regex: /NextResponse\.json\s*\(\s*\[.*\]\s*\)/
                },
                {
                    id: 3,
                    description: 'Export an async function named POST',
                    completed: false,
                    regex: /export\s+async\s+function\s+POST/
                },
                {
                    id: 4,
                    description: 'Parse request.json() and return it with status 201',
                    completed: false,
                    regex: /NextResponse\.json.*status\s*:\s*201/
                }
            ],
            files: [
                {
                    name: 'app/api/users/route.ts',
                    language: 'ts',
                    content: `import { NextResponse } from 'next/server';

const mockUsers = [{id: 1, name: 'Alice'}];

// 1. GET Handler


// 2. POST Handler
`
                }
            ]
        },
        {
            id: 'nextjs-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Dynamic API Segments',
            duration: '15 min read',
            content: `
# Dynamic API Segments

Just like dynamic pages (\`[id]/page.tsx\`), you can have dynamic API routes (\`[id]/route.ts\`).

## Context Argument

The *second* argument to the handler is the \`context\` object, containing \`params\`.

\`\`\`ts
// app/api/users/[id]/route.ts

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  
  // Fetch user from DB
  const user = db.find(userId);
  
  if (!user) {
    return NextResponse.json(
      { error: 'User not found' }, 
      { status: 404 }
    );
  }
  
  return NextResponse.json(user);
}
\`\`\`

## Common Patterns

1.  **Individual Operations**: PUT (update), DELETE (remove), GET (fetch one) usually live in dynamic routes.
2.  **Validating ID**: Always check if the resource for that ID exists before proceeding.
            `
        },
        {
            id: 'nextjs-3-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Implementing Delete & Update',
            duration: '25 min',
            content: `
# Implementing Delete & Update

API design best practices:
- **PUT**: Fully replace resource.
- **PATCH**: Partially update resource.
- **DELETE**: Remove resource.

## Status Codes
- 200 OK: Successful update with content returned.
- 204 No Content: Successful deletion (nothing to return).
- 404 Not Found: ID doesn't exist.

---

## Your Mission
1. Create a dynamic route handler structure.
2. Implement a DELETE function.
3. Access \`params.id\`.
4. Return a 204 No Content response.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Export async function DELETE',
                    completed: false,
                    regex: /export\s+async\s+function\s+DELETE/
                },
                {
                    id: 2,
                    description: 'Accept params as second argument',
                    completed: false,
                    regex: /DELETE\s*\(\s*\w+\s*,\s*\{\s*params\s*\}\s*\)/
                },
                {
                    id: 3,
                    description: 'Return a NextResponse with status 204 (and null or empty body)',
                    completed: false,
                    regex: /NextResponse.*status\s*:\s*204/
                }
            ],
            files: [
                {
                    name: 'app/api/items/[id]/route.ts',
                    language: 'ts',
                    content: `import { NextResponse } from 'next/server';

// Handle DELETE /api/items/123
export async function DELETE(req: Request, context: any) {
    // 1. Get ID from params
    
    // 2. Perform mock delete
    console.log("Deleting item...");
    
    // 3. Return 204
    
}
`
                }
            ]
        },
        {
            id: 'nextjs-3-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Backend Validation with Zod',
            duration: '20 min read',
            content: `
# Backend Validation

Never trust client input. Always validate the request body before processing it. 
**Zod** is the industry standard for schema validation in TypeScript.

## Setting up Zod

\`\`\`ts
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().optional()
});

export async function POST(req: Request) {
  const body = await req.json();
  
  // Parse & Validate
  const result = createUserSchema.safeParse(body);
  
  if (!result.success) {
    // Return Validation Errors
    return NextResponse.json(
      { errors: result.error.flatten() }, 
      { status: 400 }
    );
  }
  
  // result.data is now typed and safe!
  const newUser = await db.create(result.data);
  return NextResponse.json(newUser);
}
\`\`\`
            `
        },
        {
            id: 'nextjs-3-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Validating API Data',
            duration: '25 min',
            content: `
# Validating API Data

We will implement a schema for a "Product" upload endpoint.
Product needs:
- name (string, min 3 chars)
- price (number, positive)
- inStock (boolean)

---

## Your Mission
1. Define a Zod schema matching the requirements.
2. Use \`safeParse\` inside the POST handler.
3. Return 400 if validation fails.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Zod and define schema',
                    completed: false,
                    regex: /z\.object/
                },
                {
                    id: 2,
                    description: 'Schema: name string min(3), price number positive',
                    completed: false,
                    regex: /name.*string.*min\(3\).*price.*number.*positive/s
                },
                {
                    id: 3,
                    description: 'Check result.success inside handler',
                    completed: false,
                    regex: /if\s*\(\s*!result\.success\s*\)/
                }
            ],
            files: [
                {
                    name: 'app/api/products/route.ts',
                    language: 'ts',
                    content: `import { NextResponse } from 'next/server';
import { z } from 'zod';

// 1. Define Schema
const productSchema = z.object({
    // name, price, inStock
});

export async function POST(req: Request) {
    const body = await req.json();
    
    // 2. Validate
    const result = productSchema.safeParse(body);
    
    // 3. Handle Error
    
    
    return NextResponse.json({ success: true });
}
`
                }
            ]
        },
        {
            id: 'nextjs-3-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Edge vs Node.js Runtime',
            duration: '15 min read',
            content: `
# Runtimes: Edge vs Node.js

Next.js gives you a choice of server runtimes for your API routes.

## Node.js Runtime (Default)
- **Features**: Full Node.js API support (fs, child_process, all npm packages).
- **Startup**: Slower cold starts.
- **Location**: Typically runs in a single region (e.g., us-east-1).
- **Use Case**: Connecting to standard SQL databases (Postgres), using heavy libraries.

## Edge Runtime
- **Features**: Limited web-standard APIs (Fetch, Request, Response). No FS access.
- **Startup**: Instant. Zero cold starts.
- **Location**: Distributed globally (CDN edges close to user).
- **Use Case**: Middleware, simple logic, redist with Upstash/Cloudflare.

### Configuration
\`\`\`ts
export const runtime = 'edge'; // or 'nodejs'
\`\`\`
            `
        },
        {
            id: 'nextjs-3-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Connecting to a Database',
            duration: '30 min',
            content: `
# Connecting to a Database

In a Next.js Server environment (API or Server Component), we can connect securely to a database.
We often use an ORM like **Prisma** or **Drizzle**.

## Prisma Example

\`\`\`ts
// lib/prisma.ts (Singleton pattern to prevent connection exhaustion)
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
\`\`\`

\`\`\`ts
// app/api/posts/route.ts
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}
\`\`\`

---

## Your Mission
1. Create a simulation of a database query.
2. Ensure secrets (connection string) are simulated (accessed via process.env).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Access process.env.DATABASE_URL',
                    completed: false,
                    regex: /process\.env\.DATABASE_URL/
                },
                {
                    id: 2,
                    description: 'Simulate a DB query with async/await',
                    completed: false,
                    regex: /await\s+db\.query/
                }
            ],
            files: [
                {
                    name: 'app/api/db-test/route.ts',
                    language: 'ts',
                    content: `import { NextResponse } from 'next/server';

// Mock DB Driver
const db = { query: async (sql: string) => [{ id: 1, rows: true }] };

export async function GET() {
    // 1. Check Env
    const dbUrl = process.env.DATABASE_URL;
    
    // 2. Query
    const results = await db.query('SELECT * FROM users');
    
    return NextResponse.json(results);
}
`
                }
            ]
        },
        {
            id: 'nextjs-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'API Development Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the correct filename for an API endpoint in App Router?',
                    options: [
                        'api.ts',
                        'server.ts',
                        'route.ts',
                        'handler.ts'
                    ],
                    correctIndex: 2,
                    explanation: 'API endpoints must be named `route.ts` (or .js) and located in the `app/` directory.'
                },
                {
                    id: 'q2',
                    question: 'How do you access the JSON body of a request?',
                    options: [
                        'request.body',
                        'await request.json()',
                        'request.data',
                        'JSON.parse(request)'
                    ],
                    correctIndex: 1,
                    explanation: 'The Request object is a standard Web Request. Use `await request.json()` to parse the stream.'
                },
                {
                    id: 'q3',
                    question: 'Which status code represents "Created Successfully"?',
                    options: [
                        '200',
                        '201',
                        '204',
                        '301'
                    ],
                    correctIndex: 1,
                    explanation: '201 Created is the standard HTTP response for successful resource creation (POST).'
                }
            ]
        }
    ]
};
