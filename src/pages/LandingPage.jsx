import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { Code, ArrowRight, Check, MessageCircle, Play, Terminal, Layers, Cpu } from 'lucide-react';

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
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold">
                        <Code size={20} />
                        <span>ZeroCode</span>
                    </div>
                    <div className="flex items-center gap-3">
                        {user ? (
                            <button onClick={() => navigate('/dashboard')} className="text-sm px-4 py-1.5 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
                                Dashboard
                            </button>
                        ) : (
                            <>
                                <button onClick={() => navigate('/login')} className="text-sm text-gray-400 hover:text-white transition">
                                    Login
                                </button>
                                <button onClick={() => navigate('/register')} className="text-sm px-4 py-1.5 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
                                    Get Started
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 mb-6 border border-white/10">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        16 courses available
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                        Learn to code<br />
                        <span className="text-gray-500">from scratch</span>
                    </h1>
                    
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                        Interactive courses that take you from zero to building full-stack web applications. No prior experience needed.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            onClick={() => navigate('/register')}
                            className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
                        >
                            Start Free Trial
                            <ArrowRight size={16} />
                        </button>
                        <a
                            href="#pricing"
                            className="w-full sm:w-auto px-6 py-3 text-gray-400 hover:text-white transition flex items-center justify-center gap-2"
                        >
                            <Play size={16} />
                            View Pricing
                        </a>
                    </div>
                </div>
            </section>

            {/* Code Preview */}
            <section className="px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                            </div>
                            <span className="text-xs text-gray-500 ml-2">app.jsx</span>
                        </div>
                        <div className="p-6 font-mono text-sm">
                            <div className="text-gray-500">{"// Your first React component"}</div>
                            <div><span className="text-purple-400">function</span> <span className="text-yellow-300">Welcome</span>() {"{"}</div>
                            <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                            <div className="pl-8 text-green-400">{"<h1>Hello, World!</h1>"}</div>
                            <div className="pl-4">);</div>
                            <div>{"}"}</div>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="text-gray-500">→</span>
                                <span className="text-gray-400">Output:</span>
                                <span className="text-white font-sans">Hello, World!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 pb-24">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { icon: Terminal, title: 'Learn by doing', desc: 'Write real code in our browser-based editor with instant feedback' },
                            { icon: Layers, title: 'Structured path', desc: 'From HTML basics to full-stack apps, follow a clear learning path' },
                            { icon: Cpu, title: 'Real projects', desc: 'Build portfolio-worthy projects as you learn each technology' }
                        ].map((f, i) => (
                            <div key={i} className="p-6 bg-[#111] rounded-xl border border-white/5 hover:border-white/10 transition">
                                <f.icon size={20} className="text-gray-400 mb-4" />
                                <h3 className="font-medium mb-2">{f.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="px-6 pb-24">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-3">Complete curriculum</h2>
                        <p className="text-gray-500">Everything you need to become a web developer</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { level: 'Foundation', courses: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Tailwind'] },
                            { level: 'Frontend', courses: ['DOM', 'ES6+', 'React', 'TypeScript'] },
                            { level: 'Backend', courses: ['Node.js', 'PHP', 'MySQL', 'MongoDB', 'Next.js', 'CI/CD'] }
                        ].map((section, i) => (
                            <div key={i}>
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">{section.level}</div>
                                <div className="space-y-2">
                                    {section.courses.map((c, j) => (
                                        <div key={j} className="flex items-center gap-2 text-sm text-gray-400">
                                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                            {c}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="px-6 pb-24">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-3">Simple pricing</h2>
                        <p className="text-gray-500">One-time payment, lifetime access</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(PRICING).map(([key, plan]) => (
                            <div 
                                key={key}
                                className={`relative p-6 rounded-2xl border transition ${
                                    plan.popular 
                                        ? 'bg-white text-black border-white' 
                                        : 'bg-[#111] border-white/10 hover:border-white/20'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-4 px-2 py-0.5 bg-black text-white text-xs rounded-full">
                                        Popular
                                    </div>
                                )}
                                
                                <div className="mb-4">
                                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                                    <p className={`text-sm ${plan.popular ? 'text-gray-600' : 'text-gray-500'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <span className="text-3xl font-bold">
                                        {(plan.price / 1000).toFixed(0)}K
                                    </span>
                                    <span className={`text-sm ml-1 ${plan.popular ? 'text-gray-600' : 'text-gray-500'}`}>
                                        IDR
                                    </span>
                                </div>

                                <div className="space-y-2 mb-6">
                                    {plan.features.map((f, i) => (
                                        <div key={i} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-gray-700' : 'text-gray-400'}`}>
                                            <Check size={14} className={plan.popular ? 'text-black' : 'text-gray-500'} />
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => user ? handleBuy(key) : navigate('/register')}
                                    className={`w-full py-2.5 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 ${
                                        plan.popular
                                            ? 'bg-black text-white hover:bg-gray-800'
                                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                    }`}
                                >
                                    <MessageCircle size={14} />
                                    {user ? 'Buy via WhatsApp' : 'Get Started'}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Bundle */}
                    <div className="mt-6 p-6 bg-[#111] rounded-2xl border border-white/10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold">Full Bundle</h3>
                                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">Save 20%</span>
                                </div>
                                <p className="text-sm text-gray-500">All 16 courses • Lifetime access • Best value</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <span className="text-2xl font-bold">164K</span>
                                    <span className="text-sm text-gray-500 ml-1 line-through">205K</span>
                                </div>
                                <button
                                    onClick={() => user ? handleBuy('fullstack') : navigate('/register')}
                                    className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition flex items-center gap-2"
                                >
                                    <MessageCircle size={14} />
                                    Get Bundle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-3">Ready to start?</h2>
                    <p className="text-gray-500 mb-8">Create a free account and try 3 courses before you buy.</p>
                    <button
                        onClick={() => navigate('/register')}
                        className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition inline-flex items-center gap-2"
                    >
                        Create Free Account
                        <ArrowRight size={16} />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-8 border-t border-white/5">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Code size={16} />
                        <span>ZeroCode © 2025</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#pricing" className="hover:text-white transition">Pricing</a>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
