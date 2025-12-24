import { docPR } from './01-doc-pr.js';
import { labPR } from './02-lab-pr.js';
import { docReview } from './03-doc-review.js';
import { labReview } from './04-lab-review.js';
import { docForking } from './05-doc-forking.js';
import { labSync } from './06-lab-sync.js';
import { docWorkflows } from './07-doc-workflows.js';
import { labFlow } from './08-lab-flow.js';
import { quizCollab } from './09-quiz-collab.js';
import { quizStrategies } from './10-quiz-strategies.js';

export const unit06Team = {
    id: 'git-06-team',
    title: 'Unit 6: Team Collaboration 🤝',
    description: 'Master the art of Pull Requests, Code Reviews, and Forking Workflows.',
    items: [
        docPR,
        labPR,
        docReview,
        labReview,
        docForking,
        labSync,
        docWorkflows,
        labFlow,
        quizCollab,
        quizStrategies
    ]
};
