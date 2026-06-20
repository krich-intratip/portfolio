'use client';

import { motion } from 'framer-motion';
import { Lightbulb, GraduationCap, Brain, Cog, Users } from 'lucide-react';

const services = [
    {
        title: "AI Governance & Strategy Advisory",
        description: "ให้คำปรึกษาด้านการกำกับดูแล AI และการประยุกต์ใช้ในองค์กร เพื่อเพิ่มประสิทธิภาพและความสามารถในการแข่งขันอย่างมีจริยธรรม",
        icon: Lightbulb,
    },
    {
        title: "Research & Statistics Consulting",
        description: "ให้คำปรึกษาด้านการทำวิจัยและสถิติ เพื่อให้ผลงานวิจัยมีคุณภาพและได้มาตรฐานสากล",
        icon: GraduationCap,
    },
    {
        title: "Mindset Transformation",
        description: "จัดอบรม Mindset Transformation สำหรับผู้ปฏิบัติงานในองค์กร เพื่อสร้างวัฒนธรรมการเรียนรู้และพัฒนาอย่างต่อเนื่อง",
        icon: Brain,
    },
    {
        title: "KM & CQI Training",
        description: "จัดอบรมการประยุกต์ใช้ AI ในการจัดทำ KM และโครงการ CQI เพื่อยกระดับการจัดการความรู้และการพัฒนาคุณภาพอย่างต่อเนื่อง",
        icon: Cog,
    },
    {
        title: "Leadership & Learning Culture",
        description: "จัดอบรมภาวะผู้นำเพื่อการเปลี่ยนแปลงและการสร้างวัฒนธรรมการเรียนรู้ สร้างผู้นำที่พร้อมนำองค์กรสู่ความเป็นเลิศ",
        icon: Users,
    },
    {
        title: "Executive Coaching & Human Development",
        description: "การโค้ชผู้บริหารระดับสูง การปรับ Mindset และการพัฒนาจิตวิทยาการนำ ด้วย Enneagram, MBTI, Voice Dialogue และ Satir Model",
        icon: Users,
    }
];

export default function Services() {
    return (
        <section id="advisory" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                        Consulting & Advisory
                    </h2>
                    <div className="h-px w-12 bg-strategic-gold mb-4" />
                    <p className="text-ink-muted mb-16 max-w-2xl">
                        บริการให้คำปรึกษา จัดอบรม และ Workshop ด้านการพัฒนาองค์กรและบุคลากร
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="group p-7 rounded-[14px] bg-deep-surface border border-subtle-border hover:bg-elevated-surface hover:border-strategic-gold/30 transition-all"
                            >
                                <div className="w-12 h-12 rounded-[14px] bg-elevated-surface flex items-center justify-center mb-5 group-hover:bg-strategic-gold/10 transition-colors">
                                    <service.icon className="w-6 h-6 text-strategic-gold" />
                                </div>
                                <h3 className="font-display text-lg font-medium text-ink-primary mb-3 leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
