import { useEffect, useState } from 'react';
import Editor, { useMonaco, loader } from '@monaco-editor/react';
import clsx from 'clsx';

loader.config({
    paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
    }
});

export default function EditorComponent({ files, setFiles, folders, setFolders, activeFile, onFileChange, onCodeChange }) {
    const monaco = useMonaco();
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [useFallback, setUseFallback] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [newFileName, setNewFileName] = useState('');
    const [isCreatingFile, setIsCreatingFile] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isEditorReady) {
                console.warn('Monaco Editor loading timeout, using fallback textarea');
                setUseFallback(true);
            }
        }, 8000);
        return () => clearTimeout(timeout);
    }, [isEditorReady]);

    // ZeroCode Dark Theme (Same as before)
    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('zerocode-dark', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: 'comment', foreground: '6b7280', fontStyle: 'italic' },
                    { token: 'keyword', foreground: 'c084fc' },
                    { token: 'identifier', foreground: '67e8f9' },
                    { token: 'string', foreground: 'a3e635' },
                    { token: 'number', foreground: 'fb923c' },
                ],
                colors: {
                    'editor.background': '#09090b',
                    'editor.foreground': '#e5e5e5',
                    'editorCursor.foreground': '#3b82f6',
                    'editor.lineHighlightBackground': '#18181b',
                    'editorLineNumber.foreground': '#52525b',
                    'editor.selectionBackground': '#27272a',
                    'editor.inactiveSelectionBackground': '#27272a'
                }
            });
            monaco.editor.setTheme('zerocode-dark');
        }
    }, [monaco]);

    const handleEditorChange = (value) => {
        onCodeChange(activeFile, value);
    };

    const handleTextareaChange = (e) => {
        onCodeChange(activeFile, e.target.value);
    };

    const createFile = (e) => {
        e.preventDefault();
        if (!newFileName) return;
        if (files.some(f => f.name === newFileName)) {
            alert('File already exists');
            return;
        }
        // Add file
        if (setFiles) {
            setFiles(prev => [...prev, { name: newFileName, content: '', path: newFileName }]);
            onFileChange(newFileName);
            setNewFileName('');
            setIsCreatingFile(false);
        }
    };

    return (
        <div className="h-full flex bg-[#0a0a0a] border-r border-white/10 font-sans">
            {/* File Explorer Sidebar */}
            {isSidebarOpen && (
                <div className="w-48 bg-[#050505] border-r border-white/5 flex flex-col">
                    <div className="p-3 text-xs font-bold text-gray-400 tracking-wider flex items-center justify-between">
                        <span>EXPLORER</span>
                        <div className="flex gap-1">
                            <button
                                onClick={() => setIsCreatingFile(true)}
                                className="hover:text-white p-1 rounded hover:bg-white/10"
                                title="New File"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                            </button>
                        </div>
                    </div>

                    {/* New File Input */}
                    {isCreatingFile && (
                        <form onSubmit={createFile} className="px-2 mb-2">
                            <input
                                autoFocus
                                type="text"
                                value={newFileName}
                                onChange={e => setNewFileName(e.target.value)}
                                onBlur={() => setIsCreatingFile(false)}
                                placeholder="filename.js"
                                className="w-full bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded border border-blue-500 outline-none"
                            />
                        </form>
                    )}

                    <div className="flex-1 overflow-y-auto">
                        {/* Folders (Simplified Mock View) */}
                        {folders && folders.map(folder => (
                            <div key={folder} className="px-3 py-1 text-xs text-blue-400 flex items-center gap-2 cursor-pointer hover:bg-white/5">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
                                {folder}
                            </div>
                        ))}

                        {/* Files */}
                        {files.map((file) => (
                            <button
                                key={file.name}
                                onClick={() => onFileChange(file.name)}
                                className={clsx(
                                    "w-full px-3 py-1.5 text-xs text-left flex items-center gap-2 transition-colors",
                                    file.name === activeFile
                                        ? "bg-[#1a1a1a] text-white border-l-2 border-blue-500"
                                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                                )}
                            >
                                <span className="opacity-75">
                                    {file.name.endsWith('.js') ? 'JS' : file.name.endsWith('.html') ? '<>' : file.name.endsWith('.css') ? '#' : 'TXT'}
                                </span>
                                {file.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Editor Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Simplified Tabs / Breadcrumbs */}
                <div className="flex bg-[#0a0a0a] border-b border-white/5 h-9 items-center px-4 justify-between">
                    <div className="text-xs text-gray-400 flex items-center gap-2">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:text-white mr-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <span>{activeFile}</span>
                    </div>
                </div>

                <div className="flex-1 relative">
                    {useFallback ? (
                        <textarea
                            value={files.find(f => f.name === activeFile)?.content || ''}
                            onChange={handleTextareaChange}
                            className="w-full h-full p-4 bg-[#0a0a0a] text-white font-mono text-sm resize-none focus:outline-none"
                            spellCheck="false"
                            style={{ tabSize: 2, lineHeight: '1.6' }}
                        />
                    ) : (
                        <Editor
                            height="100%"
                            theme="zerocode-dark"
                            path={activeFile}
                            defaultLanguage={activeFile.endsWith('.html') ? 'html' : activeFile.endsWith('.css') ? 'css' : 'javascript'}
                            defaultValue={files.find(f => f.name === activeFile)?.content || ''}
                            value={files.find(f => f.name === activeFile)?.content || ''}
                            onChange={handleEditorChange}
                            onMount={() => setIsEditorReady(true)}
                            loading={
                                <div className="h-full flex items-center justify-center bg-[#0a0a0a] text-gray-400">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                                        <p className="text-sm">Loading Editor...</p>
                                    </div>
                                </div>
                            }
                            options={{
                                quickSuggestions: false,
                                parameterHints: { enabled: false },
                                suggestOnTriggerCharacters: false,
                                acceptSuggestionOnEnter: "off",
                                tabCompletion: "off",
                                wordBasedSuggestions: "off",
                                hover: { enabled: false },
                                minimap: { enabled: false },
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 13, // Slightly smaller
                                lineHeight: 22,
                                padding: { top: 16 },
                                scrollBeyondLastLine: false,
                                cursorBlinking: 'smooth',
                                cursorSmoothCaretAnimation: 'on',
                                smoothScrolling: true
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
