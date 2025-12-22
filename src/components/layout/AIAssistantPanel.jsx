import { useState, useRef, useEffect } from 'react';
import { RiCloseLine, RiSendPlaneFill, RiRobot2Fill, RiUser3Fill, RiLightbulbFlashFill, RiCodeBoxLine, RiBugLine, RiArrowRightLine } from 'react-icons/ri';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { aiService } from '../../lib/aiService';

export default function AIAssistantPanel({ isOpen, onClose, currentCode = "", taskDescription = "" }) {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hi! I'm ready to help. What do you need?" }
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
            // Contextual prompt construction
            const fullContext = `
Task: ${taskDescription}
Current Code:
${currentCode}

User Question: ${textToSend}
            `.trim();

            const response = await aiService.getHint(currentCode, fullContext);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Connection error. Please check your API key." }]);
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
        <div className="fixed inset-y-0 right-0 w-[420px] bg-[#09090b] border-l border-[#27272a] shadow-2xl z-[60] flex flex-col font-sans transition-transform duration-300 transform translate-x-0">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#27272a] bg-[#09090b]">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                        <RiRobot2Fill size={18} />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-100">AI Learning Assistant</h2>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] text-gray-500 font-medium tracking-wide">ONLINE • LLAMA 3 70B</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                    <RiCloseLine size={20} />
                </button>
            </div>

            {/* Quick Actions overlay (if empty) */}
            {messages.length <= 1 && (
                <div className="px-4 py-6 bg-gradient-to-b from-[#09090b] to-[#101012] border-b border-[#27272a]">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-1 gap-2">
                        <button
                            onClick={() => handleSend("Explain this code to me")}
                            className="bg-[#18181b] border border-[#27272a] hover:border-indigo-500/50 hover:bg-[#1f1f23] p-3 rounded-lg flex items-center gap-3 transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <RiCodeBoxLine size={16} />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs font-bold text-gray-200 group-hover:text-white">Explain Code</span>
                                <span className="block text-[10px] text-gray-500">How does it work?</span>
                            </div>
                            <RiArrowRightLine className="ml-auto text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-5px] group-hover:translate-x-0" />
                        </button>

                        <button
                            onClick={() => handleSend("I have an error, help me fix it")}
                            className="bg-[#18181b] border border-[#27272a] hover:border-red-500/50 hover:bg-[#1f1f23] p-3 rounded-lg flex items-center gap-3 transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <RiBugLine size={16} />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs font-bold text-gray-200 group-hover:text-white">Fix Error</span>
                                <span className="block text-[10px] text-gray-500">Debug this issue</span>
                            </div>
                            <RiArrowRightLine className="ml-auto text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-5px] group-hover:translate-x-0" />
                        </button>
                    </div>
                </div>
            )}

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#09090b]">
                {messages.map((msg, idx) => (
                    <div key={idx} className={clsx("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}>
                        {/* Avatar */}
                        <div className={clsx(
                            "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm",
                            msg.role === 'user'
                                ? "bg-[#27272a] text-gray-300"
                                : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                        )}>
                            {msg.role === 'user' ? <RiUser3Fill size={14} /> : <RiRobot2Fill size={14} />}
                        </div>

                        {/* Bubble */}
                        <div className={clsx(
                            "max-w-[85%] rounded-2xl p-3.5 text-sm leading-7 shadow-sm",
                            msg.role === 'user'
                                ? "bg-[#27272a] text-gray-100 rounded-tr-sm"
                                : "bg-[#18181b] text-gray-300 rounded-tl-sm border border-[#27272a]"
                        )}>
                            {msg.role === 'user' ? (
                                msg.content
                            ) : (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <ReactMarkdown
                                        components={{
                                            // INLINE CODE (Default)
                                            code({ node, className, children, ...props }) {
                                                return (
                                                    <code className="bg-[#27272a] text-[#a5b4fc] rounded px-1.5 py-0.5 font-mono text-xs border border-[#3f3f46]/50 [.code-block_&]:bg-transparent [.code-block_&]:p-0 [.code-block_&]:border-none [.code-block_&]:text-inherit" {...props}>
                                                        {children}
                                                    </code>
                                                );
                                            },
                                            // PRE (Block Container)
                                            pre({ children }) {
                                                return (
                                                    <div className="code-block bg-[#0f0f11] rounded-lg border border-[#27272a] p-3 my-3 overflow-x-auto shadow-inner text-xs font-mono">
                                                        <pre>{children}</pre>
                                                    </div>
                                                );
                                            },
                                            p: ({ children }) => <p className="mb-3 last:mb-0 text-gray-300 has-[code]:leading-loose">{children}</p>,
                                            ul: ({ children }) => <ul className="list-disc pl-4 mb-3 space-y-1 marker:text-gray-500">{children}</ul>,
                                            ol: ({ children }) => <ol className="list-decimal pl-4 mb-3 space-y-1 marker:text-gray-500">{children}</ol>,
                                            strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>
                                        }}
                                    >
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-3 animate-pulse">
                        <div className="w-7 h-7 rounded-lg bg-[#27272a] flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                        </div>
                        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm p-4 h-12 w-24 flex items-center justify-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#09090b] border-t border-[#27272a]">
                <div className="relative bg-[#18181b] border border-[#27272a] rounded-xl focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all shadow-sm">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask a follow-up question..."
                        className="w-full bg-transparent border-none rounded-xl py-3 pl-4 pr-12 text-sm text-gray-200 placeholder-gray-500 focus:ring-0"
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-indigo-400 disabled:opacity-50 disabled:hover:text-gray-500 transition-colors"
                    >
                        <RiSendPlaneFill size={18} />
                    </button>
                </div>
                <div className="mt-2 text-[10px] text-center text-gray-600 font-medium">
                    AI can make mistakes. Verify important info.
                </div>
            </div>
        </div>
    );
}
