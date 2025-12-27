
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Project = {
    id: 'dom-unit-6',
    title: 'Unit 6: Capstone Project',
    description: 'Build a fully functional Task Manager to prove your DOM mastery.',
    items: [
        {
            id: 'dom-6-project',
            type: CONTENT_TYPES.PROJECT,
            title: 'Project: Task Manager 📝',
            duration: '90 min',
            difficulty: 'Intermediate',
            description: 'Build a CRUD application (Create, Read, Update, Delete) for managing tasks.',
            content: `
# 🎯 Project: Task Manager 📝

## The Objective
Build a Todo list that allows users to:
1.  **Add** tasks via an input field.
2.  **Display** tasks in a list.
3.  **Toggle** tasks as "Done" (Strikethrough).
4.  **Delete** tasks permanently.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Function: Create addTodo(text) that handles createElement.',
                    completed: false,
                    regex: /function\s+addTodo|const\s+addTodo\s*=/
                },
                {
                    id: 2,
                    description: 'DOM: Use createElement("li") and appendChild().',
                    completed: false,
                    regex: /createElement\s*\(\s*['"]li['"]\s*\)/
                },
                {
                    id: 3,
                    description: 'Event: Handle Form Submit with preventDefault.',
                    completed: false,
                    regex: /addEventListener\s*\(\s*['"]submit['"][\s\S]*preventDefault/
                },
                {
                    id: 4,
                    description: 'Interactivity: Toggle "completed" class on click.',
                    completed: false,
                    regex: /classList\.toggle\s*\(\s*['"]completed['"]\s*\)/
                },
                {
                    id: 5,
                    description: 'Deletion: Remove element on delete button click.',
                    completed: false,
                    regex: /\.remove\s*\(\s*\)|removeChild/
                }
            ],
            starterFiles: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task Manager</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="app-container">
        <header>
            <h1>Tasks</h1>
            <p>Get things done, one step at a time.</p>
        </header>

        <!-- Input Form -->
        <form id="todoForm">
            <input type="text" id="todoInput" placeholder="Add a new task..." autocomplete="off">
            <button type="submit">Add</button>
        </form>

        <!-- List -->
        <ul id="todoList">
            <!-- Items will be added here via JS -->
        </ul>
    </div>

    <script src="script.js"></script>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* Modern CSS Reset */
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: 'Inter', -apple-system, sans-serif;
    background-color: #f3f4f6;
    color: #1f2937;
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

.app-container {
    background: white;
    width: 100%;
    max-width: 480px;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

header { margin-bottom: 2rem; }
header h1 { font-size: 2rem; font-weight: 800; color: #111827; }
header p { color: #6b7280; }

#todoForm {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
}

input {
    flex: 1;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 1rem;
}

button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}

button:hover { background: #1d4ed8; }

ul { list-style: none; }

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #f3f4f6;
    animation: fadeIn 0.3s ease;
}

li.completed span {
    text-decoration: line-through;
    color: #9ca3af;
}

.delete-btn {
    background: transparent;
    color: #ef4444;
    padding: 8px;
    font-size: 0.9rem;
}

.delete-btn:hover { background: #fee2e2; }

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}`
                },
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// 1. Select DOM Elements
const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

// 2. Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get value
    const text = input.value.trim();
    
    // Validate
    if (text !== "") {
        addTodo(text);
        input.value = ""; // Clear input
        input.focus();
    }
});

/**
 * Creates a new Todo Item and appends it to the DOM
 * @param {string} text 
 */
function addTodo(text) {
    // TODO: Create <li>
    // const li = ...

    // TODO: Create <span> for text
    
    // TODO: Create Delete Button
    
    // TODO: Add Click Event to LI (Toggle Completed)
    
    // TODO: Add Click Event to Delete Button
    
    // TODO: Append to List
}
`
                }
            ]
        }
    ]
};
