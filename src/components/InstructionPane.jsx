import clsx from 'clsx';
import { CheckCircle2, Circle, BookOpen } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

export default function InstructionPane({ lesson }) {
    if (!lesson) return <div className="p-6 text-gray-400">Loading...</div>;

    return (
        <div className="h-full w-full flex flex-col bg-[var(--bg-panel)] border-r border-[var(--border-subtle)] font-sans">
            {/* Header */}
            <div className="flex-none p-6 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <BookOpen size={14} />
                    <span>Instructions</span>
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">{lesson.title}</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 min-w-0">
                <div className="w-full min-w-0">
                    <div className="mb-8">
                        <MarkdownRenderer content={lesson.content} />
                    </div>

                    {/* Tasks */}
                    <div className="bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)] overflow-hidden mb-6 shadow-lg">
                        <div className="px-5 py-3 border-b border-[var(--border-subtle)] bg-[#111111] flex items-center justify-between">
                            <h3 className="font-bold text-white text-xs uppercase tracking-wider font-mono">Mission Objectives</h3>
                            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[var(--accent-primary)] text-white rounded">
                                {lesson.tasks.filter(t => t.completed).length}/{lesson.tasks.length}
                            </span>
                        </div>
                        <ul className="divide-y divide-[var(--border-subtle)]">
                            {lesson.tasks.map((task, index) => (
                                <li key={index} className={clsx(
                                    "flex items-start gap-4 p-4 transition-all duration-300",
                                    task.completed ? "bg-green-500/5" : "hover:bg-white/5"
                                )}>
                                    <div className={clsx(
                                        "mt-0.5 flex-shrink-0 transition-colors",
                                        task.completed ? "text-green-400" : "text-gray-600"
                                    )}>
                                        {task.completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                                    </div>
                                    <span className={clsx(
                                        "text-sm leading-relaxed break-words transition-colors",
                                        task.completed ? "text-gray-500 line-through decoration-gray-600" : "text-gray-300"
                                    )}>
                                        {task.description}
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
