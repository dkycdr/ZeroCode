import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Directives = {
    id: 'tailwind-4-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Layers & Directives 📦',
    duration: '10 min read',
    content: `
# Deep Dive: Layers & Directives 📦

## 1. The CSS Cake
Tailwind bakes your CSS in 3 layers. Order matters.

1.  **Bottom Layer (@layer base)**:
    Global resets. \`h1\`, \`p\`, \`body\`. If you want all h1s to be bold, put it here.
    
2.  **Middle Layer (@layer components)**:
    Abstracted classes like \`.btn\` or \`.card\`.
    
3.  **Top Layer (@layer utilities)**:
    The atomic classes (\`p-4\`, \`text-center\`). These must **always win**.

## 2. Why use Layers?
If you write custom CSS *without* layers, you risk specificity wars.
By wrapping your custom CSS in \`@layer components\`, you guarantee that \`utility\` classes can still override them if needed.

\`\`\`css
@layer components {
  .card {
    background-color: white; /* Can be overridden by bg-red-500 */
  }
}
\`\`\`
    `
};
