import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Frameworks = {
    id: 'tailwind-u10-quiz-1-frameworks',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 10 Quiz: Framework Integration Mastery',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'Why is extracting reusable components better than using @apply in frameworks?',
            options: [
                '@apply does not work with frameworks',
                'Components provide reusability, encapsulation, and can accept props for variants',
                'Components are faster to render',
                'There is no difference'
            ],
            correctIndex: 1,
            explanation: 'Framework components (React, Vue) provide true reusability with props for variants, state management, and component composition — things @apply cannot do.'
        },
        {
            id: 'q2',
            question: 'What is the purpose of the clsx library?',
            options: [
                'To compile Tailwind classes',
                'To conditionally compose class names',
                'To purge unused CSS',
                'To generate random class names'
            ],
            correctIndex: 1,
            explanation: 'clsx helps compose class names conditionally through objects and arrays, making dynamic styling cleaner than template literal concatenation.'
        },
        {
            id: 'q3',
            question: 'What problem does tailwind-merge solve?',
            options: [
                'Merging multiple Tailwind config files',
                'Handling conflicting Tailwind classes (e.g., p-4 and p-8)',
                'Merging CSS and Tailwind',
                'Combining multiple stylesheets'
            ],
            correctIndex: 1,
            explanation: 'tailwind-merge intelligently handles class conflicts. When you have both p-4 and p-8, it ensures the latter wins instead of both being applied.'
        },
        {
            id: 'q4',
            question: 'What is the cn() helper pattern?',
            options: [
                'A CSS normalization function',
                'A combination of clsx and tailwind-merge for the best of both',
                'A component naming convention',
                'A function to count class names'
            ],
            correctIndex: 1,
            explanation: 'cn() combines clsx (conditional composition) with tailwind-merge (conflict handling) into one helper: export function cn(...inputs) { return twMerge(clsx(inputs)); }'
        },
        {
            id: 'q5',
            question: 'How do you allow users to customize a component with their own classes?',
            options: [
                'Use !important on all classes',
                'Accept className prop and merge it with component classes',
                'Remove all default styling',
                'Use inline styles instead'
            ],
            correctIndex: 1,
            explanation: 'Accept a className prop and merge it using cn() or twMerge. This allows users to add or override classes while keeping your defaults.'
        },
        {
            id: 'q6',
            question: 'In Vue, what is the correct way to apply conditional classes?',
            options: [
                ':class="condition && \'class-name\'"',
                ':class="[\'base-class\', condition ? \'class-a\' : \'class-b\']"',
                'class="{{ condition ? \'class-a\' : \'class-b\' }}"',
                'v-class="condition"'
            ],
            correctIndex: 1,
            explanation: 'Vue uses :class binding with an array for multiple classes. Objects can also be used: :class="{ \'active\': isActive }".'
        },
        {
            id: 'q7',
            question: 'Does Tailwind work in Next.js Server Components?',
            options: [
                'No, only in Client Components',
                'Yes, Tailwind classes work in both Server and Client Components',
                'Only with special configuration',
                'Only in the Pages Router, not App Router'
            ],
            correctIndex: 1,
            explanation: 'Tailwind utility classes work perfectly in React Server Components because they are just CSS class names — no client-side JavaScript required.'
        },
        {
            id: 'q8',
            question: 'What is the variants object pattern?',
            options: [
                'A Tailwind config option',
                'An object mapping variant names to their Tailwind class strings',
                'A way to define breakpoints',
                'A plugin for Tailwind'
            ],
            correctIndex: 1,
            explanation: 'The variants object pattern organizes styles: const variants = { primary: "bg-blue-600 text-white", secondary: "bg-gray-200" }. Then select with variants[variant].'
        }
    ]
};
