import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { RiVipCrownFill } from 'react-icons/ri';
import * as THREE from 'three';
import clsx from 'clsx';

// 3D Card Component
function Card3DMesh({ color, scale, isHovered, isExpanded }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

            // Scale animation
            const targetScale = isHovered ? scale * 1.05 : isExpanded ? scale * 0.95 : scale;
            meshRef.current.scale.lerp(
                new THREE.Vector3(targetScale, targetScale, targetScale),
                0.1
            );
        }
    });

    return (
        <group>
            {/* Main card */}
            <mesh ref={meshRef} castShadow>
                <boxGeometry args={[1.8, 2.5, 0.15]} />
                <meshStandardMaterial
                    color={color}
                    metalness={0.7}
                    roughness={0.3}
                    emissive={color}
                    emissiveIntensity={isHovered ? 0.4 : 0.2}
                />
            </mesh>

            {/* Glow layer */}
            <mesh position={[0, 0, -0.1]}>
                <boxGeometry args={[2, 2.7, 0.1]} />
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.3}
                    emissive={color}
                    emissiveIntensity={0.5}
                />
            </mesh>
        </group>
    );
}

// Single Pricing Item
function PricingItem({ plan, planKey, index, onSelect, user }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const colors = {
        starter: '#1e40af',
        developer: '#7c3aed',
        elite: '#0891b2'
    };

    const savePercentage = Math.round((1 - plan.price / plan.originalPrice) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
        >
            <div className={clsx(
                "flex items-center gap-8",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}>
                {/* 3D Card Visual */}
                <div
                    className="w-64 h-80 relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.4} />
                        <directionalLight position={[3, 3, 3]} intensity={1} color="#6366f1" />
                        <pointLight position={[-3, 2, 2]} intensity={0.8} color="#8b5cf6" />

                        <Card3DMesh
                            color={colors[planKey]}
                            scale={1}
                            isHovered={isHovered}
                            isExpanded={isExpanded}
                        />
                    </Canvas>

                    {/* Overlay Info */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-black text-white mb-1">
                                {(plan.price / 1000).toFixed(0)}K
                            </div>
                            <div className="text-xs text-gray-400 line-through">
                                {(plan.originalPrice / 1000).toFixed(0)}K
                            </div>
                        </div>
                    </div>

                    {/* Popular Badge */}
                    {plan.popular && (
                        <div className="absolute -top-2 -right-2 px-3 py-1 bg-purple-600 rounded-full text-white text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
                            <RiVipCrownFill size={12} />
                            BEST
                        </div>
                    )}
                </div>

                {/* Info Panel */}
                <div className="flex-1">
                    <div
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={clsx(
                            "p-6 rounded-xl border transition-all cursor-pointer",
                            isExpanded
                                ? "bg-indigo-950/30 border-indigo-500/50 shadow-lg shadow-indigo-500/10"
                                : "bg-[#0a0a0c] border-white/10 hover:border-indigo-500/30"
                        )}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">{plan.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">
                                        -{savePercentage}%
                                    </span>
                                    <span className="text-xs text-gray-500">{plan.courses} courses</span>
                                </div>
                            </div>
                            <ChevronDown
                                className={clsx(
                                    "transition-transform text-indigo-400",
                                    isExpanded && "rotate-180"
                                )}
                                size={20}
                            />
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
                                    <div className="pt-4 border-t border-white/10 space-y-2">
                                        {plan.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-center gap-3 text-sm text-gray-300"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                    <FaCheck size={10} className="text-green-400" />
                                                </div>
                                                <span>{feature}</span>
                                            </motion.div>
                                        ))}

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSelect(planKey);
                                            }}
                                            className={clsx(
                                                "w-full mt-4 py-3 rounded-lg font-semibold transition-all",
                                                plan.popular
                                                    ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30"
                                                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                                            )}
                                        >
                                            {user ? 'Get Started' : 'Start Free'}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Hybrid3DPricing({ pricing, onSelectPlan, user }) {
    const plans = [
        { key: 'starter', data: pricing.starter },
        { key: 'developer', data: pricing.developer },
        { key: 'elite', data: pricing.elite }
    ];

    return (
        <div className="relative max-w-6xl mx-auto">
            {/* Neural Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent -translate-x-1/2 hidden lg:block">
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-50 blur-sm animate-pulse-slow" />
            </div>

            <div className="space-y-20 py-8">
                {plans.map((plan, index) => (
                    <PricingItem
                        key={plan.key}
                        plan={plan.data}
                        planKey={plan.key}
                        index={index}
                        onSelect={onSelectPlan}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
}
