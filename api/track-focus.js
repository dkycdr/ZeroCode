import { sql } from '../../src/lib/neon.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { userId, minutes, type = 'lab' } = req.body;

        if (!userId || !minutes || minutes < 0 || minutes > 180) {
            return res.status(400).json({ error: 'Invalid data' });
        }

        const elapsed = Math.floor(minutes);

        // Map content type to column name
        const columnMap = {
            doc: 'focus_minutes_doc',
            lab: 'focus_minutes_lab',
            quiz: 'focus_minutes_quiz',
            project: 'focus_minutes_project'
        };

        const column = columnMap[type] || 'focus_minutes_lab';

        // Update both total and type-specific column
        await sql.unsafe(`
            UPDATE user_dashboard_stats 
            SET total_focus_minutes = total_focus_minutes + $1,
                ${column} = ${column} + $1,
                last_activity_at = NOW(),
                updated_at = NOW()
            WHERE user_id = $2
        `, [elapsed, userId]);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Focus tracking error:', error);
        return res.status(500).json({ error: 'Failed to track focus time' });
    }
}
