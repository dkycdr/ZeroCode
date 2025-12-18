// Git & GitHub - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const gitCourse = {
    id: 'git',
    title: 'Git & GitHub',
    description: 'Master version control with Git and collaborate using GitHub.',
    
    units: [
        // ============================================
        // UNIT 1: Introduction to Version Control
        // ============================================
        {
            id: 'git-unit-1',
            title: 'Introduction to Version Control',
            description: 'Understand why version control matters',
            items: [
                {
                    id: 'git-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is Version Control?',
                    duration: '5 min read',
                    content: `
# What is Version Control?

**Version control** is a system that tracks changes to files over time. Think of it as "time travel" for your code!

## The Problem Without Version Control

\`\`\`
project/
├── index.html
├── index_backup.html
├── index_final.html
├── index_final_FINAL.html
├── index_final_FINAL_v2.html
└── index_THIS_ONE_USE_THIS.html
\`\`\`

😱 Sound familiar?

## The Solution: Git

Git tracks every change, who made it, and when:

\`\`\`
commit 3a7f2c1
Author: Alice <alice@zerocode.ac.id>
Date: Mon Dec 18 10:30:00 2024

    Add navigation menu

commit 9b4e8d2
Author: Bob <bob@zerocode.ac.id>
Date: Mon Dec 18 09:15:00 2024

    Initial commit
\`\`\`

## Benefits of Version Control

| Benefit | Description |
|---------|-------------|
| **History** | See every change ever made |
| **Collaboration** | Multiple people work together |
| **Backup** | Never lose your work |
| **Experimentation** | Try new features safely |
| **Rollback** | Undo mistakes easily |

## Git vs GitHub

| Git | GitHub |
|-----|--------|
| Version control software | Cloud hosting service |
| Runs on your computer | Runs on the web |
| Tracks changes locally | Stores code remotely |
| Command-line tool | Web interface + features |

> 💡 **Analogy**: Git is like Microsoft Word's "Track Changes", GitHub is like Google Drive for code.

## Who Uses Git?

- **Everyone!** Google, Microsoft, Facebook, Netflix
- Over 100 million developers worldwide
- Industry standard for software development

> "Git is the most widely used version control system in the world today." - Git Documentation
                    `
                },
                {
                    id: 'git-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Installing & Configuring Git',
                    duration: '15 min',
                    content: `
# Installing & Configuring Git

## Installation

### Windows
Download from [git-scm.com](https://git-scm.com) and run the installer.

### Mac
\`\`\`bash
# Using Homebrew
brew install git

# Or download from git-scm.com
\`\`\`

### Linux
\`\`\`bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git
\`\`\`

## Verify Installation

\`\`\`bash
git --version
# Should show: git version 2.x.x
\`\`\`

## Initial Configuration

Set your identity (required for commits):

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@zerocode.ac.id"
\`\`\`

## Check Configuration

\`\`\`bash
git config --list
\`\`\`

## Useful Settings

\`\`\`bash
# Set default branch name to 'main'
git config --global init.defaultBranch main

# Enable colored output
git config --global color.ui auto

# Set default editor
git config --global core.editor "code --wait"  # VS Code
\`\`\`

---

## Your Mission

Configure Git with your information.
                    `,
                    tasks: [
                        { id: 1, description: 'In terminal, type: git --version to check if Git is installed', completed: false, regex: /git\s+--version/ },
                        { id: 2, description: 'In terminal, type: git config --global user.name "Your Name" to set your name', completed: false, regex: /git\s+config\s+--global\s+user\.name/ },
                        { id: 3, description: 'In terminal, type: git config --global user.email "your@email.com" to set your email', completed: false, regex: /git\s+config\s+--global\s+user\.email/ },
                        { id: 4, description: 'In terminal, type: git config --list to view all configuration settings', completed: false, regex: /git\s+config\s+--list/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><title>Git Setup</title></head>
<body>
    <h1>Git Configuration</h1>
    <p>Run the commands in your terminal</p>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: monospace; padding: 40px; background: #1e1e1e; color: #d4d4d4; }` },
                        { name: 'script.js', language: 'javascript', content: `// Git commands to run in terminal:

// 1. Check version
// git --version

// 2. Set your name
// git config --global user.name "Your Name"

// 3. Set your email
// git config --global user.email "your.email@zerocode.ac.id"

// 4. View configuration
// git config --list
` }
                    ]
                },
                {
                    id: 'git-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Version Control Basics Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the difference between Git and GitHub?',
                            options: [
                                'They are the same thing',
                                'Git is the software, GitHub is the hosting service',
                                'GitHub is newer than Git',
                                'Git is for Windows, GitHub is for Mac'
                            ],
                            correctIndex: 1,
                            explanation: 'Git is version control software that runs locally. GitHub is a cloud service that hosts Git repositories.'
                        },
                        {
                            id: 'q2',
                            question: 'Why do we need to configure user.name and user.email?',
                            options: [
                                'To create a GitHub account',
                                'To identify who made each commit',
                                'To download Git',
                                'To enable colors'
                            ],
                            correctIndex: 1,
                            explanation: 'Git records the author of each commit using the configured name and email.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Basic Git Commands
        // ============================================
        {
            id: 'git-unit-2',
            title: 'Basic Git Commands',
            description: 'Learn essential Git commands for daily use',
            items: [
                {
                    id: 'git-2-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'The Git Workflow',
                    duration: '5 min read',
                    content: `
# The Git Workflow

## Three States of Git

\`\`\`
Working Directory  →  Staging Area  →  Repository
   (Modified)         (Staged)         (Committed)
       ↓                  ↓                 ↓
   edit files        git add          git commit
\`\`\`

### 1. Working Directory
Where you edit files. Changes are **not tracked** yet.

### 2. Staging Area (Index)
Files ready to be committed. You choose what to include.

### 3. Repository (.git folder)
Permanent snapshot of your project at a point in time.

## Basic Workflow

\`\`\`bash
# 1. Initialize repository
git init

# 2. Make changes to files
# (edit index.html)

# 3. Check status
git status

# 4. Stage changes
git add index.html

# 5. Commit changes
git commit -m "Add homepage"

# 6. View history
git log
\`\`\`

## The .git Folder

When you run \`git init\`, Git creates a hidden \`.git\` folder:

\`\`\`
project/
├── .git/          ← Git's database (don't touch!)
├── index.html
└── style.css
\`\`\`

> ⚠️ **Never delete the .git folder!** It contains your entire project history.
                    `
                },
                {
                    id: 'git-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Creating Your First Repository',
                    duration: '20 min',
                    content: `
# Creating Your First Repository

## Step 1: Initialize Repository

\`\`\`bash
# Create project folder
mkdir my-project
cd my-project

# Initialize Git
git init
# Output: Initialized empty Git repository in /path/to/my-project/.git/
\`\`\`

## Step 2: Create Files

\`\`\`bash
# Create a file
echo "# My Project" > README.md
\`\`\`

## Step 3: Check Status

\`\`\`bash
git status
\`\`\`

Output:
\`\`\`
On branch main
Untracked files:
  README.md

nothing added to commit but untracked files present
\`\`\`

## Step 4: Stage Files

\`\`\`bash
# Stage specific file
git add README.md

# Or stage all files
git add .
\`\`\`

## Step 5: Commit

\`\`\`bash
git commit -m "Initial commit"
\`\`\`

### Good Commit Messages

✅ **Good**:
- "Add user login feature"
- "Fix navigation bug on mobile"
- "Update README with installation steps"

❌ **Bad**:
- "stuff"
- "changes"
- "asdfasdf"
- "final version"

---

## Your Mission

Create a Git repository for a simple website.
                    `,
                    tasks: [
                        { id: 1, description: 'In terminal (project folder), type: git init to initialize a repository', completed: false, regex: /git\s+init/ },
                        { id: 2, description: 'In terminal, type: git status to see changed files', completed: false, regex: /git\s+status/ },
                        { id: 3, description: 'In terminal, type: git add . to stage all files (or git add filename)', completed: false, regex: /git\s+add/ },
                        { id: 4, description: 'In terminal, type: git commit -m "Initial commit" to save changes', completed: false, regex: /git\s+commit\s+-m\s+["']/ },
                        { id: 5, description: 'In terminal, type: git log to view commit history', completed: false, regex: /git\s+log/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><title>My First Repo</title></head>
<body>
    <h1>Hello Git!</h1>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; }` },
                        { name: 'script.js', language: 'javascript', content: `// Terminal commands to run:

// 1. Initialize repository
// git init

// 2. Check status
// git status

// 3. Stage all files
// git add .

// 4. Commit
// git commit -m "Initial commit"

// 5. View history
// git log
` }
                    ]
                },
                {
                    id: 'git-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Basic Commands Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does "git add" do?',
                            options: [
                                'Saves changes permanently',
                                'Moves files to staging area',
                                'Uploads to GitHub',
                                'Creates a new file'
                            ],
                            correctIndex: 1,
                            explanation: 'git add stages files, preparing them for commit. It does not save them permanently yet.'
                        },
                        {
                            id: 'q2',
                            question: 'What is a commit?',
                            options: [
                                'A temporary save',
                                'A permanent snapshot of your project',
                                'A file upload',
                                'A branch'
                            ],
                            correctIndex: 1,
                            explanation: 'A commit is a permanent snapshot of your project at a specific point in time.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: GitHub & Remote Repositories
        // ============================================
        {
            id: 'git-unit-3',
            title: 'GitHub & Remote Repositories',
            description: 'Collaborate and backup code with GitHub',
            items: [
                {
                    id: 'git-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Introduction to GitHub',
                    duration: '5 min read',
                    content: `
# Introduction to GitHub

## What is GitHub?

GitHub is a cloud platform for hosting Git repositories. Think of it as "Google Drive for code".

## Why Use GitHub?

### 1. **Backup** ☁️
Your code is safe in the cloud, not just on your laptop.

### 2. **Collaboration** 👥
Multiple developers can work on the same project.

### 3. **Portfolio** 💼
Showcase your projects to employers.

### 4. **Open Source** 🌍
Contribute to projects used by millions.

## Key Concepts

### Repository (Repo)
A project folder tracked by Git.

### Remote
A version of your repository hosted online (e.g., on GitHub).

### Clone
Download a repository from GitHub to your computer.

### Push
Upload your local commits to GitHub.

### Pull
Download changes from GitHub to your computer.

## GitHub Features

- **Issues**: Track bugs and feature requests
- **Pull Requests**: Propose changes to code
- **Actions**: Automate workflows (CI/CD)
- **Pages**: Host static websites for free
- **Discussions**: Community forums

> 💡 **Fun Fact**: GitHub hosts over 200 million repositories!
                    `
                },
                {
                    id: 'git-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Pushing to GitHub',
                    duration: '25 min',
                    content: `
# Pushing to GitHub

## Step 1: Create GitHub Account

1. Go to [github.com](https://github.com)
2. Sign up with your ZeroCode email
3. Verify your email

## Step 2: Create Repository on GitHub

1. Click "+" → "New repository"
2. Name: \`my-first-repo\`
3. Description: "Learning Git"
4. Public or Private
5. **Don't** initialize with README
6. Click "Create repository"

## Step 3: Connect Local to Remote

\`\`\`bash
# Add remote
git remote add origin https://github.com/username/my-first-repo.git

# Verify
git remote -v
\`\`\`

## Step 4: Push Code

\`\`\`bash
# Push to GitHub
git push -u origin main

# -u sets upstream (only needed first time)
# origin = remote name
# main = branch name
\`\`\`

## Step 5: View on GitHub

Refresh your GitHub repository page - your code is now online!

## Common Commands

\`\`\`bash
# Push changes
git push

# Pull changes
git pull

# Clone repository
git clone https://github.com/username/repo.git

# View remotes
git remote -v
\`\`\`

## SSH vs HTTPS

### HTTPS (Easier for beginners)
\`\`\`bash
https://github.com/username/repo.git
\`\`\`

### SSH (No password needed)
\`\`\`bash
git@github.com:username/repo.git
\`\`\`

---

## Your Mission

Push your local repository to GitHub.
                    `,
                    tasks: [
                        { id: 1, description: 'In terminal, type: git remote add origin https://github.com/username/repo.git to connect to GitHub', completed: false, regex: /git\s+remote\s+add\s+origin/ },
                        { id: 2, description: 'In terminal, type: git remote -v to verify remote is connected', completed: false, regex: /git\s+remote\s+-v/ },
                        { id: 3, description: 'In terminal, type: git push -u origin main to upload code to GitHub', completed: false, regex: /git\s+push\s+-u\s+origin\s+main/ },
                        { id: 4, description: 'In terminal, type: git clone https://github.com/user/repo.git to download a repo', completed: false, regex: /git\s+clone/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><title>GitHub Push</title></head>
<body>
    <h1>Pushing to GitHub</h1>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; }` },
                        { name: 'script.js', language: 'javascript', content: `// GitHub Commands

// 1. Add remote
// git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

// 2. Verify remote
// git remote -v

// 3. Push to GitHub
// git push -u origin main

// 4. Clone someone else's repo
// git clone https://github.com/username/repo.git
` }
                    ]
                },
                {
                    id: 'git-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'GitHub Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does "git push" do?',
                            options: [
                                'Downloads code from GitHub',
                                'Uploads local commits to GitHub',
                                'Creates a new repository',
                                'Deletes files'
                            ],
                            correctIndex: 1,
                            explanation: 'git push uploads your local commits to the remote repository on GitHub.'
                        },
                        {
                            id: 'q2',
                            question: 'What is "origin"?',
                            options: [
                                'The first commit',
                                'The main branch',
                                'The default name for a remote repository',
                                'A GitHub username'
                            ],
                            correctIndex: 2,
                            explanation: '"origin" is the conventional name for the primary remote repository.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: Final Project
        // ============================================
        {
            id: 'git-unit-4',
            title: 'Final Project',
            description: 'Build and deploy a project with Git & GitHub',
            items: [
                {
                    id: 'git-4-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Portfolio on GitHub',
                    duration: '60 min',
                    difficulty: 'Beginner',
                    description: 'Create a portfolio website and host it on GitHub Pages.',
                    content: `
# 🎯 Project: Portfolio on GitHub Pages

## Overview

Create a personal portfolio website, track it with Git, and deploy it to GitHub Pages.

## Requirements

### Git Workflow
- [ ] Initialize Git repository
- [ ] Make at least 5 meaningful commits
- [ ] Write clear commit messages
- [ ] Push to GitHub

### GitHub
- [ ] Create public repository
- [ ] Add README.md with project description
- [ ] Enable GitHub Pages
- [ ] Share live URL

### Website Content
- [ ] Homepage with your info
- [ ] Projects section
- [ ] Contact information
- [ ] Responsive design

## Steps

### 1. Create Project Locally
\`\`\`bash
mkdir portfolio
cd portfolio
git init
\`\`\`

### 2. Build Website
Create index.html, style.css, etc.

### 3. Commit Regularly
\`\`\`bash
git add .
git commit -m "Add homepage structure"
# ... make changes ...
git commit -m "Add projects section"
\`\`\`

### 4. Push to GitHub
\`\`\`bash
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
\`\`\`

### 5. Enable GitHub Pages
1. Go to repository Settings
2. Pages section
3. Source: main branch
4. Save

Your site will be live at: \`https://username.github.io/portfolio\`

## Grading Criteria

| Criteria | Points |
|----------|--------|
| Git commits (5+) | 25% |
| Commit messages | 15% |
| GitHub repository | 20% |
| GitHub Pages deployment | 20% |
| Website quality | 20% |
                    `,
                    tasks: [
                        { id: 1, description: 'In terminal (portfolio folder), type: git init to start tracking', completed: false, regex: /git\s+init/ },
                        { id: 2, description: 'Create at least 3 commits: git add . && git commit -m "message" (repeat 3x with different changes)', completed: false, regex: /git\s+commit[\s\S]*git\s+commit[\s\S]*git\s+commit/ },
                        { id: 3, description: 'In terminal, type: git remote add origin https://github.com/username/portfolio.git', completed: false, regex: /git\s+remote\s+add/ },
                        { id: 4, description: 'In terminal, type: git push -u origin main to upload to GitHub', completed: false, regex: /git\s+push/ },
                        { id: 5, description: 'Create README.md file in project folder with your portfolio description', completed: false, regex: /README\.md/ }
                    ],
                    starterFiles: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Build your portfolio here -->
    
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `/* Portfolio Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }
` },
                        { name: 'README.md', language: 'markdown', content: `# My Portfolio

## Description
Personal portfolio website showcasing my projects and skills.

## Technologies
- HTML5
- CSS3
- JavaScript

## Live Demo
[View Live](https://username.github.io/portfolio)

## Author
Your Name - ZeroCode
` },
                        { name: 'script.js', language: 'javascript', content: `// Git commands for this project:

// 1. Initialize
// git init

// 2. First commit
// git add .
// git commit -m "Initial commit: Add project structure"

// 3. After adding content
// git add .
// git commit -m "Add homepage content"

// 4. Connect to GitHub
// git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

// 5. Push
// git push -u origin main
` }
                    ]
                },
                {
                    id: 'git-4-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 Git & GitHub Complete!

## What You Mastered

✅ Version control concepts
✅ Git installation and configuration
✅ Basic Git commands (init, add, commit, log)
✅ GitHub account and repositories
✅ Remote operations (push, pull, clone)
✅ GitHub Pages deployment

## Essential Commands

\`\`\`bash
# Local
git init
git add .
git commit -m "message"
git status
git log

# Remote
git remote add origin URL
git push
git pull
git clone URL
\`\`\`

## Best Practices

1. **Commit Often**: Small, focused commits
2. **Clear Messages**: Describe what and why
3. **Pull Before Push**: Avoid conflicts
4. **Use .gitignore**: Don't commit sensitive files
5. **README.md**: Document your projects

## What's Next?

Continue with **Tailwind CSS** or **JavaScript Basics** to build more projects!

> "Git is the most important tool in a developer's toolkit." - Every Developer Ever
                    `
                }
            ]
        }
    ]
};

export default gitCourse;
