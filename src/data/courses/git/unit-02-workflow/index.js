import { doc1Ignore } from './01-doc-ignore.js';
import { lab1Ignore } from './02-lab-ignore.js';
import { doc2Diff } from './03-doc-diff.js';
import { lab2Diff } from './04-lab-diff.js';
import { doc3Undo } from './05-doc-undo.js';
import { lab3Undo } from './06-lab-undo.js';
import { doc4Amend } from './07-doc-amend.js';
import { lab4Amend } from './08-lab-amend.js';
import { quiz1Ops } from './09-quiz-ops.js';
import { quiz2Tactical } from './10-quiz-tactical.js';

export const unit2Workflow = {
    id: 'git-unit-2',
    title: 'Unit 2: The Standard Workflow ⚙️',
    description: 'Master the daily cycle: Ignoring noise, auditing changes, and fixing mistakes with precision.',
    items: [
        doc1Ignore,
        lab1Ignore,
        doc2Diff,
        lab2Diff,
        doc3Undo,
        lab3Undo,
        doc4Amend,
        lab4Amend,
        quiz1Ops,
        quiz2Tactical
    ]
};
