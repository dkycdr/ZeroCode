import clsx from 'clsx';
import { CheckCircle2, Circle, BookOpen } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

export default function InstructionPane({ lesson }) {
    if (!lesson) return <div className="p-6 text-gray-500 font-mono text-sm animate-pulse">Initializing Mission Data...</div>;

    return (
        <div className="h-full w-full flex flex-col bg-[#0a0a0c] font-sans relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-900/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex-none p-5 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md relative z-10">
                <div className="flex items-center gap-2 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-2">
                    <BookOpen size={12} />
                    <span>Mission Briefing</span>
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight leading-snug">{lesson.title}</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 min-w-0 relative z-10">
                <div className="w-full min-w-0 max-w-none">
                    <div className="mb-8 prose prose-invert prose-sm max-w-none prose-headings:text-indigo-300 prose-a:text-blue-400">
                        <MarkdownRenderer content={lesson.content} />
                    </div>

                    {/* Tasks / Objectives */}
                    <div className="bg-black/20 rounded-xl border border-white/10 overflow-hidden mb-6 shadow-xl backdrop-blur-sm">
                        <div className="px-4 py-2 border-b border-white/5 bg-white/5 flex items-center justify-between">
                            <h3 className="font-bold text-gray-400 text-[10px] uppercase tracking-widest font-mono">Current Objectives</h3>
                            <span className={clsx(
                                "text-[10px] font-mono font-bold px-2 py-0.5 rounded border",
                                lesson.tasks.every(t => t.completed)
                                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                    : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            )}>
                                {lesson.tasks.filter(t => t.completed).length} / {lesson.tasks.length} COMPLETE
                            </span>
                        </div>
                        <ul className="divide-y divide-white/5">
                            {lesson.tasks.map((task, index) => (
                                <li key={index} className={clsx(
                                    "flex items-start gap-4 p-4 transition-all duration-300 border-l-2",
                                    task.completed
                                        ? "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500"
                                        : "hover:bg-white/5 border-transparent hover:border-blue-500/50"
                                )}>
                                    <div className={clsx(
                                        "mt-0.5 flex-shrink-0 transition-colors",
                                        task.completed ? "text-emerald-400" : "text-gray-600"
                                    )}>
                                        {task.completed ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                                    </div>
                                    <span className={clsx(
                                        "text-sm leading-relaxed break-words transition-colors",
                                        task.completed ? "text-gray-500 line-through decoration-gray-700" : "text-gray-300"
                                    )}>
                                        {task.text || task.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
