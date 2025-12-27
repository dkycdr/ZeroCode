import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3FileSystem = {
    id: 'node-unit-3',
    title: 'Unit 3: File System & Buffers',
    description: 'Directly manipulate the hard drive. Learn the difference between Buffers, Streams, and standard File I/O.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES
        {
            id: 'node-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Buffers & Strings 🧩',
            duration: '20 min read',
            content: `
# Deep Dive: Buffers & Strings 🧩

## 1. What is a Buffer?
JavaScript deals with **Strings** (UTF-8 text).
Computers deal with **Binary** (0s and 1s).
A **Buffer** is a chunk of raw memory (binary data) used to represent fixed-size sequences of bytes.

## 2. Why Buffers?
When you read a file or receive a TCP packet, you don't get a String immediately. You get a Buffer.
\`<Buffer 48 65 6c 6c 6f>\` -> Hexadecimal representation of "Hello".

## 3. Encoding
Converting Buffer <-> String requires an encoding.
*   **utf8**: Standard text.
*   **base64**: Binary-to-text (used for images in email/web).
*   **hex**: Hexadecimal strings.

\`const buf = Buffer.from('Hello');\`
\`console.log(buf.toString('hex'));\` // 48656c6c6f
            `
        },
        {
            id: 'node-3-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Sync vs Async vs Promise ⚡',
            duration: '20 min read',
            content: `
# Deep Dive: Sync vs Async vs Promise ⚡

## 1. fs.readFileSync (Blocking)
⛔ **Avoid**. It pauses the entire program until the disk spins. If 100 users hit your server, User 100 waits for User 1's disk read.
Use only for startup config scripts.

## 2. fs.readFile (Callback)
✅ **Good**. Older style.
Error-first callback pattern: \`(err, data) => ...\`.
leads to "Callback Hell" if nested.

## 3. fs.promises (Modern)
✨ **Best**.
\`const fs = require('fs/promises')\`
Allows you to use \`await fs.readFile()\`. Usage of try/catch makes errors clean.
            `
        },
        {
            id: 'node-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Streams (The Superpower) 🌊',
            duration: '25 min read',
            content: `
# Deep Dive: Streams (The Superpower) 🌊

## 1. The Problem
Reading a 4GB video file?
*   \`.readFile()\`: Loads ALL 4GB into RAM. server crashes with "Out of Memory".

## 2. The Solution: Streams
Process data **chunk by chunk**.
Think of Netflix. You don't download the whole movie before it starts. You buffer pieces.

## 3. Pipe
\`readStream.pipe(writeStream)\`.
You can pipe a file -> gzip compression -> network socket.
Use **Streams** for large data handling. RAM usage stays low and constant.
            `
        },
        {
            id: 'node-3-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: File System Flags 🚩',
            duration: '10 min read',
            content: `
# Deep Dive: File System Flags 🚩

## 1. Opening Modes
When writing files, you pass flags:
*   **'w'** (Write): Default. Overwrites file. Creates if missing.
*   **'a'** (Append): Adds to the end.
*   **'x'** (Exclusive): Fails if file already exists (Safety mechanism).

## 2. Permissions
Node allows you to set chmod permissions (Read/Write/Execute bits) e.g., \`0o600\`.
Important for security-sensitive files (SSH keys).
            `
        },

        // PART 2: PRACTICAL LABS
        {
            id: 'node-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Read & Write (Promise API)',
            duration: '20 min',
            content: `
# Lab 1: Read & Write (Promise API)

Use the modern \`fs/promises\` API to manage a JSON file.

## The Mission
1.  **Read**: Load \`data.json\`.
2.  **Parse**: Convert string to Object.
3.  **Modify**: Add a new user.
4.  **Save**: Write back to disk (stringify).

## Await
Remember to use \`await\` and wrap in \`async function main()\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import fs/promises.',
                    completed: false,
                    regex: /require\s*\(\s*['"]fs\/promises['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Read file: await readFile.',
                    completed: false,
                    regex: /await\s+fs\.readFile/
                },
                {
                    id: 3,
                    description: 'Write file: await writeFile.',
                    completed: false,
                    regex: /await\s+fs\.writeFile/
                }
            ],
            files: [
                {
                    name: 'db.js',
                    language: 'javascript',
                    content: `const fs = require('fs/promises');

async function updateUser() {
    // Task 2: Read data.json
    const raw = await fs.readFile('data.json', 'utf8');
    const data = JSON.parse(raw);
    
    data.users.push("New User");
    
    // Task 3: Save it back
    const output = JSON.stringify(data);
    
}
`
                },
                {
                    name: 'data.json',
                    language: 'json',
                    content: `{"users": ["Alice", "Bob"]}`
                }
            ]
        },
        {
            id: 'node-3-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Stream Piping',
            duration: '30 min',
            content: `
# Lab 2: Stream Piping

Copy a file efficiently without loading it all into memory.

## The Mission
1.  **Source**: Create \`createReadStream\`.
2.  **Dest**: Create \`createWriteStream\`.
3.  **Pipe**: Connect them.
4.  **Event**: Listen for 'finish' event.

## Efficiency
This script could copy a 100GB file on a 1GB RAM server without crashing.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create Read Stream.',
                    completed: false,
                    regex: /fs\.createReadStream\s*\(/
                },
                {
                    id: 2,
                    description: 'Create Write Stream.',
                    completed: false,
                    regex: /fs\.createWriteStream\s*\(/
                },
                {
                    id: 3,
                    description: 'Pipe source to dest.',
                    completed: false,
                    regex: /\.pipe\s*\(/
                }
            ],
            files: [
                {
                    name: 'copy.js',
                    language: 'javascript',
                    content: `const fs = require('fs');

// Task 1: Source
const source = null;

// Task 2: Destination
const dest = null;

// Task 3: Pipe
// source.pipe(dest);
`
                }
            ]
        },
        {
            id: 'node-3-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Directory Crawler',
            duration: '25 min',
            content: `
# Lab 3: Directory Crawler

List all files in a folder recursively.

## The Mission
1.  **Read**: \`readdir('.').\`
2.  **Stat**: Check if items are \`isDirectory()\`.
3.  **Recursion**: If folder, dive deeper (Mental concept, keep simple for regex).

## Stat Object
\`fs.statSync(path)\` tells you size, created date, and type (file/folder).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Read directory: readdir.',
                    completed: false,
                    regex: /fs\.readdir/
                },
                {
                    id: 2,
                    description: 'Get Stats: fs.stat.',
                    completed: false,
                    regex: /fs\.stat/
                },
                {
                    id: 3,
                    description: 'Check: isDirectory().',
                    completed: false,
                    regex: /\.isDirectory\s*\(\s*\)/
                }
            ],
            files: [
                {
                    name: 'crawler.js',
                    language: 'javascript',
                    content: `const fs = require('fs/promises');

async function scan(dir) {
    const files = await fs.readdir(dir);
    
    for (let file of files) {
        // Task 2: Get stats
        const stats = await fs.stat(file);
        
        // Task 3: Is it a folder?
        if (stats.isDirectory()) {
            console.log("Folder: " + file);
        } else {
            console.log("File: " + file);
        }
    }
}
`
                }
            ]
        },
        {
            id: 'node-3-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Log File Manager',
            duration: '20 min',
            content: `
# Lab 4: Log File Manager

Implement a logger that appends to a file.
Important: Use the 'a' (append) flag.

## The Mission
1.  **Function**: \`log(message)\`.
2.  **Process**: Add timestamp \`new Date()\`.
3.  **Append**: Write line to \`app.log\`.

## Flags
If you use \`writeFile\` without flags, it **deletes** the old logs every time!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Append: use flag "a".',
                    completed: false,
                    regex: /flag:\s*['"]a['"]/
                },
                {
                    id: 2,
                    description: 'Newline: Add \\n to message.',
                    completed: false,
                    regex: /\+\s*(['"]?)\\n/
                }
            ],
            files: [
                {
                    name: 'logger.js',
                    language: 'javascript',
                    content: `const fs = require('fs/promises');

async function log(msg) {
    const time = new Date().toISOString();
    const line = \`\${time}: \${msg}\\n\`; // Task 2
    
    // Task 1: Append to 'app.log'
    await fs.writeFile('app.log', line, { flag: 'a' });
}
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'File System Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why is fs.readFileSync considered "bad" for web servers?',
                    options: [
                        'It is slow',
                        'It blocks the entire Event Loop, stopping other users from connecting',
                        'It uses too much memory',
                        'It is deprecated'
                    ],
                    correctIndex: 1,
                    explanation: 'Sync methods stop execution. In a web server, this means zero requests can be handled until the file is read.'
                },
                {
                    id: 'q2',
                    question: 'What is the main benefit of Streams?',
                    options: [
                        'They are faster',
                        'They allow processing large data chunk-by-chunk with constant low memory usage',
                        'They are easier to write',
                        'They support databases'
                    ],
                    correctIndex: 1,
                    explanation: 'Streams allow you to process 10GB files using only 10MB of RAM by buffering small pieces at a time.'
                },
                {
                    id: 'q3',
                    question: 'Which method converts a Buffer to a readable string?',
                    options: [
                        'buffer.toText()',
                        'buffer.toString("utf8")',
                        'buffer.parse()',
                        'JSON.stringify(buffer)'
                    ],
                    correctIndex: 1,
                    explanation: 'toString() takes an encoding (default utf8) to decode binary bytes back into text.'
                },
                {
                    id: 'q4',
                    question: 'What happens if you writeFile with flag "w" (default) to an existing file?',
                    options: [
                        'It appends the data',
                        'It throws an error',
                        'It completely parses and updates the file',
                        'It overwrites/replaces the entire file'
                    ],
                    correctIndex: 3,
                    explanation: 'Write mode truncates the file to 0 bytes and writes new content. Use append (a) to add to it.'
                },
                {
                    id: 'q5',
                    question: 'Which is the promise-based import for fs?',
                    options: [
                        'require("fs")',
                        'require("fs").promises',
                        'require("fs/promises")',
                        'Both B and C'
                    ],
                    correctIndex: 3,
                    explanation: 'Modern Node supports both `require("fs").promises` and the shorthand `require("fs/promises")`.'
                }
            ]
        }
    ]
};
