import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Foundations = {
    id: 'git-0-quiz-1-foundations',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Git Foundations',
    duration: '8 min',
    questions: [
        {
            id: 'q1',
            question: 'What problem does version control solve?',
            options: [
                'Making code run faster',
                'Tracking changes over time and enabling collaboration',
                'Compiling code automatically',
                'Making websites look better'
            ],
            correctIndex: 1,
            explanation: 'Version control tracks all changes to files over time, allowing you to go back to any version and collaborate with others without conflicts.'
        },
        {
            id: 'q2',
            question: 'Why is Git called a "distributed" version control system?',
            options: [
                'It distributes files to multiple servers',
                'Every developer has a complete copy of the entire history',
                'It automatically shares code with the team',
                'It splits large files into smaller pieces'
            ],
            correctIndex: 1,
            explanation: 'In Git, every clone is a full backup of the repository including all history. There is no single point of failure.'
        },
        {
            id: 'q3',
            question: 'What are the three "zones" in Git?',
            options: [
                'Local, Remote, Cloud',
                'Past, Present, Future',
                'Working Directory, Staging Area, Repository',
                'Create, Edit, Delete'
            ],
            correctIndex: 2,
            explanation: 'Files move from Working Directory (your actual files) → Staging Area (ready to commit) → Repository (permanent history).'
        },
        {
            id: 'q4',
            question: 'What does "git init" do?',
            options: [
                'Initializes your computer for coding',
                'Creates a hidden .git folder that stores version history',
                'Connects to the internet',
                'Installs Git on your computer'
            ],
            correctIndex: 1,
            explanation: 'git init creates the .git directory which contains the database for tracking all changes. Without it, a folder is not a repository.'
        },
        {
            id: 'q5',
            question: 'What is the purpose of the Staging Area?',
            options: [
                'To run tests before deploying',
                'To select which changes to include in the next commit',
                'To upload files to the server',
                'To preview the website'
            ],
            correctIndex: 1,
            explanation: 'The Staging Area (Index) lets you curate your commit by choosing exactly which changes to save together.'
        },
        {
            id: 'q6',
            question: 'Which command moves files from Working Directory to Staging Area?',
            options: [
                'git commit',
                'git stage',
                'git add',
                'git move'
            ],
            correctIndex: 2,
            explanation: 'git add stages changes. You must add files before committing them. git add . stages all changes in the current directory.'
        },
        {
            id: 'q7',
            question: 'What makes Git different from Google Drive/Dropbox?',
            options: [
                'Git is faster',
                'Git shows line-by-line differences and supports branching',
                'Git costs more money',
                'Git only works offline'
            ],
            correctIndex: 1,
            explanation: 'Git provides detailed diffs (what changed line by line), branching (parallel work), and structured commits. Dropbox just syncs files.'
        },
        {
            id: 'q8',
            question: 'What does git status show you?',
            options: [
                'Your internet connection status',
                'Which files are untracked, staged, or modified',
                'How much disk space is used',
                'The current date and time'
            ],
            correctIndex: 1,
            explanation: 'git status is your navigation tool. It shows exactly which zone each file is in (working, staged, or committed).'
        }
    ]
};
