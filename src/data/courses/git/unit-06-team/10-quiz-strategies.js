import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizStrategies = {
    id: 'git-6-quiz-strategies',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Workflow Mastery 🏰',
    questions: [
        {
            question: "In Gitflow, what is the role of the 'develop' branch?",
            options: [
                "It holds the production-ready code",
                "It is a temporary branch for one feature",
                "It serves as the main integration branch for features",
                "It is deprecated in modern Git"
            ],
            correctIndex: 2,
            explanation: "In Gitflow, 'develop' is the long-running branch where all features are merged before being prepared for release."
        },
        {
            question: "What characterizes Trunk-Based Development?",
            options: [
                "Long-lived feature branches",
                "Merging small updates frequently to the main branch",
                "No automated tests",
                "Only one person commits at a time"
            ],
            correctIndex: 1,
            explanation: "Trunk-Based Development emphasizes frequent merges to a shared 'trunk' (main) to avoid merge hell."
        },
        {
            question: "When should you use a Feature Flag?",
            options: [
                "When you want to delete code",
                "When you want to merge unfinished code without breaking production",
                "When you forget to commit",
                "To flag a commit as dangerous"
            ],
            correctIndex: 1,
            explanation: "Feature flags allow you to merge code safely by keeping it disabled in production until it is fully ready."
        },
        {
            question: "What is the main downside of Gitflow?",
            options: [
                "It's too simple",
                "It doesn't support tags",
                "It can lead to complex history and 'merge hell'",
                "It only works with SVN"
            ],
            correctIndex: 2,
            explanation: "Gitflow's multiple long-running branches can lead to difficult merges and a cluttered history if not managed carefully."
        },
        {
            question: "In the Triangle of Collaboration, what connects Origin and Upstream?",
            options: [
                "A direct cable",
                "The Pull Request",
                "The 'git send-email' command",
                "Nothing, they are unrelated"
            ],
            correctIndex: 1,
            explanation: "The Pull Request is the mechanism to request merging changes from your fork (Origin) back to the main repo (Upstream)."
        }
    ]
};
