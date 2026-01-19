'use client';

import { motion } from 'framer-motion';
import { Lightbulb, GraduationCap, Brain, Cog, Users } from 'lucide-react';

const services = [
    {
        title: "AI Workshop",
        description: "จัด Workshop สำหรับการประยุกต์ใช้ AI ในการทำงาน เพื่อเพิ่มประสิทธิภาพและความสามารถในการแข่งขันขององค์กร",
        icon: Lightbulb,
        color: "from-amber-500 to-yellow-400"
    },
    {
        title: "Research & Statistics Consulting",
        description: "ให้คำปรึกษาและแนะนำด้านการทำวิจัยและสถิติ เพื่อให้ผลงานวิจัยมีคุณภาพและได้มาตรฐานสากล",
        icon: GraduationCap,
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Mindset Transformation",
        description: "จัดอบรมเกี่ยวกับ Mindset Transformation สำหรับผู้ปฏิบัติงานในองค์กร เพื่อสร้างวัฒนธรรมการเรียนรู้และพัฒนาอย่างต่อเนื่อง",
        icon: Brain,
        color: "from-purple-500 to-pink-400"
    },
    {
        title: "KM & CQI Training",
        description: "จัดอบรมการประยุกต์ใช้ AI ในการจัดทำ KM และโครงการ CQI เพื่อยกระดับการจัดการความรู้และการพัฒนาคุณภาพอย่างต่อเนื่อง",
        icon: Cog,
        color: "from-emerald-500 to-teal-400"
    },
    {
        title: "Leadership & Learning Culture",
        description: "จัดอบรมภาวะผู้นำเพื่อการเปลี่ยนแปลงและการสร้างวัฒนธรรมการเรียนรู้ สร้างผู้นำที่พร้อมนำองค์กรสู่ความเป็นเลิศ",
        icon: Users,
        color: "from-indigo-500 to-violet-400"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        บริการของเรา
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        บริการให้คำปรึกษา จัดอบรม และ Workshop ด้านการพัฒนาองค์กรและบุคลากร
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/50"
                            >
                                <div className="p-8">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {service.description}
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
