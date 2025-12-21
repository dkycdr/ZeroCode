import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Projects = {
    id: 'css3-unit-7',
    title: 'CSS Project - The Profile Card',
    description: 'Put it all together. Build a professional, responsive Profile Card using Flexbox, Grid, and beautiful styling.',
    items: [
        {
            id: 'css3-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Mental Model: The Blueprint 🏗️',
            duration: '10 min read',
            content: `
# Mental Model: The Blueprint 🏗️

You have learned the tools (Hammer, Saw, Drill). Now let's build a house.
A professional project requires combining everything:
1.  **Box Model**: For spacing (Padding/Margin).
2.  **Flexbox**: For alignment (Centering).
3.  **Grid/Responsive**: For layout adaptation.
4.  **Polish**: Shadows, Radius, Colors.

## Visual Goal
We are building a **Profile Card**.
*   **Mobile**: Image on top, Text below.
*   **Desktop**: Image on left, Text on right.

## Tailwind Bridge 🌉
This project in Tailwind would be:
\`\`\`html
<div class="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
    <img class="w-full md:w-1/3 object-cover" src="...">
    <div class="p-8">...</div>
</div>
\`\`\`
            `
        },
        {
            id: 'css3-7-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lesson: Building the Profile Card',
            duration: '45 min',
            content: `
# Lesson: Building the Profile Card

We have the HTML skeleton. Now you must style it to look professional.

## The Mission
1.  **Body Center**: Use Flexbox on \`body\` to center the card in the middle of the screen.
2.  **Card Container**: Give \`.card\` a white background, rounded corners (10px), and a subtle shadow.
3.  **Flex Layout**: Make the card a Flex container so image and text sit side-by-side.
4.  **Responsive**: On mobile (default), it should stack (Flex Column). On Desktop, it should be row.

## Step-by-Step
1.  Style \`body\`: \`display: flex\`, \`justify-content: center\`, \`align-items: center\`, \`min-height: 100vh\`.
2.  Style \`.card\`: \`border-radius: 10px\`, \`box-shadow: 0 4px 6px rgba(0,0,0,0.1)\`, \`overflow: hidden\`.
3.  Mobile First \`.card\`: \`display: flex\`, \`flex-direction: column\`.
4.  Desktop \`.card\`: \`@media (min-width: 600px)\` -> \`flex-direction: row\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Center Canvas: Select "body". Use Flexbox to center content horizontally and vertically (min-height 100vh).',
                    completed: false,
                    regex: /body\s*\{(?=[\s\S]*?display\s*:\s*flex)(?=[\s\S]*?justify-content\s*:\s*center)(?=[\s\S]*?align-items\s*:\s*center)(?=[\s\S]*?min-height\s*:\s*100vh)[\s\S]*?\}/i
                },
                {
                    id: 2,
                    description: 'Card Polish: Select ".card". Add "border-radius: 10px" and "overflow: hidden".',
                    completed: false,
                    regex: /\.card\s*\{(?=[\s\S]*?border-radius\s*:\s*10px)(?=[\s\S]*?overflow\s*:\s*hidden)[\s\S]*?\}/i
                },
                {
                    id: 3,
                    description: 'Mobile Stack: In ".card", set "display: flex" and "flex-direction: column" (default).',
                    completed: false,
                    regex: /\.card\s*\{(?=[\s\S]*?display\s*:\s*flex)(?=[\s\S]*?flex-direction\s*:\s*column)[\s\S]*?\}/i
                },
                {
                    id: 4,
                    description: 'Desktop Row: Add @media (min-width: 600px). Change ".card" flex-direction to "row".',
                    completed: false,
                    regex: /@media\s*\(\s*min-width\s*:\s*600px\s*\)\s*\{[\s\S]*?\.card\s*\{(?=[\s\S]*?flex-direction\s*:\s*row)[\s\S]*?\}[\s\S]*?\}/i
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <title>Profile Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <img class="profile-img" src="avatar.jpg" alt="Profile">
        <div class="content">
            <h2>Jane Doe</h2>
            <p>Frontend Developer</p>
        </div>
    </div>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* 1. Center the Card on Body */
body {
    margin: 0;
    background: #f0f2f5;
    font-family: sans-serif;
    /* TODO: Flex Center */
    
}

/* 2-3. Style the Card (Polish & Mobile Layout) */
.card {
    background: white;
    width: 100%;
    max-width: 500px;
    /* TODO: Polish & Flex Column */
    
}

.profile-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.content {
    padding: 20px;
}

/* 4. Desktop Layout */
@media (min-width: 600px) {
    .card {
        /* TODO: Flex Row */
        
    }
    .profile-img {
        width: 200px;
        height: auto;
    }
}
`
                }
            ]
        },
        {
            id: 'css3-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Project Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why do we use "overflow: hidden" on the card with rounded corners?',
                    options: [
                        'To hide the text',
                        'Because the square image would stick out of the rounded corners otherwise',
                        'To make the shadow visible',
                        'It is required for Flexbox'
                    ],
                    correctIndex: 1,
                    explanation: 'If distinct child elements (like an image) have square corners, they will bleed outside the parent\'s border-radius unless overflow is hidden.'
                },
                {
                    id: 'q2',
                    question: 'In Mobile-First design, what is the default flex-direction?',
                    options: [
                        'row (Side by side)',
                        'column (Stacked)',
                        'row-reverse',
                        'It depends on the phone'
                    ],
                    correctIndex: 1,
                    explanation: 'Mobile screens are narrow, so we usually stack elements vertically (column) by default.'
                },
                {
                    id: 'q3',
                    question: 'What is the purpose of max-width: 500px?',
                    options: [
                        'To make the card exactly 500px always',
                        'To prevent the card from getting too wide on large screens, while allowing it to shrink on small screens',
                        'To make the text bold',
                        'To center the card'
                    ],
                    correctIndex: 1,
                    explanation: 'max-width ensures legibility on desktop while remaining fluid (width: 100%) on mobile.'
                }
            ]
        }
    ]
};
