import { sql } from '../../src/lib/neon.js';
import { cors, compose } from '../middleware/cors.js';
import { requireAuth } from '../middleware/auth.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';
import { CONTENT_TYPES } from '../../src/data/curriculumStructure.js';

/**
 * Load User Progress Endpoint
 * GET /api/progress/load
 * 
 * Requires: Authentication
 * Returns: All user progress data (completed items, XP, level, streak)
 */
async function loadProgressHandler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const userId = req.user.id; // From auth middleware

        // Get completed items with completion dates
        const completedItems = await sql`
      SELECT 
        item_id,
        course_id,
        unit_id,
        content_type,
        completed_at,
        quiz_score,
        code_html,
        code_css,
        code_javascript
      FROM item_progress
      WHERE user_id = ${userId} AND completed = true
      ORDER BY completed_at DESC
    `;

        // Get user stats
        const userStats = await sql`
      SELECT 
        points as total_xp,
        level,
        streak,
        last_activity_date,
        courses_completed
      FROM users
      WHERE id = ${userId}
    `;

        const stats = userStats[0] || {
            total_xp: 0,
            level: 1,
            streak: 0,
            last_activity_date: null,
            courses_completed: 0
        };

        // Get activity history for heatmap (last 365 days)
        const oneYearAgo = new Date();
        oneYearAgo.setDate(oneYearAgo.getDate() - 365);

        const activityHistory = await sql`
      SELECT 
        DATE(completed_at) as date,
        COUNT(*) as count
      FROM item_progress
      WHERE user_id = ${userId} 
        AND completed_at >= ${oneYearAgo}
        AND completed = true
      GROUP BY DATE(completed_at)
      ORDER BY date ASC
    `;

        // Get focus time sessions
        const focusSessions = await sql`
      SELECT 
        course_id,
        SUM(duration_seconds) as total_seconds,
        COUNT(*) as session_count
      FROM focus_sessions
      WHERE user_id = ${userId}
      GROUP BY course_id
    `;

        return res.status(200).json({
            success: true,
            progress: {
                completedItems: completedItems.map(item => item.item_id),
                completedItemsWithData: completedItems,
                totalXP: stats.total_xp,
                level: stats.level,
                streak: stats.streak,
                lastActivityDate: stats.last_activity_date,
                coursesCompleted: stats.courses_completed,
                activityHistory: activityHistory,
                focusSessions: focusSessions
            }
        });

    } catch (error) {
        console.error('Load progress error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to load progress'
        });
    }
}

// Apply middleware
export default compose(
    cors,
    rateLimitPresets.lenient, // Lenient for read operations
    requireAuth
)(loadProgressHandler);
