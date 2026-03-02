import { Code2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-white/10 bg-background/50 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-2 text-xl font-bold tracking-tighter mb-4 md:mb-0">
                    <Code2 className="text-primary" size={24} />
                    <span>
                        Mithun<span className="text-primary">.dev</span>
                    </span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-right">
                    © {new Date().getFullYear()} Mithun Kumar. All rights reserved. <br className="md:hidden" />
                    <span className="opacity-75">Built with Next.js & Tailwind CSS.</span>
                </p>
            </div>
        </footer>
    );
}
