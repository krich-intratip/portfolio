'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const initiatives = [
    {
        title: "Marketsverse",
        description: "Ecosystem แบบใหม่สำหรับตลาด niche — เชื่อมต่อผู้ซื้อ-ผู้ขายในชุมชนเฉพาะทางด้วย AI ระบบจัดการที่ปรับขนาดได้ และโครงสร้างพื้นฐานดิจิทัลที่ออกแบบเพื่อตลาดที่มีเอกลักษณ์",
        tags: ["Niche Market Ecosystem", "AI Marketplace", "Digital Infrastructure", "Next.js"],
        link: "https://www.marketsverse.app",
        featured: true,
        vision: "สร้างโลกที่ตลาดเฉพาะทางไม่ถูกทอดทิ้งจากการเติบโตของ platform เศรษฐกิจยักษ์ใหญ่ — Marketsverse คือความตั้งใจที่จะให้ทุกชุมชนตลาดมีพื้นที่ของตัวเอง มีเครื่องมือของตัวเอง และเติบโตด้วยเอกลักษณ์ของตัวเอง"
    },
    {
        title: "PMQA-ISOC Platform",
        description: "ระบบประเมิน PMQA 4.0 สำหรับ กอ.รมน. ด้วย AI ครอบคลุมทุกหมวดเกณฑ์ พร้อมเครื่องมือวิเคราะห์ผลและจัดทำรายงาน",
        tags: ["PMQA 4.0", "AI Analytics", "Government Assessment"],
        link: "https://pmqa-isoc.vercel.app",
    },
    {
        title: "SAR for Academic Research",
        description: "ระบบรีวิวและประเมินคุณภาพงานวิจัยทางวิชาการโดย AI ผู้เชี่ยวชาญ 3 ท่าน สำหรับการศึกษาระดับ Master",
        tags: ["AI Review", "Academic Research", "Gemini API"],
        link: "https://academic-sar.pk-research.work/",
    },
    {
        title: "ระบบประเมินโครงการวิจัย ขั้นกลั่นกรอง",
        description: "ระบบประเมินโครงการวิจัยผ่าน AI ผู้ทรงคุณวุฒิ 3 ท่าน ด้านยุทธศาสตร์ เทคนิค และงบประมาณ",
        tags: ["Research Evaluation", "Multi-Agent AI", "Proposal Screening"],
        link: "https://proposal-sar.pk-research.work/",
    },
    {
        title: "ระบบประเมินโครงการวิจัย ขั้นปิดโครงการ",
        description: "ระบบประเมินโครงการวิจัยขั้นปิดโครงการ สวพ.ทบ. ด้วย AI ด้านผลสัมฤทธิ์ ผลกระทบ และความคุ้มค่า",
        tags: ["Project Closure", "AI Evaluation", "Impact Assessment"],
        link: "https://full-project-eval.pk-research.work/",
    },
    {
        title: "CQI Self-Assessment System",
        description: "ระบบประเมิน CQI และ Knowledge Management ด้วยตนเองสำหรับหน่วยงานในกองทัพบก",
        tags: ["CQI", "KM", "Self-Assessment"],
        link: "https://cqi-sar.vercel.app",
    },
    {
        title: "RTA Full Research Project SAR",
        description: "ระบบประเมินโครงการวิจัยแบบเต็มสำหรับ ทบ. พร้อม PRD และ Implementation Guide",
        tags: ["Full Research", "Military Research", "Assessment"],
        link: "https://rta-pas-fullproject.vercel.app",
    },
    {
        title: "ARDO SAR Portal",
        description: "Portal รวบรวมเครื่องมือประเมินโครงการวิจัย ทบ. (Proposal & Project Closure) ไว้ในที่เดียว",
        tags: ["Portal", "Research Tools", "RTA"],
        link: "https://ardo-sar-page.vercel.app/",
    }
];

export default function Projects() {
    return (
        <section id="initiatives" className="py-24 md:py-32 bg-deep-surface/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                        Strategic Initiatives
                    </h2>
                    <div className="h-px w-12 bg-strategic-gold mb-4" />
                    <p className="text-ink-muted mb-16 max-w-2xl">
                        โครงการและแพลตฟอร์มที่ออกแบบเพื่อขับเคลื่อนยุทธศาสตร์ การประเมิน และการตัดสินใจเชิงข้อมูล
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {initiatives.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={`group p-7 rounded-[14px] border transition-all hover:border-strategic-gold/30 ${
                                    item.featured
                                        ? 'bg-elevated-surface border-strategic-gold/20 md:col-span-2 lg:col-span-2 lg:row-span-1'
                                        : 'bg-deep-surface border-subtle-border hover:bg-elevated-surface'
                                }`}
                            >
                                {item.featured && (
                                    <span className="inline-block text-xs font-medium text-strategic-gold mb-3 px-2 py-1 rounded-md bg-strategic-gold/10">
                                        Featured
                                    </span>
                                )}
                                <h3 className="font-display text-lg font-medium text-ink-primary mb-3 leading-snug group-hover:text-strategic-gold transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                {item.vision && (
                                    <div className="mb-5 pl-4 border-l-2 border-strategic-gold/30">
                                        <p className="text-sm text-ink-muted leading-relaxed italic" style={{ lineHeight: 1.8 }}>
                                            {item.vision}
                                        </p>
                                    </div>
                                )}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-md bg-elevated-surface text-ink-muted text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors"
                                >
                                    Visit <ExternalLink size={14} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
