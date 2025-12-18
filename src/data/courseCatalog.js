// ZeroCode Career Path: Complete Course Catalog
// 16 Modules across 3 Levels (Beginner → Intermediate → Advanced)

export const LEVELS = {
    BEGINNER: {
        id: 'beginner',
        label: { id: 'New Recruit', en: 'New Recruit' },
        tagline: {
            id: 'Membangun fondasi web development dari nol',
            en: 'Building web development foundations from scratch'
        },
        color: 'from-blue-600 to-blue-800',
        icon: '🎖️'
    },
    INTERMEDIATE: {
        id: 'intermediate',
        label: { id: 'Systems Engineer', en: 'Systems Engineer' },
        tagline: {
            id: 'Menguasai interaktivitas dan sistem backend',
            en: 'Mastering interactivity and backend systems'
        },
        color: 'from-purple-600 to-purple-800',
        icon: '⚙️'
    },
    ADVANCED: {
        id: 'advanced',
        label: { id: 'Lead Architect', en: 'Lead Architect' },
        tagline: {
            id: 'Membangun aplikasi production-ready dengan standar industri',
            en: 'Building production-ready apps with industry standards'
        },
        color: 'from-red-700 to-red-900',
        icon: '🏗️'
    }
};

export const courseCatalog = [
    // ========================================
    // LEVEL 1: NEW RECRUIT (BEGINNER)
    // ========================================
    {
        id: 'html5',
        title: 'HTML5 & Semantics',
        level: 'beginner',
        order: 1,
        duration: '4 hours',
        prerequisites: [],
        tags: ['frontend', 'markup', 'accessibility'],
        description: {
            id: 'Pelajari struktur dasar web dengan HTML5 semantik untuk aksesibilitas dan SEO yang lebih baik',
            en: 'Learn web structure basics with semantic HTML5 for better accessibility and SEO'
        },
        // Content imported from lessons object
    },
    {
        id: 'css3',
        title: 'CSS3 Fundamentals',
        level: 'beginner',
        order: 2,
        duration: '6 hours',
        prerequisites: ['html5'],
        tags: ['frontend', 'styling', 'layout'],
        description: {
            id: 'Kuasai styling dan layout dengan CSS3, termasuk Flexbox dan Grid',
            en: 'Master styling and layout with CSS3, including Flexbox and Grid'
        },
    },
    {
        id: 'git',
        title: 'Git & GitHub',
        level: 'beginner',
        order: 3,
        duration: '3 hours',
        prerequisites: [],
        tags: ['tools', 'version-control', 'collaboration'],
        description: {
            id: 'Version control dengan Git dan kolaborasi menggunakan GitHub',
            en: 'Version control with Git and collaboration using GitHub'
        },
    },
    {
        id: 'tailwind',
        title: 'Tailwind CSS',
        level: 'beginner',
        order: 4,
        duration: '5 hours',
        prerequisites: ['css3'],
        tags: ['frontend', 'framework', 'utility-first'],
        description: {
            id: 'Utility-first CSS framework untuk development yang lebih cepat',
            en: 'Utility-first CSS framework for faster development'
        },
    },
    {
        id: 'js-basics',
        title: 'JavaScript Basics',
        level: 'beginner',
        order: 5,
        duration: '8 hours',
        prerequisites: ['html5'],
        tags: ['programming', 'logic', 'fundamentals'],
        description: {
            id: 'Dasar-dasar pemrograman JavaScript: variabel, fungsi, dan kontrol flow',
            en: 'JavaScript programming basics: variables, functions, and control flow'
        },
    },

    // ========================================
    // LEVEL 2: SYSTEMS ENGINEER (INTERMEDIATE)
    // ========================================
    {
        id: 'dom',
        title: 'DOM Manipulation',
        level: 'intermediate',
        order: 6,
        duration: '5 hours',
        prerequisites: ['js-basics'],
        tags: ['javascript', 'interactivity', 'events'],
        description: {
            id: 'Manipulasi elemen HTML secara dinamis dengan JavaScript DOM API',
            en: 'Dynamically manipulate HTML elements with JavaScript DOM API'
        },
    },
    {
        id: 'js-es6',
        title: 'JavaScript ES6+',
        level: 'intermediate',
        order: 7,
        duration: '6 hours',
        prerequisites: ['js-basics'],
        tags: ['javascript', 'modern-syntax', 'async'],
        description: {
            id: 'Fitur modern JavaScript: arrow functions, destructuring, promises, async/await',
            en: 'Modern JavaScript features: arrow functions, destructuring, promises, async/await'
        },
    },
    {
        id: 'php',
        title: 'PHP Native',
        level: 'intermediate',
        order: 8,
        duration: '10 hours',
        prerequisites: ['js-basics'],
        tags: ['backend', 'server-side', 'php'],
        description: {
            id: 'Server-side programming dengan PHP: superglobals, sessions, dan logic flow',
            en: 'Server-side programming with PHP: superglobals, sessions, and logic flow'
        },
    },
    {
        id: 'mysql',
        title: 'MySQL (SQL)',
        level: 'intermediate',
        order: 9,
        duration: '8 hours',
        prerequisites: ['php'],
        tags: ['database', 'sql', 'relational'],
        description: {
            id: 'Database relasional dengan MySQL: CRUD, joins, dan normalisasi',
            en: 'Relational database with MySQL: CRUD, joins, and normalization'
        },
    },
    {
        id: 'python',
        title: 'Python Dasar',
        level: 'intermediate',
        order: 10,
        duration: '7 hours',
        prerequisites: ['js-basics'],
        tags: ['programming', 'python', 'scripting'],
        description: {
            id: 'Pemrograman Python untuk automation dan data processing',
            en: 'Python programming for automation and data processing'
        },
    },
    {
        id: 'react',
        title: 'React.js Fundamentals',
        level: 'intermediate',
        order: 11,
        duration: '12 hours',
        prerequisites: ['js-es6', 'dom'],
        tags: ['frontend', 'framework', 'component-based'],
        description: {
            id: 'Component-based UI development dengan React: hooks, state management',
            en: 'Component-based UI development with React: hooks, state management'
        },
    },

    // ========================================
    // LEVEL 3: LEAD ARCHITECT (ADVANCED)
    // ========================================
    {
        id: 'typescript',
        title: 'TypeScript',
        level: 'advanced',
        order: 12,
        duration: '8 hours',
        prerequisites: ['js-es6'],
        tags: ['javascript', 'type-safety', 'tooling'],
        description: {
            id: 'Type-safe JavaScript dengan TypeScript untuk codebase yang lebih maintainable',
            en: 'Type-safe JavaScript with TypeScript for more maintainable codebases'
        },
    },
    {
        id: 'node',
        title: 'Node.js & Express',
        level: 'advanced',
        order: 13,
        duration: '10 hours',
        prerequisites: ['js-es6'],
        tags: ['backend', 'api', 'rest'],
        description: {
            id: 'Backend JavaScript dengan Node.js dan Express: REST API, middleware, authentication',
            en: 'Backend JavaScript with Node.js and Express: REST API, middleware, authentication'
        },
    },
    {
        id: 'mongodb',
        title: 'MongoDB (NoSQL)',
        level: 'advanced',
        order: 14,
        duration: '8 hours',
        prerequisites: ['node'],
        tags: ['database', 'nosql', 'document-based'],
        description: {
            id: 'NoSQL database dengan MongoDB: schema design, Mongoose, aggregation',
            en: 'NoSQL database with MongoDB: schema design, Mongoose, aggregation'
        },
    },
    {
        id: 'nextjs',
        title: 'Next.js',
        level: 'advanced',
        order: 15,
        duration: '12 hours',
        prerequisites: ['react', 'node'],
        tags: ['frontend', 'fullstack', 'ssr'],
        description: {
            id: 'Full-stack React framework dengan Next.js: SSR, SSG, App Router, optimizations',
            en: 'Full-stack React framework with Next.js: SSR, SSG, App Router, optimizations'
        },
    },
    {
        id: 'cicd',
        title: 'CI/CD & Deployment',
        level: 'advanced',
        order: 16,
        duration: '6 hours',
        prerequisites: ['git', 'node'],
        tags: ['devops', 'automation', 'deployment'],
        description: {
            id: 'Continuous Integration/Deployment dengan GitHub Actions, Vercel, dan Docker basics',
            en: 'Continuous Integration/Deployment with GitHub Actions, Vercel, and Docker basics'
        },
    },
];

// Helper function to get courses by level
export const getCoursesByLevel = (level) => {
    return courseCatalog.filter(course => course.level === level);
};

// Helper function to check if prerequisites are met
export const checkPrerequisites = (courseId, completedCourses = []) => {
    const course = courseCatalog.find(c => c.id === courseId);
    if (!course) return false;
    return course.prerequisites.every(prereq => completedCourses.includes(prereq));
};

// Helper function to get course progress
export const getCourseProgress = (completedCourses = []) => {
    const total = courseCatalog.length;
    const completed = completedCourses.length;
    return {
        total,
        completed,
        percentage: Math.round((completed / total) * 100)
    };
};
