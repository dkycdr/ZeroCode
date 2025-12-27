import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2NotesApp = {
    id: 'html5-u9-lab-2-notes',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Build a Crash-Proof Notes App',
    duration: '35 min',
    content: `
# Lab: Build a Crash-Proof Notes App

## The Problem We're Solving

Have you ever written a long email or document, and then your browser crashed? All your work - gone forever. 😭

Today, we'll build a **Notes App** that automatically saves your work. Even if the browser crashes, your notes survive.

---

## How It Works

We'll use **LocalStorage** to save notes every time the user types. Here's the flow:

1. **Page Loads** → Check if there are saved notes → Show them
2. **User Types** → Immediately save to LocalStorage
3. **Browser Crashes** → No problem! Notes are safe
4. **User Returns** → Notes are still there

---

## Step 1: The HTML Structure

Our app needs:
- An \`<input>\` to type notes
- A \`<button>\` to add notes
- A \`<ul>\` to display all notes
- A "Clear All" button

---

## Step 2: Load Saved Notes on Start

When the page loads, we need to:
1. Get notes from LocalStorage
2. If there are no notes, start with an empty array
3. Display the notes on screen

\`\`\`javascript
// The "|| []" means: if nothing is saved, use empty array
let notes = JSON.parse(localStorage.getItem('myNotes')) || [];
\`\`\`

---

## Step 3: Add New Notes

When the user clicks "Add":
1. Get the text from the input
2. Add it to our notes array
3. Save the updated array to LocalStorage
4. Update the display
5. Clear the input

\`\`\`javascript
function addNote() {
    const text = input.value;
    if (!text) return; // Don't save empty notes
    
    notes.push(text);
    saveNotes();
    render();
    input.value = '';
}
\`\`\`

---

## Step 4: Save with Error Handling

Storage can fail (quota exceeded, private mode, etc.). Always use try-catch:

\`\`\`javascript
function saveNotes() {
    try {
        localStorage.setItem('myNotes', JSON.stringify(notes));
    } catch (error) {
        console.error('Could not save notes:', error.message);
        alert('Failed to save! Storage might be full.');
    }
}
\`\`\`

---

## Your Mission

Complete the code to make the Notes App fully functional:

1. ✅ Load notes from localStorage on page load (use \`|| []\` as fallback)
2. ✅ Push the new note to the array
3. ✅ Save to localStorage inside a try-catch block
4. ✅ Handle errors with console.error or alert
5. ✅ Implement the delete functionality
`,
    tasks: [
        {
            id: 1,
            description: 'Load notes: Use JSON.parse and localStorage.getItem with "|| []" fallback',
            completed: false,
            hint: 'Pattern: JSON.parse(localStorage.getItem("key")) || []',
            regex: /JSON\.parse\s*\(\s*localStorage\.getItem\s*\(\s*['"]myNotes['"]\s*\)\s*\)\s*\|\|\s*\[\]/
        },
        {
            id: 2,
            description: 'Add note: Push the new text to the notes array',
            completed: false,
            hint: 'Use: notes.push(text)',
            regex: /notes\.push\s*\(\s*\w+\s*\)/
        },
        {
            id: 3,
            description: 'Save notes: Use try-catch block around localStorage.setItem',
            completed: false,
            hint: 'Wrap setItem in try { ... } catch (error) { ... }',
            regex: /try\s*\{[\s\S]*localStorage\.setItem[\s\S]*\}\s*catch/
        },
        {
            id: 4,
            description: 'Handle error: Log the error with console.error or show an alert',
            completed: false,
            hint: 'Use console.error("message") inside the catch block',
            regex: /catch[\s\S]*\{[\s\S]*(console\.(error|log|warn)|alert)\s*\(/
        },
        {
            id: 5,
            description: 'Delete note: Implement deleteNote(index) using splice and saveNotes()',
            completed: false,
            hint: 'Use: notes.splice(index, 1) then call saveNotes()',
            regex: /notes\.splice\s*\(\s*\w+\s*,\s*1\s*\)/
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
    <title>Crash-Proof Notes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>📝 My Notes</h1>
        <p class="subtitle">Your notes are automatically saved!</p>
        
        <div class="input-group">
            <input type="text" id="note-input" placeholder="Write a note...">
            <button onclick="addNote()">Add Note</button>
        </div>
        
        <ul id="notes-list"></ul>
        
        <button class="clear-btn" onclick="clearAll()">🗑️ Clear All</button>
    </div>
    
    <script src="app.js"></script>
</body>
</html>`
        },
        {
            name: 'app.js',
            language: 'javascript',
            content: `// ============================================
// CRASH-PROOF NOTES APP
// ============================================

// Step 1: Load saved notes when page opens
// TODO: Get notes from localStorage, if null use []
let notes = ;

// Get DOM elements
const input = document.getElementById('note-input');
const list = document.getElementById('notes-list');

// Step 2: Add a new note
function addNote() {
    const text = input.value.trim();
    if (!text) return; // Don't save empty notes
    
    // TODO: Add the text to notes array
    
    
    // Save and update display
    saveNotes();
    render();
    input.value = '';
}

// Step 3: Save notes to localStorage (with error handling!)
function saveNotes() {
    // TODO: Wrap in try-catch
    
        localStorage.setItem('myNotes', JSON.stringify(notes));
    
}

// Step 4: Delete a specific note
function deleteNote(index) {
    // TODO: Remove the note at 'index' using splice
    
    
    saveNotes();
    render();
}

// Step 5: Clear all notes
function clearAll() {
    if (confirm('Delete ALL notes? This cannot be undone!')) {
        notes = [];
        localStorage.removeItem('myNotes');
        render();
    }
}

// Render the notes list
function render() {
    list.innerHTML = notes.map((note, index) => \`
        <li>
            <span>\${note}</span>
            <button onclick="deleteNote(\${index})">❌</button>
        </li>
    \`).join('');
}

// Initial render
render();`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 40px 20px;
}

.container {
    max-width: 500px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

h1 {
    color: #333;
    margin-bottom: 5px;
}

.subtitle {
    color: #888;
    font-size: 14px;
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
}

input:focus {
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
    font-weight: bold;
    transition: transform 0.2s, background 0.2s;
}

button:hover {
    background: #5a6fd6;
    transform: translateY(-2px);
}

ul {
    list-style: none;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 10px;
}

li button {
    padding: 6px 12px;
    background: #ff6b6b;
    font-size: 12px;
}

li button:hover {
    background: #ee5a5a;
}

.clear-btn {
    width: 100%;
    margin-top: 20px;
    background: #ff6b6b;
}

.clear-btn:hover {
    background: #ee5a5a;
}`
        }
    ]
};
