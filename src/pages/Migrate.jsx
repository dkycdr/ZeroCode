import { useEffect, useState } from 'react';
import { sql } from '../lib/neon';

export default function Migrate() {
    const [status, setStatus] = useState('Idle');

    useEffect(() => {
        const runMigration = async () => {
            setStatus('Running migration...');
            try {
                await sql`
                    ALTER TABLE users 
                    ADD COLUMN IF NOT EXISTS border TEXT DEFAULT 'none';
                `;
                setStatus('Success: Column "border" added.');
            } catch (error) {
                setStatus('Error: ' + error.message);
            }
        };

        runMigration();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
            <div className="text-2xl font-mono">{status}</div>
        </div>
    );
}
