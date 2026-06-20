'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, BadgeCheck } from 'lucide-react';

const achievements = [
    {
        category: "Research & Publications",
        icon: Trophy,
        items: [
            "2553: International Conference — KICSS 2010 (pp.176~181)",
            "2556: JCIT Journal Vol. 8, No. 15, pp. 23~32",
            "2549: Excellence in Research Award — ATLAS Project",
            "2556: Special Commendation — Royal Thai Army"
        ]
    },
    {
        category: "Professional Certifications",
        icon: BadgeCheck,
        items: [
            "LLM & RAG System Development (Engineer-level)",
            "Prompt Engineering & AI Use Case Development",
            "Advanced Research Methodology (SEM, Grounded Theory)",
            "Professional Coach Certification Program"
        ]
    },
    {
        category: "Technical & Management Certifications",
        icon: Medal,
        items: [
            "MS-Windows NT Administrator (Microsoft Thailand)",
            "Service-Oriented Architecture (SOA)",
            "Project Management (PMI Bangkok)",
            "Capability Maturity Model (CMM)"
        ]
    }
];

export default function Achievements() {
    return (
        <section id="recognition" className="py-24 md:py-32 bg-deep-surface/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                        Certifications & Awards
                    </h2>
                    <div className="h-px w-12 bg-strategic-gold mb-4" />
                    <p className="text-ink-muted mb-16 max-w-2xl">
                        รางวัลและความสำเร็จที่ได้รับตลอดอาชีพการงาน
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="p-8 rounded-[14px] bg-deep-surface border border-subtle-border hover:border-strategic-gold/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-[14px] bg-elevated-surface flex items-center justify-center mb-6">
                                    <achievement.icon className="w-6 h-6 text-strategic-gold" />
                                </div>

                                <h3 className="font-display text-lg font-medium text-ink-primary mb-6">
                                    {achievement.category}
                                </h3>

                                <ul className="space-y-3">
                                    {achievement.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-ink-secondary">
                                            <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-2 flex-shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
