"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, FolderOpen } from "lucide-react";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
    fork: boolean;
}

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.github.com/users/MithunKiet/repos?sort=updated&per_page=12");
                if (response.ok) {
                    const data = await response.json();
                    // Filter out forks and empty descriptions if desired
                    const repos = data.filter((repo: Repository) => !repo.fork).slice(0, 6);
                    setProjects(repos);
                }
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Extract unique languages for filter tabs
    const languages = ["All", ...Array.from(new Set(projects.map(p => p.language).filter(Boolean)))];

    const filteredProjects = projects.filter(project => {
        if (filter === "All") return true;
        return project.language === filter;
    });

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>

                    {/* Filters */}
                    {!loading && projects.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            {languages.map(lang => (
                                <button
                                    key={lang}
                                    onClick={() => setFilter(lang)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === lang
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="glass p-6 rounded-3xl flex flex-col h-full hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <FolderOpen className="text-primary" size={24} />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                        {project.description || "No description provided for this repository."}
                                    </p>

                                    <div className="mt-auto">
                                        {/* Tech Stack Tags from Topics or Language */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.language && (
                                                <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md">
                                                    {project.language}
                                                </span>
                                            )}
                                            {project.topics?.slice(0, 3).map(topic => (
                                                <span key={topic} className="text-xs font-medium px-2 py-1 bg-black/5 dark:bg-white/5 rounded-md">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Star size={14} className="group-hover:text-yellow-500 transition-colors" /> {project.stargazers_count}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <GitFork size={14} /> {project.forks_count}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
