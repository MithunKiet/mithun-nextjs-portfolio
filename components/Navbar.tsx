"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) {
        return (
            <nav className="fixed top-0 w-full z-50 bg-transparent py-6">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
                        <Code2 className="text-primary" />
                        <span>Mithun<span className="text-primary">.dev</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <div className="w-64 h-5" />
                        <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer flex items-center gap-2 text-2xl font-bold tracking-tighter"
                >
                    <Code2 className="text-primary" />
                    <span>
                        Mithun<span className="text-primary">.dev</span>
                    </span>
                </ScrollLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="cursor-pointer hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full glass hover:bg-white/20 dark:hover:bg-black/20 transition-all"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full glass"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10"
                    >
                        <ul className="flex flex-col items-center py-6 gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <ScrollLink
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="cursor-pointer text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
