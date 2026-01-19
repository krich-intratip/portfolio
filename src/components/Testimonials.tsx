'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "ผู้อำนวยการฝ่ายพัฒนาองค์กร",
        position: "หน่วยงานราชการ",
        content: "ระบบ PMQA Platform ที่ Dr. Krich พัฒนาช่วยให้องค์กรเราประเมินตนเองได้อย่างเป็นระบบ และลดเวลาการทำงานลงกว่า 60%",
        rating: 5
    },
    {
        name: "รองอธิการบดีฝ่ายวิจัย",
        position: "มหาวิทยาลัยชั้นนำ",
        content: "Workshop AI for Academic Excellence ที่จัดให้มีคุณภาพมาก ช่วยให้อาจารย์นำ AI มาใช้ในการวิจัยได้จริง",
        rating: 5
    },
    {
        name: "ผู้บริหารองค์กร",
        position: "บริษัทเอกชน",
        content: "การให้คำปรึกษาด้าน Knowledge Management และ AI Implementation ช่วยยกระดับการทำงานของทีมเราอย่างมาก",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                        Client Testimonials
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        ความคิดเห็นจากลูกค้าและผู้ใช้บริการ
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote size={48} className="text-amber-400" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-slate-300 leading-relaxed mb-6 relative z-10 italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="border-t border-slate-800 pt-4">
                                    <p className="font-semibold text-white mb-1">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        {testimonial.position}
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
