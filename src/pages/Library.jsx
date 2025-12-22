import { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { useProgress } from '../contexts/ProgressProvider';
import { getOverallProgress } from '../data/curriculumStructure';
import {
    BookOpen, ExternalLink, Search, Code, Palette, Terminal,
    Database, FileText, Video, Globe, Github, Zap
} from 'lucide-react';
import clsx from 'clsx';

const CATEGORIES = [
    { id: 'all', label: 'All Resources', icon: <Zap size={16} /> },
    { id: 'docs', label: 'Documentation', icon: <FileText size={16} /> },
    { id: 'tools', label: 'Dev Tools', icon: <Terminal size={16} /> },
    { id: 'tutorials', label: 'Tutorials', icon: <Video size={16} /> },
    { id: 'cheatsheets', label: 'Cheatsheets', icon: <Code size={16} /> },
];

const RESOURCES = [
    // Documentation
    { id: 1, title: 'MDN Web Docs', desc: 'The ultimate web development reference', url: 'https://developer.mozilla.org', category: 'docs', icon: <Globe size={20} className="text-blue-400" /> },
    { id: 2, title: 'React Documentation', desc: 'Official React docs with hooks guide', url: 'https://react.dev', category: 'docs', icon: <Code size={20} className="text-cyan-400" /> },
    { id: 3, title: 'Node.js Docs', desc: 'Official Node.js API documentation', url: 'https://nodejs.org/docs', category: 'docs', icon: <Terminal size={20} className="text-green-400" /> },
    { id: 4, title: 'TypeScript Handbook', desc: 'Learn TypeScript from basics to advanced', url: 'https://www.typescriptlang.org/docs/', category: 'docs', icon: <Code size={20} className="text-blue-500" /> },
    { id: 5, title: 'Tailwind CSS Docs', desc: 'Utility-first CSS framework documentation', url: 'https://tailwindcss.com/docs', category: 'docs', icon: <Palette size={20} className="text-cyan-400" /> },

    // Tools
    { id: 6, title: 'VS Code', desc: 'Best code editor for web development', url: 'https://code.visualstudio.com', category: 'tools', icon: <Code size={20} className="text-blue-400" /> },
    { id: 7, title: 'GitHub', desc: 'Code hosting and version control', url: 'https://github.com', category: 'tools', icon: <Github size={20} className="text-white" /> },
    { id: 8, title: 'Figma', desc: 'Design and prototype tool', url: 'https://figma.com', category: 'tools', icon: <Palette size={20} className="text-purple-400" /> },
    { id: 9, title: 'Postman', desc: 'API testing and development', url: 'https://postman.com', category: 'tools', icon: <Terminal size={20} className="text-orange-400" /> },
    { id: 10, title: 'Vercel', desc: 'Deploy your projects for free', url: 'https://vercel.com', category: 'tools', icon: <Globe size={20} className="text-white" /> },

    // Tutorials
    { id: 11, title: 'freeCodeCamp', desc: 'Free coding bootcamp with certifications', url: 'https://freecodecamp.org', category: 'tutorials', icon: <BookOpen size={20} className="text-green-400" /> },
    { id: 12, title: 'JavaScript.info', desc: 'Modern JavaScript tutorial', url: 'https://javascript.info', category: 'tutorials', icon: <Terminal size={20} className="text-yellow-400" /> },
    { id: 13, title: 'CSS-Tricks', desc: 'Tips, tricks, and techniques on CSS', url: 'https://css-tricks.com', category: 'tutorials', icon: <Palette size={20} className="text-orange-400" /> },
    { id: 14, title: 'The Odin Project', desc: 'Full stack curriculum for free', url: 'https://theodinproject.com', category: 'tutorials', icon: <BookOpen size={20} className="text-yellow-500" /> },

    // Cheatsheets
    { id: 15, title: 'HTML Cheatsheet', desc: 'All HTML tags and attributes', url: 'https://htmlcheatsheet.com', category: 'cheatsheets', icon: <Code size={20} className="text-orange-400" /> },
    { id: 16, title: 'CSS Cheatsheet', desc: 'CSS properties quick reference', url: 'https://cssreference.io', category: 'cheatsheets', icon: <Palette size={20} className="text-blue-400" /> },
    { id: 17, title: 'Git Cheatsheet', desc: 'Common Git commands', url: 'https://education.github.com/git-cheat-sheet-education.pdf', category: 'cheatsheets', icon: <Terminal size={20} className="text-red-400" /> },
    { id: 18, title: 'Flexbox Guide', desc: 'Complete guide to CSS Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', category: 'cheatsheets', icon: <Palette size={20} className="text-purple-400" /> },
    { id: 19, title: 'Grid Guide', desc: 'Complete guide to CSS Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', category: 'cheatsheets', icon: <Palette size={20} className="text-pink-400" /> },
    { id: 20, title: 'React Hooks Cheatsheet', desc: 'All React hooks explained', url: 'https://react.dev/reference/react', category: 'cheatsheets', icon: <Code size={20} className="text-cyan-400" /> },
];

export default function Library() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { completedCourses } = useProgress();
    const progress = getOverallProgress(completedCourses);

    const filteredResources = RESOURCES.filter(resource => {
        const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <AppLayout>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center md:text-left animate-fade-in-up">
                    <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Resource Library</h1>
                    <p className="text-gray-400 text-lg max-w-2xl">Curated tools, documentation, and references to accelerate your development workflow.</p>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col lg:flex-row gap-6 mb-10 items-start lg:items-center">
                    <div className="relative flex-1 w-full group">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[var(--bg-panel)] transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto custom-scrollbar">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={clsx(
                                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                    selectedCategory === cat.id
                                        ? "bg-[var(--accent-primary)] text-white shadow-[0_0_15px_var(--accent-glow)]"
                                        : "bg-[var(--bg-panel)] text-gray-400 hover:bg-[var(--bg-panel)] hover:text-white border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]"
                                )}
                            >
                                {cat.icon}
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredResources.map((resource, index) => (
                        <a
                            key={resource.id}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group card-cyber p-6 flex flex-col h-full animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.05}ms` }}
                        >
                            <div className="flex items-start justify-between mb-5">
                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/10 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    {resource.icon}
                                </div>
                                <ExternalLink size={16} className="text-gray-500 group-hover:text-[var(--accent-primary)] transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{resource.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed flex-1">{resource.desc}</p>
                        </a>
                    ))}
                </div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-20 bg-[var(--bg-panel)] rounded-xl border border-[var(--border-subtle)] border-dashed">
                        <Search size={48} className="text-gray-600 mx-auto mb-4 opacity-50" />
                        <p className="text-gray-400 text-lg font-medium">No resources found</p>
                        <p className="text-gray-600 text-sm mt-1">Try adjusting your search terms or filters</p>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
