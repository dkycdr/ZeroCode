import { useState } from 'react';
import UnitAchievementCard from '../components/dashboard/UnitAchievementCard';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const MOCK_COURSES = [
    { id: 'python', title: 'Neural Network Fundamentals', color: '#3776AB' },
    { id: 'css3', title: 'Advanced Grid Systems', color: '#1572B6' },
    { id: 'html5', title: 'Semantic Structure Mastery', color: '#E44D26' },
    { id: 'js-basics', title: 'JavaScript Core Logic', color: '#F7DF1E' },
    { id: 'react', title: 'Component Architecture', color: '#61DAFB' },
    { id: 'node', title: 'Server-Side Runtime', color: '#339933' },
    { id: 'postgresql', title: 'Relational Data Design', color: '#336791' },
    { id: 'mongodb', title: 'NoSQL Document Store', color: '#47A248' },
    { id: 'typescript', title: 'Type Safety Systems', color: '#3178C6' },
    { id: 'git', title: 'Version Control Ops', color: '#F05032' },
    { id: 'tailwind', title: 'Utility-First Design', color: '#06B6D4' },
    { id: 'nextjs', title: 'Server Components', color: '#000000' },
    { id: 'vue', title: 'Reactive Ecosystem', color: '#4FC08D' },
    { id: 'php', title: 'Backend Legacy Systems', color: '#777BB4' },
    { id: 'express', title: 'Middleware Architecture', color: '#FDE047' },
    { id: 'cicd', title: 'DevOps Pipelines', color: '#71717A' },
];

export default function AchievementShowcase() {
    const [activeUnit, setActiveUnit] = useState(null);

    return (
        <div className="min-h-screen bg-black text-white p-10 font-mono">
            <header className="mb-12 border-b border-white/10 pb-8">
                <h1 className="text-4xl font-black tracking-tighter mb-2 flex items-center gap-4">
                    <FaCode className="text-emerald-500" />
                    DESIGN SYSTEM VERIFICATION
                </h1>
                <p className="text-zinc-500 max-w-2xl">
                    Unit Achievement Card Layout Test Suite. Click any module to verify icon scaling, color inheritance, and layout stability across different course types.
                </p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {MOCK_COURSES.map((course) => (
                    <button
                        key={course.id}
                        onClick={() => setActiveUnit({
                            unitTitle: course.title,
                            courseId: course.id,
                            courseTitle: course.id.toUpperCase().replace('-', ' '),
                            userName: 'ADMIN STRATEGIST'
                        })}
                        className="group relative h-32 bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/[0.05] transition-all rounded-xl p-6 flex flex-col items-start justify-between text-left overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: course.color }} />
                        </div>

                        <span className="text-xs font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors uppercase tracking-widest">
                            ID: {course.id}
                        </span>

                        <span className="text-sm font-bold text-zinc-300 group-hover:text-white max-w-[90%]">
                            {course.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Render the Card when active */}
            <UnitAchievementCard
                unitData={activeUnit}
                onClose={() => setActiveUnit(null)}
            />
        </div>
    );
}
