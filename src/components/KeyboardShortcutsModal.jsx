import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { KEYBOARD_SHORTCUTS } from '../hooks/useKeyboardShortcuts';

/**
 * Keyboard Shortcuts Help Modal
 * Displays all available keyboard shortcuts in a cyberpunk-styled modal
 */
const KeyboardShortcutsModal = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-200
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative w-full max-w-2xl mx-4 transform transition-all duration-200
          ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
            >
                {/* Cyberpunk border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-75" />

                <div className="relative bg-[#0a0e1a] rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/30 bg-cyan-500/5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            <h2 className="text-lg font-mono text-cyan-400 tracking-wider">
                                KEYBOARD_SHORTCUTS
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        <div className="grid gap-6">
                            {KEYBOARD_SHORTCUTS.map((category) => (
                                <div key={category.category}>
                                    {/* Category Header */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                        <span className="text-xs font-mono text-cyan-400/80 uppercase tracking-widest">
                                            {category.category}
                                        </span>
                                        <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
                                    </div>

                                    {/* Shortcuts Grid */}
                                    <div className="grid gap-2">
                                        {category.shortcuts.map((shortcut, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between py-2 px-3 rounded-md
                          bg-gradient-to-r from-cyan-500/5 to-transparent
                          hover:from-cyan-500/10 transition-colors group"
                                            >
                                                {/* Description */}
                                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                                    {shortcut.description}
                                                </span>

                                                {/* Keys */}
                                                <div className="flex items-center gap-1">
                                                    {shortcut.keys.map((key, keyIdx) => (
                                                        <span key={keyIdx} className="flex items-center gap-1">
                                                            <kbd className="px-2 py-1 text-xs font-mono rounded
                                bg-[#1a1f2e] border border-cyan-500/30
                                text-cyan-300 shadow-lg shadow-cyan-500/10
                                group-hover:border-cyan-400/50 group-hover:text-cyan-200
                                transition-all">
                                                                {key}
                                                            </kbd>
                                                            {keyIdx < shortcut.keys.length - 1 && (
                                                                <span className="text-gray-500 text-xs">+</span>
                                                            )}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Tip */}
                        <div className="mt-6 pt-4 border-t border-cyan-500/20">
                            <p className="text-xs text-gray-500 font-mono text-center">
                                <span className="text-cyan-500">TIP:</span> Press{' '}
                                <kbd className="px-1.5 py-0.5 text-[10px] bg-[#1a1f2e] border border-cyan-500/30 rounded text-cyan-400">
                                    ?
                                </kbd>
                                {' '}anytime to show this help
                            </p>
                        </div>
                    </div>

                    {/* Scanline effect */}
                    <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-5" />
                </div>
            </div>
        </div>
    );
};

export default KeyboardShortcutsModal;
