import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.VITE_NEON_DATABASE_URL);

async function checkSchema() {
    try {
        const columns = await sql`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'users';
        `;
        console.log('Columns in users table:');
        console.table(columns);

        const sample = await sql`SELECT id, name, joined_date, avatar FROM users LIMIT 1;`;
        console.log('Sample user data:', sample[0]);
    } catch (error) {
        console.error('Error checking schema:', error);
    }
}

checkSchema();
