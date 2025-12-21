import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

export default function InformationalPane({ item, onComplete }) {
    return (
        <div className="h-full flex flex-col bg-[var(--bg-panel)] font-sans">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-mono font-bold uppercase tracking-wider">
                            <BookOpen size={14} />
                            <span>Reading Module</span>
                        </div>
                        <div className="h-4 w-px bg-[var(--border-subtle)]"></div>
                        <h1 className="text-sm font-bold text-white tracking-wide">{item.title}</h1>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-mono bg-[var(--bg-panel)] px-2 py-1 rounded border border-[var(--border-subtle)]">
                        <Clock size={12} />
                        <span>{item.duration}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar px-8 py-8">
                <div className="max-w-3xl mx-auto">
                    <MarkdownRenderer content={item.content} />
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex justify-center">
                <button
                    onClick={onComplete}
                    className="px-8 py-3 bg-[var(--accent-primary)] hover:bg-blue-600 text-white rounded-lg font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center gap-3 text-xs"
                >
                    Mark as Complete & Continue
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}
