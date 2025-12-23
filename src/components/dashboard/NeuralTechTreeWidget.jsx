import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiOrganizationChart, RiExpandDiagonalLine, RiCloseLine, RiCpuLine, RiGlobeLine, RiDashboardLine, RiFlashlightLine, RiShieldCheckLine, RiLockLine, RiCheckLine } from 'react-icons/ri';
import { useProgress } from '../../contexts/ProgressProvider';

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
    const { completedCourses, recentActivity } = useProgress();
    const [isExpanded, setIsExpanded] = useState(false);

    // Dynamic Node Calculation with proper logic
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

    return (
        <>
            {/* WIDGET CONTAINER */}
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

            {/* EXPANDED MODAL */}
            <AnimatePresence>
                {isExpanded && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-6">
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }} />

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
                            className="bg-gradient-to-br from-zinc-950 via-black to-zinc-950 border border-cyan-500/30 w-full max-w-7xl h-[90vh] shadow-[0_0_80px_rgba(6,182,212,0.15)] flex relative overflow-hidden rounded-xl"
                        >
                            {/* Animated corner accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-cyan-400 animate-pulse" />
                            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }} />

                            {/* LEFT: MAIN CANVAS AREA */}
                            <div className="flex-1 flex flex-col">
                                {/* Header Bar */}
                                <div className="h-20 px-8 flex items-center justify-between border-b border-cyan-900/20 bg-gradient-to-r from-cyan-950/10 via-transparent to-cyan-950/10">
                                    <div className="flex items-center gap-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
                                            <div className="relative p-3 bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 rounded-lg border border-cyan-500/40">
                                                <RiCpuLine className="text-cyan-400" size={28} />
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-3xl font-black uppercase tracking-[0.15em] bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                                                Neural Architecture Map
                                            </h2>
                                            <div className="flex items-center gap-4 mt-1">
                                                <p className="text-xs font-mono text-cyan-600/70">System Diagnostics</p>
                                                <span className="text-cyan-800">•</span>
                                                <p className="text-xs font-mono text-cyan-600/70">Node Connectivity</p>
                                                <span className="text-cyan-800">•</span>
                                                <p className="text-xs font-mono text-cyan-500 animate-pulse">ACTIVE</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setIsExpanded(false)}
                                        className="group relative px-6 py-3 bg-gradient-to-br from-zinc-900 to-black border border-cyan-800/50 hover:border-cyan-500/80 transition-all duration-300 rounded-lg overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-cyan-600/10 to-cyan-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative flex items-center gap-2">
                                            <RiCloseLine className="text-cyan-600 group-hover:text-cyan-400 transition-colors" size={18} />
                                            <span className="text-cyan-600 group-hover:text-cyan-400 font-mono text-sm uppercase tracking-wider transition-colors">Disconnect</span>
                                        </div>
                                    </button>
                                </div>

                                {/* Canvas Container */}
                                <div className="flex-1 relative bg-[radial-gradient(ellipse_at_center,#0a0a0a_0%,#000000_100%)]">
                                    <div className="absolute inset-0 opacity-[0.08]" style={{
                                        backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)',
                                        backgroundSize: '60px 60px'
                                    }} />
                                    <div className="absolute inset-0 opacity-[0.04]" style={{
                                        backgroundImage: 'linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }} />

                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                                        backgroundImage: 'linear-gradient(transparent 50%, rgba(6,182,212,0.1) 50%)',
                                        backgroundSize: '100% 4px'
                                    }} />

                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <NeuralCanvas isExpanded={true} nodes={nodes} connections={connections} />
                                    </div>

                                    {/* Bottom info bar */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm border-t border-cyan-900/10">
                                        <div className="flex items-center justify-between px-4">
                                            <div className="flex items-center gap-6 text-xs font-mono">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                                    <span className="text-cyan-600/70">Topology: <span className="text-cyan-400">Mesh Network</span></span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                                    <span className="text-cyan-600/70">Availability: <span className="text-emerald-400">{stats.availability}%</span></span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                                                    <span className="text-cyan-600/70">Active Paths: <span className="text-amber-400">{stats.active + stats.mastered}</span></span>
                                                </div>
                                            </div>
                                            <div className="text-[10px] text-cyan-800 uppercase tracking-widest">Neural Graph v3.1.4</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: ANALYTICS SIDEBAR */}
                            <div className="w-[400px] bg-gradient-to-b from-zinc-950/95 to-black/95 backdrop-blur-xl border-l border-cyan-900/20 flex flex-col">
                                {/* Stats Header */}
                                <div className="p-6 border-b border-cyan-900/20">
                                    <div className="text-[10px] text-cyan-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                        <RiGlobeLine size={12} />
                                        System Analytics
                                    </div>

                                    {/* Dual Progress Rings */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        {/* Mastery */}
                                        <div className="relative aspect-square">
                                            <svg className="w-full h-full -rotate-90">
                                                <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="6" />
                                                <motion.circle
                                                    cx="50%" cy="50%" r="45%" fill="none" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round"
                                                    strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                                                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                                                    animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - stats.mastery / 100) }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="text-2xl font-black text-cyan-400">{stats.mastery}%</div>
                                                <div className="text-[9px] text-cyan-700 uppercase">Mastery</div>
                                            </div>
                                        </div>

                                        {/* Availability */}
                                        <div className="relative aspect-square">
                                            <svg className="w-full h-full -rotate-90">
                                                <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="6" />
                                                <motion.circle
                                                    cx="50%" cy="50%" r="45%" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round"
                                                    strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                                                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                                                    animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - stats.availability / 100) }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="text-2xl font-black text-emerald-400">{stats.availability}%</div>
                                                <div className="text-[9px] text-emerald-700 uppercase">Available</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center text-[10px] text-cyan-600/60 uppercase tracking-wide">Skill Matrix Synchronized</div>
                                </div>

                                {/* Scrollable Stats */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-cyan-900/30 scrollbar-track-transparent">
                                    {/* Network Overview */}
                                    <div>
                                        <div className="text-[10px] text-cyan-600 uppercase tracking-wider mb-3">Network Overview</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between p-3 bg-cyan-950/10 border border-cyan-900/20 rounded">
                                                <div className="flex items-center gap-2">
                                                    <RiCheckLine className="text-amber-500" size={14} />
                                                    <span className="text-xs text-zinc-300">Mastered</span>
                                                </div>
                                                <span className="text-lg font-black text-amber-400">{stats.mastered}</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-cyan-950/10 border border-cyan-900/20 rounded">
                                                <div className="flex items-center gap-2">
                                                    <RiDashboardLine className="text-cyan-500" size={14} />
                                                    <span className="text-xs text-zinc-300">Active/Unlocked</span>
                                                </div>
                                                <span className="text-lg font-black text-cyan-400">{stats.active}</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-cyan-950/10 border border-cyan-900/20 rounded">
                                                <div className="flex items-center gap-2">
                                                    <RiLockLine className="text-zinc-600" size={14} />
                                                    <span className="text-xs text-zinc-300">Locked</span>
                                                </div>
                                                <span className="text-lg font-black text-zinc-500">{stats.locked}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Node Details */}
                                    <div>
                                        <div className="text-[10px] text-cyan-600 uppercase tracking-wider mb-3">Node Details</div>
                                        <div className="space-y-2">
                                            {nodes.map(node => (
                                                <div
                                                    key={node.id}
                                                    className={`p-3 rounded border transition-all duration-300 ${node.status === 'mastered'
                                                            ? 'bg-gradient-to-r from-amber-950/30 to-amber-900/10 border-amber-900/40 hover:border-amber-500/60'
                                                            : node.status === 'active' || node.status === 'unlocked'
                                                                ? 'bg-gradient-to-r from-cyan-950/30 to-cyan-900/10 border-cyan-900/40 hover:border-cyan-500/60'
                                                                : 'bg-zinc-950/50 border-zinc-800/30 hover:border-zinc-700/50'
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full ${node.status === 'mastered' ? 'bg-amber-500 shadow-[0_0_8px_#f59e0b]' :
                                                                    node.status === 'active' ? 'bg-cyan-500 shadow-[0_0_8px_#06b6d4]' :
                                                                        node.status === 'unlocked' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' :
                                                                            'bg-zinc-700'
                                                                }`} />
                                                            <span className={`text-xs font-medium ${node.status === 'mastered' ? 'text-amber-400' :
                                                                    node.status === 'active' || node.status === 'unlocked' ? 'text-cyan-400' :
                                                                        'text-zinc-600'
                                                                }`}>{node.fullName}</span>
                                                        </div>
                                                        <span className={`text-[9px] uppercase px-2 py-0.5 rounded ${node.status === 'mastered' ? 'bg-amber-500/20 text-amber-400' :
                                                                node.status === 'active' ? 'bg-cyan-500/20 text-cyan-400' :
                                                                    node.status === 'unlocked' ? 'bg-emerald-500/20 text-emerald-400' :
                                                                        'bg-zinc-800/50 text-zinc-600'
                                                            }`}>{node.status}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Legend */}
                                    <div className="pt-4 border-t border-cyan-900/20">
                                        <div className="text-[10px] text-cyan-600 uppercase tracking-wider mb-3">Status Legend</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 p-2 rounded hover:bg-amber-950/10 transition-colors">
                                                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_8px_#f59e0b] animate-pulse" />
                                                <span className="text-xs text-amber-400 font-medium">Mastered - Course Completed</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 rounded hover:bg-cyan-950/10 transition-colors">
                                                <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4] animate-pulse" />
                                                <span className="text-xs text-cyan-400 font-medium">Active - Currently Learning</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 rounded hover:bg-emerald-950/10 transition-colors">
                                                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
                                                <span className="text-xs text-emerald-400 font-medium">Unlocked - Prerequisites Done</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 rounded hover:bg-zinc-900/20 transition-colors">
                                                <div className="w-2.5 h-2.5 bg-zinc-700 rounded-full" />
                                                <span className="text-xs text-zinc-500 font-medium">Locked - Prerequisites Pending</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
