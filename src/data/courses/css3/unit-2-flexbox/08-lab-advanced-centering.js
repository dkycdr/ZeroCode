import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4AdvancedCentering = {
    id: 'css-unit2-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Inner Sanctum (Centering)',
    duration: '40 min',
    content: `
# Lab: The Inner Sanctum (Centering)

## 1. The Concept: The Holy Grail
Architect, for decades, developers struggled to put a box exactly in the dead center of the screen—both horizontal and vertical. It was called the "Holy Grail of CSS." 

With Flexbox, the quest is over. In this lab, you will build the **Security Login Portal** for the Nexus AI Cloud. This is a master-level alignment task where you will use the "Absolute Centering" pattern that works on every screen size.

---

## 2. The Mission: Total Lockdown
You must create a perfectly centered login card:
1.  **Dual Axis Control**: Use a 2-line combination of \`justify-content\` and \`align-items\` to center the portal card.
2.  **Child Independence**: Sometimes, a single item needs to break the rules. Force the "Forgot Password" link to align itself to the right using the \`align-self\` property, ignoring the parent's rules.
3.  **The Flex Shortcut**: Use the unified \`flex\` shorthand to ensure the login inputs are responsive.

---

## 3. Senior Guidance: Viewport Height
To center something vertically on a page, the container **must have a height**. 
If you try to center a card inside a \`div\` that only has 0px height, the card will stay at the top. 

> [!IMPORTANT]
> **Mission Objective**: Perfection. In the Nexus environment, if a UI element is 1px off-center, it causes a visual distraction for the operator. Zero-tolerance for misalignment.
`,
    tasks: [
        {
            id: 1,
            description: 'The Absolute Center: On ".portal-view", use "display: flex;", "justify-content: center;", and "align-items: center;".',
            completed: false,
            regex: /\.portal-view\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?justify-content\s*:\s*center;?)(?=[\s\S]*?align-items\s*:\s*center;?)[\s\S]*?\}/,
            hint: {
                concept: 'This 3-line combo is the professional standard for centering everything.',
                strategy: 'Ensure the .portal-view class is modified.',
                solution: 'display: flex; justify-content: center; align-items: center;'
            }
        },
        {
            id: 2,
            description: 'The Rogue Link: On the ".forgot-link" class, set "align-self: flex-end;".',
            completed: false,
            regex: /\.forgot-link\s*\{(?=[\s\S]*?align-self\s*:\s*flex-end;?)[\s\S]*?\}/,
            hint: {
                concept: 'align-self allows a child to override its parent container alignment.',
                strategy: 'This is useful for secondary links that need to move away from the main group.',
                solution: 'align-self: flex-end;'
            }
        },
        {
            id: 3,
            description: 'The Input Flex: Give the ".input-group" a "display: flex;" and "flex-direction: column;" so labels sit on top of inputs.',
            completed: false,
            regex: /\.input-group\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?flex-direction\s*:\s*column;?)[\s\S]*?\}/,
            hint: {
                concept: 'Forms are much easier to manage when every group is its own flex column.',
                strategy: 'Treat each input+label as a mini-flex-layout.',
                solution: '.input-group { display: flex; flex-direction: column; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS SECURITY PORTAL */
:root {
    --accent: #4cc9f0;
}

body {
    margin: 0;
    background: #000;
}

/* 1. Center the entire login portal on the screen */
.portal-view {
    height: 100vh;
    width: 100vw;
}

.login-card {
    background: #111;
    width: 400px;
    padding: 40px;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* 3. Style the input group as a nested flex column */
.input-group {
    
}

label { color: #888; font-size: 12px; margin-bottom: 5px; }

input {
    background: #000;
    border: 1px solid #444;
    padding: 12px;
    color: white;
}

/* 2. Push this link to the right */
.forgot-link {
    color: var(--accent);
    text-decoration: none;
    font-size: 11px;
    text-transform: uppercase;
}

.btn-login {
    background: var(--accent);
    border: none;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="portal-view">
    <div class="login-card">
        <h2 style="color: white; text-align: center; margin-bottom: 20px;">NEXUS_v2_AUTH</h2>
        
        <div class="input-group">
            <label>ENGINEER_ID</label>
            <input type="text" placeholder="ARC-4921-X">
        </div>
        
        <div class="input-group">
            <label>SYNC_KEY</label>
            <input type="password" placeholder="••••••••">
        </div>
        
        <a href="#" class="forgot-link">Sync_Connection_Lost?</a>
        
        <button class="btn-login">AUTHORIZE_ACCESS</button>
    </div>
</div>`
        }
    ]
};
