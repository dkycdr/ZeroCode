import { sql } from '../src/lib/neon.js';
import { cors } from './middleware/cors.js';
import { rateLimit } from './middleware/rateLimit.js';
import { requireAuth } from './middleware/auth.js';

/**
 * Consolidated Progress API Endpoint
 * 
 * Routes:
 * GET  /api/progress?action=load
 * POST /api/progress?action=mark-complete
 * POST /api/progress?action=update-streak
 */

const moderateLimiter = rateLimit({ maxRequests: 30, windowMs: 60 * 1000 });

// XP rewards
const ITEM_XP = { 'informational': 20, 'lesson': 50, 'quiz': 100, 'project': 250 };

async function handleLoadProgress(req, res, userId) {
    const completedItems = await sql`
    SELECT item_id, course_id, unit_id, content_type, completed_at, quiz_score
    FROM item_progress WHERE user_id = ${userId} AND completed = true
    ORDER BY completed_at DESC
  `;

    const userStats = await sql`
    SELECT points as total_xp, level, streak, last_activity_date, courses_completed
    FROM users WHERE id = ${userId}
  `;

    const stats = userStats[0] || { total_xp: 0, level: 1, streak: 0 };

    const oneYearAgo = new Date();
    oneYearAgo.setDate(oneYearAgo.getDate() - 365);

    const activityHistory = await sql`
    SELECT DATE(completed_at) as date, COUNT(*) as count
    FROM item_progress WHERE user_id = ${userId} AND completed_at >= ${oneYearAgo} AND completed = true
    GROUP BY DATE(completed_at) ORDER BY date ASC
  `;

    const focusSessions = await sql`
    SELECT course_id, SUM(duration_seconds) as total_seconds, COUNT(*) as session_count
    FROM focus_sessions WHERE user_id = ${userId} GROUP BY course_id
  `;

    return res.status(200).json({
        success: true,
        progress: {
            completedItems: completedItems.map(i => i.item_id),
            completedItemsWithData: completedItems,
            totalXP: stats.total_xp, level: stats.level, streak: stats.streak,
            lastActivityDate: stats.last_activity_date, coursesCompleted: stats.courses_completed,
            activityHistory, focusSessions
        }
    });
}

async function handleMarkComplete(req, res, userId) {
    const { itemId, courseId, unitId, contentType, quizScore, code } = req.body;

    if (!itemId) {
        return res.status(400).json({ success: false, error: 'itemId required' });
    }

    const existing = await sql`SELECT id FROM item_progress WHERE user_id = ${userId} AND item_id = ${itemId} AND completed = true`;
    if (existing.length > 0) {
        return res.status(200).json({ success: true, alreadyCompleted: true, xpEarned: 0 });
    }

    const xpEarned = ITEM_XP[contentType] || 20;

    await sql`
    INSERT INTO item_progress (user_id, item_id, course_id, unit_id, content_type, completed, quiz_score, 
                               code_html, code_css, code_javascript, completed_at)
    VALUES (${userId}, ${itemId}, ${courseId || ''}, ${unitId || ''}, ${contentType || 'lesson'}, 
            true, ${quizScore || null}, ${code?.html || null}, ${code?.css || null}, ${code?.javascript || null}, NOW())
    ON CONFLICT (user_id, item_id) DO UPDATE SET completed = true, completed_at = NOW()
  `;

    const updated = await sql`
    UPDATE users SET points = points + ${xpEarned}, last_activity_date = CURRENT_DATE
    WHERE id = ${userId} RETURNING points, level
  `;

    const newXP = updated[0]?.points || 0;
    const newLevel = Math.floor(Math.sqrt(newXP / 100));
    const oldLevel = updated[0]?.level || 1;

    if (newLevel > oldLevel) {
        await sql`UPDATE users SET level = ${newLevel} WHERE id = ${userId}`;
    }

    return res.status(200).json({
        success: true, xpEarned, newTotalXP: newXP, newLevel, leveledUp: newLevel > oldLevel
    });
}

async function handleUpdateStreak(req, res, userId) {
    const user = await sql`SELECT streak, last_activity_date FROM users WHERE id = ${userId}`;
    if (user.length === 0) return res.status(404).json({ success: false });

    const { streak, last_activity_date } = user[0];
    const today = new Date().toISOString().split('T')[0];
    const lastDate = last_activity_date ? new Date(last_activity_date).toISOString().split('T')[0] : null;

    let newStreak = streak || 0;

    if (!lastDate || lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        newStreak = lastDate === yesterdayStr ? streak + 1 : 1;
        await sql`UPDATE users SET streak = ${newStreak}, last_activity_date = CURRENT_DATE WHERE id = ${userId}`;
    }

    return res.status(200).json({ success: true, streak: newStreak });
}

async function progressHandler(req, res) {
    if (req.method === 'OPTIONS') return res.status(200).end();

    // Get user from auth
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const token = authHeader.replace('Bearer ', '');
    let userId;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        userId = payload.id;
    } catch {
        return res.status(401).json({ success: false, error: 'Invalid token' });
    }

    const action = req.query.action;

    try {
        switch (action) {
            case 'load':
                if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'Use GET' });
                return handleLoadProgress(req, res, userId);
            case 'mark-complete':
                if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Use POST' });
                return handleMarkComplete(req, res, userId);
            case 'update-streak':
                if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Use POST' });
                return handleUpdateStreak(req, res, userId);
            default:
                return res.status(400).json({ success: false, error: 'Invalid action' });
        }
    } catch (error) {
        console.error('Progress error:', error);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
}

export default cors(moderateLimiter(progressHandler));
