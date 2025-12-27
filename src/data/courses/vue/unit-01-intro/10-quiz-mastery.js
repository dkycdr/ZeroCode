
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueQuiz2 = {
    id: 'vue-1-quiz-2',
    type: CONTENT_TYPES.QUIZ,
    title: 'Vue Mastery Quiz',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What does the ":key" prop do in v-for?',
            options: [
                'It styles the element.',
                'It tracks the identity of nodes for efficient updates.',
                'It is optional (no effect).',
                'It sorts the list.'
            ],
            correctIndex: 1,
            explanation: 'Keys give Vue a way to identify which items have changed, moved, or been deleted.'
        },
        {
            id: 'q2',
            question: 'When does "onMounted" run?',
            options: [
                'Before the component is created.',
                'Every time data changes.',
                'After the component has been inserted into the DOM.',
                'When the component handles a click.'
            ],
            correctIndex: 2,
            explanation: 'onMounted triggers after the initial render is complete and DOM nodes are available.'
        },
        {
            id: 'q3',
            question: 'How do you perform a conditional check in JSX/Template?',
            options: [
                'if="condition"',
                'ng-if="condition"',
                'v-if="condition"',
                'check="condition"'
            ],
            correctIndex: 2,
            explanation: 'v-if is the Vue directive for conditional rendering.'
        }
    ]
};
