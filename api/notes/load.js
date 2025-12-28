import { sql } from '../../src/lib/neon.js';
import { cors, compose } from '../middleware/cors.js';
import { requireAuth } from '../middleware/auth.js';
import { rateLimitPresets } from '../middleware/rateLimit.js';

/**
 * Load Notes Endpoint
 * GET /api/notes/load
 * 
 * Requires: Authentication
 * Query params: ?courseId=xxx (optional)
 */
async function loadNotesHandler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const userId = req.user.id;
        const { courseId } = req.query;

        let notes;

        if (courseId) {
            // Load notes for specific course
            notes = await sql`
        SELECT item_id, content, updated_at
        FROM notes
        WHERE user_id = ${userId} AND course_id = ${courseId}
        ORDER BY updated_at DESC
      `;
        } else {
            // Load all notes
            notes = await sql`
        SELECT course_id, item_id, content, updated_at
        FROM notes
        WHERE user_id = ${userId}
        ORDER BY updated_at DESC
      `;
        }

        // Convert to object format { itemId: content }
        const notesObj = {};
        notes.forEach(note => {
            notesObj[note.item_id] = note.content;
        });

        return res.status(200).json({
            success: true,
            notes: notesObj,
            notesArray: notes
        });

    } catch (error) {
        console.error('Load notes error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to load notes'
        });
    }
}

// Apply middleware
export default compose(
    cors,
    rateLimitPresets.lenient,
    requireAuth
)(loadNotesHandler);
