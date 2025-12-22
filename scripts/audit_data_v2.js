import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.VITE_NEON_DATABASE_URL);

async function auditData() {
    try {
        console.log('--- ALL USERS ---');
        const users = await sql`SELECT id, name, email, avatar, joined_date FROM users;`;
        users.forEach(u => {
            console.log(`ID: ${u.id}, Name: ${u.name}, Joined: ${u.joined_date} (${typeof u.joined_date}), Avatar: ${u.avatar}`);
        });

        console.log('\n--- FORUM POSTS ---');
        const posts = await sql`
            SELECT p.id, p.title, p.user_id, u.name as author, u.avatar as author_avatar
            FROM forum_posts p
            JOIN users u ON p.user_id = u.id;
        `;
        posts.forEach(p => {
            console.log(`Post ID: ${p.id}, Title: ${p.title}, Author: ${p.author}, Avatar: ${p.author_avatar}`);
        });

    } catch (error) {
        console.error('Audit failed:', error);
    }
}

auditData();
