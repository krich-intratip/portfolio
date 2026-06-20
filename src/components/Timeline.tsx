'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const timelineData = [
    {
        year: "2567 - ปัจจุบัน",
        title: "เลขานุการประจำคณะกรรมาธิการการเทคโนโลยีสารสนเทศ การสื่อสาร และการโทรคมนาคม",
        organization: "วุฒิสภา",
        type: "career",
        description: "ดำเนินการด้านนโยบายเทคโนโลยีสารสนเทศและการสื่อสาร สนับสนุนการพัฒนาระบบป้องกันประเทศและความมั่นคงทางไซเบอร์"
    },
    {
        year: "2567 - 2568",
        title: "อนุกรรมาธิการด้านกิจการทางทหาร ไซเบอร์เทคโนโลยี อาวุธยุทโธปกรณ์ และอุตสาหกรรมป้องกันประเทศ",
        organization: "คณะกรรมาธิการการทหารและความมั่นคงของรัฐ วุฒิสภา",
        type: "career",
        description: "ดำเนินการด้านนโยบายไซเบอร์ เทคโนโลยีทางทหาร อาวุธยุทโธปกรณ์ และอุตสาหกรรมป้องกันประเทศ"
    },
    {
        year: "2567 - ปัจจุบัน",
        title: "คณะรับรองพิจารณายกร่างกรอบสมรรถนะปัญญาประดิษฐ์แห่งชาติ (TH-AICF)",
        organization: "สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)",
        type: "career",
        description: "ร่วมพิจารณาและยกร่างกรอบสมรรถนะปัญญาประดิษฐ์แห่งชาติ เพื่อกำหนดมาตรฐาน AI สำหรับประเทศไทย"
    },
    {
        year: "2566 - 2567",
        title: "ผู้ทรงคุณวุฒิและที่ปรึกษากองทัพบก",
        organization: "กรมกำลังพลทหารบก",
        type: "career",
        description: "ให้คำปรึกษาด้านกำลังพล เทคโนโลยี การบริหารเชิงยุทธศาสตร์ และการพัฒนาองค์กร"
    },
    {
        year: "2556 - 2560",
        title: "อาจารย์และอาจารย์หัวหน้าวิชา ระเบียบวิธีวิจัยและความมั่นคงศึกษา",
        organization: "โรงเรียนเสนาธิการทหารบก",
        type: "career",
        description: "บรรยายวิชาระเบียบวิธีวิจัย ประกันคุณภาพการศึกษาระดับมหาวิทยาลัย อาจารย์ประจำหลักสูตรระดับปริญญาโท และหัวหน้าฝ่าย IT"
    },
    {
        year: "2560 - ปัจจุบัน",
        title: "ผู้นำและคณะทำงานด้านการจัดการความรู้ การพัฒนาสมรรถนะ และการเปลี่ยนผ่านสู่ดิจิทัล",
        organization: "หน่วยงานในกองทัพบกและภาครัฐ",
        type: "career",
        description: "นำการจัดการความรู้ การพัฒนาสมรรถนะ การพัฒนาคุณภาพองค์กร (CQI) และการเปลี่ยนผ่านองค์กรสู่ดิจิทัล"
    },
    {
        year: "2560 - ปัจจุบัน",
        title: "วิทยากร ที่ปรึกษา และผู้เชี่ยวชาญอิสระ",
        organization: "สถาบันการศึกษา หน่วยงานรัฐ และองค์กรต่างๆ",
        type: "career",
        description: "วิทยากรและที่ปรึกษาด้านยุทธศาสตร์ เทคโนโลยีดิจิทัล AI การพัฒนาผู้นำ การโค้ช การปรับ Mindset และจิตวิทยาการนำ"
    }
];

const publicationData = [
    {
        year: "2558",
        title: "การประยุกต์ใช้กระบวนการ NGT++ ในการสัมมนาเชิงปฏิบัติการ",
        journal: "วารสารเสนาธิปัตย์ ปีที่ 64 ฉบับที่ 2",
        type: "บทความวิชาการ"
    },
    {
        year: "2558",
        title: "แนวคิดการจัดตั้งศูนย์ความเป็นเลิศด้านการวิเคราะห์ข้อมูล/การวิจัยการปฏิบัติการทางทหาร กองทัพบก",
        journal: "วารสารเสนาธิปัตย์ ปีที่ 64 ฉบับที่ 1",
        type: "บทความวิชาการ"
    },
    {
        year: "2556",
        title: "Stepwise Approach for Applying Coding Method of Grounded Theory to Ontology Design",
        journal: "JCIT: Journal of Convergence Information Technology, Vol. 8, No. 15, pp. 23~32",
        type: "วารสารนานาชาติ"
    },
    {
        year: "2553",
        title: "Stepwise Approach for Improving Ontology using Optimizing Rules",
        journal: "The Fifth International Conference on Knowledge, Information and Creativity Support Systems (KICSS 2010)",
        type: "การประชุมวิชาการนานาชาติ"
    }
];

export default function Timeline() {
    return (
        <section id="experience" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                        Professional Experience
                    </h2>
                    <div className="h-px w-12 bg-strategic-gold mb-4" />
                    <p className="text-ink-muted mb-16 max-w-2xl">
                        เส้นทางอาชีพในภาครัฐ กองทัพ และวุฒิสภา
                    </p>

                    <div className="max-w-3xl mx-auto mb-24">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative pl-10 pb-10 border-l border-subtle-border last:pb-0"
                            >
                                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-strategic-gold/60 border border-strategic-gold" />

                                <div className="p-6 rounded-[14px] bg-deep-surface border border-subtle-border hover:bg-elevated-surface transition-colors">
                                    <span className="text-xs font-medium text-strategic-gold mb-3 block">
                                        {item.year}
                                    </span>
                                    <h3 className="font-display text-lg font-medium text-ink-primary mb-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-ink-secondary mb-3">
                                        {item.organization}
                                    </p>
                                    <p className="text-sm text-ink-muted leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Publications */}
                    <div className="max-w-3xl mx-auto">
                        <h3 className="font-display text-2xl font-medium text-ink-primary mb-3">
                            Academic Publications
                        </h3>
                        <div className="h-px w-12 bg-strategic-gold mb-10" />

                        <div className="grid md:grid-cols-2 gap-5">
                            {publicationData.map((pub, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.5 }}
                                    className="p-6 rounded-[14px] bg-deep-surface border border-subtle-border hover:border-strategic-gold/30 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <BookOpen size={18} className="text-strategic-gold flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-medium text-strategic-gold">
                                                    {pub.year}
                                                </span>
                                                <span className="text-xs text-ink-muted">
                                                    {pub.type}
                                                </span>
                                            </div>
                                            <h4 className="text-sm font-medium text-ink-primary mb-2 leading-snug">
                                                {pub.title}
                                            </h4>
                                            <p className="text-xs text-ink-muted leading-relaxed">
                                                {pub.journal}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
