import { neon } from '@neondatabase/serverless';

// Neon connection
// Note: Running SQL from browser is for prototype only
// In production, use API routes/backend
const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);

export { sql };
