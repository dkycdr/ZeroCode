import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2ComparisonExercise = {
    id: 'tailwind-u0-lab-2-comparison',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Rebuild CSS Component with Tailwind',
    duration: '25 min',
    content: `
# Lab: Rebuild CSS Component with Tailwind

## The Challenge

You've been given a component built with traditional CSS. Your mission: **rebuild it using only Tailwind utilities**.

## Original Component (Vanilla CSS)

This alert component uses custom CSS classes:

\`\`\`html
<div class="alert alert-success">
  <strong>Success!</strong> Your changes have been saved.
</div>
\`\`\`

\`\`\`css
.alert {
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.alert-success {
  background-color: #d1fae5;
  border-left: 4px solid #10b981;
  color: #065f46;
}
\`\`\`

## Your Mission

Recreate this exact design using Tailwind classes!

### Requirements

1. Same padding (16px vertical, 20px horizontal)
2. Same border-radius (8px)
3. Same margin bottom (16px)
4. Same colors (green theme)
5. Same left border (4px solid green)
6. Flexbox layout with gap
7. Add an icon (using emoji)

Let's see if you can match it! 💪
`,
    tasks: [
        {
            id: 1,
            description: 'Add flexbox with items-center and gap-3',
            completed: false,
            regex: /class\s*=\s*["'][^"']*flex[^"']*items-center[^"']*gap-3[^"']*["']/,
            hint: {
                concept: 'Flexbox Utilities',
                strategy: 'flex enables flexbox, items-center aligns vertically, gap-3 adds spacing',
                solution: 'class="flex items-center gap-3 ..."'
            }
        },
        {
            id: 2,
            description: 'Add padding py-4 px-5 (16px vertical, 20px horizontal)',
            completed: false,
            regex: /class\s*[^"']*py-4[^"']*px-5[^"']*/,
            hint: {
                concept: 'Spacing Utilities',
                strategy: 'py-4 = padding-y: 1rem (16px), px-5 = padding-x: 1.25rem (20px)',
                solution: 'class="... py-4 px-5 ..."'
            }
        },
        {
            id: 3,
            description: 'Add rounded-lg (8px border radius)',
            completed: false,
            regex: /class\s*=\s*["'][^"']*rounded-lg[^"']*["']/,
            hint: {
                concept: 'Border Radius',
                strategy: 'rounded-lg = border-radius: 0.5rem (8px)',
                solution: 'class="... rounded-lg ..."'
            }
        },
        {
            id: 4,
            description: 'Add background bg-green-100',
            completed: false,
            regex: /class\s*=\s*["'][^"']*bg-green-100[^"']*["']/,
            hint: {
                concept: 'Background Colors',
                strategy: 'bg-green-100 gives a light green background',
                solution: 'class="... bg-green-100 ..."'
            }
        },
        {
            id: 5,
            description: 'Add text color text-green-800',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-green-800[^"']*["']/,
            hint: {
                concept: 'Text Colors',
                strategy: 'text-green-800 gives dark green text',
                solution: 'class="... text-green-800 ..."'
            }
        },
        {
            id: 6,
            description: 'Add left border border-l-4 border-green-500',
            completed: false,
            regex: /class\s*=\s*["'][^"']*border-l-4[^"']*border-green-5\d+[^"']*["']/,
            hint: {
                concept: 'Borders',
                strategy: 'border-l-4 = 4px left border, border-green-500 sets the color',
                solution: 'class="... border-l-4 border-green-500 ..."'
            }
        },
        {
            id: 7,
            description: 'Add margin bottom mb-4',
            completed: false,
            regex: /class\s*=\s*["'][^"']*mb-4[^"']*["']/,
            hint: {
                concept: 'Margin',
                strategy: 'mb-4 = margin-bottom: 1rem (16px)',
                solution: 'class="... mb-4"'
            }
        },
        {
            id: 8,
            description: 'Add font-semibold to the strong element',
            completed: false,
            regex: /<strong[^>]*class\s*=\s*["'][^"']*font-semibold[^"']*["']/,
            hint: {
                concept: 'Font Weight',
                strategy: 'font-semibold = font-weight: 600',
                solution: '<strong class="font-semibold">Success!</strong>'
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
    <title>Tailwind Alert Component</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-8">
    
    <h1 class="text-2xl font-bold mb-6">Alert Components</h1>
    
    <!-- Task: Rebuild this alert with Tailwind -->
    <!-- Original uses: .alert .alert-success classes -->
    <!-- Now use only Tailwind utilities! -->
    
    <div class="">
        <span class="text-2xl">✅</span>
        <div>
            <strong class="">Success!</strong>
            Your changes have been saved.
        </div>
    </div>
    
    <!-- BONUS: Try creating error and warning variants! -->
    <div class="flex items-center gap-3 py-4 px-5 rounded-lg bg-red-100 text-red-800 border-l-4 border-red-500 mb-4">
        <span class="text-2xl">❌</span>
        <div>
            <strong class="font-semibold">Error!</strong>
            Something went wrong. Please try again.
        </div>
    </div>
    
    <div class="flex items-center gap-3 py-4 px-5 rounded-lg bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 mb-4">
        <span class="text-2xl">⚠️</span>
        <div>
            <strong class="font-semibold">Warning!</strong>
            This action cannot be undone.
        </div>
    </div>
    
</body>
</html>`
        }
    ]
};
