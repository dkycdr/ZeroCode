import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Global keyboard shortcuts hook
 * Provides platform-wide keyboard navigation and actions
 */
export function useKeyboardShortcuts({
    onToggleShortcutsHelp,
    onToggleChatbot,
    onToggleSidebar,
    onRunCode,
    onNextItem,
    onPrevItem,
    enabled = true
} = {}) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleKeyDown = useCallback((event) => {
        // Ignore if disabled or typing in input/textarea
        if (!enabled) return;

        const target = event.target;
        const tagName = target.tagName.toLowerCase();
        const isEditing = tagName === 'input' || tagName === 'textarea' || target.isContentEditable;

        // Allow some shortcuts even when editing
        const isModifierPressed = event.ctrlKey || event.metaKey;

        // Escape - always works (close modals, etc.)
        if (event.key === 'Escape') {
            // Let the event bubble up to close modals
            return;
        }

        // Don't intercept if typing in input (unless with modifier)
        if (isEditing && !isModifierPressed) return;

        // ? - Show keyboard shortcuts help (without modifiers)
        if (event.key === '?' && !isModifierPressed && !isEditing) {
            event.preventDefault();
            onToggleShortcutsHelp?.();
            return;
        }

        // Ctrl/Cmd + K - Global search / Command palette
        if (isModifierPressed && event.key === 'k') {
            event.preventDefault();
            // TODO: Open command palette when implemented
            console.log('Command palette triggered');
            return;
        }

        // Ctrl/Cmd + / - Toggle sidebar
        if (isModifierPressed && event.key === '/') {
            event.preventDefault();
            onToggleSidebar?.();
            return;
        }

        // Ctrl/Cmd + Enter - Run code (in learning environment)
        if (isModifierPressed && event.key === 'Enter') {
            if (location.pathname.startsWith('/learn/')) {
                event.preventDefault();
                onRunCode?.();
            }
            return;
        }

        // Ctrl/Cmd + B - Toggle AI chatbot
        if (isModifierPressed && event.key === 'b') {
            event.preventDefault();
            onToggleChatbot?.();
            return;
        }

        // Navigation shortcuts (without modifiers, not when editing)
        if (!isEditing && !isModifierPressed) {
            switch (event.key) {
                // G then D - Go to Dashboard
                case 'g':
                    // Start listening for next key
                    window._pendingGotoKey = true;
                    setTimeout(() => { window._pendingGotoKey = false; }, 500);
                    return;

                // Arrow keys for lesson navigation
                case 'ArrowRight':
                case 'j':
                    if (location.pathname.startsWith('/learn/') || location.pathname.startsWith('/course/')) {
                        event.preventDefault();
                        onNextItem?.();
                    }
                    return;

                case 'ArrowLeft':
                case 'k':
                    if (location.pathname.startsWith('/learn/') || location.pathname.startsWith('/course/')) {
                        event.preventDefault();
                        onPrevItem?.();
                    }
                    return;
            }
        }

        // Handle "g" + key navigation
        if (window._pendingGotoKey && !isEditing) {
            window._pendingGotoKey = false;
            event.preventDefault();

            switch (event.key) {
                case 'd': navigate('/dashboard'); break;
                case 'l': navigate('/resources'); break;
                case 'c': navigate('/community'); break;
                case 'p': navigate('/profile'); break;
                case 's': navigate('/specializations'); break;
                case 'r': navigate('/leaderboard'); break;
                case 'h': navigate('/'); break;
            }
        }

    }, [enabled, navigate, location, onToggleShortcutsHelp, onToggleChatbot, onToggleSidebar, onRunCode, onNextItem, onPrevItem]);

    useEffect(() => {
        if (enabled) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [enabled, handleKeyDown]);

    return { handleKeyDown };
}

/**
 * Keyboard shortcuts configuration
 * Used by both the hook and the help modal
 */
export const KEYBOARD_SHORTCUTS = [
    {
        category: 'Navigation',
        shortcuts: [
            { keys: ['g', 'd'], description: 'Go to Dashboard' },
            { keys: ['g', 'l'], description: 'Go to Library' },
            { keys: ['g', 'c'], description: 'Go to Community' },
            { keys: ['g', 'p'], description: 'Go to Profile' },
            { keys: ['g', 's'], description: 'Go to Specializations' },
            { keys: ['g', 'r'], description: 'Go to Leaderboard' },
            { keys: ['g', 'h'], description: 'Go to Home' },
        ]
    },
    {
        category: 'Learning',
        shortcuts: [
            { keys: ['→', 'j'], description: 'Next lesson/item' },
            { keys: ['←', 'k'], description: 'Previous lesson/item' },
            { keys: ['Ctrl', 'Enter'], description: 'Run code' },
            { keys: ['Ctrl', '/'], description: 'Toggle sidebar' },
        ]
    },
    {
        category: 'General',
        shortcuts: [
            { keys: ['?'], description: 'Show keyboard shortcuts' },
            { keys: ['Ctrl', 'K'], description: 'Command palette' },
            { keys: ['Ctrl', 'B'], description: 'Toggle AI chatbot' },
            { keys: ['Esc'], description: 'Close modal/panel' },
        ]
    }
];

export default useKeyboardShortcuts;
