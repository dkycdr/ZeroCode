import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc5WebWorkers = {
    id: 'html5-u9-doc-5-workers',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Web Workers - Parallel Processing',
    duration: '18 min read',
    content: `
# Deep Dive: Web Workers - Parallel Processing

## 1. The Problem: JavaScript is Single-Threaded

JavaScript can only do **one thing at a time**. This is called being "single-threaded".

### Why This is a Problem:
Imagine you need to process a huge amount of data (like sorting 1 million items). While JavaScript is doing that heavy work, your website **completely freezes**:

- Buttons don't respond
- Animations stop
- Page feels "stuck"

---

## 2. The Restaurant Kitchen Analogy

Think of your browser as a **restaurant kitchen**:

### Without Web Workers:
- **The Chef** (Main Thread) does everything: takes orders, cooks food, plates dishes
- If the chef needs to chop 1000 onions, all customers wait. Kitchen freezes!

### With Web Workers:
- **The Chef** (Main Thread) handles customers and serves food
- **Kitchen Assistant** (Web Worker) chops onions in a separate room
- When done, the assistant signals the chef: "Onions ready!"
- Chef never stops serving customers

---

## 3. How Web Workers Work

Web Workers run JavaScript **in a separate thread**. They:
- ✅ Can do heavy calculations
- ✅ Run in parallel with main thread
- ❌ Cannot access the DOM (no document, window)
- ❌ Cannot share variables directly

### Communication Method:
Main script and Worker talk through **messages**:

\`\`\`text
Main Thread                    Worker Thread
    │                               │
    │──── postMessage(data) ───────►│
    │                               │
    │                        (heavy work)
    │                               │
    │◄──── postMessage(result) ─────│
    │                               │
\`\`\`

---

## 4. Creating a Web Worker

### Step 1: Create the Worker File (worker.js)
\`\`\`javascript
// worker.js - Runs in separate thread

self.onmessage = function(event) {
    console.log('Worker received:', event.data);
    
    // Do some heavy calculation
    const result = heavyCalculation(event.data);
    
    // Send result back to main thread
    self.postMessage(result);
};

function heavyCalculation(number) {
    // Simulate heavy work
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    return sum * number;
}
\`\`\`

### Step 2: Use the Worker in Main Script
\`\`\`javascript
// main.js - Runs in main thread

// Create a new worker
const worker = new Worker('worker.js');

// Send data to the worker
worker.postMessage(42);

// Listen for results
worker.onmessage = function(event) {
    console.log('Result from worker:', event.data);
    // Update the UI with the result
};

// Handle errors
worker.onerror = function(error) {
    console.error('Worker error:', error.message);
};
\`\`\`

---

## 5. What Workers CAN and CANNOT Do

### ✅ Workers CAN:
- Use \`setTimeout\`, \`setInterval\`
- Use \`fetch\` to make network requests
- Use \`IndexedDB\` for storage
- Import scripts with \`importScripts()\`
- Create other workers (nested workers)

### ❌ Workers CANNOT:
- Access \`document\` or \`window\`
- Modify the DOM
- Access parent page's variables directly
- Use \`alert()\` or \`confirm()\`

---

## 6. Stopping a Worker

### From Main Thread:
\`\`\`javascript
worker.terminate(); // Immediately kills the worker
\`\`\`

### From Inside the Worker:
\`\`\`javascript
self.close(); // Worker closes itself
\`\`\`

---

## 7. Passing Complex Data

You can send objects and arrays:

\`\`\`javascript
// Main thread
worker.postMessage({
    action: 'sort',
    data: [5, 2, 8, 1, 9]
});

// Worker
self.onmessage = function(e) {
    if (e.data.action === 'sort') {
        const sorted = e.data.data.sort((a, b) => a - b);
        self.postMessage({ sorted: sorted });
    }
};
\`\`\`

> [!NOTE]
> When you send data to a worker, JavaScript **copies** the data. The worker gets its own copy. Changes in the worker don't affect the original.

---

## 8. Transferable Objects (Advanced)

For very large data (like images), copying is slow. You can **transfer** ownership instead:

\`\`\`javascript
const buffer = new ArrayBuffer(1024 * 1024); // 1MB

// Transfer the buffer (NOT copy)
worker.postMessage(buffer, [buffer]);

// WARNING: buffer is now empty in main thread!
console.log(buffer.byteLength); // 0
\`\`\`

---

## 9. Real-World Use Cases

### 🧮 Heavy Calculations
- Data processing
- Complex algorithms
- Encryption/decryption

### 🖼️ Image Processing
- Applying filters
- Resizing images
- Generating thumbnails

### 📊 Data Analysis
- Parsing large JSON files
- Sorting/filtering huge datasets
- Real-time analytics

### 🎮 Games
- AI calculations
- Physics simulations
- Path finding

---

## 10. Best Practices

### ✅ Do:
- Use workers for tasks that take > 50ms
- Keep messages small when possible
- Terminate workers when done
- Handle errors with \`onerror\`

### ❌ Don't:
- Create too many workers (each uses memory)
- Use workers for simple tasks
- Forget to terminate long-running workers
- Assume workers are instant (there's overhead)

---

## Quick Reference

| Method | Where | Purpose |
|:---|:---|:---|
| \`new Worker('file.js')\` | Main | Create a worker |
| \`worker.postMessage(data)\` | Main | Send data to worker |
| \`worker.onmessage\` | Main | Receive from worker |
| \`worker.terminate()\` | Main | Kill the worker |
| \`self.postMessage(data)\` | Worker | Send data to main |
| \`self.onmessage\` | Worker | Receive from main |
| \`self.close()\` | Worker | Worker kills itself |
`
};
