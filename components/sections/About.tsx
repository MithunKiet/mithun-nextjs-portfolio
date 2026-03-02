"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Server, Code } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>

                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Terminal className="text-primary" /> Enterprise Software Developer
                        </h3>

                        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed relative z-10">
                            <p>
                                I am a passionate Full Stack Software Developer with extensive experience in architecting and developing enterprise-grade applications.
                            </p>
                            <p>
                                My expertise lies in building robust backends with <strong className="text-foreground">ASP.NET Core</strong> and <strong className="text-foreground">C#</strong>, seamlessly integrated with dynamic, responsive frontends using <strong className="text-foreground">Angular</strong>.
                            </p>
                            <p>
                                I excel at designing scalable <strong className="text-foreground">SQL Server</strong> databases and RESTful APIs that power complex business processes. I am dedicated to delivering clean, maintainable code through rigorous debugging and code reviews.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: <Server size={32} />, title: "Backend Architecture", desc: "ASP.NET Core & C#", delay: 0.3 },
                            { icon: <Code size={32} />, title: "Frontend Engineering", desc: "Angular & Typescript", delay: 0.4 },
                            { icon: <Database size={32} />, title: "Database Design", desc: "SQL Server Optimization", delay: 0.5 },
                            { icon: <Terminal size={32} />, title: "Clean Code", desc: "Code Reviews & Debugging", delay: 0.6 },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: feature.delay }}
                                className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 border border-white/5"
                            >
                                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
