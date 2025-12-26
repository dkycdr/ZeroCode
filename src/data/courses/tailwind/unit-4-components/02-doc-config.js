import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Config = {
    id: 'tailwind-4-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: tailwind.config.js ⚙️',
    duration: '15 min read',
    content: `
# Deep Dive: tailwind.config.js ⚙️

## 1. The Control Center
This file is the brain of your design system.
If it's not in the config, it doesn't exist.

## 2. Extend vs Override (Crucial!)
There are two places to put custom colors:

**Option A: \`theme.colors\` (The Nuke)**
If you put colors here, **Tailwind deletes all default colors**.
Use this only if you want to strictly force developers to use *only* your brand colors.

**Option B: \`theme.extend.colors\` (The Addition)**
If you put colors here, Tailwind **adds** them to the defaults.
You get \`bg-red-500\` (Default) AND \`bg-brand-orange\` (Custom).

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#3B82F6',
      }
    }
  }
}
\`\`\`

## 3. Plugins
Tailwind is just a JS engine. You can install plugins like apps.
*   **@tailwindcss/typography**: Automatically styles boring HTML (like blog posts) with beautiful typography (\`prose\`).
*   **@tailwindcss/forms**: Resets ugly browser defaults on inputs.
    `
};
