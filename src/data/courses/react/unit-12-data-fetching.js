import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit12DataFetching = {
    id: 'react-unit-12',
    title: 'Advanced Data Fetching - Beyond useEffect',
    description: 'Fetching data in useEffect is just the beginning. Master race conditions, caching strategies, optimistic updates, and understand why libraries like React Query exist.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-12-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Race Condition 🏁',
            duration: '20 min read',
            content: `
# Deep Dive: The Race Condition 🏁

## 1. The Scenario
User clicks "User 1". Request A starts (takes 3s).
User immediately clicks "User 2". Request B starts (takes 0.5s).

## 2. The Bug
Request B finishes first. Screen shows "User 2".
Request A finishes later. Screen overwrites with "User 1".
**Result**: URL says User 2, but screen shows User 1. This is a Race Condition.

## 3. The Fix: Cleanup Function
In \`useEffect\`, we can use a boolean flag like \`let ignore = false\` to solve this.
When the component re-renders (or unmounts) due to ID change, the cleanup function runs, setting \`ignore = true\`.
The old promise resolves, but we check \`if (!ignore)\` before \`setState\`.
            `
        },
        {
            id: 'react-12-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: State vs Cache 💾',
            duration: '20 min read',
            content: `
# Deep Dive: State vs Cache 💾

## 1. UI State
"Is the modal open?", "Is the menu expanded?"
This belongs in \`useState\`. It is synchronous and client-owned.

## 2. Server State (Cache)
"The list of users", "The product details".
This data is **stored remotely** and we just have a snapshot.
It can become **stale** (outdated) at any moment if someone else updates the database.

## 3. Stale-While-Revalidate (SWR)
This is the modern standard (used by React Query / SWR).
1.  **Immediate**: Show cached data (Stale).
2.  **Background**: Fetch new data (Revalidate).
3.  **Update**: Swap in new data seamlessly.
            `
        },
        {
            id: 'react-12-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Optimistic Updates 🚀',
            duration: '25 min read',
            content: `
# Deep Dive: Optimistic Updates 🚀

## 1. The Concept
Normally: Click Like -> Wait for Server -> Server says OK -> Update UI (Heart turns red).
**Optimistic**: Click Like -> Update UI immediately (Heart turns red) -> Tell Server.

## 2. Rollback
If the server request fails, we must **rollback** the UI to the previous state and show an error.

## 3. UX Impact
This makes the app feel "Instant". The user doesn't feel the network latency.
            `
        },
        {
            id: 'react-12-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Request Waterfalls 🌊',
            duration: '20 min read',
            content: `
# Deep Dive: Request Waterfalls 🌊

## 1. The Problem
Component Parent fetches User.
renders -> Component Child fetches Posts.
renders -> Component GrandChild fetches Comments.

The browser must wait for Parent to finish before it even *knows* it needs to fetch Posts.
This serial loading is slow.

## 2. Solution: Parallel Fetching
Fetch User, Posts, and Comments at the same time (e.g., using \`Promise.all\`) usually at the route level, not the component level.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-12-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Fixing Race Conditions',
            duration: '30 min',
            content: `
# Lab 1: Fixing Race Conditions

Implement a robust fetch hook that ignores stale responses.

## The Mission
1.  **Hook**: \`useEffect\` with dependencies.
2.  **Flag**: \`let active = true\`.
3.  **Cleanup**: Return \`() => { active = false }\`.
4.  **Check**: Only \`setData\` if \`active\` is true.

## Simulation
Use \`setTimeout\` with random delays to simulate network chaos.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Cleanup: active flag.',
                    completed: false,
                    regex: /let\s+active\s*=\s*true/
                },
                {
                    id: 2,
                    description: 'Condition: Check active.',
                    completed: false,
                    regex: /if\s*\(\s*active\s*\)\s*set/
                },
                {
                    id: 3,
                    description: 'Return: Cleanup function.',
                    completed: false,
                    regex: /return\s*\(\s*\)\s*=>\s*{\s*active\s*=\s*false/
                }
            ],
            files: [
                {
                    name: 'RaceFixed.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

export default function UserProfile({ userId }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Task 1: Setup Flag
        
        setData(null); // Clear old data

        fetch(\`/api/user/\${userId}\`)
            .then(res => res.json())
            .then(user => {
                // Task 2: Check Flag
                setData(user);
            });

        // Task 3: Cleanup
        return () => {};
    }, [userId]);

    if (!data) return <p>Loading...</p>;
    return <h1>{data.name}</h1>;
}
`
                }
            ]
        },
        {
            id: 'react-12-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Basic Caching Cache',
            duration: '35 min',
            content: `
# Lab 2: Basic Caching Cache

Implement a simple in-memory cache to avoid re-fetching the same data.

## The Mission
1.  **Cache**: Create a \`cache = {}\` object outside the component.
2.  **Check**: If \`cache[url]\` exists, use it immediately.
3.  **Fetch**: If not, fetch and save to cache.

## Note
In a real library (React Query), the cache is much more complex (gc, invalidation), but this demonstrates the concept.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Check: Cache hit.',
                    completed: false,
                    regex: /if\s*\(\s*cache\[url\]\s*\)/
                },
                {
                    id: 2,
                    description: 'Set: Cache data.',
                    completed: false,
                    regex: /setData\s*\(\s*cache\[url\]\s*\)/
                },
                {
                    id: 3,
                    description: 'Save: Store response.',
                    completed: false,
                    regex: /cache\[url\]\s*=\s*data/
                }
            ],
            files: [
                {
                    name: 'CachedFetch.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

const cache = {};

export default function CachedList({ category }) {
    const [items, setItems] = useState([]);
    const url = \`/api/\${category}\`;

    useEffect(() => {
        // Task 1: Check Cache
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // Task 3: Save to Cache
                
                setItems(data);
            });
    }, [category]);

    return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>;
}
`
                }
            ]
        },
        {
            id: 'react-12-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Optimistic UI',
            duration: '40 min',
            content: `
# Lab 3: Optimistic UI

Implement an "Instant Like" button.

## The Mission
1.  **State**: \`likes\` count.
2.  **Interaction**: On click, immediately \`setLikes(n + 1)\`.
3.  **Request**: Send API request.
4.  **Error**: If request fails, \`setLikes(n - 1)\` (Rollback).

## Challenge
Disable the button while the request is technically pending to avoid double-clicks, OR implement debouncing (we will just assume single click for this lab).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Optimistic: Update immediately.',
                    completed: false,
                    regex: /setLikes\s*\(\s*l\s*=>\s*l\s*\+\s*1\s*\)/
                },
                {
                    id: 2,
                    description: 'Request: Async operation.',
                    completed: false,
                    regex: /await\s+updateLink\s*\(\)/
                },
                {
                    id: 3,
                    description: 'Rollback: Catch error.',
                    completed: false,
                    regex: /catch.*setLikes\s*\(\s*l\s*=>\s*l\s*-\s*1\s*\)/s
                }
            ],
            files: [
                {
                    name: 'LikeButton.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(100);

    const handleLike = async () => {
        // Task 1: Optimistic Update
        
        try {
            // Task 2: API Call (simulated)
            await new Promise((resolve, reject) => setTimeout(reject, 1000)); // Simulating Failure
        } catch (error) {
            // Task 3: Rollback
            alert("Failed!");
            
        }
    };

    return <button onClick={handleLike}>❤️ {likes}</button>;
}
`
                }
            ]
        },
        {
            id: 'react-12-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Generic Hook',
            duration: '45 min',
            content: `
# Lab 4: The Generic Hook

Build a reusable \`useAsync\` hook that handles loading, error, and data states for ANY promise.

## The Mission
1.  **Args**: Accepts an async function.
2.  **States**: \`status\` ('idle', 'pending', 'success', 'error'), \`data\`, \`error\`.
3.  **Function**: \`execute\` to trigger the call.
4.  **Return**: Object with all states + execute function.

## Flexibility
This is the mini-version of React Query.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: Status string.',
                    completed: false,
                    regex: /const\s*\[\s*status\s*,\s*setStatus\s*\]\s*=\s*useState/
                },
                {
                    id: 2,
                    description: 'Execute: pending -> success.',
                    completed: false,
                    regex: /setStatus\s*\(\s*['"]pending['"]\s*\).*setStatus\s*\(\s*['"]success['"]\s*\)/s
                },
                {
                    id: 3,
                    description: 'Error: Catch -> error.',
                    completed: false,
                    regex: /catch.*setStatus\s*\(\s*['"]error['"]\s*\)/s
                }
            ],
            files: [
                {
                    name: 'useAsync.js',
                    language: 'javascript',
                    content: `import { useState, useCallback } from 'react';

export function useAsync(asyncFunction) {
    // Task 1: States
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const execute = useCallback(async () => {
        // Task 2: Pending
        
        try {
            const response = await asyncFunction();
            setData(response);
            // Task 2: Success
            
        } catch (err) {
            setError(err);
            // Task 3: Error
            
        }
    }, [asyncFunction]);

    return { status, data, error, execute };
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-12-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Data Fetching Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is a "Race Condition" in data fetching?',
                    options: [
                        'When the internet is too fast',
                        'When an earlier request finishes AFTER a later request, causing the UI to show old data',
                        'When two users login at the same time',
                        'When React renders faster than the browser'
                    ],
                    correctIndex: 1,
                    explanation: 'Network requests are not guaranteed to finish in order. The last request sent should usually be the only one honored.'
                },
                {
                    id: 'q2',
                    question: 'How do we fix Race Conditions in useEffect?',
                    options: [
                        'Use setTimeout',
                        'Use a clean-up function with a boolean flag (ignore = true)',
                        'Use async/await',
                        'Block the UI until finished'
                    ],
                    correctIndex: 1,
                    explanation: 'By setting a flag to true in the cleanup function, we ignore the results of any promise that resolves after the component has updated or unmounted.'
                },
                {
                    id: 'q3',
                    question: 'What is Optimistic UI?',
                    options: [
                        'A design style with bright colors',
                        'Updating the UI immediately calling the API, assuming success',
                        'Waiting for the server to confirm before updating',
                        'Using optimistic caching headers'
                    ],
                    correctIndex: 1,
                    explanation: 'It provides immediate feedback to the user, making the app feel responsive.'
                },
                {
                    id: 'q4',
                    question: 'What happens if an Optimistic Update fails on the server?',
                    options: [
                        'The app crashes',
                        'We leave the UI as is',
                        'We must Rollback the UI to the previous state',
                        'We retry indefinitely'
                    ],
                    correctIndex: 2,
                    explanation: 'You must revert the change and inform the user, otherwise the UI becomes out of sync with the database.'
                },
                {
                    id: 'q5',
                    question: 'What is "Waterfall Fetching"?',
                    options: [
                        'A good design pattern',
                        'Fetching data in a parent, waiting for render, then fetching in child, etc.',
                        'Fetching all data at once',
                        'Streaming data like a waterfall'
                    ],
                    correctIndex: 1,
                    explanation: 'Waterfalls are bad for performance because they delay data loading for children components needlessly.'
                }
            ]
        }
    ]
};
