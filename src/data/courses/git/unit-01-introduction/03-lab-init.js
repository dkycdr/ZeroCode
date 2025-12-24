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
            description: 'Initialize the repository using "git init".',
            completed: false,
            regex: /\s*git\s+init\s*/,
            hint: 'Type "git init" in the terminal to start tracking this project.'
        },
        {
            id: 2,
            description: 'Check the status of your files using "git status".',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: 'Use "git status" to see which files are currently untracked.'
        },
        {
            id: 3,
            description: 'List all files, including hidden ones, using "ls -la".',
            completed: false,
            regex: /\s*ls\s+(-la|-a|-al)\s*/,
            hint: 'The .git directory is hidden. Use "ls -la" to see it.'
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
