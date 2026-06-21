'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { trustProofs } from '@/lib/portfolio-content';

export default function Achievements() {
    return (
        <section id="recognition" className="bg-deep-surface/30 py-24 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div>
                            <p className="mb-4 text-sm font-medium text-atlas-teal">หลักฐานความน่าเชื่อถือ</p>
                            <h2 className="font-display text-3xl font-medium leading-tight text-ink-primary md:text-4xl">
                                ความน่าเชื่อถือที่มาจากงานจริงหลายระบบ
                            </h2>
                        </div>
                        <p className="max-w-[70ch] text-base leading-[1.85] text-ink-muted">
                            ประสบการณ์ที่นำเสนอไม่ได้แยกเป็นรางวัล ประกาศนียบัตร หรือบทบาทอย่างใดอย่างหนึ่ง แต่เป็นหลักฐานว่าทำงานได้ทั้งระดับนโยบาย ระบบ วิชาการ และการพัฒนาคน
                        </p>
                    </div>

                    <div className="grid gap-px border border-subtle-border bg-subtle-border/70 md:grid-cols-3">
                        {trustProofs.map((proof, index) => (
                            <motion.div
                                key={proof.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-deep-surface p-6"
                            >
                                <BadgeCheck className="mb-5 size-5 text-strategic-gold" aria-hidden="true" />
                                <h3 className="font-display text-lg font-medium text-ink-primary">{proof.title}</h3>
                                <p className="mt-4 text-sm leading-[1.8] text-ink-secondary">{proof.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
