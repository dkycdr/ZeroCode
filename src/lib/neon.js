import { neon } from '@neondatabase/serverless';

// Get database URL - works in both Vite (client) and Vercel serverless (API)
function getDatabaseUrl() {
  // Serverless/Node.js environment (Vercel API routes)
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
    if (process.env.VITE_NEON_DATABASE_URL) return process.env.VITE_NEON_DATABASE_URL;
  }

  // Vite/browser environment
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (import.meta.env.VITE_NEON_DATABASE_URL) return import.meta.env.VITE_NEON_DATABASE_URL;
  }

  throw new Error('Database URL not found. Set DATABASE_URL or VITE_NEON_DATABASE_URL.');
}

// Neon connection
// Note: Running SQL from browser is for prototype only
// In production, use API routes/backend for sensitive operations
const sql = neon(getDatabaseUrl(), {
  // Suppress browser warning for development
  // We know the risks and have RLS enabled
  disableWarningInBrowsers: true
});

export { sql };

