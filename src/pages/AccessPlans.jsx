import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import {
    RiCheckLine, RiCloseLine, RiFlashlightFill, RiShieldCheckFill,
    RiCodeBoxLine, RiDatabase2Line, RiGlobalLine, RiTerminalBoxLine,
    RiServerLine, RiLayoutMasonryLine, RiCpuLine, RiAwardFill,
    RiRocket2Fill, RiArrowLeftLine
} from 'react-icons/ri';
import { VscCode, VscTerminal, VscServer } from 'react-icons/vsc';
import clsx from 'clsx';

const PLANS = [
    {
        id: 'starter',
        name: 'Starter',
        price: 50000,
        description: 'Perfect for beginners starting their coding journey.',
        color: 'text-blue-400',
        borderColor: 'border-blue-400',
        bgGradient: 'from-blue-500/10 to-transparent',
        icon: VscTerminal,
        features: [
            'HTML5 & CSS3 Mastery',
            'JavaScript Fundamentals',
            'Git Version Control',
            'Tailwind CSS Styling',
            '5 Essential Courses',
            'Community Forum Access'
        ],
        missing: [
            'React.js ecosystem',
            'Backend Development',
            'Database Management',
            'Deployment Pipelines',
            'Priority Support'
        ]
    },
    {
        id: 'developer',
        name: 'Developer',
        price: 75000,
        description: 'For those ready to build dynamic web applications.',
        popular: true,
        color: 'text-yellow-400',
        borderColor: 'border-yellow-400',
        bgGradient: 'from-yellow-500/10 to-transparent',
        icon: RiLayoutMasonryLine,
        features: [
            'Everything in Starter',
            'Modern DOM Manipulation',
            'React.js & Hooks',
            'PHP & SQL Basics',
            'Python for Beginners',
            '11 Total Courses',
            'Project Portfolios'
        ],
        missing: [
            'Advanced Backend (Node)',
            'NoSQL Databases',
            'TypeScript Integration',
            'CI/CD Workflows'
        ]
    },
    {
        id: 'professional',
        name: 'Professional',
        price: 80000,
        description: 'Complete full-stack mastery for serious engineers.',
        color: 'text-green-400',
        borderColor: 'border-green-400',
        bgGradient: 'from-green-500/10 to-transparent',
        icon: VscServer,
        features: [
            'Everything in Developer',
            'TypeScript Proficiency',
            'Node.js & Express APIs',
            'MongoDB & Mongoose',
            'Next.js Full Stack',
            'CI/CD & DevOps Basics',
            '16 Total Courses',
            'Certificate of Completion'
        ],
        missing: []
    }
];

const COMPARISON_FEATURES = [
    { name: 'Browser-based IDE', starter: true, dev: true, pro: true },
    { name: 'Community Access', starter: true, dev: true, pro: true },
    { name: 'Frontend Frameworks', starter: false, dev: true, pro: true },
    { name: 'Backend Development', starter: false, dev: true, pro: true },
    { name: 'Database Management', starter: false, dev: true, pro: true },
    { name: 'Full Stack Architecture', starter: false, dev: false, pro: true },
    { name: 'DevOps & Deployment', starter: false, dev: false, pro: true },
    { name: 'Official Certification', starter: false, dev: false, pro: true },
];

export default function AccessPlans() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleBuy = (plan) => {
        const message = encodeURIComponent(
            `Hi! I'm interested in the ${plan.name} Access Plan (Rp ${plan.price.toLocaleString('id-ID')}).\n\nI'd like to unlock the full potential of my account.`
        );
        window.open(`https://wa.me/6283875727384?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
            <main className="pt-12 pb-32">
                {/* Back Button */}
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider"
                    >
                        <RiArrowLeftLine size={16} />
                        Return to Base
                    </button>
                </div>

                {/* Hero */}
                <div className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-xs font-mono text-[var(--accent-primary)] mb-8 border border-[var(--accent-primary)]/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <RiRocket2Fill size={14} />
                        <span className="tracking-wider uppercase">Upgrade Your Arsenal</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Choose Your <span className="text-[var(--accent-primary)]">Access Level</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Invest in your future with our structured learning paths. One-time payment, lifetime access, zero hidden fees.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="max-w-7xl mx-auto px-6 mb-32">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {PLANS.map((plan, index) => (
                            <div
                                key={plan.id}
                                className={clsx(
                                    "relative p-8 rounded-2xl border transition-all duration-300 group overflow-hidden bg-[var(--bg-panel)]",
                                    plan.popular
                                        ? "border-[var(--accent-primary)] shadow-[0_0_40px_rgba(59,130,246,0.1)] -translate-y-4"
                                        : "border-[var(--border-subtle)] hover:border-gray-600"
                                )}
                                style={{ animationDelay: `${index * 0.1}ms` }}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${plan.bgGradient} opacity-20 pointer-events-none`} />

                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-[var(--accent-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest shadow-[0_0_10px_var(--accent-glow)]">
                                        Recommended
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${plan.color} border border-white/10`}>
                                        <plan.icon size={24} />
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                                    <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>

                                    <div className="mb-8 flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-white font-mono">
                                            {(plan.price / 1000).toFixed(0)}K
                                        </span>
                                        <span className="text-gray-500 text-sm">IDR / Lifetime</span>
                                    </div>

                                    <button
                                        onClick={() => handleBuy(plan)}
                                        className={clsx(
                                            "w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider mb-8 transition-all flex items-center justify-center gap-2",
                                            plan.popular
                                                ? "bg-[var(--accent-primary)] text-white hover:bg-blue-600 shadow-[0_0_15px_var(--accent-glow)] group-hover:shadow-[0_0_25px_var(--accent-glow)]"
                                                : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                        )}
                                    >
                                        <RiFlashlightFill size={14} className={plan.popular ? "fill-white" : ""} />
                                        Initialize {plan.name}
                                    </button>

                                    <div className="space-y-4">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Included Modules</p>
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                <div className={`mt-0.5 w-4 h-4 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0`}>
                                                    <RiCheckLine size={14} />
                                                </div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                        {plan.missing.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-gray-600 opacity-60">
                                                <div className="mt-0.5 w-4 h-4 rounded-full bg-gray-700/50 text-gray-500 flex items-center justify-center shrink-0">
                                                    <RiCloseLine size={14} />
                                                </div>
                                                <span className="line-through">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto px-6 mb-32">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">System Comparison Matrix</h2>
                    <div className="bg-[#0a0a0a] border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-white/5 border-b border-[var(--border-subtle)]">
                                        <th className="px-6 py-6 text-left font-bold text-gray-400 uppercase tracking-wider w-1/3">Feature Capability</th>
                                        <th className="px-6 py-6 text-center font-bold text-blue-400 uppercase tracking-wider w-1/5">Starter</th>
                                        <th className="px-6 py-6 text-center font-bold text-yellow-400 uppercase tracking-wider w-1/5">Developer</th>
                                        <th className="px-6 py-6 text-center font-bold text-green-400 uppercase tracking-wider w-1/5">Professional</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--border-subtle)]">
                                    {COMPARISON_FEATURES.map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-300">{row.name}</td>
                                            <td className="px-6 py-4 text-center">
                                                {row.starter
                                                    ? <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500"><RiCheckLine size={14} /></div>
                                                    : <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 text-gray-600"><RiCloseLine size={14} /></div>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {row.dev
                                                    ? <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500"><RiCheckLine size={14} /></div>
                                                    : <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 text-gray-600"><RiCloseLine size={14} /></div>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {row.pro
                                                    ? <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500"><RiCheckLine size={14} /></div>
                                                    : <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 text-gray-600"><RiCloseLine size={14} /></div>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* FAQ / Guarantee */}
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="bg-[var(--bg-panel)] rounded-2xl p-8 border border-[var(--border-subtle)] animate-fade-in-up">
                        <RiShieldCheckFill className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-white mb-4">Lifetime Access Guarantee</h2>
                        <p className="text-gray-400 leading-relaxed mb-0">
                            When you join ZeroCode, you get unlimited access to your purchased courses forever.
                            This includes all future updates, new challenges, and platform improvements.
                            No monthly subscriptions. No recurring fees. Just pure knowledge.
                        </p>
                    </div>
                    <p className="text-gray-500 text-xs mt-8">
                        Questions? Contact our support team via WhatsApp for immediate assistance.
                    </p>
                </div>
            </main>
        </div>
    );
}
