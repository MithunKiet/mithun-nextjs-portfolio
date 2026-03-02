"use client";

import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Frontend",
        items: ["Angular", "HTML", "CSS", "Tailwind CSS", "TypeScript", "React"],
    },
    {
        category: "Backend",
        items: ["ASP.NET Core", "C#", "REST API Development"],
    },
    {
        category: "Database",
        items: ["SQL Server", "Entity Framework", "Database Design"],
    },
    {
        category: "Tools & Practices",
        items: ["GitHub", "Visual Studio", "Rider", "Debugging", "Code Reviews", "Enterprise Architecture"],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 bg-black/5 dark:bg-white/5 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive overview of my technical expertise and the technologies I use to build scalable enterprise solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillsData.map((skillGroup, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                            className="glass p-8 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-gray-200 dark:border-gray-800 pb-3">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={itemIdx}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-background/50 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default shadow-sm"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
