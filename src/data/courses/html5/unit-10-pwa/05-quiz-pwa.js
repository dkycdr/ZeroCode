import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz5Pwa = {
    id: 'html5-u10-quiz-pwa',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: PWA Mastery',
    duration: '6 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the purpose of a Service Worker?',
            options: [
                'To style the website with CSS',
                'To run JavaScript in a separate thread and intercept network requests',
                'To create database tables',
                'To send emails from the website'
            ],
            correctIndex: 1,
            explanation: 'A Service Worker runs in the background and acts as a proxy between your app and the network. It can intercept requests and serve cached content, enabling offline functionality.'
        },
        {
            id: 'q2',
            question: 'Where does the Service Worker sit in the network flow?',
            options: [
                'Inside the database server',
                'Inside the HTML file',
                'As a proxy between the browser and the internet',
                'In the user\'s email inbox'
            ],
            correctIndex: 2,
            explanation: 'The Service Worker sits between your app and the network like a traffic controller. It intercepts all network requests and can decide to serve from cache or fetch from the network.'
        },
        {
            id: 'q3',
            question: 'Which caching strategy is best for a news feed that updates frequently?',
            options: [
                'Cache First - Always use cached version',
                'Network First - Try network, fallback to cache',
                'Cache Only - Never use network',
                'None - Do not cache at all'
            ],
            correctIndex: 1,
            explanation: 'Network First attempts to get fresh data from the network. If the user is offline or the network fails, it falls back to the cached version. This is perfect for content that changes frequently but should still work offline.'
        },
        {
            id: 'q4',
            question: 'What happens during the "Waiting" phase of a Service Worker lifecycle?',
            options: [
                'The browser is downloading the HTML',
                'The new Service Worker is ready but waiting for the old one to stop controlling pages',
                'The cache is being cleared',
                'The user is typing in a form'
            ],
            correctIndex: 1,
            explanation: 'When you update a Service Worker, the new version installs but enters a "Waiting" state. It waits for all tabs using the old version to close. This prevents data corruption. You can skip this with self.skipWaiting().'
        },
        {
            id: 'q5',
            question: 'What does "display": "standalone" do in the manifest?',
            options: [
                'Makes the app display ads',
                'Removes the browser address bar so the app looks native',
                'Makes the app only work on desktop',
                'Displays the app in a small window'
            ],
            correctIndex: 1,
            explanation: 'Setting display to "standalone" removes the browser URL bar and navigation buttons, making your PWA look like a native app. Other options include "fullscreen" (no status bar) and "minimal-ui" (keeps back button).'
        },
        {
            id: 'q6',
            question: 'Why do we use "purpose": "maskable" for PWA icons?',
            options: [
                'To make the icon invisible',
                'To encrypt the icon',
                'To ensure the icon looks good when cropped into different shapes (circle, square, etc.)',
                'To make the icon animate'
            ],
            correctIndex: 2,
            explanation: 'Android devices display app icons in various shapes based on manufacturer preference. Maskable icons have a safe zone that ensures important parts of your logo are not cropped off when displayed in circles, squircles, or other shapes.'
        }
    ]
};
