import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4InstallablePwa = {
    id: 'html5-u10-lab-4-installable',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Build an Installable PWA',
    duration: '35 min',
    content: `
# Lab: Build an Installable PWA

## The Scenario

You are building a **Weather Dashboard PWA** that users can install on their devices. The app should:
- Work offline with cached weather data
- Be installable from the browser
- Have a custom install button
- Look native when installed

## Requirements for Installability

Chrome/Edge require these for the "Add to Home Screen" prompt:
1. ✅ Served over HTTPS (or localhost)
2. ✅ Has a valid manifest.json
3. ✅ Has icons (192x192 AND 512x512)
4. ✅ Has a registered Service Worker
5. ✅ User has interacted with the page

## The Mission

1. Create a complete \`manifest.json\`
2. Link the manifest in HTML
3. Add iOS fallback meta tags
4. Register a service worker
5. Create a custom "Install App" button
6. Handle the \`beforeinstallprompt\` event

## Key Code Patterns

### Capturing the Install Prompt
\`\`\`javascript
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome's default prompt
    e.preventDefault();
    // Store the event for later
    deferredPrompt = e;
    // Show your custom install button
    installButton.style.display = 'block';
});
\`\`\`

### Triggering Install
\`\`\`javascript
installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    // Show the prompt
    deferredPrompt.prompt();
    
    // Wait for user choice
    const { outcome } = await deferredPrompt.userChoice;
    console.log('User choice:', outcome);
    
    // Clear the prompt
    deferredPrompt = null;
    installButton.style.display = 'none';
});
\`\`\`
`,
    tasks: [
        {
            id: 1,
            description: 'Create manifest.json with "name", "short_name", "start_url", "display": "standalone"',
            completed: false,
            regex: /"name"\s*:\s*"[^"]+"\s*,[\s\S]*"short_name"\s*:\s*"[^"]+"\s*,[\s\S]*"display"\s*:\s*"standalone"/,
            hint: {
                concept: 'Manifest Basics',
                strategy: 'These are the minimum required fields for a PWA',
                solution: '{ "name": "Weather App", "short_name": "Weather", "display": "standalone" }'
            }
        },
        {
            id: 2,
            description: 'Add 192x192 and 512x512 icons to manifest.json',
            completed: false,
            regex: /"icons"\s*:\s*\[[\s\S]*"192x192"[\s\S]*"512x512"[\s\S]*\]/,
            hint: {
                concept: 'PWA Icons',
                strategy: 'Both sizes are required for installability',
                solution: '"icons": [{ "src": "/icon-192.png", "sizes": "192x192" }, ...]'
            }
        },
        {
            id: 3,
            description: 'Link manifest in HTML: <link rel="manifest" href="/manifest.json">',
            completed: false,
            regex: /<link\s+rel\s*=\s*["']manifest["']\s+href\s*=\s*["'][^"']+manifest\.json["']\s*\/?>/i,
            hint: {
                concept: 'Manifest Link',
                strategy: 'Must be in the <head> section',
                solution: '<link rel="manifest" href="/manifest.json">'
            }
        },
        {
            id: 4,
            description: 'Add iOS meta tags: apple-mobile-web-app-capable and apple-touch-icon',
            completed: false,
            regex: /<meta\s+name\s*=\s*["']apple-mobile-web-app-capable["'][\s\S]*<link\s+rel\s*=\s*["']apple-touch-icon["']/i,
            hint: {
                concept: 'iOS Fallbacks',
                strategy: 'Safari ignores some manifest fields',
                solution: '<meta name="apple-mobile-web-app-capable" content="yes">'
            }
        },
        {
            id: 5,
            description: 'Register service worker: navigator.serviceWorker.register("/sw.js")',
            completed: false,
            regex: /navigator\s*\.\s*serviceWorker\s*\.\s*register\s*\(\s*["'][^"']+sw\.js["']\s*\)/,
            hint: {
                concept: 'Service Worker Registration',
                strategy: 'Register on page load',
                solution: 'navigator.serviceWorker.register("/sw.js")'
            }
        },
        {
            id: 6,
            description: 'Listen for "beforeinstallprompt" event and store it',
            completed: false,
            regex: /window\s*\.\s*addEventListener\s*\(\s*["']beforeinstallprompt["']/,
            hint: {
                concept: 'Install Prompt',
                strategy: 'Capture the event to trigger later',
                solution: 'window.addEventListener("beforeinstallprompt", (e) => { ... })'
            }
        },
        {
            id: 7,
            description: 'Create install button that calls deferredPrompt.prompt()',
            completed: false,
            regex: /deferredPrompt\s*\.\s*prompt\s*\(\s*\)/,
            hint: {
                concept: 'Trigger Install',
                strategy: 'Call prompt() when user clicks install button',
                solution: 'deferredPrompt.prompt();'
            }
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
    <title>Weather Dashboard PWA</title>
    
    <!-- 
    ╔══════════════════════════════════════════════════════════════════╗
    ║  TASK 3: Link your manifest.json here                            ║
    ╚══════════════════════════════════════════════════════════════════╝
    -->
    <!-- Link manifest here -->
    
    
    <!-- 
    ╔══════════════════════════════════════════════════════════════════╗
    ║  TASK 4: Add iOS meta tags                                       ║
    ║  - apple-mobile-web-app-capable (content="yes")                  ║
    ║  - apple-mobile-web-app-status-bar-style                         ║
    ║  - apple-touch-icon (link to your 192px icon)                    ║
    ╚══════════════════════════════════════════════════════════════════╝
    -->
    <!-- iOS meta tags here -->
    
    
    <!-- Theme color for browser chrome -->
    <meta name="theme-color" content="#667eea">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>🌤️ Weather Dashboard</h1>
        
        <!-- Install Button (hidden by default) -->
        <button id="install-btn" class="install-btn" style="display: none;">
            📲 Install App
        </button>
    </header>
    
    <main>
        <div class="weather-card">
            <div class="location">San Francisco, CA</div>
            <div class="temperature">72°F</div>
            <div class="condition">☀️ Sunny</div>
            <div class="details">
                <span>💧 Humidity: 45%</span>
                <span>💨 Wind: 12 mph</span>
            </div>
        </div>
        
        <div class="forecast">
            <div class="day">
                <span>Mon</span>
                <span>🌤️</span>
                <span>75°</span>
            </div>
            <div class="day">
                <span>Tue</span>
                <span>☁️</span>
                <span>68°</span>
            </div>
            <div class="day">
                <span>Wed</span>
                <span>🌧️</span>
                <span>62°</span>
            </div>
            <div class="day">
                <span>Thu</span>
                <span>⛈️</span>
                <span>58°</span>
            </div>
            <div class="day">
                <span>Fri</span>
                <span>☀️</span>
                <span>70°</span>
            </div>
        </div>
        
        <div class="pwa-status" id="pwa-status">
            ⏳ Checking PWA status...
        </div>
    </main>
    
    <script src="app.js"></script>
</body>
</html>
`
        },
        {
            name: 'manifest.json',
            language: 'json',
            content: `{
    "_comment": "TASK 1 & 2: Complete this manifest",
    
    "name": "",
    "short_name": "",
    "description": "Your personal weather dashboard - works offline!",
    
    "start_url": "/",
    "scope": "/",
    "display": "",
    
    "theme_color": "#667eea",
    "background_color": "#1a1a2e",
    
    "icons": [
        {
            "src": "/icons/icon-192.png",
            "sizes": "",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "/icons/icon-512.png",
            "sizes": "",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ],
    
    "shortcuts": [
        {
            "name": "Check Today",
            "url": "/?view=today",
            "icons": [{ "src": "/icons/today.png", "sizes": "96x96" }]
        }
    ]
}
`
        },
        {
            name: 'app.js',
            language: 'javascript',
            content: `// Weather Dashboard PWA - Installation Logic

const installBtn = document.getElementById('install-btn');
const statusEl = document.getElementById('pwa-status');

// ═══════════════════════════════════════════════════════════════════
// TASK 5: Register Service Worker
// ═══════════════════════════════════════════════════════════════════
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // TODO: Register the service worker here
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('SW registered:', reg.scope))
        //     .catch(err => console.log('SW registration failed:', err));
        
        console.log('Service Worker not registered yet - complete Task 5!');
    });
}

// ═══════════════════════════════════════════════════════════════════
// TASK 6: Capture the beforeinstallprompt event
// ═══════════════════════════════════════════════════════════════════

// Store the deferred prompt globally
let deferredPrompt = null;

// TODO: Listen for 'beforeinstallprompt' event
// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent Chrome's default install prompt
//     e.preventDefault();
//     
//     // Store the event for later
//     deferredPrompt = e;
//     
//     // Show our custom install button
//     installBtn.style.display = 'block';
//     
//     // Update status
//     statusEl.textContent = '✅ App is installable! Click the button above.';
// });


// ═══════════════════════════════════════════════════════════════════
// TASK 7: Handle install button click
// ═══════════════════════════════════════════════════════════════════

installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) {
        console.log('No deferred prompt available');
        return;
    }
    
    // TODO: Trigger the install prompt
    // deferredPrompt.prompt();
    
    // TODO: Wait for user choice
    // const { outcome } = await deferredPrompt.userChoice;
    // console.log('User chose:', outcome);
    
    // TODO: Clear the deferred prompt (can only be used once)
    // deferredPrompt = null;
    // installBtn.style.display = 'none';
    
    console.log('Install button clicked - complete Task 7!');
});


// ═══════════════════════════════════════════════════════════════════
// Track when app is installed
// ═══════════════════════════════════════════════════════════════════

window.addEventListener('appinstalled', () => {
    console.log('🎉 App was installed!');
    statusEl.textContent = '🎉 App installed successfully!';
    installBtn.style.display = 'none';
    deferredPrompt = null;
});


// ═══════════════════════════════════════════════════════════════════
// Check if running as installed PWA
// ═══════════════════════════════════════════════════════════════════

if (window.matchMedia('(display-mode: standalone)').matches) {
    statusEl.textContent = '📱 Running as installed PWA!';
} else {
    statusEl.textContent = '🌐 Running in browser - install for best experience';
}


// ═══════════════════════════════════════════════════════════════════
// Debug: Check manifest and SW status
// ═══════════════════════════════════════════════════════════════════

async function checkPwaStatus() {
    const checks = [];
    
    // Check if manifest is linked
    const manifestLink = document.querySelector('link[rel="manifest"]');
    checks.push(manifestLink ? '✅ Manifest linked' : '❌ Manifest not linked');
    
    // Check if SW is registered
    if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        checks.push(regs.length > 0 ? '✅ SW registered' : '❌ SW not registered');
    }
    
    // Check HTTPS
    const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
    checks.push(isSecure ? '✅ Secure context' : '❌ Not secure (needs HTTPS)');
    
    console.log('PWA Status:', checks);
}

checkPwaStatus();
`
        },
        {
            name: 'sw.js',
            language: 'javascript',
            content: `// Service Worker for Weather Dashboard PWA
// This file enables offline functionality

const CACHE_NAME = 'weather-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Install Event - Cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event - Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    console.log('[SW] Serving from cache:', event.request.url);
                    return cachedResponse;
                }
                
                console.log('[SW] Fetching:', event.request.url);
                return fetch(event.request);
            })
            .catch(() => {
                // If both cache and network fail, show offline page
                if (event.request.mode === 'navigate') {
                    return caches.match('/offline.html');
                }
            })
    );
});
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `/* Weather Dashboard PWA Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    min-height: 100vh;
    color: #fff;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

h1 {
    font-size: 1.5rem;
}

.install-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.install-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

main {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.weather-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    margin-bottom: 30px;
}

.location {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 10px;
}

.temperature {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.condition {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.details {
    display: flex;
    justify-content: center;
    gap: 30px;
    opacity: 0.8;
}

.forecast {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.day {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 15px;
    text-align: center;
    flex: 1;
    margin: 0 5px;
}

.day span {
    display: block;
    margin-bottom: 8px;
}

.day span:nth-child(2) {
    font-size: 1.5rem;
}

.pwa-status {
    text-align: center;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Installed PWA - Adjust for notch/safe areas */
@media (display-mode: standalone) {
    header {
        padding-top: env(safe-area-inset-top, 20px);
    }
    
    .pwa-status {
        background: rgba(102, 126, 234, 0.2);
    }
}
`
        }
    ]
};
