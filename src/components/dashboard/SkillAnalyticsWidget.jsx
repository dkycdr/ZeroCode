import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCpuLine, RiFullscreenLine, RiCloseLine, RiFocus2Line, RiDatabase2Line, RiCodeBoxLine, RiGitMergeLine, RiCheckDoubleLine, RiLoader4Line } from 'react-icons/ri';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPostgresql, SiVuedotjs, SiExpress, SiGit, SiTailwindcss, SiTypescript, SiMongodb, SiPython, SiNextdotjs, SiPhp, SiMysql } from 'react-icons/si';
import SidebarWidgetFrame from './SidebarWidgetFrame';
import { useProgress } from '../../contexts/ProgressProvider';
import { getCourse } from '../../data/courses';

// ------------------------------------------------------------------
// CONFIGURATION
// ------------------------------------------------------------------

const SKILL_MAP = {
    'html5': { name: 'HTML5', icon: SiHtml5, color: '#E44D26', code: 'HTM' },
    'css3': { name: 'CSS3', icon: SiCss3, color: '#1572B6', code: 'CSS' },
    'tailwind': { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC', code: 'TWN' },
    'js-basics': { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', code: 'JSB' },
    'js-es6': { name: 'ES6+', icon: SiJavascript, color: '#F7DF1E', code: 'JS6' },
    'typescript': { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', code: 'TSC' },
    'python': { name: 'Python', icon: SiPython, color: '#3776AB', code: 'PYT' },
    'react': { name: 'React', icon: SiReact, color: '#61DAFB', code: 'RCT' },
    'vue': { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', code: 'VUE' },
    'node': { name: 'Node.js', icon: SiNodedotjs, color: '#339933', code: 'NOD' },
    'express': { name: 'Express', icon: SiExpress, color: '#FFFFFF', code: 'EXP' },
    'php': { name: 'PHP', icon: SiPhp, color: '#777BB4', code: 'PHP' },
    'nextjs': { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', code: 'NXT' },
    'mysql': { name: 'MySQL', icon: SiMysql, color: '#4479A1', code: 'SQL' },
    'mongodb': { name: 'MongoDB', icon: SiMongodb, color: '#47A248', code: 'MDB' },
    'postgresql': { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', code: 'PSG' },
    'git': { name: 'Git', icon: SiGit, color: '#F05032', code: 'GIT' }
};

const getRank = (percentage) => {
    if (percentage >= 100) return { label: 'MASTER DOJO', color: 'text-amber-400', border: 'border-amber-500/50' };
    if (percentage >= 80) return { label: 'SENIOR DEV', color: 'text-cyan-400', border: 'border-cyan-500/50' };
    if (percentage >= 60) return { label: 'MID-LEVEL', color: 'text-emerald-400', border: 'border-emerald-500/50' };
    if (percentage >= 40) return { label: 'JUNIOR', color: 'text-blue-400', border: 'border-blue-500/50' };
    return { label: 'TRAINEE', color: 'text-zinc-500', border: 'border-zinc-700' };
};

// ------------------------------------------------------------------
// WIDGET COMPONENT
// ------------------------------------------------------------------

export function SkillAnalyticsWidget() {
    const { completedItems, completedCourses } = useProgress();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    // --- DATA PROCESSING (MEMOIZED) ---
    const stats = useMemo(() => {
        const calculated = [];
        let totalItemsGlobal = 0;
        let completedItemsGlobal = 0;

        Object.entries(SKILL_MAP).forEach(([courseId, meta]) => {
            const course = getCourse(courseId);
            if (!course) return;

            // Deep Unit Analysis
            const unitsData = [];
            let courseTotal = 0;
            let courseCompleted = 0;

            // Strategy 1: Nested Units
            if (course.units) {
                course.units.forEach((unit, idx) => {
                    let unitTotal = 0;
                    let unitCompleted = 0;
                    if (unit.items) {
                        unit.items.forEach(item => {
                            unitTotal++;
                            courseTotal++;
                            if (completedItems.includes(item.id)) {
                                unitCompleted++;
                                courseCompleted++;
                            }
                        });
                    }
                    unitsData.push({
                        id: unit.id || `unit-${idx}`,
                        title: unit.title || `Module ${idx + 1}`,
                        total: unitTotal,
                        completed: unitCompleted,
                        progress: unitTotal > 0 ? Math.round((unitCompleted / unitTotal) * 100) : 0
                    });
                });
            }
            // Strategy 2: Flat Tasks (Virtual Unit 0)
            else if (course.tasks) {
                let unitTotal = 0;
                let unitCompleted = 0;
                course.tasks.forEach(task => {
                    unitTotal++;
                    courseTotal++;
                    const constructedId = `${courseId}-0-${task.id}`;
                    if (completedItems.includes(task.id) ||
                        completedItems.includes(String(task.id)) ||
                        completedItems.includes(constructedId)) {
                        unitCompleted++;
                        courseCompleted++;
                    }
                });
                unitsData.push({
                    id: `${courseId}-virtual-unit`,
                    title: 'Core Competencies',
                    total: unitTotal,
                    completed: unitCompleted,
                    progress: unitTotal > 0 ? Math.round((unitCompleted / unitTotal) * 100) : 0
                });
            }

            // Global force complete override
            if (completedCourses.includes(courseId) && courseTotal > 0) {
                courseCompleted = courseTotal;
                unitsData.forEach(u => { u.completed = u.total; u.progress = 100; });
            }

            if (courseTotal === 0) return;

            const percentage = Math.round((courseCompleted / courseTotal) * 100);

            totalItemsGlobal += courseTotal;
            completedItemsGlobal += courseCompleted;

            calculated.push({
                id: courseId,
                ...meta,
                progress: percentage,
                completed: courseCompleted,
                total: courseTotal,
                rank: getRank(percentage),
                units: unitsData
            });
        });

        const overallPercent = totalItemsGlobal > 0 ? Math.round((completedItemsGlobal / totalItemsGlobal) * 100) : 0;

        return {
            skills: calculated.sort((a, b) => b.progress - a.progress),
            overall: overallPercent,
            overallPoints: completedItemsGlobal * 50 // Rough XP estimate
        };
    }, [completedItems, completedCourses]);

    const topSkills = stats.skills.slice(0, 5);

    // --- HANDLERS ---
    const openModal = (courseId = null) => {
        setSelectedCourseId(courseId || stats.skills[0]?.id);
        setIsModalOpen(true);
    };

    // Lock Body Scroll
    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const MiniStat = (
        <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 font-mono">GLOBAL SYNC</span>
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 border border-green-500/30 rounded bg-green-500/10">
                <span className="text-xs font-bold text-green-400">{stats.overall}%</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
        </div>
    );

    return (
        <>
            <SidebarWidgetFrame
                title="Skill_Matrix"
                icon={RiDatabase2Line}
                subtitle="Proficiency_Check"
                miniStat={MiniStat}
                onFullscreen={() => openModal()}
            >
                {/* --- COMPACT LIST CONTENT --- */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                            // HEURISTIC ANALYSIS
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-zinc-400 font-mono">{stats.overall}% INTEGRITY</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        {topSkills.length > 0 ? (
                            topSkills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <button
                                        key={skill.id}
                                        onClick={() => openModal(skill.id)}
                                        className="w-full flex items-center gap-3 p-2 rounded hover:bg-white/5 border border-transparent hover:border-cyan-500/20 transition-all text-left group/item"
                                    >
                                        <div className="shrink-0 text-zinc-500 group-hover/item:text-cyan-400 transition-colors">
                                            <Icon size={14} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-zinc-300 group-hover/item:text-white truncate">
                                                    {skill.name}
                                                </span>
                                                <span className="text-[10px] font-mono text-cyan-500">
                                                    {skill.progress}%
                                                </span>
                                            </div>
                                            <div className="h-0.5 w-full bg-zinc-800 rounded-full mt-1.5 overflow-hidden">
                                                <div
                                                    className="h-full bg-cyan-500/50 group-hover/item:bg-cyan-400 transition-colors relative"
                                                    style={{ width: `${skill.progress}%` }}
                                                >
                                                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })
                        ) : (
                            <div className="py-8 flex flex-col items-center justify-center text-zinc-600 gap-2 opacity-50">
                                <RiLoader4Line className="animate-spin" size={20} />
                                <span className="text-[10px] font-mono uppercase">Initializing...</span>
                            </div>
                        )}
                    </div>
                </div>
            </SidebarWidgetFrame>

            {/* --- FULL SCREEN MODAL (Existing) --- */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
                        <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl h-[85vh] bg-black border border-zinc-800 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* CRT Overlay Effect */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-50"></div>
                            <div className="absolute inset-0 pointer-events-none z-50 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent bg-[length:100%_4px]"></div>

                            {/* --- LEFT PANEL: SKILL MATRIX --- */}
                            <div className="w-full md:w-1/3 border-r border-zinc-800 bg-zinc-900/30 flex flex-col">
                                <div className="p-4 border-b border-zinc-800 bg-black/40">
                                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                                        <RiDatabase2Line className="text-cyan-500" />
                                        AVAILABLE_MODULES
                                    </h2>
                                </div>
                                <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-zinc-700">
                                    {stats.skills.map(skill => {
                                        const isActive = selectedCourseId === skill.id;
                                        const Icon = skill.icon;
                                        return (
                                            <button
                                                key={skill.id}
                                                onClick={() => setSelectedCourseId(skill.id)}
                                                className={`w-full p-3 rounded-lg border text-left transition-all group relative overflow-hidden
                                                    ${isActive
                                                        ? 'bg-cyan-500/10 border-cyan-500/50'
                                                        : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                                                    }`}
                                            >
                                                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />}

                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex items-center gap-3">
                                                        <Icon size={18} className={isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'} />
                                                        <span className={`text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-zinc-400'}`}>
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-zinc-500">{skill.progress}%</span>
                                                </div>
                                                {/* Mini Bar */}
                                                <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full transition-all duration-500 ${isActive ? 'bg-cyan-500' : 'bg-zinc-600'}`}
                                                        style={{ width: `${skill.progress}%` }}
                                                    />
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* --- RIGHT PANEL: DIAGNOSTICS DETAIL --- */}
                            <div className="flex-1 bg-black/60 flex flex-col relative">
                                {/* Header */}
                                <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-900/20">
                                    <div className="flex items-center gap-2">
                                        <RiFocus2Line className="text-cyan-500 animate-pulse" />
                                        <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
                                            DIAGNOSTIC_VIEW // {selectedCourseId?.toUpperCase()}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="p-2 hover:bg-red-500/10 text-zinc-500 hover:text-red-400 rounded transition-colors"
                                    >
                                        <RiCloseLine size={24} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-y-auto p-8 relative">
                                    {selectedCourseId ? (() => {
                                        const activeSkill = stats.skills.find(s => s.id === selectedCourseId);
                                        const Icon = activeSkill.icon;

                                        return (
                                            <div className="max-w-3xl mx-auto space-y-8">

                                                {/* Hero Card */}
                                                <div className="flex items-start gap-6 p-6 rounded-xl bg-gradient-to-br from-zinc-900 via-black to-black border border-zinc-800 relative overflow-hidden">
                                                    <div className={`p-4 rounded-xl bg-black border ${activeSkill.rank.border} shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                                                        <Icon size={48} style={{ color: activeSkill.color }} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <h2 className="text-3xl font-black text-white tracking-tight">{activeSkill.name}</h2>
                                                            <span className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest rounded border ${activeSkill.rank.border} ${activeSkill.rank.color} bg-black`}>
                                                                {activeSkill.rank.label}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-6 text-xs font-mono text-zinc-500">
                                                            <span className="flex items-center gap-1"><RiCodeBoxLine /> {activeSkill.code}</span>
                                                            <span className="flex items-center gap-1"><RiCheckDoubleLine /> {activeSkill.completed}/{activeSkill.total} MODULES</span>
                                                            <span className="flex items-center gap-1"><RiGitMergeLine /> {activeSkill.progress}% SYNCED</span>
                                                        </div>
                                                    </div>
                                                    {/* Big Percentage */}
                                                    <div className="absolute right-6 top-6 text-6xl font-black text-white/5 font-mono">
                                                        {activeSkill.progress}%
                                                    </div>
                                                </div>

                                                {/* Units Breakdown */}
                                                <div className="space-y-4">
                                                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest pl-1 border-l-2 border-cyan-500">
                                                        MODULE_SEQUENCE
                                                    </h3>

                                                    <div className="grid gap-3">
                                                        {activeSkill.units.map((unit, i) => (
                                                            <div
                                                                key={unit.id}
                                                                className="group flex items-center gap-4 p-4 rounded bg-zinc-900/30 border border-zinc-800/50 hover:border-cyan-500/30 transition-all"
                                                            >
                                                                <div className="text-xs font-mono text-zinc-600 w-8">
                                                                    {(i + 1).toString().padStart(2, '0')}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-center justify-between mb-2">
                                                                        <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                                                                            {unit.title}
                                                                        </span>
                                                                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${unit.progress === 100 ? 'bg-green-500/10 text-green-400' : 'bg-zinc-800 text-zinc-500'}`}>
                                                                            {unit.progress === 100 ? 'COMPLETED' : `${unit.progress}%`}
                                                                        </span>
                                                                    </div>
                                                                    <div className="h-1.5 bg-black rounded-full overflow-hidden border border-zinc-800">
                                                                        <motion.div
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: `${unit.progress}%` }}
                                                                            transition={{ delay: 0.1 * i }}
                                                                            className={`h-full ${unit.progress === 100 ? 'bg-green-500' : 'bg-cyan-600'}`}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>
                                        );
                                    })() : (
                                        <div className="h-full flex flex-col items-center justify-center text-zinc-600">
                                            <RiDatabase2Line size={48} className="mb-4 opacity-20" />
                                            <span>SELECT A MODULE TO BEGIN DIAGNOSTICS</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
