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
        <div className="h-full flex flex-col bg-[#0c0c0c] font-mono text-sm border-l border-[#2d2d2d]">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#2d2d2d] bg-[#1a1a1a]">
                <div className="flex items-center gap-2 text-gray-400 select-none">
                    <TerminalIcon size={14} />
                    <span className="text-xs uppercase tracking-wider font-semibold">Python Console</span>
                    <span className={clsx(
                        "text-[10px] px-1.5 py-0.5 rounded-full border",
                        status === 'Ready'
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : status === 'Running...'
                                ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    )}>
                        {status}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={clearOutput}
                        className="p-1.5 text-gray-400 hover:text-white hover:bg-[#2d2d2d] rounded transition-colors"
                        title="Clear Console"
                    >
                        <RotateCcw size={14} />
                    </button>
                    <button
                        onClick={handleRun}
                        disabled={isRunning}
                        className={clsx(
                            "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all",
                            isRunning
                                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20"
                        )}
                    >
                        <Play size={12} fill="currentColor" />
                        {isRunning ? 'Running...' : 'Run Code'}
                    </button>
                </div>
            </div>

            {/* Output Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
                {output.length === 0 && (
                    <div className="text-gray-600 italic">
                        Click "Run Code" to start executing...
                    </div>
                )}

                {output.map((line, i) => (
                    <div key={i} className={clsx(
                        "whitespace-pre-wrap break-words leading-relaxed",
                        line.type === 'stderr' ? "text-red-400" : "text-gray-300"
                    )}>
                        {line.content}
                    </div>
                ))}

                {/* Status Indicator at bottom */}
                {isRunning && (
                    <div className="flex items-center gap-2 text-gray-500 mt-2 animate-pulse">
                        <span className="w-2 h-4 bg-gray-500 block"></span>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>
        </div>
    );
}
