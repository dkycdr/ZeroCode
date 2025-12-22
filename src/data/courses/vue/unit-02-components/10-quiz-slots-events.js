
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueQuiz4 = {
    id: 'vue-2-quiz-2',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Events & Slots Mastery',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the correct way to emit a custom event in <script setup>?',
            options: [
                'this.$emit("event-name")',
                'emit("event-name")',
                '$emit("event-name")',
                'defineEmit("event-name")'
            ],
            correctIndex: 1,
            explanation: 'In <script setup>, you first declare emits using const emit = defineEmits([...]), then call emit("event-name") to emit events.'
        },
        {
            id: 'q2',
            question: 'Which naming convention should you use for custom events?',
            options: [
                'PascalCase: UserUpdated',
                'camelCase: userUpdated',
                'kebab-case: user-updated',
                'snake_case: user_updated'
            ],
            correctIndex: 2,
            explanation: 'Use kebab-case for event names (user-updated) to match HTML attribute naming conventions and avoid case-sensitivity issues.'
        },
        {
            id: 'q3',
            question: 'What props and events are required for a component to work with v-model?',
            options: [
                'value prop and input event',
                'modelValue prop and update:modelValue event',
                'model prop and change event',
                'data prop and update event'
            ],
            correctIndex: 1,
            explanation: 'For v-model to work, the component needs a modelValue prop and must emit update:modelValue events. This is the Vue 3 convention.'
        },
        {
            id: 'q4',
            question: 'How do you pass data along with an event emission?',
            options: [
                'emit("update", { payload: data })',
                'emit("update", data)',
                'emit("update").with(data)',
                'emit({ event: "update", data })'
            ],
            correctIndex: 1,
            explanation: 'Pass data as additional arguments: emit("update", data). The parent receives this in the event handler: @update="handler" where handler(data) receives the payload.'
        },
        {
            id: 'q5',
            question: 'What is a default slot?',
            options: [
                'A slot with a default name attribute',
                'A slot without a name, used for main content',
                'A slot with fallback content',
                'The first slot in a component'
            ],
            correctIndex: 1,
            explanation: 'A default slot is an unnamed <slot></slot> that receives content not assigned to any named slot. It\'s the main content area of a component.'
        },
        {
            id: 'q6',
            question: 'How do you define a named slot in a child component?',
            options: [
                '<slot id="header"></slot>',
                '<slot name="header"></slot>',
                '<slot #header></slot>',
                '<slot slot="header"></slot>'
            ],
            correctIndex: 1,
            explanation: 'Use the name attribute: <slot name="header"></slot>. Parents then use <template #header> to provide content for this slot.'
        },
        {
            id: 'q7',
            question: 'What is the shorthand for v-slot:header?',
            options: [
                '@header',
                ':header',
                '#header',
                '$header'
            ],
            correctIndex: 2,
            explanation: 'The # symbol is shorthand for v-slot. <template #header> is equivalent to <template v-slot:header>.'
        },
        {
            id: 'q8',
            question: 'What are scoped slots used for?',
            options: [
                'To limit slot visibility to specific components',
                'To pass data from child component to slot content in parent',
                'To create private slots',
                'To validate slot content'
            ],
            correctIndex: 1,
            explanation: 'Scoped slots allow the child component to pass data back to the parent\'s slot content. The child owns the data, the parent controls the rendering.'
        },
        {
            id: 'q9',
            question: 'How do you provide fallback content for a slot?',
            options: [
                '<slot default="Fallback Text" />',
                '<slot>Fallback Text</slot>',
                '<slot fallback>Fallback Text</slot>',
                '<slot :default="Fallback Text" />'
            ],
            correctIndex: 1,
            explanation: 'Place fallback content between the slot tags: <slot>Fallback Text</slot>. It displays only if the parent doesn\'t provide content for that slot.'
        },
        {
            id: 'q10',
            question: 'What is the "Props Down, Events Up" pattern?',
            options: [
                'A performance optimization technique',
                'The principle that data flows down via props, and events flow up to notify parents',
                'A way to validate props direction',
                'A method for two-way data binding'
            ],
            correctIndex: 1,
            explanation: 'This is Vue\'s core communication pattern: parents pass data to children via props (down), and children notify parents of changes via events (up). This maintains unidirectional data flow.'
        }
    ]
};
