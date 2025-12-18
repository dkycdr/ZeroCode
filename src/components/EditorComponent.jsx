import { useEffect, useState } from 'react';
import Editor, { useMonaco, loader } from '@monaco-editor/react';
import clsx from 'clsx';

loader.config({
    paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
    }
});

export default function EditorComponent({ files, activeFile, onFileChange, onCodeChange }) {
    const monaco = useMonaco();
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [useFallback, setUseFallback] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isEditorReady) {
                console.warn('Monaco Editor loading timeout, using fallback textarea');
                setUseFallback(true);
            }
        }, 8000);
        return () => clearTimeout(timeout);
    }, [isEditorReady]);

    // ZeroCode Dark Theme
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
                    'editor.background': '#0a0a0a',
                    'editor.foreground': '#e5e5e5',
                    'editorCursor.foreground': '#ffffff',
                    'editor.lineHighlightBackground': '#111111',
                    'editorLineNumber.foreground': '#404040',
                    'editor.selectionBackground': '#333333',
                    'editor.inactiveSelectionBackground': '#222222'
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

    return (
        <div className="h-full flex flex-col bg-[#0a0a0a] border-r border-white/10">
            {/* File Tabs */}
            <div className="flex bg-[#050505] overflow-x-auto border-b border-white/10">
                {files.map((file) => (
                    <button
                        key={file.name}
                        onClick={() => onFileChange(file.name)}
                        className={clsx(
                            "px-4 py-2.5 text-xs font-mono border-r border-white/5 flex items-center focus:outline-none transition-all",
                            file.name === activeFile
                                ? "bg-[#0a0a0a] text-white border-t-2 border-t-white"
                                : "bg-[#050505] text-gray-500 hover:text-gray-300 hover:bg-[#0a0a0a]"
                        )}
                    >
                        <span>{file.name}</span>
                    </button>
                ))}
            </div>

            {/* Editor Area */}
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
                            fontSize: 14,
                            lineHeight: 24,
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
    );
}
