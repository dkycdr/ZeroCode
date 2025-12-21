// COMPREHENSIVE LESSON CONTENT for courses not in sampleLesson.js
// This file contains DEEP, DETAILED content for: Git, Python, TypeScript, MongoDB, Next.js, CI/CD

export const comprehensiveLessons = {
    'git': {
        title: 'Git & GitHub: Professional Version Control',
        content: `
# Git & GitHub: The Foundation of Modern Development

In professional software development, **every** project uses Git. This isn't a "nice to have"—it's mandatory industry standard.

---

## Chapter 1: Why Git Exists (The Disaster Scenario)

### The Problem: Collaborative Chaos
You're building your Final Year Project with 3 teammates:

**Week 1**: You write a perfect authentication system (500 lines of code)
**Week 2**: Your teammate "improves" it → Everything breaks
**Week 3**: You can't remember what changed
**Week 4**: Panic. All-nighter. Tears.

### The Solution: Time Machine for Code
\`\`\`bash
git log                    # See EVERY change ever made
git diff HEAD~5            # Compare current vs 5 commits ago
git checkout abc123        # Time travel to working version
git blame auth.js          # Find who broke it (with evidence!)
\`\`\`

---

## Chapter 2: Core Concepts (Mental Models)

### 1. Repository = Time Machine
A Git repository is your project folder + complete history.

\`\`\`
my-project/
├── .git/           ← The time machine (hidden folder)
├── index.html
├── style.css
└── script.js
\`\`\`

### 2. Commit = Snapshot
Each commit is a **photograph** of your entire project at one moment.

\`\`\`bash
git commit -m "Add user login feature"
\`\`\`

Every commit has:
- **SHA hash**: Unique ID (\`a3f2b91\`)
- **Author**: Who made it
- **Timestamp**: When
- **Message**: What & why

### 3. Branch = Parallel Universe
\`\`\`
main:           A---B---C---D  (production code)
                     \\
feature-login:        E---F    (your experiment)
\`\`\`

- \`main\`: Production code (NEVER breaks!)
- \`feature-login\`: Your experimental feature
- \`bugfix-payment\`: Emergency fix

### 4. Remote (GitHub) = Cloud Backup
When your laptop dies, your code lives on GitHub.

---

## Chapter 3: The Professional Workflow

This is how Google, Microsoft, and professional teams work:

### Step 1: Clone
\`\`\`bash
git clone https://github.com/zerocode/project.git
cd project
\`\`\`

### Step 2: Create Feature Branch
**NEVER code directly on \`main\`!**

\`\`\`bash
git checkout -b feature-dashboard
\`\`\`

### Step 3: Code & Commit
\`\`\`bash
# Make changes...
git add .
git commit -m "Add student dashboard component"
\`\`\`

### Step 4: Push to GitHub
\`\`\`bash
git push origin feature-dashboard
\`\`\`

### Step 5: Pull Request (PR)
1. Go to GitHub
2. Click "New Pull Request"
3. Write: "This adds a dashboard for students to view GPA"
4. Request review from teammates
5. Fix issues they find
6. Merge when approved ✅

---

## Chapter 4: Essential Commands

### Setup (Do Once)
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
\`\`\`

### Daily Workflow
\`\`\`bash
git status              # What changed?
git add filename.js     # Stage specific file
git add .               # Stage everything
git commit -m "msg"     # Save snapshot
git push origin main    # Upload to GitHub
git pull origin main    # Download latest
\`\`\`

### Branching
\`\`\`bash
git branch                  # List branches
git checkout -b new-feat    # Create + switch
git merge feature-name      # Merge into current
git branch -d old-branch    # Delete branch
\`\`\`

### Time Travel
\`\`\`bash
git log --oneline           # View history
git diff                    # See changes
git checkout abc123         # Go to commit
git reset HEAD~1            # Undo last commit
git revert abc123           # Undo specific commit (safe!)
\`\`\`

---

## Chapter 5: Real Scenarios

### Scenario 1: "I committed my database password!"
\`\`\`bash
git reset --soft HEAD~1     # Undo commit (keep changes)
# Remove password from .env
git add .
git commit -m "Add config (secure)"
\`\`\`

### Scenario 2: "Teammate pushed broken code!"
\`\`\`bash
git pull origin main
git log --oneline           # Find bad commit
git revert abc123           # Undo it
git push origin main        # Fixed!
\`\`\`

### Scenario 3: "Working on 2 features simultaneously"
\`\`\`bash
git checkout -b feature-login
# Work...
git commit -m "Add login"

git checkout -b feature-dashboard
# Work...
git commit -m "Add dashboard"

# Switch anytime!
git checkout feature-login
\`\`\`

---

## Chapter 6: GitHub Collaboration

### Pull Request Best Practices
1. **Small PRs**: 50-200 lines (easier to review)
2. **Clear title**: "Add GPA calculator" not "Fix stuff"
3. **Screenshots**: Show UI changes
4. **Tests**: Prove it works
5. **Link issues**: "Fixes #42"

### Code Review Etiquette
**As Author:**
- Don't take feedback personally
- Explain your decisions
- Fix issues quickly

**As Reviewer:**
- Be kind but honest
- Suggest, don't demand
- Approve when "good enough" (not perfect)

---

## Mission: Professional Git Workflow

Practice the exact workflow used by professional development teams.
        `,
        tasks: [
            { id: 1, description: 'Type "git init" in the terminal', completed: false, regex: /git\s+init/ },
            { id: 2, description: 'Create README.md with "echo \'# My Project\' > README.md"', completed: false, regex: /echo.*README\.md/ },
            { id: 3, description: 'Stage with "git add README.md"', completed: false, regex: /git\s+add\s+README\.md/ },
            { id: 4, description: 'Commit with "git commit -m \'Initial commit\'"', completed: false, regex: /git\s+commit\s+-m\s+['"]Initial\s+commit['"]/ }
        ],
        files: [
            {
                name: 'index.html',
                language: 'html',
                content: `<!DOCTYPE html>
<html>
<head>
    <title>Git Terminal Simulator</title>
    <style>
        body { margin: 0; background: #0a192f; font-family: 'Courier New', monospace; color: #00ff00; padding: 20px; }
        #terminal { background: #000; border: 2px solid #00ff00; border-radius: 8px; padding: 20px; min-height: 400px; max-height: 600px; overflow-y: auto; }
        .prompt { color: #00ff00; margin-top: 10px; }
        .output { color: #fff; margin: 5px 0; }
        .error { color: #ff4444; }
        .success { color: #44ff44; }
        input { background: transparent; border: none; color: #00ff00; font-family: inherit; font-size: 14px; outline: none; width: 80%; }
    </style>
</head>
<body>
    <h2>🖥️ Git Terminal Simulator - ZeroCode</h2>
    <p style="color: #fff;">Type Git commands: git init, git status, git add, git commit</p>
    <div id="terminal">
        <div class="output">ZeroCode Git Lab v1.0</div>
        <div class="output">Type 'help' for commands</div>
    </div>
    <script>
        const terminal = document.getElementById('terminal');
        let gitInit = false, staged = [], commits = [], branch = 'main';

        function addPrompt() {
            const div = document.createElement('div');
            div.className = 'prompt';
            div.innerHTML = \`user@zerocode:\${branch}$ <input type="text" id="cmd" autofocus />\`;
            terminal.appendChild(div);
            const input = document.getElementById('cmd');
            input.focus();
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') { exec(input.value.trim()); input.disabled = true; }
            });
            terminal.scrollTop = terminal.scrollHeight;
        }

        function out(txt, cls = 'output') {
            const div = document.createElement('div');
            div.className = cls;
            div.textContent = txt;
            terminal.appendChild(div);
        }

        function exec(cmd) {
            if (!cmd) { addPrompt(); return; }
            if (cmd === 'help') {
                out('Commands: git init, git status, git add <file>, git commit -m "msg", echo "text" > file, clear', 'success');
            } else if (cmd === 'git init') {
                gitInit = true;
                out('Initialized empty Git repository in .git/', 'success');
            } else if (cmd === 'git status') {
                if (!gitInit) { out('fatal: not a git repository', 'error'); }
                else {
                    out(\`On branch \${branch}\`, 'output');
                    if (staged.length === 0) out('nothing to commit', 'output');
                    else { out('Changes to be committed:', 'success'); staged.forEach(f => out(\`  new file: \${f}\`, 'success')); }
                }
            } else if (cmd.includes('echo') && cmd.includes('>')) {
                const match = cmd.match(/>\s*([^\s]+)/);
                if (match) out(\`Created \${match[1]}\`, 'success');
            } else if (cmd.startsWith('git add')) {
                if (!gitInit) out('fatal: not a git repository', 'error');
                else {
                    const file = cmd.replace('git add', '').trim();
                    if (file && !staged.includes(file)) { staged.push(file); out(\`Staged \${file}\`, 'success'); }
                }
            } else if (cmd.startsWith('git commit')) {
                if (!gitInit) out('fatal: not a git repository', 'error');
                else if (staged.length === 0) out('nothing to commit', 'error');
                else {
                    const match = cmd.match(/-m\s+['"]([^'"]+)['"]/);
                    const msg = match ? match[1] : 'No message';
                    commits.push({ msg, files: [...staged] });
                    out(\`[\${branch} \${commits.length}abc\${Math.floor(Math.random()*1000)}] \${msg}\`, 'success');
                    out(\`\${staged.length} file(s) changed\`, 'output');
                    staged = [];
                }
            } else if (cmd === 'clear') {
                terminal.innerHTML = '';
            } else {
                out(\`bash: \${cmd}: command not found\`, 'error');
            }
            addPrompt();
        }
        addPrompt();
    </script>
</body>
</html>`
            },
            { name: 'style.css', language: 'css', content: '/* Inline in HTML */' },
            { name: 'script.js', language: 'javascript', content: '// Inline in HTML' }
        ]
    }
};
