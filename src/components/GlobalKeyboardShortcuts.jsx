import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import KeyboardShortcutsModal from './KeyboardShortcutsModal';

/**
 * Global Keyboard Shortcuts Provider
 * Wraps the app and handles global keyboard shortcuts
 */
const GlobalKeyboardShortcuts = ({ children }) => {
    const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);
    const location = useLocation();

    // Check if we're on a page where shortcuts should be active
    const isPublicPage = ['/', '/login', '/register'].includes(location.pathname);

    const toggleShortcutsHelp = useCallback(() => {
        setShowShortcutsHelp(prev => !prev);
    }, []);

    // Listen for custom event from Header button
    useEffect(() => {
        const handleToggle = () => toggleShortcutsHelp();
        window.addEventListener('toggle-shortcuts-modal', handleToggle);
        return () => window.removeEventListener('toggle-shortcuts-modal', handleToggle);
    }, [toggleShortcutsHelp]);

    // Initialize keyboard shortcuts
    useKeyboardShortcuts({
        onToggleShortcutsHelp: toggleShortcutsHelp,
        enabled: !isPublicPage // Disable on landing/login pages
    });

    return (
        <>
            {children}
            <KeyboardShortcutsModal
                isOpen={showShortcutsHelp}
                onClose={() => setShowShortcutsHelp(false)}
            />
        </>
    );
};

export default GlobalKeyboardShortcuts;

