import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import clsx from 'clsx';
import { CheckCircle2, Circle, BookOpen } from 'lucide-react';

export default function InstructionPane({ lesson }) {
    if (!lesson) return <div className="p-6 text-gray-400">Loading...</div>;

    return (
        <div className="h-full w-full flex flex-col bg-[#0a0a0a] border-r border-white/10">
            {/* Header */}
            <div className="flex-none p-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                    <BookOpen size={14} />
                    <span>Instructions</span>
                </div>
                <h2 className="text-xl font-bold text-white">{lesson.title}</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-6 min-w-0">
                <div className="w-full min-w-0">
                    <div className="prose prose-invert prose-sm max-w-none mb-8 text-gray-300 leading-relaxed break-words">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ className, children, ...props }) {
                                    return (
                                        <code
                                            className={clsx(className, "font-mono text-sm text-white")}
                                            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                            {...props}
                                        >
                                            {children}
                                        </code>
                                    );
                                },
                                pre({ children, ...props }) {
                                    return (
                                        <pre
                                            className="bg-[#111111] text-gray-100 rounded-lg p-4 my-4 overflow-x-hidden border border-white/10"
                                            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                            {...props}
                                        >
                                            {children}
                                        </pre>
                                    );
                                },
                                table: ({ children }) => (
                                    <div className="overflow-x-auto my-4 rounded-lg border border-white/10">
                                        <table className="min-w-full divide-y divide-white/10">
                                            {children}
                                        </table>
                                    </div>
                                ),
                                thead: ({ children }) => (
                                    <thead className="bg-white/5">{children}</thead>
                                ),
                                tbody: ({ children }) => (
                                    <tbody className="bg-[#111111] divide-y divide-white/5">{children}</tbody>
                                ),
                                tr: ({ children }) => (
                                    <tr className="hover:bg-white/5 transition-colors">{children}</tr>
                                ),
                                th: ({ children }) => (
                                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">
                                        {children}
                                    </th>
                                ),
                                td: ({ children }) => (
                                    <td className="px-3 py-2 text-sm text-gray-400">{children}</td>
                                )
                            }}
                        >
                            {lesson.content}
                        </ReactMarkdown>
                    </div>

                    {/* Tasks */}
                    <div className="bg-[#111111] rounded-xl border border-white/10 overflow-hidden mb-6">
                        <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                            <h3 className="font-semibold text-white text-sm">Tasks</h3>
                            <span className="text-xs font-medium px-2 py-0.5 bg-white/10 text-gray-300 rounded">
                                {lesson.tasks.filter(t => t.completed).length}/{lesson.tasks.length}
                            </span>
                        </div>
                        <ul className="divide-y divide-white/5">
                            {lesson.tasks.map((task, index) => (
                                <li key={index} className={clsx(
                                    "flex items-start gap-4 p-4 transition-all",
                                    task.completed ? "bg-green-500/5" : ""
                                )}>
                                    <div className={clsx(
                                        "mt-0.5 flex-shrink-0",
                                        task.completed ? "text-green-400" : "text-gray-600"
                                    )}>
                                        {task.completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                                    </div>
                                    <span className={clsx(
                                        "text-sm leading-relaxed break-words",
                                        task.completed ? "text-gray-500 line-through" : "text-gray-300"
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
