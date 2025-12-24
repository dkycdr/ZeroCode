import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizCollab = {
    id: 'git-6-quiz-collab',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Collaboration Protocol 🤝',
    questions: [
        {
            question: "Why should you fill out a Pull Request description?",
            options: [
                "It is required by the Git software itself",
                "To give context to reviewers and documented history",
                "It makes the compilation faster",
                "GitHub rejects empty PRs automatically"
            ],
            correctIndex: 1,
            explanation: "A PR description provides critical context (the 'Why' and 'how') that code alone cannot convey, saving reviewers time."
        },
        {
            question: "What does 'LGTM' commonly mean in code reviews?",
            options: [
                "Let's Go To Meeting",
                "Looks Good To Me",
                "Log Git Time Manually",
                "Large Git Text Merge"
            ],
            correctIndex: 1,
            explanation: "LGTM stands for 'Looks Good To Me', indicating the reviewer validates the changes."
        },
        {
            question: "If your fork is behind the original repository, what should you do?",
            options: [
                "Delete your fork and re-fork",
                "Git force push to upstream",
                "Fetch upstream and merge/rebase into your local branch",
                "Manually copy paste files"
            ],
            correctIndex: 2,
            explanation: "The standard workflow is to add the 'upstream' remote, fetch from it, and merge changes into your local branch."
        },
        {
            question: "What is a 'Blocker' comment in a review?",
            options: [
                "A suggestion to rename a variable",
                "A critical issue that must be fixed before merging",
                "A compliment on the code",
                "A question about the future roadmap"
            ],
            correctIndex: 1,
            explanation: "Blockers are critical flaws (bugs, security risks, arch violations) that prevent the PR from being accepted."
        },
        {
            question: "In the Forking workflow, where do you push your commits first?",
            options: [
                "Directly to Upstream",
                "To the production server",
                "To your Origin (fork)",
                "To the Lead Developer's email"
            ],
            correctIndex: 2,
            explanation: "You push to your personal fork (Origin), and then open a PR to the Upstream repo."
        }
    ]
};
