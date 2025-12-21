        {
            id: 'html5-10-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building Your First Progressive Web App',
            duration: '45 min',
            content: `
# Building Your First Progressive Web App

Learn to build a complete PWA that works offline and can be installed!

## What You'll Build

A Task Manager PWA featuring:
- Offline functionality
- Install to home screen
- Fast loading with caching
- App-like experience

## Key Concepts

### What is a PWA?
Progressive Web Apps combine the best of web and mobile apps:
- **Reliable** - Works offline
- **Fast** - Loads instantly
- **Engaging** - Feels like a native app

### Core Requirements
1. **HTTPS** - Secure connection
2. **Web App Manifest** - App metadata
3. **Service Worker** - Offline functionality

### Web App Manifest
The manifest.json file tells the browser about your app:
\`\`\`json
{
  "name": "Task Manager",
  "short_name": "Tasks",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2196F3",
  "icons": [...]
}
\`\`\`

### Service Worker Basics
Service workers run in the background and handle caching:
\`\`\`javascript
// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}
\`\`\`

### Caching Strategy
Cache files for offline access:
\`\`\`javascript
// In service worker
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
\`\`\`

### Install Prompt
Let users install your app:
\`\`\`javascript
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    // Show install button
});
\`\`\`

## Your Tasks

Follow the tasks below to build your PWA step by step!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add manifest link to HTML head',
                    completed: false,
                    regex: /<link\s+rel="manifest"\s+href="[^"]+"/i
                },
                {
                    id: 2,
                    description: 'Add theme-color meta tag',
                    completed: false,
                    regex: /<meta\s+name="theme-color"\s+content="[^"]+"/i
                },
                {
                    id: 3,
                    description: 'Register service worker in app.js',
                    completed: false,
                    regex: /navigator\.serviceWorker\.register/i
                },
                {
                    id: 4,
                    description: 'Handle beforeinstallprompt event',
                    completed: false,
                    regex: /beforeinstallprompt/i
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager PWA</title>
    
    <!-- Task 1: Add manifest link here -->
    <!-- Example: <link rel="manifest" href="manifest.json"> -->
    
    <!-- Task 2: Add theme-color meta tag -->
    <!-- Example: <meta name="theme-color" content="#2196F3"> -->
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="app">
        <header>
            <h1>📝 Task Manager</h1>
            <button id="installBtn" style="display: none;">Install App</button>
        </header>
        
        <main>
            <div class="add-task">
                <input type="text" id="taskInput" placeholder="Add a task...">
                <button id="addBtn">Add</button>
            </div>
            
            <ul id="taskList"></ul>
            
            <div class="status">
                <span id="statusText">🟢 Online</span>
            </div>
        </main>
    </div>
    
    <script src="app.js"></script>
</body>
</html>`
                },
                {
                    name: 'manifest.json',
                    language: 'json',
                    content: `{
  "name": "Task Manager",
  "short_name": "Tasks",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2196F3",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}`
                },
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `// Task 3: Register service worker
// Example:
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js');
// }


// Task 4: Handle install prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Add beforeinstallprompt event listener here


// Task manager functionality
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

// Online/offline status
window.addEventListener('online', () => {
    document.getElementById('statusText').textContent = '🟢 Online';
});

window.addEventListener('offline', () => {
    document.getElementById('statusText').textContent = '🔴 Offline';
});`
                },
                {
                    name: 'sw.js',
                    language: 'javascript',
                    content: `// Service Worker
const CACHE_NAME = 'task-manager-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js'
];

// Install event - cache files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch event - serve from cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* CSS is ready - focus on PWA features! */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.app {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    overflow: hidden;
}

header {
    background: #2196F3;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 24px;
}

#installBtn {
    background: white;
    color: #2196F3;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}

main {
    padding: 20px;
}

.add-task {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#taskInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
}

#addBtn {
    background: #2196F3;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}

#taskList {
    list-style: none;
    margin-bottom: 20px;
}

#taskList li {
    padding: 12px;
    background: #f5f5f5;
    margin-bottom: 8px;
    border-radius: 6px;
}

.status {
    text-align: center;
    padding: 10px;
    background: #f9f9f9;
    border-radius: 6px;
    font-weight: bold;
}`
                }
            ]
        },
