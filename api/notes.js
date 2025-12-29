import { sql } from '../src/lib/neon.js';
import { cors } from './middleware/cors.js';
import { rateLimit } from './middleware/rateLimit.js';

/**
 * Consolidated Notes API Endpoint
 * 
 * Routes:
 * GET  /api/notes?action=load&courseId=xxx
 * POST /api/notes?action=save
 */

const moderateLimiter = rateLimit({ maxRequests: 30, windowMs: 60 * 1000 });

async function handleLoadNotes(req, res, userId) {
    const { courseId } = req.query;

    let notes;
    if (courseId) {
        notes = await sql`
      SELECT item_id, content, updated_at FROM notes
      WHERE user_id = ${userId} AND course_id = ${courseId}
      ORDER BY updated_at DESC
    `;
    } else {
        notes = await sql`
      SELECT course_id, item_id, content, updated_at FROM notes
      WHERE user_id = ${userId} ORDER BY updated_at DESC
    `;
    }

    const notesObj = {};
    notes.forEach(n => { notesObj[n.item_id] = n.content; });

    return res.status(200).json({ success: true, notes: notesObj, notesArray: notes });
}

async function handleSaveNote(req, res, userId) {
    const { courseId, itemId, content } = req.body;

    if (!courseId || !itemId || content === undefined) {
        return res.status(400).json({ success: false, error: 'courseId, itemId, content required' });
    }

    if (content.length > 10000) {
        return res.status(400).json({ success: false, error: 'Note too large (max 10KB)' });
    }

    await sql`
    INSERT INTO notes (user_id, course_id, item_id, content, updated_at)
    VALUES (${userId}, ${courseId}, ${itemId}, ${content}, NOW())
    ON CONFLICT (user_id, course_id, item_id)
    DO UPDATE SET content = EXCLUDED.content, updated_at = NOW()
  `;

    return res.status(200).json({ success: true, message: 'Note saved' });
}

async function notesHandler(req, res) {
    if (req.method === 'OPTIONS') return res.status(200).end();

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
                return handleLoadNotes(req, res, userId);
            case 'save':
                if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Use POST' });
                return handleSaveNote(req, res, userId);
            default:
                return res.status(400).json({ success: false, error: 'Invalid action' });
        }
    } catch (error) {
        console.error('Notes error:', error);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
}

export default cors(moderateLimiter(notesHandler));
