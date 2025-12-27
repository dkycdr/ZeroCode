import { createContext, useContext, useState, useEffect } from 'react';
import { sql } from '../lib/neon';
import { useAuth } from './AuthProvider';
import { SYSTEM_MANUAL } from '../data/neuralVaultTemplates';

const NotesContext = createContext({});

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
    const { user } = useAuth();
    const [folders, setFolders] = useState([]);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVault = async () => {
        if (!user?.id) return;
        setLoading(true);
        try {
            const foldersData = await sql`
                SELECT * FROM user_folders WHERE user_id = ${user.id} ORDER BY name ASC
            `;
            const notesData = await sql`
                SELECT * FROM user_notes WHERE user_id = ${user.id} ORDER BY last_modified DESC
            `;
            setFolders(foldersData);

            // Inject System Note
            const systemNote = {
                id: 'sys-manual',
                title: 'HOW_TO_USE_VAULT.md',
                content: SYSTEM_MANUAL,
                folder_id: null,
                is_system: true,
                tags: ['system', 'read-only'],
                last_modified: new Date().toISOString()
            };

            setNotes([systemNote, ...notesData]);
        } catch (error) {
            console.error('Error fetching vault:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.id) fetchVault();
    }, [user]);

    const createFolder = async (name, parentId = null) => {
        try {
            const [newFolder] = await sql`
                INSERT INTO user_folders (user_id, name, parent_id)
                VALUES (${user.id}, ${name}, ${parentId})
                RETURNING *
            `;
            setFolders(prev => [...prev, newFolder]);
            return { success: true, folder: newFolder };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const createNote = async (title, content = '', folderId = null) => {
        try {
            const [newNote] = await sql`
                INSERT INTO user_notes (user_id, title, content, folder_id)
                VALUES (${user.id}, ${title}, ${content}, ${folderId})
                RETURNING *
            `;
            setNotes(prev => [newNote, ...prev]);
            return { success: true, note: newNote };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const updateNote = async (id, updates) => {
        try {
            const [updatedNote] = await sql`
                UPDATE user_notes
                SET title = ${updates.title ?? undefined}, 
                    content = ${updates.content ?? undefined},
                    folder_id = ${updates.folderId ?? undefined},
                    last_modified = CURRENT_TIMESTAMP
                WHERE id = ${id} AND user_id = ${user.id}
                RETURNING *
            `;

            setNotes(prev => prev.map(n => n.id === id ? updatedNote : n));
            return { success: true, note: updatedNote };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const deleteNote = async (id) => {
        try {
            await sql`DELETE FROM user_notes WHERE id = ${id} AND user_id = ${user.id}`;
            setNotes(prev => prev.filter(n => n.id !== id));
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const updateFolder = async (id, name) => {
        try {
            const [updatedFolder] = await sql`
                UPDATE user_folders
                SET name = ${name}
                WHERE id = ${id} AND user_id = ${user.id}
                RETURNING *
            `;
            setFolders(prev => prev.map(f => f.id === id ? updatedFolder : f));
            return { success: true, folder: updatedFolder };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const deleteFolder = async (id) => {
        try {
            // Check if folder has subfolders or notes (optional safety, or cascade)
            // Cascade delete on DB handles it, but let's be UI friendly
            await sql`DELETE FROM user_folders WHERE id = ${id} AND user_id = ${user.id}`;
            setFolders(prev => prev.filter(f => f.id !== id));
            setNotes(prev => prev.filter(n => n.folder_id !== id)); // Remove notes locally
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    return (
        <NotesContext.Provider value={{
            folders, notes, loading,
            createFolder, updateFolder, deleteFolder,
            createNote, updateNote, deleteNote,
            refreshVault: fetchVault
        }}>
            {children}
        </NotesContext.Provider>
    );
};
