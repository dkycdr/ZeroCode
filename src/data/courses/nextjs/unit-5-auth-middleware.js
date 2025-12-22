import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5AuthMiddleware = {
    id: 'nextjs-unit-5',
    title: 'Authentication & Security',
    description: 'Secure your Next.js application with NextAuth.js (Auth.js), Middleware, and Role-Based Access Control.',
    items: [
        {
            id: 'nextjs-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Authentication Patterns',
            duration: '15 min read',
            content: `
# Authentication in Next.js

## The Challenge
Auth in Next.js is complex because we have both Server (API/RSC) and Client envs. 
We need:
1.  **Session handling** (Cookies/JWT).
2.  **Protection** (Redirecting unauth users).
3.  **Access** (Getting user info in components).

## Solution: NextAuth.js (Auth.js)

The standard solution. It handles:
- OAuth (Google, GitHub, etc).
- Email/Password (Credentials).
- Session persistence.
- Database adapters.

## How it fits
1.  **API Route**: \`/api/auth/[...nextauth]/route.ts\` handles login/logout/callback logic.
2.  **Middleware**: Checks cookies on every request to protect pages.
3.  **Hooks**: \`useSession()\` for Client Components.
4.  **Helper**: \`getServerSession()\` for Server Components.
            `
        },
        {
            id: 'nextjs-5-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Setting up NextAuth.js configuration',
            duration: '30 min',
            content: `
# Setting up NextAuth.js

You need to create a catch-all API route handler.

\`\`\`ts
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
       // Configuration...
    })
  ]
})

export { handler as GET, handler as POST }
\`\`\`

---

## Your Mission
1. Import \`NextAuth\`.
2. Configure the \`CredentialsProvider\`.
3. Export the handler as GET and POST.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import NextAuth',
                    completed: false,
                    regex: /import\s+NextAuth\s+from\s+['"]next-auth['"]/
                },
                {
                    id: 2,
                    description: 'Initialize NextAuth with empty providers array',
                    completed: false,
                    regex: /NextAuth\s*\(\s*\{\s*providers\s*:\s*\[.*\]/s
                },
                {
                    id: 3,
                    description: 'Export handler as GET and POST',
                    completed: false,
                    regex: /export\s+\{\s*handler\s+as\s+GET,\s*handler\s+as\s+POST\s*\}/
                }
            ],
            files: [
                {
                    name: 'app/api/auth/[...nextauth]/route.ts',
                    language: 'ts',
                    content: `// 1. Imports


// 2. Setup Handler
const handler = NextAuth({
    providers: []
});

// 3. Export
`
                }
            ]
        },
        {
            id: 'nextjs-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Middleware Deep Dive',
            duration: '20 min read',
            content: `
# Middleware

Middleware (\`middleware.ts\`) runs **before** a request completes. 
It sits between the user and your route.
It runs on the **Edge Runtime** (limited API, super fast).

## Use Cases
1.  **Auth**: Redirect if not logged in.
2.  **Bot Detection**: Block scrapers.
3.  **Localization**: Rewrite \`/\` to \`/en-US\`.
4.  **A/B Testing**: Rewrite to variant A or B.

## Matchers
Configuring \`matcher\` prevents middleware from running on static assets (images, css), saving resources.

\`\`\`ts
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
\`\`\`
            `
        },
        {
            id: 'nextjs-5-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Writing Route Protection Middleware',
            duration: '25 min',
            content: `
# Writing Middleware

Let's protect \`/dashboard\`. If no cookie \`auth-token\`, redirect to \`/login\`.

\`\`\`ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  
  if (!token) {
     return NextResponse.redirect(new URL('/login', request.url))
  }
}
\`\`\`

---

## Your Mission
1. Check for specific cookie.
2. Use \`NextResponse.redirect\` if missing.
3. Return \`NextResponse.next()\` if present.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Get cookie named "session"',
                    completed: false,
                    regex: /request\.cookies\.get\s*\(\s*['"]session['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Redirect to /login if no session',
                    completed: false,
                    regex: /NextResponse\.redirect\(.*login.*\)/
                },
                {
                    id: 3,
                    description: 'Allow request to proceed',
                    completed: false,
                    regex: /NextResponse\.next\(\)/
                }
            ],
            files: [
                {
                    name: 'middleware.ts',
                    language: 'ts',
                    content: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // 1. Check Cookie
    
    // 2. Redirect Logic
    if (false) {
        
    }
    
    // 3. Continue
    
}
`
                }
            ]
        },
        {
            id: 'nextjs-5-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Protecting Server Actions & APIs',
            duration: '15 min read',
            content: `
# Protecting Backends

Middleware is layer 1 (Routing). 
But you must also protect the actual logic (Layer 2).

## API Routes & Server Actions

Always verify the user **inside** the function too.

\`\`\`ts
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  
  // Safe to proceed
}
\`\`\`
            `
        },
        {
            id: 'nextjs-5-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Role-Based Access Control (RBAC)',
            duration: '25 min',
            content: `
# Role-Based Access Control

Checking "Is Logged In" is easy. 
Checking "Is Admin" is harder. 

We typically store the \`role\` in the session token.

---

## Your Mission
1. Mock \`getServerSession\`.
2. Check if \`session.user.role === 'admin'\`.
3. Return 403 Forbidden if not admin.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Get session from auth helper',
                    completed: false,
                    regex: /const\s+session\s*=\s*await\s+getServerSession\(\)/
                },
                {
                    id: 2,
                    description: 'Check if role is "admin"',
                    completed: false,
                    regex: /organization.*role.*===.*['"]admin['"]/
                },
                {
                    id: 3,
                    description: 'Return 403 error response',
                    completed: false,
                    regex: /status:\s*403/
                }
            ],
            files: [
                {
                    name: 'app/api/admin/delete/route.ts',
                    language: 'ts',
                    content: `import { NextResponse } from 'next/server';

const getServerSession = async () => ({ user: { role: 'user' } }); // Mock

export async function DELETE() {
    // 1. Get Session
    
    // 2. Check Role
    if (true) {
        // 3. Return Error
        
    }
    
    return NextResponse.json({ deleted: true });
}
`
                }
            ]
        },
        {
            id: 'nextjs-5-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Environment Variables & Security',
            duration: '15 min read',
            content: `
# Environment Variables

## Types
1.  **Public**: Prefix with \`NEXT_PUBLIC_\`. Available in browser bundle.
    -   Ex: \`NEXT_PUBLIC_ANALYTICS_ID\`
2.  **Private**: No prefix. Only available on server.
    -   Ex: \`DATABASE_PASSWORD\`

## Risk
Accessing a private var in a Client Component file usually makes it \`undefined\` (safe), but Next.js will warn you. 
If you accidentally pass it as a prop to a client component, you leak it.

## Best Practice
Use a \`env.ts\` schema validator (like T3 Env) to ensure vars exist and simulate type safety.
            `
        },
        {
            id: 'nextjs-5-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Security Headers',
            duration: '20 min',
            content: `
# Security Headers

We configure global headers in \`next.config.js\`.
Common headers:
- **X-Frame-Options**: Prevent clickjacking (iframe embedding).
- **Content-Security-Policy**: Prevent XSS.

---

## Your Mission
1. Modify \`next.config.js\`.
2. Use the \`headers\` async function.
3. Apply headers to \`source: '/:path*'\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define async headers function',
                    completed: false,
                    regex: /async\s+headers\(\)/
                },
                {
                    id: 2,
                    description: 'Return array with source matching all paths',
                    completed: false,
                    regex: /source\s*:\s*['"]\/:path\*['"]/
                },
                {
                    id: 3,
                    description: 'Set X-Frame-Options to DENY',
                    completed: false,
                    regex: /key.*X-Frame-Options.*value.*DENY/s
                }
            ],
            files: [
                {
                    name: 'next.config.js',
                    language: 'js',
                    content: `module.exports = {
    // 1. Implement headers
    
        return [
            {
                // 2. Source
                
                headers: [
                    // 3. Headers
                    
                ]
            }
        ]
    
};
`
                }
            ]
        },
        {
            id: 'nextjs-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Security Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Where does Middleware run in Next.js?',
                    options: [
                        'In the user\'s browser',
                        'On the Node.js origin server only',
                        'On the Edge Runtime (before the request hits the cache/origin)',
                        'Inside the database'
                    ],
                    correctIndex: 2,
                    explanation: 'Middleware runs on the Edge, allowing it to intercept requests globally with minimal latency.'
                },
                {
                    id: 'q2',
                    question: 'How do you expose an environment variable to the Browser?',
                    options: [
                        'It is automatic',
                        'Prefix with NEXT_PUBLIC_',
                        'Prefix with PUBLIC_',
                        'Listing it in next.config.js'
                    ],
                    correctIndex: 1,
                    explanation: 'Only variables starting with NEXT_PUBLIC_ are inlined into the JavaScript bundle sent to the client.'
                },
                {
                    id: 'q3',
                    question: 'If you protect a page with Middleware, is your API secure?',
                    options: [
                        'Yes, Middleware covers everything',
                        'No, a user could manually curl/fetch the API endpoint',
                        'Yes, cookies are encrypted',
                        'No, unless you use HTTPS'
                    ],
                    correctIndex: 1,
                    explanation: 'Middleware routing protection is not enough. You must also check authentication inside the API route / Server Action logic.'
                }
            ]
        }
    ]
};
