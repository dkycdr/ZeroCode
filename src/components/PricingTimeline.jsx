import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { RiVipCrownFill } from 'react-icons/ri';
import clsx from 'clsx';

export default function PricingTimeline({ pricing, onSelectPlan, user }) {
    const [expandedPlan, setExpandedPlan] = useState('developer'); // Default expand popular

    const plans = [
        { key: 'starter', data: pricing.starter, color: 'cyan' },
        { key: 'developer', data: pricing.developer, color: 'purple' },
        { key: 'elite', data: pricing.elite, color: 'amber' }
    ];

    const togglePlan = (key) => {
        setExpandedPlan(expandedPlan === key ? null : key);
    };

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Central Neuron Spine */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
                {/* Animated Signal */}
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-50 blur-sm animate-pulse-slow" />
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-scan" />
            </div>

            <div className="space-y-16">
                {plans.map((plan, planIndex) => {
                    const isExpanded = expandedPlan === plan.key;
                    const isPopular = plan.data.popular;
                    const savePercentage = Math.round((1 - plan.data.price / plan.data.originalPrice) * 100);

                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: planIndex * 0.1 }}
                            key={plan.key}
                            className={clsx(
                                "relative flex flex-col md:flex-row items-center",
                                planIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}
                        >
                            {/* Timeline Node Point */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0a0a0c] z-20 flex items-center justify-center bg-[#0a0a0c]">
                                <div className={clsx(
                                    "w-3 h-3 rounded-full transition-all duration-500",
                                    isExpanded ? "bg-indigo-500 shadow-[0_0_10px_#6366f1]" : "bg-gray-700"
                                )} />
                            </div>

                            {/* Spacer for Desktop Layout */}
                            <div className="hidden md:block w-1/2" />

                            {/* Content Card */}
                            <div className={clsx(
                                "w-full md:w-1/2 pl-12 md:pl-0",
                                planIndex % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                            )}>
                                <div
                                    onClick={() => togglePlan(plan.key)}
                                    className={clsx(
                                        "group relative bg-[#0a0a0c] border rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden",
                                        isExpanded
                                            ? "border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                                            : "border-white/10 hover:border-white/20"
                                    )}
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12" />

                                    {/* Popular Badge */}
                                    {isPopular && (
                                        <div className="absolute -top-3 right-4">
                                            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg shadow-purple-500/40">
                                                <RiVipCrownFill size={12} />
                                                BEST VALUE
                                            </span>
                                        </div>
                                    )}

                                    <div className={clsx("relative z-10 flex flex-col h-full", planIndex % 2 === 0 ? "md:items-end" : "md:items-start")}>
                                        {/* Header */}
                                        <div className="mb-4 w-full">
                                            <h3 className={clsx(
                                                "text-2xl font-bold mb-2 transition-colors",
                                                isExpanded ? "text-indigo-400" : "text-white group-hover:text-indigo-200"
                                            )}>
                                                {plan.data.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">{plan.data.description}</p>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="text-4xl font-bold text-white">
                                                    Rp {(plan.data.price / 1000).toFixed(0)}K
                                                </span>
                                                <span className="text-sm text-gray-500 line-through">
                                                    {(plan.data.originalPrice / 1000).toFixed(0)}K
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs">
                                                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded font-semibold">
                                                    SAVE {savePercentage}%
                                                </span>
                                                <span className="text-gray-500">{plan.data.courses} courses • Lifetime</span>
                                            </div>
                                        </div>

                                        {/* Expand Indicator */}
                                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                                            <span className={clsx("transition-transform duration-300", isExpanded && "rotate-180")}>
                                                {isExpanded ? "Hide Details" : "View Details"}
                                            </span>
                                            <ChevronRight size={14} className={clsx("transition-transform duration-300", isExpanded && "rotate-90")} />
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Benefits */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className={clsx(
                                                "mt-4 space-y-2 relative",
                                                planIndex % 2 === 0 ? "md:mr-2" : "md:ml-2"
                                            )}>
                                                {/* Feature List with Scroll Animation */}
                                                {plan.data.features.map((feature, idx) => (
                                                    <motion.div
                                                        initial={{ x: planIndex % 2 === 0 ? 20 : -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        key={idx}
                                                        className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0a0c] border border-white/5 hover:border-indigo-500/30 hover:bg-white/5 transition-all group/item"
                                                    >
                                                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center transition-colors group-hover/item:bg-green-500/20">
                                                            <FaCheck size={12} className="text-green-400" />
                                                        </div>
                                                        <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors flex-1 text-left">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}

                                                {/* CTA Button */}
                                                <motion.button
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: plan.data.features.length * 0.05 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSelectPlan(plan.key);
                                                    }}
                                                    className={clsx(
                                                        "w-full mt-4 py-3 rounded-lg font-semibold text-sm transition-all",
                                                        isPopular
                                                            ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                                                            : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
                                                    )}
                                                >
                                                    {user ? 'Get This Plan' : 'Start Free Trial'}
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* End Node */}
            <div className="flex justify-center mt-12 relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#0a0a0c] border-2 border-dashed border-white/20 flex items-center justify-center text-gray-600">
                    <RiVipCrownFill size={24} />
                </div>
            </div>
        </div>
    );
}
