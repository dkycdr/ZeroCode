import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiOrganizationChart, RiExpandDiagonalLine, RiCloseLine, RiCpuLine, RiGlobeLine, RiDashboardLine, RiFlashlightLine, RiShieldCheckLine, RiLockLine, RiCheckLine, RiDatabase2Line, RiFocus2Line, RiCodeBoxLine, RiGitMergeLine, RiCheckDoubleLine } from 'react-icons/ri';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPostgresql, SiVuedotjs, SiExpress, SiGit, SiTailwindcss, SiTypescript, SiMongodb, SiPython, SiNextdotjs, SiPhp, SiMysql } from 'react-icons/si';
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

const NeuralCanvas = ({ isExpanded, nodes, connections }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        let pulses = [];

        const spawnPulse = () => {
            if (pulses.length < 5) {
                const conn = connections[Math.floor(Math.random() * connections.length)];
                const startNode = nodes.find(n => n.id === conn.from);
                const endNode = nodes.find(n => n.id === conn.to);

                if (startNode?.status !== 'locked') {
                    pulses.push({
                        ...conn,
                        progress: 0,
                        speed: 0.02 + Math.random() * 0.03
                    });
                }
            }
            setTimeout(spawnPulse, Math.random() * 2000);
        };
        spawnPulse();

        const render = () => {
            const scaleX = isExpanded ? rect.width / 300 : 1;
            const scaleY = isExpanded ? rect.height / 300 : 1;

            ctx.clearRect(0, 0, rect.width, rect.height);

            // Draw Connections
            connections.forEach(conn => {
                const start = nodes.find(n => n.id === conn.from);
                const end = nodes.find(n => n.id === conn.to);

                if (!start || !end) return;

                const x1 = isExpanded ? (start.x * 2.5 + 100) : start.x;
                const y1 = isExpanded ? (start.y * 2 + 100) : start.y;
                const x2 = isExpanded ? (end.x * 2.5 + 100) : end.x;
                const y2 = isExpanded ? (end.y * 2 + 100) : end.y;

                const isLocked = start.status === 'locked' || end.status === 'locked';

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = isLocked ? 'rgba(50, 50, 50, 0.5)' : (isExpanded ? 'rgba(6, 182, 212, 0.4)' : 'rgba(6, 182, 212, 0.2)');
                ctx.lineWidth = isExpanded ? 3 : 2;
                ctx.stroke();
            });

            // Draw Pulses
            pulses.forEach((pulse, index) => {
                const start = nodes.find(n => n.id === pulse.from);
                const end = nodes.find(n => n.id === pulse.to);

                if (!start || !end) return;

                const x1 = isExpanded ? (start.x * 2.5 + 100) : start.x;
                const y1 = isExpanded ? (start.y * 2 + 100) : start.y;
                const x2 = isExpanded ? (end.x * 2.5 + 100) : end.x;
                const y2 = isExpanded ? (end.y * 2 + 100) : end.y;

                pulse.progress += pulse.speed;
                if (pulse.progress >= 1) {
                    pulses.splice(index, 1);
                    return;
                }

                const currentX = x1 + (x2 - x1) * pulse.progress;
                const currentY = y1 + (y2 - y1) * pulse.progress;

                ctx.beginPath();
                ctx.arc(currentX, currentY, isExpanded ? 6 : 3, 0, Math.PI * 2);
                ctx.fillStyle = '#06b6d4';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#06b6d4';
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            // Draw Nodes
            nodes.forEach(node => {
                const nx = isExpanded ? (node.x * 2.5 + 100) : node.x;
                const ny = isExpanded ? (node.y * 2 + 100) : node.y;

                ctx.beginPath();
                ctx.arc(nx, ny, isExpanded ? 14 : 6, 0, Math.PI * 2);

                if (node.status === 'mastered') {
                    ctx.fillStyle = '#f59e0b';
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = '#f59e0b';
                } else if (node.status === 'unlocked') {
                    ctx.fillStyle = '#10b981';
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#10b981';
                } else if (node.status === 'active') {
                    ctx.fillStyle = '#06b6d4';
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = '#06b6d4';
                } else {
                    ctx.fillStyle = '#27272a';
                    ctx.shadowBlur = 0;
                }

                ctx.fill();

                if (node.status === 'active' || node.status === 'mastered') {
                    ctx.beginPath();
                    ctx.arc(nx, ny, isExpanded ? 24 : 10, 0, Math.PI * 2);
                    ctx.strokeStyle = node.status === 'mastered' ? 'rgba(245, 158, 11, 0.5)' : 'rgba(6, 182, 212, 0.5)';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                ctx.fillStyle = node.status === 'locked' ? '#52525b' : '#e4e4e7';
                ctx.font = isExpanded ? 'bold 14px monospace' : '10px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(node.label, nx, ny + (isExpanded ? 35 : 20));
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isExpanded, nodes, connections]);

    return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default function NeuralTechTreeWidget() {
    const { completedCourses, completedItems } = useProgress();
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    // Dynamic Node Calculation (Graph View)
    const { nodes, connections, stats } = useMemo(() => {
        const baseNodes = [
            { id: 'html', courseId: 'web-development-html', x: 50, y: 50, label: 'HTML', status: 'locked', fullName: 'Web Development HTML' },
            { id: 'css', courseId: 'web-development-css', x: 150, y: 50, label: 'CSS', status: 'locked', fullName: 'Web Development CSS' },
            { id: 'js', courseId: 'javascript-basics', x: 100, y: 120, label: 'JS', status: 'locked', fullName: 'JavaScript Basics' },
            { id: 'react', courseId: 'react-fundamentals', x: 50, y: 190, label: 'REACT', status: 'locked', fullName: 'React Fundamentals' },
            { id: 'node', courseId: 'nodejs-fundamentals', x: 150, y: 190, label: 'NODE', status: 'locked', fullName: 'Node.js Fundamentals' },
            { id: 'sql', courseId: 'postgresql-mastery', x: 200, y: 120, label: 'SQL', status: 'locked', fullName: 'PostgreSQL Mastery' }
        ];

        const baseConnections = [
            { from: 'html', to: 'css' },
            { from: 'html', to: 'js' },
            { from: 'css', to: 'js' },
            { from: 'js', to: 'react' },
            { from: 'js', to: 'node' },
            { from: 'node', to: 'sql' }
        ];

        let masteredCount = 0;
        let activeUnlockedCount = 0;
        let lockedCount = 0;

        // Apply proper status logic
        const updatedNodes = baseNodes.map(node => {
            const isCompleted = completedCourses.includes(node.courseId);

            if (isCompleted) {
                masteredCount++;
                return { ...node, status: 'mastered' };
            }

            // HTML is always available to start
            if (node.id === 'html') {
                activeUnlockedCount++;
                return { ...node, status: 'active' };
            }

            // Find prerequisites
            const prereqConnections = baseConnections.filter(c => c.to === node.id);
            const prereqNodes = baseNodes.filter(n => prereqConnections.some(c => c.from === n.id));

            // Check if all prerequisites are completed
            const allPrereqsDone = prereqNodes.length > 0 && prereqNodes.every(p => completedCourses.includes(p.courseId));

            if (allPrereqsDone) {
                activeUnlockedCount++;
                return { ...node, status: 'unlocked' };
            }

            lockedCount++;
            return node; // remains locked
        });

        const mastery = Math.round((masteredCount / baseNodes.length) * 100);
        const availability = Math.round(((masteredCount + activeUnlockedCount) / baseNodes.length) * 100);

        return {
            nodes: updatedNodes,
            connections: baseConnections,
            stats: {
                mastery,
                availability,
                active: activeUnlockedCount,
                mastered: masteredCount,
                locked: lockedCount,
                total: baseNodes.length
            }
        };

    }, [completedCourses]);

    // Skill Analytics Calculation (Fullscreen View)
    const skillStats = useMemo(() => {
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
                    id: 'tasks',
                    title: 'Core Tasks',
                    total: unitTotal,
                    completed: unitCompleted,
                    progress: unitTotal > 0 ? Math.round((unitCompleted / unitTotal) * 100) : 0
                });
            }

            const progress = courseTotal > 0 ? Math.round((courseCompleted / courseTotal) * 100) : 0;
            totalItemsGlobal += courseTotal;
            completedItemsGlobal += courseCompleted;

            calculated.push({
                ...meta,
                id: courseId,
                progress,
                total: courseTotal,
                completed: courseCompleted,
                units: unitsData,
                rank: getRank(progress)
            });
        });

        const overall = totalItemsGlobal > 0 ? Math.round((completedItemsGlobal / totalItemsGlobal) * 100) : 0;
        const sortedSkills = calculated.sort((a, b) => b.progress - a.progress);

        return {
            overall,
            skills: sortedSkills
        };
    }, [completedItems]);

    // Initialize selection when opening
    useEffect(() => {
        if (isExpanded && !selectedCourseId && skillStats.skills.length > 0) {
            setSelectedCourseId(skillStats.skills[0].id);
        }
    }, [isExpanded, skillStats, selectedCourseId]);

    // Lock Body Scroll
    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isExpanded]);

    return (
        <>
            {/* WIDGET CONTAINER - SIDEBAR VIEW (NEURAL MESH) */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/20 to-black border border-cyan-900/30 rounded-lg transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]" />

                <div
                    className="absolute inset-0 opacity-5 pointer-events-none rounded-lg"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px)',
                        backgroundSize: '100% 4px'
                    }}
                />

                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-500/50 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-500/50 rounded-br-lg" />

                <div className="relative z-20 p-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <RiOrganizationChart className="text-cyan-400" size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.6)]">NEURAL_GRID</span>
                        </div>
                        <div className="text-[9px] font-mono text-cyan-600/60">V.2.0.1</div>
                    </div>

                    <div className="relative h-[220px] w-full flex items-center justify-center mb-4 border border-cyan-900/30 bg-black/60 rounded overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(6,182,212,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.2) 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}
                        />
                        <NeuralCanvas isExpanded={false} nodes={nodes} connections={connections} />
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="text-[8px] font-mono text-zinc-500 uppercase flex flex-col gap-0.5">
                            <span className="text-cyan-600/70">Topology: <span className="text-zinc-400">Mesh</span></span>
                            <span className="text-cyan-600/70">Mastery: <span className="text-cyan-400 font-bold">{stats.mastery}%</span></span>
                        </div>

                        <button
                            onClick={() => setIsExpanded(true)}
                            className="relative group/btn bg-cyan-950/30 hover:bg-cyan-600 border border-cyan-600/50 text-cyan-400 hover:text-black px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 rounded overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                            <RiExpandDiagonalLine size={14} />
                            <span className="relative">Access_Map</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* EXPANDED MODAL - SKILL MATRIX VIEW */}
            <AnimatePresence>
                {isExpanded && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6">
                        <div className="absolute inset-0" onClick={() => setIsExpanded(false)} />

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
                                    {skillStats.skills.map(skill => {
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
                                        onClick={() => setIsExpanded(false)}
                                        className="p-2 hover:bg-red-500/10 text-zinc-500 hover:text-red-400 rounded transition-colors"
                                    >
                                        <RiCloseLine size={24} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-y-auto p-8 relative">
                                    {selectedCourseId ? (() => {
                                        const activeSkill = skillStats.skills.find(s => s.id === selectedCourseId);
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
