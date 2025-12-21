import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Project = {
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
                        { name: 'index.html', language: 'html', content: `<!--
  YOUR TASK: Build a Portfolio Website
    1. Create a header with your name and navigation
    2. Add a hero section introducing yourself
    3. Create a projects section showcasing your work
    4. Add a contact section with your info
    5. Make at least 5 commits as you build

  TIPS:
    - Commit after each major section
    - Write clear commit messages
    - Push to GitHub when done
    - Enable GitHub Pages in repository settings
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header/Navigation -->


    <!-- Hero Section -->


    <!-- Projects Section -->


    <!-- Contact Section -->


    <!-- Footer -->

</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `/*
  PORTFOLIO STYLES
  Add your custom styles here as you build each section
*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
}

/* Add your styles below */
` },
                        { name: 'README.md', language: 'markdown', content: `# My Portfolio

## Description
<!-- Write a brief description of your portfolio -->


## Technologies Used
- HTML5
- CSS3
- JavaScript

## Features
<!-- List the features of your portfolio -->


## Live Demo
<!-- Update with your GitHub Pages URL -->
[View Live](https://YOUR_USERNAME.github.io/portfolio)

## Author
<!-- Add your name -->
` },
                        { name: 'terminal.txt', language: 'text', content: `GIT WORKFLOW FOR THIS PROJECT:

Step 1: Initialize repository
> git init

Step 2: First commit (after creating structure)
> git add .
> git commit -m "Initial commit: Add project structure"

Step 3: Commit after adding hero section
> git add .
> git commit -m "Add hero section with introduction"

Step 4: Commit after adding projects
> git add .
> git commit -m "Add projects section"

Step 5: Commit after adding contact
> git add .
> git commit -m "Add contact section"

Step 6: Connect to GitHub
> git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

Step 7: Push to GitHub
> git push -u origin main

ENABLE GITHUB PAGES:
1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save and wait for deployment

Your site will be at: https://YOUR_USERNAME.github.io/portfolio
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
};
