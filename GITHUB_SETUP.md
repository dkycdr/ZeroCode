# GitHub Login Setup Guide 🐙

To enable "Login with GitHub", you need to register an OAuth application on GitHub and authorize your localhost (or production URL).

## 1. Register GitHub OAuth App
1. Go to **[GitHub Developer Settings > OAuth Apps](https://github.com/settings/developers)**.
2. Click **New OAuth App**.
3. Fill in the details:
   - **Application Name**: ZeroCode
   - **Homepage URL**: `https://zerocode.web.id` (Production) / `http://localhost:5173` (Development)
   - **Authorization callback URL**: `https://zerocode.web.id/auth/github/callback`
4. Click **Register application**.

> **Note**: For development, you might want to create a SECOND GitHub App (e.g. "ZeroCode Dev") so redirect URLs don't conflict.

## 2. Get Credentials
1. Copy the **Client ID**.
2. Generate a new **Client Secret**. (Note: The Client Secret is needed for the Token Exchange).

## 3. Configure Environment Variables
Add these to your `.env` file (create if missing):

```bash
VITE_GITHUB_CLIENT_ID=your_client_id_here
# IF using a Backend Proxy (Recommended for local/prod):
VITE_GITHUB_TOKEN_PROXY=http://localhost:3000/api/auth/github/token
```

## 4. The Token Exchange Problem (Read Carefully)
GitHub OAuth flow requires a **Client Secret** to exchange the `code` for an `access_token`. You **cannot** safely do this step purely in the browser (frontend) because it would expose your Secret.

**For Development/Testing:**
You need a small backend server (Node.js/Express) or a Cloudflare Worker to act as a proxy.

**Simple Proxy Example (Node.js/Express):**
```javascript
app.get('/api/auth/github/token/:code', async (req, res) => {
    const { code } = req.params;
    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
        })
    });
    const data = await response.json();
    res.json(data);
});
```
Without this proxy, the Login flow will fail at the "Exchange" step in `GithubCallback.jsx`.
