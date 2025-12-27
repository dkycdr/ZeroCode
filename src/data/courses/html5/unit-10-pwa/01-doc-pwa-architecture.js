import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1PwaArchitecture = {
    id: 'html5-u10-doc-1-architecture',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: What is a PWA?',
    duration: '22 min read',
    content: `
# Deep Dive: What is a Progressive Web App (PWA)?

## 1. The Problem with Websites

Regular websites have limitations:
- ❌ Need internet to work
- ❌ Can't install to home screen (professionally)
- ❌ Can't send push notifications
- ❌ Slow to load on repeat visits

**Progressive Web Apps (PWAs)** solve all of these problems.

---

## 2. PWA = Website + Superpowers

A PWA is just a website that:
- ✅ Works offline (like a native app)
- ✅ Can be installed to the home screen
- ✅ Loads instantly on repeat visits
- ✅ Can send push notifications

### The Best Part:
You don't need to submit to App Store or Play Store. Users can install directly from the browser!

---

## 3. The Three Pillars of PWA

### Pillar 1: HTTPS (Secure)
Your website MUST use HTTPS, not HTTP. This is for security.

### Pillar 2: Web App Manifest
A JSON file that tells the phone: "I'm an app, not just a website."

### Pillar 3: Service Worker
A JavaScript file that runs in the background, even when your app is closed.

---

## 4. The Service Worker Explained

Think of the Service Worker as a **traffic controller** sitting between your app and the internet.

\`\`\`text
   YOUR APP (Browser)
          │
          ▼
   ┌─────────────────┐
   │ SERVICE WORKER  │ ← The Middle Man
   │  (Traffic Cop)  │
   └─────────────────┘
       /         \\
      ▼           ▼
  📦 CACHE      🌐 INTERNET
(Local copy)   (Live server)
\`\`\`

### What the Service Worker Can Do:
1. **Intercept** every network request your app makes
2. **Check** if the resource is in the cache
3. **Serve** from cache (instant!) or fetch from network
4. **Store** new responses in the cache for next time

---

## 5. The Service Worker Lifecycle

Service Workers have a specific lifecycle that can be confusing at first:

### Phase 1: Installing
The Service Worker is downloaded and starts installing.
\`\`\`javascript
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    // Pre-cache important files here
});
\`\`\`

### Phase 2: Waiting
The new Service Worker is ready but waiting for old version to stop.

### Phase 3: Active
The Service Worker now controls the page.
\`\`\`javascript
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated!');
    // Clean up old caches here
});
\`\`\`

### Phase 4: Fetching
The Service Worker intercepts network requests.
\`\`\`javascript
self.addEventListener('fetch', (event) => {
    console.log('Intercepted:', event.request.url);
    // Decide: serve from cache or network
});
\`\`\`

---

## 6. Caching Strategies

Not all content should be cached the same way. Choose wisely:

### Strategy 1: Cache First (For Static Assets)
Check cache first. If not found, go to network.
- **Best for**: Images, CSS, fonts, libraries
- **Why**: These rarely change

\`\`\`javascript
event.respondWith(
    caches.match(event.request).then(cached => {
        return cached || fetch(event.request);
    })
);
\`\`\`

### Strategy 2: Network First (For Dynamic Content)
Try network first. If offline, use cache as backup.
- **Best for**: News feeds, user data, API calls
- **Why**: You want fresh data when possible

\`\`\`javascript
event.respondWith(
    fetch(event.request).catch(() => {
        return caches.match(event.request);
    })
);
\`\`\`

### Strategy 3: Stale While Revalidate
Show cached version instantly, update cache in background.
- **Best for**: Profile pictures, semi-static content
- **Why**: Fast load, eventually consistent

\`\`\`javascript
event.respondWith(
    caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
        });
        return cached || fetchPromise;
    })
);
\`\`\`

---

## 7. The Web App Manifest

This JSON file describes your app to the device:

\`\`\`json
{
    "name": "My Awesome App",
    "short_name": "AwesomeApp",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3b82f6",
    "icons": [
        {
            "src": "/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
\`\`\`

### Key Fields:
| Field | Purpose |
|:---|:---|
| \`name\` | Full name shown during install |
| \`short_name\` | Shown under the icon |
| \`start_url\` | Which page opens when launched |
| \`display\` | "standalone" = no browser URL bar |
| \`theme_color\` | Top bar color on Android |
| \`icons\` | App icons for different sizes |

### Connecting the Manifest:
In your HTML head:
\`\`\`html
<link rel="manifest" href="/manifest.json">
\`\`\`

---

## 8. Maskable Icons (Looking Pro on Android)

Android devices can display icons in different shapes (circle, square, teardrop). Standard icons get cropped badly.

**Maskable icons** have a "safe zone" that ensures your logo isn't cut off:

\`\`\`json
{
    "src": "/icon-512.png",
    "sizes": "512x512",
    "purpose": "maskable any"
}
\`\`\`

Use tools like [Maskable.app](https://maskable.app/) to test your icons.

---

## 9. Install Prompts

Browsers automatically show "Add to Home Screen" prompts for eligible PWAs.

### Requirements for the Prompt:
- ✅ Served over HTTPS
- ✅ Has a valid manifest with icons
- ✅ Has a registered Service Worker
- ✅ User has engaged with the site (not just landed)

### Custom Install Button:
\`\`\`javascript
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
        console.log('User choice:', choice.outcome);
    });
});
\`\`\`

---

## 10. PWA Checklist

### Minimum Requirements:
- [ ] HTTPS enabled
- [ ] Valid manifest.json linked in HTML
- [ ] Two icons: 192x192 and 512x512
- [ ] Service Worker registered
- [ ] Works offline (shows something)

### Nice to Have:
- [ ] Maskable icons
- [ ] Splash screen configured
- [ ] Theme color set
- [ ] Offline page with helpful message
- [ ] Background sync for offline actions
`
};
