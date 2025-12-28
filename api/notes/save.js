import { sql } from '../../src/lib/neon.js';
import { cors, compose } from '../middleware/cors.js';
import { requireAuth } from '../middleware/auth.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';

/**
 * Save/Update Note Endpoint
 * POST /api/notes/save
 * 
 * Requires: Authentication
 * Body: { courseId, itemId, content }
 */
async function saveNoteHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const userId = req.user.id;
        const { courseId, itemId, content } = req.body;

        if (!courseId || !itemId || content === undefined) {
            return res.status(400).json({
                success: false,
                error: 'courseId, itemId, and content are required'
            });
        }

        // Limit note size to 10KB
        if (content.length > 10000) {
            return res.status(400).json({
                success: false,
                error: 'Note content too large (max 10KB)'
            });
        }

        // Upsert note
        await sql`
      INSERT INTO notes (
        user_id, course_id, item_id, content, updated_at
      ) VALUES (
        ${userId}, ${courseId}, ${itemId}, ${content}, NOW()
      )
      ON CONFLICT (user_id, course_id, item_id)
      DO UPDATE SET
        content = EXCLUDED.content,
        updated_at = NOW()
    `;

        return res.status(200).json({
            success: true,
            message: 'Note saved'
        });

    } catch (error) {
        console.error('Save note error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to save note'
        });
    }
}

// Apply middleware
export default compose(
    cors,
    rateLimitPresets.moderate,
    requireAuth
)(saveNoteHandler);
