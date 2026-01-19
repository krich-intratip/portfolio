'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, BadgeCheck } from 'lucide-react';

const achievements = [
    {
        category: "Certifications",
        icon: BadgeCheck,
        items: [
            "Certified AI Specialist",
            "PMQA Assessor Certification",
            "Google Cloud Certified",
            "Next.js Professional Certificate"
        ]
    },
    {
        category: "Awards & Recognition",
        icon: Trophy,
        items: [
            "Excellence in Innovation Award 2024",
            "Best Research Paper - IT Conference 2023",
            "Outstanding Leadership Award",
            "Digital Transformation Champion"
        ]
    },
    {
        category: "Professional Achievements",
        icon: Medal,
        items: [
            "20+ Years Defense Technology Experience",
            "50+ Organizations Consulted",
            "100+ Successful Projects Delivered",
            "1,000+ Professionals Trained"
        ]
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                        Certifications & Awards
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        รางวัลและความสำเร็จที่ได้รับตลอดอาชีพการงาน
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/30 transition-all group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <achievement.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-6">
                                    {achievement.category}
                                </h3>

                                <ul className="space-y-3">
                                    {achievement.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
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
