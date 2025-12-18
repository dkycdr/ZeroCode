# ZeroCode

Learn to code from zero. A modern web development learning platform with interactive courses, hands-on projects, and a supportive community.

## Features

- **16 Courses** - From HTML basics to CI/CD, covering the full web development stack
- **Interactive Learning** - Code editor with live preview, quizzes, and projects
- **Progress Tracking** - Track your learning journey across all courses
- **Subscription Tiers** - Free demo, Beginner, Intermediate, Advanced, and Fullstack packages
- **Community Forum** - Ask questions, share knowledge, connect with learners
- **Resource Library** - Curated docs, tools, tutorials, and cheatsheets
- **Admin Dashboard** - Manage users and subscriptions

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Database**: Neon PostgreSQL (serverless)
- **Auth**: Custom auth with bcrypt
- **Deployment**: Vercel / GitHub Pages

## Courses

### Beginner (New Recruit)
- HTML5 Fundamentals
- CSS3 Styling
- JavaScript Basics
- Git & GitHub
- Tailwind CSS

### Intermediate (Systems Engineer)
- DOM Manipulation
- Modern JavaScript (ES6+)
- React.js Fundamentals
- PHP Backend
- MySQL Database
- Python Fundamentals

### Advanced (Lead Architect)
- TypeScript
- Node.js & Express
- MongoDB
- Next.js
- CI/CD & DevOps

## Subscription Pricing

| Tier | Price | Access |
|------|-------|--------|
| Free | Rp 0 | HTML, CSS, JS Basics (demo) |
| Beginner | Rp 50,000 | All beginner courses |
| Intermediate | Rp 75,000 | Beginner + Intermediate |
| Advanced | Rp 80,000 | All courses |
| Fullstack | Rp 164,000 | All courses (20% discount) |

## Setup

### Prerequisites
- Node.js 18+
- Neon PostgreSQL account

### Installation

```bash
# Clone repo
git clone https://github.com/dkycdr/ZeroCode.git
cd ZeroCode

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Add your Neon database URL to .env

# Run database schema
# Copy neon-schema.sql content to Neon SQL Editor and run

# Start dev server
npm run dev
```

### Environment Variables

```
VITE_NEON_DATABASE_URL=postgresql://...
```

## Admin Access

1. Register a normal account
2. Go to Profile → Click "Admin Access" link
3. Enter secret code: `ZEROCODE2024`
4. Or click ZeroCode logo 5 times quickly

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (Auth, Progress)
├── data/
│   └── courses/    # Course content files
├── lib/            # Database connection
├── pages/          # Page components
└── utils/          # Helper functions
```

## Deployment

### Vercel
1. Connect GitHub repo to Vercel
2. Add `VITE_NEON_DATABASE_URL` to environment variables
3. Deploy

### GitHub Pages
Push to main branch - GitHub Actions will auto-deploy

## Team

- **Lead Developer** - Building the platform
- **Documentation** - Course content and docs
- **Admin & Support** - User management and support

## License

MIT
