import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1MagazineLayout = {
    id: 'css-unit16-lab-magazine',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: The Modern Magazine (Grid Areas)',
    duration: '35 min',
    content: `
# The Modern Magazine

We are building the front page of "Tech_Futura".
We need a layout that morphs completely from Mobile (Single Column) to Desktop (Complex Grid) using **Grid Areas**.

## Aesthetic Goals
*   **Header**: Bold, Spans full width.
*   **Sidebar**: Sticky advertising rail.
*   **Main**: Comfortable reading width.
*   **Footer**: Data dense.

## Your Job
1.  Define the \`grid-template-areas\` for Mobile.
2.  Redefine them for Desktop (\`@media min-width: 800px\`).
    `,
    tasks: [
        {
            id: 1,
            description: 'Assign Area Names: Give .header output `head`, .sidebar `side`, .main `main`, .footer `foot`.',
            completed: false,
            regex: /(\.header\s*\{[^}]*grid-area:\s*head)|(\.sidebar\s*\{[^}]*grid-area:\s*side)|(\.main\s*\{[^}]*grid-area:\s*main)|(\.footer\s*\{[^}]*grid-area:\s*foot)/g // Simple check, real logic checks all
        },
        {
            id: 2,
            description: 'Mobile Map: Set grid-template-areas to stack them vertically ("head" "main" "side" "foot").',
            completed: false,
            regex: /grid-template-areas\s*:\s*['"]head['"]\s*['"]main['"]\s*['"]side['"]\s*['"]foot['"]/
        },
        {
            id: 3,
            description: 'Desktop Map: Inside the media query, rearrange to ("head head" "side main").',
            completed: false,
            regex: /grid-template-areas\s*:\s*['"]head\s+head['"]\s*['"]side\s+main['"]/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="layout">
    <header class="header">
        <h1>TECH_FUTURA</h1>
    </header>
    <aside class="sidebar">
        <div class="ad-box">AD</div>
        <div class="ad-box">AD</div>
    </aside>
    <main class="main">
        <article>
            <h2>The Future of Grid</h2>
            <p>Why mathematics is replacing pixel pushing in modern web design...</p>
        </article>
        <div class="card-grid">
            <div class="mini-card"></div>
            <div class="mini-card"></div>
            <div class="mini-card"></div>
        </div>
    </main>
    <footer class="footer">
        &copy; 2024 Tech_Futura Inc.
    </footer>
</div>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background: #111; /* Dark Mode Aesthetics */
    color: #eee;
}

.layout {
    display: grid;
    gap: 1.5rem;
    padding: 1.5rem;
    height: 100vh;
    /* TODO: Set Default Mobile Grid Areas Here */
    
}

/* --- Components Styling --- */
.header {
    background: linear-gradient(135deg, #6366f1, #a855f7);
    padding: 2rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
    /* TODO: grid-area */
}

.sidebar {
    background: #1e1e2e;
    padding: 1rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* TODO: grid-area */
}

.main {
    background: #1e1e2e;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    /* TODO: grid-area */
}

.footer {
    background: #0f172a;
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    color: #94a3b8;
    /* TODO: grid-area */
}

.ad-box {
    background: #333;
    height: 100px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    opacity: 0.5;
}

h1 { margin: 0; letter-spacing: -2px; }
h2 { margin-top: 0; color: #a5b4fc; }
p { line-height: 1.6; color: #cbd5e1; }

.card-grid {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}
.mini-card {
    flex: 1;
    height: 80px;
    background: #334155;
    border-radius: 8px;
}

/* --- Desktop Layout --- */
@media (min-width: 900px) {
    .layout {
        grid-template-columns: 250px 1fr; /* Fixed Sidebar, Fluid Main */
        grid-template-rows: auto 1fr auto;
        /* TODO: Redefine Areas for Desktop */
        
    }
}`
        }
    ]
};
