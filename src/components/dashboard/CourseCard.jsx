import { RiCheckboxCircleFill, RiTimeLine, RiArrowRightLine, RiCodeBoxLine, RiLock2Line } from 'react-icons/ri';
import {
    FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaPython
} from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiPhp
} from 'react-icons/si';
import { VscGlobe, VscCircuitBoard } from 'react-icons/vsc';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const COURSE_ICONS = {
    html5: <FaHtml5 />,
    css3: <FaCss3Alt />,
    git: <FaGitAlt />,
    tailwind: <SiTailwindcss />,
    'js-basics': <SiJavascript />,
    dom: <VscGlobe />,
    'js-es6': <SiJavascript />,
    php: <SiPhp />,
    mysql: <SiMysql />,
    python: <FaPython />,
    react: <FaReact />,
    typescript: <SiTypescript />,
    node: <FaNodeJs />,
    mongodb: <SiMongodb />,
    nextjs: <SiNextdotjs />,
    cicd: <VscCircuitBoard />
};

const COURSE_COLORS = {
    html5: 'text-orange-500',
    css3: 'text-blue-500',
    git: 'text-orange-600',
    tailwind: 'text-cyan-400',
    'js-basics': 'text-yellow-400',
    dom: 'text-purple-400',
    'js-es6': 'text-yellow-500',
    php: 'text-indigo-400',
    mysql: 'text-blue-400',
    python: 'text-blue-500',
    react: 'text-cyan-400',
    typescript: 'text-blue-600',
    node: 'text-green-500',
    mongodb: 'text-green-500',
    nextjs: 'text-white',
    cicd: 'text-gray-400'
};

export default function CourseCard({ course, isCompleted, isLocked, hasAccess }) {
    const navigate = useNavigate();
    const Icon = COURSE_ICONS[course.id] || <RiCodeBoxLine />;
    const colorClass = COURSE_COLORS[course.id] || 'text-zinc-500';

    const getIconColor = (id) => COURSE_COLORS[id] || 'text-zinc-500';

    return (
        <div
            onClick={() => !isLocked && navigate(`/course/${course.id}`)}
            className={clsx(
                "group relative p-6 rounded-3xl border transition-all duration-500 flex flex-col h-full bg-zinc-900/50 hover:bg-zinc-900 overflow-hidden isolate",
                isLocked
                    ? "border-white/5 opacity-60 cursor-not-allowed"
                    : "border-white/10 hover:border-indigo-500/20 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/10"
            )}
        >
            {/* Artistic Background Icon (Clipped) */}
            <div className={clsx(
                "absolute -bottom-8 -right-8 text-[10rem] opacity-[0.05] transform rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-[0.15] pointer-events-none z-0",
                colorClass
            )}>
                {Icon}
            </div>

            {/* Content Container (z-10 to stay above background) */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className={clsx(
                        "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 shadow-lg",
                        isLocked
                            ? "bg-zinc-900 border border-white/5 text-zinc-600"
                            : `bg-zinc-900 border border-white/10 group-hover:border-white/20 ${colorClass}`
                    )}>
                        {Icon}
                    </div>

                    {isCompleted ? (
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                            <RiCheckboxCircleFill size={12} />
                            <span>MASTERY</span>
                        </div>
                    ) : isLocked ? (
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
                            <RiLock2Line size={12} />
                            <span>LOCKED</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                            <span>START</span>
                            <RiArrowRightLine />
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="mb-auto">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors leading-tight">
                        {course.title}
                    </h3>
                    <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed font-medium">
                        {course.shortDesc}
                    </p>
                </div>

                {/* Dynamic Footer Line */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    <div className="flex items-center gap-2">
                        <RiTimeLine className="text-zinc-600" />
                        <span>{course.duration}</span>
                    </div>
                    {hasAccess && !isCompleted && (
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400 font-bold">
                            RESUME &gt;
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
