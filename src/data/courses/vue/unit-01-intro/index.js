
import { vueDoc1 } from './01-doc-intro';
import { vueDoc2 } from './02-doc-instance';
import { vueDoc3 } from './03-doc-reactivity';
import { vueDoc4 } from './04-doc-templates';
import { vueLab1 } from './05-lab-setup';
import { vueLab2 } from './06-lab-binding';
import { vueLab3 } from './07-lab-conditions';
import { vueLab4 } from './08-lab-lists';
import { vueQuiz1 } from './09-quiz-basics';
import { vueQuiz2 } from './10-quiz-mastery';

export const unit1Intro = {
    id: 'vue-unit-1',
    title: 'Unit 1: Introduction to Vue 3',
    description: 'Understand the Progressive Framework, the Composition API, and Reactive State.',
    items: [
        // Informational
        vueDoc1,
        vueDoc2,
        vueDoc3,
        vueDoc4,
        // Lessons
        vueLab1,
        vueLab2,
        vueLab3,
        vueLab4,
        // Quizzes
        vueQuiz1,
        vueQuiz2
    ]
};
