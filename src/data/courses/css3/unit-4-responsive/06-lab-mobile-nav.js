import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2MobileNav = {
    id: 'css-unit4-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Mobile-First Navigation',
    duration: '45 min',
    content: `
# Lab: Mobile-First Navigation

## 1. The Concept: Visibility Logic
Architect, navigation is the most difficult element to get right in Responsive Design. On a mobile device, a menu with 10 links will cover the whole screen. On a desktop, we have plenty of room for a horizontal bar.

In this lab, you will master **Visibility Control**. You will use Media Queries to hide the mobile "Hamburger" icon on large screens and show the full "Desktop Menu" only when space is available.

---

## 2. The Mission: The Adaptive Bridge
You are building the **Vessel Command Bar**:
1.  **Mobile Guard**: Hide the \`.desktop-nav\` by default (Mobile-First).
2.  **The Context Shift**: Inside a \`min-width: 1024px\` query, switch the visibility.
3.  **The Trade-off**: Hide the \`.mobile-menu-toggle\` on desktops, as it is no longer needed.

---

## 3. Senior Guidance: Performance vs. Cleanliness
Some architects use JavaScript to show/hide menus. As an Elite CSS Architect, you should use **CSS-Only Visibility** whenever possible. It is faster, doesn't flicker on load, and works even if the user has a slow connection.

> [!TIP]
> **Pro Tip**: Use \`display: none;\` to completely remove an element from the layout. Use \`visibility: hidden;\` if you want the element to stay in its spot but remain invisible (rarely used for navs).
`,
    tasks: [
        {
            id: 1,
            description: 'The Mobile-First Stealth: Set ".desktop-nav" to "display: none;" in the base styles.',
            completed: false,
            regex: /\.desktop-nav\s*\{(?=[\s\S]*?display\s*:\s*none;?)[\s\S]*?\}/,
            hint: {
                concept: 'We hide the desktop menu on small screens because there is no room.',
                strategy: 'Apply display: none to the desktop-nav class.',
                solution: 'display: none;'
            }
        },
        {
            id: 2,
            description: 'The Desktop Reveal: Inside a "@media (min-width: 1024px)" query, set ".desktop-nav" to "display: flex;".',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*1024px\s*\)\s*\{[\s\S]*?\.desktop-nav\s*\{(?=[\s\S]*?display\s*:\s*flex;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Revealing the menu at 1024px gives it enough room to breathe.',
                strategy: 'Update the property inside the media query block.',
                solution: 'display: flex;'
            }
        },
        {
            id: 3,
            description: 'The Toggle Stealth: Inside the same media query, hide ".mobile-menu-toggle" using "display: none;".',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*1024px\s*\)\s*\{[\s\S]*?\.mobile-menu-toggle\s*\{(?=[\s\S]*?display\s*:\s*none;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Desktop users dont need a hamburger menu if the full nav is visible.',
                strategy: 'Add the toggle selector inside your existing @media block.',
                solution: '.mobile-menu-toggle { display: none; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS COMMAND BAR */
body {
    background: #000;
    margin: 0;
    font-family: sans-serif;
}

.nav-bar {
    background: #111;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
}

.logo {
    color: #4cc9f0;
    font-weight: bold;
}

.mobile-menu-toggle {
    background: #4cc9f0;
    color: black;
    border: none;
    padding: 8px 12px;
}

.desktop-nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-size: 14px;
}

/* 1, 2, 3. Implement Visibility Logic below */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<header class="nav-bar">
    <div class="logo">NEXUS_NAV</div>
    
    <!-- Visible on Mobile -->
    <button class="mobile-menu-toggle">MENU</button>
    
    <!-- Visible on Desktop -->
    <nav class="desktop-nav">
        <a href="#">DASHBOARD</a>
        <a href="#">FLEET</a>
        <a href="#">RESOURCES</a>
        <a href="#">LOGOUT</a>
    </nav>
</header>`
        }
    ]
};
