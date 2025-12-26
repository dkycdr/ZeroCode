import { doc1Intro } from './01-doc-intro.js';
import { doc2Constraints } from './02-doc-constraints.js';
import { doc3Jit } from './03-doc-jit.js';
import { doc4Setup } from './04-doc-setup.js';
import { lab1Hello } from './05-lab-hello.js';
import { lab2Typography } from './06-lab-typography.js';
import { lab3BoxModel } from './07-lab-box-model.js';
import { lab4Composition } from './08-lab-composition.js';
import { quiz1Intro } from './09-quiz-intro.js';

export const unit1Introduction = {
    id: 'tailwind-unit-1',
    title: 'Unit 1: The Utility-First Paradigm',
    description: 'Abandon your preconceptions about "semantic class names". Learn to build modern, constraint-based UIs directly in your markup using the Tailwind ecosystem.',
    items: [
        doc1Intro,
        doc2Constraints,
        doc3Jit,
        doc4Setup,
        lab1Hello,
        lab2Typography,
        lab3BoxModel,
        lab4Composition,
        quiz1Intro
    ]
};
