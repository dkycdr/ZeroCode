import { useState } from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import WelcomeHero from '../components/dashboard/WelcomeHero';
import StatsOverview from '../components/dashboard/StatsOverview';
import CourseCard from '../components/dashboard/CourseCard';

import { useProgress } from '../contexts/ProgressProvider';
import { useAuth } from '../contexts/AuthProvider';
import { LEVELS, getCoursesByLevel, getOverallProgress } from '../data/curriculumStructure';
import clsx from 'clsx';

export default function Dashboard() {
    const [selectedLevel, setSelectedLevel] = useState('all');
    const { completedCourses, loading, userStats } = useProgress();
    const { user, canAccessCourse, subscriptionTier } = useAuth();

    const progress = getOverallProgress(completedCourses);

    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    const filteredLevels = selectedLevel === 'all'
        ? Object.values(LEVELS)
        : [LEVELS[selectedLevel.toUpperCase()]];

    return (
        <AppLayout>
            {/* Hero Section */}
            <WelcomeHero user={user} subscriptionTier={subscriptionTier} />

            {/* Stats Overview */}
            <StatsOverview progress={progress} stats={userStats} />

            {/* Main Course Content */}
            <div className="space-y-8">
                {/* Filter Tabs - Premium Sliding Segmented Control */}
                <div className="flex justify-center mb-10">
                    <div className="relative inline-flex items-center p-1.5 rounded-full bg-[#0a0a0a] border border-white/5 shadow-2xl shadow-black/50 backdrop-blur-xl">
                        {/* Option: "All Levels" */}
                        <button
                            onClick={() => setSelectedLevel('all')}
                            className={clsx(
                                "relative z-10 px-6 py-2.5 text-sm font-bold transition-colors duration-300",
                                selectedLevel === 'all' ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            {selectedLevel === 'all' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white/10 border border-white/5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-lg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">All Levels</span>
                        </button>

                        {/* Options: Dynamic Levels */}
                        {Object.values(LEVELS).map(level => (
                            <button
                                key={level.id}
                                onClick={() => setSelectedLevel(level.id)}
                                className={clsx(
                                    "relative z-10 px-6 py-2.5 text-sm font-bold transition-colors duration-300",
                                    selectedLevel === level.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                                )}
                            >
                                {selectedLevel === level.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-zinc-800/50 border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        <div className={clsx("absolute inset-0 rounded-full opacity-20 bg-gradient-to-r", level.color)} />
                                    </motion.div>
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {level.label.en}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Grid */}
                <div className="space-y-12">
                    {filteredLevels.map((level) => {
                        const levelCourses = getCoursesByLevel(level.id);

                        return (
                            <section key={level.id} className="animate-fade-in-up">
                                <div className="flex items-end justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                            <span>{level.icon}</span>
                                            {level.label.en}
                                        </h2>
                                        <p className="text-sm text-zinc-500 mt-1 font-medium">{level.tagline.en}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                    {levelCourses.map(course => {
                                        const isCompleted = completedCourses.includes(course.id);
                                        const hasAccess = canAccessCourse(course.id);

                                        return (
                                            <CourseCard
                                                key={course.id}
                                                course={course}
                                                isCompleted={isCompleted}
                                                hasAccess={hasAccess}
                                                isLocked={!hasAccess}
                                            />
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
