"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background glow for contact section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-primary">Connect</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                        I'm always open to discussing enterprise application development, new opportunities, or software architecture.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass max-w-3xl mx-auto p-8 md:p-12 rounded-3xl"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">

                        <div className="space-y-6 text-left">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <a href="mailto:mithunkiet@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me At</p>
                                    <p className="font-medium group-hover:text-primary transition-colors">mithunkiet@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                                    <MapPin size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">Greater Noida, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href="https://www.linkedin.com/in/mithunkiet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:-translate-y-1 hover:bg-[#0A66C2]/10 transition-all group"
                            >
                                <Linkedin size={24} className="text-[#0A66C2] dark:text-white group-hover:text-[#0A66C2]" />
                                <span className="font-semibold">Connect on LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/MithunKiet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:-translate-y-1 hover:bg-black/10 transition-all group"
                            >
                                <Github size={24} className="group-hover:text-black dark:group-hover:text-white" />
                                <span className="font-semibold">Follow on GitHub</span>
                            </a>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
