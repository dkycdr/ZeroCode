// DOM Manipulation - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const domCourse = {
    id: 'dom',
    title: 'DOM Manipulation',
    description: 'Make websites interactive by manipulating HTML with JavaScript.',
    
    units: [
        {
            id: 'dom-unit-1',
            title: 'Introduction to the DOM',
            description: 'Understand what the DOM is and how to access elements',
            items: [
                {
                    id: 'dom-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is the DOM?',
                    duration: '5 min read',
                    content: `
# What is the DOM?

**DOM** (Document Object Model) is a programming interface for HTML documents. It represents the page as a tree of objects that JavaScript can manipulate.

## The DOM Tree

\`\`\`
document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── h1
          ├── p
          └── div
              ├── span
              └── button
\`\`\`

## Why DOM Manipulation?

Without DOM:
- Static pages only
- No interactivity
- No dynamic updates

With DOM:
- ✅ Update content without page reload
- ✅ Respond to user actions
- ✅ Create/delete elements dynamically
- ✅ Change styles on the fly

## Real-World Examples

| Action | DOM Manipulation |
|--------|------------------|
| Like button | Change color, update count |
| Form validation | Show error messages |
| Dark mode toggle | Change body class |
| Load more posts | Add new elements |
| Shopping cart | Update item count |

> 💡 Every interactive website you use relies on DOM manipulation!
                    `
                },
                {
                    id: 'dom-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Selecting Elements',
                    duration: '20 min',
                    content: `
# Selecting Elements

## Methods to Select Elements

### getElementById
\`\`\`javascript
const header = document.getElementById('main-header');
// Returns single element or null
\`\`\`

### querySelector (Modern, Recommended)
\`\`\`javascript
const header = document.querySelector('#main-header');
const firstButton = document.querySelector('.btn');
const navLink = document.querySelector('nav a');
// Returns first match or null
\`\`\`

### querySelectorAll
\`\`\`javascript
const allButtons = document.querySelectorAll('.btn');
// Returns NodeList (array-like)

// Loop through
allButtons.forEach(btn => {
    console.log(btn);
});
\`\`\`

### Other Methods (Older)
\`\`\`javascript
document.getElementsByClassName('btn');  // HTMLCollection
document.getElementsByTagName('p');      // HTMLCollection
\`\`\`

## CSS Selectors Work!

\`\`\`javascript
document.querySelector('.container > .card:first-child');
document.querySelector('input[type="email"]');
document.querySelector('li:nth-child(2)');
\`\`\`

---

## Your Mission
Select elements and log them to console.
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, select <h1> by ID: const title = document.querySelector("#title");', completed: false, regex: /querySelector\s*\(\s*['"]#/ },
                        { id: 2, description: 'In script.js, select first <p> by class: const text = document.querySelector(".text");', completed: false, regex: /querySelector\s*\(\s*['"]\./ },
                        { id: 3, description: 'In script.js, select all <button> elements: const buttons = document.querySelectorAll(".btn");', completed: false, regex: /querySelectorAll/ },
                        { id: 4, description: 'In script.js, log element: console.log(document.querySelector("#title"));', completed: false, regex: /console\.log\s*\([^)]*querySelector/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><title>Selecting Elements</title></head>
<body>
    <h1 id="title">DOM Manipulation</h1>
    <p class="text">Paragraph 1</p>
    <p class="text">Paragraph 2</p>
    <button class="btn">Click Me</button>
    <button class="btn">Click Me Too</button>
    
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// Select elements and log them

// 1. Select title by ID


// 2. Select first paragraph by class


// 3. Select all buttons


// 4. Log them to console

` }
                    ]
                },
                {
                    id: 'dom-1-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Changing Content & Styles',
                    duration: '25 min',
                    content: `
# Changing Content & Styles

## Changing Text Content

\`\`\`javascript
const heading = document.querySelector('h1');

// Change text
heading.textContent = 'New Title';

// Change HTML
heading.innerHTML = '<span>New</span> Title';
\`\`\`

### textContent vs innerHTML

| Property | Use When | Safe? |
|----------|----------|-------|
| \`textContent\` | Plain text only | ✅ Safe |
| \`innerHTML\` | Need HTML tags | ⚠️ XSS risk |

## Changing Styles

\`\`\`javascript
const box = document.querySelector('.box');

// Individual properties
box.style.backgroundColor = 'blue';
box.style.fontSize = '24px';
box.style.padding = '20px';

// Note: Use camelCase for CSS properties!
// background-color → backgroundColor
// font-size → fontSize
\`\`\`

## Adding/Removing Classes

\`\`\`javascript
const button = document.querySelector('.btn');

// Add class
button.classList.add('active');

// Remove class
button.classList.remove('active');

// Toggle class
button.classList.toggle('active');

// Check if has class
if (button.classList.contains('active')) {
    console.log('Button is active');
}
\`\`\`

## Changing Attributes

\`\`\`javascript
const img = document.querySelector('img');

// Get attribute
const src = img.getAttribute('src');

// Set attribute
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('alt', 'New description');

// Remove attribute
img.removeAttribute('title');
\`\`\`

---

## Your Mission
Create a theme toggle button.
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, change button text: themeBtn.textContent = "Light Mode"; after toggle', completed: false, regex: /\.textContent\s*=/ },
                        { id: 2, description: 'In script.js, change style: document.body.style.backgroundColor = "#1a1a1a";', completed: false, regex: /\.style\.\w+\s*=/ },
                        { id: 3, description: 'In script.js, toggle dark class: document.body.classList.toggle("dark");', completed: false, regex: /classList\.(add|toggle)\s*\(/ },
                        { id: 4, description: 'In script.js, add event: themeBtn.addEventListener("click", function() { ... });', completed: false, regex: /addEventListener\s*\(\s*['"]click['"]/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <title>Theme Toggle</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 id="title">Welcome to ZeroCode</h1>
        <p id="description">Click the button to toggle dark mode</p>
        <button id="themeBtn">Toggle Dark Mode</button>
    </div>
    
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body {
    font-family: sans-serif;
    padding: 40px;
    transition: all 0.3s;
}

body.dark {
    background: #1a1a1a;
    color: white;
}

.container {
    max-width: 600px;
    margin: 0 auto;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #800000;
    color: white;
}

button:hover {
    background: #600000;
}` },
                        { name: 'script.js', language: 'javascript', content: `// Theme Toggle

// 1. Select button


// 2. Add click event listener


// 3. Toggle 'dark' class on body


// 4. Change button text based on theme

` }
                    ]
                },
                {
                    id: 'dom-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'DOM Basics Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the difference between textContent and innerHTML?',
                            options: [
                                'They are the same',
                                'textContent is for text only, innerHTML can include HTML tags',
                                'innerHTML is faster',
                                'textContent is deprecated'
                            ],
                            correctIndex: 1,
                            explanation: 'textContent sets/gets plain text. innerHTML can parse HTML tags but has XSS risks.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you select an element with class "btn"?',
                            options: [
                                'document.querySelector("btn")',
                                'document.querySelector("#btn")',
                                'document.querySelector(".btn")',
                                'document.getElement("btn")'
                            ],
                            correctIndex: 2,
                            explanation: 'Use . for classes, # for IDs in querySelector.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'dom-unit-2',
            title: 'Events & Interactivity',
            description: 'Respond to user actions',
            items: [
                {
                    id: 'dom-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Event Listeners',
                    duration: '25 min',
                    content: `
# Event Listeners

## Adding Event Listeners

\`\`\`javascript
const button = document.querySelector('#myBtn');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Arrow function (modern)
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
\`\`\`

## Common Events

| Event | When It Fires |
|-------|---------------|
| \`click\` | Element is clicked |
| \`dblclick\` | Element is double-clicked |
| \`mouseenter\` | Mouse enters element |
| \`mouseleave\` | Mouse leaves element |
| \`keydown\` | Key is pressed |
| \`keyup\` | Key is released |
| \`submit\` | Form is submitted |
| \`input\` | Input value changes |
| \`change\` | Input loses focus after change |
| \`focus\` | Element receives focus |
| \`blur\` | Element loses focus |

## Event Object

\`\`\`javascript
button.addEventListener('click', (event) => {
    console.log(event.target);      // Element that was clicked
    console.log(event.type);        // 'click'
    console.log(event.clientX);     // Mouse X position
});
\`\`\`

## Form Events

\`\`\`javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Stop form from submitting
    
    const input = document.querySelector('#email');
    console.log(input.value);
});
\`\`\`

---

## Your Mission
Create an interactive counter.
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, add event to #incrementBtn: incrementBtn.addEventListener("click", () => { count++; });', completed: false, regex: /addEventListener\s*\(\s*['"]click['"][\s\S]*\+\+/ },
                        { id: 2, description: 'In script.js, add event to #decrementBtn: decrementBtn.addEventListener("click", () => { count--; });', completed: false, regex: /addEventListener\s*\(\s*['"]click['"][\s\S]*--/ },
                        { id: 3, description: 'In script.js, update display: countDisplay.textContent = count; in each event handler', completed: false, regex: /textContent\s*=[\s\S]*count/ },
                        { id: 4, description: 'In script.js, add reset event: resetBtn.addEventListener("click", () => { count = 0; });', completed: false, regex: /addEventListener[\s\S]*count\s*=\s*0/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <title>Counter App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Counter App</h1>
        <div class="counter">
            <button id="decrementBtn">-</button>
            <span id="count">0</span>
            <button id="incrementBtn">+</button>
        </div>
        <button id="resetBtn">Reset</button>
    </div>
    
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
    background: white;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
}

#count {
    font-size: 48px;
    font-weight: bold;
    min-width: 100px;
}

button {
    padding: 15px 30px;
    font-size: 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

#incrementBtn, #decrementBtn {
    background: #667eea;
    color: white;
}

#resetBtn {
    background: #800000;
    color: white;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}` },
                        { name: 'script.js', language: 'javascript', content: `// Counter App Select elements Increment button Decrement button Reset button

` }
                    ]
                },
                {
                    id: 'dom-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Events Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does e.preventDefault() do?',
                            options: [
                                'Deletes the element',
                                'Stops the default browser behavior',
                                'Prevents all events',
                                'Removes event listener'
                            ],
                            correctIndex: 1,
                            explanation: 'preventDefault() stops the default action (like form submission or link navigation).'
                        },
                        {
                            id: 'q2',
                            question: 'Which event fires when typing in an input?',
                            options: ['click', 'input', 'type', 'keypress'],
                            correctIndex: 1,
                            explanation: 'The "input" event fires every time the input value changes.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'dom-unit-3',
            title: 'Final Project',
            description: 'Build an interactive todo app',
            items: [
                {
                    id: 'dom-3-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Todo List App',
                    duration: '90 min',
                    difficulty: 'Intermediate',
                    description: 'Build a fully functional todo list with add, delete, and mark complete features.',
                    content: `
# 🎯 Project: Todo List App

## Features Required

### Core Functionality
- [ ] Add new todos
- [ ] Mark todos as complete
- [ ] Delete todos
- [ ] Clear all completed

### UI Requirements
- [ ] Input field for new todos
- [ ] List of todos
- [ ] Each todo has checkbox and delete button
- [ ] Completed todos have strikethrough

### Bonus Features
- [ ] Edit existing todos
- [ ] Filter (All/Active/Completed)
- [ ] Save to localStorage
- [ ] Todo count

## Grading Criteria

| Criteria | Points |
|----------|--------|
| Add todo functionality | 25% |
| Complete/uncomplete toggle | 20% |
| Delete functionality | 20% |
| UI/UX design | 20% |
| Code quality | 15% |
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, create function: function addTodo(text) { ... } to add new todo', completed: false, regex: /function\s+addTodo|const\s+addTodo\s*=/ },
                        { id: 2, description: 'In script.js, create element: const li = document.createElement("li"); for todo item', completed: false, regex: /createElement/ },
                        { id: 3, description: 'In script.js, handle form: todoForm.addEventListener("submit", (e) => { e.preventDefault(); });', completed: false, regex: /addEventListener\s*\(\s*['"]submit['"]/ },
                        { id: 4, description: 'In script.js, toggle complete: li.classList.toggle("completed"); when checkbox clicked', completed: false, regex: /classList\.(toggle|add|remove)/ },
                        { id: 5, description: 'In script.js, delete todo: li.remove(); or todoList.removeChild(li); when delete clicked', completed: false, regex: /(removeChild|\.remove\s*\()/ }
                    ],
                    starterFiles: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>📝 My Todo List</h1>
        
        <form id="todoForm">
            <input type="text" id="todoInput" placeholder="Add a new todo..." required>
            <button type="submit">Add</button>
        </form>
        
        <ul id="todoList"></ul>
        
        <div class="stats">
            <span id="todoCount">0 todos</span>
            <button id="clearBtn">Clear Completed</button>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    width: 100%;
    max-width: 500px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

#todoForm {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#todoInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

#todoInput:focus {
    outline: none;
    border-color: #667eea;
}

button {
    padding: 12px 24px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
}

button:hover {
    background: #5568d3;
    transform: translateY(-2px);
}

#todoList {
    list-style: none;
    margin-bottom: 20px;
}

.todo-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: all 0.3s;
}

.todo-item:hover {
    background: #e9ecef;
}

.todo-item.completed {
    opacity: 0.6;
}

.todo-item.completed span {
    text-decoration: line-through;
}

.todo-item input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.todo-item span {
    flex: 1;
    font-size: 16px;
}

.delete-btn {
    background: #dc3545;
    padding: 8px 16px;
    font-size: 14px;
}

.delete-btn:hover {
    background: #c82333;
}

.stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 2px solid #eee;
}

#clearBtn {
    background: #800000;
    padding: 8px 16px;
    font-size: 14px;
}

#clearBtn:hover {
    background: #600000;
}` },
                        { name: 'script.js', language: 'javascript', content: `// Todo List App Select elements Add todo function Toggle complete function Delete todo function Update count function Clear completed function Event listeners

` }
                    ]
                },
                {
                    id: 'dom-3-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 DOM Manipulation Complete!

## What You Mastered

✅ Understanding the DOM tree
✅ Selecting elements (querySelector, querySelectorAll)
✅ Changing content (textContent, innerHTML)
✅ Manipulating styles and classes
✅ Event listeners and handling
✅ Creating/deleting elements dynamically
✅ Form handling and validation

## Essential Methods

\`\`\`javascript
// Selection
document.querySelector()
document.querySelectorAll()

// Content
element.textContent
element.innerHTML

// Styles
element.style.property
element.classList.add/remove/toggle

// Events
element.addEventListener('event', callback)

// Creation
document.createElement()
element.appendChild()
element.remove()
\`\`\`

## Best Practices

1. **Use querySelector**: Modern and flexible
2. **Prefer classList**: Over direct style manipulation
3. **Event Delegation**: For dynamic elements
4. **Cache Selectors**: Don't query repeatedly
5. **Semantic Events**: Use appropriate event types

## What's Next?

Continue with **JavaScript ES6+** to learn modern JavaScript features, or jump to **React** to see how frameworks simplify DOM manipulation!

> "The DOM is the bridge between JavaScript and HTML." - Every Web Developer
                    `
                }
            ]
        }
    ]
};

export default domCourse;
