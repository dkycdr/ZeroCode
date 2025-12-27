# ZeroCode Architecture Flowcharts

## 🏗️ System Architecture Overview

```mermaid
graph TB
    subgraph Client["🖥️ Client (Browser)"]
        React["React 19 App"]
        Monaco["Monaco Editor"]
        Terminal["Virtual Terminal"]
        Pyodide["Pyodide WASM"]
    end

    subgraph Vercel["☁️ Vercel Platform"]
        Static["Static Hosting"]
        Functions["Serverless Functions"]
    end

    subgraph External["🔌 External Services"]
        Neon["Neon PostgreSQL"]
        Gemini["Google Gemini AI"]
        OAuth["OAuth Providers"]
    end

    React --> Static
    Functions --> Neon
    Functions --> Gemini
    React --> Functions
    OAuth --> Functions
```

---

## 📚 Course Learning Flow

```mermaid
flowchart TD
    Start([User Opens Course]) --> SelectUnit[Select Unit]
    SelectUnit --> SelectItem[Select Item]
    
    SelectItem --> ItemType{Item Type?}
    
    ItemType -->|Documentation| ReadDoc[Read Content]
    ItemType -->|Lesson/Lab| OpenIDE[Open IDE]
    ItemType -->|Quiz| StartQuiz[Start Quiz]
    
    ReadDoc --> MarkComplete[Mark Complete]
    
    OpenIDE --> WriteCode[Write Code]
    WriteCode --> RunCode[Run/Execute]
    RunCode --> ValidateTasks{Tasks Valid?}
    ValidateTasks -->|No| WriteCode
    ValidateTasks -->|Yes| MarkComplete
    
    StartQuiz --> AnswerQuestions[Answer Questions]
    AnswerQuestions --> Submit[Submit]
    Submit --> ShowScore[Show Score]
    ShowScore --> MarkComplete
    
    MarkComplete --> EarnXP[Earn XP]
    EarnXP --> CheckLevel{Level Up?}
    CheckLevel -->|Yes| ShowCelebration[🎉 Celebration]
    CheckLevel -->|No| NextItem
    ShowCelebration --> NextItem[Next Item]
    
    NextItem --> UnitComplete{Unit Complete?}
    UnitComplete -->|No| SelectItem
    UnitComplete -->|Yes| UnitBadge[🏆 Unit Badge]
    UnitBadge --> CourseComplete{Course Complete?}
    CourseComplete -->|No| SelectUnit
    CourseComplete -->|Yes| Certificate[📜 Certificate]
```

---

## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant App as React App
    participant API as Vercel API
    participant DB as Neon DB
    participant Email as Email Service

    alt Email Registration
        U->>App: Register with Email
        App->>API: POST /api/auth/register
        API->>DB: Create User (unverified)
        API->>Email: Send Verification Code
        Email->>U: 6-digit Code
        U->>App: Enter Code
        App->>API: POST /api/auth/verify
        API->>DB: Mark Verified
        API->>App: JWT Token
    end

    alt OAuth Login
        U->>App: Click Google/GitHub
        App->>OAuth: Redirect
        OAuth->>App: Auth Code
        App->>API: Exchange Code
        API->>DB: Find/Create User
        API->>App: JWT Token
    end

    App->>App: Store Token (localStorage)
    App->>App: Update AuthContext
```

---

## 💻 Code Execution Engines

```mermaid
flowchart LR
    subgraph Input["📝 User Code"]
        HTML[HTML]
        CSS[CSS]
        JS[JavaScript]
        TS[TypeScript]
        PY[Python]
        VUE[Vue SFC]
        GIT[Git Commands]
    end

    subgraph Engines["⚙️ Execution Engines"]
        Preview["iframe Preview"]
        TSCompiler["TS Transpiler"]
        PyodideEngine["Pyodide WASM"]
        VueLoader["vue3-sfc-loader"]
        VirtualGit["Virtual Git"]
    end

    subgraph Output["📺 Output"]
        HTMLOutput["Live Preview"]
        ConsoleOutput["Console Output"]
        TerminalOutput["Terminal Output"]
    end

    HTML --> Preview --> HTMLOutput
    CSS --> Preview
    JS --> Preview

    TS --> TSCompiler --> Preview

    PY --> PyodideEngine --> ConsoleOutput

    VUE --> VueLoader --> Preview

    GIT --> VirtualGit --> TerminalOutput
```

---

## 🎮 Gamification System

```mermaid
flowchart TD
    Complete[Complete Item] --> CalcXP[Calculate XP]
    
    CalcXP --> Type{Content Type}
    Type -->|Doc| XP20["+20 XP"]
    Type -->|Lesson| XP50["+50 XP"]
    Type -->|Quiz| XP100["+100 XP"]
    Type -->|Project| XP250["+250 XP"]
    
    XP20 & XP50 & XP100 & XP250 --> AddXP[Add to Total XP]
    
    AddXP --> CheckStreak{Same Day?}
    CheckStreak -->|New Day| IncrStreak[Streak +1]
    CheckStreak -->|Same Day| KeepStreak[Keep Streak]
    
    IncrStreak & KeepStreak --> UpdateHeatmap[Update Heatmap]
    
    AddXP --> CalcLevel["Level = √(XP/100)"]
    CalcLevel --> LevelUp{Higher Level?}
    LevelUp -->|Yes| Celebrate["🎉 Level Up!"]
    LevelUp -->|No| UpdateUI[Update UI]
    
    Celebrate --> UpdateLeaderboard[Update Leaderboard]
    UpdateUI --> UpdateLeaderboard
```

---

## 🗺️ Specialization Tracks

```mermaid
graph LR
    subgraph Frontend["🎨 Frontend Protocol"]
        F1[HTML5] --> F2[CSS3]
        F2 --> F3[JS Basics]
        F3 --> F4[Tailwind]
        F4 --> F5[DOM]
        F5 --> F6[ES6+]
        F6 --> F7[React]
        F7 --> F8[TypeScript]
        F8 --> F9[Vue.js]
        F9 --> F10[Next.js]
    end

    subgraph Backend["⚙️ Backend Protocol"]
        B1[JS Basics] --> B2[Node.js]
        B2 --> B3[Express]
        B3 --> B4[PHP]
        B4 --> B5[PostgreSQL]
        B5 --> B6[MySQL]
        B6 --> B7[MongoDB]
        B7 --> B8[Python]
        B8 --> B9[TypeScript]
        B9 --> B10[CI/CD]
    end

    subgraph FullStack["🚀 Full-Stack Operative"]
        FS1[HTML5] --> FS2[CSS3]
        FS2 --> FS3[JS Basics]
        FS3 --> FS4[Git]
        FS4 --> FS5[React]
        FS5 --> FS6[Node.js]
        FS6 --> FS7[Express]
        FS7 --> FS8[MongoDB]
        FS8 --> FS9[Next.js]
        FS9 --> FS10[CI/CD]
    end
```

---

## 🔄 Virtual Git State Machine

```mermaid
stateDiagram-v2
    [*] --> Uninitialized
    
    Uninitialized --> Initialized: git init
    
    Initialized --> Clean: git commit
    
    Clean --> Modified: Edit file
    Modified --> Staged: git add
    Staged --> Clean: git commit
    Staged --> Modified: git restore --staged
    Modified --> Clean: git restore
    
    Clean --> Branched: git branch
    Branched --> Merged: git merge
    Merged --> Clean: Resolve conflicts
    
    Clean --> Rebasing: git rebase -i
    Rebasing --> Clean: Complete rebase
    
    Clean --> Stashed: git stash
    Stashed --> Clean: git stash pop
```

---

## 📊 Database Schema (Simplified)

```mermaid
erDiagram
    USERS ||--o{ PROGRESS : has
    USERS ||--o{ ACTIVITY : logs
    USERS ||--o{ FORUM_POSTS : creates
    USERS ||--o{ NOTES : writes
    
    USERS {
        uuid id PK
        string email
        string username
        string password_hash
        string tier
        int xp
        int level
        int streak
        timestamp created_at
    }
    
    PROGRESS {
        uuid id PK
        uuid user_id FK
        string course_id
        string item_id
        boolean completed
        timestamp completed_at
    }
    
    ACTIVITY {
        uuid id PK
        uuid user_id FK
        string event_type
        string course_id
        int xp_earned
        timestamp timestamp
    }
    
    FORUM_POSTS {
        uuid id PK
        uuid user_id FK
        string title
        text content
        string category
        int votes
        timestamp created_at
    }
    
    NOTES {
        uuid id PK
        uuid user_id FK
        string course_id
        string item_id
        text content
        timestamp updated_at
    }
```

---

## 🖥️ Component Hierarchy

```mermaid
graph TD
    App[App.jsx] --> Router[React Router]
    
    Router --> Landing[LandingPage]
    Router --> Auth[Login/Register]
    Router --> Dashboard[Dashboard]
    Router --> Learning[LearningLayout]
    Router --> Forum[Forum]
    Router --> Profile[Profile]
    
    Dashboard --> Welcome[WelcomeHero]
    Dashboard --> TechTree[NeuralTechTree]
    Dashboard --> CyberDeck[CyberDeckWidget]
    Dashboard --> Resources[ResourceMonitor]
    
    Learning --> Navbar[LearningNavbar]
    Learning --> Sidebar[Sidebar]
    Learning --> Content[Content Area]
    Learning --> AIPanel[AIAssistantPanel]
    
    Content --> DocView[Documentation View]
    Content --> EditorView[Editor + Preview]
    Content --> QuizView[Quiz View]
    
    EditorView --> Monaco[Monaco Editor]
    EditorView --> Preview[Live Preview]
    EditorView --> Terminal[Virtual Terminal]
    
    AIPanel --> Nebula[NebulaChatbot]
```
