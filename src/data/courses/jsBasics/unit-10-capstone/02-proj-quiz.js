import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const proj2QuizApp = {
    id: 'js-u10-proj-2-quiz',
    type: CONTENT_TYPES.LESSON,
    title: 'Project: Quiz App',
    duration: '45 min',
    content: `
# Project: Interactive Quiz App

## Build a Quiz from Scratch

Create a quiz application that tests knowledge on any topic.

---

## Features:
1. Array of questions with options
2. Display current question
3. Handle answer selection
4. Track and display score
5. Show final results
`,
    tasks: [
        {
            id: 1,
            description: 'Create questions array with objects containing question, options, and correct answer',
            completed: false,
            hint: '[{ question: "...", options: [...], correct: 0 }]',
            regex: /const\s+questions\s*=\s*\[/
        },
        {
            id: 2,
            description: 'Create function to display current question',
            completed: false,
            hint: 'function showQuestion(index) { ... }',
            regex: /function\s+showQuestion/
        },
        {
            id: 3,
            description: 'Add event listener for answer buttons',
            completed: false,
            hint: 'addEventListener("click", ...)',
            regex: /addEventListener\s*\(\s*["']click["']/
        },
        {
            id: 4,
            description: 'Track and display score',
            completed: false,
            hint: 'Create score variable and update on correct answer',
            regex: /let\s+score\s*=/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Quiz App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="quiz-container">
        <h1>JavaScript Quiz</h1>
        <div id="question"></div>
        <div id="options"></div>
        <p>Score: <span id="score">0</span></p>
    </div>
    <script src="script.js"></script>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `.quiz-container {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

#options button {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
}`
        },
        {
            name: 'script.js',
            language: 'javascript',
            content: `// Quiz App

// Task 1: Create questions array


// Initialize variables
let currentQuestion = 0;
let score = 0;

// Task 2: Create showQuestion function


// Task 3: Handle answer clicks


// Task 4: Update score display


// Start the quiz
showQuestion(currentQuestion);
`
        }
    ]
};
