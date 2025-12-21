import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Collaboration = {
  id: 'git-unit-6',
  title: 'Collaboration & Pull Requests',
  description: 'Master team collaboration: forking, pull requests, code review, and collaborative workflows',
  items: [
    {
      id: 'git-6-1',
      type: CONTENT_TYPES.INFORMATIONAL,
      title: 'Understanding Collaboration Workflows',
      duration: '25 min read',
      content: `
# Understanding Collaboration Workflows

## What is Collaboration in Git?

**Collaboration** is working with other developers on the same codebase. Git and GitHub provide powerful tools to make this smooth and organized.

### Real-World Analogy: Writing a Book Together

Imagine you and your friends are writing a book together:

**Without Git (The Old Way):**
- Email chapters back and forth
- "final_version_v3_FINAL_REALLY.docx"
- Conflicts when two people edit the same chapter
- Hard to track who changed what
- Messy and error-prone!

**With Git (The Modern Way):**
- Everyone has their own copy (fork/clone)
- Work on separate chapters (branches)
- Propose changes (pull requests)
- Review each other's work (code review)
- Merge when approved
- Clean and organized!

## Why Collaboration Workflows Matter

### Problem: Direct Push to Main

**Bad workflow:**
\`\`\`
Developer 1: git push origin main  (breaks production!)
Developer 2: git push origin main  (conflicts!)
Developer 3: git push origin main  (no review!)
\`\`\`

**Problems:**
- No code review
- Bugs go straight to production
- Conflicts are common
- Hard to track changes
- No quality control

### Solution: Pull Request Workflow

**Good workflow:**
\`\`\`
Developer 1: Creates branch → Makes changes → Opens PR → Gets reviewed → Merges
Developer 2: Creates branch → Makes changes → Opens PR → Gets reviewed → Merges
Developer 3: Creates branch → Makes changes → Opens PR → Gets reviewed → Merges
\`\`\`

**Benefits:**
- ✅ Code review before merge
- ✅ Catch bugs early
- ✅ Knowledge sharing
- ✅ Better code quality
- ✅ Clear history

## Understanding Forking

### What is a Fork?

A **fork** is your personal copy of someone else's repository on GitHub.

**Analogy:** Like photocopying a book so you can write notes in it without affecting the original.

### Fork vs Clone

**Fork:**
- Creates a copy on YOUR GitHub account
- You own this copy
- Can make any changes you want
- Original repo is unaffected
- Used for contributing to others' projects

**Clone:**
- Downloads repo to your computer
- Just a local copy
- Used for working on repos you have access to

### When to Fork

**✅ Fork when:**
- Contributing to open source projects
- You don't have write access to the repo
- You want to experiment without affecting original
- You want your own version of a project

**❌ Don't fork when:**
- You're on the same team (use branches instead)
- You have write access to the repo
- It's your own project

### How Forking Works

**Step 1: Original Repository**
\`\`\`
Original Repo (on GitHub)
Owner: facebook/react
URL: github.com/facebook/react
\`\`\`

**Step 2: You Fork It**
\`\`\`
Your Fork (on YOUR GitHub)
Owner: yourname/react
URL: github.com/yourname/react
\`\`\`

**Step 3: You Clone Your Fork**
\`\`\`
Your Local Copy (on your computer)
Location: /Users/you/projects/react
\`\`\`

**Step 4: You Make Changes**
\`\`\`
Edit files locally
Commit changes
Push to YOUR fork
\`\`\`

**Step 5: You Create Pull Request**
\`\`\`
Request to merge YOUR changes
Into ORIGINAL repository
\`\`\`

## Understanding Pull Requests

### What is a Pull Request (PR)?

A **Pull Request** is a request to merge your changes into another repository (or branch).

**Think of it as:**
- "Hey, I made some improvements. Want to include them?"
- A proposal for changes
- A discussion about code
- A review process

### Why Pull Requests?

**Without Pull Requests:**
\`\`\`
Developer: git push origin main
(Code goes straight to production, no review!)
\`\`\`

**With Pull Requests:**
\`\`\`
Developer: Creates PR
Team: Reviews code
Team: Suggests improvements
Developer: Makes changes
Team: Approves
Code: Merges to main
\`\`\`

**Benefits:**
- ✅ Code review
- ✅ Catch bugs before production
- ✅ Knowledge sharing
- ✅ Discussion and collaboration
- ✅ Better code quality
- ✅ Documentation of changes

### Anatomy of a Pull Request

**1. Title**
\`\`\`
Add user authentication feature
\`\`\`
- Clear and descriptive
- Summarizes the change

**2. Description**
\`\`\`
## What
Adds login and registration functionality

## Why
Users need to create accounts to save their data

## How
- Created login form component
- Added authentication API endpoints
- Implemented JWT tokens
- Added password hashing

## Testing
- Tested login flow
- Tested registration flow
- Added unit tests
\`\`\`

**3. Changes**
\`\`\`
Files changed: 12
Additions: +450 lines
Deletions: -20 lines
\`\`\`

**4. Commits**
\`\`\`
- Add login form component
- Add registration form
- Implement authentication API
- Add JWT token handling
- Add password hashing
- Add unit tests
\`\`\`

**5. Reviewers**
\`\`\`
Requested: @john, @sarah
Approved: @john
Changes requested: @sarah
\`\`\`

**6. Comments**
\`\`\`
@sarah: "Can you add error handling for invalid passwords?"
@you: "Good catch! Added in commit abc123"
@john: "Looks good to me! ✅"
\`\`\`

## Pull Request Workflow

### Step-by-Step Process

**Step 1: Create a Branch**
\`\`\`bash
git checkout -b feature/user-auth
\`\`\`

**Why:** Keep your changes separate from main.

**Step 2: Make Changes**
\`\`\`bash
# Edit files
git add .
git commit -m "Add login form"
git commit -m "Add registration form"
git commit -m "Implement authentication"
\`\`\`

**Why:** Make logical, focused commits.

**Step 3: Push to GitHub**
\`\`\`bash
git push origin feature/user-auth
\`\`\`

**Why:** Upload your branch to GitHub.

**Step 4: Open Pull Request**

On GitHub:
1. Click "Pull requests"
2. Click "New pull request"
3. Select your branch
4. Fill in title and description
5. Request reviewers
6. Click "Create pull request"

**Step 5: Code Review**

Reviewers will:
- Read your code
- Test your changes
- Leave comments
- Request changes or approve

**Step 6: Address Feedback**

If changes requested:
\`\`\`bash
# Make changes locally
git add .
git commit -m "Address review feedback"
git push origin feature/user-auth
\`\`\`

PR automatically updates!

**Step 7: Merge**

Once approved:
1. Click "Merge pull request"
2. Confirm merge
3. Delete branch (optional but recommended)

**Step 8: Pull Latest Changes**
\`\`\`bash
git checkout main
git pull origin main
\`\`\`

Now your local main is up-to-date!

## Code Review Best Practices

### For Authors (Creating PRs)

**✅ DO:**

1. **Keep PRs small and focused**
\`\`\`
Good: "Add login form" (200 lines)
Bad: "Add entire authentication system + redesign UI + fix bugs" (2000 lines)
\`\`\`

2. **Write clear descriptions**
\`\`\`
Good:
## What
Adds user login functionality

## Why
Users need to authenticate to access their data

## How
- Created LoginForm component
- Added /api/login endpoint
- Implemented JWT tokens

## Testing
- Tested with valid credentials
- Tested with invalid credentials
- Added unit tests
\`\`\`

3. **Make logical commits**
\`\`\`
Good:
- "Add LoginForm component"
- "Add login API endpoint"
- "Add JWT token handling"

Bad:
- "WIP"
- "Fix stuff"
- "More changes"
\`\`\`

4. **Test before creating PR**
- Run all tests
- Test manually
- Check for console errors
- Verify functionality

5. **Respond to feedback promptly**
- Address comments quickly
- Ask questions if unclear
- Be open to suggestions
- Thank reviewers

**❌ DON'T:**

1. **Don't create huge PRs**
- Hard to review
- More likely to have bugs
- Takes longer to merge

2. **Don't push untested code**
- Wastes reviewers' time
- Looks unprofessional
- Delays merge

3. **Don't take feedback personally**
- Code review is about code, not you
- Everyone's code gets reviewed
- It's a learning opportunity

### For Reviewers

**✅ DO:**

1. **Be constructive**
\`\`\`
Good: "Consider using async/await here for better readability"
Bad: "This code is terrible"
\`\`\`

2. **Explain your suggestions**
\`\`\`
Good: "This could cause a memory leak because the event listener isn't cleaned up. Consider adding a cleanup function in useEffect."
Bad: "Memory leak"
\`\`\`

3. **Praise good code**
\`\`\`
"Nice error handling! 👍"
"Great test coverage!"
"This is much cleaner than the old code"
\`\`\`

4. **Ask questions**
\`\`\`
"Why did you choose this approach?"
"Have you considered using X instead?"
"What happens if the user does Y?"
\`\`\`

5. **Test the changes**
- Pull the branch locally
- Run the code
- Test edge cases
- Verify functionality

**❌ DON'T:**

1. **Don't be rude**
\`\`\`
Bad: "This is stupid"
Bad: "Did you even test this?"
Bad: "What were you thinking?"
\`\`\`

2. **Don't nitpick**
- Focus on important issues
- Don't argue about spaces vs tabs
- Use linters for style issues

3. **Don't approve without reviewing**
- Actually read the code
- Test the changes
- Understand what it does

## Common Collaboration Patterns

### Pattern 1: Feature Branch Workflow

**Used by:** Small teams, simple projects

**How it works:**
\`\`\`
main branch (protected)
  ↓
feature/login (developer 1)
feature/signup (developer 2)
feature/profile (developer 3)
  ↓
Pull requests → Review → Merge to main
\`\`\`

**Benefits:**
- Simple and straightforward
- Easy to understand
- Works well for small teams

### Pattern 2: Forking Workflow

**Used by:** Open source projects, large teams

**How it works:**
\`\`\`
Original repo (organization/project)
  ↓
Fork (yourname/project)
  ↓
Clone to local
  ↓
Create branch
  ↓
Make changes
  ↓
Push to your fork
  ↓
Create PR to original repo
\`\`\`

**Benefits:**
- Contributors don't need write access
- Original repo stays clean
- Easy to manage permissions

### Pattern 3: Gitflow Workflow

**Used by:** Large projects, release-based development

**Branches:**
- \`main\`: Production code
- \`develop\`: Integration branch
- \`feature/*\`: New features
- \`release/*\`: Release preparation
- \`hotfix/*\`: Urgent production fixes

**How it works:**
\`\`\`
feature/login → develop → release/v1.0 → main
                    ↑
feature/signup -----┘
\`\`\`

**Benefits:**
- Clear structure
- Supports releases
- Separates development from production

## Handling Merge Conflicts in PRs

### What Causes Conflicts in PRs?

**Scenario:**
\`\`\`
main:           A --- B --- C --- D
                       \\
your-branch:            E --- F
\`\`\`

If commit D changed the same lines as commits E or F, you'll have a conflict when trying to merge.

### How to Resolve

**Step 1: Update your branch with latest main**
\`\`\`bash
git checkout your-branch
git fetch origin
git merge origin/main
\`\`\`

**Step 2: Resolve conflicts**
\`\`\`bash
# Git will mark conflicts in files
# Open files and resolve
# Remove conflict markers
\`\`\`

**Step 3: Commit and push**
\`\`\`bash
git add .
git commit -m "Resolve merge conflicts with main"
git push origin your-branch
\`\`\`

PR automatically updates with resolved conflicts!

## Key Takeaways

- ✅ Fork = Your copy of someone's repo
- ✅ Pull Request = Proposal to merge changes
- ✅ Code review improves quality
- ✅ Keep PRs small and focused
- ✅ Write clear descriptions
- ✅ Be constructive in reviews
- ✅ Test before creating PR
- ✅ Respond to feedback promptly
- ✅ Use branches for features
- ✅ Protect main branch

## What's Next?

In the next lesson, you'll practice creating pull requests, reviewing code, and collaborating with others on GitHub.

Now you understand collaboration! 🤝
            `
    },
    {
      id: 'git-6-lab-pr-prep',
      type: CONTENT_TYPES.LESSON,
      title: 'Lab: Preparing a Pull Request',
      duration: '20 min',
      content: `
# Mission: The PR Workflow

Before you can open a Pull Request on GitHub, you need to prepare your code locally.

## The "Perfect PR" Workflow
1.  **Checkout main** and pull latest changes (always start fresh!).
2.  **Create a feature branch** (never work on main!).
3.  **Commit your changes**.
4.  **Push your branch** to the remote.

## Objectives
1.  Create a branch named \`feature/login\`.
2.  Create a file named \`login.js\`.
3.  Commit it.
4.  Push the branch to origin.

## Commands
\`\`\`bash
git checkout -b feature/login
touch login.js
git add .
git commit -m "Add login feature"
git push -u origin feature/login
\`\`\`
            `,
      tasks: [
        {
          id: 'task1',
          text: 'Create branch "feature/login"',
          regex: '"branches":\\[.*"feature/login".*\\]'
        },
        {
          id: 'task2',
          text: 'Create login.js and commit it',
          // Check if last commit message contains "login" or file is in files
          regex: '"files":\\[.*"login.js".*\\]'
        },
        {
          id: 'task3',
          text: 'Push to origin (git push ...)',
          regex: 'git push'
        }
      ]
    },
    {
      id: 'git-6-quiz',
      type: CONTENT_TYPES.QUIZ,
      title: 'Collaboration Quiz',
      duration: '5 min',
      questions: [
        {
          id: 'q1',
          question: 'What is the difference between forking and cloning?',
          options: [
            'No difference',
            'Fork creates a copy on GitHub, clone downloads to your computer',
            'Fork is faster',
            'Clone is only for private repos'
          ],
          correctIndex: 1,
          explanation: 'Forking creates a copy of the repository on your GitHub account, while cloning downloads a repository to your local computer.'
        },
        {
          id: 'q2',
          question: 'What is a Pull Request?',
          options: [
            'A request to download code',
            'A request to merge your changes into another repository or branch',
            'A request to delete a branch',
            'A request to fork a repository'
          ],
          correctIndex: 1,
          explanation: 'A Pull Request is a proposal to merge your changes into another repository or branch. It allows for code review and discussion before merging.'
        },
        {
          id: 'q3',
          question: 'Why are small Pull Requests better than large ones?',
          options: [
            'They merge faster',
            'Easier to review, fewer bugs, faster to merge',
            'They use less disk space',
            'GitHub requires small PRs'
          ],
          correctIndex: 1,
          explanation: 'Small PRs are easier to review thoroughly, have fewer bugs, get feedback faster, and merge more quickly. Large PRs are overwhelming and more likely to have issues.'
        },
        {
          id: 'q4',
          question: 'What should you do before creating a Pull Request?',
          options: [
            'Nothing, just create it',
            'Test your changes, write clear commits, update documentation',
            'Delete all other branches',
            'Merge main into your branch'
          ],
          correctIndex: 1,
          explanation: 'Before creating a PR, you should test your changes thoroughly, ensure commits are clear and logical, and update any relevant documentation.'
        },
        {
          id: 'q5',
          question: 'What is code review?',
          options: [
            'Reviewing your own code',
            'Other developers examining your code for quality, bugs, and improvements',
            'Automatic code checking',
            'Reviewing commit messages'
          ],
          correctIndex: 1,
          explanation: 'Code review is when other developers examine your code to catch bugs, suggest improvements, ensure quality, and share knowledge.'
        }
      ]
    }
  ]
};
