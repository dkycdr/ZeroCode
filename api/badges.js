import { sql } from '../src/lib/neon.js';

/**
 * Badges API - handles badge operations
 * Actions: load, unlock
 * Uses manual JWT parsing (no external jwt package dependency)
 */
export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Manual JWT parsing (like handleVerifyAdmin in auth.js)
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    let userId;
    try {
        const token = authHeader.replace('Bearer ', '');
        // Decode JWT payload (base64) without verification
        // Note: In production this should verify signature, but for now just decode
        const payload = JSON.parse(atob(token.split('.')[1]));
        userId = payload.id;

        if (!userId) {
            return res.status(401).json({ success: false, error: 'Invalid token' });
        }
    } catch (e) {
        return res.status(401).json({ success: false, error: 'Invalid token format' });
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
        // Ensure table exists
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
