import { sql } from '../src/lib/neon.js';
import jwt from 'jsonwebtoken';

/**
 * Badges API - handles badge operations
 * Actions: load, unlock, check
 */
export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Auth check
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    let userId;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch {
        return res.status(401).json({ success: false, error: 'Invalid token' });
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
    const badges = await sql`
        SELECT badge_id, unlocked_at, notified
        FROM user_badges
        WHERE user_id = ${userId}
        ORDER BY unlocked_at DESC
    `;

    // Mark all as notified
    await sql`
        UPDATE user_badges
        SET notified = true
        WHERE user_id = ${userId} AND notified = false
    `;

    // Get pending (not yet notified) badges for celebration
    const pendingBadges = badges.filter(b => !b.notified);

    return res.status(200).json({
        success: true,
        badges: badges.map(b => b.badge_id),
        pendingBadges: pendingBadges.map(b => b.badge_id)
    });
}

// Unlock a new badge and award XP
async function handleUnlockBadge(req, res, userId) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

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
}
