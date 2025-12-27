import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';
import InstructionPane from '../components/InstructionPane';
import EditorComponent from '../components/EditorComponent';
import PreviewPane from '../components/PreviewPane';
import Terminal from '../components/Terminal/Terminal'; // Import Terminal
import PythonTerminal from '../components/Terminal/PythonTerminal';
import QuizPane from '../components/QuizPane';
import InformationalPane from '../components/InformationalPane';
// import Header from '../components/Header'; // Deprecated in favor of LearningNavbar
import Footer from '../components/Footer';
import LearningNavbar from '../components/layout/LearningNavbar';
import CourseMenuDrawer from '../components/layout/CourseMenuDrawer';
import AIAssistantPanel from '../components/layout/AIAssistantPanel';
import VaultOverlay from '../components/neural-vault/VaultOverlay'; // NEW IMPORT
import { useProgress } from '../contexts/ProgressProvider';
import { getItem, getNextItem, getUnit, getCourseProgress, CONTENT_TYPES, courses as courseMetaMap } from '../data/courses/index';
import { evaluateCode } from '../utils/validator';
import confetti from 'canvas-confetti';

export default function LearningLayout() {
    const { courseId, itemId } = useParams();
    const navigate = useNavigate();
    const { completedItems, markItemComplete, reward, clearReward, startSession, endSession } = useProgress();

    const [item, setItem] = useState(null);
    const [activeFile, setActiveFile] = useState('index.html');
    const [files, setFiles] = useState([]);
    const [folders, setFolders] = useState(['src']); // Default folder
    const [compiledCode, setCompiledCode] = useState('');
    const [consoleLogs, setConsoleLogs] = useState([]);
    const [isConsoleOpen, setIsConsoleOpen] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [progress, setProgress] = useState(0);
    const [tasks, setTasks] = useState([]);

    // New State for Drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // New State for AI
    const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
    const [isVaultOpen, setIsVaultOpen] = useState(false); // NEW STATE

    // Terminal State for Git Course
    const [virtualGitState, setVirtualGitState] = useState(null);

    // Start session tracking when item loads
    useEffect(() => {
        const currentItem = getItem(courseId, itemId);
        if (itemId && currentItem) {
            // Determine content type for focus tracking
            let contentType = 'lab'; // default
            if (currentItem.type === CONTENT_TYPES.INFORMATIONAL) {
                contentType = 'doc';
            } else if (currentItem.type === CONTENT_TYPES.QUIZ) {
                contentType = 'quiz';
            } else if (currentItem.type === CONTENT_TYPES.PROJECT) {
                contentType = 'project';
            } else if (currentItem.type === CONTENT_TYPES.LESSON) {
                contentType = 'lab';
            }
            // Pass courseId and unitId for per-item focus logging
            startSession(itemId, contentType, courseId, currentItem.unitId || '');
        }
        // End session when leaving this item
        return () => {
            endSession();
        };
    }, [itemId, courseId, startSession, endSession]);

    useEffect(() => {
        const currentItem = getItem(courseId, itemId);
        if (currentItem) {
            setItem(currentItem);
            if (currentItem.type === CONTENT_TYPES.LESSON || currentItem.type === CONTENT_TYPES.PROJECT) {
                const itemFiles = currentItem.files || currentItem.starterFiles || [];
                setFiles(itemFiles.map(f => ({ ...f })));
                setActiveFile(itemFiles[0]?.name || 'index.html');
                setTasks(currentItem.tasks?.map(t => ({ ...t, completed: false })) || []);
            }
            setCompiledCode('');
            setConsoleLogs([]);
            setProgress(0);
        } else {
            navigate(`/course/${courseId}`);
        }
    }, [courseId, itemId, navigate]);

    useEffect(() => {
        const handler = (e) => {
            if (e.data && e.data.type === 'CONSOLE') {
                const logEntry = {
                    level: e.data.level || 'log',
                    message: e.data.payload.join(' '),
                    timestamp: new Date().toLocaleTimeString()
                };
                setConsoleLogs(prev => [...prev, logEntry]);
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, []);

    const proceedToNext = () => {
        // Ensure drawer is closed on nav
        setIsDrawerOpen(false);
        const next = getNextItem(courseId, itemId);
        if (next) {
            navigate(`/learn/${courseId}/${next.id}`);
        } else {
            navigate(`/course/${courseId}`);
        }
    };

    const handleNext = async () => {
        // Pass proceedToNext as a callback to run after reward overlay closes
        const earnedReward = await markItemComplete(itemId, courseId, getUnit(itemId)?.id, proceedToNext);

        if (earnedReward) {
            // Do not navigate immediately. Global Overlay handles it via callback.
        } else {
            proceedToNext();
        }
    };

    const handleRewardClose = () => {
        clearReward();
        proceedToNext();
    };

    // Engine Switching Logic
    const getEngineForCourse = (id) => {
        if (!id) return 'PREVIEW';
        if (id === 'python') return 'PYTHON';
        if (['git', 'cicd', 'node', 'nextjs', 'mongodb', 'mysql', 'php', 'typescript'].includes(id)) return 'TERMINAL';
        return 'PREVIEW'; // html5, css3, jsBasics, jsEs6, dom, react, tailwind
    };

    const activeEngine = getEngineForCourse(courseId);

    // Fetch Unit and Course Meta for Navbar/Drawer
    const currentUnit = item ? getUnit(courseId, item.unitId) : null;
    const currentCourse = courseId ? courseMetaMap[courseId] : null;

    if (!item) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[var(--bg-primary)] text-white">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
                </div>
            </div>
        );
    }

    // Common Wrapper for all content types to include Navbar/Drawer
    const ContentWrapper = ({ children }) => (
        <div className="h-screen w-full flex flex-col bg-[var(--bg-primary)] fixed inset-0 font-sans">
            <LearningNavbar
                courseTitle={item?.unitTitle || currentCourse?.title}
                lessonTitle={item?.title}
                progress={progress}
                onOpenDrawer={() => setIsDrawerOpen(true)}
                onAskAI={() => setIsAIPanelOpen(!isAIPanelOpen)} // Toggle Panel
                onOpenVault={() => setIsVaultOpen(true)} // Pass Handler
                onBack={() => navigate(`/course/${courseId}`)}
            />

            <CourseMenuDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                courseTitle={currentCourse?.title}
                unitTitle={currentUnit?.title}
                unitDescription={currentUnit?.description}
                unitItems={currentUnit?.items}
                courseId={courseId}
                currentItemId={itemId}
                completedItems={completedItems}
            />

            {/* AI Panel - Render outside of resizable panels but inside wrapper */}
            <AIAssistantPanel
                isOpen={isAIPanelOpen}
                onClose={() => setIsAIPanelOpen(false)}
                currentCode={files.map(f => `// File: ${f.name}\n${f.content}`).join('\n\n')}
                taskDescription={item?.content || "No context available."}
            />

            {/* VAULT OVERLAY (NEW) */}
            <VaultOverlay
                isOpen={isVaultOpen}
                onClose={() => setIsVaultOpen(false)}
            />

            <div className="flex-1 min-h-0 overflow-hidden pt-16">
                {children}
            </div>
        </div>
    );

    // Render Quiz
    if (item.type === CONTENT_TYPES.QUIZ) {
        return (
            <ContentWrapper>
                <QuizPane quiz={item} onComplete={handleNext} />
            </ContentWrapper>
        );
    }

    // Render Informational
    if (item.type === CONTENT_TYPES.INFORMATIONAL) {
        return (
            <ContentWrapper>
                <InformationalPane item={item} onComplete={handleNext} />
            </ContentWrapper>
        );
    }

    // ... (Compiler Logic: compile, compilePython, etc. - Kept exactly as is)
    const compile = () => {
        let html = files.find(f => f.name === 'index.html')?.content || '';
        const cssFiles = files.filter(f => f.name.endsWith('.css'));
        const jsFiles = files.filter(f => f.name.endsWith('.js'));

        const css = cssFiles.map(f => f.content).join('\n');
        const js = jsFiles.map(f => f.content).join('\n');

        // Console override script to inject
        const consoleOverride = `<script>
(function() {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.log = function(...args) {
        originalLog.apply(console, args);
        window.parent.postMessage({ 
            type: 'CONSOLE', 
            level: 'log', 
            payload: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))
        }, '*');
    };
    
    console.error = function(...args) {
        originalError.apply(console, args);
        window.parent.postMessage({ 
            type: 'CONSOLE', 
            level: 'error', 
            payload: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))
        }, '*');
    };
    
    console.warn = function(...args) {
        originalWarn.apply(console, args);
        window.parent.postMessage({ 
            type: 'CONSOLE', 
            level: 'warn', 
            payload: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))
        }, '*');
    };
})();
</script>`;

        // Inject Console Override
        if (html.includes('</head>')) {
            html = html.replace('</head>', consoleOverride + '</head>');
        } else if (html.includes('<head>')) {
            html = html.replace('<head>', '<head>' + consoleOverride);
        } else {
            html = consoleOverride + html;
        }

        // Inject CSS
        if (css) {
            if (html.includes('</head>')) {
                html = html.replace('</head>', `<style>${css}</style></head>`);
            } else {
                html = html + `<style>${css}</style>`;
            }
        }

        // Inject JS
        if (js) {
            const scriptTag = `<script>try { ${js} } catch(e) { console.error('❌ Error: ' + e.message); }</script>`;
            if (html.includes('</body>')) {
                html = html.replace('</body>', scriptTag + '</body>');
            } else {
                html = html + scriptTag;
            }
        }

        return html;
    };

    const compilePython = (pythonCode) => {
        const escapedCode = pythonCode.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        return `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"></script>
</head>
<body>
    <div id="output" style="font-family: monospace; padding: 10px;"></div>
    <script>
        async function runPython() {
            try {
                window.parent.postMessage({ type: 'CONSOLE', level: 'log', payload: ['Loading Python...'] }, '*');
                const pyodide = await loadPyodide();
                
                pyodide.setStdout({
                    batched: (text) => {
                        window.parent.postMessage({ type: 'CONSOLE', level: 'log', payload: [text] }, '*');
                    }
                });
                
                pyodide.setStderr({
                    batched: (text) => {
                        window.parent.postMessage({ type: 'CONSOLE', level: 'error', payload: [text] }, '*');
                    }
                });
                
                const code = \`${escapedCode}\`;
                await pyodide.runPythonAsync(code);
                window.parent.postMessage({ type: 'CONSOLE', level: 'log', payload: ['✓ Code executed successfully'] }, '*');
            } catch (e) {
                const errorMsg = e.message || String(e);
                const lines = errorMsg.trim().split('\\n');
                let errorLine = lines[lines.length - 1] || errorMsg;
                const execLineMatch = errorMsg.match(/File "<exec>", line (\\d+)/);
                const lineNum = execLineMatch ? execLineMatch[1] : null;
                errorLine = errorLine.trim();
                
                if (lineNum) {
                    window.parent.postMessage({ type: 'CONSOLE', level: 'error', payload: [\`❌ Error on line \${lineNum}:\`] }, '*');
                } else {
                    window.parent.postMessage({ type: 'CONSOLE', level: 'error', payload: ['❌ Error:'] }, '*');
                }
                window.parent.postMessage({ type: 'CONSOLE', level: 'error', payload: [errorLine] }, '*');
                
                if (errorMsg.includes('SyntaxError')) {
                    window.parent.postMessage({ type: 'CONSOLE', level: 'warn', payload: ['💡 Check your syntax: colons, quotes, parentheses'] }, '*');
                }
            }
        }
        runPython();
    </script>
</body>
</html>`;
    };

    const isPythonCourse = () => {
        return files.some(f => f.name.endsWith('.py'));
    };

    const isTypeScriptCourse = () => {
        return files.some(f => f.name.endsWith('.ts'));
    };

    const compileTypeScript = () => {
        const html = files.find(f => f.name === 'index.html')?.content || '';
        const css = files.find(f => f.name === 'style.css')?.content || '';
        const tsCode = files.find(f => f.name === 'script.ts')?.content || '';
        const escapedCode = tsCode.replace(/`/g, '\\`').replace(/\$/g, '\\$');

        return `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/typescript@5.3.3/lib/typescript.js"></script>
    <style>${css}</style>
</head>
<body>
    ${html}
    <script>
        try {
            const code = \`${escapedCode}\`;
            const result = ts.transpileModule(code, {
                compilerOptions: { module: ts.ModuleKind.CommonJS }
            });
            eval(result.outputText);
        } catch (e) {
            console.error(e.message);
        }
    </script>
</body>
</html>`;
    };

    const isVueCourse = () => {
        return files.some(f => f.name.endsWith('.vue'));
    };

    const compileVue = () => {
        // We use vue3-sfc-loader to handle .vue files including <script setup> without a build step.
        // We serialized the current 'files' state into the HTML so the loader can read them "locally".
        const serializedFiles = JSON.stringify(files.reduce((acc, f) => {
            // Normalize path usually expected by loader (e.g., ./App.vue)
            let name = f.name;
            if (!name.startsWith('./') && !name.startsWith('/')) name = './' + name;
            acc[name] = f.content;
            return acc;
        }, {})).replace(/</g, '\\u003c');

        const scriptEnd = '<' + '/script>';

        const consoleOverride = `
            (function() {
                const originalLog = console.log;
                const originalError = console.error;
                const originalWarn = console.warn;
                
                function post(level, args) {
                    window.parent.postMessage({ 
                        type: 'CONSOLE', 
                        level: level, 
                        payload: args.map(a => {
                            try {
                                return typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a);
                            } catch(e) { return String(a); }
                        })
                    }, '*');
                }

                console.log = function(...args) {
                    originalLog.apply(console, args);
                    post('log', args);
                };
                
                console.error = function(...args) {
                    originalError.apply(console, args);
                    post('error', args);
                };
                
                console.warn = function(...args) {
                    originalWarn.apply(console, args);
                    post('warn', args);
                };
                
                window.onerror = function(msg, url, line, col, error) {
                    post('error', [msg]);
                    return false;
                };
                
                window.addEventListener('unhandledrejection', function(event) {
                    post('error', ['Unhandled Promise Rejection: ' + event.reason]);
                });
            })();
        `;

        return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/vue@3/dist/vue.global.js">${scriptEnd}
    <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.js">${scriptEnd}
    <script>${consoleOverride}${scriptEnd}
    <style>
        body { font-family: sans-serif; padding: 20px; }
        * { box-sizing: border-box; } 
    </style>
</head>
<body>
    <div id="app"></div>
    <script>
        const files = ${serializedFiles};
        
        const options = {
            moduleCache: {
                vue: Vue
            },
            async getFile(url) {
                const content = files[url] || files['./' + url] || files[url.replace('./', '')];
                if (!content) throw new Error("File not found: " + url);
                return content;
            },
            addStyle(textContent) {
                const style = document.createElement('style');
                style.textContent = textContent;
                document.head.appendChild(style);
            },
            log(type, ...args) {
                console[type](...args);
            }
        }
        
        const { loadModule } = window['vue3-sfc-loader'];
        
        // Find the main file
        const appFile = Object.keys(files).find(f => f.endsWith('App.vue')) || Object.keys(files)[0];

        if (!appFile) {
            console.error("No component file found to mount!");
        } else {
            Vue.defineAsyncComponent(() => 
                loadModule(appFile, options)
                .then(component => {
                    const app = Vue.createApp(component);
                    app.config.errorHandler = (err) => console.error(err);
                    app.mount('#app');
                })
                .catch(err => console.error("Failed to load module: " + err))
            );
        }
    ${scriptEnd}
</body>
</html>`;
    };

    const handleExecuteCode = (code) => {
        setConsoleLogs([]);
        const safeLog = (level, args) => {
            const processedArgs = args.map(arg => {
                try {
                    if (typeof arg === 'object' && arg !== null) {
                        return JSON.stringify(arg, null, 2);
                    }
                    return String(arg);
                } catch (e) {
                    return '[Circular Object]';
                }
            });

            setConsoleLogs(prev => [...prev, {
                level,
                message: processedArgs.join(' '),
                timestamp: new Date().toLocaleTimeString()
            }]);
        };

        const customConsole = {
            log: (...args) => safeLog('log', args),
            error: (...args) => safeLog('error', args),
            warn: (...args) => safeLog('warn', args),
            info: (...args) => safeLog('log', args),
            table: (...args) => safeLog('log', args),
            clear: () => setConsoleLogs([])
        };

        try {
            const sandbox = new Function('console', `
        "use strict";
        try {
                    ${code}
        } catch (err) {
            console.error(err.name + ": " + err.message);
        }
        `);
            sandbox(customConsole);
            safeLog('log', ['✓ Execution finished']);
        } catch (err) {
            safeLog('error', [err.name + ": " + err.message]);
        }
    };

    const handleRun = () => {
        setIsRunning(true);
        setConsoleLogs([]);

        if (isPythonCourse()) {
            const pythonFile = files.find(f => f.name.endsWith('.py'));
            if (pythonFile) setCompiledCode(compilePython(pythonFile.content));
        } else if (isTypeScriptCourse()) {
            setCompiledCode(compileTypeScript());
        } else if (isVueCourse()) {
            setCompiledCode(compileVue());
        } else {
            const hasHTML = files.some(f => f.name === 'index.html');
            if (!hasHTML) {
                const jsCode = files.find(f => f.name.endsWith('.js'))?.content || '';
                handleExecuteCode(jsCode);
            } else {
                setCompiledCode(compile());
            }
        }
        setTimeout(() => setIsRunning(false), 500);
    };

    const handleCheck = () => {
        setIsChecking(true);

        let results;
        if (courseId === 'git') {
            results = tasks.map(task => {
                try {
                    const state = virtualGitState;
                    if (!state) return false;

                    const regexStr = task.regex;
                    if (!regexStr) return false;

                    // Specialized prefix handling
                    if (typeof regexStr === 'string' && regexStr.includes(':')) {
                        const colonIndex = regexStr.indexOf(':');
                        const prefix = regexStr.substring(0, colonIndex);
                        const pattern = regexStr.substring(colonIndex + 1);

                        switch (prefix) {
                            case 'COMMAND':
                                return state.history?.some(h =>
                                    h.type === 'command' && new RegExp(pattern, 'i').test(h.content)
                                );
                            case 'BRANCH_EXISTS':
                                return state.branches?.includes(pattern);
                            case 'BRANCH_ACTIVE':
                                return state.branch === pattern;
                            case 'STAGED':
                                return state.staging?.includes(pattern);
                            case 'COMMIT_MSG':
                                return state.commits?.some(c => new RegExp(pattern).test(c.message));
                            case 'COMMIT_COUNT':
                                return state.commits?.length >= parseInt(pattern);
                            case 'FILE_EXISTS':
                                return state.files?.some(f => f.name === pattern);
                            case 'FILE_CONTENT':
                                const [fName, ...cRegexParts] = pattern.split(':');
                                const file = state.files?.find(f => f.name === fName);
                                return file && new RegExp(cRegexParts.join(':')).test(file.content);
                        }
                    }

                    // Fallback: match against JSON dump
                    return new RegExp(task.regex).test(JSON.stringify(state));
                } catch (e) {
                    return false;
                }
            });
        } else {
            const allContent = files.map(f => f.content).join('\n');
            results = evaluateCode(allContent, tasks);
        }

        const updatedTasks = tasks.map((task, index) => ({
            ...task,
            completed: results[index]
        }));
        setTasks(updatedTasks);
        const completedCount = updatedTasks.filter(t => t.completed).length;
        const newProgress = (completedCount / updatedTasks.length) * 100;
        setProgress(newProgress);
        if (newProgress === 100) {
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#ffffff', '#888888', '#333333']
            });
            markItemComplete(itemId);
        }
        setIsChecking(false);
    };

    const handleCodeChange = (fileName, newContent) => {
        setFiles(prev => prev.map(f =>
            f.name === fileName ? { ...f, content: newContent } : f
        ));
    };

    const lessonData = {
        title: item.title,
        content: item.content,
        tasks: tasks
    };

    return (
        <div className="h-screen w-full flex flex-col overflow-hidden bg-[var(--bg-primary)] fixed inset-0 font-sans">
            <LearningNavbar
                courseTitle={item?.unitTitle || currentCourse?.title}
                lessonTitle={item?.title}
                progress={progress}
                onOpenDrawer={() => setIsDrawerOpen(true)}
                onAskAI={() => setIsAIPanelOpen(!isAIPanelOpen)}
                onBack={() => navigate(`/course/${courseId}`)}
            />

            <CourseMenuDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                courseTitle={currentCourse?.title}
                unitTitle={currentUnit?.title}
                unitDescription={currentUnit?.description}
                unitItems={currentUnit?.items}
                courseId={courseId}
                currentItemId={itemId}
                completedItems={completedItems}
            />

            {/* AI Panel - Render outside of resizable panels but inside wrapper */}
            <AIAssistantPanel
                isOpen={isAIPanelOpen}
                onClose={() => setIsAIPanelOpen(false)}
                currentCode={files.map(f => `// File: ${f.name}\n${f.content}`).join('\n\n')}
                taskDescription={item?.content || "No context available."
                }
            />

            <div className="flex-1 min-h-0 w-full relative pt-16 pb-10 bg-black">
                <PanelGroup direction="horizontal" className="h-full w-full">
                    {/* Left Panel: Instructions */}
                    <Panel defaultSize={25} minSize={20} className="h-full flex flex-col bg-black border-r border-cyan-500/10 relative z-10">
                        <InstructionPane lesson={lessonData} />
                    </Panel>

                    <PanelResizeHandle className="w-1.5 bg-[#050505] border-x border-white/5 hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all cursor-col-resize flex items-center justify-center group focus:outline-none z-50">
                        <div className="h-12 w-0.5 bg-zinc-800 group-hover:bg-cyan-500 group-hover:shadow-[0_0_8px_cyan] rounded-full transition-all duration-300" />
                    </PanelResizeHandle>

                    {/* Middle Panel: Editor */}
                    <Panel defaultSize={40} minSize={30} className="h-full flex flex-col bg-black relative z-0">
                        <EditorComponent
                            files={files}
                            setFiles={setFiles}
                            folders={folders}
                            setFolders={setFolders}
                            activeFile={activeFile}
                            onFileChange={setActiveFile}
                            onCodeChange={handleCodeChange}
                        />
                    </Panel>

                    <PanelResizeHandle className="w-1.5 bg-[#050505] border-x border-white/5 hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all cursor-col-resize flex items-center justify-center group focus:outline-none z-50">
                        <div className="h-12 w-0.5 bg-zinc-800 group-hover:bg-cyan-500 group-hover:shadow-[0_0_8px_cyan] rounded-full transition-all duration-300" />
                    </PanelResizeHandle>

                    {/* Right Panel: Dynamic Engine */}
                    <Panel defaultSize={35} minSize={20} className="h-full flex flex-col bg-black border-l border-cyan-500/10">
                        {activeEngine === 'PYTHON' ? (
                            <PythonTerminal
                                files={files}
                                onStateChange={(state) => setConsoleLogs(prev => [...prev, { level: 'info', message: state, timestamp: new Date().toLocaleTimeString() }])}
                            />
                        ) : activeEngine === 'TERMINAL' ? (
                            <Terminal
                                key={itemId}
                                files={files}
                                setFiles={setFiles}
                                folders={folders}
                                setFolders={setFolders}
                                onStateChange={setVirtualGitState}
                                initialGitState={item.initialGitState} // Pass seed state
                            />
                        ) : (
                            <PreviewPane
                                compiledCode={compiledCode}
                                isConsoleOpen={isConsoleOpen}
                                consoleLogs={consoleLogs}
                            />
                        )}
                    </Panel>
                </PanelGroup>
            </div>

            <Footer
                onRun={handleRun}
                onCheck={handleCheck}
                isRunning={isRunning}
                isChecking={isChecking}
                toggleConsole={() => setIsConsoleOpen(!isConsoleOpen)}
                isConsoleOpen={isConsoleOpen}
                onNext={progress === 100 ? handleNext : null}
            />
            {/* Reward Overlay removed - moved to Global App.jsx */}
        </div >
    );
}
