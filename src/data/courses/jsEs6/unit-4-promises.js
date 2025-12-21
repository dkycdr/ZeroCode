import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Promises = {
    id: 'es6-unit-4',
    title: 'Asynchronous JS - The Time Traveler',
    description: 'Master the Microtask Queue. Learn to handle time-consuming operations without freezing the browser.',
    items: [
        {
            id: 'es6-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Intuition: The Pager & The Event Loop 🔄',
            duration: '40 min read',
            content: `
# Intuition: The Pager & The Event Loop 🔄

## 1. The Single-Threaded Waiter
JavaScript is a **Single-Threaded** language. It’s like a restaurant with only **one waiter**. 
* **The Problem**: If a customer orders a steak that takes 20 minutes to cook, and the waiter stands still waiting for it, the whole restaurant freezes. No one else gets water, menus, or bills.
* **The Solution (Async)**: The waiter takes the order, gives the customer a **Pager**, and immediately goes to the next table. When the steak is ready, the pager **BEEPS**.

## 2. The Anatomy of a Promise
A Promise is that Pager. It is a "box" for a value that hasn't arrived yet.



### The Three States:
1.  **Pending**: The steak is still on the grill.
2.  **Fulfilled (Resolved)**: Steak is ready! Here is your food (\`value\`).
3.  **Rejected**: The kitchen ran out of steak. Here is your apology (\`error\`).

---

# Deep Dive: Machine Logic (The Microtask Queue) 🧠

Not all "waiting" is equal in JavaScript. The Engine has a priority list:

1.  **Call Stack**: Current code running (Synchronous).
2.  **Microtask Queue (High Priority)**: This is where **Promises** live. 
3.  **Task Queue (Low Priority)**: This is where \`setTimeout\` and DOM events live.

**The "Beast" Concept**: If a Promise resolves at the same time a \`setTimeout\` finishes, **the Promise ALWAYS wins.** The Engine will clear every single Promise before it even looks at a timer.



---

# Deep Dive: Async/Await (Syntactic Sugar) 🍬

\`async/await\` is not a new feature; it is a cleaner way to write Promises. It makes your code look like a book—sequential and easy to read.

### The "Pause" Mechanic
When the Engine hits the \`await\` keyword, it literally **pauses** the execution of *that specific function*. It steps out, does other work, and only comes back when the "Pager" beeps.

\`\`\`javascript
async function getDinner() {
    console.log("Ordering...");
    const steak = await cookSteak(); // Execution PAUSES here
    console.log("Eating " + steak);
}
console.log("Doing other stuff..."); // This runs while steak is cooking!
\`\`\`
            `
        },
        {
            id: 'es6-4-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lesson: The API Architect',
            duration: '50 min',
            content: `
# Lesson: The API Architect

You are building a Dashboard. You need to fetch a user profile, then their orders, and finally calculate the total—all while handling potential network crashes.

## The Mission
1.  **The Promise Manual**: Wrap a \`setTimeout\` in a \`new Promise\` to simulate a 1-second delay.
2.  **Chain Control**: Use \`.then()\` to transform raw data.
3.  **Async/Await Upgrade**: Refactor a messy \`.then()\` chain into a clean \`async\` function.
4.  **Parallel Power**: Use \`Promise.all()\` to fetch "Posts" and "Comments" at the exact same time.

## Execution Flow Visualization
\`\`\`text
Step 1: Call fetchUser()
   │    ENGINE: Sees 'await'.
   │    ENGINE: Puts fetchUser on the shelf (Suspended).
   │
Step 2: Network returns Data
   │    EVENT LOOP: Pushes resolve() to Microtask Queue.
   │
Step 3: Resume
   │    ENGINE: Pops fetchUser back to Stack.
   │    RAM: 'user' variable finally gets its value.
\`\`\`

## Common Pitfalls (Awas Terjebak!) ⚠️
1.  **The Ghost Return**: Every \`async\` function returns a Promise automatically. If you return \`"Hello"\`, you are actually returning \`Promise.resolve("Hello")\`.
2.  **The Sequential Trap**: 
    * \`await getA(); await getB();\` (Takes 2 seconds)
    * \`Promise.all([getA(), getB()])\` (Takes 1 second)
    * **Rule**: If B doesn't need A, always go Parallel!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Simulate Delay: Create a Promise that resolves "Success" after 1000ms.',
                    completed: false,
                    regex: /new\s+Promise\s*\(\s*resolve\s*=>\s*setTimeout\(\s*resolve/
                },
                {
                    id: 2,
                    description: 'The Async Switch: Define an async function "loadData".',
                    completed: false,
                    regex: /async\s+function\s+loadData/
                },
                {
                    id: 3,
                    description: 'Await & Parse: await a fetch call and then await the .json() parsing.',
                    completed: false,
                    regex: /await\s+(?:\w+\.json|fetch)/
                },
                {
                    id: 4,
                    description: 'Parallel Fetch: Use Promise.all to fetch two URLs simultaneously.',
                    completed: false,
                    regex: /Promise\.all\s*\(\s*\[\s*fetch[\s\S]*fetch\s*\]\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Task 1: Create a delayed promise
const waitOneSecond = null;

// Task 2 & 3: Create an async function to fetch data
// Use: https://jsonplaceholder.typicode.com/users/1
async function loadData() {
    // TODO: try/catch, fetch, await json...
}

// Task 4: Parallel execution
async function loadEverything() {
    // TODO: Promise.all([fetch1, fetch2])
}
`
                }
            ]
        },
        {
            id: 'es6-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Async Mastery Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If a Promise resolves and a setTimeout(0) finishes at the same time, which runs first?',
                    options: [
                        'The setTimeout (Task Queue)',
                        'The Promise (Microtask Queue)',
                        'It is random',
                        'They run in parallel'
                    ],
                    correctIndex: 1,
                    explanation: 'The Microtask Queue has higher priority. The Engine will always finish all Promises before moving to the next Task (like a timer).'
                },
                {
                    id: 'q2',
                    question: 'What happens if you forget to "await" a fetch call?',
                    options: [
                        'The code crashes',
                        'You get the data immediately',
                        'The variable contains a Promise object, not the data',
                        'The request is cancelled'
                    ],
                    correctIndex: 2,
                    explanation: 'Without await, you are just holding the "Pager" (Promise), not the actual "Food" (Data).'
                }
            ]
        }
    ]
};