import { neon } from '@neondatabase/serverless';

// Get database URL - works in both Vite (client) and Vercel serverless (API)
let databaseUrl = null;

// Try process.env first (Node.js / Vercel serverless)
try {
  if (typeof process !== 'undefined' && process.env) {
    databaseUrl = process.env.DATABASE_URL || process.env.VITE_NEON_DATABASE_URL;
  }
} catch (e) {
  // Ignore - not in Node environment
}

// Try import.meta.env (Vite / browser)  
if (!databaseUrl) {
  try {
    // @ts-ignore - import.meta.env might not exist
    if (import.meta && import.meta.env && import.meta.env.VITE_NEON_DATABASE_URL) {
      databaseUrl = import.meta.env.VITE_NEON_DATABASE_URL;
    }
  } catch (e) {
    // Ignore - not in Vite environment
  }
}

if (!databaseUrl) {
  throw new Error('Database URL not found. Set DATABASE_URL or VITE_NEON_DATABASE_URL.');
}

// Neon connection
const sql = neon(databaseUrl, {
  disableWarningInBrowsers: true
});

export { sql };
