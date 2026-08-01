'use client';

import { m } from 'framer-motion';
import { ExternalLink, Network } from 'lucide-react';
import Image from 'next/image';
import { initiatives } from '@/lib/portfolio-content';

export default function Projects() {
    const featured = initiatives.find((item) => 'featured' in item && item.featured);
    const rest = initiatives.filter((item) => !('featured' in item && item.featured));

    return (
        <section id="initiatives" className="bg-deep-surface/30 py-16 md:py-32">
            <div className="container mx-auto px-6">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="mb-14 max-w-3xl">
                        <p className="mb-4 text-sm font-medium text-atlas-teal">ผลงานระบบและโครงสร้างพื้นฐาน</p>
                        <h2 className="font-display text-3xl font-medium leading-tight text-ink-primary md:text-4xl">
                            จากโจทย์ยุทธศาสตร์สู่ระบบที่วัดผลและใช้งานได้จริง
                        </h2>
                        <div className="mt-6 h-px w-16 bg-strategic-gold" />
                    </div>

                    {featured && (
                        <m.a
                            href={featured.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="group grid overflow-hidden border border-atlas-teal/30 bg-atlas-teal/20 transition-colors hover:border-strategic-gold/50 md:grid-cols-[0.82fr_1.18fr]"
                        >
                            <div className="bg-atlas-void p-5 sm:p-7 md:p-9">
                                <div className="mb-8 flex items-center justify-between gap-4">
                                    <span className="text-sm font-medium text-atlas-teal">{featured.label}</span>
                                    <ExternalLink size={18} className="text-strategic-gold" aria-hidden="true" />
                                </div>
                                <h3 className="font-display text-2xl font-medium leading-tight text-ink-primary md:text-3xl">
                                    {featured.title}
                                </h3>
                                <p className="mt-5 max-w-[60ch] text-base leading-[1.85] text-ink-secondary">
                                    {featured.system}
                                </p>
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {featured.tags.map((tag) => (
                                        <span key={tag} className="rounded-md bg-elevated-surface px-3 py-1.5 text-xs font-medium text-ink-secondary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-deep-surface">
                                <div className="relative aspect-[16/9] overflow-hidden border-b border-atlas-teal/20 bg-atlas-void">
                                    <Image
                                        src={featured.image}
                                        alt={featured.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 64vw"
                                        className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,13,0.02),rgba(5,8,13,0.22)_70%,rgba(5,8,13,0.46))]" />
                                </div>
                                <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-2 md:p-9">
                                    <div>
                                        <p className="text-sm font-semibold text-strategic-gold">โจทย์</p>
                                        <p className="mt-3 text-sm leading-[1.8] text-ink-secondary">{featured.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-strategic-gold">ผลลัพธ์ที่ต้องการ</p>
                                        <p className="mt-3 text-sm leading-[1.8] text-ink-secondary">{featured.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </m.a>
                    )}

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {rest.map((item, index) => (
                            <m.a
                                key={item.title}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                                className="group overflow-hidden border border-subtle-border bg-deep-surface transition-colors hover:border-strategic-gold/40 hover:bg-elevated-surface"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden border-b border-subtle-border bg-atlas-void">
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,13,0.03),rgba(5,8,13,0.2)_66%,rgba(5,8,13,0.52))]" />
                                    <Network size={18} className="absolute right-4 top-4 text-strategic-gold" aria-hidden="true" />
                                </div>
                                <div className="p-6">
                                    <div className="mb-5 flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-xs font-medium text-atlas-teal">{item.label}</p>
                                            <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink-primary group-hover:text-strategic-gold">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-[1.8] text-ink-secondary">{item.system}</p>
                                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                        <p className="text-xs leading-relaxed text-ink-muted">
                                            <span className="mb-1 block font-semibold text-ink-secondary">โจทย์</span>
                                            {item.problem}
                                        </p>
                                        <p className="text-xs leading-relaxed text-ink-muted">
                                            <span className="mb-1 block font-semibold text-ink-secondary">ผลลัพธ์</span>
                                            {item.impact}
                                        </p>
                                    </div>
                                </div>
                            </m.a>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    );
}
