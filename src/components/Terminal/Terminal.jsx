import { useState, useRef, useEffect } from 'react';
import { useVirtualGit } from '../../hooks/useVirtualGit';

export default function Terminal({ files, setFiles, folders, setFolders, onStateChange }) {
    const { history, executeCommand, gitState } = useVirtualGit(files, setFiles, folders, setFolders);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // Sync state back to parent (for validation)
    useEffect(() => {
        if (onStateChange) {
            // Pass both git internal state AND terminal history for validation
            onStateChange({ ...gitState, history });
        }
    }, [gitState, history, onStateChange]);

    // Auto-scroll logic
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Focus input on click
    const handleContainerClick = () => {
        inputRef.current?.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            executeCommand(input);
            setInput('');
        }
    };

    return (
        <div
            className="h-full w-full bg-[#0c0c0c] flex flex-col font-mono text-sm p-4 overflow-hidden" // JetBrains Mono font handled by global CSS usually
            onClick={handleContainerClick}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 select-none opacity-50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs">bash — 80x24</div>
            </div>

            {/* Output Area */}
            <div className="flex-1 overflow-y-auto min-h-0 space-y-1 scrollbar-thin scrollbar-thumb-white/10">
                {history.map((line, i) => (
                    <div key={i} className={`${line.type === 'error' ? 'text-red-400' : line.type === 'warn' ? 'text-yellow-400' : 'text-slate-300'} whitespace-pre-wrap leading-tight`}>
                        {/* Command Line Styling */}
                        {line.type === 'command' ? (
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 font-bold">➜</span>
                                <span className="text-cyan-400">~/project</span>
                                <span className="text-slate-500">$</span>
                                <span className="text-white">{line.content.split('$')[1]}</span>
                            </div>
                        ) : (
                            /* Handling color codes manually for simplicity */
                            line.content.includes('\x1b') ? (
                                <span dangerouslySetInnerHTML={{
                                    __html: line.content
                                        .replace(/\x1b\[32m/g, '<span class="text-green-400">')
                                        .replace(/\x1b\[31m/g, '<span class="text-red-400">')
                                        .replace(/\x1b\[34m/g, '<span class="text-blue-400 font-bold">')
                                        .replace(/\x1b\[0m/g, '</span>')
                                }} />
                            ) : (
                                line.content
                            )
                        )}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <div className="flex items-center gap-2 text-slate-300 mt-2">
                <span className="text-green-400 font-bold">➜</span>
                <span className="text-cyan-400">~/project</span>
                <span className="text-slate-500">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-white font-inherit caret-white"
                    autoFocus
                    spellCheck="false"
                    autoComplete="off"
                />
            </div>
        </div>
    );
}
