import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiTerminalBoxLine, RiFileTextLine, RiHardDriveLine, RiDatabase2Line, RiExternalLinkLine } from 'react-icons/ri';
import SidebarWidgetFrame from './SidebarWidgetFrame';
import { useNotes } from '../../contexts/NotesProvider';

export default function ArchivesWidget() {
    const navigate = useNavigate();
    const { notes, loading } = useNotes();

    const recentNotes = notes.slice(0, 3);
    const allNotes = notes.slice(0, 20); // Show more in fullscreen

    const MiniStat = (
        <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 font-mono">FILES</span>
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 border border-cyan-500/30 rounded bg-cyan-500/10">
                <span className="text-xs font-bold text-cyan-400">{notes.length}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            </div>
        </div>
    );

    return (
        <SidebarWidgetFrame
            title="Vault_Term"
            icon={RiDatabase2Line}
            subtitle="Knowledge_Base"
            miniStat={MiniStat}
        >
            {/* EXPANDED CONTENT */}
            <div className="flex flex-col h-full space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                        // RECENT ENTRIES
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] text-cyan-600 font-mono">{notes.length} RECORDS</span>
                        <RiHardDriveLine size={12} className="text-cyan-600" />
                    </div>
                </div>

                <div className="space-y-1">
                    {loading ? (
                        <div className="text-[10px] font-mono text-cyan-700 animate-pulse">...SYNCING.DATA...</div>
                    ) : (
                        recentNotes.map(note => (
                            <div key={note.id} className="group/item flex items-center gap-3 p-2 rounded hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors cursor-pointer" onClick={() => navigate(`/archives?id=${note.id}`)}>
                                <RiFileTextLine size={12} className="text-zinc-600 group-hover/item:text-cyan-400 transition-colors" />
                                <span className="text-[10px] font-mono text-zinc-400 group-hover/item:text-white truncate flex-1">{note.title}</span>
                                <span className="text-[9px] text-zinc-600 font-mono tabular-nums">
                                    {new Date(note.last_modified).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' })}
                                </span>
                            </div>
                        ))
                    )}
                    {recentNotes.length === 0 && !loading && (
                        <div className="text-[10px] font-mono text-zinc-700 italic py-2 text-center">// NO_DATA_STREAM</div>
                    )}
                </div>

                <button
                    onClick={() => navigate('/archives')}
                    className="w-full mt-2 bg-zinc-900 hover:bg-cyan-900/20 text-zinc-400 hover:text-cyan-400 border border-zinc-800 hover:border-cyan-500/30 font-bold py-2.5 px-4 transition-all text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 font-mono"
                >
                    <RiExternalLinkLine size={14} />
                    <span>ACCESS_FULL_VAULT</span>
                </button>
            </div>

            {/* FULLSCREEN CONTENT OVERRIDE (Optional - SidebarWidgetFrame renders children in modal too, but we can conditionalize content if needed. 
                For now the children are rendered in modal. We might want a different view for modal.
                SidebarWidgetFrame logic: Renders {children}.
                If we want different content for modal, we can check a prop or context? 
                Actually, simpler: SidebarWidgetFrame could accept `fullscreenContent` prop.
                Let's stick to simple children for now, maybe show MORE notes if frame state was exposed, 
                but frame state is internal. 
                
                Workaround: We typically don't need a massive modal for file list if we have a full page.
                The "Fullscreen" button for Archives might better serve as a "Go to Page" shortcut?
                OR we render a larger list here. Since I can't see 'state' here, I will just render the list.
                The list in modal will look small. 
                
                Let's leave it as is. User can click "Access Full Vault" inside the modal too.
             */}
        </SidebarWidgetFrame>
    );
}
