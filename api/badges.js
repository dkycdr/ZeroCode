import { sql } from '../src/lib/neon.js';
import { requireAuth } from './middleware/auth.js';
import { cors } from './middleware/cors.js';

/**
 * Badges API - handles badge operations
 * Actions: load, unlock
 * Uses requireAuth middleware for authentication
 */
async function badgesHandler(req, res) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Get user from middleware (attached by requireAuth)
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const action = req.query.action;

    try {
        switch (action) {
            case 'load':
                return handleLoadBadges(req, res, userId);
            case 'unlock':
                return handleUnlockBadge(req, res, userId);
            default:
                return res.status(400).json({ success: false, error: 'Invalid action' });
        }
    } catch (error) {
        console.error('Badges API error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Load user's earned badges
async function handleLoadBadges(req, res, userId) {
    try {
        // Ensure table exists (simplified without foreign key for compatibility)
        await sql`
            CREATE TABLE IF NOT EXISTS user_badges (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                badge_id TEXT NOT NULL,
                unlocked_at TIMESTAMP DEFAULT NOW(),
                notified BOOLEAN DEFAULT FALSE,
                UNIQUE(user_id, badge_id)
            )
        `;

        const badges = await sql`
            SELECT badge_id, unlocked_at, notified
            FROM user_badges
            WHERE user_id = ${userId}
            ORDER BY unlocked_at DESC
        `;

        // Mark all as notified
        if (badges.length > 0) {
            await sql`
                UPDATE user_badges
                SET notified = true
                WHERE user_id = ${userId} AND notified = false
            `;
        }

        // Get pending (not yet notified) badges for celebration
        const pendingBadges = badges.filter(b => !b.notified);

        return res.status(200).json({
            success: true,
            badges: badges.map(b => b.badge_id),
            pendingBadges: pendingBadges.map(b => b.badge_id)
        });
    } catch (error) {
        console.error('Load badges error:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Failed to load badges'
        });
    }
}

// Unlock a new badge and award XP
async function handleUnlockBadge(req, res, userId) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { badgeId, xpBonus } = req.body;

        if (!badgeId) {
            return res.status(400).json({ success: false, error: 'Badge ID required' });
        }

        // Check if already unlocked
        const existing = await sql`
            SELECT id FROM user_badges
            WHERE user_id = ${userId} AND badge_id = ${badgeId}
        `;

        if (existing.length > 0) {
            return res.status(200).json({ success: true, alreadyUnlocked: true });
        }

        // Insert badge
        await sql`
            INSERT INTO user_badges (user_id, badge_id, notified)
            VALUES (${userId}, ${badgeId}, false)
        `;

        // Award XP bonus if provided
        if (xpBonus && xpBonus > 0) {
            await sql`
                UPDATE users
                SET points = points + ${xpBonus}
                WHERE id = ${userId}
            `;
        }

        return res.status(200).json({
            success: true,
            unlocked: true,
            xpAwarded: xpBonus || 0
        });
    } catch (error) {
        console.error('Unlock badge error:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Failed to unlock badge'
        });
    }
}

// Export with cors and auth middleware
export default cors(requireAuth(badgesHandler));
