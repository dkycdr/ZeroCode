// Python Course - Modular Structure
import { unit0GettingStarted } from './unit-0-getting-started/index.js';
import { unit1Variables } from './unit-1-variables/index.js';
import { unit2ControlFlow } from './unit-2-control-flow/index.js';
import { unit3Loops } from './unit-3-loops/index.js';
import { unit4Lists } from './unit-4-lists/index.js';
import { unit5Dicts } from './unit-5-dicts/index.js';
import { unit6Functions } from './unit-6-functions/index.js';
import { unit7Oop } from './unit-7-oop/index.js';
import { unit8Modules } from './unit-8-modules/index.js';
import { unit9Files } from './unit-9-files/index.js';
import { unit10Errors } from './unit-10-errors/index.js';
import { unit11Capstone } from './unit-11-capstone/index.js';

export const pythonCourse = {
    id: 'python',
    title: 'Python - Complete Automation & Backend Mastery',
    description: 'Learn the world\'s most popular language. Master automation, data analysis, OOP, and backend logic.',
    icon: 'py',
    difficulty: 'Beginner to Intermediate',
    duration: '25 hours',
    units: [
        unit0GettingStarted,
        unit1Variables,
        unit2ControlFlow,
        unit3Loops,
        unit4Lists,
        unit5Dicts,
        unit6Functions,
        unit7Oop,
        unit8Modules,
        unit9Files,
        unit10Errors,
        unit11Capstone
    ]
};
