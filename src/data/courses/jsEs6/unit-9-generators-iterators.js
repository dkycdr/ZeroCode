import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9GeneratorsIterators = {
    id: 'js-es6-unit-9',
    title: 'Generators & Iterators - Advanced Iteration Control',
    description: 'Master generators and iterators: function*, yield, custom iterators, and advanced iteration patterns',
    items: [
        {
            id: 'js-es6-9-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Generators & Iterators - The Complete Guide',
            duration: '30 min read',
            content: `
# Generators & Iterators - The Complete Guide

## What are Generators?

**Generators** are special functions that can pause execution and resume later, yielding multiple values over time.

### Real-World Analogy: Vending Machine

Think of generators like a vending machine:

**Regular Function (All at Once):**
\`\`\`
Press button
    ↓
All snacks fall out at once! 🍫🍪🍬🥤
    ↓
Done
\`\`\`

**Generator Function (One at a Time):**
\`\`\`
Press button → Get snack 🍫
Press button → Get snack 🍪
Press button → Get snack 🍬
Press button → Get snack 🥤
Press button → Out of snacks
\`\`\`

**Key Differences:**
- Regular function: Returns once, gives all results
- Generator: Returns multiple times, gives one result at a time
- Generator: Can pause and resume
- Generator: Maintains state between calls

### Why Generators Matter

**Problem with Regular Functions:**
\`\`\`javascript
// Returns all at once - memory intensive!
function getAllNumbers() {
    const numbers = [];
    for (let i = 0; i < 1000000; i++) {
        numbers.push(i);
    }
    return numbers;  // 1 million numbers in memory!
}

const numbers = getAllNumbers();  // 💥 Lots of memory!
\`\`\`

**Solution with Generators:**
\`\`\`javascript
// Returns one at a time - memory efficient!
function* numberGenerator() {
    for (let i = 0; i < 1000000; i++) {
        yield i;  // Pause and return one number
    }
}

const gen = numberGenerator();
console.log(gen.next().value);  // 0
console.log(gen.next().value);  // 1
console.log(gen.next().value);  // 2
// Only one number in memory at a time! ✅
\`\`\`

## Generator Syntax

### Basic Generator

\`\`\`javascript
// Generator function (note the *)
function* simpleGenerator() {
    console.log('Start');
    yield 1;
    console.log('Middle');
    yield 2;
    console.log('End');
    yield 3;
}

const gen = simpleGenerator();

console.log(gen.next());  // { value: 1, done: false }
// Output: Start

console.log(gen.next());  // { value: 2, done: false }
// Output: Middle

console.log(gen.next());  // { value: 3, done: false }
// Output: End

console.log(gen.next());  // { value: undefined, done: true }
\`\`\`

**How it works:**
1. Calling generator function returns a generator object
2. Call \`.next()\` to start/resume execution
3. Generator runs until \`yield\`
4. \`yield\` pauses and returns value
5. Next \`.next()\` call resumes from where it paused
6. When function ends, \`done: true\`

### Yielding Values

\`\`\`javascript
function* countTo(max) {
    for (let i = 1; i <= max; i++) {
        yield i;
    }
}

const counter = countTo(5);

console.log(counter.next());  // { value: 1, done: false }
console.log(counter.next());  // { value: 2, done: false }
console.log(counter.next());  // { value: 3, done: false }
console.log(counter.next());  // { value: 4, done: false }
console.log(counter.next());  // { value: 5, done: false }
console.log(counter.next());  // { value: undefined, done: true }
\`\`\`

### Using Generators in Loops

\`\`\`javascript
function* colors() {
    yield 'red';
    yield 'green';
    yield 'blue';
}

// for...of automatically calls next()
for (const color of colors()) {
    console.log(color);
}
// Output:
// red
// green
// blue

// Spread operator
const colorArray = [...colors()];
console.log(colorArray);  // ['red', 'green', 'blue']
\`\`\`

## Passing Values to Generators

You can pass values back into generators:

\`\`\`javascript
function* conversation() {
    const name = yield 'What is your name?';
    console.log(\`Hello, \${name}!\`);
    
    const age = yield 'How old are you?';
    console.log(\`You are \${age} years old\`);
    
    return 'Conversation ended';
}

const chat = conversation();

console.log(chat.next().value);        // What is your name?
console.log(chat.next('John').value);  // How old are you?
                                       // Output: Hello, John!
console.log(chat.next(25).value);      // Conversation ended
                                       // Output: You are 25 years old
\`\`\`

**How it works:**
1. First \`next()\` starts generator, runs to first \`yield\`
2. Second \`next('John')\` passes 'John' as result of first \`yield\`
3. Generator continues with \`name = 'John'\`
4. Third \`next(25)\` passes 25 as result of second \`yield\`

## Practical Generator Examples

### Infinite Sequence Generator

\`\`\`javascript
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const sequence = infiniteSequence();

console.log(sequence.next().value);  // 0
console.log(sequence.next().value);  // 1
console.log(sequence.next().value);  // 2
// Can go forever!
\`\`\`

### ID Generator

\`\`\`javascript
function* idGenerator() {
    let id = 1;
    while (true) {
        yield \`ID-\${id++}\`;
    }
}

const ids = idGenerator();

console.log(ids.next().value);  // ID-1
console.log(ids.next().value);  // ID-2
console.log(ids.next().value);  // ID-3
\`\`\`

### Range Generator

\`\`\`javascript
function* range(start, end, step = 1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}

// Use like Python's range()
for (const num of range(1, 10, 2)) {
    console.log(num);
}
// Output: 1, 3, 5, 7, 9

const numbers = [...range(0, 5)];
console.log(numbers);  // [0, 1, 2, 3, 4, 5]
\`\`\`

### Fibonacci Generator

\`\`\`javascript
function* fibonacci() {
    let [prev, curr] = [0, 1];
    
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacci();

console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 2
console.log(fib.next().value);  // 3
console.log(fib.next().value);  // 5
console.log(fib.next().value);  // 8
console.log(fib.next().value);  // 13

// Get first 10 Fibonacci numbers
function* take(n, generator) {
    for (let i = 0; i < n; i++) {
        yield generator.next().value;
    }
}

const first10 = [...take(10, fibonacci())];
console.log(first10);  // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
\`\`\`

## Iterators

**Iterators** are objects that define how to iterate over a sequence.

### Iterator Protocol

An iterator must have a \`next()\` method that returns \`{ value, done }\`:

\`\`\`javascript
// Manual iterator
const iterator = {
    current: 0,
    last: 5,
    
    next() {
        if (this.current <= this.last) {
            return {
                value: this.current++,
                done: false
            };
        } else {
            return {
                value: undefined,
                done: true
            };
        }
    }
};

console.log(iterator.next());  // { value: 0, done: false }
console.log(iterator.next());  // { value: 1, done: false }
console.log(iterator.next());  // { value: 2, done: false }
\`\`\`

### Iterable Protocol

An iterable must have a \`[Symbol.iterator]()\` method that returns an iterator:

\`\`\`javascript
const myIterable = {
    data: [1, 2, 3, 4, 5],
    
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;
        
        return {
            next() {
                if (index < data.length) {
                    return {
                        value: data[index++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
};

// Can use in for...of
for (const value of myIterable) {
    console.log(value);
}
// Output: 1, 2, 3, 4, 5

// Can use spread operator
const array = [...myIterable];
console.log(array);  // [1, 2, 3, 4, 5]
\`\`\`

### Custom Iterable with Generator

Generators automatically implement the iterator protocol:

\`\`\`javascript
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    
    *[Symbol.iterator]() {
        for (let i = this.start; i <= this.end; i++) {
            yield i;
        }
    }
}

const range = new Range(1, 5);

for (const num of range) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5

const numbers = [...range];
console.log(numbers);  // [1, 2, 3, 4, 5]
\`\`\`

## Advanced Generator Patterns

### Generator Composition

Generators can yield from other generators:

\`\`\`javascript
function* gen1() {
    yield 1;
    yield 2;
}

function* gen2() {
    yield 3;
    yield 4;
}

function* combined() {
    yield* gen1();  // Delegate to gen1
    yield* gen2();  // Delegate to gen2
}

const all = [...combined()];
console.log(all);  // [1, 2, 3, 4]
\`\`\`

### Async Generators

Generators can be async:

\`\`\`javascript
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})();
// Output: 1, 2, 3
\`\`\`

### Generator Pipeline

Chain generators for data processing:

\`\`\`javascript
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

function* double(iterable) {
    for (const value of iterable) {
        yield value * 2;
    }
}

function* filter(iterable, predicate) {
    for (const value of iterable) {
        if (predicate(value)) {
            yield value;
        }
    }
}

// Pipeline: numbers → double → filter
const result = [
    ...filter(
        double(numbers()),
        x => x > 5
    )
];

console.log(result);  // [6, 8, 10]
\`\`\`

## Practical Use Cases

### Pagination

\`\`\`javascript
function* paginate(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) {
        yield array.slice(i, i + pageSize);
    }
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const page of paginate(items, 3)) {
    console.log('Page:', page);
}
// Output:
// Page: [1, 2, 3]
// Page: [4, 5, 6]
// Page: [7, 8, 9]
// Page: [10]
\`\`\`

### Lazy Evaluation

\`\`\`javascript
function* lazyMap(iterable, fn) {
    for (const value of iterable) {
        yield fn(value);
    }
}

function* lazyFilter(iterable, predicate) {
    for (const value of iterable) {
        if (predicate(value)) {
            yield value;
        }
    }
}

// Only computes when needed!
const numbers = function*() {
    console.log('Generating numbers...');
    for (let i = 1; i <= 1000000; i++) {
        yield i;
    }
}();

const doubled = lazyMap(numbers, x => x * 2);
const filtered = lazyFilter(doubled, x => x > 10);

// Nothing computed yet!

// Only computes first 5 that match
const first5 = [];
for (const num of filtered) {
    first5.push(num);
    if (first5.length === 5) break;
}

console.log(first5);  // [12, 14, 16, 18, 20]
\`\`\`

### State Machine

\`\`\`javascript
function* trafficLight() {
    while (true) {
        yield 'RED';
        yield 'YELLOW';
        yield 'GREEN';
    }
}

const light = trafficLight();

console.log(light.next().value);  // RED
console.log(light.next().value);  // YELLOW
console.log(light.next().value);  // GREEN
console.log(light.next().value);  // RED (cycles)
\`\`\`

## Key Takeaways

- ✅ Generators are functions that can pause and resume
- ✅ Use function* syntax to define generators
- ✅ yield pauses execution and returns value
- ✅ .next() resumes execution
- ✅ Generators are memory efficient (lazy evaluation)
- ✅ Iterators define how to iterate sequences
- ✅ Generators automatically implement iterator protocol
- ✅ Use for...of with generators
- ✅ yield* delegates to another generator
- ✅ Great for infinite sequences, pagination, lazy evaluation

## What's Next?

In the next lesson, you'll build practical applications using generators and iterators!

Now you're a generator master! ⚡🔄
            `
        },
        {
            id: 'js-es6-9-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building with Generators - Practical Applications',
            duration: '45 min',
            content: `
# Building with Generators - Practical Applications

## Project Overview

Build practical applications using generators and iterators:
1. Data Stream Processor
2. Infinite Scroll Simulator
3. Task Queue System
4. Custom Collection Class

## Project 1: Data Stream Processor

\`\`\`javascript
class DataStream {
    constructor(data) {
        this.data = data;
    }
    
    *[Symbol.iterator]() {
        for (const item of this.data) {
            yield item;
        }
    }
    
    *map(fn) {
        for (const item of this) {
            yield fn(item);
        }
    }
    
    *filter(predicate) {
        for (const item of this) {
            if (predicate(item)) {
                yield item;
            }
        }
    }
    
    *take(n) {
        let count = 0;
        for (const item of this) {
            if (count++ >= n) break;
            yield item;
        }
    }
    
    *skip(n) {
        let count = 0;
        for (const item of this) {
            if (count++ < n) continue;
            yield item;
        }
    }
    
    toArray() {
        return [...this];
    }
}

// Usage
const numbers = new DataStream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const result = numbers
    .map(x => x * 2)
    .filter(x => x > 10)
    .take(3)
    .toArray();

console.log('Result:', result);  // [12, 14, 16]

// Lazy evaluation - only processes what's needed!
console.log('Processing stream...');
for (const num of numbers.map(x => {
    console.log(\`  Mapping \${x}\`);
    return x * 2;
}).take(3)) {
    console.log(\`  Got: \${num}\`);
}
// Only processes first 3!

// Output:
// Result: [12, 14, 16]
// Processing stream...
//   Mapping 1
//   Got: 2
//   Mapping 2
//   Got: 4
//   Mapping 3
//   Got: 6
\`\`\`

## Project 2: Infinite Scroll Simulator

\`\`\`javascript
class InfiniteScroll {
    constructor(itemsPerPage = 10) {
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 0;
    }
    
    *generateItems() {
        let id = 1;
        while (true) {
            yield {
                id: id++,
                title: \`Item \${id}\`,
                content: \`Content for item \${id}\`
            };
        }
    }
    
    *getPage() {
        const generator = this.generateItems();
        
        // Skip to current page
        for (let i = 0; i < this.currentPage * this.itemsPerPage; i++) {
            generator.next();
        }
        
        // Get items for this page
        for (let i = 0; i < this.itemsPerPage; i++) {
            yield generator.next().value;
        }
        
        this.currentPage++;
    }
    
    loadMore() {
        console.log(\`📄 Loading page \${this.currentPage + 1}...\`);
        const items = [...this.getPage()];
        
        console.log('Items:');
        items.forEach(item => {
            console.log(\`  \${item.id}. \${item.title}\`);
        });
        
        return items;
    }
    
    reset() {
        this.currentPage = 0;
        console.log('🔄 Reset to page 1');
    }
}

// Usage
const scroll = new InfiniteScroll(5);

scroll.loadMore();
scroll.loadMore();
scroll.loadMore();

// Output:
// 📄 Loading page 1...
// Items:
//   1. Item 1
//   2. Item 2
//   3. Item 3
//   4. Item 4
//   5. Item 5
// 📄 Loading page 2...
// Items:
//   6. Item 6
//   7. Item 7
//   8. Item 8
//   9. Item 9
//   10. Item 10
// 📄 Loading page 3...
// Items:
//   11. Item 11
//   12. Item 12
//   13. Item 13
//   14. Item 14
//   15. Item 15
\`\`\`

## Project 3: Task Queue System

\`\`\`javascript
class TaskQueue {
    constructor() {
        this.tasks = [];
        this.running = false;
    }
    
    addTask(name, fn) {
        this.tasks.push({ name, fn });
        console.log(\`➕ Added task: \${name}\`);
    }
    
    *processTasks() {
        while (this.tasks.length > 0) {
            const task = this.tasks.shift();
            console.log(\`⚙️  Processing: \${task.name}\`);
            
            try {
                const result = task.fn();
                yield { task: task.name, result, status: 'success' };
            } catch (error) {
                yield { task: task.name, error: error.message, status: 'error' };
            }
        }
    }
    
    async run() {
        if (this.running) {
            console.log('❌ Queue already running');
            return;
        }
        
        this.running = true;
        console.log('🚀 Starting task queue...');
        
        for (const result of this.processTasks()) {
            console.log(\`  ✅ \${result.task}: \${result.status}\`);
            if (result.result) {
                console.log(\`     Result: \${result.result}\`);
            }
            
            // Simulate async delay
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        this.running = false;
        console.log('✨ All tasks completed!');
    }
}

// Usage
const queue = new TaskQueue();

queue.addTask('Calculate Sum', () => {
    return 10 + 20;
});

queue.addTask('Generate ID', () => {
    return \`ID-\${Date.now()}\`;
});

queue.addTask('Process Data', () => {
    return [1, 2, 3].map(x => x * 2);
});

queue.run();

// Output:
// ➕ Added task: Calculate Sum
// ➕ Added task: Generate ID
// ➕ Added task: Process Data
// 🚀 Starting task queue...
// ⚙️  Processing: Calculate Sum
//   ✅ Calculate Sum: success
//      Result: 30
// ⚙️  Processing: Generate ID
//   ✅ Generate ID: success
//      Result: ID-1234567890
// ⚙️  Processing: Process Data
//   ✅ Process Data: success
//      Result: 2,4,6
// ✨ All tasks completed!
\`\`\`

## Project 4: Custom Collection Class

\`\`\`javascript
class Collection {
    constructor(items = []) {
        this.items = items;
    }
    
    // Make it iterable
    *[Symbol.iterator]() {
        for (const item of this.items) {
            yield item;
        }
    }
    
    // Generator methods
    *map(fn) {
        for (const item of this.items) {
            yield fn(item);
        }
    }
    
    *filter(predicate) {
        for (const item of this.items) {
            if (predicate(item)) {
                yield item;
            }
        }
    }
    
    *reverse() {
        for (let i = this.items.length - 1; i >= 0; i--) {
            yield this.items[i];
        }
    }
    
    *chunk(size) {
        for (let i = 0; i < this.items.length; i += size) {
            yield this.items.slice(i, i + size);
        }
    }
    
    *zip(other) {
        const length = Math.min(this.items.length, other.items.length);
        for (let i = 0; i < length; i++) {
            yield [this.items[i], other.items[i]];
        }
    }
    
    // Utility methods
    add(item) {
        this.items.push(item);
        return this;
    }
    
    size() {
        return this.items.length;
    }
    
    toArray() {
        return [...this.items];
    }
}

// Usage
const collection = new Collection([1, 2, 3, 4, 5, 6]);

// Use as iterable
console.log('Items:');
for (const item of collection) {
    console.log(\`  \${item}\`);
}

// Map
const doubled = [...collection.map(x => x * 2)];
console.log('Doubled:', doubled);

// Filter
const evens = [...collection.filter(x => x % 2 === 0)];
console.log('Evens:', evens);

// Reverse
const reversed = [...collection.reverse()];
console.log('Reversed:', reversed);

// Chunk
console.log('Chunks of 2:');
for (const chunk of collection.chunk(2)) {
    console.log(\`  \${chunk}\`);
}

// Zip
const letters = new Collection(['a', 'b', 'c', 'd', 'e', 'f']);
const zipped = [...collection.zip(letters)];
console.log('Zipped:', zipped);

// Output:
// Items:
//   1
//   2
//   3
//   4
//   5
//   6
// Doubled: [2, 4, 6, 8, 10, 12]
// Evens: [2, 4, 6]
// Reversed: [6, 5, 4, 3, 2, 1]
// Chunks of 2:
//   1,2
//   3,4
//   5,6
// Zipped: [[1,'a'], [2,'b'], [3,'c'], [4,'d'], [5,'e'], [6,'f']]
\`\`\`

## Your Mission

Build these generator applications:
1. Data Stream Processor with map, filter, take methods
2. Infinite Scroll Simulator with pagination
3. Task Queue System with generator-based processing
4. Custom Collection Class with iterator protocol

Master generators and iterators!

Now you're a generator expert! ⚡🚀
            `,
            tasks: [
                { id: 1, description: 'Create a generator function using function* syntax that yields 3 values', completed: false, regex: /function\s*\*\s*\w+[\s\S]*yield[\s\S]*yield[\s\S]*yield/ },
                { id: 2, description: 'Call .next() on the generator to retrieve each yielded value', completed: false, regex: /\.next\(\)/ },
                { id: 3, description: 'Display the generator values in the page console', completed: false, regex: /getElementById.*console|console-output/ }
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
    <title>Generators & Iterators</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Generators & Iterators</h1>
        <div id="console-output"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `body { font-family: 'Segoe UI', sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
.container { max-width: 900px; margin: 0 auto; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 30px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
h1 { color: white; margin-top: 0; }
#console-output { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace; min-height: 300px; white-space: pre-wrap; overflow-y: auto; max-height: 500px; }`
                },
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Task 1: Create a generator function using function* that yields 3 values
// Task 2: Call .next() on the generator to retrieve each value
// Task 3: Display the values in the page console

`
                }
            ]
        },
        {
            id: 'js-es6-9-3',
            type: CONTENT_TYPES.QUIZ,
            title: 'Generators & Iterators Knowledge Check',
            duration: '5 min',
            questions: [
                {
                    id: 'gen-q1',
                    question: 'What is the syntax for defining a generator function?',
                    options: [
                        'function generator() {}',
                        'function* generator() {}',
                        'generator function() {}',
                        'function generator*() {}'
                    ],
                    correctAnswer: 1,
                    explanation: 'Generator functions use function* syntax with an asterisk after the function keyword.'
                },
                {
                    id: 'gen-q2',
                    question: 'What does the yield keyword do?',
                    options: [
                        'Stops the function',
                        'Pauses execution and returns a value',
                        'Returns final value',
                        'Creates a loop'
                    ],
                    correctAnswer: 1,
                    explanation: 'yield pauses the generator execution and returns a value. The generator can be resumed later with .next()'
                },
                {
                    id: 'gen-q3',
                    question: 'What does calling a generator function return?',
                    options: [
                        'The first yielded value',
                        'A generator object',
                        'undefined',
                        'An array of values'
                    ],
                    correctAnswer: 1,
                    explanation: 'Calling a generator function returns a generator object. You must call .next() on it to start execution.'
                },
                {
                    id: 'gen-q4',
                    question: 'What does .next() return?',
                    options: [
                        'Just the value',
                        'An object with value and done properties',
                        'A boolean',
                        'The generator'
                    ],
                    correctAnswer: 1,
                    explanation: '.next() returns an object like { value: ..., done: false }. When the generator finishes, done becomes true.'
                },
                {
                    id: 'gen-q5',
                    question: 'Can generators be infinite?',
                    options: [
                        'No, they must end',
                        'Yes, they can yield values forever',
                        'Only with special syntax',
                        'Only in strict mode'
                    ],
                    correctAnswer: 1,
                    explanation: 'Generators can be infinite using while(true) with yield. They only generate values when .next() is called, so they don\'t block.'
                },
                {
                    id: 'gen-q6',
                    question: 'What is the iterator protocol?',
                    options: [
                        'A way to iterate arrays',
                        'An object with a next() method that returns {value, done}',
                        'A for loop pattern',
                        'A generator function'
                    ],
                    correctAnswer: 1,
                    explanation: 'The iterator protocol requires an object with a next() method that returns {value, done}. Generators automatically implement this.'
                },
                {
                    id: 'gen-q7',
                    question: 'What does yield* do?',
                    options: [
                        'Yields multiple values',
                        'Delegates to another generator or iterable',
                        'Multiplies the yield',
                        'Creates an array'
                    ],
                    correctAnswer: 1,
                    explanation: 'yield* delegates to another generator or iterable, yielding all its values. It\'s like calling yield for each value.'
                },
                {
                    id: 'gen-q8',
                    question: 'Can you use for...of with generators?',
                    options: [
                        'No, only with arrays',
                        'Yes, generators are iterable',
                        'Only with yield*',
                        'Only finite generators'
                    ],
                    correctAnswer: 1,
                    explanation: 'Yes! Generators implement the iterable protocol, so they work with for...of, spread operator, and other iteration features.'
                },
                {
                    id: 'gen-q9',
                    question: 'What is lazy evaluation in generators?',
                    options: [
                        'Slow execution',
                        'Values are only computed when requested',
                        'Delayed start',
                        'Cached results'
                    ],
                    correctAnswer: 1,
                    explanation: 'Lazy evaluation means values are only computed when .next() is called, not all at once. This is memory efficient for large sequences.'
                },
                {
                    id: 'gen-q10',
                    question: 'How do you make a class iterable?',
                    options: [
                        'Add an iterate() method',
                        'Add a [Symbol.iterator]() method that returns an iterator',
                        'Extend Iterator class',
                        'Use @iterable decorator'
                    ],
                    correctAnswer: 1,
                    explanation: 'Add a [Symbol.iterator]() method that returns an iterator (object with next() method). You can use a generator function for this.'
                }
            ]
        }
    ]
};
