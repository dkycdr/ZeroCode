import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2DashboardRAM = {
    id: 'css-unit16-lab-ram',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Analytics Dashboard (RAM Pattern)',
    duration: '40 min',
    content: `
# Analytics Pro: RAM Pattern

We are building a responsive card grid for an analytics dashboard.
**The Constraint:** You are NOT allowed to use Media Queries for the cards. You must use the **RAM Pattern**.

## The RAM Pattern
\`repeat(auto-fit, minmax(240px, 1fr))\`

## Your Job
1.  Apply the RAM pattern to \`.stat-grid\`.
2.  Watch how the cards resize and wrap automatically.
    `,
    tasks: [
        {
            id: 1,
            description: 'Apply Display Grid & Gap to .stat-grid.',
            completed: false,
            regex: /\.stat-grid\s*\{[\s\S]*?display\s*:\s*grid\s*;[\s\S]*?gap\s*:/
        },
        {
            id: 2,
            description: 'Implement RAM: grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)).',
            completed: false,
            regex: /grid-template-columns\s*:\s*repeat\(\s*auto-fit\s*,\s*minmax\(\s*240px\s*,\s*1fr\s*\)\s*\)/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="dashboard">
    <aside class="sidenav">
        <div class="logo">AP</div>
        <nav>
            <div class="icon active"></div>
            <div class="icon"></div>
            <div class="icon"></div>
        </nav>
    </aside>
    <main>
        <header>
            <h2>Overview</h2>
            <div class="user-avatar"></div>
        </header>

        <!-- THE RAM GRID -->
        <div class="stat-grid">
            <div class="card">
                <h3>Visitors</h3>
                <div class="value">12.5k</div>
            </div>
            <div class="card highlight">
                <h3>Revenue</h3>
                <div class="value">$43.2k</div>
            </div>
            <div class="card">
                <h3>Bounce Rate</h3>
                <div class="value">12%</div>
            </div>
            <div class="card">
                <h3>Active</h3>
                <div class="value">894</div>
            </div>
        </div>

        <div class="chart-area">
            Chart Placeholder
        </div>
    </main>
</div>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background: #0f172a;
    color: white;
}

.dashboard {
    display: grid;
    grid-template-columns: 80px 1fr; /* Fixed sidebar */
    height: 100vh;
}

/* Sidebar Styling */
.sidenav {
    background: #1e293b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    border-right: 1px solid #334155;
}
.logo { font-weight: 900; color: #38bdf8; margin-bottom: 2rem; }
.icon { width: 40px; height: 40px; background: #334155; border-radius: 10px; margin-bottom: 1rem; }
.icon.active { background: #38bdf8; box-shadow: 0 0 15px rgba(56, 189, 248, 0.4); }

/* Main Area */
main {
    padding: 2rem;
    overflow-y: auto;
}

header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}
.user-avatar { width: 40px; height: 40px; border-radius: 50%; background: #94a3b8; }

/* --- THE RAM GRID --- */
.stat-grid {
    /* TODO: Enable Grid & RAM Pattern */
    
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.card {
    background: #1e293b;
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid #334155;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    transition: transform 0.2s;
}
.card:hover { transform: translateY(-5px); border-color: #38bdf8; }
.card.highlight { background: linear-gradient(135deg, #0ea5e9, #2563eb); border: none; }

h3 { margin: 0 0 0.5rem 0; font-size: 0.9rem; color: #94a3b8; }
.value { font-size: 2rem; font-weight: 800; }
.highlight .value, .highlight h3 { color: white; }

.chart-area {
    height: 300px;
    background: #1e293b;
    border-radius: 16px;
    border: 1px solid #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #475569;
}`
        }
    ]
};
