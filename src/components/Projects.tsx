'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "SAR for Academic Research Paper",
        description: "ระบบรีวิวและประเมินคุณภาพงานวิจัยทางวิชาการโดย AI ผู้เชี่ยวชาญ 3 ท่าน สำหรับการศึกษาระดับ Master & Ph.D.",
        tech: ["Next.js 16", "Google Gemini", "OpenAI", "OpenRouter"],
        link: "https://academic-sar.vercel.app",
        github: "https://github.com/krich-intratip/academic-sar",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "CQI Self-Assessment System",
        description: "ระบบประเมินโครงการ CQI และ Knowledge Management ด้วยตนเองสำหรับหน่วยงานในกองทัพบก",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PMQA Framework"],
        link: "https://cqi-sar.vercel.app",
        github: "https://github.com/krich-intratip/cqi-sar",
        color: "from-emerald-500 to-teal-400"
    },
    {
        title: "RTA Full Research Project SAR",
        description: "ระบบประเมินโครงการวิจัยแบบเต็ม (Full Research Project Assessment) สำหรับ ทบ. พร้อม PRD และ Implementation Guide",
        tech: ["Next.js", "TypeScript", "Markdown Docs"],
        link: "https://rta-pas-fullproject.vercel.app",
        github: "https://github.com/krich-intratip/rta-pas-fullproject",
        color: "from-amber-500 to-orange-400"
    },
    {
        title: "ARDO SAR Landing",
        description: "Landing Page สำหรับเข้าสู่ระบบ RTA Research Project (Proposal & Project Closure) รวบรวมเครื่องมือประเมินไว้ในที่เดียว",
        tech: ["Next.js", "Tailwind CSS", "Portal System"],
        link: "https://ardo-sar-page.vercel.app/",
        color: "from-indigo-500 to-purple-400"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-colors"
                            >
                                {/* Gradient Decoration */}
                                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 min-h-[80px]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                                    >
                                        Visit Website <ExternalLink size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
