import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function InformationalPane({ item, onComplete }) {
    return (
        <div className="h-full flex flex-col bg-[#0a0a0a]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-medium uppercase tracking-wider">
                            <BookOpen size={14} />
                            <span>Reading</span>
                        </div>
                        <div className="h-4 w-px bg-white/10"></div>
                        <h1 className="text-lg font-bold text-white">{item.title}</h1>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <Clock size={12} />
                        <span>{item.duration}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="max-w-3xl mx-auto">
                    <article className="prose prose-invert max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ children }) => (
                                    <h1 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-white/10">
                                        {children}
                                    </h1>
                                ),
                                h2: ({ children }) => (
                                    <h2 className="text-xl font-bold text-white mt-8 mb-4">
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                        {children}
                                    </h3>
                                ),
                                p: ({ children }) => (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                                        {children}
                                    </ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300">
                                        {children}
                                    </ol>
                                ),
                                li: ({ children }) => (
                                    <li className="text-gray-300">{children}</li>
                                ),
                                code: ({ inline, children }) => (
                                    inline ? (
                                        <code className="bg-white/10 text-white px-1.5 py-0.5 rounded text-sm font-mono">
                                            {children}
                                        </code>
                                    ) : (
                                        <code className="font-mono text-sm">{children}</code>
                                    )
                                ),
                                pre: ({ children }) => (
                                    <pre className="bg-[#111111] text-gray-100 rounded-lg p-4 overflow-x-auto my-4 border border-white/10">
                                        {children}
                                    </pre>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-2 border-white/30 bg-white/5 pl-4 py-2 my-4 text-gray-400 italic">
                                        {children}
                                    </blockquote>
                                ),
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
                                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">
                                        {children}
                                    </th>
                                ),
                                td: ({ children }) => (
                                    <td className="px-4 py-3 text-sm text-gray-400">{children}</td>
                                ),
                                hr: () => (
                                    <hr className="my-8 border-white/10" />
                                ),
                                strong: ({ children }) => (
                                    <strong className="font-bold text-white">{children}</strong>
                                ),
                                em: ({ children }) => (
                                    <em className="italic text-gray-400">{children}</em>
                                ),
                                a: ({ href, children }) => (
                                    <a 
                                        href={href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-white underline hover:text-gray-300"
                                    >
                                        {children}
                                    </a>
                                )
                            }}
                        >
                            {item.content}
                        </ReactMarkdown>
                    </article>
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10">
                <button
                    onClick={onComplete}
                    className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                    Mark as Complete & Continue
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}
