import { doc1WhyVersionControl } from './01-doc-why-version-control.js';
import { doc2GitVsOthers } from './02-doc-git-vs-others.js';
import { doc3MentalModel } from './03-doc-mental-model.js';
import { lab1FirstSave } from './04-lab-first-save.js';
import { quiz1Foundations } from './05-quiz-foundations.js';

export const unit0WhyGit = {
    id: 'git-unit-0',
    version: '1.0.0',
    title: 'Unit 0: Why Git? The Foundation',
    description: 'Start here. Understand why version control exists, how Git thinks, and make your first commit.',
    items: [
        doc1WhyVersionControl,
        doc2GitVsOthers,
        doc3MentalModel,
        lab1FirstSave,
        quiz1Foundations
    ]
};
