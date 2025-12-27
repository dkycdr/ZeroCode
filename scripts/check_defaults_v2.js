import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.VITE_NEON_DATABASE_URL);

async function checkDetails() {
    try {
        const columns = await sql`
            SELECT column_name, column_default, is_nullable, data_type
            FROM information_schema.columns 
            WHERE table_name = 'users'
            AND column_name IN ('joined_date', 'avatar', 'created_at');
        `;
        console.table(columns);
    } catch (error) {
        console.error('Check failed:', error);
    }
}

checkDetails();
