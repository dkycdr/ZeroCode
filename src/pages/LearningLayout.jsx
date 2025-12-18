import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';
import InstructionPane from '../components/InstructionPane';
import EditorComponent from '../components/EditorComponent';
import PreviewPane from '../components/PreviewPane';
import QuizPane from '../components/QuizPane';
import InformationalPane from '../components/InformationalPane';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useProgress } from '../contexts/ProgressProvider';
import { getItem, getNextItem, getCourseProgress, CONTENT_TYPES } from '../data/courses/index';
import { evaluateCode } from '../utils/validator';
import confetti from 'canvas-confetti';

export default function LearningLayout() {
    const { courseId, itemId } = useParams();
    const navigate = useNavigate();
    const { completedItems, markItemComplete } = useProgress();

    const [item, setItem] = useState(null);
    const [activeFile, setActiveFile] = useState('index.html');
    const [files, setFiles] = useState([]);
    const [compiledCode, setCompiledCode] = useState('');
    const [consoleLogs, setConsoleLogs] = useState([]);
    const [isConsoleOpen, setIsConsoleOpen] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [progress, setProgress] = useState(0);
    const [tasks, setTasks] = useState([]);

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

    const handleNext = () => {
        markItemComplete(itemId);
        const next = getNextItem(courseId, itemId);
        if (next) {
            navigate(`/learn/${courseId}/${next.id}`);
        } else {
            navigate(`/course/${courseId}`);
        }
    };

    if (!item) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[#0a0a0a] text-white">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading ZeroCode Environment...</p>
                </div>
            </div>
        );
    }

    // Render Quiz
    if (item.type === CONTENT_TYPES.QUIZ) {
        return (
            <div className="h-screen w-full flex flex-col bg-[#0a0a0a] fixed inset-0">
                <Header progress={getCourseProgress(courseId, completedItems).percentage} />
                <div className="flex-1 min-h-0 overflow-hidden">
                    <QuizPane quiz={item} onComplete={handleNext} />
                </div>
            </div>
        );
    }

    // Render Informational
    if (item.type === CONTENT_TYPES.INFORMATIONAL) {
        return (
            <div className="h-screen w-full flex flex-col bg-[#0a0a0a] fixed inset-0">
                <Header progress={getCourseProgress(courseId, completedItems).percentage} />
                <div className="flex-1 min-h-0 overflow-hidden">
                    <InformationalPane item={item} onComplete={handleNext} />
                </div>
            </div>
        );
    }

    const compile = () => {
        const html = files.find(f => f.name === 'index.html')?.content || '';
        const css = files.find(f => f.name === 'style.css')?.content || '';
        const js = files.find(f => f.name === 'script.js')?.content || '';

        return `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>${css}</style>
</head>
<body>
    ${html}
    <script>
        try { ${js} } catch(e) { console.error(e); }
    </script>
</body>
</html>`;
    };

    const handleRun = () => {
        setIsRunning(true);
        setConsoleLogs([]);
        setCompiledCode(compile());
        setTimeout(() => setIsRunning(false), 500);
    };

    const handleCheck = () => {
        setIsChecking(true);
        const allContent = files.map(f => f.content).join('\n');
        const results = evaluateCode(allContent, tasks);
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
        <div className="h-screen w-full grid grid-rows-[auto_1fr_auto] overflow-hidden bg-[#0a0a0a] fixed inset-0">
            <Header progress={progress} />

            <div className="min-h-0 w-full relative">
                <PanelGroup direction="horizontal" className="h-full w-full">
                    <Panel defaultSize={25} minSize={20} className="h-full flex flex-col">
                        <InstructionPane lesson={lessonData} />
                    </Panel>

                    <PanelResizeHandle className="w-1 bg-[#0a0a0a] hover:bg-white/20 transition-colors cursor-col-resize flex items-center justify-center group focus:outline-none z-10">
                        <div className="h-8 w-0.5 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                    </PanelResizeHandle>

                    <Panel defaultSize={40} minSize={30} className="h-full flex flex-col">
                        <EditorComponent
                            files={files}
                            activeFile={activeFile}
                            onFileChange={setActiveFile}
                            onCodeChange={handleCodeChange}
                        />
                    </Panel>

                    <PanelResizeHandle className="w-1 bg-[#0a0a0a] hover:bg-white/20 transition-colors cursor-col-resize flex items-center justify-center group focus:outline-none z-10">
                        <div className="h-8 w-0.5 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                    </PanelResizeHandle>

                    <Panel defaultSize={35} minSize={20} className="h-full flex flex-col">
                        <PreviewPane
                            compiledCode={compiledCode}
                            isConsoleOpen={isConsoleOpen}
                            consoleLogs={consoleLogs}
                        />
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
        </div>
    );
}
