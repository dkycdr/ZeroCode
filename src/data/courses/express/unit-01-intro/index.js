
import { expressDoc1 } from './01-doc-intro';
import { expressDoc2 } from './02-doc-routing';
import { expressDoc3 } from './03-doc-middleware';
import { expressDoc4 } from './04-doc-req-res';
import { expressLab1 } from './05-lab-hello-express';
import { expressLab2 } from './06-lab-routes';
import { expressLab3 } from './07-lab-middleware';
import { expressLab4 } from './08-lab-static-files';
import { expressQuiz1 } from './09-quiz-basics';
import { expressQuiz2 } from './10-quiz-advanced';

export const unit1Intro = {
    id: 'express-unit-1',
    title: 'Unit 1: Express.js Fundamentals',
    description: 'Master the core concepts: Routing, Middleware, Request & Response handling',
    items: [
        // Informational (Deep Dives)
        expressDoc1,
        expressDoc2,
        expressDoc3,
        expressDoc4,
        // Lessons (Labs)
        expressLab1,
        expressLab2,
        expressLab3,
        expressLab4,
        // Quizzes
        expressQuiz1,
        expressQuiz2
    ]
};
