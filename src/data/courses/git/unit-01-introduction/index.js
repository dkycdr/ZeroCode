import { doc1Vcs } from './01-doc-vcs.js';
import { doc2Install } from './02-doc-install.js';
import { lab1Init } from './03-lab-init.js';
import { doc3States } from './04-doc-states.js';
import { lab2Staging } from './05-lab-staging.js';
import { doc4Anatomy } from './06-doc-commit-anatomy.js';
import { lab3Commit } from './07-lab-commit.js';
import { lab4Log } from './08-lab-log.js';
import { quiz1Basics } from './09-quiz-basics.js';
import { quiz2Mastery } from './10-quiz-mastery.js';

export const unit1Introduction = {
    id: 'git-unit-1',
    version: '1.0.0',
    title: 'Unit 1: Protocol Initialization',
    description: 'Master the distributed architecture. understand the "Why" behind the "How" and perform your first commits.',
    items: [
        doc1Vcs,
        doc2Install,
        lab1Init,
        doc3States,
        lab2Staging,
        doc4Anatomy,
        lab3Commit,
        lab4Log,
        quiz1Basics,
        quiz2Mastery
    ]
};
