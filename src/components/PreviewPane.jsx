import { useMemo } from 'react';
import { Terminal, XCircle, AlertTriangle, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

// PreviewPane simply renders the compiled code provided by the parent
// All script injection is now handled in LearningLayout.jsx

export default function PreviewPane({ compiledCode, isConsoleOpen, consoleLogs }) {
    return (
        <div className="h-full flex flex-col bg-black">
            {/* Browser/Preview Area */}
            <div className="flex-1 relative bg-white overflow-hidden">
                {/* Cyberpunk Browser Frame */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black border-b border-cyan-500/10 flex items-center px-4 justify-between z-10">
                    <div className="flex gap-1.5 opacity-50">
                        <div className="w-3 h-1 bg-red-500/20 border border-red-500/50 skew-x-12" />
                        <div className="w-3 h-1 bg-yellow-500/20 border border-yellow-500/50 skew-x-12" />
                        <div className="w-3 h-1 bg-green-500/20 border border-green-500/50 skew-x-12" />
                    </div>
                    <div className="text-[10px] text-cyan-500/50 font-mono tracking-widest uppercase">
                        LOCALHOST:3000
                    </div>
                    <div className="w-4 h-4 rounded-full border border-cyan-500/10" />
                </div>

                <iframe
                    key={compiledCode}
                    title="preview"
                    srcDoc={compiledCode}
                    className="absolute inset-x-0 bottom-0 top-8 w-full h-[calc(100%-32px)] border-none bg-white"
                    sandbox="allow-scripts"
                />
            </div>

            {/* Terminal Area */}
            {isConsoleOpen && (
                <div className="h-[40%] bg-black border-t border-cyan-500/20 flex flex-col font-mono relative">
                    {/* CRT Overlay */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(34,211,238,0.02)_1px,rgba(34,211,238,0.02)_2px)] pointer-events-none z-10" />

                    <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-500/10 bg-black text-[10px] uppercase tracking-[0.2em] select-none relative z-20">
                        <div className="flex items-center gap-2 text-cyan-500/70">
                            <Terminal size={12} />
                            <span>TERMINAL_OUTPUT_STREAM</span>
                        </div>
                        <div className="text-zinc-700 font-bold">
                            NODE_v18.16.0
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar relative z-20">
                        {consoleLogs.length === 0 && (
                            <div className="text-cyan-900/50 italic text-[10px] tracking-widest">
                                // AWAITING_OUTPUT_SIGNAL...
                            </div>
                        )}
                        {consoleLogs.map((log, i) => {
                            const level = typeof log === 'object' ? log.level : 'log';
                            const message = typeof log === 'object' ? log.message : String(log);

                            return (
                                <div key={i} className="flex items-start gap-2 text-xs font-mono group hover:bg-white/5 -mx-4 px-4 py-0.5 transition-colors">
                                    <div className="mt-0.5 shrink-0 opacity-70">
                                        {level === 'error' ? (
                                            <XCircle size={12} className="text-red-500" />
                                        ) : level === 'warn' ? (
                                            <AlertTriangle size={12} className="text-yellow-500" />
                                        ) : (
                                            <ChevronRight size={12} className="text-cyan-500" />
                                        )}
                                    </div>
                                    <span className={clsx(
                                        "break-all whitespace-pre-wrap leading-relaxed",
                                        level === 'error' ? "text-red-400 drop-shadow-[0_0_2px_rgba(248,113,113,0.5)]" :
                                            level === 'warn' ? "text-yellow-400" :
                                                "text-zinc-300"
                                    )}>
                                        {message}
                                    </span>
                                </div>
                            );
                        })}
                        <div className="flex items-center gap-2 text-cyan-500/50 text-xs pt-1 animate-pulse">
                            <ChevronRight size={12} />
                            <div className="w-2 h-4 bg-cyan-500/50" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
