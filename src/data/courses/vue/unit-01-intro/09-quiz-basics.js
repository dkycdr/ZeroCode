
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueQuiz1 = {
    id: 'vue-1-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Vue Basics Quiz',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the correct way to update a ref in <script setup>?',
            options: [
                'count = 1',
                'count.value = 1',
                'this.count = 1',
                'setCount(1)'
            ],
            correctIndex: 1,
            explanation: 'Refs are objects. You must access the `.value` property in JavaScript to modify them.'
        },
        {
            id: 'q2',
            question: 'Which directve is used for Two-Way Binding?',
            options: [
                'v-bind',
                'v-model',
                'v-on',
                'v-sync'
            ],
            correctIndex: 1,
            explanation: 'v-model creates a two-way binding on a form input element or a component.'
        }
    ]
};
