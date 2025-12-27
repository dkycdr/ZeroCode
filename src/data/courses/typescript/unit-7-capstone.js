
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Capstone = {
    id: 'ts-unit-7',
    title: 'Unit 7: Capstone Project',
    description: 'Build "TaskMaster SDK". A production-grade TypeScript library including Domain Modeling, Generic Repositories, Typed Events, and Runtime Validation.',
    items: [
        // =====================================================================
        // SECTION 1: THE BRIEF
        // =====================================================================
        {
            id: 'ts-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Project Brief: TaskMaster SDK 🏗️',
            duration: '15 min read',
            content: `
# Project Brief: TaskMaster SDK 🏗️

You have been hired to build the core SDK for a new Project Management tool (like Jira or Trello).
This SDK will be used by the Frontend (React) and Backend (Node.js).

## Requirements
1.  **Strict Typing**: No \`any\`. strict mode enabled.
2.  **Domain Models**: \`Task\`, \`Project\`, \`User\` interfaces.
3.  **Persistence**: A \`GenericRepository<T>\` that can save to Memory or LocalStorage.
4.  **Events**: A typed Event Emitter system (\`on("create", handler)\`).
5.  **Validation**: A runtime check system (Discriminated Unions).

## Architecture
\`\`\`
src/
  models/       # Interfaces
  storage/      # Generic Repo
  events/       # Event System
  index.ts      # Public API
\`\`\`
            `
        },

        // =====================================================================
        // SECTION 2: PHASE 1 - DOMAIN MODELING
        // =====================================================================
        {
            id: 'ts-7-project-1',
            type: CONTENT_TYPES.PROJECT,
            title: 'Phase 1: Domain Modeling',
            duration: '45 min',
            content: `
# Phase 1: Domain Modeling

Define the shape of the data. Use extensive type aliases for IDs to prevent mixing them up.

## Specifications
1.  **IDs**: define \`type UserID = string\`, \`type TaskID = string\`.
2.  **Status**: \`"todo" | "in-progress" | "done"\`.
3.  **Task**: id, title, status, assignedTo (UserID), createdAt (Date).
4.  **Project**: id, name, tasks (TaskID[]).

## Starter Code
We have provided a blank slate.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define ID Types',
                    completed: false,
                    regex: /type\s+UserID\s*=\s*string/,
                    hint: 'Type aliases.'
                },
                {
                    id: 2,
                    description: 'Define TaskStatus Union',
                    completed: false,
                    regex: /type\s+TaskStatus\s*=\s*["']todo["']/,
                    hint: 'Union of literals.'
                },
                {
                    id: 3,
                    description: 'Define Task Interface',
                    completed: false,
                    regex: /interface\s+Task\s*\{/,
                    hint: 'Main interface.'
                }
            ],
            starterFiles: [
                {
                    name: 'models.ts',
                    language: 'ts',
                    content: `// TODO: Define ID types (Flavoring/Branding optional but encouraged)

// TODO: Define Status

// TODO: Define Task and Project interfaces
`
                },
                {
                    name: 'tsconfig.json',
                    language: 'json',
                    content: `{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "CommonJS"
  }
}`
                }
            ]
        },

        // =====================================================================
        // SECTION 3: PHASE 2 - GENERIC STORAGE
        // =====================================================================
        {
            id: 'ts-7-project-2',
            type: CONTENT_TYPES.PROJECT,
            title: 'Phase 2: Generic Storage',
            duration: '60 min',
            content: `
# Phase 2: Generic Storage

We need a way to save any entity (User, Task, Project).
Implement a \`InMemoryStore<T>\`.

## Specifications
1.  **Constraint**: \`T\` must have an \`id: string\`.
2.  **Class**: \`InMemoryStore<T extends { id: string }>\`.
3.  **Methods**:
    *   \`add(item: T): void\`
    *   \`get(id: string): T | undefined\`
    *   \`getAll(): T[]\`

## Private State
Use a \`private storage: Record<string, T> = {}\` (Map) for O(1) access.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Generic Class with Constraint',
                    completed: false,
                    regex: /class\s+InMemoryStore\s*<\s*T\s+extends\s*\{\s*id\s*:\s*string\s*\}\s*>/,
                    hint: 'Extends constraint on T.'
                },
                {
                    id: 2,
                    description: 'Implement Private Storage',
                    completed: false,
                    regex: /private\s+storage\s*:\s*Record/,
                    hint: 'Record<string, T>.'
                },
                {
                    id: 3,
                    description: 'Implement add method',
                    completed: false,
                    regex: /add\s*\(\s*item\s*:\s*T\s*\)/,
                    hint: 'Add item.'
                }
            ],
            starterFiles: [
                {
                    name: 'storage.ts',
                    language: 'ts',
                    content: `interface Identifiable {
    id: string;
}

// TODO: Implement Generic Store
class InMemoryStore {
    
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc storage.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 4: PHASE 3 - TYPED EVENTS
        // =====================================================================
        {
            id: 'ts-7-project-3',
            type: CONTENT_TYPES.PROJECT,
            title: 'Phase 3: Typed Events',
            duration: '60 min',
            content: `
# Phase 3: Typed Events

We want to listen to changes. \`sdk.on("taskCreated", (task) => ...)\`.

## Specifications
1.  **EventMap**: A generic map of EventName -> Payload.
2.  **Class**: \`EventEmitter<Events>\`.
3.  **Method**: \`on<K extends keyof Events>(event: K, cb: (payload: Events[K]) => void)\`.
4.  **Method**: \`emit<K extends keyof Events>(event: K, payload: Events[K])\`.

## Example Usage
\`\`\`ts
interface TaskEvents {
  "create": Task;
  "delete": string; // ID
}
const bus = new EventEmitter<TaskEvents>();
bus.emit("create", taskObj); // OK
bus.emit("delete", 123); // Error (expects string)
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define EventEmitter class',
                    completed: false,
                    regex: /class\s+EventEmitter\s*<\s*Events\s*>/,
                    hint: 'Generic for Event Map.'
                },
                {
                    id: 2,
                    description: 'Implement on() method with K keyof Events',
                    completed: false,
                    regex: /on\s*<\s*K\s+extends\s+keyof\s+Events\s*>/,
                    hint: 'Generic constraint K.'
                },
                {
                    id: 3,
                    description: 'Type callback payload correctly',
                    completed: false,
                    regex: /\(\s*payload\s*:\s*Events\[K\]\s*\)/,
                    hint: 'Indexed Access Type.'
                }
            ],
            starterFiles: [
                {
                    name: 'events.ts',
                    language: 'ts',
                    content: `// Advanced Pattern: Typed Emitter

class EventEmitter<Events> {
    private listeners: any = {}; // You can use 'any' for implementation details if difficult, but public API must be strict

    // on(event, cb)
    
    // emit(event, payload)
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc events.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 5: FINAL ASSEMBLY
        // =====================================================================
        {
            id: 'ts-7-project-4',
            type: CONTENT_TYPES.PROJECT,
            title: 'Phase 4: Final Assembly',
            duration: '30 min',
            content: `
# Phase 4: Final Assembly

Connect all the pieces.
Create a \`TaskManager\` class that uses the Storage and Event Emitter.

## Features
1.  \`createTask(title: string): Task\` -> Saves to store, Emits "create".
2.  \`completeTask(id: string): void\` -> Updates status, Emits "update".

## Congratulations!
You have built a strictly typed, scalable SDK using Generics, Constraints, Mapped Types, and Utility Types.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize Dependencies',
                    completed: false,
                    regex: /new\s+InMemoryStore/,
                    hint: 'Instantiate your store.'
                },
                {
                    id: 2,
                    description: 'Implement createTask',
                    completed: false,
                    regex: /createTask\s*\(\s*title\s*:\s*string\s*\)/,
                    hint: 'Method signature.'
                },
                {
                    id: 3,
                    description: 'Saves and Emits',
                    completed: false,
                    regex: /emit\s*\(\s*["']create["']/,
                    hint: 'Trigger the event.'
                }
            ],
            starterFiles: [
                {
                    name: 'index.ts',
                    language: 'ts',
                    content: `import { Task, TaskStatus } from './models';
import { InMemoryStore } from './storage';
import { EventEmitter } from './events';

interface TaskEvents {
    "create": Task;
    "update": Task;
}

class TaskManager {
    // TODO: Init Store and Events
    
    createTask(title: string) {
        // 1. Create Object
        // 2. Save
        // 3. Emit
    }
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc index.ts
`
                }
            ]
        }
    ]
};
