'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
    {
        year: "2020 - Present",
        title: "Knowledge Manager & AI Implementation Specialist",
        organization: "Royal Thai Army Research and Development Office",
        type: "career",
        description: "พัฒนาระบบ Self-Assessment และบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์"
    },
    {
        year: "2023",
        title: "Ph.D. in Information Technology",
        organization: "Sripatum University",
        type: "education",
        description: "วิจัยด้าน Assessment Systems และ AI Integration"
    },
    {
        year: "2010 - 2020",
        title: "Defense Systems & Technology Specialist",
        organization: "Royal Thai Army",
        type: "career",
        description: "พัฒนาระบบประเมินและเทคโนโลยีป้องกันประเทศ"
    },
    {
        year: "2015",
        title: "M.Sc. in Information Technology",
        organization: "King Mongkut's Institute of Technology Ladkrabang",
        type: "education",
        description: "เชี่ยวชาญด้าน Information Systems และ Software Engineering"
    },
    {
        year: "2005",
        title: "B.Sc. Military Science",
        organization: "Chulachomklao Royal Military Academy",
        type: "education",
        description: "สำเร็จการศึกษาจากโรงเรียนนายร้อยพระจุลจอมเกล้า"
    }
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Career Journey
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        ประสบการณ์การทำงานและการศึกษากว่า 20 ปี
                    </p>

                    <div className="max-w-4xl mx-auto">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative pl-8 pb-12 border-l-2 border-slate-800 last:pb-0"
                            >
                                {/* Timeline Icon */}
                                <div className={`absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                    item.type === 'career'
                                        ? 'bg-sky-500/20 border-2 border-sky-500'
                                        : 'bg-indigo-500/20 border-2 border-indigo-500'
                                }`}>
                                    {item.type === 'career' ? (
                                        <Briefcase size={14} className="text-sky-400" />
                                    ) : (
                                        <GraduationCap size={14} className="text-indigo-400" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors ml-4">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                            item.type === 'career'
                                                ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                                                : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                                        }`}>
                                            {item.year}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-400">
                                            {item.type === 'career' ? 'Career' : 'Education'}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sky-400 font-medium mb-3">
                                        {item.organization}
                                    </p>
                                    <p className="text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
