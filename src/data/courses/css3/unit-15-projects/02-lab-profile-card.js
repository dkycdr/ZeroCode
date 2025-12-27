import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ProfileCard = {
    id: 'css3-15-2',
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
};
