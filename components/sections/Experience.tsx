"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Manager",
        company: "Haier Appliances India Pvt Ltd",
        location: "Noida, Uttar Pradesh, India",
        date: "April 2024 – Present",
        description: "Lead technology-driven digital transformation projects within manufacturing. Developed an enterprise-grade 'Smart Documentation Application' to digitize over 40 QA and production checklists, reducing paper consumption by thousands of sheets monthly. Manage cross-functional teams and multi-tier approval workflows (Engineer → Reviewer → Approver).",
        tech: ["ASP.NET Core", "C#", "Angular", "SQL Server", "REST API", "Digital Transformation"]
    },
    {
        role: "Senior Programmer",
        company: "Path Infotech Ltd.",
        location: "Noida, Uttar Pradesh, India",
        date: "March 2023 – April 2024",
        description: "Developed scalable applications using C#, ASP.NET, and Angular. Participated in code reviews and debugging to improve software quality and reliability. Collaborated on engineering best practices and knowledge sharing across teams.",
        tech: ["C#", "ASP.NET", "Angular", "Code Review", "Debugging"]
    },
    {
        role: "Senior Software Engineer",
        company: "Chetu, Inc.",
        location: "Noida, Uttar Pradesh, India",
        date: "May 2021 – March 2023",
        description: "Developed software solutions using .NET technologies. Created technical specifications and user interfaces for mobile and web platforms. Focused on application performance optimization and modular architecture.",
        tech: [".NET", "C#", "Web API", "Mobile", "Performance Optimization"]
    },
    {
        role: "Software Engineer",
        company: "Enablesoft Solutions Pvt. Ltd.",
        location: "Gurugram, Haryana, India",
        date: "May 2018 – May 2021",
        description: "Specialized in .NET Framework development, writing clean and scalable code for various clients. Designed technical interfaces and architectural specifications. Repurposed web applications for mobile platforms and tested software prototypes.",
        tech: [".NET Framework", "C#", "HTML5", "CSS3", "Mobile Adaptation"]
    },
    {
        role: "Internship Trainee",
        company: "Apex TG India Pvt Ltd",
        location: "Noida, Uttar Pradesh, India",
        date: "January 2016 – June 2016",
        description: "Web Development Trainee focused on .NET Framework, HTML, and CSS. Gained foundational experience in building web applications and developing software solutions in a professional environment.",
        tech: [".NET Framework", "HTML", "CSS", "Web Development"]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-primary">Experience</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-[-8px] md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] transform md:-translate-x-1/2 z-10">
                                    <div className="w-full h-full bg-primary rounded-full animate-ping opacity-75"></div>
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`w-full md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}
                                >
                                    <div className="glass p-8 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>

                                        <div className={`flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400 ${idx % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            <span className="flex items-center gap-1 font-medium text-foreground">
                                                <Briefcase size={16} className="text-primary" /> {exp.company}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={16} /> {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1 text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                                                <Calendar size={14} /> {exp.date}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            {exp.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 rounded-lg">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Empty Space for alternate side */}
                                <div className="hidden md:block w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
