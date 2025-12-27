import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Init = {
    id: 'git-1-lab-init',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Genesis (git init) 🧬',
    duration: '25 min',
    content: `
# Lab: Genesis 🧬

## The Scenario
You have just joined a new startup called "Nexus AI". 
The previous developer left a folder of code on the server, but it's **not version controlled**.
If the server crashes tonight, the company is dead.

## Your Mission
1.  **Initialize**: Turn this unstructured folder into a Git Repository.
2.  **Verify**: Confirm that the \`.git\` folder has been created.
3.  **Status**: Check the status of the project to see all the "Untracked" files.

## The Command
\`\`\`bash
git init
\`\`\`
This simple command creates a hidden directory named \`.git\`. This directory contains the **database**.
Until you run this, your folder is just a folder. After you run this, it is a **Repository**.
    `,
    tasks: [
        {
            id: 1,
            description: 'Initialize the repository using "git init"',
            completed: false,
            regex: /\s*git\s+init\s*/,
            hint: {
                concept: 'Repository Initialization',
                strategy: 'git init creates a hidden .git folder that stores all version history.',
                solution: 'git init'
            }
        },
        {
            id: 2,
            description: 'List all files including hidden ones with "ls -la"',
            completed: false,
            regex: /\s*ls\s+(-la|-a|-al)\s*/,
            hint: {
                concept: 'Viewing Hidden Files',
                strategy: 'The .git directory is hidden. Use ls -la to see files starting with a dot.',
                solution: 'ls -la'
            }
        },
        {
            id: 3,
            description: 'Check the repository status with "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Repository Status',
                strategy: 'git status shows untracked files in red. These are not yet being tracked by Git.',
                solution: 'git status'
            }
        },
        {
            id: 4,
            description: 'Stage all files with "git add ."',
            completed: false,
            regex: /\s*git\s+add\s+(\.|--all|-A)\s*/,
            hint: {
                concept: 'Staging Files',
                strategy: 'git add . stages all files in the current directory and subdirectories.',
                solution: 'git add .'
            }
        },
        {
            id: 5,
            description: 'Check status again to see staged files (green)',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Staged File Status',
                strategy: 'After git add, files appear in green under "Changes to be committed".',
                solution: 'git status'
            }
        },
        {
            id: 6,
            description: 'Make your first commit: git commit -m "Initial commit"',
            completed: false,
            regex: /\s*git\s+commit\s+-m\s*["'].*["']\s*/,
            hint: {
                concept: 'Creating a Commit',
                strategy: 'git commit -m saves a snapshot with a message describing the changes.',
                solution: 'git commit -m "Initial commit"'
            }
        },
        {
            id: 7,
            description: 'View your commit history with "git log"',
            completed: false,
            regex: /\s*git\s+log\s*/,
            hint: {
                concept: 'Viewing History',
                strategy: 'git log shows all commits with their hash, author, date, and message.',
                solution: 'git log'
            }
        },
        {
            id: 8,
            description: 'View compact history with "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Compact Log View',
                strategy: 'git log --oneline shows each commit on a single line for quick overview.',
                solution: 'git log --oneline'
            }
        }
    ],
    files: [
        {
            name: 'package.json',
            language: 'json',
            content: `{
  "name": "nexus-ai-core",
  "version": "1.0.0",
  "description": "Neural Network Engine",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "jest"
  },
  "dependencies": {
    "tensor-math": "^2.1.0",
    "express": "^4.17.1"
  }
}`
        },
        {
            name: 'src/index.js',
            language: 'javascript',
            content: `import { NeuralNet } from './engine/net.js';
import { DataSource } from './data/loader.js';

const system = new NeuralNet({ layers: 5 });

console.log("Nexus AI Core Online...");
system.initialize();`
        },
        {
            name: 'src/engine/net.js',
            language: 'javascript',
            content: `export class NeuralNet {
    constructor(config) {
        this.layers = config.layers;
        this.weights = [];
    }
    
    initialize() {
        console.log("Initializing weights...");
        // TODO: Implement backpropagation
    }
}`
        },
        {
            name: 'src/data/loader.js',
            language: 'javascript',
            content: `export class DataSource {
    connect() {
        return "Connected to DB";
    }
}`
        },
        {
            name: 'config/database.json',
            language: 'json',
            content: `{
    "host": "localhost",
    "port": 5432,
    "user": "admin",
    "password": "super_secret_password_do_not_commit"
}`
        },
        {
            name: '.gitignore',
            language: 'text',
            content: `node_modules/
.env
dist/
coverage/
`
        },
        {
            name: 'README.md',
            language: 'markdown',
            content: `# Nexus AI Core
The next generation of AI processing.

## Setup
1. npm install
2. npm start
`
        }
    ]
};
