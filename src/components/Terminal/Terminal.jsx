import { useState, useRef, useEffect } from 'react';
import { useVirtualGit } from '../../hooks/useVirtualGit';

export default function Terminal({ files, setFiles, folders, setFolders, onStateChange }) {
    const { history, executeCommand, gitState, cwd } = useVirtualGit(files, setFiles, folders, setFolders);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // Sync state back to parent (for validation)
    useEffect(() => {
        if (onStateChange) {
            // Pass internal state, history, AND virtual files/folders for deep validation
            onStateChange({ ...gitState, history, files, folders });
        }
    }, [gitState, history, files, folders, onStateChange]);

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
            className="h-full w-full bg-black flex flex-col font-mono text-sm p-4 overflow-hidden relative border-l border-cyan-500/10"
            onClick={handleContainerClick}
        >
            {/* CRT Overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(34,211,238,0.02)_1px,rgba(34,211,238,0.02)_2px)] pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-gradient(circle, transparent 60%, black 100%) pointer-events-none z-10 opacity-60" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 select-none border-b border-cyan-500/10 pb-2 relative z-20">
                <div className="flex gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] text-cyan-500/50 font-bold uppercase tracking-[0.2em]">BASH_SEQUENCE_INIT</div>
            </div>

            {/* Output Area */}
            <div className="flex-1 overflow-y-auto min-h-0 space-y-1 scrollbar-thin scrollbar-thumb-cyan-900/30 scrollbar-track-transparent custom-scrollbar relative z-0">
                {history.map((line, i) => (
                    <div key={i} className={`${line.type === 'error' ? 'text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]' : line.type === 'warn' ? 'text-yellow-400' : 'text-zinc-300 drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]'} whitespace-pre-wrap leading-tight`}>
                        {/* Command Line Styling */}
                        {line.type === 'command' ? (
                            <div className="flex items-center gap-2 opacity-80 mt-2 mb-1">
                                <span className="text-green-500 font-bold">➜</span>
                                {/* Extract path from history command string which is formatted as "path $ command" */}
                                <span className="text-cyan-500">{line.content.split('$')[0].trim()}</span>
                                <span className="text-zinc-600">$</span>
                                <span className="text-white font-bold">{line.content.split('$')[1]}</span>
                            </div>
                        ) : (
                            /* Handling color codes manually for simplicity */
                            line.content.includes('\x1b') ? (
                                <span dangerouslySetInnerHTML={{
                                    __html: line.content
                                        .replace(/\x1b\[32m/g, '<span class="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">')
                                        .replace(/\x1b\[31m/g, '<span class="text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]">')
                                        .replace(/\x1b\[33m/g, '<span class="text-yellow-300 font-bold drop-shadow-[0_0_5px_rgba(253,224,71,0.5)]">')
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
            <div className="flex items-center gap-2 text-zinc-300 mt-2 relative z-20">
                {gitState.rebaseMode ? (
                    <span className="text-yellow-400 font-bold tracking-wider">[REBASE_MODE]</span>
                ) : (
                    <>
                        <span className="text-green-500 font-bold">➜</span>
                        <span className="text-cyan-500">{cwd}</span>
                        <span className="text-zinc-600">$</span>
                    </>
                )}
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-green-400 font-inherit caret-green-500 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]"
                    autoFocus
                    spellCheck="false"
                    autoComplete="off"
                />
            </div>
        </div>
    );
}
