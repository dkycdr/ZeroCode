import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4SetupVite = {
    id: 'tailwind-u0-doc-4-vite',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Modern Setup with Vite',
    duration: '10 min read',
    content: `
# Modern Setup with Vite

## Why Vite?

**Vite** is the modern build tool that offers:
- ⚡ Lightning-fast hot reload
- 📦 Optimized production builds
- 🎯 Simple configuration
- 🔥 Best development experience

Perfect pairing with Tailwind CSS!

---

## Installation Steps

### Step 1: Create Vite Project

\`\`\`bash
# Create new Vite project
npm create vite@latest my-tailwind-app

# Choose framework (select "Vanilla" for pure HTML/CSS/JS)
✔ Select a framework: › Vanilla
✔ Select a variant: › JavaScript

# Navigate to project
cd my-tailwind-app
\`\`\`

### Step 2: Install Dependencies

\`\`\`bash
# Install base dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
\`\`\`

### Step 3: Initialize Tailwind

\`\`\`bash
# Generate tailwind.config.js and postcss.config.js
npx tailwindcss init -p
\`\`\`

This creates two files:
- \`tailwind.config.js\` - Tailwind configuration
- \`postcss.config.js\` - PostCSS configuration

---

## Configuration

### tailwind.config.js

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Watch all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

**Important:** The \`content\` array tells Tailwind which files to scan for class names.

### postcss.config.js

\`\`\`javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},  // Adds vendor prefixes automatically
  },
}
\`\`\`

---

## Add Tailwind Directives

Create or update \`src/style.css\`:

\`\`\`css
/* Tailwind Directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom CSS here (if needed) */
\`\`\`

**What do these do?**
- \`@tailwind base\`: CSS reset + base styles
- \`@tailwind components\`: Component classes (if you create them)
- \`@tailwind utilities\`: All utility classes

---

## Project Structure

\`\`\`
my-tailwind-app/
├── node_modules/
├── public/
├── src/
│   ├── main.js
│   └── style.css        ← Add Tailwind directives here
├── index.html
├── package.json
├── tailwind.config.js   ← Tailwind configuration
├── postcss.config.js    ← PostCSS configuration
└── vite.config.js
\`\`\`

---

## Update HTML

Edit \`index.html\`:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind + Vite</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
\`\`\`

Edit \`src/main.js\`:

\`\`\`javascript
import './style.css'

document.querySelector('#app').innerHTML = \`
  <div class="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-2xl max-w-md">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Tailwind + Vite ⚡
      </h1>
      <p class="text-gray-600 mb-6">
        Lightning-fast development with modern tooling!
      </p>
      <button class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
        Get Started
      </button>
    </div>
  </div>
\`
\`\`\`

---

## Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:5173\` and you'll see your Tailwind-styled page! 🎉

---

## Build for Production

When ready to deploy:

\`\`\`bash
npm run build
\`\`\`

This creates an optimized \`dist/\` folder with:
- ✅ Purged CSS (only used classes)
- ✅ Minified files
- ✅ ~5-10KB CSS bundle (vs 3MB CDN)

---

## JIT Mode (Just-In-Time)

**Good news:** JIT mode is enabled by default in modern Tailwind!

### What is JIT?

JIT generates CSS **on-demand** as you write classes. Benefits:

- ⚡ Instant build times
- 🎨 Arbitrary values: \`w-[137px]\`, \`top-[-17px]\`
- 📦 Same dev/prod output
- 🔥 All variants available: \`focus:hover:bg-blue-500\`

### Arbitrary Values Example

\`\`\`html
<!-- Before JIT: Need to configure custom values -->
<div class="top-[-113px]">...</div>

<!-- Now it just works! -->
<div class="bg-[#bada55]">Custom hex color</div>
<div class="w-[347px]">Custom width</div>
<div class="grid-cols-[1fr,700px,2fr]">Custom grid</div>
\`\`\`

---

## Development Workflow

1. **Start dev server**: \`npm run dev\`
2. **Edit HTML/JS**: Changes appear instantly
3. **Add Tailwind classes**: Auto-generated
4. **Save**: Hot reload ⚡
5. **Build**: \`npm run build\` when ready

---

## Common Issues

### Issue: "Tailwind classes not working"

**Fix:** Check \`tailwind.config.js\` content paths:

\`\`\`javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",  // Make sure this matches your files
],
\`\`\`

### Issue: "CSS file too large"

**Fix:** Make sure you're building for production (\`npm run build\`), not using dev mode in production.

### Issue: "Styles not updating"

**Fix:** Restart dev server or clear browser cache.

---

## Vite vs Other Build Tools

| Tool | Speed | Ease | Ecosystem |
|------|-------|------|-----------|
| **Vite** | ⚡⚡⚡ | ⭐⭐⭐ | Growing |
| Webpack | ⚡ | ⭐ | Huge |
| Parcel | ⚡⚡ | ⭐⭐⭐ | Medium |
| Create React App | ⚡ | ⭐⭐ | React-only |

**Winner:** Vite for modern projects! 🏆

---

## Next Steps

Now that you have a proper setup:

1. Learn core utilities (spacing, colors, typography)
2. Master layout (Flexbox, Grid)
3. Build real components
4. Deploy to production

Ready to build with Tailwind? Let's go! 🚀

> [!TIP]
> **Pro Tip:** Keep the dev server running while coding. Vite's hot reload is so fast you'll forget you're using a build tool!
`
};
