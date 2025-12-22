
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit11Capstone = {
    id: 'js-unit-11',
    title: 'Capstone - Dynamic Dashboard',
    description: 'The Final Test. Build a real-time data dashboard using Arrays, Objects, Async/Await, and the DOM. This project mimics a real Junior Dev take-home assignment.',
    items: [
        // PART 1: THE BRIEFING
        {
            id: 'js-11-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Project Briefing: The Analytics Dashboard 📊',
            duration: '20 min read',
            content: `
# Project Briefing: The Analytics Dashboard 📊

## The Client
A crypto-trading startup needs a lightweight dashboard to monitor transactions.
            `
        },

        // PART 2: PRACTICAL LABS (PHASED BUILD)
        {
            id: 'js-11-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 1: The Data Layer',
            duration: '35 min',
            content: `
# Phase 1: The Data Layer

We need to get the raw materials.

## The Mission
1.  URL: \`"https://api.zerocode.com/trades"\`.
2.  Create \`async function fetchTrades()\`.
3.  Use \`try/catch\`.
4.  Return the JSON array on success.
5.  Return empty array \`[]\` on fail.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Async: Define "async function fetchTrades".',
                    completed: false,
                    regex: /async\s+function\s+fetchTrades/
                },
                {
                    id: 2,
                    description: 'Fetch: await fetch(url).',
                    completed: false,
                    regex: /await\s+fetch\s*\(\s*url\s*\)/
                },
                {
                    id: 3,
                    description: 'Error Handling: Wrap in try/catch.',
                    completed: false,
                    regex: /try\s*\{[\s\S]*catch/
                },
                {
                    id: 4,
                    description: 'Return: return await res.json().',
                    completed: false,
                    regex: /return\s+await\s+res\.json/
                }
            ],
            files: [
                {
                    name: 'data.js',
                    language: 'javascript',
                    content: `// Constants
const API_URL = "https://api.zerocode.com/trades";

/**
 * Fetches trade data from the API.
 * Returns an array of trade objects.
 */
async function fetchTrades() {
    // TODO: Implement fetch logic here
    
}
`
                }
            ]
        },
        {
            id: 'js-11-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 2: The Logic Layer',
            duration: '35 min',
            content: `
# Phase 2: The Logic Layer

We have data. Now interpret it.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Format: Return "$" + num.',
                    completed: false,
                    regex: /return\s*['"]\$['"]\s*\+\s*num/
                },
                {
                    id: 2,
                    description: 'Filter: trades.filter(t => t.amount > 1000).',
                    completed: false,
                    regex: /trades\.filter\s*\(\s*\(?\s*\w+\s*\)?\s*=>\s*\w+\.amount\s*>\s*1000\s*\)/
                },
                {
                    id: 3,
                    description: 'Reduce: trades.reduce((sum, t) => sum + t.amount, 0).',
                    completed: false,
                    regex: /trades\.reduce\s*\(/
                }
            ],
            files: [
                {
                    name: 'logic.js',
                    language: 'javascript',
                    content: `/**
 * Formats a number as currency string
 * @param {number} num 
 * @returns {string} e.g. "$100"
 */
function formatCurrency(num) {
    // TODO
}

/**
 * Filters for high value trades (> 1000)
 * @param {Array} trades 
 * @returns {Array}
 */
function getWhales(trades) {
    // TODO: Use .filter()
}

/**
 * Calculates total volume
 * @param {Array} trades 
 * @returns {number}
 */
function getTotal(trades) {
    // TODO: Use .reduce()
}
`
                }
            ]
        },
        {
            id: 'js-11-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 3: The View Layer',
            duration: '40 min',
            content: `
# Phase 3: The View Layer

Paint pixels.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Select: const app = querySelector("#app").',
                    completed: false,
                    regex: /querySelector\s*\(\s*['"]#app['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Clear: app.innerHTML = "".',
                    completed: false,
                    regex: /app\.innerHTML\s*=\s*['"]['"]/
                },
                {
                    id: 3,
                    description: 'Create: document.createElement("div").',
                    completed: false,
                    regex: /createElement\s*\(\s*['"]div['"]\s*\)/
                },
                {
                    id: 4,
                    description: 'Append: app.appendChild(card).',
                    completed: false,
                    regex: /app\.appendChild\s*\(\s*card\s*\)/
                }
            ],
            files: [
                {
                    name: 'view.js',
                    language: 'javascript',
                    content: `// Selectors
const app = document.querySelector('#app');

/**
 * Renders a list of trades to the DOM
 * @param {Array} list 
 */
function render(list) {
    // 1. Clear existing content
    app.innerHTML = "";

    // 2. Loop and Create Elements
    list.forEach(trade => {
        // TODO: Create div, add class 'trade-card', set innerText
        
        // TODO: Append to app
    });
}
`
                }
            ]
        },
        {
            id: 'js-11-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 4: The Controller (Events)',
            duration: '30 min',
            content: `
# Phase 4: The Controller

Wire it up.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Load: const allData = await fetchTrades().',
                    completed: false,
                    regex: /const\s+allData\s*=\s*await\s+fetchTrades/
                },
                {
                    id: 2,
                    description: 'Listen: checkbox.addEventListener("change").',
                    completed: false,
                    regex: /addEventListener\s*\(\s*['"]change['"]/
                },
                {
                    id: 3,
                    description: 'Switch: if (checked) render(whales).',
                    completed: false,
                    regex: /if\s*\(\s*\w+\.checked\s*\)/
                }
            ],
            files: [
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `// Main Controller
const checkbox = document.querySelector('#whale-filter');

let allData = [];

async function init() {
    console.log("App Starting...");
    
    // 1. Fetch Data
    // TODO
    
    // 2. Initial Render
    // TODO render(allData)
}

// Event Listener
checkbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    
    if (isChecked) {
        // TODO: Filter and Render Whales
    } else {
        // TODO: Render All
    }
});

// Start App
init();
`
                }
            ]
        }
    ]
};
