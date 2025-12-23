import { unit1Basics } from './unit-1-basics';
import { unit2ControlFlow } from './unit-2-control-flow';
import { unit3Lists } from './unit-3-lists';
import { unit4Dicts } from './unit-4-dicts';
import { unit5Functions } from './unit-5-functions';
import { unit6OOP } from './unit-6-oop';
import { unit7Capstone } from './unit-7-capstone';

export const pythonCourse = {
    id: 'python',
    title: 'Python - Complete Automation & Backend Mastery',
    description: 'Learn the world\'s most popular language. Master automation, data analysis, and backend logic.',
    icon: 'py', // Need to ensure icon support in UI
    difficulty: 'Beginner to Intermediate',
    duration: '20 hours',
    units: [
        unit1Basics,
        unit2ControlFlow,
        unit3Lists,
        unit4Dicts,
        unit5Functions,
        unit6OOP,
        unit7Capstone
    ]
};



