import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9HtmlApis = {
    id: 'html5-unit-9',
    title: 'HTML5 APIs & Advanced Features',
    description: 'Master HTML5 APIs: Local Storage, Geolocation, Canvas loops, and Web Workers for high-performance apps.',
    items: [
        {
            id: 'html5-9-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Modern Browser Storage: Beyond Cookies',
            duration: '15 min read',
            content: `
# Modern Browser Storage

Gone are the days when we only had Cookies. Modern web apps need to store complex data securely and efficiently.

## Comparison: Choosing the Right Storage

| Feature | **Cookie** | **Local Storage** | **Session Storage** | **IndexedDB** |
| :--- | :--- | :--- | :--- | :--- |
| **Capacity** | 4KB (Tiny) | ~5MB | ~5MB | >50MB (Huge) |
| **Lifespan** | Expires w/ setting | Forever | Until tab closes | Forever |
| **Data Type** | String only | String only | String only | Complex Objects |
| **Sent to Server?** | Yes (Every Request) | No | No | No |
| **Use Case** | Auth Tokens | User Settings | Form Progress | Offline App Data |

### Security Warning 🔒
**NEVER store sensitive data** (Passwords, Credit Cards, API Keys) in Local/Session Storage. It is easily accessible via JavaScript attacks (XSS). Only use it for non-sensitive preferences or public data.
            `
        },
        {
            id: 'html5-9-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Interactive Lesson: Persistent Notes App',
            duration: '45 min',
            content: `
# Build a "Crash-Proof" Notes App

We will build a Note-Taking app that survives page reloads.

## The Mental Model of Storage
Think of \`localStorage\` as a **String-Only Warehouse**.
1. **Entering the Warehouse**: You must convert your nice Array/Object into a string (\`JSON.stringify\`).
2. **Leaving the Warehouse**: You get a string back, so you must unpack it (\`JSON.parse\`).

## Coding for Failure (Robustness)
What if the storage is full? What if the data is corrupt?
We use \`try...catch\` blocks to safeguard our app.

\`\`\`javascript
try {
    localStorage.setItem('key', 'data');
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        alert("Storage is full!");
    }
}
\`\`\`

## Your Tasks
Follow the steps to implement the safeguard logic.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Retrieval & Safeguard: Get "myNotes" from localStorage. If null, initialize an empty array [].',
                    completed: false,
                    // Regex: checks for getItem || [] null coalescing or ternary
                    regex: /localStorage\.getItem\(["']myNotes["']\)\s*(\|\||\?\?)\s*\[\]/
                },
                {
                    id: 2,
                    description: 'Push & Stringify: Add the new note to the array, then use JSON.stringify() to prepare it for storage.',
                    completed: false,
                    regex: /JSON\.stringify\(/
                },
                {
                    id: 3,
                    description: 'Safe Storage: Wrap the setItem() call inside a try...catch block to handle errors.',
                    completed: false,
                    regex: /try\s*{[\s\S]*localStorage\.setItem[\s\S]*}\s*catch/
                },
                {
                    id: 4,
                    description: 'Error Handling: Inside catch, log an error message (e.g. "Quota Exceeded").',
                    completed: false,
                    regex: /console\.(log|error|warn)/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <title>Crash-Proof Notes</title>
</head>
<body>
    <h1>📝 Persistent Notes</h1>
    <input type="text" id="note-input" placeholder="Type a note...">
    <button onclick="addNote()">Save Note</button>
    <ul id="note-list"></ul>
    
    <script src="app.js"></script>
</body>
</html>`
                },
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `// 1. Load notes immediately
const saved = localStorage.getItem('myNotes');
// TODO: If saved is null, verify it becomes []
let notes = saved ? JSON.parse(saved) : [];

function addNote() {
    const input = document.getElementById('note-input');
    const text = input.value;
    
    if (!text) return; // Don't save empty notes

    // TODO: Add the note to array 'notes'
    
    // TODO: Save to 'myNotes' using try-catch block
    
    input.value = ''; // clear input
    render();
}

function render() {
    const list = document.getElementById('note-list');
    list.innerHTML = notes.map(n => \`<li>\${n}</li>\`).join('');
}

// Initial render
render();`
                }
            ]
        },
        {
            id: 'html5-9-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Geolocation: Accuracy & Privacy',
            duration: '20 min read',
            content: `
# Geolocation API

## Privacy First
Location data is sensitive. The browser will **always** ask user permission.
If the user clicks **Deny**, your code must handle it gracefully (not crash).

## The "Watch Position" Feature
Instead of getting the location once, you can track it (like a GPS nav app).

\`\`\`javascript
const id = navigator.geolocation.watchPosition(
    successCallback, 
    errorCallback, 
    {
        enableHighAccuracy: true, // Uses GPS (battery intensive)
        timeout: 5000,            // Give up after 5s
        maximumAge: 0             // Always get fresh data
    }
);
\`\`\`

## Handling Errors
Never assume you will get the location.

\`\`\`javascript
function errorCallback(err) {
    switch(err.code) {
        case err.PERMISSION_DENIED:
            alert("User denied the request.");
            break;
        case err.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case err.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
    }
}
\`\`\`
            `
        },
        {
            id: 'html5-9-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Canvas Basics: The Render Loop',
            duration: '15 min read',
            content: `
# HTML5 Canvas

The \`<canvas>\` element is an empty drawing board. To make things move (animation), we use a concept called the **Render Loop**.

## How Animations Work
It's like a flipbook. We draw a frame, wipe it clean, move the object slightly, and draw again.

### The Loop Pattern
\`\`\`javascript
function draw() {
    // 1. Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. Update positions (Math)
    x += speed;
    
    // 3. Draw object
    ctx.fillRect(x, 10, 50, 50);
    
    // 4. Request next frame (approx 60fps)
    requestAnimationFrame(draw);
}

// Start the loop
draw();
\`\`\`
            `
        },
        {
            id: 'html5-9-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Web Workers: The Kitchen Analogy',
            duration: '15 min read',
            content: `
# Web Workers (Parallel Computing)

JavaScript is **Single-Threaded**. This means it can only do one thing at a time.
Imagine your browser is a **Restaurant Kitchen**.

*   **The Main Thread (The Chef):** He handles the UI (taking orders, plating food). If he starts chopping 1000 onions, he stops serving customers. The interface freezes!
*   **The Web Worker (The Assistant):** He works in the back room. The Chef sends him the onions (\`postMessage\`), he chops them, and sends back the result. The Chef never stops serving customers.

## Code Example

**main.js (The Chef):**
\`\`\`javascript
const worker = new Worker('assistant.js');
worker.postMessage('Start heavy task!'); 

worker.onmessage = function(e) {
    console.log('Assistant finished:', e.data);
};
\`\`\`

**assistant.js (The Assistant):**
\`\`\`javascript
self.onmessage = function(e) {
    // Heavy calculation...
    let result = complexMath(); 
    self.postMessage(result);
};
\`\`\`
            `
        },
        {
            id: 'html5-9-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'HTML5 APIs Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why should you NOT store passwords in LocalStorage?',
                    options: [
                        'It has a size limit',
                        'It is accessible via JavaScript (XSS vulnerable) and not encrypted',
                        'It gets deleted when the browser closes',
                        'It slows down the browser'
                    ],
                    correctIndex: 1,
                    explanation: 'Local Storage provides no encryption and is accessible by any script running on the page, making it unsafe for secrets.'
                },
                {
                    id: 'q2',
                    question: 'Which Storage API persists data even after the browser is closed?',
                    options: [
                        'Session Storage',
                        'Cookies (Session-based)',
                        'Local Storage',
                        'RAM'
                    ],
                    correctIndex: 2,
                    explanation: 'Local Storage is designed to persist data permanently until explicitly cleared by the user or code.'
                },
                {
                    id: 'q3',
                    question: 'What is the purpose of "requestAnimationFrame" in Canvas?',
                    options: [
                        'To load an image',
                        'To create a smooth 60fps render loop efficiently',
                        'To request location permission',
                        'To save the drawing to a file'
                    ],
                    correctIndex: 1,
                    explanation: 'requestAnimationFrame syncs your drawing loop with the browser\'s refresh rate for smooth animations.'
                },
                {
                    id: 'q4',
                    question: 'In the "Chef vs Assistant" analogy, what is the Web Worker?',
                    options: [
                        'The Customer',
                        'The Main Chef (UI)',
                        'The Assistant (Background Task)',
                        'The Menu'
                    ],
                    correctIndex: 2,
                    explanation: 'The Web Worker acts as a background assistant, handling heavy tasks so the Main Thread (Chef) doesn\'t freeze.'
                }
            ]
        }
    ]
};
