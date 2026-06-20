'use client';

import { motion } from 'framer-motion';

const competencies = [
    {
        title: "Strategic Security & Public Policy",
        description: "การพัฒนาและขับเคลื่อนนโยบายความมั่นคง การบริหารภาครัฐ และการเชื่อมโยงยุทธศาสตร์ชาติกับการปฏิบัติ",
        items: ["National Security Strategy", "Public Policy Development", "Defense Technology Policy"]
    },
    {
        title: "Military Capability & Competency Development",
        description: "การพัฒนาสมรรถนะกำลังพลและระบบ HR สำหรับกองทัพ การฝึกอบรมผู้นำระดับสูง",
        items: ["HR Development Systems", "Competency Framework Design", "Senior Leadership Training"]
    },
    {
        title: "AI Governance & Digital Transformation",
        description: "การกำกับดูแล AI การปรับเปลี่ยนองค์กรสู่ดิจิทัล และการประยุกต์ใช้เทคโนโลยีอย่างมีจริยธรรม",
        items: ["TH-AICF Framework", "AI Governance", "Digital Transformation Strategy"]
    },
    {
        title: "Knowledge Management, PMQA & CQI",
        description: "การจัดการความรู้ การประเมินคุณภาพองค์กร และการพัฒนาคุณภาพอย่างต่อเนื่อง",
        items: ["PMQA 4.0 Implementation", "KM Systems", "CQI Frameworks"]
    },
    {
        title: "Research Methodology & Evidence-Based Decision Making",
        description: "ระเบียบวิธีวิจัย การวิเคราะห์สถิติ และการตัดสินใจบนหลักฐานเชิงประจักษ์",
        items: ["SEM & Grounded Theory", "Research Design", "Data-Driven Decision Making"]
    },
    {
        title: "Executive Coaching & Leadership Development",
        description: "การโค้ชผู้บริหาร การพัฒนาผู้นำ และการสร้างวัฒนธรรมองค์กรแห่งการเรียนรู้",
        items: ["Executive Coaching", "Leadership Programs", "Organizational Culture"]
    },
    {
        title: "Mindset Transformation & Human Psychology",
        description: "การปรับ Mindset การพัฒนาจิตวิทยาการนำ และการเปลี่ยนผ่านองค์กร",
        items: ["Enneagram", "MBTI", "Voice Dialogue & Satir Model"]
    },
    {
        title: "Curriculum Design for Military & Public Sector Education",
        description: "การออกแบบหลักสูตร การประกันคุณภาพการศึกษา และการพัฒนาการเรียนการสอน",
        items: ["Curriculum Development", "Academic Quality Assurance", "Adult Learning Design"]
    },
    {
        title: "Strategic Systems Design & Organizational Transformation",
        description: "การออกแบบระบบเชิงยุทธศาสตร์ การเปลี่ยนผ่านองค์กร และการบูรณาการเทคโนโลยี",
        items: ["Systems Architecture", "Change Management", "Process Integration"]
    }
];

export default function Skills() {
    return (
        <section id="competencies" className="py-24 md:py-32 bg-deep-surface/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                        Core Competencies
                    </h2>
                    <div className="h-px w-12 bg-strategic-gold mb-4" />
                    <p className="text-ink-muted mb-16 max-w-2xl">
                        9 สมรรถนะหลักที่สะท้อนการทำงานข้ามสาขา ตั้งแต่ความมั่นคงระดับชาติถึงการพัฒนาคน
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {competencies.map((comp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="p-7 rounded-[14px] bg-deep-surface border border-subtle-border hover:bg-elevated-surface hover:border-strategic-gold/30 transition-all"
                            >
                                <h3 className="font-display text-lg font-medium text-ink-primary mb-3 leading-snug">
                                    {comp.title}
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                                    {comp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {comp.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1.5 rounded-md bg-elevated-surface text-ink-secondary text-xs font-medium"
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
