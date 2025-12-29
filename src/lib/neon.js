import { neon } from '@neondatabase/serverless';

// Get database URL - works in both Vite (client) and Vercel serverless (API)
// Priority: process.env (serverless) -> import.meta.env (Vite)
function getDatabaseUrl() {
  // Serverless/Node.js environment
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
    if (process.env.VITE_NEON_DATABASE_URL) return process.env.VITE_NEON_DATABASE_URL;
  }

  // Vite/browser environment
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (import.meta.env.VITE_NEON_DATABASE_URL) return import.meta.env.VITE_NEON_DATABASE_URL;
  }

  throw new Error('Database URL not found. Set DATABASE_URL or VITE_NEON_DATABASE_URL environment variable.');
}

// Neon connection
// Note: Running SQL from browser is for prototype only
// In production, use API routes/backend
const sql = neon(getDatabaseUrl(), {
  // Suppress browser warning for development
  // We know the risks and have RLS enabled
  disableWarningInBrowsers: true
});

export { sql };

