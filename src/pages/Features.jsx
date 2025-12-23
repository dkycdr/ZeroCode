import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { useAuth } from '../contexts/AuthProvider';
import { useState } from 'react';
import {
    VscCode, VscTerminal, VscDebugAlt, VscLayers, VscCircuitBoard, VscShield
} from 'react-icons/vsc';
import {
    RiFlashlightFill, RiNodeTree, RiShieldCheckFill, RiCpuLine, RiDatabase2Line, RiRadarLine
} from 'react-icons/ri';
import {
    FaCertificate, FaLayerGroup
} from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiReact
} from 'react-icons/si';
import {
    BsTerminalFill
} from 'react-icons/bs';
import { ArrowRight, Activity, Terminal as TerminalIcon } from 'lucide-react';

import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { getOverallProgress } from '../data/curriculumStructure';
import { useProgress } from '../contexts/ProgressProvider';

export default function Features() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { completedCourses } = useProgress();
    const progress = getOverallProgress(completedCourses);

    return (
        <AppLayout>
            <div className="relative isolate bg-black">
                {/* Dark Grid Background */}
                <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }} />

                <div className="relative z-10 pt-16 pb-32 space-y-32">

                    {/* HERO SECTION */}
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="relative bg-black border border-cyan-900/50 p-8 md:p-16 overflow-hidden">
                            {/* Glow orbs */}
                            <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-950/40 rounded-full blur-3xl" />
                            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-950/30 rounded-full blur-3xl" />

                            {/* HUD Overlays */}
                            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-cyan-600/60 space-y-1 text-right hidden md:block">
                                <div>SYSTEM.UPTIME: 99.99%</div>
                                <div>ENCRYPTION: AES-256</div>
                                <div>NODE: EDGE_01</div>
                            </div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="px-4 py-2 bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 font-mono text-[10px] tracking-[0.2em] uppercase"
                                >
                                    CORE.CAPABILITIES v3.2.0
                                </motion.div>

                                <h1 className="text-5xl md:text-8xl font-black text-cyan-100 tracking-tight leading-[0.9] uppercase">
                                    UPGRADE YOUR <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-400">
                                        NEURALNET
                                    </span>
                                </h1>

                                <p className="text-cyan-600/80 font-mono text-sm md:text-base max-w-2xl leading-relaxed">
                                    ZeroCode is not just a platform. It's a high-fidelity training simulation designed to overwrite legacy knowledge with expert-grade protocols.
                                </p>

                                <div className="flex items-center gap-4 pt-4">
                                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-cyan-500/50" />
                                    <Activity className="text-cyan-500 animate-pulse" size={20} />
                                    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-cyan-500/50" />
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500/50" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-500/50" />
                        </div>
                    </div>

                    {/* FEATURE MODULES */}
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-12 flex items-center justify-between border-b border-cyan-900/30 pb-4">
                            <h2 className="text-xs font-bold text-cyan-300 uppercase tracking-[0.3em] font-mono">
                                [ SYSTEM.MODULES ]
                            </h2>
                            <div className="text-[10px] font-mono text-cyan-700">CAPACITY: 100%</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* MODULE 01: CLOUD IDE */}
                            <ModuleCard
                                className="md:col-span-8 row-span-2"
                                id="01"
                                title="Neural IDE Sandbox"
                                desc="Direct neural interface for real-time code execution. Browser-native, zero-latency, pre-configured with expert dependencies."
                                icon={<VscCode size={24} />}
                                accent="cyan"
                                preview={
                                    <div className="mt-8 bg-black border border-cyan-900/30 p-4 font-mono text-xs scale-95 group-hover:scale-100 transition-transform duration-500 origin-top">
                                        <div className="flex gap-2 mb-4 opacity-30">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-cyan-700">01 // Initialize Protocol</div>
                                            <div className="text-cyan-200"><span className="text-purple-400">const</span> agent = <span className="text-yellow-400">await</span> ZeroCode.<span className="text-blue-400">boot</span>();</div>
                                            <div className="text-cyan-700">02 // Redirecting Output...</div>
                                            <div className="text-cyan-400 animate-pulse">03 &gt; STATUS_OK: Neural Link Stable</div>
                                        </div>
                                    </div>
                                }
                            />

                            {/* MODULE 02: REAL-TIME ANALYTICS */}
                            <ModuleCard
                                className="md:col-span-4"
                                id="02"
                                title="Pulse Validator"
                                desc="Atomic verification of every keystroke. Get diagnostic reports instantly as you build."
                                icon={<VscCircuitBoard size={24} />}
                                accent="teal"
                            />

                            {/* MODULE 03: SKILL PATHS */}
                            <ModuleCard
                                className="md:col-span-4"
                                id="03"
                                title="Node Mapper"
                                desc="Visualize your progression through the network. Identify bottlenecks and skill gaps."
                                icon={<RiNodeTree size={24} />}
                                accent="blue"
                            />

                            {/* MODULE 04: CERTIFICATES */}
                            <ModuleCard
                                className="md:col-span-12"
                                id="04"
                                horizontal
                                title="Proof of Mastery NFT"
                                desc="Verified on-chain graduation protocols. Your expertise is cryptographically sealed and universally exportable."
                                icon={<VscShield size={24} />}
                                accent="emerald"
                                preview={
                                    <div className="flex-1 flex justify-center py-4">
                                        <div className="relative w-48 h-32 border border-emerald-700/30 bg-emerald-950/20 overflow-hidden">
                                            <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(16,185,129,0.05)_2px,rgba(16,185,129,0.05)_4px)]" />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                                <div className="text-[8px] font-mono text-emerald-500/70 mb-2 tracking-widest">ENCRYPTED.SIGNATURE</div>
                                                <FaCertificate className="text-emerald-400" size={24} />
                                                <div className="text-[6px] font-mono text-emerald-700 mt-2">ID: ZCX-99-ALPHA-TOKEN</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    {/* DEEP WORK FEATURE */}
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black text-cyan-100 tracking-tight uppercase">Designed for Flow</h3>
                                <div className="h-1 w-20 bg-cyan-500" />
                            </div>

                            <div className="space-y-8">
                                {[
                                    { title: "Pure Dark Interface", desc: "Optimized for high-concentration night operations.", icon: <VscLayers className="text-cyan-400" /> },
                                    { title: "Terminal First UX", desc: "Full keyboard command set. No mouse required for core tasks.", icon: <VscTerminal className="text-cyan-400" /> },
                                    { title: "Neural Drill Mode", desc: "Zero-distraction workspace focusing only on the code.", icon: <RiCpuLine className="text-cyan-400" /> }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="w-14 h-14 bg-cyan-950/30 border border-cyan-900/50 flex items-center justify-center shrink-0 group-hover:border-cyan-600/70 transition-colors">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-cyan-200 font-bold tracking-tight uppercase font-mono">{item.title}</h4>
                                            <p className="text-cyan-600/80 text-sm font-mono">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-black border border-cyan-900/50 p-2 overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2574&auto=format&fit=crop"
                                    alt="Workspace"
                                    className="grayscale opacity-50 group-hover:opacity-70 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay" />
                            </div>

                            <div className="absolute top-4 right-4 bg-black/90 border border-cyan-700/50 px-3 py-1 font-mono text-[8px] text-cyan-400">
                                SENSOR: OPTIMAL.ENV
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM CTA */}
                    <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-black text-cyan-100 tracking-tight uppercase font-mono">
                                Initialize Transmission
                            </h2>
                            <p className="text-cyan-600/80 font-mono tracking-[0.1em] uppercase text-sm">THE.FUTURE.IS.ZEROCODE</p>
                        </div>

                        <button
                            onClick={() => navigate('/register')}
                            className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-500 overflow-hidden transition-all active:scale-95 border border-cyan-400/30"
                        >
                            <span className="relative z-10 flex items-center gap-4 text-black font-black uppercase tracking-[0.15em] font-mono">
                                <BsTerminalFill size={20} />
                                Start Simulation
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </button>
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}

function ModuleCard({ className, id, title, desc, icon, accent, preview, horizontal = false }) {
    const accents = {
        cyan: "border-cyan-700/30 text-cyan-400 bg-cyan-950/20",
        teal: "border-teal-700/30 text-teal-400 bg-teal-950/20",
        blue: "border-blue-700/30 text-blue-400 bg-blue-950/20",
        emerald: "border-emerald-700/30 text-emerald-400 bg-emerald-950/20",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={clsx(
                "relative bg-black border border-cyan-900/50 p-8 flex flex-col group overflow-hidden transition-all duration-300 hover:border-cyan-700/70",
                className
            )}
        >
            {/* Module ID Tag */}
            <div className="absolute top-0 left-0 bg-cyan-950/30 px-3 py-1 font-mono text-[8px] text-cyan-600 tracking-widest border-b border-r border-cyan-900/30 group-hover:text-cyan-400 transition-colors">
                MODULE.{id}
            </div>

            <div className={clsx("flex gap-8", horizontal ? "flex-col md:flex-row items-center" : "flex-col")}>
                <div className="flex-1 space-y-6">
                    <div className={clsx(
                        "w-12 h-12 flex items-center justify-center border transition-all duration-500 group-hover:scale-110",
                        accents[accent]
                    )}>
                        {icon}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-cyan-200 uppercase tracking-tight font-mono group-hover:text-cyan-100 transition-colors">
                            {title}
                        </h3>
                        <p className="text-cyan-600/80 text-sm font-mono leading-relaxed max-w-sm">
                            {desc}
                        </p>
                    </div>

                    <div className="pt-4 flex items-center gap-2 font-mono text-[8px] text-cyan-700 uppercase tracking-widest group-hover:text-cyan-500/80 transition-colors">
                        <Activity size={10} className="animate-pulse" />
                        STATUS: OPERATIONAL
                    </div>
                </div>

                {preview && (
                    <div className="w-full h-full">
                        {preview}
                    </div>
                )}
            </div>

            {/* Subtle glow on hover */}
            <div className="absolute -inset-1 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
        </motion.div>
    );
}
