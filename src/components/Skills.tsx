'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
import { competencyDomains } from '@/lib/portfolio-content';

type CompetencyDomain = (typeof competencyDomains)[number];

function DomainVisual({ domain, index }: { domain: CompetencyDomain; index: number }) {
    return (
        <div className="relative min-h-[260px] overflow-hidden border border-atlas-teal/25 bg-atlas-void">
            <Image
                src={domain.visual.image}
                alt={domain.visual.alt}
                fill
                sizes="(max-width: 768px) 100vw, 36vw"
                className="object-cover opacity-62"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,13,0.9),rgba(5,8,13,0.58)_52%,rgba(5,8,13,0.82))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(56,198,217,0.22),transparent_34%)]" />

            <div className="relative z-10 flex min-h-[260px] flex-col justify-between p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold text-atlas-teal">แผนภาพสมรรถนะ</p>
                        <h4 className="mt-2 max-w-[22rem] text-base font-semibold leading-snug text-ink-primary">
                            {domain.visual.headline}
                        </h4>
                    </div>
                    <span className="border border-strategic-gold/40 bg-atlas-void/75 px-2.5 py-1 text-xs font-semibold text-strategic-gold">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2">
                    {domain.visual.metrics.map((metric) => (
                        <div key={`${metric.label}-${metric.value}`} className="border border-atlas-teal/20 bg-atlas-void/78 px-3 py-2">
                            <p className="text-[0.68rem] leading-tight text-ink-muted">{metric.label}</p>
                            <p className="mt-1 text-xs font-semibold leading-snug text-ink-primary">{metric.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {domain.visual.flow.map((step, stepIndex) => (
                        <span key={step} className="inline-flex items-center gap-2 text-xs font-semibold text-atlas-teal">
                            {stepIndex > 0 && <span className="h-px w-4 bg-strategic-gold/55" aria-hidden="true" />}
                            {step}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="competencies" className="bg-deep-surface/30 py-16 md:py-32">
            <div className="container mx-auto px-6">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                        <div>
                            <p className="mb-4 text-sm font-medium text-atlas-teal">สมรรถนะหลัก</p>
                            <h2 className="font-display text-3xl font-medium leading-tight text-ink-primary md:text-4xl">
                                สี่มิติที่เสริมกันเป็นระบบเดียว
                            </h2>
                        </div>
                        <p className="max-w-[72ch] text-base leading-[1.85] text-ink-muted">
                            จุดเด่นของงานไม่ใช่การแยกทักษะเป็นรายการยาว แต่คือการประกอบหลายศาสตร์ให้เป็นระบบคิดเดียวกัน: ยุทธศาสตร์วางทิศทาง, AI ช่วยขยายขีดความสามารถ, ระบบทำให้วัดผลได้ และคนทำให้การเปลี่ยนแปลงเกิดขึ้นจริง
                        </p>
                    </div>

                    <div className="space-y-4">
                        {competencyDomains.map((domain, index) => (
                            <m.div
                                key={domain.domain}
                                initial={false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                                className="grid gap-6 border border-subtle-border bg-deep-surface p-5 transition-colors hover:border-atlas-teal/30 md:p-6 lg:grid-cols-[0.54fr_1.46fr]"
                            >
                                <div>
                                    <p className="text-xs font-semibold text-strategic-gold">มิติความเชี่ยวชาญ</p>
                                    <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink-primary">
                                        {domain.domain}
                                    </h3>
                                </div>
                                <div className="grid gap-5 xl:grid-cols-[0.92fr_1fr] xl:items-start">
                                    <DomainVisual domain={domain} index={index} />
                                    <div>
                                        <p className="text-sm leading-[1.85] text-ink-secondary">{domain.description}</p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {domain.capabilities.map((item) => (
                                                <span key={item} className="rounded-md bg-elevated-surface px-3 py-1.5 text-xs font-medium text-ink-secondary">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-5 border-t border-subtle-border pt-4 text-sm leading-relaxed text-ink-muted">
                                            {domain.proof}
                                        </p>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    );
}
