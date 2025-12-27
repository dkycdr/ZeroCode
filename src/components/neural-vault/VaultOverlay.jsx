import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralVaultSystem from './NeuralVaultSystem';
import { RiCloseLine } from 'react-icons/ri';

export default function VaultOverlay({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-[500px] z-[100] shadow-2xl border-l border-white/10 flex flex-col bg-black"
                    >
                        {/* Header handled inside System or we can wrapper it. 
                            NeuralVaultSystem has an onClose prop that renders a close button.
                        */}
                        <div className="h-full w-full">
                            <NeuralVaultSystem onClose={onClose} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
