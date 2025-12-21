import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10Pwa = {
    id: 'html5-unit-10',
    title: 'Progressive Web Apps (PWA) - Production Standard',
    description: 'Transform web pages into installable native-like apps. Master Service Workers, Cache Strategies, and Manifests.',
    items: [
        {
            id: 'html5-10-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'The Architecture of a PWA',
            duration: '20 min read',
            content: `
# The Architecture of a PWA

A Progressive Web App (PWA) is a website that looks and feels like a native app. It works offline, can be installed, and sends push notifications.

## 1. Visual Mental Model: The Service Worker Proxy
The Service Worker (SW) is a script that runs in the background. It acts as a **control tower** between your browser and the internet.

\`\`\`text
       [ YOUR BROWSER ]
             |
             v
    +-------------------+ 
    |  SERVICE WORKER   | <--- The Middle Man (Proxy)
    +-------------------+
       /           \\
      v             v
  [ CACHE ]     [ INTERNET ]
(Offline Box)   (The Server)
\`\`\`

*   **First Load:** Browser -> Network -> Download SW.
*   **Subsequent Loads:** Browser -> SW -> Cache (Instant Load!) -> Network (Background Update).

## 2. The Zombie Problem (Lifecycle)
Updates in PWAs are tricky. If you deploy new code, users might not see it immediately because the "Old" Service Worker is still active.

**The Lifecycle:**
1.  **Installing:** The new SW caches files.
2.  **Waiting (Warning!):** The new SW is ready but waits for the old one to die. **(This is where Zombie SWs live).**
3.  **Active:** The old SW is gone. The new SW takes control.

**Solution:** Use \`self.skipWaiting()\` to force the waiting SW to activate immediately.

## 3. Caching Strategy Decision Tree 🧠
Don't just cache everything. Choose the right strategy:

| Strategy | Logic | Best For |
| :--- | :--- | :--- |
| **Cache First** | Check Cache. If missing, go to Network. | **Images, Fonts, CSS** (Things that rarely change). |
| **Network First** | Try Network. If offline, use Cache. | **News Feeds, Stock Prices** (Freshness matters). |
| **Stale-While-Revalidate**| Show cached version instantly, but fetch new one in background. | **User Profile, Avatars** (Speed + Updates). |

## 4. Maskable Icons (Android Perfection)
Standard icons inside a circle look bad (cropped).
**Maskable Icons** have a "safe zone" that ensures they look good on any shape (Circle, Squircle, Hexagon).

\`\`\`json
{
  "src": "icon.png",
  "purpose": "maskable any" // Crucial for Android
}
\`\`\`
            `
        },
        {
            id: 'html5-10-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Project: Building an Offline-First App',
            duration: '60 min',
            content: `
# Project: Build a "Native" PWA

We will build a news reader app that installs on mobile and works offline.

## Milestone 1: The Identity (Manifest)
We need a \`manifest.json\` to tell the phone "I am an app". We must handle **Maskable Icons** to avoid ugly cropping on Android.

## Milestone 2: The Brain (Service Worker)
We will register a Service Worker that:
1.  **Installs**: Pre-caches our HTML and CSS.
2.  **Fetches**: Intercepts requests. If offline, serves the cached HTML.

## Milestone 3: Native Feel
We will tune the CSS to remove "web-like" behaviors (like text selection or blue tap highlights) to make it feel like a real app.

## Your Tasks
Complete the milestones below to convert the website into a PWA.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Milestone 1 (Manifest): Create a valid manifest.json. Must include "start_url", "display": "standalone", and "icons".',
                    completed: false,
                    // Regex: Checks for start_url, display: standalone, and icons array
                    regex: /"start_url"\s*:[\s\S]*"display"\s*:\s*"standalone"[\s\S]*"icons"\s*:/
                },
                {
                    id: 2,
                    description: 'Milestone 2 (Register SW): In index.html script, check if "serviceWorker" is in navigator, then register "sw.js".',
                    completed: false,
                    // Regex: checks feature detection and register call
                    regex: /if\s*\(\s*['"]serviceWorker['"]\s+in\s+navigator\s*\)[\s\S]*navigator\.serviceWorker\.register/
                },
                {
                    id: 3,
                    description: 'Milestone 2 (SW Install): In sw.js, add an "install" listener. Use event.waitUntil() and caches.open().',
                    completed: false,
                    regex: /self\.addEventListener\s*\(\s*['"]install['"][\s\S]*event\.waitUntil[\s\S]*caches\.open/
                },
                {
                    id: 4,
                    description: 'Milestone 2 (SW Fetch): In sw.js, add a "fetch" listener. Use event.respondWith() to serve cached content.',
                    completed: false,
                    regex: /self\.addEventListener\s*\(\s*['"]fetch['"][\s\S]*event\.respondWith/
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#3b82f6">
    <title>PWA News</title>
    <link rel="stylesheet" href="style.css">
    <!-- TODO: Link your manifest.json here -->
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <header>
        <h1>📰 Daily PWA</h1>
    </header>
    <main>
        <p>Offline-ready news content goes here...</p>
    </main>
    
    <script>
        // TODO: Register Service Worker here (Milestone 2)
        
    </script>
</body>
</html>`
                },
                {
                    name: 'manifest.json',
                    language: 'json',
                    content: `{
    "name": "Daily PWA News",
    "short_name": "PWA News",
    "start_url": "./index.html",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3b82f6",
    "icons": [
        {
            "src": "icon-192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
        },
        {
            "src": "icon-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ]
}`
                },
                {
                    name: 'sw.js',
                    language: 'javascript',
                    content: `const CACHE_NAME = 'pwa-news-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css'
];

// 1. INSTALL EVENT
self.addEventListener('install', (event) => {
    // TODO: Force waiting SW to activate
    // TODO: Cache Assets
});

// 2. FETCH EVENT (Cache First Strategy)
self.addEventListener('fetch', (event) => {
    // TODO: Serve from Cache, fall back to Network
});`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `:root {
    --primary: #3b82f6;
    --text: #1f2937;
    --bg: #f3f4f6;
}

/* Native App Feel */
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: var(--bg);
    color: var(--text);
    margin: 0;
    
    /* Disable text selection (feels like app) */
    user-select: none;
    
    /* Disable blue highlight on tap */
    -webkit-tap-highlight-color: transparent;
}

header {
    background: var(--primary);
    color: white;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    
    /* Sticky header */
    position: sticky;
    top: 0;
    z-index: 10;
}

h1 {
    margin: 0;
    font-size: 1.25rem;
}`
                }
            ]
        },
        {
            id: 'html5-10-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'PWA Mastery Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Where does the Service Worker sit in the network architecture?',
                    options: [
                        'Inside the Server',
                        'It is a database',
                        'As a Proxy between the Browser and Network',
                        'Inside the HTML file'
                    ],
                    correctIndex: 2,
                    explanation: 'The Service Worker acts as a client-side proxy, intercepting network requests to serve cached content or fetch from the web.'
                },
                {
                    id: 'q2',
                    question: 'What happens explicitly during the "Waiting" phase of a Service Worker?',
                    options: [
                        'The app downloads data',
                        'The new SW is installed but waiting for the old SW to stop controlling clients (Zombie state)',
                        'The browser is loading',
                        'It is an error state'
                    ],
                    correctIndex: 1,
                    explanation: 'The Waiting phase prevents data corruption by ensuring only one SW version controls the app at a time unless skipWaiting() is used.'
                },
                {
                    id: 'q3',
                    question: 'Which caching strategy is best for a "News Feed" that updates frequently?',
                    options: [
                        'Cache First',
                        'Network First',
                        'Cache Only',
                        'Offline Only'
                    ],
                    correctIndex: 1,
                    explanation: 'Network First attempts to get the freshest data. If it fails (offline), it falls back to the cache.'
                },
                {
                    id: 'q4',
                    question: 'Why do we use "purpose": "maskable" in manifest icons?',
                    options: [
                        'To hide the icon',
                        'To make it transparent',
                        'To allow Android to crop the icon into various shapes (circle, squircle) without cutting import parts',
                        'It is deprecated'
                    ],
                    correctIndex: 2,
                    explanation: 'Maskable icons ensure your app icon looks perfect on all Android devices, regardless of the manufacturer\'s icon shape preference.'
                }
            ]
        }
    ]
};
