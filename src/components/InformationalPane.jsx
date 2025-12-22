import { BookOpen, CheckCircle2, ArrowRight, Database } from 'lucide-react'; // Changed icon to Database
import MarkdownRenderer from './MarkdownRenderer';
import { motion } from 'framer-motion';

export default function InformationalPane({ item, onComplete }) {
    if (!item) return <div className="p-12 text-center text-gray-500 font-mono animate-pulse">Accessing Data Archives...</div>;

    return (
        <div className="h-full flex flex-col bg-[#050505] font-sans relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Header */}
            <div className="flex-none p-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md relative z-10 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-2">
                        <Database size={12} />
                        <span>Data Archive</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                        {item.title}
                    </h1>
                </div>

                {/* Visual Decorative Element */}
                <div className="hidden md:flex items-center gap-1.5 opacity-30">
                    <div className="w-1 h-8 bg-indigo-500 skew-x-12" />
                    <div className="w-1 h-6 bg-indigo-500 skew-x-12" />
                    <div className="w-1 h-4 bg-indigo-500 skew-x-12" />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10">
                <div className="max-w-3xl mx-auto px-6 py-12">
                    {/* Main Content */}
                    <div className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white 
                        prose-p:text-gray-400 prose-p:leading-relaxed 
                        prose-strong:text-indigo-300 prose-strong:font-bold
                        prose-code:text-indigo-200 prose-code:bg-indigo-900/20 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                        prose-ul:marker:text-indigo-500
                        prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl">
                        <MarkdownRenderer content={item.content} />
                    </div>

                    {/* Completion Section */}
                    <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-8 opacity-50" />

                        <button
                            onClick={onComplete}
                            className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-3 relative z-10">
                                <span>MARK AS COMPLETE & CONTINUE</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                        <p className="mt-4 text-xs font-mono text-gray-600">
                            PRESS TO SYNC PROGRESS TO NEURAL NETWORK
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
