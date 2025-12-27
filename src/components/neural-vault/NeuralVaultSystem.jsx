import React, { useState, useEffect } from 'react';
import {
    RiFolderLine, RiFileTextLine, RiAddLine, RiSave3Line,
    RiDeleteBinLine, RiSideBarLine,
    RiFolderAddLine, RiArrowDownSLine, RiArrowRightSLine,
    RiEditLine, RiCodeLine, RiCloseLine, RiLayoutColumnLine,
    RiTerminalBoxLine, RiDatabase2Line, RiEyeLine
} from 'react-icons/ri';
import { useNotes } from '../../contexts/NotesProvider';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SYSTEM_MANUAL, COURSE_TEMPLATE, BUG_REPORT_TEMPLATE } from '../../data/neuralVaultTemplates';

// --- FILE TREE COMPONENT ---
const FileTree = ({ folders, notes, expandedFolders, onToggleFolder, onSelectNote, activeNoteId, onAddNote, onAddFolder, onRenameFolder, onDeleteFolder }) => {
    const rootFolders = folders.filter(f => !f.parent_id);
    const rootNotes = notes.filter(n => !n.folder_id);

    const renderFolder = (folder, level) => {
        const isExpanded = expandedFolders[folder.id];
        const childFolders = folders.filter(f => f.parent_id === folder.id);
        const childNotes = notes.filter(n => n.folder_id === folder.id);

        return (
            <div key={folder.id}>
                <div
                    className={clsx(
                        "group/folder flex items-center gap-2 hover:text-white cursor-pointer py-1.5 px-3 relative transition-colors text-xs border-l-2",
                        isExpanded ? "text-zinc-300 border-zinc-700 bg-zinc-900/30" : "text-zinc-500 border-transparent hover:border-zinc-800 hover:bg-zinc-900/20"
                    )}
                    style={{ paddingLeft: `${level * 12 + 12}px` }}
                    onClick={() => onToggleFolder(folder.id)}
                >
                    {isExpanded ? <RiArrowDownSLine size={12} /> : <RiArrowRightSLine size={12} />}
                    <RiFolderLine className="group-hover/folder:text-cyan-400" size={13} />
                    <span className="font-mono truncate flex-1">{folder.name}</span>

                    <div className="flex items-center gap-1 opacity-0 group-hover/folder:opacity-100 transition-opacity bg-black px-1 rounded">
                        <button onClick={(e) => { e.stopPropagation(); onAddNote(folder.id); }} className="hover:text-white" title="New Note"><RiAddLine size={11} /></button>
                        <button onClick={(e) => { e.stopPropagation(); onAddFolder(folder.id); }} className="hover:text-white" title="New Folder"><RiFolderAddLine size={11} /></button>
                        <button onClick={(e) => { e.stopPropagation(); onRenameFolder(folder); }} className="hover:text-cyan-400" title="Rename"><RiEditLine size={11} /></button>
                        <button onClick={(e) => { e.stopPropagation(); onDeleteFolder(folder); }} className="hover:text-red-400" title="Delete"><RiDeleteBinLine size={11} /></button>
                    </div>
                </div>

                {isExpanded && (
                    <div className="border-l border-zinc-800/50 ml-2">
                        {childFolders.map(child => renderFolder(child, level + 1))}
                        {childNotes.map(note => (
                            <div
                                key={note.id}
                                onClick={() => onSelectNote(note)}
                                style={{ paddingLeft: `${(level + 1) * 12 + 20}px` }}
                                className={clsx(
                                    "py-1.5 px-3 text-xs truncate cursor-pointer transition-all border-l-2 flex items-center gap-2 group/note",
                                    activeNoteId === note.id
                                        ? "text-white border-cyan-500 bg-zinc-900/50"
                                        : "text-zinc-500 border-transparent hover:text-zinc-300 hover:border-zinc-800 hover:bg-zinc-900/20"
                                )}
                            >
                                <RiFileTextLine size={11} />
                                <span className="truncate font-mono">{note.title}</span>
                            </div>
                        ))}
                        {childFolders.length === 0 && childNotes.length === 0 && (
                            <div className="text-[10px] text-zinc-800 py-1 italic font-mono" style={{ paddingLeft: `${(level + 1) * 12 + 20}px` }}>empty</div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex-1 overflow-y-auto scrollbar-cyber pb-4">
            {rootFolders.map(f => renderFolder(f, 0))}
            {rootNotes.map(note => (
                <div key={note.id} onClick={() => onSelectNote(note)} className={clsx("flex items-center gap-2 py-1.5 px-3 text-xs cursor-pointer border-l-2 ml-1 font-mono", activeNoteId === note.id ? "text-white border-cyan-500 bg-zinc-900/50" : "text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-zinc-900/20")}>
                    <RiFileTextLine size={13} /> <span className="truncate">{note.title}</span>
                </div>
            ))}
        </div>
    );
};

// --- MAIN COMPONENT ---
export default function NeuralVaultSystem({ onClose }) {
    const { folders, notes, createFolder, updateFolder, deleteFolder, createNote, updateNote, deleteNote } = useNotes();

    const [openNotes, setOpenNotes] = useState([]);
    const [activeNoteId, setActiveNoteId] = useState(null);
    const [expandedFolders, setExpandedFolders] = useState({});
    const [viewMode, setViewMode] = useState('split');
    const [showSidebar, setShowSidebar] = useState(true);
    const [modalConfig, setModalConfig] = useState(null);
    const [inputBuffer, setInputBuffer] = useState('');

    const activeNote = openNotes.find(n => n.id === activeNoteId);

    const handleSelectNote = (note) => {
        if (!openNotes.find(n => n.id === note.id)) {
            setOpenNotes(prev => [...prev, note]);
        }
        setActiveNoteId(note.id);
    };

    const handleCloseTab = (e, noteId) => {
        e.stopPropagation();
        const newNotes = openNotes.filter(n => n.id !== noteId);
        setOpenNotes(newNotes);
        if (activeNoteId === noteId) {
            setActiveNoteId(newNotes.length > 0 ? newNotes[newNotes.length - 1].id : null);
        }
    };

    const handleUpdateNote = async (id, updates) => {
        const note = openNotes.find(n => n.id === id);
        if (note?.is_system) return;
        setOpenNotes(prev => prev.map(n => n.id === id ? { ...n, ...updates } : n));
        await updateNote(id, updates);
    };

    const handleCreateFolder = async () => {
        if (!inputBuffer.trim()) return;
        if (modalConfig.type === 'create_folder') {
            await createFolder(inputBuffer, modalConfig.parentId);
            if (modalConfig.parentId) setExpandedFolders(prev => ({ ...prev, [modalConfig.parentId]: true }));
        } else if (modalConfig.type === 'rename_folder') {
            await updateFolder(modalConfig.folder.id, inputBuffer);
        }
        setInputBuffer('');
        setModalConfig(null);
    };

    const insertTemplate = (template) => {
        if (!activeNote || activeNote.is_system) return;
        handleUpdateNote(activeNote.id, { content: (activeNote.content || '') + '\n' + template });
    };

    return (
        <div className="flex h-full w-full bg-[#0a0a0a] text-zinc-300 font-sans overflow-hidden">
            <style>{`
                .scrollbar-cyber::-webkit-scrollbar { width: 6px; height: 6px; }
                .scrollbar-cyber::-webkit-scrollbar-track { background: rgba(0,0,0,0.5); }
                .scrollbar-cyber::-webkit-scrollbar-thumb { background: #27272a; border-radius: 2px; }
                .scrollbar-cyber::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* SIDEBAR */}
            <motion.div
                initial={{ width: 260 }}
                animate={{ width: showSidebar ? 260 : 0 }}
                className="bg-black border-r border-zinc-800 flex flex-col overflow-hidden shrink-0"
            >
                <div className="p-3 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/20">
                    <div className="flex items-center gap-2">
                        <RiDatabase2Line className="text-zinc-600" size={14} />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">EXPLORER</span>
                    </div>
                    <div className="flex gap-1">
                        <button onClick={() => { setInputBuffer(''); setModalConfig({ type: 'create_folder', parentId: null }); }} className="p-1 hover:text-white text-zinc-600" title="New Folder"><RiFolderAddLine size={14} /></button>
                        <button onClick={() => createNote('Untitled', '').then(({ note }) => handleSelectNote(note))} className="p-1 hover:text-white text-zinc-600" title="New File"><RiAddLine size={14} /></button>
                    </div>
                </div>
                <FileTree
                    folders={folders}
                    notes={notes}
                    expandedFolders={expandedFolders}
                    onToggleFolder={(id) => setExpandedFolders(p => ({ ...p, [id]: !p[id] }))}
                    onSelectNote={handleSelectNote}
                    activeNoteId={activeNoteId}
                    onAddNote={async (folderId) => {
                        const { note } = await createNote('Untitled', '', folderId);
                        if (note) { handleSelectNote(note); setExpandedFolders(p => ({ ...p, [folderId]: true })); }
                    }}
                    onAddFolder={(parentId) => { setInputBuffer(''); setModalConfig({ type: 'create_folder', parentId }); }}
                    onRenameFolder={(folder) => { setInputBuffer(folder.name); setModalConfig({ type: 'rename_folder', folder }); }}
                    onDeleteFolder={(folder) => confirm(`Delete ${folder.name}?`) && deleteFolder(folder.id)}
                />
            </motion.div>

            {/* MAIN AREA */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#0a0a0a]">

                {/* TOP BAR */}
                <div className="h-10 bg-black border-b border-zinc-800 flex items-center shrink-0">
                    <button onClick={() => setShowSidebar(!showSidebar)} className="px-3 text-zinc-600 hover:text-white h-full border-r border-zinc-800">
                        <RiLayoutColumnLine size={16} />
                    </button>

                    <div className="flex-1 flex overflow-x-auto no-scrollbar">
                        {openNotes.map(note => (
                            <div
                                key={note.id}
                                onClick={() => setActiveNoteId(note.id)}
                                className={clsx(
                                    "group flex items-center gap-2 px-3 min-w-[120px] max-w-[200px] h-full text-xs cursor-pointer border-r border-zinc-800 select-none font-mono",
                                    activeNoteId === note.id ? "bg-[#0a0a0a] text-white border-t-2 border-t-cyan-500" : "bg-black text-zinc-500 hover:bg-[#0a0a0a] hover:text-zinc-300"
                                )}
                            >
                                <span className={clsx("truncate flex-1", note.is_system && "text-yellow-500/80")}>{note.title}</span>
                                <button onClick={(e) => handleCloseTab(e, note.id)} className={clsx("opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-zinc-800")}><RiCloseLine size={12} /></button>
                            </div>
                        ))}
                    </div>

                    {onClose && (
                        <button onClick={onClose} className="px-4 h-full text-zinc-600 hover:text-red-400 hover:bg-zinc-900/20 border-l border-zinc-800">
                            <RiCloseLine size={18} />
                        </button>
                    )}
                </div>

                {/* EDITOR / EMPTY STATE */}
                {!activeNote ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-zinc-700 select-none">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-900/50 flex items-center justify-center mb-4 border border-zinc-800">
                            <RiTerminalBoxLine size={32} className="text-zinc-800" />
                        </div>
                        <div className="text-sm font-bold uppercase tracking-[0.2em] font-mono text-zinc-600">NO.ACTIVE.PROTOCOL</div>
                        <p className="text-xs text-zinc-800 mt-2 font-mono">SELECT.FILE.TO.INITIALIZE</p>
                    </div>
                ) : (
                    <div className="flex flex-col flex-1 min-h-0">
                        {/* Editor Toolbar */}
                        <div className="h-11 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-900/10 gap-4 shrink-0">
                            <input
                                value={activeNote.title}
                                disabled={activeNote.is_system}
                                onChange={(e) => handleUpdateNote(activeNote.id, { title: e.target.value })}
                                className={clsx("bg-transparent text-sm font-bold focus:outline-none w-64 truncate font-mono placeholder-zinc-800", activeNote.is_system ? "text-yellow-500/50 cursor-not-allowed" : "text-white")}
                            />

                            <div className="flex items-center gap-2">
                                {activeNote.is_system && (
                                    <span className="text-[10px] bg-yellow-950/30 text-yellow-500 px-2 py-0.5 border border-yellow-700/30 uppercase font-mono tracking-widest mr-2">READ.ONLY</span>
                                )}

                                <div className="flex bg-zinc-900/50 border border-zinc-800 p-0.5">
                                    <button onClick={() => setViewMode('edit')} className={clsx("p-1.5", viewMode === 'edit' ? "bg-zinc-800 text-white" : "text-zinc-600 hover:text-white")}><RiCodeLine size={14} /></button>
                                    <button onClick={() => setViewMode('split')} className={clsx("p-1.5", viewMode === 'split' ? "bg-zinc-800 text-white" : "text-zinc-600 hover:text-white")}><RiSideBarLine size={14} /></button>
                                    <button onClick={() => setViewMode('preview')} className={clsx("p-1.5", viewMode === 'preview' ? "bg-zinc-800 text-white" : "text-zinc-600 hover:text-white")}><RiEyeLine size={14} /></button>
                                </div>
                                <div className="h-4 w-px bg-zinc-800" />

                                {!activeNote.is_system && (
                                    <div className="relative group/tpl">
                                        <button className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 hover:text-white flex items-center gap-1">TEMPLATES <RiArrowDownSLine /></button>
                                        <div className="absolute top-full right-0 mt-2 w-40 bg-black border border-zinc-800 shadow-xl py-1 hidden group-hover/tpl:block z-50">
                                            <button onClick={() => insertTemplate(SYSTEM_MANUAL)} className="block w-full text-left px-3 py-1.5 text-xs text-zinc-500 hover:bg-zinc-900 hover:text-white font-mono">System Manual</button>
                                            <button onClick={() => insertTemplate(COURSE_TEMPLATE)} className="block w-full text-left px-3 py-1.5 text-xs text-zinc-500 hover:bg-zinc-900 hover:text-white font-mono">Course Module</button>
                                            <button onClick={() => insertTemplate(BUG_REPORT_TEMPLATE)} className="block w-full text-left px-3 py-1.5 text-xs text-zinc-500 hover:bg-zinc-900 hover:text-white font-mono">Bug Report</button>
                                        </div>
                                    </div>
                                )}

                                {!activeNote.is_system && (
                                    <>
                                        <div className="h-4 w-px bg-zinc-800" />
                                        <button onClick={() => handleUpdateNote(activeNoteId, {})} className="text-zinc-500 hover:text-cyan-400 transition-colors" title="Save"><RiSave3Line size={18} /></button>
                                        <button onClick={() => { if (confirm('Purge data?')) { deleteNote(activeNote.id); setActiveNoteId(null); } }} className="text-red-500/50 hover:text-red-400" title="Delete"><RiDeleteBinLine size={18} /></button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Editor Content - FULLSCREEN */}
                        <div className="flex-1 flex overflow-hidden min-h-0">
                            {(viewMode === 'edit' || viewMode === 'split') && (
                                <textarea
                                    value={activeNote.content || ''}
                                    readOnly={activeNote.is_system}
                                    onChange={(e) => handleUpdateNote(activeNote.id, { content: e.target.value })}
                                    className={clsx(
                                        "flex-1 bg-[#0a0a0a] p-6 resize-none focus:outline-none text-sm font-mono leading-relaxed scrollbar-cyber",
                                        viewMode === 'split' && "border-r border-zinc-800",
                                        activeNote.is_system ? "text-zinc-600 cursor-text" : "text-zinc-300"
                                    )}
                                    placeholder="// INITIALIZE.CONTENT..."
                                    spellCheck={false}
                                />
                            )}

                            {(viewMode === 'preview' || viewMode === 'split') && (
                                <div className="flex-1 bg-[#0a0a0a] p-8 overflow-y-auto scrollbar-cyber prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-strong:text-zinc-200 prose-code:text-zinc-300 prose-a:text-cyan-400">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            code({ node, inline, className, children, ...props }) {
                                                const match = /language-(\w+)/.exec(className || '')
                                                return !inline && match ? (
                                                    <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" {...props}>
                                                        {String(children).replace(/\n$/, '')}
                                                    </SyntaxHighlighter>
                                                ) : (
                                                    <code className={clsx(className, "bg-zinc-900 px-1 py-0.5 text-zinc-300 font-mono text-xs")} {...props}>{children}</code>
                                                )
                                            }
                                        }}
                                    >
                                        {activeNote.content || ''}
                                    </ReactMarkdown>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* MODAL */}
            {modalConfig && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-black border border-zinc-800 p-6 w-80 shadow-2xl">
                        <div className="text-xs font-mono uppercase text-zinc-500 mb-3 tracking-[0.15em]">
                            {modalConfig.type === 'create_folder' ? 'NEW.DIRECTORY' : 'RENAME'}
                        </div>
                        <input
                            autoFocus
                            value={inputBuffer}
                            onChange={e => setInputBuffer(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleCreateFolder()}
                            className="w-full bg-black border border-zinc-800 p-2 text-sm text-white focus:border-cyan-500 focus:outline-none mb-4 font-mono"
                        />
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setModalConfig(null)} className="px-3 py-1 text-xs text-zinc-600 hover:text-white font-mono">CANCEL</button>
                            <button onClick={handleCreateFolder} className="px-3 py-1 bg-zinc-800 text-white text-xs font-mono uppercase hover:bg-zinc-700">CONFIRM</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
