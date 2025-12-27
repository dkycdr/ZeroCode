import { useEffect, useState, useMemo } from 'react';
import Editor, { useMonaco, loader } from '@monaco-editor/react';
import clsx from 'clsx';
import {
    Folder,
    FileCode,
    ChevronRight,
    ChevronDown,
    FilePlus,
    Search
} from 'lucide-react';

loader.config({
    paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
    }
});

// Helper to build tree from flat paths
const buildFileTree = (files, folders) => {
    const root = {};

    // Ensure all explicitly defined folders exist in the tree
    folders.forEach(folderPath => {
        const parts = folderPath.split('/');
        let current = root;
        parts.forEach((part, index) => {
            if (!current[part]) {
                current[part] = {
                    name: part,
                    path: parts.slice(0, index + 1).join('/'),
                    type: 'folder',
                    children: {}
                };
            }
            current = current[part].children;
        });
    });

    // Add files to the tree
    files.forEach(file => {
        const parts = file.name.split('/');
        const fileName = parts.pop();
        let current = root;

        parts.forEach((part, index) => {
            // If a file is in a folder that wasn't in 'folders' array (shouldn't happen but good safety)
            if (!current[part]) {
                current[part] = {
                    name: part,
                    path: parts.slice(0, index + 1).join('/'),
                    type: 'folder',
                    children: {}
                };
            }
            current = current[part].children;
        });

        current[fileName] = {
            name: fileName,
            path: file.name,
            type: 'file',
            originalFile: file
        };
    });

    return root;
};

// Recursive Tree Item Component
const FileTreeItem = ({ node, level, activeFile, activeFolder, expandedFolders, onToggleFolder, onFileClick, onFolderClick }) => {
    const isExpanded = expandedFolders[node.path];
    const isSelected = activeFile === node.path;
    const isFolderSelected = activeFolder === node.path;

    // Indentation
    const paddingLeft = `${level * 12 + 12}px`;

    if (node.type === 'folder') {
        const children = Object.values(node.children).sort((a, b) => {
            // Folders first, then files
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === 'folder' ? -1 : 1;
        });

        return (
            <div>
                <div
                    className={clsx(
                        "flex items-center gap-1 py-1 pr-2 cursor-pointer select-none transition-colors text-xs",
                        isFolderSelected ? "bg-blue-500/20 text-blue-400" : "hover:bg-white/5 text-gray-400"
                    )}
                    style={{ paddingLeft }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onFolderClick(node.path);
                        onToggleFolder(node.path);
                    }}
                >
                    <span className="opacity-70">
                        {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
                    <Folder size={14} className={isFolderSelected ? "text-blue-400" : "text-yellow-500/80"} />
                    <span className="font-medium truncate">{node.name}</span>
                </div>
                {isExpanded && (
                    <div>
                        {children.map(child => (
                            <FileTreeItem
                                key={child.path}
                                node={child}
                                level={level + 1}
                                activeFile={activeFile}
                                activeFolder={activeFolder}
                                expandedFolders={expandedFolders}
                                onToggleFolder={onToggleFolder}
                                onFileClick={onFileClick}
                                onFolderClick={onFolderClick}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            className={clsx(
                "flex items-center gap-2 py-1.5 pr-2 cursor-pointer select-none transition-colors text-xs border-l-2",
                isSelected
                    ? "bg-[#1a1a1a] text-white border-blue-500"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:bg-white/5"
            )}
            style={{ paddingLeft }}
            onClick={(e) => {
                e.stopPropagation();
                onFileClick(node.path);
            }}
        >
            <FileCode size={14} className={pathEndsWith(node.name, 'html') ? 'text-orange-400' : pathEndsWith(node.name, 'css') ? 'text-blue-400' : pathEndsWith(node.name, 'js') ? 'text-yellow-400' : 'text-gray-400'} />
            <span className="truncate">{node.name}</span>
        </div>
    );
};

const pathEndsWith = (path, ext) => path.toLowerCase().endsWith(ext);

// Helper to detect language from file extension
const getLanguageFromPath = (path) => {
    if (!path) return 'javascript';
    const ext = path.split('.').pop().toLowerCase();

    const languageMap = {
        'js': 'javascript',
        'jsx': 'javascript',
        'ts': 'typescript',
        'tsx': 'typescript',
        'html': 'html',
        'css': 'css',
        'py': 'python',
        'php': 'php',
        'sql': 'sql',
        'json': 'json',
        'md': 'markdown',
        'yml': 'yaml',
        'yaml': 'yaml',
        'dockerfile': 'dockerfile',
        'vue': 'html'
    };

    // Special case for Dockerfile (no extension)
    if (path.endsWith('Dockerfile')) return 'dockerfile';

    return languageMap[ext] || 'javascript';
};

export default function EditorComponent({ files, setFiles, folders, setFolders, activeFile, onFileChange, onCodeChange }) {
    const monaco = useMonaco();
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [useFallback, setUseFallback] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // File Tree State
    const [newFileName, setNewFileName] = useState('');
    const [isCreatingFile, setIsCreatingFile] = useState(false);
    const [activeFolder, setActiveFolder] = useState(null); // Selected folder path
    const [expandedFolders, setExpandedFolders] = useState({});

    useEffect(() => {
        // Auto-expand folders that contain the active file
        if (activeFile) {
            const parts = activeFile.split('/');
            if (parts.length > 1) {
                const folderPath = parts.slice(0, -1).join('/');
                setExpandedFolders(prev => ({ ...prev, [folderPath]: true }));

                // Also expand parents if nested deep (simple one-level up for now)
            }
        }
    }, [activeFile]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isEditorReady) {
                console.warn('Monaco Editor loading timeout, using fallback textarea');
                setUseFallback(true);
            }
        }, 8000);
        return () => clearTimeout(timeout);
    }, [isEditorReady]);

    // ZeroCode Cyber Theme
    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('zerocode-cyber', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: 'comment', foreground: '52525b', fontStyle: 'italic' },
                    { token: 'keyword', foreground: 'c084fc' },      // Purple
                    { token: 'identifier', foreground: '22d3ee' },   // Cyan
                    { token: 'string', foreground: '4ade80' },       // Green
                    { token: 'number', foreground: 'f472b6' },       // Pink
                    { token: 'type', foreground: 'fbbf24' },         // Amber
                ],
                colors: {
                    'editor.background': '#000000',
                    'editor.foreground': '#e5e5e5',
                    'editorCursor.foreground': '#22d3ee',         // Cyan Cursor
                    'editor.lineHighlightBackground': '#18181b', // ZeroCode Zinc
                    'editorLineNumber.foreground': '#3f3f46',
                    'editor.selectionBackground': '#27272a',
                    'editor.inactiveSelectionBackground': '#27272a',
                    'editorWidget.background': '#09090b',
                    'editorWidget.border': '#27272a'
                }
            });
            monaco.editor.setTheme('zerocode-cyber');

            // Configure TypeScript Compiler Options for React support
            monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                target: monaco.languages.typescript.ScriptTarget.ES2020,
                allowNonTsExtensions: true,
                moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
                module: monaco.languages.typescript.ModuleKind.CommonJS,
                noEmit: true,
                esModuleInterop: true,
                jsx: monaco.languages.typescript.JsxEmit.React,
                reactNamespace: 'React',
                allowSyntheticDefaultImports: true
            });
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

        // Construct full path based on active folder
        let fullPath = newFileName;
        if (activeFolder) {
            // Avoid double slashes if user typed path
            if (newFileName.startsWith('/')) fullPath = activeFolder + newFileName;
            else fullPath = `${activeFolder}/${newFileName}`;
        }

        if (files.some(f => f.name === fullPath)) {
            alert('File already exists');
            return;
        }

        if (setFiles) {
            setFiles(prev => [...prev, { name: fullPath, content: '', path: fullPath }]);
            onFileChange(fullPath);
            setNewFileName('');
            setIsCreatingFile(false);
            // Auto expand the folder we just added to
            if (activeFolder) {
                setExpandedFolders(prev => ({ ...prev, [activeFolder]: true }));
            }
        }
    };

    const fileTree = useMemo(() => buildFileTree(files, folders), [files, folders]);

    return (
        <div className="h-full flex bg-black border-r border-cyan-500/10 font-sans">
            {/* File Explorer Sidebar */}
            {isSidebarOpen && (
                <div className="w-56 bg-black border-r border-cyan-500/10 flex flex-col flex-shrink-0">
                    <div className="p-3 text-[10px] font-bold text-cyan-500/70 tracking-[0.2em] flex items-center justify-between border-b border-cyan-500/10 bg-black/50">
                        <span className="flex items-center gap-2">
                            <Folder size={12} className="text-cyan-500" />
                            SYS_DIRECTORY
                        </span>
                        <div className="flex gap-1">
                            <button
                                onClick={() => setIsCreatingFile(true)}
                                className="hover:text-cyan-400 hover:bg-cyan-500/10 p-1 rounded transition-colors text-cyan-500/50"
                                title={activeFolder ? `New File in ${activeFolder}` : "New File in Root"}
                            >
                                <FilePlus size={14} />
                            </button>
                        </div>
                    </div>

                    {/* New File Input */}
                    {isCreatingFile && (
                        <div className="p-2 bg-zinc-900/50 border-b border-cyan-500/30">
                            <div className="text-[10px] text-gray-500 mb-1 flex items-center gap-1">
                                <Folder size={10} />
                                {activeFolder || 'root'} /
                            </div>
                            <form onSubmit={createFile}>
                                <input
                                    autoFocus
                                    type="text"
                                    value={newFileName}
                                    onChange={e => setNewFileName(e.target.value)}
                                    onBlur={() => {
                                        // Small delay to allow form submit if clicking enter
                                        setTimeout(() => {
                                            if (!newFileName) setIsCreatingFile(false)
                                        }, 200)
                                    }}
                                    placeholder="filename.js"
                                    className="w-full bg-black text-white text-xs px-2 py-1.5 rounded-sm border border-cyan-500/50 outline-none focus:border-cyan-500 font-mono"
                                />
                            </form>
                        </div>
                    )}

                    <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar">
                        {/* Tree View */}
                        {Object.values(fileTree).sort((a, b) => {
                            if (a.type === b.type) return a.name.localeCompare(b.name);
                            return a.type === 'folder' ? -1 : 1;
                        }).map(node => (
                            <FileTreeItem
                                key={node.path}
                                node={node}
                                level={0}
                                activeFile={activeFile}
                                activeFolder={activeFolder}
                                expandedFolders={expandedFolders}
                                onToggleFolder={(path) => setExpandedFolders(prev => ({ ...prev, [path]: !prev[path] }))}
                                onFileClick={(path) => onFileChange(path)}
                                onFolderClick={(path) => setActiveFolder(path === activeFolder ? null : path)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Editor Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Simplified Tabs / Breadcrumbs */}
                <div className="flex bg-black border-b border-cyan-500/10 h-10 items-end px-2 gap-2 select-none">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-2 text-cyan-500/50 hover:text-cyan-400 mr-2 flex-shrink-0 transition-colors">
                        {isSidebarOpen ? <ChevronDown size={14} className="rotate-90" /> : <ChevronRight size={14} />}
                    </button>

                    {/* Active File Tab "Cartridge" */}
                    <div className="relative group">
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-cyan-500 shadow-[0_0_10px_cyan]" />
                        <div className="px-4 py-2 bg-zinc-900/50 border-x border-cyan-500/10 text-xs font-mono text-cyan-400 flex items-center gap-2 relative z-10">
                            <FileCode size={12} className={clsx(
                                pathEndsWith(activeFile, 'html') ? 'text-orange-400' :
                                    pathEndsWith(activeFile, 'css') ? 'text-blue-400' :
                                        pathEndsWith(activeFile, 'js') ? 'text-yellow-400' : 'text-cyan-400'
                            )} />
                            <span className="tracking-wide">{activeFile}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    {useFallback ? (
                        <textarea
                            value={files.find(f => f.name === activeFile)?.content || ''}
                            onChange={handleTextareaChange}
                            className="w-full h-full p-4 bg-black text-white font-mono text-sm resize-none focus:outline-none"
                            spellCheck="false"
                            style={{ tabSize: 2, lineHeight: '1.6' }}
                        />
                    ) : (
                        <Editor
                            height="100%"
                            theme="zerocode-cyber"
                            path={activeFile}
                            defaultLanguage={getLanguageFromPath(activeFile)}
                            defaultValue={files.find(f => f.name === activeFile)?.content || ''}
                            value={files.find(f => f.name === activeFile)?.content || ''}
                            onChange={handleEditorChange}
                            onMount={() => setIsEditorReady(true)}
                            loading={
                                <div className="h-full flex items-center justify-center bg-black text-cyan-500/50 font-mono">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                                        <p className="text-xs tracking-widest uppercase">Initializing_Matrix...</p>
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
                                fontSize: 13,
                                lineHeight: 22,
                                padding: { top: 16 },
                                scrollBeyondLastLine: false,
                                cursorBlinking: 'smooth',
                                cursorSmoothCaretAnimation: 'on',
                                smoothScrolling: true,
                                renderLineHighlight: 'all'
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
