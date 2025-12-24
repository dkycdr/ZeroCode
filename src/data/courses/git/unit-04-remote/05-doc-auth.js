import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Auth = {
    id: 'git-4-doc-auth',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Secure Connection: SSH, HTTPS & Tokens 🔐',
    duration: '20 min',
    content: `
# The Secure Connection: SSH, HTTPS & Tokens 🔐

When you push code to GitHub, you aren't just sending text across the internet; you are performing an identity verification. GitHub needs to know that **you** are the person authorized to modify that repository.

---

## 1. The Two Gateways

GitHub (and most other providers) offer two primary ways to authenticate your identity:

### Gateway A: HTTPS (Simple but Tedious)
Uses a standard web URL. In the past, you could just use your GitHub password. Today, GitHub requires a **Personal Access Token (PAT)** for security.
*   **Pros**: No complex setup; works everywhere.
*   **Cons**: You have to store the token and provide it when prompted (unless using a credential manager).

### Gateway B: SSH (Secure & "Set and Forget")
Uses a public/private key pair. You generate a key on your machine, upload the "Public" half to GitHub, and keep the "Private" half safe.
*   **Pros**: No passwords or tokens once set up; extremely secure.
*   **Cons**: Requires a series of terminal commands to generate and link keys.

---

## 2. Personal Access Tokens (PAT)

If you use HTTPS, you must generate a token in GitHub's **Developer Settings**. Think of a PAT as a "Scoped Password." Unlike your main password, you can limit what a PAT can do (e.g., "only allow reading and writing to repositories").

### Why not just use my password?
Because if a hacker steals your password, they have your whole account. If they steal your PAT, they only have access to the specific repositories you allowed, and you can revoke (delete) the PAT instantly without changing your main password.

---

## 3. The SSH Handshake

SSH (Secure Shell) is the industry standard for server communication.

%% width: 600px %%
\`\`\`mermaid
sequenceDiagram
    participant PC as Your Computer (Private Key)
    participant GH as GitHub (Public Key)
    
    PC->>GH: Hello, I'd like to push.
    GH->>PC: Prove it! Here is a challenge encrypted with your Public Key.
    PC->>PC: Decrypt challenge with Private Key.
    PC->>GH: Here is the decrypted response.
    GH->>PC: Identity Verified. Access Granted.
\`\`\`

---

## 4. Key Security Principles

1.  **Never share your Private Key**: If someone has your private key, they **are** you as far as GitHub is concerned.
2.  **Use a Passphrase**: When generating an SSH key, you can add a passphrase for extra security.
3.  **Rotate your Keys**: It is good practice to generate new keys every 6-12 months.

---

## 5. Setting your Identity locally

Before you push for the first time, Git needs to know who to attribute the commits to. This is done with \`git config\`.

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
\`\`\`

> [!WARNING]
> This config does **not** authenticate you! It only labels your commits. You still need a PAT or SSH key to actually move data to GitHub.

> [!TIP]
> Use the command \`ssh -T git@github.com\` to test if your SSH connection is working correctly!
`
};
