import { neon } from '@neondatabase/serverless';

// Neon connection
// Note: Running SQL from browser is for prototype only
// In production, use API routes/backend

// Support both Vite (import.meta.env) and Vercel serverless (process.env)
// Support both Vite (import.meta.env) and Vercel serverless (process.env)
// We check process.env.VITE_NEON_DATABASE_URL too because Vercel often exposes it if defined in dashboard
const databaseUrl = (typeof process !== 'undefined' && (process.env?.DATABASE_URL || process.env?.VITE_NEON_DATABASE_URL))
  ? (process.env.DATABASE_URL || process.env.VITE_NEON_DATABASE_URL)
  : (typeof import.meta !== 'undefined' && import.meta.env?.VITE_NEON_DATABASE_URL
    ? import.meta.env.VITE_NEON_DATABASE_URL
    : null);

if (!databaseUrl) {
  console.error('Database URL not configured');
}

const sql = neon(databaseUrl || '', {
  // Suppress browser warning for development
  // We know the risks and have RLS enabled
  disableWarningInBrowsers: true
});

export { sql };
