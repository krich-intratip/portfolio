'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            {/* Profile Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-700/50 group hover:border-sky-500/30 transition-all shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                                <Image
                                    src="/assets/professional-portrait.png"
                                    alt="Dr. Krich Intratip - Professional Portrait"
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </motion.div>

                            <div className="space-y-4 text-slate-300">
                                <p className="text-lg leading-relaxed">
                                    <strong className="text-white">Knowledge Manager & AI Implementation Specialist</strong> ผู้มีประสบการณ์กว่า 20 ปีในการพัฒนาระบบประเมินและเทคโนโลยีป้องกันประเทศ
                                </p>
                                <p className="leading-relaxed">
                                    เชี่ยวชาญด้าน Assessment Systems, PMQA/ก.พ.ร. Framework และการบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์ มีความเชี่ยวชาญด้านจิตวิทยาประยุกต์และการโค้ชผู้บริหารระดับสูง
                                </p>

                                <div className="pt-4">
                                    <h3 className="text-white font-semibold mb-3">Education</h3>
                                    <ul className="space-y-2 text-sm text-slate-400">
                                        <li>🎓 <strong>Ph.D. in Information Technology</strong> — Sripatum University</li>
                                        <li>🎓 <strong>M.Sc. in Information Technology</strong> — KMITL</li>
                                        <li>🎓 <strong>B.Sc. Military Science</strong> — Chulachomklao Royal Military Academy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden group hover:border-sky-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-sky-500/20 transition-colors" />

                            <h3 className="text-xl font-bold text-white mb-6">Vision Statement</h3>
                            <blockquote className="relative z-10 italic text-slate-300 space-y-4 text-sm leading-relaxed">
                                <p>
                                    "เราเชื่อว่า <strong className="text-sky-400 not-italic font-semibold">Self-Assessment Report Platform</strong> ไม่ใช่เพียงเครื่องมือประเมินผล แต่คือ <strong className="text-indigo-400 not-italic font-semibold">กลไกการเปลี่ยนผ่านองค์กร (Transformation Engine)</strong> ที่ทำให้องค์กร <em className="text-white">รู้จักตนเองอย่างเป็นระบบ</em> เห็นช่องว่างเชิงยุทธศาสตร์อย่างชัดเจน และยกระดับผลลัพธ์ได้แบบต่อเนื่อง"
                                </p>
                                <p>
                                    แพลตฟอร์มของเราถูกออกแบบด้วยสถาปัตยกรรม <strong className="text-white not-italic">No-Code / Fully Customizable</strong> เพื่อให้ทุกหน่วยงาน "ปรับใช้ได้จริง" ตามบริบทของตน—ตั้งแต่การสร้าง <strong className="text-amber-400 not-italic">PMQA Platform</strong> ไปจนถึงการเชื่อมกระบวนการ <strong className="text-emerald-400 not-italic">KM/CQI</strong> ให้กลายเป็นวงจรเรียนรู้ที่วัดผลได้
                                </p>
                                <div className="not-italic text-slate-400 space-y-2 pl-4 border-l-2 border-sky-500/30">
                                    <p className="font-semibold text-white text-base">เรายกระดับองค์กรด้วย 3 พลังหลัก</p>
                                    <p><strong className="text-purple-400">1. Mindset Transformation & Leadership Development</strong>: ฝึกอบรมผู้นำการเปลี่ยนแปลง สร้างวัฒนธรรมองค์กรแห่งการเรียนรู้</p>
                                    <p><strong className="text-sky-400">2. AI-Enabled KM/CQI</strong>: ประยุกต์ใช้ AI เพื่อเร่งการจัดการความรู้ การวิเคราะห์สาเหตุเชิงระบบ และการตัดสินใจบนข้อมูล</p>
                                    <p><strong className="text-indigo-400">3. Digital & AI Upskilling + Research & Analytics Excellence</strong>: เพิ่มทักษะดิจิทัลและ AI ควบคู่การให้คำปรึกษาด้านการวิจัยและสถิติ</p>
                                </div>
                                <footer className="mt-6 pt-4 border-t border-slate-700 text-sm font-semibold text-sky-400 not-italic">
                                    💡 Software ไม่ได้แค่แก้ปัญหา แต่สร้างความสามารถใหม่ให้กับองค์กร—ทำให้ "การประเมิน" กลายเป็น "การเรียนรู้" และ "การเรียนรู้" กลายเป็น "สมรรถนะที่เหนือกว่า" อย่างยั่งยืน
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
