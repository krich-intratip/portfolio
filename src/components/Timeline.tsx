'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import { publications, strategicArc } from '@/lib/portfolio-content';

const arcTitleClasses = [
    'text-strategic-gold',
    'text-atlas-teal',
    'text-[#b9c7ff]',
    'text-[#e06b6b]',
] as const;

export default function Timeline() {
    return (
        <section id="experience" className="py-16 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                        <div>
                            <p className="mb-4 text-sm font-medium text-atlas-teal">ประสบการณ์เชิงยุทธศาสตร์</p>
                            <h2 className="font-display text-3xl font-medium leading-tight text-ink-primary md:text-4xl">
                                เส้นทางที่เชื่อมกองทัพ ภาครัฐ การศึกษา และ AI
                            </h2>
                        </div>
                        <p className="max-w-[72ch] text-base leading-[1.85] text-ink-muted">
                            เส้นทางอาชีพถูกออกแบบให้ผู้อ่านเห็นความต่อเนื่อง: จากภารกิจความมั่นคงและนโยบาย สู่ระบบประเมิน องค์ความรู้ การวิจัย และการพัฒนาคนสำหรับองค์กรที่ต้องตัดสินใจในสภาพแวดล้อมซับซ้อน
                        </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-4">
                        {strategicArc.map((item, index) => (
                            <motion.div
                                key={item.phase}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                                className="group overflow-hidden border border-subtle-border bg-deep-surface transition-colors hover:border-atlas-teal/35 hover:bg-elevated-surface"
                            >
                                <div className="relative aspect-[16/11] overflow-hidden bg-void-navy">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-deep-surface via-deep-surface/60 to-transparent" />
                                    <div className="absolute left-4 top-4 border border-strategic-gold/40 bg-void-navy/90 px-3 py-1 text-[11px] font-semibold text-strategic-gold">
                                        {item.phase}
                                    </div>
                                </div>
                                <div className="p-5 md:p-6">
                                    <p className="text-xs text-ink-muted">{item.period}</p>
                                    <h3 className={`mt-4 font-display text-lg font-semibold leading-snug ${arcTitleClasses[index % arcTitleClasses.length]}`}>
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 text-sm leading-[1.8] text-ink-secondary">{item.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 border border-subtle-border bg-deep-surface p-5 md:p-8">
                        <div className="mb-8 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <BookOpen size={20} className="text-strategic-gold" aria-hidden="true" />
                                <h3 className="font-display text-xl font-medium text-ink-primary">ฐานวิชาการและงานเขียน</h3>
                            </div>
                            <span className="hidden text-xs font-medium text-ink-muted sm:inline">
                                {publications.length} ผลงานตีพิมพ์
                            </span>
                        </div>
                        <ol className="grid gap-x-12 sm:grid-cols-2">
                            {publications.map((publication) => (
                                <li
                                    key={publication.title}
                                    className="grid grid-cols-[3rem_1fr] gap-4 border-t border-subtle-border py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                                >
                                    <span className="font-display text-lg font-semibold tabular-nums text-strategic-gold">
                                        {publication.year}
                                    </span>
                                    <div>
                                        <span className="text-[11px] font-semibold text-atlas-teal">{publication.type}</span>
                                        <h4 className="mt-1.5 text-pretty text-sm font-medium leading-snug text-ink-primary">
                                            {publication.title}
                                        </h4>
                                        {publication.titleEn ? (
                                            <p className="mt-1 text-xs leading-relaxed text-ink-secondary">{publication.titleEn}</p>
                                        ) : null}
                                        <p className="mt-2.5 text-xs font-medium leading-relaxed text-ink-secondary">{publication.venue}</p>
                                        <p className="mt-0.5 text-xs leading-relaxed text-ink-secondary/80">{publication.detail}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
