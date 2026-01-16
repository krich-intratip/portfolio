'use client';

import { motion } from 'framer-motion';

const skills = [
    {
        category: "Frontend Development",
        items: ["React", "Next.js 15+", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Vue.js"]
    },
    {
        category: "Backend & Systems",
        items: ["Node.js", "Express", "Python (Django/Flask)", "RESTful APIs", "MVC Architecture"]
    },
    {
        category: "AI & LLM Integration",
        items: ["Google Gemini API", "OpenAI ChatGPT API", "Prompt Engineering", "RAG Systems", "Multi-Agent Systems"]
    },
    {
        category: "Database & Cloud",
        items: ["Firebase / Firestore", "PostgreSQL", "Google Sheets API", "Google Cloud Platform"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Technical Expertise
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-500/30 transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-sky-500 rounded-full" />
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-sm font-medium hover:text-white hover:bg-slate-700 transition-colors cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
