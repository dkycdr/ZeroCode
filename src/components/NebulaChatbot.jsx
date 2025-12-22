import remarkGfm from 'remark-gfm';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiRobot2Fill, RiCloseLine, RiSendPlaneFill, RiSparklingLine, RiUser3Fill } from 'react-icons/ri';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { geminiService } from '../lib/geminiService';

export default function NebulaChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "I am **Nebula**, ZeroCode's elite intelligence. I'm globally active and ready to assist your mastery of the digital arts. What occupies your mind?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await geminiService.getResponse(input);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            const isQuota = error.message?.includes('429');
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: isQuota
                    ? "Tingkat transmisi saya mencapai batas maksimal (Quota Exceeded). Tunggu sebentar (sekitar 1 menit) lalu coba lagi ya! 🌌"
                    : "Communication disrupted. Verify your cosmic link (API Key)."
            }]);
        } finally {
            setIsLoading(false);
        }

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[90vw] max-w-[380px] h-[580px] max-h-[80vh] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden ring-1 ring-white/5"
                    >
                        {/* Aurora Background Enforcer */}
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2rem]">
                            <motion.div
                                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(99,102,241,0.05)_120deg,rgba(168,85,247,0.05)_180deg,transparent_360deg)] blur-3xl opacity-30"
                            />
                            <div className="absolute inset-0 bg-noise opacity-[0.02]" />
                        </div>

                        {/* Header */}
                        <div className="relative z-10 p-5 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-slow" />
                                    <div className="relative w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-indigo-400 shadow-xl overflow-hidden">
                                        <RiRobot2Fill size={20} className="relative z-10" />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#09090b] rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 tracking-tight flex items-center gap-2">
                                        Nebula AI
                                    </h2>
                                    <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                        System Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all active:scale-95"
                            >
                                <RiCloseLine size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="relative z-10 flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent overscroll-contain">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    key={idx}
                                    className={clsx("flex gap-3 group", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}
                                >
                                    <div className={clsx(
                                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md",
                                        msg.role === 'user'
                                            ? "bg-zinc-800 text-zinc-400 border border-white/5"
                                            : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                    )}>
                                        {msg.role === 'user' ? <RiUser3Fill size={14} /> : <RiRobot2Fill size={16} />}
                                    </div>

                                    <div className={clsx(
                                        "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm backdrop-blur-sm border",
                                        msg.role === 'user'
                                            ? "bg-zinc-800 text-white border-white/5 rounded-tr-sm"
                                            : "bg-white/5 text-zinc-200 border-white/10 rounded-tl-sm"
                                    )}>
                                        <div className="prose prose-invert prose-xs max-w-none prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-table:border-collapse prose-th:border prose-th:border-white/10 prose-th:bg-white/5 prose-th:p-2 prose-td:border prose-td:border-white/10 prose-td:p-2">
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={{
                                                    code: ({ node, inline, className, children, ...props }) => {
                                                        const match = /language-(\w+)/.exec(className || '');
                                                        return !inline && match ? (
                                                            <div className="relative group/code my-3 rounded-lg border border-white/10 overflow-hidden bg-[#0a0a0c]">
                                                                <div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/5">
                                                                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{match[1]}</span>
                                                                </div>
                                                                <div className="p-3 overflow-x-auto text-[11px] font-mono">
                                                                    <code className={className} {...props}>
                                                                        {children}
                                                                    </code>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <code className="bg-white/10 text-indigo-300 px-1 py-0.5 rounded font-mono text-[11px]" {...props}>
                                                                {children}
                                                            </code>
                                                        )
                                                    },
                                                    table: ({ children }) => (
                                                        <div className="overflow-x-auto my-4 border border-white/10 rounded-lg">
                                                            <table className="w-full text-left text-xs border-collapse">
                                                                {children}
                                                            </table>
                                                        </div>
                                                    ),
                                                    thead: ({ children }) => <thead className="bg-white/5 text-zinc-300">{children}</thead>,
                                                    th: ({ children }) => <th className="p-2 border-b border-r border-white/10 font-semibold last:border-r-0">{children}</th>,
                                                    td: ({ children }) => <td className="p-2 border-b border-r border-white/5 last:border-r-0">{children}</td>
                                                }}
                                            >
                                                {msg.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3 pl-1">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                                        <RiSparklingLine className="text-indigo-400 animate-spin-slow" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="relative z-10 p-4 border-t border-white/5 bg-zinc-900/50 backdrop-blur-md">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type your command..."
                                    className="w-full bg-black/20 text-sm text-white placeholder-zinc-500 rounded-xl py-3 pl-4 pr-12 border border-transparent focus:border-white/10 focus:bg-black/40 focus:ring-0 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 p-1.5 bg-white/5 text-zinc-400 rounded-lg hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                                >
                                    <RiSendPlaneFill size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05, rotate: isOpen ? 90 : 0 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                    "relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/5 z-[100] transition-colors duration-500",
                    isOpen ? "bg-zinc-800" : "bg-black/40 hover:bg-black/60"
                )}
            >
                {/* Subtle Glow when closed */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-black animate-gradient-xy" />
                    </div>
                )}

                <div className="relative z-10 text-white/80">
                    {isOpen ? <RiCloseLine size={24} /> : <RiRobot2Fill size={26} className="drop-shadow-sm" />}
                </div>

                {!isOpen && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500 border-2 border-zinc-950"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}

