import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.VITE_NEON_DATABASE_URL);

async function auditData() {
    try {
        console.log('--- USERS AUDIT ---');
        const users = await sql`SELECT id, name, email, avatar, joined_date, subscription_tier FROM users;`;
        console.table(users);

        console.log('\n--- FORUM POSTS AUDIT ---');
        const posts = await sql`
            SELECT p.id, p.title, u.name as author, u.avatar as author_avatar
            FROM forum_posts p
            JOIN users u ON p.user_id = u.id
            LIMIT 5;
        `;
        console.table(posts);

    } catch (error) {
        console.error('Audit failed:', error);
    }
}

auditData();
