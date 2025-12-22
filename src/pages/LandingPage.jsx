import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import {
    Code, ArrowRight, Check, MessageCircle, Play,
    Terminal, Layers, Cpu, Zap, ChevronRight, Globe, Shield
} from 'lucide-react';
import { VscCode, VscTerminal, VscRocket } from 'react-icons/vsc';
import { RiFlashlightFill, RiStackFill, RiCpuLine, RiShieldCheckFill, RiWhatsappLine, RiVipCrownFill, RiGlobalLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

const PRICING = {
    beginner: {
        name: 'Starter',
        price: 50000,
        description: 'Perfect for beginners starting their journey',
        courses: 5,
        theme: 'cyan',
        gradient: 'from-cyan-500/10 to-transparent',
        border: 'group-hover:border-cyan-500/50',
        text: 'text-cyan-400',
        glow: 'shadow-[0_0_30px_rgba(34,211,238,0.1)]',
        features: [
            'HTML5 & CSS3 Mastery',
            'JavaScript Fundamentals',
            'Git Version Control',
            'Tailwind CSS Styling',
            'Lifetime Course Access',
            'Community Forum Access',
            'Certificate of Completion'
        ]
    },
    intermediate: {
        name: 'Developer',
        price: 75000,
        description: 'Build dynamic, real-world applications',
        courses: 11,
        popular: true,
        theme: 'purple',
        gradient: 'from-purple-500/10 to-transparent',
        border: 'border-purple-500/50',
        text: 'text-purple-400',
        glow: 'shadow-[0_0_40px_rgba(168,85,247,0.15)]',
        features: [
            'Everything in Starter',
            'Modern DOM Manipulation',
            'React.js & Hooks Deep Dive',
            'PHP & SQL Database Basics',
            'Python for Automation',
            'Build 10+ Real Projects',
            'Portfolio-Ready Assets'
        ]
    },
    advanced: {
        name: 'Professional',
        price: 80000,
        description: 'Full-stack mastery for serious engineers',
        courses: 16,
        theme: 'amber',
        gradient: 'from-amber-500/10 to-transparent',
        border: 'group-hover:border-amber-500/50',
        text: 'text-amber-400',
        glow: 'shadow-[0_0_30px_rgba(251,191,36,0.1)]',
        features: [
            'Everything in Developer',
            'TypeScript Architecture',
            'Node.js & Express Backyard',
            'MongoDB & Mongoose',
            'Next.js Full Stack App',
            'CI/CD & DevOps Pipelines',
            'System Design Architecture',
            'Priority Support Channel'
        ]
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
                            href="#pricing"
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
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-xs font-mono text-[var(--accent-primary)] mb-8 border border-[var(--accent-primary)]/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                            <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>
                            <span className="tracking-wider uppercase">Secure Your Access</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-cyan-400">Clearance Level</span></h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                            One-time investment. Lifetime access. Zero recurring fees.
                            Initialize your training protocol today.
                        </p>
                    </div>

                    {/* Elite Bundle (Master Key) */}
                    <div className="mb-24 relative group">
                        {/* Animated Holographic Border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-3xl opacity-50 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                        <div className="relative p-8 md:p-12 bg-[#080808] rounded-3xl border border-white/10 overflow-hidden">
                            {/* Background Effects */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                                        <RiVipCrownFill size={14} />
                                        <span>Ultimate Access</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                        Master Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Bundle</span>
                                    </h3>
                                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-light">
                                        Unlock the entire Zerocode ecosystem. Get instant access to all 16 existing courses plus future content updates.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
                                        {['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'SQL', 'Git'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-gray-400 uppercase hover:bg-white/10 transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-gray-400 uppercase">+8 More</span>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-6 p-8 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm min-w-[300px]">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-3 mb-2">
                                            <span className="text-lg text-gray-500 line-through decoration-red-500/50 decoration-2">205K</span>
                                            <span className="px-3 py-1 bg-green-500 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] animate-pulse">
                                                Save 20%
                                            </span>
                                        </div>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-6xl font-bold text-white tracking-tight">164K</span>
                                            <span className="text-gray-400 font-bold">IDR</span>
                                        </div>
                                        <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">One-Time Payment</div>
                                    </div>

                                    <button
                                        onClick={() => user ? handleBuy('fullstack') : navigate('/register')}
                                        className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase tracking-wider hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group/btn"
                                    >
                                        <RiGlobalLine size={20} />
                                        <span>Unlock Everything</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-start relative">
                        {/* Background Splashes */}
                        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none"></div>
                        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none"></div>

                        {Object.entries(PRICING).map(([key, plan]) => (
                            <div
                                key={key}
                                className={clsx(
                                    "relative p-8 rounded-3xl border transition-all duration-500 group overflow-hidden flex flex-col",
                                    plan.popular
                                        ? `bg-[#0c0c0c]/80 backdrop-blur-xl ${plan.border} ${plan.glow} scale-105 z-10`
                                        : `bg-[#0a0a0a]/50 backdrop-blur-md border-white/5 ${plan.border} hover:-translate-y-2 hover:bg-[#0c0c0c]`
                                )}
                            >
                                {/* Gradient Bg */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {plan.popular && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-gradient-to-bl from-purple-600 to-purple-800 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-lg">
                                            Best Value
                                        </div>
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <h3 className={`text-2xl font-bold mb-2 ${plan.text}`}>{plan.name}</h3>
                                        <p className="text-sm text-gray-500 font-light">{plan.description}</p>
                                    </div>

                                    <div className="mb-8 p-6 bg-black/40 rounded-2xl border border-white/5 backdrop-blur-sm">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold font-mono text-white">
                                                {(plan.price / 1000).toFixed(0)}K
                                            </span>
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">IDR / Life</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-10 flex-1">
                                        {plan.features.map((f, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm group/item">
                                                <div className={clsx(
                                                    "mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                                    plan.popular
                                                        ? "bg-purple-500/20 text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white"
                                                        : `bg-white/5 text-gray-500 group-hover/item:bg-${plan.theme}-500 group-hover/item:text-white`
                                                )}>
                                                    <FaCheck size={9} />
                                                </div>
                                                <span className={plan.popular ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300 transition-colors'}>
                                                    {f}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => user ? handleBuy(key) : navigate('/register')}
                                        className={clsx(
                                            "w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden relative",
                                            plan.popular
                                                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
                                                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
                                        )}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {user ? 'Initialize Upgrade' : 'Start Sequence'}
                                            <RiFlashlightFill size={14} className={plan.popular ? "animate-pulse" : ""} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
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
