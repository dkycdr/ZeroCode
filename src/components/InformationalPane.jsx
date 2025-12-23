import { useRef } from 'react';
import { RiDatabase2Line, RiArrowRightLine, RiTerminalLine, RiShieldLine, RiGitBranchLine } from 'react-icons/ri';
import MarkdownRenderer from './MarkdownRenderer';
import RealisticDNA from './RealisticDNA';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function InformationalPane({ item, onComplete }) {
    const scrollContainerRef = useRef(null);

    if (!item) return <div className="p-12 text-center text-cyan-500/50 font-mono animate-pulse">ACCESSING_DATA_ARCHIVES...</div>;

    return (
        <div className="h-full flex flex-col bg-black font-sans relative overflow-hidden selection:bg-cyan-500/30">
            {/* AMBIENT LAYERS */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-cyan-900/10 to-transparent" />
            </div>

            {/* MAIN CONTENT AREA */}
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto scrollbar-cyber relative z-10"
            >
                {/* BACKGROUND DNA - SCOPED */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <RealisticDNA />
                </div>

                {/* FLOATING PILL HEADER */}
                <div className="sticky top-3 z-30 px-6 w-full flex justify-center pointer-events-none">
                    <header className="px-5 py-2.5 bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] pointer-events-auto max-w-fit flex items-center gap-8 group hover:border-cyan-500/40 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 text-cyan-500 text-[7px] font-mono font-black uppercase tracking-[0.4em] mb-0.5 opacity-70">
                                    <RiDatabase2Line className="animate-pulse" />
                                    <span>DATA_ARCHIVE</span>
                                </div>
                                <h1
                                    className="text-sm md:text-base font-black text-white tracking-tight uppercase italic glitch-text whitespace-nowrap"
                                    data-text={item.title}
                                >
                                    {item.title}
                                </h1>
                            </div>

                            <div className="h-6 w-px bg-white/10" />

                            <div className="flex flex-col font-mono">
                                <span className="text-[7px] text-zinc-500 uppercase tracking-widest whitespace-nowrap leading-none mb-1">ID_{item.id?.substring(0, 6) || 'DD_64'}</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[7px] text-green-500/70 uppercase tracking-widest whitespace-nowrap leading-none">SECURE_LINK</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:flex gap-1 h-3 items-center">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className={clsx("w-0.5 h-full skew-x-12 transition-all duration-500", i < 3 ? "bg-cyan-500 group-hover:shadow-[0_0_8px_cyan]" : "bg-zinc-800")} style={{ transitionDelay: `${i * 100}ms` }} />
                            ))}
                        </div>
                    </header>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20 relative min-h-full flex flex-col items-center">

                    {/* SYSTEM STRIPS (LEFT & RIGHT) */}
                    <div className="absolute top-0 left-6 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden xl:block">
                        <div className="sticky top-12 py-10 space-y-24">
                            <DataStrip label="SECTOR_LOG" />
                            <DataStrip label="NET_ID_04" />
                            <DataStrip label="SIGNAL_STR" />
                        </div>
                    </div>
                    <div className="absolute top-0 right-6 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden xl:block">
                        <div className="sticky top-12 py-10 space-y-24">
                            <DataStrip label="AUTH_SYNC" flipped />
                            <DataStrip label="V_PROTO_X" flipped />
                            <DataStrip label="CORE_LOAD" flipped />
                        </div>
                    </div>

                    {/* TEXT BODY - WIDENED */}
                    <div className="w-full max-w-5xl relative">
                        {/* Decorative Corners for content */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white/5" />
                        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-white/5" />

                        <article className="prose prose-invert prose-lg max-w-none 
                            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-white prose-headings:uppercase prose-headings:italic
                            prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-cyan-500 prose-h2:pl-6 prose-h2:py-2 prose-h2:bg-cyan-500/5
                            prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:text-xl prose-p:font-light
                            prose-strong:text-cyan-400 prose-strong:font-bold
                            prose-li:text-zinc-300
                            prose-code:text-cyan-300 prose-code:bg-cyan-950/20 prose-code:px-1.5 prose-code:rounded-sm prose-code:border prose-code:border-cyan-500/20 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                            prose-ul:marker:text-cyan-500
                            prose-img:rounded-sm prose-img:border prose-img:border-cyan-500/20 prose-img:shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                            <MarkdownRenderer content={item.content} />
                        </article>

                        {/* FINAL ACKNOWLEDGMENT SECTION */}
                        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_cyan]" />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onComplete}
                                className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all clip-path-badge-informational"
                            >
                                <span className="flex items-center gap-4">
                                    CONSOLIDATE_MEMORY
                                    <RiArrowRightLine size={20} className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </motion.button>

                            <div className="mt-8 flex flex-col items-center gap-2">
                                <div className="flex gap-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 bg-cyan-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                    ))}
                                </div>
                                <span className="text-[10px] font-mono text-cyan-500/30 uppercase tracking-[0.4em]">SYSTEM_STABLE // SYNC_PENDING</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .clip-path-badge-informational {
                    clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
                }
                .scrollbar-cyber::-webkit-scrollbar {
                    width: 4px;
                }
                .scrollbar-cyber::-webkit-scrollbar-track {
                    background: transparent;
                }
                .scrollbar-cyber::-webkit-scrollbar-thumb {
                    background: #27272a;
                    border-radius: 2px;
                }
                .scrollbar-cyber::-webkit-scrollbar-thumb:hover {
                    background: #06b6d4;
                }
            `}</style>
        </div>
    );
}

function DataStrip({ label, flipped }) {
    return (
        <div className={clsx("flex flex-col items-center gap-12 font-mono opacity-20", flipped ? "items-end" : "items-start")}>
            <div className={clsx("text-[9px] uppercase tracking-[0.5em] [writing-mode:vertical-lr]", flipped && "rotate-180")}>
                {label}
            </div>
            <div className="space-y-1">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={clsx("h-[1px] bg-white", i % 2 === 0 ? "w-4" : "w-2")} />
                ))}
            </div>
        </div>
    );
}
