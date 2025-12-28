import { sql } from '../../src/lib/neon.js';
import { cors, compose } from '../middleware/cors.js';
import { requireAuth } from '../middleware/auth.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';

// XP rewards by content type
const ITEM_XP = {
    'informational': 20,
    'lesson': 50,
    'quiz': 100,
    'project': 250
};

/**
 * Mark Item Complete Endpoint
 * POST /api/progress/mark-complete
 * 
 * Requires: Authentication
 * Body: { itemId, courseId, unitId, contentType, quizScore?, code? }
 */
async function markCompleteHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const userId = req.user.id;
        const { itemId, courseId, unitId, contentType, quizScore, code } = req.body;

        // Check if already completed
        const existing = await sql`
      SELECT id, completed FROM item_progress
      WHERE user_id = ${userId} AND item_id = ${itemId}
    `;

        if (existing.length > 0 && existing[0].completed) {
            return res.status(400).json({
                success: false,
                error: 'Item already completed',
                alreadyCompleted: true
            });
        }

        // Calculate XP for this item
        const xpEarned = ITEM_XP[contentType] || 20;

        // Insert or update item progress
        await sql`
      INSERT INTO item_progress (
        user_id, item_id, course_id, unit_id, content_type,
        completed, quiz_score, code_html, code_css, code_javascript,
        completed_at
      ) VALUES (
        ${userId}, ${itemId}, ${courseId}, ${unitId}, ${contentType},
        true, ${quizScore || null}, 
        ${code?.html || null}, ${code?.css || null}, ${code?.javascript || null},
        NOW()
      )
      ON CONFLICT (user_id, item_id) 
      DO UPDATE SET
        completed = true,
        quiz_score = EXCLUDED.quiz_score,
        code_html = EXCLUDED.code_html,
        code_css = EXCLUDED.code_css,
        code_javascript = EXCLUDED.code_javascript,
        completed_at = NOW()
    `;

        // Update user XP and calculate new level
        const updatedUser = await sql`
      UPDATE users
      SET 
        points = points + ${xpEarned},
        last_activity_date = CURRENT_DATE,
        updated_at = NOW()
      WHERE id = ${userId}
      RETURNING points, level
    `;

        const newTotalXP = updatedUser[0].points;
        const newLevel = Math.floor(Math.sqrt(newTotalXP / 100));

        // Update level if changed
        const oldLevel = updatedUser[0].level;
        let leveledUp = false;

        if (newLevel > oldLevel) {
            await sql`
        UPDATE users SET level = ${newLevel} WHERE id = ${userId}
      `;
            leveledUp = true;
        }

        // Update streak
        const streakResult = await sql`
      SELECT 
        last_activity_date,
        streak
      FROM users
      WHERE id = ${userId}
    `;

        const { last_activity_date, streak: currentStreak } = streakResult[0];
        const today = new Date().toISOString().split('T')[0];
        const lastActivity = last_activity_date ? new Date(last_activity_date).toISOString().split('T')[0] : null;

        let newStreak = currentStreak;

        if (!lastActivity || lastActivity !== today) {
            // Check if consecutive day
            if (lastActivity) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastActivity === yesterdayStr) {
                    newStreak = currentStreak + 1;
                } else if (lastActivity !== today) {
                    newStreak = 1; // Streak broken, reset to 1
                }
            } else {
                newStreak = 1; // First activity
            }

            await sql`
        UPDATE users
        SET streak = ${newStreak}
        WHERE id = ${userId}
      `;
        }

        return res.status(200).json({
            success: true,
            xpEarned,
            newTotalXP,
            newLevel,
            leveledUp,
            oldLevel,
            streak: newStreak,
            message: leveledUp ? `🎉 Level up! You're now level ${newLevel}!` : 'Progress saved!'
        });

    } catch (error) {
        console.error('Mark complete error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to mark item complete'
        });
    }
}

// Apply middleware
export default compose(
    cors,
    rateLimitPresets.moderate,
    requireAuth
)(markCompleteHandler);
