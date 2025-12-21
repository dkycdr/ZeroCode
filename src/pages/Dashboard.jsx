import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useProgress } from '../contexts/ProgressProvider';
import { useAuth } from '../contexts/AuthProvider';
import { LEVELS, getCoursesByLevel, getOverallProgress } from '../data/curriculumStructure';
import {
    FaHtml5, FaCss3Alt, FaGitAlt
} from 'react-icons/fa';
import {
    SiTailwindcss, SiJavascript, SiPhp, SiMysql,
    SiPython, SiReact, SiTypescript, SiNodedotjs,
    SiMongodb, SiNextdotjs
} from 'react-icons/si';
import { VscGlobe, VscCircuitBoard } from 'react-icons/vsc';
import {
    RiArrowRightLine, RiCheckboxCircleFill, RiTimeLine,
    RiVipCrownFill, RiMessage3Line, RiFundsLine,
    RiAwardFill, RiFlashlightFill
} from 'react-icons/ri';
import clsx from 'clsx';

// Icon mapping
const COURSE_ICONS = {
    html5: <FaHtml5 size={20} className="text-orange-500" />,
    css3: <FaCss3Alt size={20} className="text-blue-500" />,
    git: <FaGitAlt size={20} className="text-orange-600" />,
    tailwind: <SiTailwindcss size={20} className="text-cyan-400" />,
    'js-basics': <SiJavascript size={20} className="text-yellow-400" />,
    dom: <VscGlobe size={20} className="text-purple-400" />,
    'js-es6': <SiJavascript size={20} className="text-yellow-500" />,
    php: <SiPhp size={20} className="text-indigo-400" />,
    mysql: <SiMysql size={20} className="text-blue-400" />,
    python: <SiPython size={20} className="text-blue-500" />,
    react: <SiReact size={20} className="text-cyan-400" />,
    typescript: <SiTypescript size={20} className="text-blue-600" />,
    node: <SiNodedotjs size={20} className="text-green-500" />,
    mongodb: <SiMongodb size={20} className="text-green-500" />,
    nextjs: <SiNextdotjs size={20} className="text-white" />,
    cicd: <VscCircuitBoard size={20} className="text-gray-400" />
};

const WHATSAPP_NUMBER = '6283875727384';

const TIER_BADGES = {
    free: { label: 'Free', color: 'bg-gray-500/10 text-gray-400 border-gray-500/20' },
    beginner: { label: 'Beginner', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    intermediate: { label: 'Intermediate', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    advanced: { label: 'Advanced', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
    fullstack: { label: 'Fullstack', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    admin: { label: 'Admin', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' }
};

export default function Dashboard() {
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState('all');
    const { completedCourses, loading } = useProgress();
    const { user, canAccessCourse, subscriptionTier } = useAuth();

    // Notification Logic
    // Notification Logic
    const LATEST_UPDATE_ID = '2.2.0';
    const hasUpdates = localStorage.getItem('last_viewed_update') !== LATEST_UPDATE_ID;

    const progress = getOverallProgress(completedCourses);

    if (loading) {
        return (
            <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
                    <p className="text-gray-400 font-mono text-sm">INITIALIZING SYSTEM...</p>
                </div>
            </div>
        );
    }

    const handleUpgrade = () => {
        const message = encodeURIComponent(
            `Hi ZeroCode! I want to upgrade my account.\n\nEmail: ${user?.email}\nName: ${user?.name}\nCurrent tier: ${subscriptionTier}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    const renderCourseCard = (courseData) => {
        const { id, title, level, duration, shortDesc, order } = courseData;
        const isCompleted = completedCourses.includes(id);
        const hasAccess = canAccessCourse(id);
        const isLocked = !hasAccess;

        return (
            <div
                key={id}
                onClick={() => hasAccess && navigate(`/course/${id}`)}
                className={clsx(
                    "card-cyber group relative p-5 flex flex-col h-full",
                    hasAccess
                        ? "cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                        : "opacity-60 cursor-not-allowed border-dashed"
                )}
            >
                {/* Lock overlay */}
                {isLocked && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-xl">
                        <div className="text-center p-4 bg-black/80 rounded-lg border border-[var(--border-subtle)]">
                            <RiVipCrownFill size={20} className="text-yellow-400 mx-auto mb-2" />
                            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Locked</p>
                        </div>
                    </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--accent-primary)] transition-colors">
                        {COURSE_ICONS[id] || <VscGlobe size={20} className="text-gray-400" />}
                    </div>

                    {isCompleted ? (
                        <div className="flex items-center gap-1.5 text-green-400 text-[10px] font-mono border border-green-500/20 px-2 py-0.5 rounded-full bg-green-500/5">
                            <RiCheckboxCircleFill size={12} />
                            <span>COMPLETED</span>
                        </div>
                    ) : isLocked ? (
                        <div className="flex items-center gap-1.5 text-yellow-400 text-[10px] font-mono border border-yellow-500/20 px-2 py-0.5 rounded-full bg-yellow-500/5">
                            <RiVipCrownFill size={12} />
                            <span>PREMIUM</span>
                        </div>
                    ) : null}
                </div>

                {/* Content */}
                <div className="mb-auto">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono text-gray-500 border border-[var(--border-subtle)] px-1.5 rounded">#{order}</span>
                        <span className="text-[10px] font-mono text-[var(--accent-primary)] uppercase tracking-wider">{level}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{shortDesc}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono">
                        <RiTimeLine size={12} />
                        <span>{duration}</span>
                    </div>
                    {hasAccess && (
                        <div className="flex items-center gap-1 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                            <span>{isCompleted ? 'Review' : 'Start'}</span>
                            <RiArrowRightLine size={14} />
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const filteredLevels = selectedLevel === 'all'
        ? Object.values(LEVELS)
        : [LEVELS[selectedLevel.toUpperCase()]];

    const tierBadge = TIER_BADGES[subscriptionTier] || TIER_BADGES.free;

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            <Header progress={progress.percentage} />

            <main className="pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Dashboard Header & Stats */}
                    <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Welcome Card */}
                        <div className="lg:col-span-2 card-cyber p-8 flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent-primary)] to-purple-600 opacity-5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative z-10">
                                Welcome back{user?.name ? `, ${user.name.split(' ')[0]}` : ''}
                            </h1>
                            <p className="text-gray-400 text-lg relative z-10">
                                Ready to continue your training?
                            </p>
                            <div className="mt-6 flex items-center gap-3 relative z-10">
                                <span className={clsx(
                                    "px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border",
                                    tierBadge.color
                                )}>
                                    {tierBadge.label} plan
                                </span>

                                <button
                                    onClick={() => navigate('/updates')}
                                    className="relative px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono hover:bg-slate-700 transition-colors flex items-center gap-2"
                                >
                                    <span>What's New</span>
                                    {hasUpdates && (
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    )}
                                </button>

                                {subscriptionTier === 'free' && (
                                    <button onClick={handleUpgrade} className="ml-2 text-xs text-[var(--accent-primary)] hover:underline underline-offset-4 decoration-white/20">
                                        Upgrade License
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="card-cyber p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Completion</p>
                                <p className="text-4xl font-bold text-white">{progress.percentage}%</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center">
                                <RiFundsLine size={20} className="text-[var(--accent-primary)]" />
                            </div>
                        </div>

                        <div className="card-cyber p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Modules</p>
                                <p className="text-4xl font-bold text-white">{progress.completed} <span className="text-lg text-gray-500 font-normal">/ {progress.total}</span></p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center">
                                <RiAwardFill size={20} className="text-purple-400" />
                            </div>
                        </div>
                    </section>

                    {/* Level Filter */}
                    <section>
                        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
                            <button
                                onClick={() => setSelectedLevel('all')}
                                className={clsx(
                                    "px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border",
                                    selectedLevel === 'all'
                                        ? "bg-white text-black border-white"
                                        : "bg-[var(--bg-panel)] text-gray-500 border-[var(--border-subtle)] hover:border-gray-400 hover:text-white"
                                )}
                            >
                                All Systems
                            </button>
                            {Object.values(LEVELS).map(level => (
                                <button
                                    key={level.id}
                                    onClick={() => setSelectedLevel(level.id)}
                                    className={clsx(
                                        "px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap border",
                                        selectedLevel === level.id
                                            ? "bg-white text-black border-white"
                                            : "bg-[var(--bg-panel)] text-gray-500 border-[var(--border-subtle)] hover:border-gray-400 hover:text-white"
                                    )}
                                >
                                    <span>{level.label.en}</span>
                                </button>
                            ))}
                        </div>

                        {/* Upgrade Banner Inline */}
                        {subscriptionTier === 'free' && (
                            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20 p-6 mb-12 flex items-center justify-between relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                                        <RiFlashlightFill size={18} className="text-yellow-400" />
                                        Unlock Full Protocol
                                    </h3>
                                    <p className="text-gray-400 text-sm">Upgrade your clearance level to access advanced modules.</p>
                                </div>
                                <button
                                    onClick={handleUpgrade}
                                    className="relative z-10 px-5 py-2 bg-[var(--accent-primary)] text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2"
                                >
                                    Upgrade <RiArrowRightLine size={14} />
                                </button>
                            </div>
                        )}

                        <div className="space-y-16">
                            {filteredLevels.map((level) => {
                                const levelCourses = getCoursesByLevel(level.id);
                                const levelCompleted = levelCourses.filter(c => completedCourses.includes(c.id)).length;

                                return (
                                    <div key={level.id} className="animate-fade-in-up">
                                        {/* Level Header */}
                                        <div className="flex items-end justify-between mb-8 border-b border-[var(--border-subtle)] pb-4">
                                            <div>
                                                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                                    {level.icon}
                                                    {level.label.en}
                                                </h2>
                                                <p className="text-sm text-gray-500 font-mono">{level.tagline.en}</p>
                                            </div>
                                            <div className="text-xs font-mono text-[var(--accent-primary)] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                                {levelCompleted} / {levelCourses.length} COMPLETED
                                            </div>
                                        </div>

                                        {/* Course Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            {levelCourses.map(course => renderCourseCard(course))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
