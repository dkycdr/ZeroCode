import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * MarkdownRenderer
 * Renders markdown content with BALANCED spacing.
 * Optimized: Not too tight, not too loose.
 */
const MarkdownRenderer = ({ content, className = '' }) => {
    return (
        <div className={`
            prose prose-invert max-w-none 
            
            /* Clean, Readable Fonts */
            prose-p:text-gray-300 prose-p:text-base prose-p:leading-7 prose-p:mb-5

            /* Headings */
            prose-headings:font-bold prose-headings:text-white
            prose-h1:text-3xl prose-h1:tracking-tight prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-gray-800
            prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-blue-400 prose-h2:flex prose-h2:items-center
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-200

            /* Lists - The "Points" view (Tighter) */
            prose-ul:my-6 prose-ul:ml-0 prose-ul:pl-0 
            prose-li:list-none prose-li:mb-3 prose-li:bg-gray-800/30 prose-li:px-4 prose-li:py-3 prose-li:rounded-lg prose-li:border prose-li:border-gray-800/50
            prose-li:flex prose-li:items-start prose-li:gap-3
            
            /* Quotes */
            prose-blockquote:bg-blue-900/10 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:rounded-r-lg prose-blockquote:not-italic

            ${className}
        `}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                    // Custom List Item
                    li: ({ children }) => (
                        <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                            <div className="flex-1 text-base leading-relaxed text-gray-300">
                                {children}
                            </div>
                        </li>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-xl font-bold text-blue-400 mt-12 mb-6 pb-2 border-b border-gray-800 flex items-center gap-2">
                            <span className="text-2xl">#</span>
                            {children}
                        </h2>
                    ),
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <div className="my-8 rounded-lg overflow-hidden border border-gray-700 shadow-xl bg-[#1e1e1e]">
                                <div className="bg-[#252526] px-4 py-2 text-xs font-mono text-gray-400 flex justify-between items-center border-b border-black/20">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                    </div>
                                    <span className="font-bold text-blue-400 uppercase tracking-widest">{match[1]}</span>
                                </div>
                                <SyntaxHighlighter
                                    {...props}
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{
                                        margin: 0,
                                        borderRadius: 0,
                                        padding: '1rem',
                                        backgroundColor: '#1e1e1e',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            </div>
                        ) : (
                            <code {...props} className="bg-blue-500/10 text-blue-300 px-1.5 py-0.5 rounded border border-blue-500/20 font-mono text-sm mx-0.5">
                                {children}
                            </code>
                        );
                    },
                    table: ({ children }) => (
                        <div className="overflow-x-auto my-8 rounded-lg border border-gray-800 bg-gray-900/40 p-1">
                            <table className="min-w-full text-left bg-transparent">
                                {children}
                            </table>
                        </div>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
