import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const docWorkflows = {
    id: 'git-6-doc-workflows',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Strategic Workflows 🌐',
    content: `
# Strategic Workflows 🌐

"How do we branch?" is a question every team must answer. There are three main strategies.

## 1. Gitflow (Classic)
Designed for software with "Versions" (v1.0, v1.1).

- **main**: Only production-ready code.
- **develop**: The integration zone. Features merge here.
- **feature/*** : Short-lived feature branches off develop.
- **release/*** : Pre-production hardening.
- **hotfix/*** : Emergency patches for main.

**Pros**: Controlled, stable releases.
**Cons**: Complex, "merge hell".

## 2. Trunk-Based Development (Modern)
Designed for SaaS/Web Apps where you deploy 10x a day.

- **main** (The Trunk): Everyone pushes here directly or via short-lived PRs.
- No long-running "develop" or "release" branches.
- Use **Feature Flags** to hide unfinished code in production.

**Pros**: Fast, simple, continuous integration.
**Cons**: Requires high discipline and strong automated tests.

## 3. GitHub Flow (Simple)
Used by GitHub itself.

- **main**: Always deployable.
- **feature-branch**: Create for everything.
- Open PR -> Discuss -> Merge -> Deploy.

---

## 4. Which one to choose?

| Scenario | Recommendation |
| :--- | :--- |
| **Open Source Library** | Forking Workflow + Gitflow |
| **Enterprise Software (v2024)** | Gitflow |
| **Startup / Web App** | Trunk-Based or GitHub Flow |

Most modern web teams prefer **Trunk-Based** or **GitHub Flow** to move fast.
`,
    duration: '20 min'
};
