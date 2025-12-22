import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { useAuth } from '../contexts/AuthProvider';
import { useState } from 'react';
import {
    VscCode, VscTerminal, VscDebugAlt
} from 'react-icons/vsc';
import {
    RiFlashlightFill, RiNodeTree, RiShieldCheckFill, RiCpuLine
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
import { ArrowRight } from 'lucide-react';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { getOverallProgress } from '../data/curriculumStructure';
import { useProgress } from '../contexts/ProgressProvider';

export default function Features() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { completedCourses } = useProgress();
    const progress = getOverallProgress(completedCourses);

    return (
        <AppLayout>
            <div className="overflow-hidden">
                {/* Background Effects */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
                </div>

                <div className="pt-10 pb-32 relative z-10">
                    {/* Hero Section */}
                    <div className="max-w-7xl mx-auto px-6 mb-32">
                        <div className="text-center mb-20 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-primary)]/10 rounded-full text-xs font-mono text-[var(--accent-primary)] mb-8 border border-[var(--accent-primary)]/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                                <span className="tracking-wider uppercase">System Capabilities v2.0</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                                Forge Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600">Digital Future.</span>
                            </h1>
                            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                                A vertically integrated learning ecosystem designed to accelerate your transformation from novice to senior engineer.
                            </p>
                        </div>

                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                            {/* 1. Cloud IDE - Large */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-2 row-span-2 rounded-3xl bg-[#0c0c0c] border border-[var(--border-subtle)] overflow-hidden relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-panel)] to-transparent opacity-50"></div>
                                <div className="p-8 relative z-10 h-full flex flex-col">
                                    <div className="mb-auto">
                                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                            <VscCode size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">Zero-Config Cloud IDE</h3>
                                        <p className="text-gray-400 text-lg max-w-md">
                                            Launch a full development environment in your browser instantly. No installations, no configuration hell. Just pure coding context.
                                        </p>
                                    </div>

                                    {/* Fake IDE UI */}
                                    <div className="mt-8 rounded-t-xl bg-[#1e1e1e] border border-white/10 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                            </div>
                                            <div className="ml-4 text-xs text-gray-500 font-mono flex items-center gap-2">
                                                <SiJavascript className="text-yellow-400" />
                                                main.js
                                            </div>
                                        </div>
                                        <div className="p-4 font-mono text-sm text-gray-300">
                                            <div className="flex gap-4">
                                                <span className="text-gray-600 select-none">1</span>
                                                <span><span className="text-purple-400">const</span> <span className="text-blue-400">future</span> = <span className="text-purple-400">await</span> <span className="text-yellow-400">build</span>();</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-gray-600 select-none">2</span>
                                                <span>console.<span className="text-yellow-400">log</span>(<span className="text-green-400">"Hello World"</span>);</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-gray-600 select-none">3</span>
                                                <span><span className="text-gray-500">// Ready to deploy...</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2. Real-time Analysis */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-3xl bg-[#0c0c0c] border border-[var(--border-subtle)] p-8 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[80px]"></div>
                                <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 border border-yellow-500/20">
                                    <RiFlashlightFill size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Instant Feedback</h3>
                                <p className="text-gray-400 text-sm">
                                    Our execution engine runs your code securely in real-time, providing instant validation and error tracking.
                                </p>
                                <div className="absolute bottom-4 right-4 text-yellow-500/10 group-hover:text-yellow-500/30 transition-colors">
                                    <VscDebugAlt size={80} />
                                </div>
                            </motion.div>

                            {/* 3. Skill Paths */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="rounded-3xl bg-[#0c0c0c] border border-[var(--border-subtle)] p-8 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[80px]"></div>
                                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                                    <RiNodeTree size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Neural Paths</h3>
                                <p className="text-gray-400 text-sm">
                                    AI-curated curriculums that guide you from concept to mastery without the fluff.
                                </p>
                                <div className="mt-6 flex gap-2">
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5 flex items-center gap-1">
                                        <SiReact className="text-blue-400" /> React
                                    </span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5 flex items-center gap-1">
                                        <SiTypescript className="text-blue-300" /> TS
                                    </span>
                                </div>
                            </motion.div>

                            {/* 4. Certifications - Wide */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="md:col-span-3 rounded-3xl bg-[#0c0c0c] border border-[var(--border-subtle)] p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex-1 relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full text-xs font-mono text-green-400 mb-6 border border-green-500/20">
                                        <RiShieldCheckFill size={14} />
                                        <span>BLOCKCHAIN VERIFIED</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Proof of Mastery</h3>
                                    <p className="text-gray-400 text-lg max-w-lg mb-8">
                                        Earn verifiable certificates upon course completion. Export directly to LinkedIn or download as a secure PDF to showcase your skills.
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-2xl font-bold text-white">12k+</span>
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">Certified</span>
                                        </div>
                                        <div className="w-px h-10 bg-white/10"></div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-2xl font-bold text-white">98%</span>
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">Hire Rate</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 w-full max-w-md relative">
                                    {/* Certificate Mockup */}
                                    <div className="aspect-[4/3] bg-[#1a1a1a] rounded-xl border border-white/10 p-6 relative shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                                        <div className="border border-white/5 h-full p-4 flex flex-col items-center justify-center text-center">
                                            <FaCertificate size={48} className="text-[var(--accent-primary)] mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                                            <div className="text-xl font-serif text-white mb-2">Certificate of Completion</div>
                                            <div className="text-xs text-gray-500 mb-8">Advanced JavaScript Systems</div>
                                            <div className="w-32 h-px bg-white/10 mb-4"></div>
                                            <div className="text-[10px] font-mono text-gray-600">ID: 8X92-2291-ZX99</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Designed for Flow State</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Dark Mode Native", desc: "Optimized for long coding sessions.", icon: FaLayerGroup },
                                    { title: "Keyboard First", desc: "Navigate the entire platform without a mouse.", icon: VscTerminal },
                                    { title: "Distraction Free", desc: "Zen mode for deep work.", icon: RiCpuLine }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-white/20 transition-colors">
                                            <item.icon size={22} className="text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[var(--accent-primary)]/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative z-10 rounded-2xl border border-white/10 bg-[#0c0c0c] p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2574&auto=format&fit=crop"
                                    alt="Workspace"
                                    className="rounded-xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-white mb-8">Ready to Initialize?</h2>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => navigate('/register')}
                                className="px-8 py-4 bg-[var(--accent-primary)] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-[0_0_20px_var(--accent-glow)] flex items-center gap-2"
                            >
                                <BsTerminalFill size={18} />
                                Start Coding
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
