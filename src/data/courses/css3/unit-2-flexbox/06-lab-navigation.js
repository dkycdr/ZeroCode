import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Navigation = {
    id: 'css-unit2-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Command Bar (Justify)',
    duration: '45 min',
    content: `
# Lab: The Command Bar (Justify)

## 1. The Concept: Spatial Distribution
Architect, the Nexus AI top navigation is currentyly non-functional. All the items—the Logo, the Navigation Links, and the Profile Action—are all bunched up together on the left side of the screen.

In this lab, you will use the **Main Axis alignment** properties to distribute these elements across the entire width of the dashboard. This is a "Standard Operational Procedure" for every web interface.

---

## 2. The Mission: The Split Navbar
You must use the power of \`justify-content\` to create a professional "Split Layout":
1.  **Space Distribution**: Configure the navbar container to push the Logo to the far left and the Profile to the far right.
2.  **Internal Balancing**: Ensure the navigation links in the middle are vertically centered alongside the taller Logo.
3.  **The Auto-Push**: Use a specialized "Margin Auto" trick on the profile link to ensure it stays locked to the right wall, even if we add more links later.

---

## 3. Senior Guidance: Alignment Logic
Remember: \`justify-content\` controls the horizontal axis (in a row). \`align-items\` controls the vertical axis. 
For a Navbar, we usually want:
- **Justify**: \`space-between\` (to push things to the edges).
- **Align**: \`center\` (so the logo and text don't look uneven).

> [!IMPORTANT]
> **Mission Objective**: Efficiency. Using one command to distribute space is better than adding a \`margin-right: 542px\` that will break on any other screen size!
`,
    tasks: [
        {
            id: 1,
            description: 'The Great Divider: Set ".navbar" to "display: flex;" and use "justify-content: space-between;".',
            completed: false,
            regex: /\.navbar\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?justify-content\s*:\s*space-between;?)[\s\S]*?\}/,
            hint: {
                concept: 'Space-between pushes the first child to the start and the last child to the end.',
                strategy: 'Ensure both flex activation and alignment are in your .navbar class.',
                solution: 'display: flex; justify-content: space-between;'
            }
        },
        {
            id: 2,
            description: 'The Horizon Level: Set "align-items: center;" on the ".navbar" to level the Logo and Links.',
            completed: false,
            regex: /\.navbar\s*\{(?=[\s\S]*?align-items\s*:\s*center;?)[\s\S]*?\}/,
            hint: {
                concept: 'This controls the cross-axis (vertical) alignment.',
                strategy: 'Center alignment ensures the text baseline looks correct next to the logo icon.',
                solution: 'align-items: center;'
            }
        },
        {
            id: 3,
            description: 'The Link System: Target the ".nav-links" container (the middle part). Set "display: flex;" and "gap: 20px;" so the links aren\'t touching.',
            completed: false,
            regex: /\.nav-links\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?gap\s*:\s*20px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Containers can be nested! The navbar is a flex container, and the links inside it can also be a flex container.',
                strategy: 'This pattern is called "Nested Flexbox" and it is the secret to complex UIs.',
                solution: '.nav-links { display: flex; gap: 20px; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS COMMAND BAR STYLES */
:root {
    --bg-header: #0a0a12;
    --accent: #00ff41;
}

body {
    background: #000;
    margin: 0;
}

/* 1, 2. Style the main navbar container */
.navbar {
    background: var(--bg-header);
    padding: 0 40px;
    height: 70px;
    border-bottom: 2px solid #222;
}

.logo {
    color: var(--accent);
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 2px;
}

/* 3. Style the internal link group */
.nav-links {
    
}

.nav-links a {
    color: #888;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: white;
}

.profile-action {
    background: var(--accent);
    color: black;
    padding: 8px 15px;
    font-weight: bold;
    font-size: 12px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<nav class="navbar">
    <div class="logo">NEXUS_OS</div>
    
    <div class="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">Analytics</a>
        <a href="#">Systems</a>
        <a href="#">Neural_Link</a>
    </div>
    
    <div class="profile-action">USER: ARCHITECT</div>
</nav>`
        }
    ]
};
