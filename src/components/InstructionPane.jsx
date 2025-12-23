import clsx from 'clsx';
import { VscCode } from 'react-icons/vsc';
import { RiCheckLine, RiCheckboxBlankCircleLine } from 'react-icons/ri';
import MarkdownRenderer from './MarkdownRenderer';

export default function InstructionPane({ lesson }) {
    if (!lesson) return <div className="p-6 text-cyan-500/50 font-mono text-xs animate-pulse">Establishing_Uplink...</div>;

    return (
        <div className="h-full w-full flex flex-col bg-black font-sans relative overflow-hidden">
            {/* Header */}
            <div className="flex-none p-4 border-b border-cyan-500/10 bg-black/80 backdrop-blur-md relative z-10">
                <div className="flex items-center gap-2 text-cyan-500 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-2">
                    <VscCode size={14} />
                    <span>Mission_Briefing</span>
                </div>
                <h2 className="text-lg font-bold text-white tracking-tight leading-snug">{lesson.title}</h2>
                {/* Decor */}
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 min-w-0 relative z-10">
                <div className="w-full min-w-0 max-w-none">
                    <div className="mb-8 prose prose-invert prose-sm max-w-none 
                        prose-headings:text-white prose-headings:font-mono prose-headings:uppercase prose-headings:tracking-tight
                        prose-p:text-zinc-400 prose-p:leading-relaxed
                        prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
                        prose-strong:text-cyan-100 prose-strong:font-bold
                        prose-code:text-cyan-300 prose-code:bg-cyan-950/30 prose-code:px-1 prose-code:rounded-sm prose-code:border prose-code:border-cyan-500/20
                        prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-white/5
                    ">
                        <MarkdownRenderer content={lesson.content} />
                    </div>

                    {/* Tasks / Objectives */}
                    <div className="bg-zinc-900/30 rounded-sm border border-cyan-500/20 overflow-hidden mb-6 backdrop-blur-sm">
                        <div className="px-4 py-2 border-b border-cyan-500/10 bg-cyan-950/10 flex items-center justify-between">
                            <h3 className="font-bold text-cyan-500/70 text-[10px] uppercase tracking-widest font-mono">Current_Objectives</h3>
                            <span className={clsx(
                                "text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border",
                                lesson.tasks.every(t => t.completed)
                                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                                    : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                            )}>
                                {lesson.tasks.filter(t => t.completed).length} / {lesson.tasks.length} DONE
                            </span>
                        </div>
                        <ul className="divide-y divide-cyan-500/5">
                            {lesson.tasks.map((task, index) => (
                                <li key={index} className={clsx(
                                    "flex items-start gap-3 p-3 transition-all duration-300 border-l-2",
                                    task.completed
                                        ? "bg-green-500/5 border-green-500"
                                        : "hover:bg-white/5 border-transparent hover:border-cyan-500/50"
                                )}>
                                    <div className={clsx(
                                        "mt-0.5 flex-shrink-0 transition-colors",
                                        task.completed ? "text-green-400" : "text-zinc-600"
                                    )}>
                                        {task.completed ? <RiCheckLine size={16} /> : <RiCheckboxBlankCircleLine size={16} />}
                                    </div>
                                    <span className={clsx(
                                        "text-xs leading-relaxed break-words transition-colors font-mono",
                                        task.completed ? "text-zinc-500 line-through decoration-zinc-700" : "text-zinc-300"
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
