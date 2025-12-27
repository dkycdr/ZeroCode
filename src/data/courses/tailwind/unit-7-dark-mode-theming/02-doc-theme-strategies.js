import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ThemeStrategies = {
    id: 'tailwind-u7-doc-2-strategies',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Theme Implementation Strategies',
    duration: '12 min read',
    content: `
# Theme Implementation Strategies

## The localStorage Pattern

The most common way to implement dark mode with user control:

\`\`\`javascript
// On page load (in <head> to prevent flash)
if (localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
\`\`\`

---

## The Toggle Button Logic

\`\`\`javascript
// Toggle function
function toggleTheme() {
  const html = document.documentElement;
  
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  }
}
\`\`\`

---

## Preventing the Flash of Wrong Theme

**The Problem:** Page loads in light mode, then flashes to dark when JS runs.

**The Solution:** Inline script in \`<head>\` BEFORE any content:

\`\`\`html
<head>
  <!-- This runs before page renders -->
  <script>
    if (localStorage.theme === 'dark' ||
        (!localStorage.theme && 
         matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  </script>
</head>
\`\`\`

> [!WARNING]
> This script MUST be inline, not external. External scripts are deferred and won't prevent the flash.

---

## Three-State Theme Toggle

Beyond just light/dark, offer a "system" option:

\`\`\`javascript
// localStorage.theme can be: 'light', 'dark', or undefined (system)

function setTheme(mode) {
  if (mode === 'system') {
    localStorage.removeItem('theme');
    applySystemPreference();
  } else {
    localStorage.theme = mode;
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }
}

function applySystemPreference() {
  const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDark);
}
\`\`\`

---

## React Implementation

\`\`\`jsx
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('system');
  
  useEffect(() => {
    const savedTheme = localStorage.theme || 'system';
    setTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      localStorage.removeItem('theme');
      const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [theme]);
  
  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
\`\`\`

---

## Listening for System Changes

If user hasn't set a preference, respond to system changes:

\`\`\`javascript
matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.theme) {
      document.documentElement.classList.toggle('dark', e.matches);
    }
  });
\`\`\`

---

## Toggle Button UI Patterns

### Icon Swap

\`\`\`html
<button id="theme-toggle">
  <!-- Sun icon (shown in dark mode) -->
  <svg class="hidden dark:block">☀️</svg>
  <!-- Moon icon (shown in light mode) -->
  <svg class="block dark:hidden">🌙</svg>
</button>
\`\`\`

### Animated Toggle

\`\`\`html
<button class="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full">
  <span class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full 
               transition-transform dark:translate-x-8">
  </span>
</button>
\`\`\`

---

## Key Takeaways

✅ **localStorage** = Persist user preference
✅ **Inline script in HEAD** = Prevent flash
✅ **Three states** = Light, dark, system
✅ **Listen for changes** = Respond to OS preference
✅ **Icon swap** = Visual feedback for current mode
\`
`
};
