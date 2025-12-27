

import { unit1Intro } from './unit-01-intro/index.js';
import { unit2Components } from './unit-02-components/index.js';

export const vueCourse = {
    id: 'vue',
    title: 'Vue.js - The Progressive Framework Mastery',
    description: 'Build modern, reactive user interfaces with the Progressive Framework. Master the Composition API.',
    icon: 'vue', // User will need to ensure this icon exists or fallback to general JS icon
    difficulty: 'Intermediate',
    duration: '10 hours',
    units: [
        unit1Intro,
        unit2Components
    ]
};


