import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { RARITY_COLORS } from '../../data/badges';

/**
 * Badge Unlock Modal
 * Celebration animation when user unlocks a new badge
 */
const BadgeUnlockModal = ({ badge, isOpen, onClose }) => {
    if (!badge || !isOpen) return null;

    const rarity = RARITY_COLORS[badge.rarity] || RARITY_COLORS.common;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: '50%',
                                    y: '50%',
                                    scale: 0,
                                    opacity: 1
                                }}
                                animate={{
                                    x: `${Math.random() * 100}%`,
                                    y: `${Math.random() * 100}%`,
                                    scale: Math.random() * 2,
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 2,
                                    delay: Math.random() * 0.5,
                                    ease: 'easeOut'
                                }}
                                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${rarity.bg}`}
                            />
                        ))}
                    </div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.5, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', damping: 15 }}
                        className="relative z-10 max-w-md mx-4"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-2 -right-2 p-2 bg-zinc-900 rounded-full border border-white/10 text-gray-400 hover:text-white z-20"
                        >
                            <X size={16} />
                        </button>

                        {/* Card */}
                        <div className={`relative overflow-hidden rounded-lg border-2 ${rarity.border} bg-black p-8 text-center ${rarity.glow} shadow-2xl`}>
                            {/* Animated background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${rarity.bg} opacity-10 animate-pulse`} />

                            {/* Scanlines */}
                            <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none" />

                            {/* Header */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative z-10 space-y-2 mb-6"
                            >
                                <div className="flex items-center justify-center gap-2 text-cyan-400">
                                    <Sparkles size={16} className="animate-pulse" />
                                    <span className="text-xs font-mono uppercase tracking-widest">Achievement Unlocked</span>
                                    <Sparkles size={16} className="animate-pulse" />
                                </div>
                            </motion.div>

                            {/* Badge Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', delay: 0.3, damping: 10 }}
                                className="relative z-10 mb-6"
                            >
                                <div className={`w-24 h-24 mx-auto rounded-xl bg-gradient-to-br ${rarity.bg} flex items-center justify-center text-5xl border-2 ${rarity.border} shadow-lg ${rarity.glow}`}>
                                    {badge.icon}
                                </div>

                                {/* Glow ring */}
                                <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-xl animate-ping opacity-30 bg-gradient-to-br ${rarity.bg}`} />
                            </motion.div>

                            {/* Badge Info */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="relative z-10 space-y-3"
                            >
                                <h2 className={`text-2xl font-black uppercase tracking-wide ${rarity.text}`}>
                                    {badge.name}
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    {badge.description}
                                </p>

                                {/* XP Bonus */}
                                <div className="pt-4 border-t border-white/10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                                        <span className="text-yellow-400 font-bold">+{badge.xpBonus} XP</span>
                                        <span className="text-yellow-400/50 text-xs">BONUS</span>
                                    </div>
                                </div>

                                {/* Rarity */}
                                <div className={`text-xs font-mono uppercase tracking-widest ${rarity.text} opacity-60`}>
                                    {badge.rarity}
                                </div>
                            </motion.div>

                            {/* Continue Button */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                onClick={onClose}
                                className={`relative z-10 mt-6 px-8 py-3 bg-gradient-to-r ${rarity.bg} rounded-lg font-bold uppercase tracking-wider text-white hover:scale-105 transition-transform`}
                            >
                                Continue
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BadgeUnlockModal;
