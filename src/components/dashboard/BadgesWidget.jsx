import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award, Lock, ChevronRight, X, Target, Zap, Shield, Cpu,
    Rocket, Flame, Crown, Brain, Timer, Calendar, Gem, Trophy,
    BookOpen, Layers, Globe, Star, Compass, Sparkles, TrendingUp
} from 'lucide-react';
import { getAllBadges, getBadgesByCategory, RARITY_COLORS, BADGES } from '../../data/badges';

// Icon mapping for dynamic rendering
const ICON_MAP = {
    Rocket, Zap, Flame, Shield, Crown, Target, Brain, Timer, Cpu,
    Calendar, Gem, Trophy, BookOpen, Layers, Globe, Star, Compass
};

// Rarity config with enhanced cyberpunk styling
const RARITY_CONFIG = {
    common: {
        color: '#6b7280',
        glow: 'rgba(107,114,128,0.4)',
        gradient: 'from-zinc-600 to-zinc-800',
        label: 'COMMON',
        tier: 'I',
        accent: '#4b5563'
    },
    uncommon: {
        color: '#22c55e',
        glow: 'rgba(34,197,94,0.4)',
        gradient: 'from-green-500 to-emerald-700',
        label: 'UNCOMMON',
        tier: 'II',
        accent: '#16a34a'
    },
    rare: {
        color: '#06b6d4',
        glow: 'rgba(6,182,212,0.5)',
        gradient: 'from-cyan-400 to-blue-600',
        label: 'RARE',
        tier: 'III',
        accent: '#0891b2'
    },
    legendary: {
        color: '#f59e0b',
        glow: 'rgba(245,158,11,0.6)',
        gradient: 'from-yellow-400 via-orange-500 to-red-500',
        label: 'LEGENDARY',
        tier: 'IV',
        accent: '#d97706'
    },
};

// Render badge icon component
const BadgeIcon = ({ iconName, size = 20, className = '', style = {} }) => {
    const IconComponent = ICON_MAP[iconName];
    if (!IconComponent) return <span className={className} style={style}>{iconName}</span>;
    return <IconComponent size={size} className={className} style={style} />;
};

/**
 * Calculate progress percentage towards a badge
 */
const calculateBadgeProgress = (badge, userStats = {}) => {
    if (!badge || !userStats) return 0;

    const {
        completedItems = 0,
        totalFocusHours = 0,
        maxStreak = 0,
        coursesCompleted = 0
    } = userStats;

    const thresholds = {
        'first-steps': { current: completedItems, target: 1 },
        'getting-started': { current: completedItems, target: 10 },
        'on-fire': { current: completedItems, target: 50 },
        'unstoppable': { current: completedItems, target: 100 },
        'legend': { current: completedItems, target: 500 },
        'focused': { current: totalFocusHours, target: 1 },
        'deep-work': { current: totalFocusHours, target: 10 },
        'time-master': { current: totalFocusHours, target: 50 },
        'neural-link': { current: totalFocusHours, target: 100 },
        'consistent': { current: maxStreak, target: 7 },
        'dedicated': { current: maxStreak, target: 30 },
        'legendary-streak': { current: maxStreak, target: 100 },
        'first-course': { current: coursesCompleted, target: 1 },
        'multi-track': { current: coursesCompleted, target: 3 },
        'full-stack': { current: coursesCompleted, target: 6 },
        'perfect-score': { current: 0, target: 1 },
        'explorer': { current: 0, target: 1 },
    };

    const progress = thresholds[badge.id];
    if (!progress) return 0;

    return Math.min(100, Math.floor((progress.current / progress.target) * 100));
};

const getProgressData = (badge, userStats = {}) => {
    const thresholds = {
        'first-steps': { current: userStats.completedItems || 0, target: 1, unit: 'ITEMS', label: 'Items Completed' },
        'getting-started': { current: userStats.completedItems || 0, target: 10, unit: 'ITEMS', label: 'Items Completed' },
        'on-fire': { current: userStats.completedItems || 0, target: 50, unit: 'ITEMS', label: 'Items Completed' },
        'unstoppable': { current: userStats.completedItems || 0, target: 100, unit: 'ITEMS', label: 'Items Completed' },
        'legend': { current: userStats.completedItems || 0, target: 500, unit: 'ITEMS', label: 'Items Completed' },
        'focused': { current: Math.floor(userStats.totalFocusHours || 0), target: 1, unit: 'HRS', label: 'Focus Hours' },
        'deep-work': { current: Math.floor(userStats.totalFocusHours || 0), target: 10, unit: 'HRS', label: 'Focus Hours' },
        'time-master': { current: Math.floor(userStats.totalFocusHours || 0), target: 50, unit: 'HRS', label: 'Focus Hours' },
        'neural-link': { current: Math.floor(userStats.totalFocusHours || 0), target: 100, unit: 'HRS', label: 'Focus Hours' },
        'consistent': { current: userStats.maxStreak || 0, target: 7, unit: 'DAYS', label: 'Day Streak' },
        'dedicated': { current: userStats.maxStreak || 0, target: 30, unit: 'DAYS', label: 'Day Streak' },
        'legendary-streak': { current: userStats.maxStreak || 0, target: 100, unit: 'DAYS', label: 'Day Streak' },
        'first-course': { current: userStats.coursesCompleted || 0, target: 1, unit: 'COURSES', label: 'Courses Completed' },
        'multi-track': { current: userStats.coursesCompleted || 0, target: 3, unit: 'COURSES', label: 'Courses Completed' },
        'full-stack': { current: userStats.coursesCompleted || 0, target: 6, unit: 'COURSES', label: 'Courses Completed' },
    };

    return thresholds[badge.id] || null;
};

// Category icons
const CATEGORY_ICONS = {
    all: Sparkles,
    progress: TrendingUp,
    focus: Brain,
    streak: Flame,
    course: BookOpen,
    special: Star,
};

/**
 * Enhanced Cyberpunk Badge Detail Modal
 */
const BadgeDetailModal = ({ badge, isEarned, userStats, isOpen, onClose }) => {
    if (!badge || !isOpen) return null;

    const rarityConfig = RARITY_CONFIG[badge.rarity] || RARITY_CONFIG.common;
    const progress = calculateBadgeProgress(badge, userStats);
    const progressData = getProgressData(badge, userStats);
    const CategoryIcon = CATEGORY_ICONS[badge.category] || Star;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop with animated grid */}
                    <div className="absolute inset-0 bg-black/95">
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `
                                linear-gradient(${rarityConfig.color}20 1px, transparent 1px),
                                linear-gradient(90deg, ${rarityConfig.color}20 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px',
                            animation: 'pulse 4s ease-in-out infinite'
                        }} />
                        {/* Radial glow */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `radial-gradient(circle at center, ${rarityConfig.glow} 0%, transparent 60%)`
                            }}
                        />
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, y: 40, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={e => e.stopPropagation()}
                        className="relative z-10 w-full max-w-lg"
                    >
                        {/* Main Card */}
                        <div
                            className="relative overflow-hidden bg-zinc-950"
                            style={{
                                borderRadius: '2px',
                                border: `1px solid ${rarityConfig.color}50`,
                                boxShadow: `
                                    0 0 60px ${rarityConfig.glow},
                                    0 0 100px ${rarityConfig.glow},
                                    inset 0 1px 0 ${rarityConfig.color}30
                                `
                            }}
                        >
                            {/* Animated top border */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                                <motion.div
                                    className="h-full w-full"
                                    style={{ background: `linear-gradient(90deg, transparent, ${rarityConfig.color}, transparent)` }}
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                />
                            </div>

                            {/* Scanlines */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)'
                            }} />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 bg-zinc-900/80 border border-zinc-700 rounded-sm text-zinc-500 hover:text-white hover:border-zinc-500 transition-all"
                            >
                                <X size={16} />
                            </button>

                            {/* Header with Category */}
                            <div className="px-6 pt-6 pb-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="p-1.5 rounded-sm"
                                        style={{
                                            background: `${rarityConfig.color}15`,
                                            border: `1px solid ${rarityConfig.color}30`
                                        }}
                                    >
                                        <CategoryIcon size={14} style={{ color: rarityConfig.color }} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="text-[10px] font-mono tracking-widest uppercase"
                                            style={{ color: rarityConfig.color }}
                                        >
                                            {badge.category}
                                        </span>
                                        <span className="text-zinc-700">/</span>
                                        <span
                                            className="px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase rounded-sm"
                                            style={{
                                                color: rarityConfig.color,
                                                background: `${rarityConfig.color}10`,
                                                border: `1px solid ${rarityConfig.color}30`
                                            }}
                                        >
                                            {rarityConfig.label}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Badge Icon Section */}
                            <div className="relative px-6 py-8">
                                {/* Background glow */}
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background: `radial-gradient(ellipse at center, ${rarityConfig.glow} 0%, transparent 70%)`
                                    }}
                                />

                                <div className="relative flex flex-col items-center">
                                    {/* Hexagonal badge frame */}
                                    <div className="relative">
                                        {/* Outer ring */}
                                        <div
                                            className={`w-32 h-32 rounded-2xl flex items-center justify-center ${!isEarned ? 'grayscale opacity-40' : ''}`}
                                            style={{
                                                background: `linear-gradient(135deg, ${rarityConfig.color}15 0%, transparent 50%, ${rarityConfig.color}10 100%)`,
                                                border: `2px solid ${isEarned ? rarityConfig.color : '#3f3f46'}`,
                                                boxShadow: isEarned ? `
                                                    0 0 30px ${rarityConfig.glow},
                                                    inset 0 0 30px ${rarityConfig.glow}
                                                ` : 'none'
                                            }}
                                        >
                                            <BadgeIcon
                                                iconName={badge.icon}
                                                size={56}
                                                style={{ color: isEarned ? rarityConfig.color : '#52525b' }}
                                            />
                                        </div>

                                        {/* Corner brackets */}
                                        <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl-sm" style={{ borderColor: rarityConfig.color }} />
                                        <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor: rarityConfig.color }} />
                                        <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 rounded-bl-sm" style={{ borderColor: rarityConfig.color }} />
                                        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor: rarityConfig.color }} />

                                        {/* Lock overlay */}
                                        {!isEarned && (
                                            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60">
                                                <div className="p-3 bg-zinc-900 rounded-full border border-zinc-700">
                                                    <Lock size={24} className="text-zinc-500" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Tier badge */}
                                        <div
                                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-mono font-bold tracking-widest"
                                            style={{
                                                background: 'black',
                                                color: rarityConfig.color,
                                                border: `1px solid ${rarityConfig.color}50`
                                            }}
                                        >
                                            TIER_{rarityConfig.tier}
                                        </div>
                                    </div>

                                    {/* Badge Name */}
                                    <h2
                                        className="mt-8 text-2xl font-black uppercase tracking-wider text-center"
                                        style={{ color: isEarned ? rarityConfig.color : '#71717a' }}
                                    >
                                        {badge.name}
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-2 text-sm text-zinc-500 font-mono text-center max-w-xs">
                                        {badge.description}
                                    </p>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="px-6 pb-6 space-y-4">
                                {/* Divider */}
                                <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${rarityConfig.color}30, transparent)` }} />

                                {/* Progress (for locked badges) */}
                                {!isEarned && progressData && (
                                    <div className="p-4 rounded-sm bg-zinc-900/50 border border-zinc-800">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <Cpu size={14} className="text-zinc-600" />
                                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                                    {progressData.label}
                                                </span>
                                            </div>
                                            <span
                                                className="text-lg font-mono font-bold"
                                                style={{ color: progress >= 100 ? '#22c55e' : rarityConfig.color }}
                                            >
                                                {progress}%
                                            </span>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="relative h-4 bg-zinc-800 rounded-sm overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ duration: 1, ease: 'easeOut' }}
                                                className="h-full relative"
                                                style={{
                                                    background: `linear-gradient(90deg, ${rarityConfig.accent}, ${rarityConfig.color})`,
                                                }}
                                            >
                                                {/* Shine effect */}
                                                <motion.div
                                                    className="absolute inset-0"
                                                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                                                    animate={{ x: ['-100%', '200%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
                                                />
                                            </motion.div>

                                            {/* Grid overlay */}
                                            <div className="absolute inset-0 flex pointer-events-none">
                                                {[...Array(20)].map((_, i) => (
                                                    <div key={i} className="flex-1 border-r border-zinc-900/50" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Progress numbers */}
                                        <div className="flex justify-between mt-2">
                                            <span className="text-[11px] font-mono text-zinc-600">
                                                CURRENT: <span style={{ color: rarityConfig.color }}>{Math.min(progressData.current, progressData.target)}</span>
                                            </span>
                                            <span className="text-[11px] font-mono text-zinc-600">
                                                TARGET: <span className="text-zinc-400">{progressData.target}</span> {progressData.unit}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    {/* XP Reward */}
                                    <div
                                        className="p-4 rounded-sm"
                                        style={{
                                            background: 'rgba(234,179,8,0.05)',
                                            border: '1px solid rgba(234,179,8,0.2)'
                                        }}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <Zap size={14} className="text-yellow-500" />
                                            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">XP Reward</span>
                                        </div>
                                        <span className="text-2xl font-black text-yellow-500 font-mono">
                                            +{badge.xpBonus}
                                        </span>
                                    </div>

                                    {/* Status */}
                                    <div
                                        className="p-4 rounded-sm"
                                        style={{
                                            background: isEarned ? 'rgba(34,197,94,0.05)' : 'rgba(113,113,122,0.05)',
                                            border: `1px solid ${isEarned ? 'rgba(34,197,94,0.3)' : 'rgba(113,113,122,0.2)'}`
                                        }}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <Shield size={14} className={isEarned ? 'text-green-500' : 'text-zinc-600'} />
                                            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Status</span>
                                        </div>
                                        <span className={`text-lg font-bold font-mono uppercase ${isEarned ? 'text-green-400' : 'text-zinc-600'}`}>
                                            {isEarned ? '✓ UNLOCKED' : 'LOCKED'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${rarityConfig.color}50, transparent)` }} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

/**
 * Enhanced Cyberpunk Badges Widget
 */
const BadgesWidget = ({ earnedBadgeIds = [], userStats = {}, onViewAll }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedBadge, setSelectedBadge] = useState(null);

    const badgeStats = {
        completedItems: userStats.completedItemsCount || 0,
        totalFocusHours: (userStats.totalFocusMinutes || 0) / 60,
        maxStreak: userStats.streak || 0,
        coursesCompleted: userStats.coursesCompletedCount || 0,
    };

    const allBadges = getAllBadges();
    const earnedCount = earnedBadgeIds.length;
    const totalCount = allBadges.length;

    const categories = [
        { id: 'all', label: 'All', icon: Sparkles },
        { id: 'progress', label: 'Progress', icon: TrendingUp },
        { id: 'focus', label: 'Focus', icon: Brain },
        { id: 'streak', label: 'Streak', icon: Flame },
        { id: 'course', label: 'Course', icon: BookOpen },
        { id: 'special', label: 'Special', icon: Star },
    ];

    const filteredBadges = selectedCategory === 'all'
        ? allBadges
        : getBadgesByCategory(selectedCategory);

    return (
        <>
            <div className="bg-zinc-950/80 border border-zinc-800/50 rounded-sm overflow-hidden backdrop-blur-sm">
                {/* Glowing top accent */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

                {/* Header */}
                <div className="px-5 py-4 border-b border-zinc-800/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="p-2.5 bg-yellow-500/10 rounded-sm border border-yellow-500/20">
                                    <Award className="w-5 h-5 text-yellow-500" />
                                </div>
                                {/* Pulse indicator */}
                                {earnedCount > 0 && (
                                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse" />
                                )}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                                    Achievements
                                </h3>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[10px] text-yellow-500 font-mono font-bold">
                                        {earnedCount}
                                    </span>
                                    <span className="text-[10px] text-zinc-600 font-mono">/</span>
                                    <span className="text-[10px] text-zinc-500 font-mono">
                                        {totalCount} UNLOCKED
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Progress Ring */}
                        <div className="relative w-14 h-14">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                                <motion.circle
                                    cx="28" cy="28" r="24"
                                    fill="none"
                                    stroke="url(#badgeGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ strokeDasharray: '0 150.8' }}
                                    animate={{ strokeDasharray: `${(earnedCount / totalCount) * 150.8} 150.8` }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                />
                                <defs>
                                    <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#eab308" />
                                        <stop offset="100%" stopColor="#f97316" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-sm font-black text-yellow-500 font-mono">
                                    {Math.round((earnedCount / totalCount) * 100)}
                                </span>
                                <span className="text-[8px] text-zinc-600 font-mono -mt-0.5">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="px-3 py-2 border-b border-zinc-800/50 flex gap-1 overflow-x-auto scrollbar-hide bg-zinc-900/30">
                    {categories.map(cat => {
                        const IconComp = cat.icon;
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm whitespace-nowrap transition-all ${isActive
                                        ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
                                        : 'text-zinc-500 hover:text-zinc-300 border border-transparent hover:bg-zinc-800/50'
                                    }`}
                            >
                                <IconComp size={12} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Badge Grid */}
                <div className="p-4 grid grid-cols-5 sm:grid-cols-6 gap-2 max-h-[250px] overflow-y-auto scrollbar-thin bg-zinc-900/20">
                    {filteredBadges.map((badge, idx) => {
                        const isEarned = earnedBadgeIds.includes(badge.id);
                        const rarityConfig = RARITY_CONFIG[badge.rarity] || RARITY_CONFIG.common;
                        const progress = calculateBadgeProgress(badge, badgeStats);

                        return (
                            <motion.div
                                key={badge.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.02 }}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedBadge(badge)}
                            >
                                <div
                                    className="relative w-full aspect-square rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:z-10"
                                    style={{
                                        background: isEarned
                                            ? `linear-gradient(135deg, ${rarityConfig.color}20 0%, transparent 100%)`
                                            : 'rgba(24,24,27,0.8)',
                                        border: `1px solid ${isEarned ? rarityConfig.color + '50' : '#27272a'}`,
                                        boxShadow: isEarned ? `0 0 20px ${rarityConfig.glow}` : 'none'
                                    }}
                                >
                                    <BadgeIcon
                                        iconName={badge.icon}
                                        size={16}
                                        className={!isEarned ? 'opacity-20' : ''}
                                        style={{ color: isEarned ? rarityConfig.color : '#3f3f46' }}
                                    />

                                    {!isEarned && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-sm">
                                            <Lock size={8} className="text-zinc-700" />
                                        </div>
                                    )}

                                    {/* Progress indicator for locked */}
                                    {!isEarned && progress > 0 && (
                                        <div
                                            className="absolute bottom-0 left-0 h-[2px] transition-all"
                                            style={{
                                                width: `${progress}%`,
                                                background: rarityConfig.color
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Hover tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-zinc-800 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 whitespace-nowrap">
                                    <p className="text-[10px] font-bold" style={{ color: isEarned ? rarityConfig.color : '#71717a' }}>
                                        {badge.name}
                                    </p>
                                    {!isEarned && (
                                        <p className="text-[9px] text-cyan-400 font-mono">{progress}%</p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer */}
                {onViewAll && (
                    <button
                        onClick={onViewAll}
                        className="w-full px-4 py-3 border-t border-zinc-800/50 flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-500 hover:text-yellow-400 transition-colors uppercase tracking-wider font-mono bg-zinc-900/30 hover:bg-zinc-800/50"
                    >
                        View All Achievements
                        <ChevronRight size={12} />
                    </button>
                )}
            </div>

            {/* Detail Modal */}
            <BadgeDetailModal
                badge={selectedBadge}
                isEarned={selectedBadge ? earnedBadgeIds.includes(selectedBadge.id) : false}
                userStats={badgeStats}
                isOpen={!!selectedBadge}
                onClose={() => setSelectedBadge(null)}
            />
        </>
    );
};

export default BadgesWidget;
