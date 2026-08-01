'use client';

import { m } from 'framer-motion';
import { Brain, ClipboardCheck, Landmark, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { advisoryServices } from '@/lib/portfolio-content';

const icons = [Brain, ClipboardCheck, ShieldCheck, Landmark];

export default function Services() {
    return (
        <section id="advisory" className="py-16 md:py-32">
            <div className="container mx-auto px-6">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="mb-14 max-w-3xl">
                        <p className="mb-4 text-sm font-medium text-atlas-teal">การให้คำปรึกษาเชิงยุทธศาสตร์</p>
                        <h2 className="font-display text-3xl font-medium leading-tight text-ink-primary md:text-4xl">
                            วางกรอบให้ผู้บริหารตัดสินใจได้ชัดขึ้น
                        </h2>
                        <p className="mt-5 max-w-[70ch] text-base leading-[1.85] text-ink-muted">
                            เหมาะสำหรับหน่วยงานหรือองค์กรที่ต้องการขยับจากความคิดกว้าง ๆ ไปสู่กรอบนโยบาย ระบบประเมิน แผนสมรรถนะ หรือ workshop ที่ใช้ได้กับบริบทจริงขององค์กร
                        </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        {advisoryServices.map((service, index) => {
                            const Icon = icons[index];
                            return (
                                    <m.div
                                    key={service.title}
                                        initial={false}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                                    className="group overflow-hidden border border-subtle-border bg-deep-surface transition-colors hover:border-strategic-gold/40 hover:bg-elevated-surface"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden border-b border-subtle-border bg-atlas-void">
                                        <Image
                                            src={service.image}
                                            alt={service.imageAlt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,13,0.03),rgba(5,8,13,0.38)_74%,rgba(5,8,13,0.66))]" />
                                        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--atlas-teal),transparent)] opacity-70" />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-5 flex items-center gap-4">
                                            <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-subtle-border bg-atlas-void">
                                                <Icon className="size-5 text-strategic-gold" aria-hidden="true" />
                                            </div>
                                            <h3 className="font-display text-xl font-medium leading-snug text-ink-primary">{service.title}</h3>
                                        </div>
                                        <p className="text-sm leading-[1.85] text-ink-secondary">{service.outcome}</p>
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {service.formats.map((format) => (
                                                <span key={format} className="rounded-md bg-elevated-surface px-3 py-1.5 text-xs font-medium text-ink-secondary">
                                                    {format}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    </m.div>
                            );
                        })}
                    </div>
                </m.div>
            </div>
        </section>
    );
}
