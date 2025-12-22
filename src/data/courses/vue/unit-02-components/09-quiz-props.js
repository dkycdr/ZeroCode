
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueQuiz3 = {
    id: 'vue-2-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Components & Props Mastery',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the recommended way to register a component in Vue 3 with <script setup>?',
            options: [
                'app.component("MyComponent", MyComponent)',
                'Import the component and use it directly in the template',
                'Use Vue.component() globally',
                'Register in components: { } option'
            ],
            correctIndex: 1,
            explanation: 'With <script setup>, you simply import the component and it becomes available in the template automatically. This is local registration and is the recommended approach for tree-shaking.'
        },
        {
            id: 'q2',
            question: 'Which naming convention is recommended for custom components in templates?',
            options: [
                'kebab-case: <user-profile />',
                'PascalCase: <UserProfile />',
                'camelCase: <userProfile />',
                'UPPER_CASE: <USER_PROFILE />'
            ],
            correctIndex: 1,
            explanation: 'PascalCase is recommended for component names in templates as it clearly distinguishes custom components from native HTML elements.'
        },
        {
            id: 'q3',
            question: 'How do you define props using the Object syntax?',
            options: [
                'defineProps(["name", "age"])',
                'defineProps({ name: String, age: Number })',
                'props: { name, age }',
                'this.defineProps(name, age)'
            ],
            correctIndex: 1,
            explanation: 'The Object syntax defineProps({ name: String, age: Number }) provides type validation and is recommended for production code.'
        },
        {
            id: 'q4',
            question: 'What is the correct way to provide a default value for an Object prop?',
            options: [
                'default: { name: "Guest" }',
                'default: () => { name: "Guest" }',
                'default: () => ({ name: "Guest" })',
                'defaultValue: { name: "Guest" }'
            ],
            correctIndex: 2,
            explanation: 'For Object and Array props, you must use a factory function that returns the default value: default: () => ({ ... }). This ensures each component instance gets its own copy.'
        },
        {
            id: 'q5',
            question: 'What happens if you try to mutate a prop directly in the child component?',
            options: [
                'The parent data is updated successfully',
                'Vue shows a warning in development mode',
                'The app crashes with an error',
                'Nothing, props are mutable by default'
            ],
            correctIndex: 1,
            explanation: 'Vue will show a warning in development mode because props follow One-Way Data Flow and should be read-only in the child component. Mutating props breaks this principle.'
        },
        {
            id: 'q6',
            question: 'Which prop definition makes a prop required?',
            options: [
                'name: { type: String, mandatory: true }',
                'name: { type: String, required: true }',
                'name: { type: String, mustHave: true }',
                'name: String!'
            ],
            correctIndex: 1,
            explanation: 'Use required: true in the prop definition to make it mandatory: { type: String, required: true }'
        },
        {
            id: 'q7',
            question: 'How should you pass a dynamic numeric value as a prop?',
            options: [
                '<MyComponent count="5" />',
                '<MyComponent count=5 />',
                '<MyComponent :count="5" />',
                '<MyComponent v-count="5" />'
            ],
            correctIndex: 2,
            explanation: 'Use v-bind (or the : shorthand) to pass non-string values: :count="5". Without v-bind, it passes the string "5" instead of the number 5.'
        },
        {
            id: 'q8',
            question: 'What is the purpose of the "validator" function in prop definitions?',
            options: [
                'To transform the prop value before use',
                'To provide custom validation logic for the prop value',
                'To set default values dynamically',
                'To convert prop types automatically'
            ],
            correctIndex: 1,
            explanation: 'The validator function provides custom validation logic. It receives the prop value and returns true if valid, false otherwise. Vue shows a warning if validation fails.'
        },
        {
            id: 'q9',
            question: 'If you need a child component to modify a prop value, what should you do?',
            options: [
                'Modify the prop directly: props.value = newValue',
                'Create a local ref copy of the prop',
                'Use .sync modifier on the prop',
                'Disable prop validation'
            ],
            correctIndex: 1,
            explanation: 'Create a local reactive copy: const localValue = ref(props.initialValue). Never mutate props directly. Alternatively, emit an event to ask the parent to update the value.'
        },
        {
            id: 'q10',
            question: 'What is the v-bind object syntax shortcut for passing multiple props?',
            options: [
                '<MyComponent props="user" />',
                '<MyComponent v-bind="user" />',
                '<MyComponent ...user />',
                '<MyComponent :all="user" />'
            ],
            correctIndex: 1,
            explanation: 'v-bind="object" passes all properties of the object as individual props: <MyComponent v-bind="user" /> is equivalent to :name="user.name" :age="user.age" etc.'
        }
    ]
};
