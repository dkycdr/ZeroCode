import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ManifestDeepDive = {
    id: 'html5-u10-doc-2-manifest',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Web App Manifest Mastery',
    duration: '20 min read',
    content: `
# Deep Dive: Web App Manifest Mastery

## What is the Manifest?

The **Web App Manifest** is a JSON file that tells the browser: "Treat me like a real app, not just a website."

Without it, your PWA is just a bookmark. With it, your PWA:
- Has a name and icon on the home screen
- Opens in full-screen mode (no URL bar)
- Has a custom splash screen
- Can define shortcuts (like right-click actions)

---

## The Complete Manifest Structure

\`\`\`json
{
    "name": "ZeroCode Academy",
    "short_name": "ZeroCode",
    "description": "Learn web development from zero to hero",
    "start_url": "/",
    "scope": "/",
    "display": "standalone",
    "orientation": "portrait",
    "theme_color": "#667eea",
    "background_color": "#ffffff",
    "icons": [
        {
            "src": "/icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "/icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ],
    "screenshots": [
        {
            "src": "/screenshots/home.png",
            "sizes": "1280x720",
            "type": "image/png",
            "form_factor": "wide"
        },
        {
            "src": "/screenshots/mobile.png",
            "sizes": "750x1334",
            "type": "image/png",
            "form_factor": "narrow"
        }
    ],
    "shortcuts": [
        {
            "name": "Dashboard",
            "short_name": "Dash",
            "url": "/dashboard",
            "icons": [{ "src": "/icons/dashboard.png", "sizes": "96x96" }]
        }
    ],
    "categories": ["education", "productivity"]
}
\`\`\`

---

## Field-by-Field Breakdown

### Identity Fields

| Field | Purpose | Example |
|:------|:--------|:--------|
| \`name\` | Full app name (install prompt, app drawer) | "ZeroCode Academy" |
| \`short_name\` | Shown under icon (max ~12 chars) | "ZeroCode" |
| \`description\` | App store description | "Learn web development..." |

> [!IMPORTANT]
> \`short_name\` is what users see daily. Keep it SHORT! "My Super Amazing App" becomes "My Super..." and looks broken.

---

### Display Modes

The \`display\` field controls how your PWA looks when opened:

\`\`\`text
┌────────────────────────────────────────────────┐
│ browser       │ Normal browser with URL bar    │
├───────────────┼────────────────────────────────┤
│ minimal-ui    │ Some browser chrome (back btn) │
├───────────────┼────────────────────────────────┤
│ standalone    │ No URL bar, looks native       │ ← MOST COMMON
├───────────────┼────────────────────────────────┤
│ fullscreen    │ No status bar, full takeover   │
└────────────────────────────────────────────────┘
\`\`\`

### Visual Comparison:

\`\`\`text
[browser]           [standalone]         [fullscreen]
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ ← → 🔄 URL  │    │  ▀▀ 12:00   │    │             │
├─────────────┤    ├─────────────┤    │             │
│             │    │             │    │             │
│   Your App  │    │   Your App  │    │   Your App  │
│             │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
\`\`\`

> [!TIP]
> Use \`"display": "standalone"\` for most apps. Use \`"fullscreen"\` for games or immersive experiences.

---

### Start URL and Scope

\`\`\`json
{
    "start_url": "/app/home?source=pwa",
    "scope": "/app/"
}
\`\`\`

| Field | Purpose |
|:------|:--------|
| \`start_url\` | Where the app opens when launched. Add a query param to track PWA installs in analytics! |
| \`scope\` | Which URLs are "inside" your app. Navigation outside scope opens in browser. |

**Example Scope Logic:**
- Scope: \`/app/\`
- \`/app/dashboard\` → Opens inside PWA ✅
- \`/app/settings\` → Opens inside PWA ✅
- \`/blog/article\` → Opens in browser ❌ (outside scope)

---

### Colors: Theme vs Background

\`\`\`json
{
    "theme_color": "#667eea",
    "background_color": "#ffffff"
}
\`\`\`

**They look similar but serve different purposes:**

| Color | Where It Shows | When |
|:------|:--------------|:-----|
| \`theme_color\` | Status bar, browser UI, task switcher | While using the app |
| \`background_color\` | Splash screen background | During app launch (before JS loads) |

**Visual:**
\`\`\`text
[Loading Splash]          [Running App]
┌─────────────────┐      ┌─────────────────┐
│████████████████│      │  theme_color ▀▀ │
│                │      ├─────────────────┤
│    [LOGO]      │      │                 │
│                │      │   App Content   │
│ background_    │      │                 │
│ color is here  │      │                 │
└─────────────────┘      └─────────────────┘
\`\`\`

> [!WARNING]
> Make sure \`background_color\` matches your app's initial background. A white splash followed by a dark app feels jarring!

---

### Icons: Requirements & Sizes

**Minimum requirements for installability:**
- 192x192 PNG
- 512x512 PNG

**Recommended icon sizes:**
\`\`\`json
"icons": [
    { "src": "/icon-48.png", "sizes": "48x48", "type": "image/png" },
    { "src": "/icon-72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/icon-96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/icon-144.png", "sizes": "144x144", "type": "image/png" },
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
]
\`\`\`

---

### Maskable Icons (Android Adaptive)

Android devices display icons in different shapes (circle, square, teardrop). Standard icons get cropped badly.

**Safe Zone = 80% of icon center**

\`\`\`text
┌────────────────────┐
│    ╭──────────╮    │
│    │          │    │
│    │  SAFE    │    │ ← Your logo must fit HERE
│    │  ZONE    │    │
│    │          │    │
│    ╰──────────╯    │
└────────────────────┘
       Cropped!
\`\`\`

**Declare maskable icons:**
\`\`\`json
{
    "src": "/icon-512.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "maskable"
}
\`\`\`

Use [Maskable.app](https://maskable.app/) to test your icons!

---

### Screenshots (Richer Install UI)

Adding screenshots improves the install prompt on supported browsers:

\`\`\`json
"screenshots": [
    {
        "src": "/screenshots/desktop.png",
        "sizes": "1280x720",
        "type": "image/png",
        "form_factor": "wide",
        "label": "Dashboard showing courses"
    },
    {
        "src": "/screenshots/mobile.png",
        "sizes": "750x1334",
        "type": "image/png",
        "form_factor": "narrow",
        "label": "Mobile learning view"
    }
]
\`\`\`

---

### Shortcuts (Quick Actions)

Add shortcuts that appear when long-pressing your app icon:

\`\`\`json
"shortcuts": [
    {
        "name": "New Document",
        "short_name": "New",
        "description": "Create a new document",
        "url": "/new?source=shortcut",
        "icons": [{ "src": "/icons/new.png", "sizes": "96x96" }]
    },
    {
        "name": "Search",
        "url": "/search",
        "icons": [{ "src": "/icons/search.png", "sizes": "96x96" }]
    }
]
\`\`\`

---

## Linking the Manifest

Add this to your HTML \`<head>\`:

\`\`\`html
<head>
    <!-- Link manifest -->
    <link rel="manifest" href="/manifest.json">
    
    <!-- iOS Safari fallbacks (doesn't read manifest well) -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="ZeroCode">
    <link rel="apple-touch-icon" href="/icons/icon-192.png">
    
    <!-- Windows fallback -->
    <meta name="msapplication-TileImage" content="/icons/icon-144.png">
    <meta name="msapplication-TileColor" content="#667eea">
    
    <!-- Theme color (for browser chrome) -->
    <meta name="theme-color" content="#667eea">
</head>
\`\`\`

---

## Testing Your Manifest

### Chrome DevTools

1. Open DevTools (F12)
2. Go to **Application** tab
3. Click **Manifest** in sidebar
4. Check for warnings/errors

### Common Issues:

| Error | Fix |
|:------|:----|
| "No matching service worker" | Register a service worker |
| "No icon of at least 512x512" | Add 512px icon |
| "start_url not in scope" | Adjust scope or start_url |
| "Manifest has no theme_color" | Add theme_color |

---

## Manifest Checklist

Before deploying your PWA:

- [ ] \`name\` and \`short_name\` defined
- [ ] \`start_url\` set (with analytics query param)
- [ ] \`display\` set to "standalone"
- [ ] 192x192 AND 512x512 icons
- [ ] At least one maskable icon
- [ ] \`theme_color\` matches your brand
- [ ] \`background_color\` matches app background
- [ ] Linked in HTML \`<head>\`
- [ ] iOS meta tags added
- [ ] Tested in DevTools

---

## Key Takeaways

1. **Manifest = App Identity** - Without it, no install prompt
2. **Display: standalone** - Most common for app-like feel
3. **Icons: 192 + 512 minimum** - Both required for installability
4. **Maskable icons** - Prevent ugly cropping on Android
5. **Theme vs Background color** - Different purposes!
6. **iOS needs meta tags** - Safari ignores some manifest fields
7. **Test in DevTools** - Catch errors before users do
`
};
