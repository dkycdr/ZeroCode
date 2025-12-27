import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1DarkMode = {
    id: 'tailwind-u7-quiz-1-dark-mode',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 7 Quiz: Dark Mode Mastery',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'Which darkMode strategy gives users manual control via a toggle?',
            options: [
                'darkMode: "media"',
                'darkMode: "class"',
                'darkMode: "auto"',
                'darkMode: "toggle"'
            ],
            correctIndex: 1,
            explanation: '"class" strategy requires manually adding/removing the "dark" class on the html element, giving full user control via a toggle button.'
        },
        {
            id: 'q2',
            question: 'Why is pure black (#000000) avoided in dark mode design?',
            options: [
                'It uses more battery on OLED screens',
                'Browsers do not render it correctly',
                'It causes eye strain and looks harsh next to colored elements',
                'CSS does not support pure black'
            ],
            correctIndex: 2,
            explanation: 'Pure black creates too much contrast with other colors, causing eye strain. Professional dark modes use softer colors like gray-900 (#111827).'
        },
        {
            id: 'q3',
            question: 'How do you prevent the "flash of wrong theme" on page load?',
            options: [
                'Use CSS-only dark mode',
                'Add an inline script in <head> that applies the theme before content renders',
                'Disable all transitions',
                'Use async loading for styles'
            ],
            correctIndex: 1,
            explanation: 'An inline script in <head> runs synchronously before the page renders, applying the dark class immediately and preventing any flash.'
        },
        {
            id: 'q4',
            question: 'What is the correct way to show a sun icon only in dark mode?',
            options: [
                '<span class="show-dark">☀️</span>',
                '<span class="hidden dark:block">☀️</span>',
                '<span class="dark:show">☀️</span>',
                '<span class="dark-only">☀️</span>'
            ],
            correctIndex: 1,
            explanation: 'Use "hidden" to hide by default, then "dark:block" to show when dark mode is active. This is the standard Tailwind pattern for conditional visibility.'
        },
        {
            id: 'q5',
            question: 'In dark mode, how should you handle shadows on cards?',
            options: [
                'Keep the same shadow-lg',
                'Use darker shadows with shadow-gray-900',
                'Remove shadows and use subtle borders instead',
                'Double the shadow size'
            ],
            correctIndex: 2,
            explanation: 'Shadows are less visible on dark backgrounds. Replace them with subtle borders (dark:border dark:border-gray-800) or remove them entirely.'
        },
        {
            id: 'q6',
            question: 'What should you use for page background in dark mode?',
            options: [
                'bg-black',
                'bg-gray-950 or bg-gray-900',
                'bg-white with invert filter',
                'bg-dark'
            ],
            correctIndex: 1,
            explanation: 'Use gray-950 or gray-900 for dark backgrounds. These are softer than pure black and create a more comfortable viewing experience.'
        },
        {
            id: 'q7',
            question: 'What does this code do: matchMedia("(prefers-color-scheme: dark)").matches?',
            options: [
                'Checks if Tailwind dark mode is enabled',
                'Checks if the user has set dark class manually',
                'Checks the operating system dark mode preference',
                'Checks if the browser supports dark mode'
            ],
            correctIndex: 2,
            explanation: 'This JavaScript API checks the user\'s operating system or browser dark mode preference, returning true if they prefer dark mode.'
        },
        {
            id: 'q8',
            question: 'For a three-state theme toggle (light/dark/system), what happens when "system" is selected?',
            options: [
                'Theme is locked to light mode',
                'localStorage.theme is removed and OS preference is followed',
                'Page always shows both themes',
                'Dark mode is enabled permanently'
            ],
            correctIndex: 1,
            explanation: 'When "system" is selected, remove the localStorage.theme value and let the OS preference (via prefers-color-scheme) determine the theme.'
        }
    ]
};
