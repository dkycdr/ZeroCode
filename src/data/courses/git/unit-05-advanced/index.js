import { doc1Rebase } from './01-doc-rebase';
import { lab1Rebase } from './02-lab-rebase';
import { doc2Cherry } from './03-doc-cherry';
import { lab2Cherry } from './04-lab-cherry';
import { doc3Stash } from './05-doc-stash';
import { lab3Stash } from './06-lab-stash';
import { doc4Bisect } from './07-doc-bisect';
import { lab4Bisect } from './08-lab-bisect';
import { quiz1History } from './09-quiz-history';
import { quiz2Debug } from './10-quiz-debug';

export const unit5Advanced = {
    id: 'unit-05-advanced',
    title: 'Advanced Workflows: Rewrite & Debug',
    description: 'Master advanced Git operations: Interactive Rebase, Cherry-pick, Stash, and Bisect.',
    items: [
        doc1Rebase,
        lab1Rebase,
        doc2Cherry,
        lab2Cherry,
        doc3Stash,
        lab3Stash,
        doc4Bisect,
        lab4Bisect,
        quiz1History,
        quiz2Debug
    ]
};
