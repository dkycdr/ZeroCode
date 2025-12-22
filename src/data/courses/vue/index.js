

import { unit1Intro } from './unit-01-intro';
import { unit2Components } from './unit-02-components';

const vueCourse = {
    id: 'vue',
    title: 'Vue.js Mastery',
    description: 'Build modern, reactive user interfaces with the Progressive Framework. Master the Composition API.',
    icon: 'vue', // User will need to ensure this icon exists or fallback to general JS icon
    difficulty: 'Intermediate',
    duration: '10 hours',
    units: [
        unit1Intro,
        unit2Components
    ]
};

export default vueCourse;
