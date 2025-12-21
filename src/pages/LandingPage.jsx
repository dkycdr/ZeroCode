import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import {
    Code, ArrowRight, Check, MessageCircle, Play,
    Terminal, Layers, Cpu, Zap, ChevronRight, Globe, Shield
} from 'lucide-react';
import { VscCode, VscTerminal, VscRocket } from 'react-icons/vsc';
import { RiFlashlightFill, RiStackFill, RiCpuLine, RiShieldCheckFill, RiWhatsappLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

const PRICING = {
    beginner: {
        name: 'Starter',
        price: 50000,
        description: 'Foundation skills',
        courses: 5,
        features: ['HTML5 & CSS3', 'JavaScript Basics', 'Git Version Control', 'Tailwind CSS', 'Lifetime access']
    },
    intermediate: {
        name: 'Developer',
        price: 75000,
        description: 'Build real apps',
        courses: 11,
        popular: true,
        features: ['Everything in Starter', 'DOM & Modern JS', 'React.js', 'PHP & MySQL', 'Python basics']
    },
    advanced: {
        name: 'Professional',
        price: 80000,
        description: 'Production ready',
        courses: 16,
        features: ['Everything in Developer', 'TypeScript', 'Node.js & Express', 'MongoDB', 'Next.js & CI/CD']
    }
};

const WHATSAPP_NUMBER = '6283875727384';

export default function LandingPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleBuy = (tier) => {
        const plan = PRICING[tier];
        const message = encodeURIComponent(
            `Hi! I want to purchase the ${plan.name} plan (Rp ${plan.price.toLocaleString('id-ID')})\n\nEmail: ${user?.email || '[not logged in]'}\nName: ${user?.name || '[not logged in]'}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-white font-sans selection:bg-[var(--accent-primary)] selection:text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[var(--accent-primary)]/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold tracking-tight text-xl">
                        <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] flex items-center justify-center border border-[var(--accent-primary)]/30">
                            <VscCode size={20} />
                        </div>
                        <span>ZeroCode</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {user ? (
                            <button onClick={() => navigate('/dashboard')} className="text-sm px-6 py-2 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                Dashboard
                            </button>
                        ) : (
                            <>
                                <button onClick={() => navigate('/login')} className="text-sm text-gray-400 hover:text-white transition font-medium">
                                    Login
                                </button>
                                <button onClick={() => navigate('/register')} className="text-sm px-6 py-2 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                    Get Started
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative pt-40 pb-32 px-6">
                <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-xs font-mono text-[var(--accent-primary)] mb-8 border border-[var(--accent-primary)]/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>
                        <span className="tracking-wider uppercase">System Online • 16 Courses Available</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                        Master the Code.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-cyan-400">Control the Future.</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Interactive application development training. From zero knowledge to deployment, build the skills that power the modern web.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/register')}
                            className="w-full sm:w-auto px-8 py-4 bg-[var(--accent-primary)] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-blue-600 transition flex items-center justify-center gap-2 shadow-[0_0_20px_var(--accent-glow)] group"
                        >
                            Initialize Sequence
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="/plans"
                            className="w-full sm:w-auto px-8 py-4 bg-[var(--bg-panel)] text-gray-300 border border-[var(--border-subtle)] rounded-xl font-bold uppercase tracking-wider hover:text-white hover:border-white/20 transition flex items-center justify-center gap-2"
                        >
                            <RiShieldCheckFill size={18} />
                            View Access Plans
                        </a>
                    </div>
                </div>
            </section>

            {/* Code Preview */}
            <section className="px-6 pb-32 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-2xl bg-[#0a0a0a] border border-[var(--border-subtle)] overflow-hidden shadow-2xl shadow-blue-900/10 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] via-transparent to-[var(--accent-primary)] opacity-20 blur-lg group-hover:opacity-30 transition duration-500"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0e0e0e]">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-mono ml-3">dev/components/App.jsx</span>
                                </div>
                                <div className="text-xs text-gray-600 font-mono">READ-ONLY</div>
                            </div>
                            <div className="p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                                <div className="text-gray-500 italic">{"// Initialize your first React component"}</div>
                                <div><span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                                <div className="h-4"></div>
                                <div><span className="text-purple-400">export default function</span> <span className="text-yellow-300">FutureReady</span>() {"{"}</div>
                                <div className="pl-6"><span className="text-purple-400">const</span> [status, setStatus] = <span className="text-blue-400">useState</span>(<span className="text-green-400">'Ready'</span>);</div>
                                <div className="pl-6"><span className="text-purple-400">return</span> (</div>
                                <div className="pl-12 text-gray-300">
                                    <span className="text-blue-300">{"<div"}</span> <span className="text-purple-300">className</span>=<span className="text-green-400">"cyber-container"</span><span className="text-blue-300">{">"}</span>
                                </div>
                                <div className="pl-16">
                                    <span className="text-blue-300">{"<h1>"}</span>Hello, World!<span className="text-blue-300">{"</h1>"}</span>
                                </div>
                                <div className="pl-16">
                                    <span className="text-blue-300">{"<p>"}</span>
                                    BUILDING THE FUTURE...
                                    <span className="text-blue-300">{"</p>"}</span>
                                </div>
                                <div className="pl-12 text-blue-300">{"</div>"}</div>
                                <div className="pl-6">);</div>
                                <div>{"}"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 pb-32 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: VscTerminal, title: 'Hands-on Labs', desc: 'Execute code directly in our browser-based IDE. Instant feedback, zero setup required.' },
                            { icon: RiStackFill, title: 'Structured Data', desc: 'Curriculum designed for optimal knowledge retention. From basic syntax to complex architecture.' },
                            { icon: RiCpuLine, title: 'Real Systems', desc: 'Construct portfolio-grade applications that solve real-world problems.' }
                        ].map((f, i) => (
                            <div key={i} className="card-cyber p-8 hover:bg-[var(--bg-panel)] group">
                                <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                    <f.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="px-6 pb-32 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 rounded border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-widest mb-4">Access Levels</div>
                        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-gray-400">One-time payment for lifetime access.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(PRICING).map(([key, plan]) => (
                            <div
                                key={key}
                                className={clsx(
                                    "relative p-8 rounded-2xl border transition-all duration-300 group flex flex-col",
                                    plan.popular
                                        ? "bg-[var(--bg-panel)] border-[var(--accent-primary)] shadow-[0_0_30px_rgba(59,130,246,0.15)] z-10 scale-105"
                                        : "bg-[#0c0c0c] border-[var(--border-subtle)] hover:border-gray-600 opacity-80 hover:opacity-100"
                                )}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent-primary)] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_var(--accent-glow)]">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-sm text-gray-500">{plan.description}</p>
                                </div>

                                <div className="mb-8 p-4 bg-black/30 rounded-xl border border-white/5">
                                    <div className="fles items-baseline">
                                        <span className="text-4xl font-bold font-mono text-white">
                                            {(plan.price / 1000).toFixed(0)}K
                                        </span>
                                        <span className="text-sm text-gray-500 ml-2">IDR</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((f, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                            <div className={clsx(
                                                "mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0",
                                                plan.popular ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10" : "text-gray-600 bg-gray-600/10"
                                            )}>
                                                <FaCheck size={10} />
                                            </div>
                                            <span className={plan.popular ? 'text-gray-300' : ''}>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => user ? handleBuy(key) : navigate('/register')}
                                    className={clsx(
                                        "w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2",
                                        plan.popular
                                            ? "bg-[var(--accent-primary)] text-white hover:bg-blue-600 shadow-[0_0_15px_var(--accent-glow)]"
                                            : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                                    )}
                                >
                                    <RiFlashlightFill size={14} className={plan.popular ? "fill-white" : ""} />
                                    {user ? 'Purchase Access' : 'Start Now'}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Bundle */}
                    <div className="mt-12 p-8 bg-gradient-to-r from-[#0c0c0c] to-[#111] rounded-2xl border border-[var(--border-subtle)] relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-white">Full Stack Bundle</h3>
                                    <span className="px-3 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold uppercase tracking-wider rounded">Save 20%</span>
                                </div>
                                <p className="text-gray-400 font-light">Access all 16 courses available in the curriculum database.</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <p className="text-2xl font-bold font-mono text-white">164K <span className="text-base text-gray-400 font-sans">IDR</span></p>
                                    <p className="text-sm text-gray-600 line-through">205K IDR</p>
                                </div>
                                <button
                                    onClick={() => user ? handleBuy('fullstack') : navigate('/register')}
                                    className="px-8 py-4 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                >
                                    Unlock All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-12 border-t border-white/5 bg-[#050505] relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <VscCode size={16} />
                        <span className="font-mono">ZEROCODE SYSTEM © 2024</span>
                    </div>
                    <div className="flex items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Terms</a>
                        <a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Privacy</a>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-[var(--accent-primary)] transition-colors">Contact Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
