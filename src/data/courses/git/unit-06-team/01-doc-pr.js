import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const docPR = {
    id: 'git-6-doc-pr',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Pull Request 🔀',
    content: `
# The Pull Request (PR) 🔀

A **Pull Request** (called a *Merge Request* in GitLab) is the most critical collaboration point in modern software engineering. It is not just a request to merge code; it is a **proposal**, a **conversation**, and a **quality gate** all in one.

When you open a PR, you are telling your team:
> *"I have fetched the latest code, created a secure timeline (branch), implemented a solution, and now I formally submit it for your scrutiny and approval."*

---

## 1. The PR Lifecycle

Understanding the flow of a PR is essential to avoid bottlenecks.

\`\`\`mermaid
sequenceDiagram
    participant Dev as Developer
    participant GH as GitHub/Remote
    participant CI as CI/CD Robot
    participant Rev as Reviewers
    participant Main as Main Branch

    Dev->>GH: git push origin feature-api
    Dev->>GH: Open Pull Request
    activate GH
    GH->>CI: Trigger Build & Tests
    activate CI
    CI-->>GH: ✅ Build Passed
    deactivate CI
    
    GH->>Rev: Notify Reviewers
    Rev->>GH: Review Code (Questions/Comments)
    GH-->>Dev: Request Changes ❌
    
    Dev->>Dev: Fix issues locally
    Dev->>GH: git push (Update PR)
    
    GH->>CI: Re-run Tests
    CI-->>GH: ✅ Build Passed
    
    Rev->>GH: Approve Changes ✅
    GH->>Main: Squash & Merge
    deactivate GH
    %% width: 800px %%
\`\`\`



---

## 2. Anatomy of an Elite PR

A PR without context is "spam" for your team. You must "sell" your changes.

### ❌ The Junior Pattern
**Title**: \`fix bug\`
**Description**: *[Empty]*
**Result**: Reviewers have to guess what's happening. They will ask many basic questions, delaying code merge for days.

### ✅ The Senior Pattern
**Title**: \`fix(auth): handle null token in login response\`
**Description**: uses a structured template.

\`\`\`markdown
## 🔍 What is being changed?
- Updated \`auth.js\` logic to check for \`null\` tokens.
- Added a fallback error message "Invalid Credentials".
- Added unit test \`auth.test.js\`.

## 🧠 Why is this needed?
Top-tier users were seeing a "White Screen of Death" (WSOD) when their session expired, instead of being redirected to login.

## 📸 Proof of Work
| Before | After |
| :--- | :--- |
| ![Error](https://example.com/wsod.png) | ![Login](https://example.com/clean-login.png) |

## ✅ Checklist
- [x] Added Unit Tests
- [x] Verified on Staging
- [x] No Breaking Changes
\`\`\`

---

## 3. The "Atomic" Rule

Size matters. The probability of catastrophic bugs slipping through a review is proportional to the size of the PR.

> [!WARNING]
> **The 400-Line Cliff**: Studies show that after 400 lines of code changed, the defect detection rate in reviews drops by **90%**. Reviewers get "Code Blindness" and just scroll to the bottom to click Approve.

### How to keep PRs small:
1.  **Feature Flags**: Merge unfinished code safely by wrapping it in an \`if (start_feature)\` block.
2.  **Separate Refactors**: Do not fix indentation or rename global variables in the same PR as a feature logic change.
3.  **Stacked PRs**: Break a massive feature into:
    - \`feat: database schema\` (PR #1)
    - \`feat: api endpoints\` (PR #2)
    - \`feat: frontend ui\` (PR #3)

---

## 4. The Gatekeeper: CI/CD 🤖

Before a human even looks at your code, the **Machine** judges it.

When you open a PR, a **Continuous Integration (CI)** pipeline runs:
- **Linters**: Checks style (Prettier, Eslint). "Did you leave a \`console.log\`?"
- **Tests**: Runs Unit & Integration tests. "Did you break the login?"
- **Build**: Verifies the app actually compiles. "Did you import a missing file?"

If the "Checks" fail ❌, **do not** ask for a review. It is disrespectful to ask a human to review broken code. Fix the robot first.

> [!TIP]
> **Draft PRs**: If you want feedback but your code isn't ready/passing tests, mark the PR as **"Draft"**. This signals "Don't merge me, but look at my approach."
`,
    duration: '15 min'
};
