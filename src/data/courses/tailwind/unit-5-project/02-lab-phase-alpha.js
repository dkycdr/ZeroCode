import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1PhaseAlpha = {
    id: 'tailwind-5-phase-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Phase Alpha: Navigation & Hero System ⚡',
    duration: '30 min',
    content: `
# Phase Alpha: Navigation & Hero System ⚡

## Mission Objective
Build the "Above the Fold" section — the first thing users see.
This includes:
1.  A sticky nav that follows them down the page
2.  A hero section that clearly explains the product value

## Part 1: The Sticky Glassmorphism Nav

**The Effect:** As you scroll, the navbar stays at the top with a frosted glass effect.

**Key Classes:**
*   \`fixed w-full top-0 z-50\` — Pin to top, above everything
*   \`bg-white/90\` — 90% opacity white (the "glass")
*   \`backdrop-blur-md\` — Blurs content behind it (the "frost")
*   \`border-b border-slate-200\` — Subtle bottom border

## Part 2: The Responsive Hero

**Mobile Strategy:**
\`\`\`
[ Headline ]
[ Subtext  ]
[ CTA      ]
[ Image    ]
\`\`\`

**Desktop Strategy:**
\`\`\`
[ Headline | Image ]
[ Subtext  | Image ]
[ CTA      | Image ]
\`\`\`

**Implementation:**
*   \`flex flex-col lg:flex-row\` — Stack on mobile, side-by-side on large screens
*   \`gap-12\` — Generous spacing
*   \`pt-32\` — Push down from navbar (since nav is fixed)

## Part 3: The Gradient CTA

**Psychology:** Gradients feel more "high-tech" than flat colors.

\`\`\`html
<button class="bg-gradient-to-r from-indigo-600 to-purple-600 
               text-white px-8 py-4 rounded-xl font-bold 
               shadow-lg hover:shadow-xl transform hover:-translate-y-1 
               transition-all">
  Start Free Trial
</button>
\`\`\`
    `,
    tasks: [
        {
            id: 1,
            description: 'Nav: fixed w-full backdrop-blur-md bg-white/90',
            completed: false,
            regex: /<nav[^>]*class=["'](?=.*\bfixed\b)(?=.*\bw-full\b)(?=.*\bbackdrop-blur-md\b)(?=.*\bbg-white\/90\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Hero Layout: flex flex-col lg:flex-row items-center gap-12',
            completed: false,
            regex: /<section[^>]*class=["'](?=.*\bflex\b)(?=.*\bflex-col\b)(?=.*\blg:flex-row\b)(?=.*\bitems-center\b)(?=.*\bgap-12\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Gradient Button: bg-gradient-to-r from-indigo-600 to-purple-600',
            completed: false,
            regex: /<button[^>]*class=["'](?=.*\bbg-gradient-to-r\b)(?=.*\bfrom-indigo-600\b)(?=.*\bto-purple-600\b)[^"']*["']/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-slate-50">
    <!-- Task 1: Sticky Nav -->
    <nav class="border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span class="font-bold text-xl text-indigo-600">ZeroSaaS</span>
            <button class="bg-black text-white px-4 py-2 rounded-lg">Get Started</button>
        </div>
    </nav>

    <!-- Task 2: Hero Section -->
    <section class="max-w-7xl mx-auto px-6">
        <div>
            <h1 class="text-5xl font-black text-slate-900">Automate Your Future</h1>
            <p class="mt-4 text-xl text-slate-600">AI-powered workflow automation for modern teams.</p>
            
            <!-- Task 3: Gradient CTA -->
            <button class="mt-8 text-white px-8 py-4 rounded-xl font-bold shadow-lg">
                Start Free Trial →
            </button>
        </div>
        <div>
            <div class="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl"></div>
        </div>
    </section>
</body>
</html>`
        }
    ]
};
