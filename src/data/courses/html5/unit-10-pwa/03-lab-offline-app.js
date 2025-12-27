import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3OfflineApp = {
    id: 'html5-u10-lab-2-offline',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Build an Offline-Ready PWA',
    duration: '45 min',
    content: `
# Lab: Build an Offline-Ready PWA

## The Goal

We'll transform a simple website into a **Progressive Web App** that:
1. Can be installed on mobile (looks like a native app)
2. Works offline (shows cached content when no internet)
3. Loads instantly on repeat visits

---

## Step 1: Create the Manifest

The manifest tells the device: "This is an app, not just a website."

Create a \`manifest.json\` file with:
- \`name\` and \`short_name\`
- \`start_url\` pointing to your main page
- \`display: "standalone"\` (removes browser bar)
- At least 2 icons (192x192 and 512x512)

---

## Step 2: Link the Manifest

In your HTML \`<head>\`, add:
\`\`\`html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#3b82f6">
\`\`\`

---

## Step 3: Register the Service Worker

In your main JavaScript (or inline script), check if Service Workers are supported and register:

\`\`\`javascript
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered!', reg))
        .catch(err => console.error('SW failed:', err));
}
\`\`\`

---

## Step 4: Create the Service Worker (sw.js)

The Service Worker needs to:
1. **Install**: Pre-cache important files
2. **Fetch**: Serve from cache or network

### Install Event:
\`\`\`javascript
const CACHE_NAME = 'my-pwa-v1';
const ASSETS = ['/', '/index.html', '/style.css', '/app.js'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});
\`\`\`

### Fetch Event:
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            return cached || fetch(event.request);
        })
    );
});
\`\`\`

---

## Step 5: Add Native App Styling

Make your app feel native by adding to CSS:
\`\`\`css
/* Disable text selection */
user-select: none;

/* Disable tap highlight */
-webkit-tap-highlight-color: transparent;

/* Smooth scrolling */
-webkit-overflow-scrolling: touch;
\`\`\`

---

## Your Mission

Complete all the tasks to make this website a fully functional PWA:

1. ✅ Create manifest.json with required fields
2. ✅ Check for Service Worker support and register
3. ✅ Add install event that caches assets
4. ✅ Add fetch event that serves cached content
5. ✅ Force activate with skipWaiting()
`,
    tasks: [
        {
            id: 1,
            description: 'Manifest: Include "start_url", "display": "standalone", and "icons" array',
            completed: false,
            hint: 'Check manifest.json - it needs start_url, display: standalone, and at least one icon',
            regex: /"start_url"\s*:\s*["'][^"']+["'][\s\S]*"display"\s*:\s*["']standalone["'][\s\S]*"icons"\s*:\s*\[/
        },
        {
            id: 2,
            description: 'Register: Check if "serviceWorker" in navigator, then call register("sw.js")',
            completed: false,
            hint: 'Pattern: if ("serviceWorker" in navigator) { navigator.serviceWorker.register(...) }',
            regex: /if\s*\(\s*['"]serviceWorker['"]\s+in\s+navigator\s*\)[\s\S]*navigator\.serviceWorker\.register/
        },
        {
            id: 3,
            description: 'Install: Add "install" listener with event.waitUntil() and caches.open()',
            completed: false,
            hint: 'Use self.addEventListener("install", ...) with event.waitUntil(caches.open(...))',
            regex: /self\.addEventListener\s*\(\s*['"]install['"][\s\S]*event\.waitUntil[\s\S]*caches\.open/
        },
        {
            id: 4,
            description: 'Fetch: Add "fetch" listener with event.respondWith() to serve cached content',
            completed: false,
            hint: 'Use self.addEventListener("fetch", ...) with event.respondWith(caches.match(...))',
            regex: /self\.addEventListener\s*\(\s*['"]fetch['"][\s\S]*event\.respondWith/
        },
        {
            id: 5,
            description: 'Activate: Use self.skipWaiting() to force the waiting SW to activate immediately',
            completed: false,
            hint: 'Call self.skipWaiting() inside the install event',
            regex: /self\.skipWaiting\s*\(\s*\)/
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
    <title>My PWA</title>
    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="icon-192.png">
</head>
<body>
    <header>
        <h1>📱 My First PWA</h1>
    </header>
    <main>
        <div class="card">
            <h2>Welcome!</h2>
            <p>This app works offline. Try turning off your internet!</p>
        </div>
        <div class="card">
            <h2>Install Me</h2>
            <p>On mobile, tap "Add to Home Screen" to install.</p>
        </div>
    </main>
    
    <script>
        // TODO: Check for serviceWorker support and register 'sw.js'
        
    </script>
</body>
</html>`
        },
        {
            name: 'manifest.json',
            language: 'json',
            content: `{
    "name": "My First Progressive Web App",
    "short_name": "MyPWA",
    "description": "An offline-ready progressive web application",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3b82f6",
    "orientation": "portrait-primary",
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
            content: `// ============================================
// SERVICE WORKER - The Offline Brain
// ============================================

const CACHE_NAME = 'my-pwa-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css'
];

// ─────────────────────────────────────────────
// INSTALL EVENT
// Pre-cache all important assets
// ─────────────────────────────────────────────
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    
    // TODO: Force the waiting SW to become active
    
    
    // TODO: Cache all assets using event.waitUntil and caches.open
    
});

// ─────────────────────────────────────────────
// ACTIVATE EVENT
// Clean up old caches
// ─────────────────────────────────────────────
self.addEventListener('activate', (event) => {
    console.log('[SW] Activated!');
    
    // Take control of all pages immediately
    event.waitUntil(clients.claim());
});

// ─────────────────────────────────────────────
// FETCH EVENT
// Intercept requests and serve from cache
// ─────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
    console.log('[SW] Fetching:', event.request.url);
    
    // TODO: Respond with cached version, or fetch from network
    
});`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #3b82f6;
    --bg: #f1f5f9;
    --text: #1e293b;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    
    /* Native app feel */
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
}

header {
    background: var(--primary);
    color: white;
    padding: 1.5rem;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
    font-size: 1.5rem;
    font-weight: 700;
}

main {
    padding: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.card p {
    color: #64748b;
    line-height: 1.6;
}

/* Offline indicator (add via JS when offline) */
.offline-banner {
    background: #fbbf24;
    color: #78350f;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
}`
        }
    ]
};
