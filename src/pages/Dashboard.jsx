import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useProgress } from '../contexts/ProgressProvider';
import { useAuth } from '../contexts/AuthProvider';
import { LEVELS, getCoursesByLevel, getOverallProgress } from '../data/curriculumStructure';
import { Code, Palette, Terminal, Database, ArrowRight, CheckCircle2, Clock, Crown, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

// Icon mapping
const COURSE_ICONS = {
    html5: <Code size={20} className="text-orange-400" />,
    css3: <Palette size={20} className="text-blue-400" />,
    git: <Terminal size={20} className="text-gray-400" />,
    tailwind: <Palette size={20} className="text-cyan-400" />,
    'js-basics': <Terminal size={20} className="text-yellow-400" />,
    dom: <Code size={20} className="text-purple-400" />,
    'js-es6': <Terminal size={20} className="text-yellow-500" />,
    php: <Code size={20} className="text-indigo-400" />,
    mysql: <Database size={20} className="text-blue-400" />,
    python: <Terminal size={20} className="text-blue-400" />,
    react: <Code size={20} className="text-cyan-400" />,
    typescript: <Code size={20} className="text-blue-400" />,
    node: <Terminal size={20} className="text-green-400" />,
    mongodb: <Database size={20} className="text-green-400" />,
    nextjs: <Code size={20} className="text-white" />,
    cicd: <Terminal size={20} className="text-gray-400" />
};

const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor WA admin

const TIER_BADGES = {
    free: { label: 'Free', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
    beginner: { label: 'Beginner', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    intermediate: { label: 'Intermediate', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    advanced: { label: 'Advanced', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
    fullstack: { label: 'Fullstack', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    admin: { label: 'Admin', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' }
};

export default function Dashboard() {
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState('all');
    const { completedCourses, loading } = useProgress();
    const { user, canAccessCourse, subscriptionTier } = useAuth();

    const progress = getOverallProgress(completedCourses);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading your progress...</p>
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
                    "group relative bg-[#111111] rounded-xl border overflow-hidden transition-all duration-200",
                    hasAccess 
                        ? "hover:bg-[#161616] cursor-pointer border-white/10 hover:border-white/20" 
                        : "opacity-50 cursor-not-allowed border-white/5"
                )}
            >
                {/* Lock overlay for paid content */}
                {isLocked && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                        <div className="text-center p-4">
                            <Crown size={24} className="text-yellow-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-400">Upgrade to access</p>
                        </div>
                    </div>
                )}

                <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            {COURSE_ICONS[id] || <Code size={20} className="text-gray-400" />}
                        </div>

                        {isCompleted ? (
                            <div className="flex items-center gap-1.5 text-green-400 text-xs">
                                <CheckCircle2 size={14} />
                                <span>Done</span>
                            </div>
                        ) : isLocked ? (
                            <div className="flex items-center gap-1.5 text-yellow-400 text-xs">
                                <Crown size={14} />
                                <span>Premium</span>
                            </div>
                        ) : null}
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-gray-500">#{order}</span>
                            <span className="text-xs text-gray-500 uppercase">{level}</span>
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{shortDesc}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                            <Clock size={12} />
                            <span>{duration}</span>
                        </div>
                        {hasAccess && (
                            <div className="flex items-center gap-1 text-white text-sm group-hover:gap-2 transition-all">
                                <span>{isCompleted ? 'Review' : 'Start'}</span>
                                <ArrowRight size={14} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const filteredLevels = selectedLevel === 'all'
        ? Object.values(LEVELS)
        : [LEVELS[selectedLevel.toUpperCase()]];

    const tierBadge = TIER_BADGES[subscriptionTier] || TIER_BADGES.free;

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header progress={progress.percentage} />

            <main className="min-h-[calc(100vh-56px)] overflow-y-auto">
                <div className="max-w-6xl mx-auto px-6 py-12">

                    {/* Hero Section */}
                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-3">
                                Welcome back{user?.name ? `, ${user.name.split(' ')[0]}` : ''}
                            </h1>
                            <p className="text-gray-400 text-lg">
                                Continue your learning journey
                            </p>
                        </div>
                        <span className={clsx(
                            "px-3 py-1.5 rounded-full text-sm font-medium border",
                            tierBadge.color
                        )}>
                            {tierBadge.label}
                        </span>
                    </div>

                    {/* Upgrade Banner for Free Users */}
                    {subscriptionTier === 'free' && (
                        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 p-6 mb-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">🚀 Upgrade for Full Access</h3>
                                    <p className="text-gray-400 text-sm">
                                        You're on a free account. Upgrade to unlock all courses!
                                    </p>
                                </div>
                                <button
                                    onClick={handleUpgrade}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                >
                                    <MessageCircle size={16} />
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Progress Card */}
                    <div className="bg-[#111111] rounded-xl border border-white/10 p-6 mb-12">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Overall Progress</p>
                                <p className="text-3xl font-bold text-white">{progress.percentage}%</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-400 mb-1">Completed</p>
                                <p className="text-lg text-white">{progress.completed} / {progress.total} courses</p>
                            </div>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-500"
                                style={{ width: `${progress.percentage}%` }}
                            />
                        </div>
                    </div>

                    {/* Level Filter */}
                    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                        <button
                            onClick={() => setSelectedLevel('all')}
                            className={clsx(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                selectedLevel === 'all'
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                            )}
                        >
                            All Courses
                        </button>
                        {Object.values(LEVELS).map(level => (
                            <button
                                key={level.id}
                                onClick={() => setSelectedLevel(level.id)}
                                className={clsx(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap",
                                    selectedLevel === level.id
                                        ? "bg-white text-black"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                                )}
                            >
                                <span>{level.icon}</span>
                                <span>{level.label.en}</span>
                            </button>
                        ))}
                    </div>

                    {/* Level Sections */}
                    {filteredLevels.map((level) => {
                        const levelCourses = getCoursesByLevel(level.id);
                        const levelCompleted = levelCourses.filter(c => completedCourses.includes(c.id)).length;

                        return (
                            <div key={level.id} className="mb-12">
                                {/* Level Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{level.icon}</span>
                                        <div>
                                            <h2 className="text-xl font-semibold text-white">
                                                {level.label.en}
                                            </h2>
                                            <p className="text-sm text-gray-500">{level.tagline.en}</p>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {levelCompleted} / {levelCourses.length} completed
                                    </div>
                                </div>

                                {/* Course Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {levelCourses.map(course => renderCourseCard(course))}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </main>
        </div>
    );
}
