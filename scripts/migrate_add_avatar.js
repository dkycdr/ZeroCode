import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

if (!process.env.VITE_NEON_DATABASE_URL) {
    console.error('Error: VITE_NEON_DATABASE_URL is not defined in .env');
    process.exit(1);
}

const sql = neon(process.env.VITE_NEON_DATABASE_URL);

async function migrate() {
    try {
        console.log('Adding avatar column to users table...');
        await sql`
            ALTER TABLE users 
            ADD COLUMN IF NOT EXISTS avatar TEXT;
        `;
        console.log('Migration successful!');
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

migrate();
