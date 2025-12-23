import { useEffect, useRef } from 'react';
import { Play, RotateCcw, Terminal as TerminalIcon } from 'lucide-react';
import clsx from 'clsx';
import { usePythonRunner } from '../../hooks/usePythonRunner';

export default function PythonTerminal({ files, onStateChange }) {
    const { runCode, output, status, isRunning, clearOutput } = usePythonRunner();
    const bottomRef = useRef(null);

    // Filter to find the main python file
    const pythonCode = files.find(f => f.name.endsWith('.py'))?.content || '';

    // Auto-scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [output]);

    const handleRun = () => {
        runCode(pythonCode);
    };

    return (
        <div className="h-full flex flex-col bg-black font-mono text-sm border-l border-cyan-500/10 relative overflow-hidden">
            {/* CRT Scanline Overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(34,211,238,0.02)_1px,rgba(34,211,238,0.02)_2px)] pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-gradient(circle, transparent 60%, black 100%) pointer-events-none z-10 opacity-50" />

            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-500/10 bg-black/90 relative z-20">
                <div className="flex items-center gap-2 text-cyan-500/50 select-none">
                    <TerminalIcon size={14} className="text-cyan-500" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-500">PYTHON_ENV_v3.11</span>
                    <span className={clsx(
                        "text-[9px] px-1.5 py-0.5 rounded-sm border uppercase tracking-wider",
                        status === 'Ready'
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : status === 'Running...'
                                ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                    )}>
                        {status.toUpperCase()}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={clearOutput}
                        className="p-1.5 text-zinc-500 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-sm transition-colors border border-transparent hover:border-cyan-500/20"
                        title="Clear Console"
                    >
                        <RotateCcw size={14} />
                    </button>
                    <button
                        onClick={handleRun}
                        disabled={isRunning}
                        className={clsx(
                            "flex items-center gap-2 px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all",
                            isRunning
                                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700"
                                : "bg-green-950/30 text-green-400 border border-green-500/30 hover:bg-green-900/50 hover:border-green-400 shadow-[0_0_10px_rgba(34,197,95,0.1)] hover:shadow-[0_0_15px_rgba(34,197,95,0.3)]"
                        )}
                    >
                        <Play size={10} fill="currentColor" />
                        {isRunning ? 'EXECUTING...' : 'RUN_CODE'}
                    </button>
                </div>
            </div>

            {/* Output Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar relative z-0">
                {output.length === 0 && (
                    <div className="text-cyan-900/50 italic text-xs font-mono tracking-widest uppercase mt-4 text-center">
                        // AWAITING_INPUT_SIGNAL...
                    </div>
                )}

                {output.map((line, i) => (
                    <div key={i} className={clsx(
                        "whitespace-pre-wrap break-words leading-relaxed font-mono drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]",
                        line.type === 'stderr'
                            ? "text-red-400 shadow-[0_0_5px_rgba(248,113,113,0.3)]"
                            : "text-green-400 shadow-[0_0_5px_rgba(74,222,128,0.3)]"
                    )}>
                        <span className="opacity-50 mr-2 select-none">{'>'}</span>
                        {line.content}
                    </div>
                ))}

                {/* Status Indicator at bottom */}
                {isRunning && (
                    <div className="flex items-center gap-2 mt-2">
                        <span className="w-2 h-4 bg-green-500/50 animate-pulse block box-shadow-[0_0_8px_green]"></span>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>
        </div>
    );
}
