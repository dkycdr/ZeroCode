import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Events = {
    id: 'node-unit-4',
    title: 'Unit 4: Events & Asynchronous Patterns',
    description: 'Node.js is event-driven. Master the EventEmitter class and sophisticated async patterns to handle complex flows.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES
        {
            id: 'node-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The EventEmitter Class 📡',
            duration: '20 min read',
            content: `
# Deep Dive: The EventEmitter Class 📡

## 1. The Core Architecture
In browser JS, you have \`DOMElement.addEventListener('click')\`.
In Node.js, there is no DOM. But almost everything (Servers, Streams, Sockets) inherits from **EventEmitter**.

## 2. Basic Usage
\`\`\`javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listen
myEmitter.on('order', (food) => {
  console.log(\`Order received: \${food}\`);
});

// Emit (Trigger)
myEmitter.emit('order', 'Pizza');
\`\`\`

## 3. Synchronous?
Yes! \`.emit()\` calls listeners **synchronously** in the order they were registered. It is not magic async code unless you explicitly use \`setImmediate\`.
            `
        },
        {
            id: 'node-4-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Memory Leaks in Events 🧠',
            duration: '15 min read',
            content: `
# Deep Dive: Memory Leaks in Events 🧠

## 1. The Listener Trap
Every time you call \`.on()\`, you add a function to an array.
If you call \`.on()\` inside a loop or a request handler without cleaning up, that array grows forever.
This is a **Memory Leak**.

## 2. removing Listeners
*   \`myEmitter.off('event', handler)\`
*   \`myEmitter.removeListener('event', handler)\`
*   \`myEmitter.once('event', handler)\`: Autos-removes after one fire.

## 3. MaxListenersWarning
Node will warn you if you add > 10 listeners to a single event. It assumes it's a bug/leak.
            `
        },
        {
            id: 'node-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Async/Await & Error Handling 🛡️',
            duration: '20 min read',
            content: `
# Deep Dive: Async/Await & Error Handling 🛡️

## 1. The Pyramid of Doom
Callback Hell is real.
\`func1(() => func2(() => func3()))\`.
Promises flattened this. Async/Await made it look synchronous.

## 2. The Trap: Forgetting Try/Catch
In \`async function\`, if a Promise rejects and you don't have \`try/catch\`, the error bubbles up.
If unhandled, it triggers \`UnhandledPromiseRejectionWarning\` (and crashes Node in future versions).

## 3. Parallel Execution
*   **Sequential**: \`await A; await B;\` (Slow)
*   **Parallel**: \`await Promise.all([A, B])\` (Fast)
Use Parallel when A and B don't depend on each other!
            `
        },
        {
            id: 'node-4-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: setImmediate vs nextTick ⏱️',
            duration: '15 min read',
            content: `
# Deep Dive: setImmediate vs nextTick ⏱️

## 1. process.nextTick()
Use this to put a callback at the **head** of the queue. It runs *immediately* after the current code, before the Event Loop continues.
⚠️ Danger: Can starve I/O.

## 2. setImmediate()
Runs on the **next tick** of the Event Loop (Check phase).
Ideally used to break up long-running tasks.

## 3. Review
Typical hierarchy:
1.  Synchronous code
2.  nextTick
3.  Promise (Microtasks)
4.  Timers (setTimeout)
5.  Check (setImmediate)
            `
        },

        // PART 2: PRACTICAL LABS
        {
            id: 'node-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Pizza Shop Emitter',
            duration: '20 min',
            content: `
# Lab 1: Pizza Shop Emitter

Build a class \`PizzaShop\` that extends \`EventEmitter\`.

## The Mission
1.  **Class**: Extend \`EventEmitter\`.
2.  **Method**: \`order(size, topping)\` -> emits 'order' event.
3.  **Listener**: Log "Baking a [size] pizza with [topping]".
4.  **Count**: Use \`listenerCount\` to verify.

## Inheritance
This pattern is used by core modules like \`http.Server\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Extend EventEmitter.',
                    completed: false,
                    regex: /class\s+PizzaShop\s+extends\s+EventEmitter/
                },
                {
                    id: 2,
                    description: 'Emit "order" event inside method.',
                    completed: false,
                    regex: /this\.emit\s*\(\s*['"]order['"]/
                },
                {
                    id: 3,
                    description: 'Listen directly on instance.',
                    completed: false,
                    regex: /shop\.on\s*\(\s*['"]order['"]/
                }
            ],
            files: [
                {
                    name: 'shop.js',
                    language: 'javascript',
                    content: `const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    placeOrder(size, topping) {
        this.orderNumber++;
        // Task 2: Emit 'order' event
        
    }
}

const shop = new PizzaShop();

// Task 3: Listen for order
shop.on('order', (size, topping) => {
    console.log("Cooking " + size);
});

shop.placeOrder("large", "pepperoni");
`
                }
            ]
        },
        {
            id: 'node-4-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Handling Errors',
            duration: '20 min',
            content: `
# Lab 2: Handling Errors

Emitters are special. If they emit 'error' and no one listens, Node crashes.

## The Mission
1.  **Emit Error**: Trigger \`emit('error', new Error(...))\`.
2.  **Crash**: Run it, watch it crash.
3.  **Fix**: Add \`.on('error', handler)\`.

## Best Practice
ALWAYS listen for 'error' on streams and sockets.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Emit error event.',
                    completed: false,
                    regex: /emit\s*\(\s*['"]error['"]/
                },
                {
                    id: 2,
                    description: 'Listen for error.',
                    completed: false,
                    regex: /\.on\s*\(\s*['"]error['"]/
                }
            ],
            files: [
                {
                    name: 'crash.js',
                    language: 'javascript',
                    content: `const EventEmitter = require('events');
const emitter = new EventEmitter();

// Task 2: Listen first! (Uncomment to fix crash)
// emitter.on('error', (err) => console.log("Caught:", err.message));

// Task 1: Cause Chaos
emitter.emit('error', new Error('Whoops!'));
`
                }
            ]
        },
        {
            id: 'node-4-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Once vs On',
            duration: '15 min',
            content: `
# Lab 3: Once vs On

Sometimes you only want to handle an event the FIRST time it happens (like connection success).

## The Mission
1.  **Loop**: Emit 'ping' 5 times.
2.  **Listener**: Use \`once('ping')\`.
3.  **Result**: Should only log "Pong" once.

## Use Case
\`server.once('listening')\`. You only start listening once.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Use .once for listener.',
                    completed: false,
                    regex: /\.once\s*\(\s*['"]ping['"]/
                },
                {
                    id: 2,
                    description: 'Emit multiple times.',
                    completed: false,
                    regex: /emit.*ping.*\n.*emit.*ping/s
                }
            ],
            files: [
                {
                    name: 'ping.js',
                    language: 'javascript',
                    content: `const EventEmitter = require('events');
const ee = new EventEmitter();

// Task 1: Trigger only once
ee.once('ping', () => console.log('Pong!'));

// Task 2: Loop emit
ee.emit('ping');
ee.emit('ping');
ee.emit('ping');
`
                }
            ]
        },
        {
            id: 'node-4-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Async Parallel',
            duration: '25 min',
            content: `
# Lab 4: Async Parallel

Process multiple mock database calls efficiently.

## The Mission
1.  **Mock**: \`getUser(id)\` takes 1s.
2.  **Series**: Fetch 3 users one by one (3s total).
3.  **Parallel**: Fetch 3 users at once using \`Promise.all\` (1s total).
4.  **Log**: Time difference.

## Performance
Parallelism is the easiest performance win in Node.js backends.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create Promise.all array.',
                    completed: false,
                    regex: /Promise\.all\s*\(\s*\[/
                },
                {
                    id: 2,
                    description: 'Await the result.',
                    completed: false,
                    regex: /await\s+Promise\.all/
                }
            ],
            files: [
                {
                    name: 'benchmark.js',
                    language: 'javascript',
                    content: `const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function getUser(id) {
    await delay(1000);
    return "User " + id;
}

async function main() {
    console.time('Parallel');
    
    // Task 1: Fetch 1, 2, 3 in parallel
    const users = await Promise.all([
        getUser(1),
        getUser(2),
        getUser(3)
    ]);
    
    console.timeEnd('Parallel');
    console.log(users);
}

main();
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Event Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If you emit an "error" event and have ZERO listeners, what happens?',
                    options: [
                        'Nothing',
                        'It logs to console',
                        'Node.js throws an Uncaught Exception and crashes the process',
                        'It retries'
                    ],
                    correctIndex: 2,
                    explanation: 'The "error" event is special. If unhandled, Node assumes the application is in an unstable state and crashes to prevent corruption.'
                },
                {
                    id: 'q2',
                    question: 'Is eventemitter.emit() synchronous or asynchronous by default?',
                    options: [
                        'Synchronous',
                        'Asynchronous',
                        'It depends on the OS',
                        'It uses Promises'
                    ],
                    correctIndex: 0,
                    explanation: 'It is simple function calling. emit() calls listener 1, waits for it, then listener 2, etc.'
                },
                {
                    id: 'q3',
                    question: 'What is a memory leak in the context of events?',
                    options: [
                        'Using too many events',
                        'Forgetting to remove listeners, causing the internal listener array to grow indefinitely',
                        'Using emit instead of dispatch',
                        'Closing the file'
                    ],
                    correctIndex: 1,
                    explanation: 'If you attach a listener in a request handler (e.g., on every HTTP call), you eventually run out of RAM.'
                },
                {
                    id: 'q4',
                    question: 'When should you use Promise.all?',
                    options: [
                        'When operations must happen in specific order',
                        'When operations are independent and can run simultaneously',
                        'Never',
                        'Only for file writing'
                    ],
                    correctIndex: 1,
                    explanation: 'It allows multiple independent async tasks (like fetching User and Fetching Posts) to happen at the same time.'
                },
                {
                    id: 'q5',
                    question: 'What method ensures a listener runs only one time?',
                    options: [
                        '.on()',
                        '.once()',
                        '.one()',
                        '.single()'
                    ],
                    correctIndex: 1,
                    explanation: 'once() automatically removes the listener after it is triggered for the first time.'
                }
            ]
        }
    ]
};
