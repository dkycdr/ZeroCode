import { sql } from '../src/lib/neon.js';
import { cors } from './middleware/cors.js';

/**
 * Badges API - handles badge operations
 * Actions: load, unlock
 * Uses manual JWT parsing with Buffer to avoid jsonwebtoken dependency issues
 * Wrapped with CORS middleware for consistent behavior
 */
async function handler(req, res) {
    // Debug: Log all headers to verify token presence
    console.log('Badges API Headers:', JSON.stringify(req.headers, null, 2));

    // Manual JWT parsing
    let authHeader = req.headers.authorization;
    let token;

    // Fallback: Check query param if header is missing
    if (!authHeader?.startsWith('Bearer ')) {
        if (req.query.token) {
            console.log('Badges API: Using token from query param');
            token = req.query.token;
        } else {
            console.warn('Badges API: No Bearer token provided in Authorization header');
            console.warn('Received Authorization:', authHeader);
            return res.status(401).json({
                success: false,
                error: 'Unauthorized: Missing token',
                debug: 'Token not found in headers or query'
            });
        }
    } else {
        token = authHeader.replace('Bearer ', '');
    }

    let userId;
    try {
        const parts = token.split('.');

        if (parts.length !== 3) {
            throw new Error('Invalid token structure');
        }

        // Decode payload (2nd part) using Buffer
        const base64Url = parts[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = Buffer.from(base64, 'base64').toString('utf-8');
        const payload = JSON.parse(jsonPayload);

        userId = payload.id;

        if (!userId) {
            console.warn('Badges API: Token payload missing user ID');
            return res.status(401).json({ success: false, error: 'Invalid token: No User ID' });
        }
    } catch (e) {
        console.error('Badges API: Token parsing failed:', e.message);
        return res.status(401).json({ success: false, error: 'Invalid token format: ' + e.message });
    }

    const action = req.query.action;

    try {
        switch (action) {
            case 'load':
                return await handleLoadBadges(req, res, userId);
            case 'unlock':
                return await handleUnlockBadge(req, res, userId);
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

export default cors(handler);
