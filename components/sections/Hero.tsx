"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [text, setText] = useState("");
    const fullText = "Full Stack Developer | ASP.NET Core | Angular | SQL";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center pt-20">
            {/* Animated blob shapes to accentuate glassmorphism background */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 125, delay: 0.2 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-sm font-semibold tracking-wide"
                    >
                        👋 Welcome to my portfolio
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Hi, I'm <span className="gradient-text">Mithun Kumar</span>
                    </h1>

                    <div className="h-8 md:h-12 mb-6">
                        <h2 className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
                            {text}<span className="animate-pulse">|</span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Building scalable enterprise applications and solving real-world business problems through robust software architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                        >
                            View My Work
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </ScrollLink>

                        <a
                            href="https://www.linkedin.com/in/mithunkiet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 dark:hover:bg-black/20 transition-all"
                        >
                            <Linkedin size={20} className="text-[#0A66C2] dark:text-white" />
                            Connect with me
                        </a>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center justify-center gap-6 mt-16"
                    >
                        <a href="https://github.com/MithunKiet" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:-translate-y-1 transition-transform">
                            <Github size={24} />
                        </a>
                        <a href="mailto:mithunkiet@gmail.com" className="p-3 glass rounded-full hover:-translate-y-1 transition-transform">
                            <Mail size={24} />
                        </a>
                        <a href="/resume.pdf" target="_blank" className="p-3 glass rounded-full hover:-translate-y-1 transition-transform" title="Download Resume">
                            <Download size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
