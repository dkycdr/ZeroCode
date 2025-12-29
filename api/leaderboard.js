import { sql } from '../src/lib/neon.js';

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        // Get top 100 users by points
        const leaderboard = await sql`
            SELECT 
                id,
                name,
                email,
                points,
                courses_completed,
                avatar,
                border,
                ROW_NUMBER() OVER (ORDER BY points DESC, courses_completed DESC) as rank
            FROM users
            WHERE is_email_verified = true AND (points > 0 OR courses_completed > 0)
            ORDER BY points DESC, courses_completed DESC
            LIMIT 100
        `;

        // Get user's rank from query params
        const userId = req.query.userId;
        let userRank = null;

        if (userId) {
            const userRankResult = await sql`
                SELECT 
                    id,
                    name,
                    email,
                    points,
                    courses_completed,
                    ROW_NUMBER() OVER (ORDER BY points DESC, courses_completed DESC) as rank
                FROM users
                WHERE id = ${parseInt(userId)}
            `;

            if (userRankResult.length > 0) {
                userRank = userRankResult[0];
            }
        }

        return res.status(200).json({
            success: true,
            leaderboard: leaderboard,
            userRank: userRank
        });
    } catch (error) {
        console.error('Leaderboard error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
