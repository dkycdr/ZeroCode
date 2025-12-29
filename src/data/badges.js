/**
 * Achievement Badge Definitions
 * Gamification badges for milestones and achievements
 */

// Badge icons - using Lucide icon names (rendered as components in widget)
export const BADGE_ICONS = {
    // Progress badges
    'first-steps': 'Rocket',
    'getting-started': 'Zap',
    'on-fire': 'Flame',
    'unstoppable': 'Shield',
    'legend': 'Crown',

    // Focus Time badges
    'focused': 'Target',
    'deep-work': 'Brain',
    'time-master': 'Timer',
    'neural-link': 'Cpu',

    // Streak badges
    'consistent': 'Calendar',
    'dedicated': 'Gem',
    'legendary-streak': 'Trophy',

    // Course badges
    'first-course': 'BookOpen',
    'multi-track': 'Layers',
    'full-stack': 'Globe',

    // Special badges
    'perfect-score': 'Star',
    'explorer': 'Compass',
};

// Badge definitions with unlock conditions
export const BADGES = {
    // === PROGRESS BADGES ===
    'first-steps': {
        id: 'first-steps',
        name: 'First Steps',
        description: 'Complete your first lesson',
        category: 'progress',
        icon: BADGE_ICONS['first-steps'],
        xpBonus: 50,
        rarity: 'common',
        condition: (stats) => stats.completedItems >= 1,
    },
    'getting-started': {
        id: 'getting-started',
        name: 'Getting Started',
        description: 'Complete 10 items',
        category: 'progress',
        icon: BADGE_ICONS['getting-started'],
        xpBonus: 100,
        rarity: 'common',
        condition: (stats) => stats.completedItems >= 10,
    },
    'on-fire': {
        id: 'on-fire',
        name: 'On Fire',
        description: 'Complete 50 items',
        category: 'progress',
        icon: BADGE_ICONS['on-fire'],
        xpBonus: 250,
        rarity: 'uncommon',
        condition: (stats) => stats.completedItems >= 50,
    },
    'unstoppable': {
        id: 'unstoppable',
        name: 'Unstoppable',
        description: 'Complete 100 items',
        category: 'progress',
        icon: BADGE_ICONS['unstoppable'],
        xpBonus: 500,
        rarity: 'rare',
        condition: (stats) => stats.completedItems >= 100,
    },
    'legend': {
        id: 'legend',
        name: 'Legend',
        description: 'Complete 500 items',
        category: 'progress',
        icon: BADGE_ICONS['legend'],
        xpBonus: 1000,
        rarity: 'legendary',
        condition: (stats) => stats.completedItems >= 500,
    },

    // === FOCUS TIME BADGES ===
    'focused': {
        id: 'focused',
        name: 'Focused',
        description: '1 hour total focus time',
        category: 'focus',
        icon: BADGE_ICONS['focused'],
        xpBonus: 50,
        rarity: 'common',
        condition: (stats) => stats.totalFocusHours >= 1,
    },
    'deep-work': {
        id: 'deep-work',
        name: 'Deep Work',
        description: '10 hours total focus time',
        category: 'focus',
        icon: BADGE_ICONS['deep-work'],
        xpBonus: 200,
        rarity: 'uncommon',
        condition: (stats) => stats.totalFocusHours >= 10,
    },
    'time-master': {
        id: 'time-master',
        name: 'Time Master',
        description: '50 hours total focus time',
        category: 'focus',
        icon: BADGE_ICONS['time-master'],
        xpBonus: 500,
        rarity: 'rare',
        condition: (stats) => stats.totalFocusHours >= 50,
    },
    'neural-link': {
        id: 'neural-link',
        name: 'Neural Link',
        description: '100 hours total focus time',
        category: 'focus',
        icon: BADGE_ICONS['neural-link'],
        xpBonus: 1000,
        rarity: 'legendary',
        condition: (stats) => stats.totalFocusHours >= 100,
    },

    // === STREAK BADGES ===
    'consistent': {
        id: 'consistent',
        name: 'Consistent',
        description: 'Maintain a 7-day streak',
        category: 'streak',
        icon: BADGE_ICONS['consistent'],
        xpBonus: 100,
        rarity: 'common',
        condition: (stats) => stats.maxStreak >= 7,
    },
    'dedicated': {
        id: 'dedicated',
        name: 'Dedicated',
        description: 'Maintain a 30-day streak',
        category: 'streak',
        icon: BADGE_ICONS['dedicated'],
        xpBonus: 500,
        rarity: 'rare',
        condition: (stats) => stats.maxStreak >= 30,
    },
    'legendary-streak': {
        id: 'legendary-streak',
        name: 'Legendary Streak',
        description: 'Maintain a 100-day streak',
        category: 'streak',
        icon: BADGE_ICONS['legendary-streak'],
        xpBonus: 2000,
        rarity: 'legendary',
        condition: (stats) => stats.maxStreak >= 100,
    },

    // === COURSE BADGES ===
    'first-course': {
        id: 'first-course',
        name: 'First Course',
        description: 'Complete your first course',
        category: 'course',
        icon: BADGE_ICONS['first-course'],
        xpBonus: 200,
        rarity: 'uncommon',
        condition: (stats) => stats.coursesCompleted >= 1,
    },
    'multi-track': {
        id: 'multi-track',
        name: 'Multi-Track',
        description: 'Complete 3 courses',
        category: 'course',
        icon: BADGE_ICONS['multi-track'],
        xpBonus: 500,
        rarity: 'rare',
        condition: (stats) => stats.coursesCompleted >= 3,
    },
    'full-stack': {
        id: 'full-stack',
        name: 'Full Stack',
        description: 'Complete all beginner courses',
        category: 'course',
        icon: BADGE_ICONS['full-stack'],
        xpBonus: 1000,
        rarity: 'legendary',
        condition: (stats) => stats.coursesCompleted >= 6, // 6 beginner courses
    },

    // === SPECIAL BADGES ===
    'perfect-score': {
        id: 'perfect-score',
        name: 'Perfect Score',
        description: 'Score 100% on any quiz',
        category: 'special',
        icon: BADGE_ICONS['perfect-score'],
        xpBonus: 50,
        rarity: 'uncommon',
        condition: (stats) => stats.hasPerfectQuiz === true,
    },
    'explorer': {
        id: 'explorer',
        name: 'Explorer',
        description: 'Visit all platform sections',
        category: 'special',
        icon: BADGE_ICONS['explorer'],
        xpBonus: 50,
        rarity: 'common',
        condition: (stats) => stats.sectionsVisited >= 5,
    },
};

// Rarity colors for UI
export const RARITY_COLORS = {
    common: {
        bg: 'from-zinc-600 to-zinc-700',
        border: 'border-zinc-500',
        text: 'text-zinc-300',
        glow: 'shadow-zinc-500/20',
    },
    uncommon: {
        bg: 'from-green-600 to-emerald-700',
        border: 'border-green-500',
        text: 'text-green-300',
        glow: 'shadow-green-500/30',
    },
    rare: {
        bg: 'from-blue-600 to-cyan-700',
        border: 'border-cyan-500',
        text: 'text-cyan-300',
        glow: 'shadow-cyan-500/40',
    },
    legendary: {
        bg: 'from-yellow-500 to-orange-600',
        border: 'border-yellow-400',
        text: 'text-yellow-300',
        glow: 'shadow-yellow-500/50',
    },
};

// Get all badges as array
export const getAllBadges = () => Object.values(BADGES);

// Get badges by category
export const getBadgesByCategory = (category) =>
    getAllBadges().filter(b => b.category === category);

// Check which badges are newly unlocked
export const checkNewBadges = (stats, existingBadgeIds = []) => {
    const newBadges = [];

    for (const badge of getAllBadges()) {
        // Skip if already unlocked
        if (existingBadgeIds.includes(badge.id)) continue;

        // Check condition
        if (badge.condition(stats)) {
            newBadges.push(badge);
        }
    }

    return newBadges;
};

export default BADGES;
