import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2PhaseBeta = {
    id: 'tailwind-5-phase-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Phase Beta: Component Grid Architecture 🏗️',
    duration: '30 min',
    content: `
# Phase Beta: Component Grid Architecture 🏗️

## Mission Objective
Build the "Social Proof" section — a responsive grid showing your product's key features.
This is where you convince visitors that your product is legitimate.

## The Psychology of 3 Columns
**Why 3?** Because humans process information in groups of 3 better than 2 or 4.
*   **2 Columns**: Feels incomplete (where's the third?)
*   **3 Columns**: Feels complete, balanced, professional
*   **4 Columns**: Starts to feel cluttered on desktop

## Responsive Breakpoints

| Screen | Columns | Logic |
|:-------|:--------|:------|
| Mobile (< 768px) | 1 | Stack everything. No mental overload. |
| Tablet (768px+) | 2 | Can fit 2 side-by-side comfortably. |
| Desktop (1024px+) | 3 | Full grid experience. |

**Implementation:**
\`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\`

## The Card Design Pattern

### Base Card
White background, rounded corners, subtle shadow, generous padding.

\`\`\`html
<div class="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
\`\`\`

### The Hover Effect
When users hover, the card should "lift" off the page.

\`\`\`html
<div class="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
\`\`\`

**Physics Explanation:**
*   \`-translate-y-1\`: Move up by 0.25rem
*   \`shadow-xl\`: Larger shadow = appears higher
*   \`transition-all\`: Smoothly animate the change
*   \`duration-300\`: 300ms feels natural (not too slow, not too fast)

## The Icon Strategy
Don't use emoji for a professional SaaS. Use proper icon containers.

\`\`\`html
<div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg 
             flex items-center justify-center text-2xl font-bold">
  →
</div>
\`\`\`

**Why this works:**
*   \`bg-indigo-50\`: Subtle brand-colored background
*   \`text-indigo-600\`: Darker brand text for contrast
*   \`rounded-lg\`: Softer than emoji
*   \`flex items-center justify-center\`: Perfect centering
    `,
    tasks: [
        {
            id: 1,
            description: 'Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
            completed: false,
            regex: /class=["'](?=.*\bgrid\b)(?=.*\bgrid-cols-1\b)(?=.*\mmd:grid-cols-2\b)(?=.*\blg:grid-cols-3\b)(?=.*\bgap-8\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Card: hover:shadow-xl hover:-translate-y-1 transition-all',
            completed: false,
            regex: /class=["'](?=.*\bhover:shadow-xl\b)(?=.*\bhover:-translate-y-1\b)(?=.*\btransition-all\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Icon Box: w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg',
            completed: false,
            regex: /class=["'](?=.*\bw-12\b)(?=.*\bh-12\b)(?=.*\bbg-indigo-50\b)(?=.*\btext-indigo-600\b)(?=.*\brounded-lg\b)[^"']*["']/
        }
    ],
    files: [
        {
            name: 'features.html',
            language: 'html',
            content: `<div class="py-20 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Why Teams Choose ZeroSaaS</h2>
        
        <!-- Task 1: The Grid -->
        <div class="">
            <!-- Task 2 & 3: Card 1 -->
            <div class="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div class="">🚀</div>
                <h3 class="mt-4 text-xl font-bold text-slate-900">Lightning Fast</h3>
                <p class="mt-2 text-slate-600">Deploy in seconds, not hours.</p>
            </div>
            
            <!-- Card 2 -->
            <div class="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div class="">🔒</div>
                <h3 class="mt-4 text-xl font-bold text-slate-900">Bank-Level Security</h3>
                <p class="mt-2 text-slate-600">SOC 2 Type II certified.</p>
            </div>
            
            <!-- Card 3 -->
            <div class="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div class="">📊</div>
                <h3 class="mt-4 text-xl font-bold text-slate-900">Real-Time Analytics</h3>
                <p class="mt-2 text-slate-600">See impact instantly.</p>
            </div>
        </div>
    </div>
</div>`
        }
    ]
};
