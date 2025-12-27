import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from './AuthProvider';
import { sql } from '../lib/neon';
import { CONTENT_TYPES } from '../data/curriculumStructure';
import { getAllItems } from '../data/courses/index';

const ProgressContext = createContext({});

export const useProgress = () => useContext(ProgressContext);

const ITEM_XP = {
    [CONTENT_TYPES.INFORMATIONAL]: 20,
    [CONTENT_TYPES.LESSON]: 50,
    [CONTENT_TYPES.QUIZ]: 100,
    [CONTENT_TYPES.PROJECT]: 250
};

export const ProgressProvider = ({ children }) => {
    const { user, updateLeaderboardStats, updateStreak } = useAuth();
    const [completedCourses, setCompletedCourses] = useState([]);
    const [completedCourseVersions, setCompletedCourseVersions] = useState({});
    const [completedItems, setCompletedItems] = useState([]);
    const [unitHistory, setUnitHistory] = useState({}); // { unitId: Set(itemIds) } for Ghost Progress
    const [recentActivity, setRecentActivity] = useState([]); // Array of { item_id, completed_at, ... }
    const [reward, setReward] = useState(null);
    const [unitReward, setUnitReward] = useState(null);
    const [rewardCallback, setRewardCallback] = useState(null); // callback function
    const [loading, setLoading] = useState(true);
    const [userStats, setUserStats] = useState({
        streak: 0,
        focusTime: '0h 0m',
        modulesCleared: 0,
        totalFocusMinutes: 0,
        focusBreakdown: {
            doc: 0,
            lab: 0,
            quiz: 0,
            project: 0
        },
        xp: 0,
        level: 1,
        nextLevelXp: 400,
        levelProgress: 0
    });

    // Session tracking for actual focus time
    const sessionStartRef = useRef(null);
    const currentItemRef = useRef(null);
    const currentContentTypeRef = useRef(null);

    useEffect(() => {
        if (user) {
            loadProgress();
        } else {
            setCompletedCourses([]);
            setCompletedItems([]);
            setUserStats({
                streak: 0,
                focusTime: '0h 0m',
                modulesCleared: 0,
                totalFocusMinutes: 0,
                focusBreakdown: {
                    doc: 0,
                    lab: 0,
                    quiz: 0,
                    project: 0
                },
                xp: 0,
                level: 1,
                nextLevelXp: 400,
                levelProgress: 0
            });
            setLoading(false);
        }
    }, [user]);

    const calculateLevel = (totalXp) => {
        // Adjusted Curve: XP = 100 * Level * (Level - 1)
        // Makes leveling 2x faster than before (Base 200 -> 100)
        const BASE_XP = 100;

        let level = 1;
        while (BASE_XP * level * (level + 1) <= totalXp) {
            level++;
        }

        const currentLevelBaseXp = BASE_XP * (level - 1) * level;
        const nextLevelXp = BASE_XP * level * (level + 1);
        const xpNeeded = nextLevelXp - currentLevelBaseXp;
        const xpIntoLevel = totalXp - currentLevelBaseXp;
        const progress = Math.min(100, Math.floor((xpIntoLevel / xpNeeded) * 100));

        return { level, nextLevelXp, progress };
    };

    const calculateStats = (itemsWithDates, courses) => {
        // 1. Calculate Streak
        // Sort dates descending
        const dates = itemsWithDates
            .map(i => new Date(i.completed_at).toDateString())
            .filter((date, index, self) => self.indexOf(date) === index) // Unique dates
            .sort((a, b) => new Date(b) - new Date(a));

        let streak = 0;
        const today = new Date().toDateString();
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString();

        if (dates.length > 0) {
            if (dates[0] === today) {
                streak = 1;
                for (let i = 1; i < dates.length; i++) {
                    const prevDate = new Date(dates[i - 1]);
                    const currDate = new Date(dates[i]);
                    const diffTime = Math.abs(prevDate - currDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) streak++;
                    else break;
                }
            } else if (dates[0] === yesterday) {
                streak = 1;
                for (let i = 1; i < dates.length; i++) {
                    const prevDate = new Date(dates[i - 1]);
                    const currDate = new Date(dates[i]);
                    const diffTime = Math.abs(prevDate - currDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) streak++;
                    else break;
                }
            }
        }

        // Focus time is now tracked via actual session time, not estimated
        // (removed old 15-minute-per-item estimate)

        // 3. Calculate XP & Level
        // We need to know the TYPE of each item to calculate XP.
        // Since sql query only gave IDs, we need to map them back to strict types.
        // This is a bit inefficient (O(N*M)) but fine for client-side stats < 1000 items.
        let totalXp = 0;

        // Flatten all courses into one big item map for O(1) lookups if optimized, 
        // but for now we iterate since getAllItems is fast enough.
        // Optimization: Get a flat list once.
        const allSystemItems = [];
        // We need IDs of all courses to get all items.
        // Currently we don't have a list of ALL course IDs imported here easily without importing 'courses' object.
        // But getAllItems(courseId) requires courseId.
        // Let's assume we import the course keys or similar.
        // Actually, we can just assume a default XP per item if type is unknown, OR better: use the type stored in the DB if we had it.
        // We don't verify type from DB. Let's just assign 50 XP flat for legacy items if we can't find them,
        // BUT better to find them.

        // Strategy: Iterate over the KNOWN IDs in `courses` map from index.js?
        // We imported getAllItems. Let's act on the items we have progress for.
        // We need to look up the item definition.

        // Simpler approach: Load ALL items into a Map for fast lookup.
        // We need the list of all course IDs. We can get it from the keys of `courseContent` in `../data/courses/index`?
        // No, `getAllItems` takes `courseId`.

        // Let's rely on the `calculateStats` passing the `courses` list? No, that's just completed courses.
        // We will assume 50 XP average for now to prevent breakage, or try to lookup.
        // Actually, let's look at `index.js` exports. There is `courses` metadata export.

        // REVISION: I will import `courses` metadata to iterate.
        // But wait, `getAllItems` is cleaner.
        // I will assume for now we just give 50XP per item to start, 
        // OR I can quickly fetch all items.

        // PROPER IMPLEMENTATION:
        // We need to calculate XP accurately.
        // Let's iterate over `itemsWithDates`. For each, we try to find it.
        // Since we don't have a global item registry, this is tricky.
        // However, we can perform a "best effort" lookup if we know the courseId.
        // The DB `item_progress` table HAS `course_id`.
        // I will update the SELECT query to fetch `course_id` and `unit_id` as well?
        // Yes, existing `markItemComplete` saves them.
        // Update `loadProgress` query to fetch `course_id`.

        // For this step I will implement specific logic inside `calculateStats` assuming I have the data.
        // I will Update `loadProgress` in a separate step or just below.

        // Assuming `itemsWithDates` has `course_id` (I will change the SQL select).

        // TEMP FIX: 50 XP flat for now until I update the SQL.
        totalXp = totalItems * 50;

        // Let's properly calculate Level from this XP
        const { level, nextLevelXp, progress } = calculateLevel(totalXp);

        setUserStats({
            streak,
            focusTime,
            modulesCleared: courses.length,
            totalFocusMinutes: totalMinutes,
            xp: totalXp,
            level,
            nextLevelXp,
            levelProgress: progress
        });
    };

    const loadProgress = async () => {
        if (!user) return;

        try {
            // Load completed courses
            const courses = await sql`
                SELECT course_id, version 
                FROM course_progress 
                WHERE user_id = ${user.id} AND completed = true
            `;

            // Load completed items with timestamps AND content info for XP
            const items = await sql`
                SELECT item_id, course_id, unit_id, completed_at
                FROM item_progress 
                WHERE user_id = ${user.id} AND completed = true
            `;

            setCompletedCourses(courses.map(c => c.course_id));

            // Map course versions for update checking
            // Fallback to '1.0.0' since DB column might not exist yet
            const versions = {};
            courses.forEach(c => {
                versions[c.course_id] = c.version || '1.0.0';
            });
            setCompletedCourseVersions(versions);

            setCompletedItems(items.map(i => i.item_id));
            setRecentActivity(items);

            // Populate Unit History (Ghost Item Detection)
            const uMap = {};
            const LEGACY_MAPPING = {
                'html5-unit-4-multimedia': ['multimedia', 'audio', 'video', 'svg', 'media', 'hero', 'player'],
                'css3-unit-15': ['profile', 'card', 'blueprint'],
                'html5-unit-3-forms': ['form', 'input', 'valid', 'check', 'radio', 'signup', 'pizza'],
                'html5-unit-5-tables': ['html5-5-', 'table', 'row', 'cell', 'colspan', 'rowspan'],
                'html5-unit-1-structure': ['html5-u1', 'dom', 'structure', 'head', 'body', 'box', 'model', 'margin', 'padding', 'u1-'],
                'html5-unit-6-accessibility': ['a11y', 'aria', 'accessib', 'wcag', 'contrast', 'unit-6', 'u6-'],
                'html5-unit-8-real-projects': ['portfolio', 'project', 'landing', 'business', 'unit-8', 'u8-'],
                'html5-unit-7-best-practices': ['clean', 'spaghetti', 'formatter', 'refactor', 'unit-7', 'u7-']
            };

            // Unit ID Migration Map (Old -> New)
            // This ensures users with old IDs still get mapped to the new Unit version for "Ghost Progress" checks
            const ID_REDIRECTS = {
                'css3-unit-15': 'css3-unit-15-profile-masterclass',
                'unit-6-accessibility': 'html5-unit-6-accessibility',
                'html5-unit-1': 'html5-unit-1-structure',
                'html5-unit-8': 'html5-unit-8-real-projects',
                'html5-unit-7': 'html5-unit-7-best-practices'
            };

            items.forEach(i => {
                let unitId = i.unit_id;

                // 1. Fallback for Legacy Data (null unit_id)
                if (!unitId && i.item_id) {
                    const idLower = i.item_id.toLowerCase();
                    for (const [uId, keywords] of Object.entries(LEGACY_MAPPING)) {
                        if (keywords.some(k => idLower.includes(k))) {
                            unitId = uId;
                            break;
                        }
                    }
                }

                // 2. Apply Redirects for Renamed Units (Must happen AFTER Legacy Mapping)
                if (unitId && ID_REDIRECTS[unitId]) {
                    unitId = ID_REDIRECTS[unitId];
                }

                if (unitId) {
                    if (!uMap[unitId]) uMap[unitId] = new Set();
                    uMap[unitId].add(i.item_id);
                }
            });
            setUnitHistory(uMap);

            // Enhance items with XP calculation capability
            // We need to lookup types. This is heavy if done entirely client side without a cache.
            // But we can do it.

            // BETTER: Just calculate XP based on types.
            // We will do a robust lookup in a subsequent refinement or just hardcode some for now.
            // Actually, let's do the "Smart Estimate":
            // Labs usually contain 'lab', Quizzes 'quiz'.
            // Simple heuristic based on ID string if available?
            // item_id usually 'py-lab-1' etc.

            let calculatedXp = 0;
            items.forEach(item => {
                let xp = 50; // Default (Lesson)
                const id = item.item_id.toLowerCase();

                if (id.includes('quiz')) xp = ITEM_XP[CONTENT_TYPES.QUIZ];
                else if (id.includes('project') || id.includes('capstone')) xp = ITEM_XP[CONTENT_TYPES.PROJECT];
                else if (id.includes('info') || id.includes('dive')) xp = ITEM_XP[CONTENT_TYPES.INFORMATIONAL];
                else if (id.includes('lab')) xp = ITEM_XP[CONTENT_TYPES.LESSON];

                calculatedXp += xp;
            });

            // Re-run calculateStats with this pre-calculated XP or pass the raw items
            // I'll modify calculateStats to take the XP as override or calculate it there.
            // Let's just refactor calculateStats to do the curve logic.

            // Refactored CalculateStats usage:
            const dates = items
                .map(i => new Date(i.completed_at).toDateString())
                .filter((date, index, self) => self.indexOf(date) === index)
                .sort((a, b) => new Date(b) - new Date(a));

            // (Streak logic copied from above to keep it contained or passed)
            // ... Streak logic is identical ...
            let streak = 0;
            const today = new Date().toDateString();
            const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString();

            if (dates.length > 0) {
                if (dates[0] === today) {
                    streak = 1;
                    for (let i = 1; i < dates.length; i++) {
                        // ... logic ...
                        const prevDate = new Date(dates[i - 1]);
                        const currDate = new Date(dates[i]);
                        const diffTime = Math.abs(prevDate - currDate);
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        if (diffDays === 1) streak++; else break;
                    }
                } else if (dates[0] === yesterday) {
                    streak = 1;
                    for (let i = 1; i < dates.length; i++) {
                        // ... logic ...
                        const prevDate = new Date(dates[i - 1]);
                        const currDate = new Date(dates[i]);
                        const diffTime = Math.abs(prevDate - currDate);
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        if (diffDays === 1) streak++; else break;
                    }
                }
            }

            // Load actual focus time from database
            let actualFocusMinutes = 0;
            let focusBreakdown = { doc: 0, lab: 0, quiz: 0, project: 0 };
            try {
                const statsResult = await sql`
                    SELECT total_focus_minutes, focus_minutes_doc, focus_minutes_lab, focus_minutes_quiz, focus_minutes_project 
                    FROM user_dashboard_stats 
                    WHERE user_id = ${user.id}
                `;
                if (statsResult.length > 0) {
                    actualFocusMinutes = statsResult[0].total_focus_minutes || 0;
                    focusBreakdown = {
                        doc: statsResult[0].focus_minutes_doc || 0,
                        lab: statsResult[0].focus_minutes_lab || 0,
                        quiz: statsResult[0].focus_minutes_quiz || 0,
                        project: statsResult[0].focus_minutes_project || 0
                    };
                }
            } catch (e) {
                console.warn('Could not load focus time from DB');
                // No fallback - focus time defaults to 0 if DB fails
            }

            const hours = Math.floor(actualFocusMinutes / 60);
            const minutes = actualFocusMinutes % 60;
            const focusTime = `${hours}h ${minutes}m`;

            const { level, nextLevelXp, progress } = calculateLevel(calculatedXp);

            setUserStats({
                streak: user?.streak_count || 0,
                focusTime,
                modulesCleared: courses.length,
                totalFocusMinutes: actualFocusMinutes,
                focusBreakdown,
                xp: calculatedXp,
                level,
                nextLevelXp,
                levelProgress: progress
            });

            // SYNC TO LEADERBOARD
            updateLeaderboardStats(calculatedXp, courses.length);

        } catch (error) {
            console.error('Error loading progress:', error);
        } finally {
            setLoading(false);
        }
    };

    const markCourseComplete = async (courseId) => {
        if (!user) return;

        try {
            await sql`
                INSERT INTO course_progress (user_id, course_id, completed, completed_at, version)
                VALUES (${user.id}, ${courseId}, true, NOW(), ${version || '1.0.0'})
                ON CONFLICT (user_id, course_id) 
                DO UPDATE SET completed = true, completed_at = NOW(), version = EXCLUDED.version
            `;

            const newCourses = [...new Set([...completedCourses, courseId])];
            setCompletedCourses(newCourses);

            // SYNC TO LEADERBOARD
            updateLeaderboardStats(userStats.xp, newCourses.length);
        } catch (error) {
            console.error('Error marking course complete:', error);
        }
    };

    const markItemComplete = async (itemId, courseId = '', unitId = '', onDismiss = null) => {
        if (!user) return false;

        try {
            const result = await sql`
                INSERT INTO item_progress (user_id, item_id, course_id, unit_id, completed, completed_at)
                VALUES (${user.id}, ${itemId}, ${courseId}, ${unitId}, true, NOW())
                ON CONFLICT (user_id, item_id) 
                DO UPDATE SET completed = true, completed_at = NOW()
                RETURNING completed_at
            `;

            if (!completedItems.includes(itemId)) {
                const newItems = [...completedItems, itemId];
                const newActivity = [...recentActivity, { item_id: itemId, completed_at: new Date().toISOString() }];
                setCompletedItems(newItems);
                setRecentActivity(newActivity);

                // Calculate gained XP
                let gainedXp = 50;
                const id = itemId.toLowerCase();
                if (id.includes('quiz')) gainedXp = ITEM_XP[CONTENT_TYPES.QUIZ];
                else if (id.includes('project') || id.includes('capstone')) gainedXp = ITEM_XP[CONTENT_TYPES.PROJECT];
                else if (id.includes('info') || id.includes('dive')) gainedXp = ITEM_XP[CONTENT_TYPES.INFORMATIONAL];
                else if (id.includes('lab')) gainedXp = ITEM_XP[CONTENT_TYPES.LESSON];

                // Update streak in DB via AuthProvider
                const streakResult = await updateStreak();

                // Get current stats
                const currentStats = userStats;
                // Get stats before update
                const { level: currentLevel, nextLevelXp: oldNextXp, progress: oldProgress } = calculateLevel(currentStats.xp);

                // Focus time is tracked via session, not per-item estimate
                const newMins = currentStats.totalFocusMinutes;
                const newXp = currentStats.xp + gainedXp;
                const { level: newLevel, nextLevelXp, progress: newProgress } = calculateLevel(newXp);

                const h = Math.floor(newMins / 60);
                const m = newMins % 60;

                // TRIGGER REWARD
                setReward({
                    xp: gainedXp,
                    levelUp: newLevel > currentLevel,
                    newLevel: newLevel,
                    prevProgress: oldProgress,
                    currentProgress: newProgress,
                    xpToNextLevel: nextLevelXp - newXp
                });
                if (onDismiss) setRewardCallback(() => onDismiss); // Store callback

                setUserStats(prev => ({
                    ...prev,
                    streak: streakResult?.newStreak || prev.streak,
                    totalFocusMinutes: newMins,
                    focusTime: `${h}h ${m}m`,
                    xp: newXp,
                    level: newLevel,
                    nextLevelXp,
                    levelProgress: newProgress
                }));

                // SYNC TO LEADERBOARD
                updateLeaderboardStats(newXp, currentStats.modulesCleared);

                // UNIT COMPLETION CHECK
                if (courseId && unitId) {
                    try {
                        const unit = await sql`
                            SELECT item_id FROM item_progress 
                            WHERE user_id = ${user.id} AND course_id = ${courseId} AND unit_id = ${unitId} AND completed = true
                        `;

                        // Get all items defined for this unit
                        const { getUnit } = await import('../data/courses/index');
                        const unitData = getUnit(courseId, unitId);

                        if (unitData && unitData.items.length > 0) {
                            const completedUnitItems = unit.map(i => i.item_id);
                            const allCompleted = unitData.items.every(item =>
                                completedUnitItems.includes(item.id) || item.id === itemId
                            );

                            if (allCompleted) {
                                const { courses: courseMeta } = await import('../data/curriculumStructure');
                                setUnitReward({
                                    unitTitle: unitData.title,
                                    courseTitle: courseMeta[courseId]?.title || courseId,
                                    courseIcon: courseMeta[courseId]?.icon,
                                    userName: user.name
                                });
                            }
                        }
                    } catch (e) {
                        console.error('Error checking unit completion:', e);
                    }
                }

                return true; // Reward earned
            } else {
                // ALREADY COMPLETED - BUT TRIGGER REWARD ANYWAY (User Requirement)
                // This ensures the visual feedback loop is closed even on replay.
                const { nextLevelXp, progress } = calculateLevel(userStats.xp);
                setReward({
                    xp: 0,
                    levelUp: false,
                    newLevel: userStats.level,
                    replay: true,
                    prevProgress: progress,
                    currentProgress: progress,
                    xpToNextLevel: nextLevelXp - userStats.xp
                });
                if (onDismiss) setRewardCallback(() => onDismiss); // Store callback
                return true; // Return true to BLOCK navigation in LearningLayout
            }
        } catch (error) {
            console.error('Error marking item complete:', error);
            // Don't block user progress if database fails
            // Still update local state and show reward
            if (!completedItems.includes(itemId)) {
                const newItems = [...completedItems, itemId];
                setCompletedItems(newItems);

                // Calculate gained XP
                let gainedXp = 50;
                const id = itemId.toLowerCase();
                if (id.includes('quiz')) gainedXp = ITEM_XP[CONTENT_TYPES.QUIZ];
                else if (id.includes('project') || id.includes('capstone')) gainedXp = ITEM_XP[CONTENT_TYPES.PROJECT];
                else if (id.includes('info') || id.includes('dive')) gainedXp = ITEM_XP[CONTENT_TYPES.INFORMATIONAL];
                else if (id.includes('lab')) gainedXp = ITEM_XP[CONTENT_TYPES.LESSON];

                const currentStats = userStats;
                const { level: currentLevel } = calculateLevel(currentStats.xp);
                // Focus time is tracked via session, not per-item estimate
                const newMins = currentStats.totalFocusMinutes;
                const newXp = currentStats.xp + gainedXp;
                const { level: newLevel, nextLevelXp, progress: newProgress } = calculateLevel(newXp);

                const h = Math.floor(newMins / 60);
                const m = newMins % 60;

                setReward({
                    xp: gainedXp,
                    levelUp: newLevel > currentLevel,
                    newLevel: newLevel,
                    prevProgress: calculateLevel(currentStats.xp).progress,
                    currentProgress: newProgress,
                    xpToNextLevel: nextLevelXp - newXp,
                    dbError: true // Flag that DB save failed
                });
                if (onDismiss) setRewardCallback(() => onDismiss);

                setUserStats(prev => ({
                    ...prev,
                    totalFocusMinutes: newMins,
                    focusTime: `${h}h ${m}m`,
                    xp: newXp,
                    level: newLevel,
                    nextLevelXp,
                    levelProgress: newProgress
                }));
            }
            // Return true to show reward overlay even on DB error
            return true;
        }
    };

    const clearReward = () => {
        setReward(null);
        if (rewardCallback) {
            rewardCallback();
            setRewardCallback(null);
        }
    };

    const clearUnitReward = () => {
        setUnitReward(null);
    };

    const isItemCompleted = (itemId) => {
        return completedItems.includes(itemId);
    };

    const isCourseCompleted = (courseId, currentVersion = null) => {
        // If currentVersion is provided, check if stored version matches
        // For now, simpler check: just check existence
        return completedCourses.includes(courseId);
    };

    const getCourseItemsCompleted = (courseId, allItemIds) => {
        return allItemIds.filter(id => completedItems.includes(id)).length;
    };

    const resetProgress = async () => {
        if (!user) return;

        try {
            await sql`DELETE FROM course_progress WHERE user_id = ${user.id}`;
            await sql`DELETE FROM item_progress WHERE user_id = ${user.id}`;
            await sql`DELETE FROM task_progress WHERE user_id = ${user.id}`;

            setCompletedCourses([]);
            setCompletedItems([]);
            setUnitHistory({});
            setUserStats({
                streak: 0,
                focusTime: '0h 0m',
                modulesCleared: 0,
                totalFocusMinutes: 0,
                xp: 0,
                level: 1,
                nextLevelXp: 400,
                levelProgress: 0
            });
        } catch (error) {
            console.error('Error resetting progress:', error);
        }
    };

    const checkUnitStatus = (unitId, unitVersion = '1.0.0', courseId) => {
        // 1. Ghost Progress Check (Orphaned Items)
        // If user has history in DB for this unitId, but ZERO progress in the current unit items,
        // it means the content has been completely swapped/refactored.
        if (unitId && unitHistory[unitId] && unitHistory[unitId].size > 0) {
            return 'update_available';
        }

        // 2. Main Version Check
        // Check if the Course itself has a recorded version
        const userCourseVersion = completedCourseVersions[courseId];

        // Simple SemVer compare (Major.Minor.Patch)
        const isNewer = (v1, v2) => {
            if (!v1 || !v2) return false;
            const p1 = v1.split('.').map(Number);
            const p2 = v2.split('.').map(Number);
            for (let i = 0; i < 3; i++) {
                if ((p1[i] || 0) > (p2[i] || 0)) return true;
                if ((p1[i] || 0) < (p2[i] || 0)) return false;
            }
            return false;
        };

        if (userCourseVersion && isNewer(unitVersion, userCourseVersion)) {
            return 'update_available';
        }

        // Default to active/locked logic handle by UI usually, but here we explicitly return update flag.
        return 'current';
    };

    // Start tracking session time when user opens a learning item
    // contentType: 'doc' | 'lab' | 'quiz' | 'project'
    const startSession = useCallback((itemId, contentType = 'lab', courseId = '', unitId = '') => {
        sessionStartRef.current = Date.now();
        currentItemRef.current = { id: itemId, courseId, unitId };
        currentContentTypeRef.current = contentType;
    }, []);

    // End session and save accumulated time by content type
    const endSession = useCallback(async () => {
        if (!sessionStartRef.current || !user) return 0;

        const elapsed = Math.floor((Date.now() - sessionStartRef.current) / 1000 / 60); // minutes
        const contentType = currentContentTypeRef.current || 'lab';
        const itemInfo = currentItemRef.current || {};
        const itemId = typeof itemInfo === 'string' ? itemInfo : itemInfo.id || '';
        const courseId = itemInfo.courseId || '';
        const unitId = itemInfo.unitId || '';

        sessionStartRef.current = null;
        currentItemRef.current = null;
        currentContentTypeRef.current = null;

        if (elapsed > 0 && elapsed < 180) { // Cap at 3 hours per session to avoid stale tabs
            try {
                // Update local state immediately
                setUserStats(prev => {
                    const newTotal = prev.totalFocusMinutes + elapsed;
                    const h = Math.floor(newTotal / 60);
                    const m = newTotal % 60;
                    return {
                        ...prev,
                        totalFocusMinutes: newTotal,
                        focusTime: `${h}h ${m}m`,
                        focusBreakdown: {
                            ...prev.focusBreakdown,
                            [contentType]: (prev.focusBreakdown[contentType] || 0) + elapsed
                        }
                    };
                });

                // Save to database - update both total and type-specific column
                const columnMap = {
                    doc: 'focus_minutes_doc',
                    lab: 'focus_minutes_lab',
                    quiz: 'focus_minutes_quiz',
                    project: 'focus_minutes_project'
                };

                const column = columnMap[contentType] || 'focus_minutes_lab';

                await sql`
                    UPDATE user_dashboard_stats 
                    SET total_focus_minutes = total_focus_minutes + ${elapsed},
                        ${sql.unsafe(column)} = ${sql.unsafe(column)} + ${elapsed},
                        last_activity_at = NOW(),
                        updated_at = NOW()
                    WHERE user_id = ${user.id}
                `;

                // Also log per-item for detailed breakdown (silently fail if table doesn't exist yet)
                if (itemId && courseId) {
                    try {
                        await sql`
                            INSERT INTO focus_time_log (user_id, item_id, course_id, unit_id, content_type, duration_minutes, started_at, ended_at)
                            VALUES (${user.id}, ${itemId}, ${courseId}, ${unitId}, ${contentType}, ${elapsed}, ${new Date(Date.now() - elapsed * 60000).toISOString()}, NOW())
                        `;
                    } catch (logErr) {
                        // Table might not exist yet, silently ignore
                    }
                }
            } catch (err) {
                console.error('Failed to save focus time:', err);
            }
        }

        return elapsed;
    }, [user]);

    // Auto-save session on page unload
    useEffect(() => {
        const handleBeforeUnload = () => {
            if (sessionStartRef.current && user) {
                const elapsed = Math.floor((Date.now() - sessionStartRef.current) / 1000 / 60);
                const contentType = currentContentTypeRef.current || 'lab';
                if (elapsed > 0 && elapsed < 180) {
                    // Use sendBeacon for reliable unload saving
                    const data = JSON.stringify({ userId: user.id, minutes: elapsed, type: contentType });
                    navigator.sendBeacon('/api/track-focus', data);
                }
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [user]);

    const value = {
        completedCourses,
        completedItems,
        recentActivity,
        userStats,
        loading,
        reward,
        unitReward,
        setUnitReward,
        clearReward,
        clearUnitReward,
        markCourseComplete,
        markItemComplete,
        isItemCompleted,
        isCourseCompleted,
        getCourseItemsCompleted,
        resetProgress,
        checkUnitStatus,
        startSession,
        endSession
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};
