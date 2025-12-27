import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz6Apis = {
    id: 'html5-u9-quiz-apis',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: HTML5 APIs Mastery',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'Why should you NEVER store passwords in localStorage?',
            options: [
                'localStorage is too slow',
                'localStorage has a 4KB size limit',
                'localStorage can be read by any JavaScript on the page (XSS vulnerable) and is not encrypted',
                'localStorage gets deleted when the browser closes'
            ],
            correctIndex: 2,
            explanation: 'LocalStorage is accessible to any script running on the page. If an attacker injects malicious JavaScript (XSS attack), they can read everything stored there. Passwords and sensitive data must be kept on the server.'
        },
        {
            id: 'q2',
            question: 'What is the correct way to save an array to localStorage?',
            options: [
                'localStorage.setItem("key", myArray)',
                'localStorage.save("key", myArray)',
                'localStorage.setItem("key", JSON.stringify(myArray))',
                'localStorage.setArray("key", myArray)'
            ],
            correctIndex: 2,
            explanation: 'LocalStorage can only store strings. If you save an array directly, it becomes "[object Object]" which is useless. You must convert it to a JSON string first with JSON.stringify().'
        },
        {
            id: 'q3',
            question: 'What happens if the user clicks "Block" on the geolocation permission popup?',
            options: [
                'The website crashes',
                'The browser uses a default location',
                'The error callback is triggered with PERMISSION_DENIED code',
                'Nothing happens, the position is returned anyway'
            ],
            correctIndex: 2,
            explanation: 'When the user denies permission, the error callback is called with error.code equal to PERMISSION_DENIED. Your code must handle this gracefully, perhaps by asking the user to enter their location manually.'
        },
        {
            id: 'q4',
            question: 'What is the purpose of requestAnimationFrame() in Canvas animations?',
            options: [
                'To load images faster',
                'To create a smooth 60fps render loop that syncs with the display',
                'To request permission from the user',
                'To save the canvas as an image file'
            ],
            correctIndex: 1,
            explanation: 'requestAnimationFrame() syncs your animation with the browser\'s refresh rate (usually 60 times per second). It\'s more efficient than setInterval because it pauses when the tab is hidden, saving battery.'
        },
        {
            id: 'q5',
            question: 'In the "Chef and Kitchen Assistant" analogy, what does the Web Worker represent?',
            options: [
                'The customer waiting for food',
                'The menu displayed on the wall',
                'The chef (main thread) who serves customers',
                'The kitchen assistant who does heavy work in the background'
            ],
            correctIndex: 3,
            explanation: 'The Web Worker is like a kitchen assistant who handles heavy tasks (like chopping onions) in a separate room. This allows the main chef (main thread) to keep serving customers (handling UI) without freezing.'
        },
        {
            id: 'q6',
            question: 'Which of these can a Web Worker NOT do?',
            options: [
                'Make fetch() requests to APIs',
                'Use setTimeout() and setInterval()',
                'Modify the DOM (document.getElementById, etc.)',
                'Perform heavy calculations'
            ],
            correctIndex: 2,
            explanation: 'Web Workers run in a separate thread and do NOT have access to the DOM. They cannot access document, window, or any DOM elements. They can only communicate with the main thread through postMessage().'
        },
        {
            id: 'q7',
            question: 'What is the difference between localStorage and sessionStorage?',
            options: [
                'localStorage is faster, sessionStorage is slower',
                'localStorage persists forever, sessionStorage is cleared when the tab closes',
                'localStorage is for strings, sessionStorage is for objects',
                'There is no difference, they are aliases'
            ],
            correctIndex: 1,
            explanation: 'Both have the same API and 5MB limit. The ONLY difference is lifespan: localStorage data persists until explicitly deleted, while sessionStorage data is automatically cleared when the browser tab is closed.'
        },
        {
            id: 'q8',
            question: 'When drawing on Canvas, where is the coordinate (0, 0)?',
            options: [
                'Center of the canvas',
                'Bottom-left corner',
                'Top-left corner',
                'Top-right corner'
            ],
            correctIndex: 2,
            explanation: 'In Canvas, the origin (0, 0) is always at the top-left corner. X increases going right, and Y increases going DOWN (not up like in math class).'
        }
    ]
};
