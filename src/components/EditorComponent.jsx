import React from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import clsx from 'clsx';
import { useEffect } from 'react';

export default function EditorComponent({ files, activeFile, onFileChange, onCodeChange }) {
    const monaco = useMonaco();

    // Define Custom 'PULSE' Theme
    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('pulse-theme', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
                    { token: 'keyword', foreground: 'ff79c6' },
                    { token: 'identifier', foreground: '8be9fd' },
                    { token: 'string', foreground: 'f1fa8c' },
                    { token: 'number', foreground: 'bd93f9' },
                ],
                colors: {
                    'editor.background': '#0a192f', // PresUniv Navy
                    'editor.foreground': '#f8f8f2',
                    'editorCursor.foreground': '#ff0000', // Maroon Cursor
                    'editor.lineHighlightBackground': '#112240',
                    'editorLineNumber.foreground': '#485e80',
                    'editor.selectionBackground': '#233554',
                    'editor.inactiveSelectionBackground': '#112240'
                }
            });
            monaco.editor.setTheme('pulse-theme');
        }
    }, [monaco]);

    const handleEditorChange = (value) => {
        onCodeChange(activeFile, value);
    };

    return (
        <div className="h-full flex flex-col bg-[#0a192f] border-r border-[#1e293b]">
            {/* File Tabs */}
            <div className="flex bg-[#020c1b] overflow-x-auto border-b border-[#1e293b]">
                {files.map((file) => (
                    <button
                        key={file.name}
                        onClick={() => onFileChange(file.name)}
                        className={clsx(
                            "px-5 py-2.5 text-xs font-mono border-r border-[#1e293b] flex items-center space-x-2 focus:outline-none transition-all duration-200",
                            file.name === activeFile
                                ? "bg-[#0a192f] text-white border-t-2 border-t-red-500" // Active Tab
                                : "bg-[#020c1b] text-gray-500 hover:text-gray-300 hover:bg-[#051124]" // Inactive Tab
                        )}
                    >
                        <span>{file.name}</span>
                    </button>
                ))}
            </div>

            {/* Editor Area */}
            <div className="flex-1 relative">
                <Editor
                    height="100%"
                    theme="pulse-theme"
                    path={activeFile}
                    defaultLanguage={activeFile.endsWith('.html') ? 'html' : activeFile.endsWith('.css') ? 'css' : 'javascript'}
                    defaultValue={files.find(f => f.name === activeFile)?.content || ''}
                    value={files.find(f => f.name === activeFile)?.content || ''}
                    onChange={handleEditorChange}
                    loading={
                        <div className="h-full flex items-center justify-center bg-[#0a192f] text-gray-400">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                                <p>Loading Editor...</p>
                            </div>
                        </div>
                    }
                    options={{
                        // Disable all hints/suggestions as requested
                        quickSuggestions: false,
                        parameterHints: { enabled: false },
                        suggestOnTriggerCharacters: false,
                        acceptSuggestionOnEnter: "off",
                        tabCompletion: "off",
                        wordBasedSuggestions: false,
                        hover: { enabled: false }, // No hover docs

                        // Visual Polish
                        minimap: { enabled: false },
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 14,
                        lineHeight: 24,
                        padding: { top: 20 },
                        scrollBeyondLastLine: false,
                        cursorBlinking: 'smooth',
                        cursorSmoothCaretAnimation: 'on',
                        smoothScrolling: true
                    }}
                />
            </div>
        </div>
    );
}
