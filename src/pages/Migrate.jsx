import { useEffect, useState } from 'react';
import { sql } from '../lib/neon';

export default function Migrate() {
    const [status, setStatus] = useState('Idle');

    useEffect(() => {
        const runMigration = async () => {
            setStatus('Running Repair Migration...');
            try {
                // Drop tables if they exist with wrong schema (just to be safe)
                await sql`DROP TABLE IF EXISTS user_notes`;
                await sql`DROP TABLE IF EXISTS user_folders`;

                // 1. Create Folders Table (FIXED: user_id is INTEGER)
                await sql`
                    CREATE TABLE user_folders (
                        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                        name TEXT NOT NULL,
                        parent_id UUID REFERENCES user_folders(id) ON DELETE CASCADE,
                        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                    );
                `;

                // 2. Create Notes Table (FIXED: user_id is INTEGER)
                await sql`
                    CREATE TABLE user_notes (
                        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                        folder_id UUID REFERENCES user_folders(id) ON DELETE SET NULL,
                        title TEXT NOT NULL DEFAULT 'Untitled Node',
                        content TEXT DEFAULT '',
                        tags TEXT[] DEFAULT '{}',
                        last_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                    );
                `;

                setStatus('Success: Neural Vault schema (v2) initialized.');
            } catch (error) {
                setStatus('Error: ' + error.message);
                console.error(error);
            }
        };

        runMigration();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
            <div className="max-w-2xl text-center">
                <div className="text-cyan-500 font-mono mb-4 text-sm tracking-widest uppercase">System Migration</div>
                <div className="text-3xl font-black mb-4">{status}</div>
                <p className="text-zinc-500">Please refresh your dashboard once complete.</p>
            </div>
        </div>
    );
}
