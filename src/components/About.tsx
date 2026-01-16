'use client';

import { motion } from 'framer-motion';

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

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-slate-300">
                            <p className="text-lg leading-relaxed">
                                <strong className="text-white">Knowledge Manager & AI Implementation Specialist</strong> ผู้มีประสบการณ์กว่า 20 ปีในการพัฒนาระบบประเมินและเทคโนโลยีป้องกันประเทศ
                            </p>
                            <p className="leading-relaxed">
                                เชี่ยวชาญด้าน Assessment Systems, PMQA/ก.พ.ร. Framework และการบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์ มีความเชี่ยวชาญด้านจิตวิทยาประยุกต์และการโค้ชผู้บริหารระดับสูง
                            </p>

                            <div className="pt-4">
                                <h3 className="text-white font-semibold mb-2">Education</h3>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li>🎓 <strong>Ph.D. in Information Technology</strong> — Sripatum University</li>
                                    <li>🎓 <strong>M.Sc. in Information Technology</strong> — KMITL</li>
                                    <li>🎓 <strong>B.Sc. Military Science</strong> — Chulachomklao Royal Military Academy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden group hover:border-sky-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-sky-500/20 transition-colors" />

                            <h3 className="text-xl font-bold text-white mb-6">Vision Statement</h3>
                            <blockquote className="relative z-10 italic text-slate-300 space-y-4">
                                <p>
                                    "เราเชื่อว่า <span className="text-sky-400 not-italic font-medium">Self-Assessment Report Platform</span> ไม่ใช่เพียงเครื่องมือประเมินผล แต่คือ <span className="text-indigo-400 not-italic font-medium">กลไกการเปลี่ยนผ่านองค์กร</span>"
                                </p>
                                <p>
                                    แพลตฟอร์มที่ช่วยให้องค์กรเข้าใจตนเองอย่างเป็นระบบ แก้ Pain Point ได้ตรงจุด และพัฒนาได้อย่างต่อเนื่อง ด้วยสถาปัตยกรรม <strong className="text-white not-italic">No-Code, Fully Customizable</strong>
                                </p>
                                <footer className="mt-4 text-sm font-medium text-sky-500 not-italic">
                                    — Software ไม่ได้แค่แก้ปัญหา แต่สร้างศักยภาพใหม่ให้กับองค์กร
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
