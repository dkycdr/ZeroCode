import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1FlexContainer = {
    id: 'css-unit2-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Initializing the Elastic Engine',
    duration: '40 min',
    content: `
# Lab: Initializing the Elastic Engine

## 1. The Concept: Activation Protocol
Architect, the static Box Model is no longer enough for the high-end requirements of the **Nexus AI Cloud Console**. Our dashboard needs to handle multiple dynamic data modules that can stack, stretch, and align instantly.

Your first mission in Phase 2 is to take a standard, boring "Stack of HTML Blocks" and promote them into a high-performance **Flex Container**. You will master the "Invisible Axis" logic by swapping directions to suit different terminal views.

---

## 2. The Mission: The Component Shell
We have provided the HTML structure for the **System Monitoring Panel**. Right now, the status cards are just stacked on top of each other, taking up too much vertical space.

### Your Objectives:
1.  **Flex Activation**: Activate the flex engine on the \`.monitor-panel\`.
2.  **Directional Shift**: Switch the panel to a vertical column for the "Mobile Service" view.
3.  **The Space Guard**: Add a \`gap\` between your cards so they don't look like a single fused block of data.

---

## 3. Senior Guidance: The Power of \`gap\`
In the old days of Flexbox (pre-2020), we had to use \`margin\` on the children to create space. This was messy because the *last* item would have an extra margin that ruined the symmetry.
Modern Architects use the **\`gap\`** property. It puts space *only* between the items, not on the edges. It’s cleaner, safer, and 100% professional.

> [!CAUTION]
> **Engine Warning**: Remember that once you set \`display: flex\`, the child elements lose their standard block behavior. They will now try to be as small as possible unless you tell them otherwise!
`,
    tasks: [
        {
            id: 1,
            description: 'The Activation: In "style.css", set ".monitor-panel" to "display: flex;".',
            completed: false,
            regex: /\.monitor-panel\s*\{(?=[\s\S]*?display\s*:\s*flex;?)[\s\S]*?\}/,
            hint: {
                concept: 'This converts the container into a Flex formatting context.',
                strategy: 'The display property is the "On/Off" switch for Flexbox.',
                solution: 'display: flex;'
            }
        },
        {
            id: 2,
            description: 'The Vertical Pivot: Set the "flex-direction" of ".monitor-panel" to "column".',
            completed: false,
            regex: /\.monitor-panel\s*\{(?=[\s\S]*?flex-direction\s*:\s*column;?)[\s\S]*?\}/,
            hint: {
                concept: 'By default, flex is "row". Column makes items stack like a list.',
                strategy: 'Use the flex-direction property.',
                solution: 'flex-direction: column;'
            }
        },
        {
            id: 3,
            description: 'The Air Gap: Prohibit the cards from touching by adding a "gap: 15px;".',
            completed: false,
            regex: /\.monitor-panel\s*\{(?=[\s\S]*?gap\s*:\s*15px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Gap handles spacing without the "Last-Child Margin" bug.',
                strategy: 'Apply the gap property to the parent container.',
                solution: 'gap: 15px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS AI SYSTEM STYLES */
:root {
    --bg-void: #020205;
    --neon-blue: #4cc9f0;
    --card-bg: #11111a;
}

body {
    background-color: var(--bg-void);
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 50px;
}

/* 1, 2, 3. Turn this panel into a Flex Column with a 15px gap */
.monitor-panel {
    border: 1px solid #333;
    padding: 20px;
    border-radius: 12px;
}

.system-card {
    background: var(--card-bg);
    border-left: 4px solid var(--neon-blue);
    padding: 15px;
}

.system-card h4 {
    margin: 0 0 5px 0;
    font-weight: bold;
    letter-spacing: 1px;
}

.system-card p {
    margin: 0;
    font-size: 14px;
    color: #888;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="monitor-panel">
    <div class="system-card">
        <h4>CPU_CORE_01</h4>
        <p>LOAD: 42% | TEMP: 65°C</p>
    </div>
    <div class="system-card">
        <h4>NEURAL_NET_V2</h4>
        <p>SYNC_STATUS: ACTIVE</p>
    </div>
    <div class="system-card">
        <h4>VOICE_MODULE</h4>
        <p>AWAITING_COMMAND...</p>
    </div>
</div>`
        }
    ]
};
