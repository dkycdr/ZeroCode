import { useState, useRef, useEffect } from 'react';
import { RiCloseLine, RiSendPlaneFill, RiRobot2Fill, RiUser3Fill, RiCodeBoxLine, RiBugLine, RiArrowRightLine, RiSparklingLine } from 'react-icons/ri';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { aiService } from '../../lib/aiService';

export default function AIAssistantPanel({ isOpen, onClose, currentCode = "", taskDescription = "" }) {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Greetings! I am **Nebula**, your cosmic coding guide. How can I assist your journey through the digital void today?" }
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

    const handleSend = async (textOverride = null) => {
        const textToSend = textOverride || input;
        if (!textToSend.trim() || isLoading) return;

        // Add user message
        const userMessage = { role: 'user', content: textToSend };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const context = `Task: ${taskDescription}\n\nCurrent Code:\n\`\`\`\n${currentCode}\n\`\`\``.trim();
            const response = await aiService.getChatResponse(textToSend, context);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Failed to connect to the cosmos. Please verify your API authentication." }]);
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-y-0 right-0 w-[450px] bg-zinc-950/95 backdrop-blur-xl border-l border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-[60] flex flex-col font-sans transition-all duration-500 ease-in-out">
            {/* Premium Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5 bg-zinc-900/40 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-30 animate-pulse" />
                        <div className="relative w-10 h-10 rounded-xl bg-[#09090b] border border-white/10 flex items-center justify-center text-indigo-400 shadow-xl">
                            <RiRobot2Fill size={22} className="animate-float" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-black text-white tracking-widest uppercase flex items-center gap-2">
                            Nebula AI
                            <RiSparklingLine className="text-indigo-400 animate-pulse" />
                        </h2>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse" />
                            <span className="text-[10px] text-zinc-500 font-bold tracking-tighter uppercase">Quantum Synapse Active</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                    <RiCloseLine size={24} />
                </button>
            </div>

            {/* Quick Actions overlay (if empty) */}
            {messages.length <= 1 && (
                <div className="px-5 py-8 bg-zinc-900/20 border-b border-white/5">
                    <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[.2em] mb-4">Tactical Assistance</h3>
                    <div className="space-y-3">
                        <button
                            onClick={() => handleSend("Analyze my current code and explain its architecture.")}
                            className="w-full bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 p-4 rounded-2xl flex items-center gap-4 transition-all group text-left"
                        >
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform border border-indigo-500/20">
                                <RiCodeBoxLine size={20} />
                            </div>
                            <div className="flex-1">
                                <span className="block text-xs font-bold text-white mb-0.5 group-hover:text-indigo-300">Architectural Analysis</span>
                                <span className="block text-[10px] text-zinc-500">Deconstruct logic and patterns</span>
                            </div>
                            <RiArrowRightLine className="text-zinc-700 group-hover:text-indigo-400 transition-all transform group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={() => handleSend("I suspect a bug in my logic. Help me perform a deep diagnostic.")}
                            className="w-full bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/5 p-4 rounded-2xl flex items-center gap-4 transition-all group text-left"
                        >
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform border border-red-500/20">
                                <RiBugLine size={20} />
                            </div>
                            <div className="flex-1">
                                <span className="block text-xs font-bold text-white mb-0.5 group-hover:text-red-300">Deep Diagnostic</span>
                                <span className="block text-[10px] text-zinc-500">Isolate and eliminate anomalies</span>
                            </div>
                            <RiArrowRightLine className="text-zinc-700 group-hover:text-red-400 transition-all transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            )}

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-zinc-800">
                {messages.map((msg, idx) => (
                    <div key={idx} className={clsx("flex gap-4 group", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}>
                        {/* Avatar */}
                        <div className={clsx(
                            "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-2xl transition-transform group-hover:scale-110",
                            msg.role === 'user'
                                ? "bg-zinc-800 text-zinc-400 border border-white/5"
                                : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                        )}>
                            {msg.role === 'user' ? <RiUser3Fill size={16} /> : <RiRobot2Fill size={16} />}
                        </div>

                        {/* Bubble */}
                        <div className={clsx(
                            "max-w-[88%] rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-sm relative",
                            msg.role === 'user'
                                ? "bg-indigo-600 text-white rounded-tr-sm"
                                : "bg-zinc-900 text-zinc-200 rounded-tl-sm border border-white/5"
                        )}>
                            {msg.role === 'user' ? (
                                msg.content
                            ) : (
                                <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-a:text-indigo-400 prose-code:text-indigo-300">
                                    <ReactMarkdown
                                        components={{
                                            code({ node, inline, className, children, ...props }) {
                                                const match = /language-(\w+)/.exec(className || '');
                                                return !inline ? (
                                                    <div className="bg-black/40 rounded-xl border border-white/5 p-4 my-4 font-mono text-[11px] overflow-x-auto selection:bg-indigo-500/30">
                                                        <code className={className} {...props}>
                                                            {children}
                                                        </code>
                                                    </div>
                                                ) : (
                                                    <code className="bg-white/5 text-indigo-300 rounded px-1.5 py-0.5 font-mono text-xs border border-white/10" {...props}>
                                                        {children}
                                                    </code>
                                                );
                                            },
                                            p: ({ children }) => <p className="mb-4 last:mb-0 text-zinc-300/90">{children}</p>,
                                            strong: ({ children }) => <strong className="text-white font-black tracking-tight">{children}</strong>
                                        }}
                                    >
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            )}
                            <div className={clsx(
                                "absolute bottom-[-18px] text-[9px] font-bold text-zinc-600 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                msg.role === 'user' ? "right-0" : "left-0"
                            )}>
                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {msg.role === 'user' ? 'Transmission Sent' : 'Data Received'}
                            </div>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-4 animate-pulse">
                        <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-1">
                            <RiSparklingLine className="text-zinc-600 animate-spin-slow" />
                        </div>
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl rounded-tl-sm p-5 h-14 w-28 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce shadow-[0_0_8px_rgba(99,102,241,0.8)]" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce shadow-[0_0_8px_rgba(99,102,241,0.8)]" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Premium Input Area */}
            <div className="p-6 bg-zinc-900/40 backdrop-blur-md border-t border-white/5">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-all duration-500" />
                    <div className="relative bg-[#09090b] border border-white/10 rounded-2xl focus-within:border-indigo-500/50 transition-all shadow-2xl">
                        <textarea
                            rows="1"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Consult Nebula..."
                            className="w-full bg-transparent border-none rounded-2xl py-4 pl-5 pr-14 text-sm text-white placeholder-zinc-600 focus:ring-0 resize-none min-h-[56px] max-h-32"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={isLoading || !input.trim()}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 disabled:opacity-30 disabled:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20"
                        >
                            <RiSendPlaneFill size={18} />
                        </button>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-zinc-600 tracking-tighter uppercase px-1">
                    <span>Cosmic Neural Link Established</span>
                    <span>Gemini Flash</span>
                </div>
            </div>
        </div>
    );
}
