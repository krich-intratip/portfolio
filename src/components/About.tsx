'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

export default function About() {
    return (
        <section id="profile" className="py-24 md:py-32 relative">
            {/* Subtle background accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(201, 162, 39, 0.03), transparent 60%)',
                }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section label */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-strategic-gold" />
                        <span className="text-xs font-medium text-strategic-gold tracking-widest uppercase">
                            Profile
                        </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                        Executive Profile
                    </h2>
                    <div className="h-px w-12 bg-strategic-gold mb-10" />

                    <div className="space-y-6 text-ink-secondary leading-relaxed" style={{ lineHeight: 1.8 }}>
                        <p>
                            พลโท ดร.กริช อินทราทิพย์ เป็นผู้ทรงคุณวุฒิและที่ปรึกษาเชิงยุทธศาสตร์
                            ด้านความมั่นคง การบริหารภาครัฐ การพัฒนากำลังพล การวิจัย การจัดการความรู้
                            และเทคโนโลยีดิจิทัล มีประสบการณ์การทำงานกว่า 20 ปีในกองทัพบกและภาครัฐ
                        </p>
                        <p>
                            ปัจจุบันดำรงตำแหน่งเลขานุการประจำคณะกรรมาธิการการเทคโนโลยีสารสนเทศ
                            การสื่อสาร และการโทรคมนาคม วุฒิสภา และอนุกรรมาธิการด้านกิจการทางทหาร
                            ไซเบอร์เทคโนโลยี อาวุธยุทโธปกรณ์ และอุตสาหกรรมป้องกันประเทศ
                            รวมถึงเป็นคณะรับรองพิจารณายกร่างกรอบสมรรถนะปัญญาประดิษฐ์แห่งชาติ (TH-AICF)
                        </p>
                        <p>
                            ผู้ก่อตั้งและผู้พัฒนา <a href="https://www.marketsverse.app" target="_blank" rel="noopener noreferrer" className="text-strategic-gold hover:text-gold-light transition-colors">Marketsverse</a> —
                            แพลตฟอร์มโครงสร้างพื้นฐานตลาดดิจิทัลอัจฉริยะ และเป็นวิทยากร ที่ปรึกษา
                            และผู้เชี่ยวชาญด้านยุทธศาสตร์ เทคโนโลยีดิจิทัล AI การพัฒนาผู้นำ การโค้ช
                            การปรับ Mindset และจิตวิทยาการนำ
                        </p>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-12">
                        {[
                            { icon: Briefcase, value: '20+', label: 'ปีประสบการณ์' },
                            { icon: GraduationCap, value: 'Ph.D.', label: 'เทคโนโลยีสารสนเทศ' },
                            { icon: Award, value: 'TH-AICF', label: 'คณะรับรองยกร่าง' },
                            { icon: Users, value: 'วุฒิสภา', label: 'เลขานุการ กมธ.' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="p-5 rounded-[14px] bg-deep-surface border border-subtle-border"
                            >
                                <stat.icon size={20} className="text-strategic-gold mb-3" />
                                <p className="font-display text-lg font-medium text-ink-primary">{stat.value}</p>
                                <p className="text-xs text-ink-muted mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education */}
                    <div className="p-8 rounded-[14px] bg-deep-surface border border-subtle-border">
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap size={22} className="text-strategic-gold" />
                            <h3 className="font-display text-xl font-medium text-ink-primary">
                                การศึกษา
                            </h3>
                        </div>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-2.5 flex-shrink-0" />
                                <div>
                                    <p className="text-ink-primary font-medium">ปรัชญาดุษฎีบัณฑิต สาขาเทคโนโลยีสารสนเทศ (Ph.D. in Information Technology)</p>
                                    <p className="text-sm text-ink-muted mt-1">มหาวิทยาลัยศรีปทุม</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-2.5 flex-shrink-0" />
                                <div>
                                    <p className="text-ink-primary font-medium">วิทยาศาสตรมหาบัณฑิต สาขาเทคโนโลยีสารสนเทศ (M.Sc. in IT)</p>
                                    <p className="text-sm text-ink-muted mt-1">สถาบันเทคโนโลยีพระจอมเกล้าฯ ลาดกระบัง</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-2.5 flex-shrink-0" />
                                <div>
                                    <p className="text-ink-primary font-medium">วิทยาศาสตรบัณฑิต วิทยาศาสตร์ทหาร (B.Sc. Military Science)</p>
                                    <p className="text-sm text-ink-muted mt-1">โรงเรียนนายร้อยพระจุลจอมเกล้า (จปร.รุ่นที่ 36)</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
