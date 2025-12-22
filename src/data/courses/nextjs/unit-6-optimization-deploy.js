import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6OptimizationDeploy = {
    id: 'nextjs-unit-6',
    title: 'Optimization & Deployment',
    description: 'Master Core Web Vitals, Code Splitting, Lazy Loading, and Vercel Deployment strategies.',
    items: [
        {
            id: 'nextjs-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Core Web Vitals & Next.js',
            duration: '15 min read',
            content: `
# Core Web Vitals (CWV)

Google ranks sites based on user experience metrics. Next.js optimizes for these by default.

## 1. Largest Contentful Paint (LCP)
**Loading Performance**. Time until largest element (hero image/text) is visible.
- *Next.js Helper*: The \`<Image priority />\` tag preloads critical images.

## 2. First Input Delay (FID) -> Interaction to Next Paint (INP)
**Interactivity**. Time from click to browser executing handler.
- *Next.js Helper*: Code splitting reduces the main thread blocking time.

## 3. Cumulative Layout Shift (CLS)
**Visual Stability**. Elements moving around unexpectedly.
- *Next.js Helper*: \`next/font\` and \`next/image\` reserve space automatically to prevent shifts.

## Measuring
Use the \`useReportWebVitals\` hook to log analytics to your backend.
            `
        },
        {
            id: 'nextjs-6-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Optimizing Fonts',
            duration: '20 min',
            content: `
# Optimizing Fonts

Using standard \`@font-face\` causes a "Flash of Unstyled Text" (FOUT) or invisible text.
\`next/font\` downloads Google Fonts at build time and self-hosts them with zero layout shift.

---

## Your Mission
1. Import \`Roboto\` from \`next/font/google\`.
2. Configure it with variable weight.
3. Apply it to a heading.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Roboto font loader',
                    completed: false,
                    regex: /import\s+\{\s*Roboto\s*\}\s+from\s+['"]next\/font\/google['"]/
                },
                {
                    id: 2,
                    description: 'Configure font: subsets latin, weight 400',
                    completed: false,
                    regex: /const\s+roboto\s*=\s*Roboto\s*\(/
                },
                {
                    id: 3,
                    description: 'Apply className to element',
                    completed: false,
                    regex: /<h1\s+className=\{roboto\.className\}/
                }
            ],
            files: [
                {
                    name: 'app/about/page.tsx',
                    language: 'tsx',
                    content: `// 1. Import


// 2. Configure
const roboto = ;

export default function About() {
    return (
        // 3. Apply
        <h1>About Us</h1>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-6-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Lazy Loading & Code Splitting',
            duration: '15 min read',
            content: `
# Lazy Loading

By default, everything imported in a Client Component is bundled together.
If you have a huge modal or heavy chart, you don't want to load it until the user sees it.

## dynamic() Import

Next.js provides \`next/dynamic\` (wrapper around React.lazy + Suspense).

\`\`\`tsx
import dynamic from 'next/dynamic'
 
const HeavyChart = dynamic(() => import('../components/HeavyChart'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Optional: Disable server rendering for this component
})
 
export default function Page() {
  return <HeavyChart />
}
\`\`\`

This splits \`HeavyChart\` into a separate JS chunk that is only fetched when \`<Page>\` renders.
            `
        },
        {
            id: 'nextjs-6-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Implementing Dynamic Imports',
            duration: '25 min',
            content: `
# Implementing Dynamic Imports

You have a heavy "Map" component. Let's load it lazily.

---

## Your Mission
1. Import \`dynamic\` from \`next/dynamic\`.
2. Create a dynamic component for \`./Map\`.
3. Provide a loading fallback.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import dynamic function',
                    completed: false,
                    regex: /import\s+dynamic\s+from\s+['"]next\/dynamic['"]/
                },
                {
                    id: 2,
                    description: 'Call dynamic() with import callback',
                    completed: false,
                    regex: /const\s+Map\s*=\s*dynamic\s*\(\s*\(\)\s*=>\s*import/
                },
                {
                    id: 3,
                    description: 'Add loading option',
                    completed: false,
                    regex: /loading:\s*\(\)\s*=>/
                }
            ],
            files: [
                {
                    name: 'components/Location.tsx',
                    language: 'tsx',
                    content: `// 1. Import


// 2. Create Dynamic Component
const Map = 

export default function Location() {
    return (
        <div>
           <Map />
        </div>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-6-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Third Party Scripts',
            duration: '15 min read',
            content: `
# Optimization: Third Party Scripts

Scripts like Google Analytics, Ads, or Chat Widgets are performance killers.
You can optimize them using the Strategy pattern.

## Strategies
- \`beforeInteractive\`: Load before hydration (Rare, e.g., bot detection).
- \`afterInteractive\`: (Default) Load after page is interactive.
- \`lazyOnload\`: Load during idle time (Chat widgets).
- \`worker\`: (Experimental) Load in a web worker.

\`\`\`tsx
<Script 
  src="https://..." 
  strategy="lazyOnload" 
  onLoad={() => console.log('Loaded!')} 
/>
\`\`\`
            `
        },
        {
            id: 'nextjs-6-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Script Component Strategies',
            duration: '20 min',
            content: `
# Script Strategies

Let's add a "Support Chat" widget using lazy loading so it doesn't slow down the page.

---

## Your Mission
1. Import \`Script\`.
2. Add src url.
3. Set strategy to \`lazyOnload\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Script component',
                    completed: false,
                    regex: /import\s+Script\s+from\s+['"]next\/script['"]/
                },
                {
                    id: 2,
                    description: 'Render Script with src',
                    completed: false,
                    regex: /<Script\s+src=['"].*['"]/
                },
                {
                    id: 3,
                    description: 'Set strategy to lazyOnload',
                    completed: false,
                    regex: /strategy=['"]lazyOnload['"]/
                }
            ],
            files: [
                {
                    name: 'app/layout.tsx',
                    language: 'tsx',
                    content: `// 1. Import


export default function RootLayout({ children }:any) {
    return (
        <html>
            <body>
                {children}
                {/* 2. Add Script */}
                
            </body>
        </html>
    )
}
`
                }
            ]
        },
        {
            id: 'nextjs-6-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Vercel Deployment Pipeline',
            duration: '15 min read',
            content: `
# Vercel Deployment

Vercel is the native cloud for Next.js.
It provides:
1.  **Zero Config**: Detects Next.js and builds automatically.
2.  **Preview Deployments**: Every Push to a branch gets a live URL.
3.  **Edge Network**: SSR and API routes run on CDN edges.

## Deployment Steps
1.  Push code to GitHub/GitLab.
2.  Import project in Vercel Dashboard.
3.  Add Environment Variables.
4.  Deploy.

## Build Command
Next.js standard build command:
\`npm run build\` -> \`next build\`

This creates the \`.next\` folder containing the optimized production build.
            `
        },
        {
            id: 'nextjs-6-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Configuring next.config.js',
            duration: '25 min',
            content: `
# Configuring next.config.js

Sometimes you need custom build configuration like redirects or image domains.

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'example.com' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/old-blog',
        destination: '/new-blog',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
\`\`\`

---

## Your Mission
1. Configure \`images.remotePatterns\` to allow 'aws.s3.com'.
2. Add a redirect from \`/home\` to \`/\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add remote pattern for aws.s3.com',
                    completed: false,
                    regex: /remotePatterns.*hostname.*['"]aws\.s3\.com['"]/s
                },
                {
                    id: 2,
                    description: 'Add redirects async function',
                    completed: false,
                    regex: /async\s+redirects\(\)/
                },
                {
                    id: 3,
                    description: 'Return redirect object',
                    completed: false,
                    regex: /source.*destination.*permanent/s
                }
            ],
            files: [
                {
                    name: 'next.config.js',
                    language: 'js',
                    content: `const nextConfig = {
    // 1. Images
    images: {
        
    },
    
    // 2. Redirects
    
}
module.exports = nextConfig
`
                }
            ]
        },
        {
            id: 'nextjs-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'DevOps Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which strategy should you use for a low-priority Chat Widget script?',
                    options: [
                        'beforeInteractive',
                        'afterInteractive',
                        'lazyOnload',
                        'blocking'
                    ],
                    correctIndex: 2,
                    explanation: 'lazyOnload ensures the script is fetched and executed during idle time, ensuring it does not impact LCP or TTI.'
                },
                {
                    id: 'q2',
                    question: 'What is Cumulative Layout Shift (CLS)?',
                    options: [
                        'The time it takes to load images',
                        'When elements move around visibly while the page loads',
                        'The total size of the JS bundle',
                        'The delay after clicking a button'
                    ],
                    correctIndex: 1,
                    explanation: 'CLS measures visual stability. It increases when elements (like images without dimensions) push other content down as they load.'
                },
                {
                    id: 'q3',
                    question: 'How does next/font optimize fonts?',
                    options: [
                        'It downloads them at request time',
                        'It pre-downloads them at build time and hosts them locally',
                        'It uses a CDN',
                        'It changes the font family'
                    ],
                    correctIndex: 1,
                    explanation: 'Next.js downloads the font file at build time, hosts it with your other assets, and uses CSS size-adjust to prevent layout shift.'
                }
            ]
        }
    ]
};
