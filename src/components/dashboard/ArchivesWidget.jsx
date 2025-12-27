import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiDatabase2Line, RiExternalLinkLine, RiExpandUpDownLine, RiSubtractLine, RiFileTextLine, RiHardDriveLine } from 'react-icons/ri';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotes } from '../../contexts/NotesProvider';

export default function ArchivesWidget() {
    const navigate = useNavigate();
    const { notes, loading } = useNotes();
    const [isExpanded, setIsExpanded] = useState(false);

    const recentNotes = notes.slice(0, 3);

    return (
        <motion.div
            layout
            className={clsx(
                "relative transition-all duration-300 group overflow-hidden",
                !isExpanded ? "bg-black" : "bg-zinc-950"
            )}
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
            }}
        >
            {/* Top Edge Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-500/30 z-30" />

            {/* Hardware Brackets */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/20 z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/20 z-30 pointer-events-none" />

            {/* Structural Border */}
            <div className="absolute inset-0 border border-zinc-800/50 pointer-events-none" />

            {/* Left Indicator - V3 Minimalist */}
            <div className={clsx(
                "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 z-30",
                isExpanded ? "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" : "bg-zinc-800"
            )} />

            {/* Header Section */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full h-[72px] flex items-center justify-between px-4 relative z-20 cursor-pointer select-none"
            >
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Icon Tile - Cyber-Slat V3 */}
                    <div
                        className={clsx(
                            "w-12 h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 relative overflow-hidden",
                            !isExpanded
                                ? "bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/50"
                                : "bg-cyan-950/20 border border-cyan-500/40 shadow-[inset_0_0_20px_rgba(6,182,212,0.15)]"
                        )}
                    >
                        {/* Hardware Corner Ticks */}
                        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-cyan-500/40" />
                        <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-cyan-500/40" />

                        {/* Scanline Animation Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(6,182,212,1)_1px,rgba(6,182,212,1)_2px)] bg-[length:100%_2px]" />
                        <div
                            className="absolute inset-0 w-full h-[2px] bg-cyan-400/20 blur-[1px] z-10"
                            style={{ animation: 'scan 4s linear infinite' }}
                        />

                        {/* Radial Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

                        <RiDatabase2Line
                            size={24}
                            className={clsx(
                                "transition-colors duration-300 relative z-20",
                                !isExpanded ? "text-zinc-500 group-hover:text-cyan-400" : "text-cyan-400"
                            )}
                        />
                    </div>

                    {/* Text Content - Animated Visibility */}
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col min-w-0"
                            >
                                <h3 className="font-black font-mono text-[13px] uppercase tracking-tighter text-white leading-none truncate">
                                    VAULT_TERM
                                </h3>
                                <span className="text-[9px] font-mono uppercase text-cyan-500/60 mt-1 tracking-widest leading-none truncate">
                                    // ARCHIVE_SYNC
                                </span>
                            </motion.div>
                        ) : (
                            <motion.div key="collapsed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                <h3 className="font-bold font-mono text-[10px] uppercase tracking-tighter text-white/50 leading-none truncate">VAULT_TERM</h3>
                                <div className="flex items-center gap-1.5 mt-1 border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md px-1.5 py-0.5 rounded-sm w-fit">
                                    <span className="text-[8px] font-mono text-cyan-500/70 uppercase font-bold">FILES</span>
                                    <span className="text-[10px] font-black text-cyan-400 leading-none">{notes.length}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                    <div className="flex items-center gap-2">
                        {isExpanded && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate('/archives'); }}
                                className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:bg-cyan-950/30 text-zinc-500 hover:text-cyan-400"
                                title="Open Archives"
                            >
                                <RiExternalLinkLine size={16} />
                            </button>
                        )}
                        <button
                            onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                            className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:bg-cyan-950/30 text-zinc-500 hover:text-cyan-400"
                        >
                            {isExpanded ? <RiSubtractLine size={16} /> : <RiExpandUpDownLine size={16} />}
                        </button>
                    </div>
                </div>

                {/* Status Dot */}
                {!isExpanded && (
                    <div className="absolute top-2 right-2 flex items-center justify-center w-2 h-2">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(6,182,212,1)]" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className={clsx(
                "relative transition-all duration-300 ease-in-out overflow-hidden bg-zinc-950",
                !isExpanded ? "max-h-0 opacity-0" : "max-h-[800px] opacity-100"
            )}>
                <div className="min-h-[200px] border-t border-zinc-900 relative">
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,rgba(6,182,212,1)_50%)] bg-[length:100%_4px]" />
                    <div className="p-6 relative z-10">
                        <div className="flex flex-col h-full space-y-4">
                            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/50 border-dashed">
                                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">// RECENT_ENTRIES</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-cyan-600 font-mono font-bold">{notes.length} RECORDS</span>
                                    <RiHardDriveLine size={12} className="text-cyan-600" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                {loading ? (
                                    <div className="text-[10px] font-mono text-cyan-700 animate-pulse">// SYNCING_DATA_STREAM...</div>
                                ) : (
                                    recentNotes.map(note => (
                                        <div
                                            key={note.id}
                                            className="group/item relative flex items-center gap-3 p-3 bg-zinc-900/30 border border-zinc-800/50 hover:bg-cyan-950/10 hover:border-cyan-500/30 transition-all cursor-pointer overflow-hidden"
                                            onClick={() => navigate(`/archives?id=${note.id}`)}
                                        >
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-800 group-hover/item:bg-cyan-500 transition-colors" />
                                            <RiFileTextLine size={14} className="text-zinc-600 group-hover/item:text-cyan-400 transition-colors" />
                                            <span className="text-xs font-mono text-zinc-400 group-hover/item:text-cyan-100 truncate flex-1 tracking-tight">{note.title}</span>
                                            <span className="text-[9px] text-zinc-600 font-mono tabular-nums opacity-70">
                                                {new Date(note.last_modified).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' })}
                                            </span>
                                        </div>
                                    ))
                                )}
                                {recentNotes.length === 0 && !loading && (
                                    <div className="text-[10px] font-mono text-zinc-600 italic py-4 text-center border border-dashed border-zinc-800 rounded bg-zinc-900/20">
                                        // NO_DATA_STREAM_DETECTED
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => navigate('/archives')}
                                className="w-full mt-2 group/btn relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-400 font-bold py-3 px-4 transition-all text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 font-mono"
                            >
                                <div className="absolute inset-0 bg-cyan-500/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                <RiExternalLinkLine size={14} />
                                <span className="relative z-10">ACCESS_FULL_VAULT</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className={clsx("absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors", !isExpanded ? "border-zinc-800" : "border-cyan-500")} />
            <div className={clsx("absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors", !isExpanded ? "border-zinc-800" : "border-cyan-500")} />
        </motion.div>
    );
}
