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

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-mono">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
                        className="absolute bottom-24 right-0 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)]"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
                            background: "rgba(5, 5, 10, 0.95)"
                        }}
                    >
                        {/* Cyber Border */}
                        <div className="absolute inset-0 border border-cyan-500/30 pointer-events-none" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }} />

                        {/* Grid Background */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
                        </div>

                        {/* Header */}
                        <div className="relative z-10 p-5 border-b border-cyan-500/20 bg-black/40 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500 flex items-center justify-center relative shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                                        <RiRobot2Fill size={20} className="text-cyan-400" />
                                        <div className="absolute inset-0 bg-cyan-400/20 animate-pulse" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 10%)' }}></div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
                                </div>
                                <div>
                                    <h2 className="text-sm font-black text-white tracking-[0.1em] uppercase glitch-text flex items-center gap-2">
                                        NEBULA_CORE<span className="text-cyan-500">_V2</span>
                                    </h2>
                                    <span className="text-[9px] text-cyan-500/70 font-bold tracking-widest flex items-center gap-1">
                                        // SYSTEM_ONLINE
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 flex items-center justify-center text-cyan-500/50 hover:text-red-500 hover:bg-red-500/10 border border-transparent hover:border-red-500/50 transition-all"
                            >
                                <RiCloseLine size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="relative z-10 flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-cyan-900/50 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={idx}
                                    className={clsx("flex gap-4", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}
                                >
                                    {/* Avatar */}
                                    <div className={clsx(
                                        "w-8 h-8 flex items-center justify-center flex-shrink-0 border mt-1",
                                        msg.role === 'user'
                                            ? "bg-zinc-900 border-white/20 text-gray-400"
                                            : "bg-cyan-950/30 border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                                    )}>
                                        {msg.role === 'user' ? <RiUser3Fill size={14} /> : <RiRobot2Fill size={14} />}
                                    </div>

                                    {/* Bubble */}
                                    <div className={clsx(
                                        "max-w-[85%] p-4 text-xs leading-relaxed relative border",
                                        msg.role === 'user'
                                            ? "bg-zinc-900/80 border-white/10 text-gray-300"
                                            : "bg-cyan-950/20 border-cyan-500/30 text-cyan-100"
                                    )}>
                                        {/* Decorative Corners for Bot */}
                                        {msg.role === 'assistant' && (
                                            <>
                                                <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-cyan-500"></div>
                                                <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-cyan-500"></div>
                                            </>
                                        )}

                                        <div className="prose prose-invert prose-xs max-w-none prose-p:font-mono prose-code:font-mono prose-code:text-yellow-400">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {msg.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 bg-cyan-950/30 border border-cyan-500/50 flex items-center justify-center flex-shrink-0 animate-pulse">
                                        <RiSparklingLine className="text-cyan-400" size={14} />
                                    </div>
                                    <div className="p-4 bg-cyan-950/10 border border-cyan-500/20 text-cyan-500 text-xs font-mono animate-pulse">
                                        PROCESSING_DATA_STREAM...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="relative z-10 p-4 border-t border-cyan-500/20 bg-black/80 backdrop-blur-md">
                            <div className="relative flex items-center gap-2">
                                <span className="text-cyan-500 font-bold">{'>'}</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="ENTER_COMMAND..."
                                    className="w-full bg-transparent text-xs font-mono text-white placeholder-cyan-900 border-none focus:ring-0 focus:outline-none tracking-wider"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="p-2 text-cyan-500 hover:text-white hover:bg-cyan-500/20 transition-all disabled:opacity-30 disabled:hover:bg-transparent"
                                >
                                    <RiSendPlaneFill size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cyber Trigger Button */}
            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                    "relative w-16 h-16 flex items-center justify-center z-[100] transition-all group",
                    isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
            >
                {/* Hexagon / Cyber Shape */}
                <div
                    className="absolute inset-0 bg-black border border-cyan-500 shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] group-hover:bg-cyan-950 transition-colors"
                    style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                ></div>

                {/* Rotating Ring */}
                <div className={clsx(
                    "absolute inset-[-4px] border-2 border-dashed border-cyan-500/30 rounded-full animate-spin-slow pointer-events-none",
                    isHovered && "border-cyan-400 opacity-100"
                )}></div>

                <div className="relative z-10 text-cyan-400 group-hover:text-white transition-colors">
                    {isOpen ? <RiCloseLine size={28} /> : <RiRobot2Fill size={28} />}
                </div>

                {/* Status Dot */}
                <span className="absolute top-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse z-20"></span>
            </motion.button>
            {/* Close Button when open, positioned absolutely relative to container to not move */}
            <AnimatePresence>
                {isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute bottom-0 right-0 w-14 h-14 bg-black border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center shadow-lg z-[90]"
                        style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                    >
                        <RiCloseLine size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

