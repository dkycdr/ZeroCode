import { useMemo } from 'react';
import { Terminal, XCircle, AlertTriangle, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

// PreviewPane simply renders the compiled code provided by the parent
// All script injection is now handled in LearningLayout.jsx

export default function PreviewPane({ compiledCode, isConsoleOpen, consoleLogs }) {
    return (
        <div className="h-full flex flex-col bg-[#0a0a0a]">
            {/* Browser/Preview Area */}
            <div className="flex-1 relative bg-white">
                <div className="absolute top-0 left-0 right-0 h-6 bg-[#f1f1f1] border-b border-[#ddd] flex items-center px-2 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <div className="mx-auto text-[10px] text-gray-500 font-sans">localhost:3000</div>
                </div>
                <iframe
                    key={compiledCode}
                    title="preview"
                    srcDoc={compiledCode}
                    className="absolute inset-x-0 bottom-0 top-6 w-full h-[calc(100%-24px)] border-none"
                    sandbox="allow-scripts"
                />
            </div>

            {/* Terminal Area */}
            {isConsoleOpen && (
                <div className="h-[40%] bg-[#1e1e1e] border-t border-[#2d2d2d] flex flex-col font-mono">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-[#2d2d2d] bg-[#1e1e1e] text-[11px] uppercase tracking-wider select-none">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Terminal size={12} />
                            <span>TERMINAL</span>
                        </div>
                        <div className="text-gray-500">
                            node v18.16.0
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
                        {consoleLogs.length === 0 && (
                            <div className="text-gray-500 italic text-xs">Waiting for output...</div>
                        )}
                        {consoleLogs.map((log, i) => {
                            const level = typeof log === 'object' ? log.level : 'log';
                            const message = typeof log === 'object' ? log.message : String(log);

                            return (
                                <div key={i} className="flex items-start gap-2 text-xs font-mono group hover:bg-[#2a2a2a] -mx-4 px-4 py-0.5">
                                    <div className="mt-0.5 shrink-0">
                                        {level === 'error' ? (
                                            <XCircle size={12} className="text-red-500" />
                                        ) : level === 'warn' ? (
                                            <AlertTriangle size={12} className="text-yellow-500" />
                                        ) : (
                                            <ChevronRight size={12} className="text-blue-500" />
                                        )}
                                    </div>
                                    <span className={clsx(
                                        "break-all whitespace-pre-wrap",
                                        level === 'error' ? "text-red-400" :
                                            level === 'warn' ? "text-yellow-400" :
                                                "text-gray-300"
                                    )}>
                                        {message}
                                    </span>
                                </div>
                            );
                        })}
                        <div className="flex items-center gap-2 text-gray-500 text-xs pt-1 animate-pulse">
                            <ChevronRight size={12} />
                            <div className="w-2 h-4 bg-gray-500" />
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}
