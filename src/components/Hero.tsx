'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Crosshair, Radar, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import AtlasBackground from '@/components/AtlasBackground';
import StrategicDomainRail from '@/components/StrategicDomainRail';
import { heroCopy } from '@/lib/portfolio-content';

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const initialState = { opacity: 1, y: 0 };
    const animateState = { opacity: 1, y: 0 };
    const doctrinePoints = [
        'ยุทธศาสตร์บูรณาการ',
        'AI Governance',
        'Systems Thinking',
        'Technology Advantage',
    ];
    const atlasSignals = [
        { label: 'Policy signal', value: 'นโยบาย-ความเสี่ยง' },
        { label: 'AI readiness', value: 'สมรรถนะ-ธรรมาภิบาล' },
        { label: 'Security posture', value: 'ไซเบอร์-ระบบงาน' },
        { label: 'Mission outcomes', value: 'ผลลัพธ์ที่วัดได้' },
    ];

    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] overflow-hidden bg-atlas-void pt-24"
            aria-label="Defense-Tech Atlas"
        >
            <AtlasBackground />

            <div className="absolute inset-x-0 bottom-0 z-[5] h-px bg-atlas-teal/70" />
            <div className="absolute bottom-0 right-0 z-[7] hidden h-[74%] w-[42%] border-l border-t border-atlas-teal/25 lg:block">
                <div className="absolute -left-24 top-0 h-px w-24 bg-atlas-teal/45" />
                <div className="absolute -left-36 bottom-[18%] h-px w-36 bg-strategic-gold/45" />
            </div>

            <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute bottom-[-32svh] right-[-24vw] z-[8] h-[62svh] w-[112vw] max-w-[760px] opacity-55 sm:bottom-[-10svh] sm:right-[-10vw] sm:h-[72svh] sm:w-[88vw] md:bottom-[-2svh] md:right-[-3vw] md:h-[82svh] md:opacity-90 lg:bottom-0 lg:right-[2vw] lg:h-[88svh] lg:w-[48vw] lg:opacity-100"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_28%,rgba(56,198,217,0.12),transparent_38%)]" />
                <Image
                    src="/assets/krich-2026-cutout.png"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="scale-[1.08] object-cover object-[center_14%] opacity-42 blur-3xl brightness-[0.72] saturate-[0.82]"
                    sizes="(max-width: 768px) 86vw, (max-width: 1200px) 54vw, 720px"
                />
                <Image
                    src="/assets/krich-2026-cutout.png"
                    alt="พลโท ดร.กริช อินทราทิพย์"
                    fill
                    className="object-cover object-[center_14%] brightness-[0.9] contrast-[1.06] saturate-[0.9] drop-shadow-[0_0_34px_rgba(56,198,217,0.12)]"
                    sizes="(max-width: 768px) 86vw, (max-width: 1200px) 54vw, 720px"
                    priority
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(180deg,transparent,rgba(5,8,13,0.96)_72%,#05080d_100%)]" />
                <div className="absolute left-[14%] top-[18%] size-28 rounded-full border border-atlas-teal/20" />
                <div className="absolute left-[17%] top-[21%] size-16 rounded-full border border-strategic-gold/20" />
            </motion.div>

            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1500px] flex-col px-5 sm:px-8 lg:px-10">
                <div className="grid flex-1 items-center gap-8 pb-40 pt-8 md:pb-44 lg:grid-cols-[0.96fr_1.04fr] lg:pb-36 lg:pt-12">
                    <div className="max-w-[760px]">
                        <motion.div
                            initial={initialState}
                            animate={animateState}
                            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-6 inline-flex items-center gap-3 border border-atlas-teal/40 bg-atlas-void/80 px-4 py-2 text-sm font-medium text-atlas-teal"
                        >
                            <Radar size={16} aria-hidden="true" />
                            <span>{heroCopy.label}</span>
                        </motion.div>

                        <motion.h1
                            initial={initialState}
                            animate={animateState}
                            transition={{ delay: 0.12, duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
                            className="flex max-w-[660px] flex-col gap-1.5 font-body text-[clamp(1.75rem,4vw,3.65rem)] font-extrabold leading-none text-ink-primary sm:gap-2 md:gap-3"
                        >
                            <span className="block leading-[1.18]">ช่วยให้เรื่อง</span>
                            <span className="block leading-[1.18] text-strategic-gold">ความมั่นคง</span>
                            <span className="block text-[0.94em] leading-[1.18] text-atlas-teal">เทคโนโลยี และ AI</span>
                            <span className="block leading-[1.18]">ตัดสินใจง่ายขึ้น</span>
                        </motion.h1>

                        <motion.p
                            initial={initialState}
                            animate={animateState}
                            transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-6 max-w-[56ch] text-base leading-[1.85] text-ink-secondary md:text-lg"
                        >
                            {heroCopy.description}
                        </motion.p>

                        <motion.div
                            initial={initialState}
                            animate={animateState}
                            transition={{ delay: 0.36, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-7 flex flex-wrap gap-x-5 gap-y-3"
                        >
                            {doctrinePoints.map((point) => (
                                <span key={point} className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-teal">
                                    <span className="h-px w-7 bg-atlas-teal/70" />
                                    {point}
                                </span>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={initialState}
                            animate={animateState}
                            transition={{ delay: 0.48, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-7 max-w-[58ch] border-l border-strategic-gold/70 pl-5 text-base font-medium leading-[1.75] text-ink-primary"
                        >
                            {heroCopy.name} · {heroCopy.nameEn}
                        </motion.p>

                        <motion.div
                            initial={initialState}
                            animate={animateState}
                            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-9 flex flex-col gap-4 sm:flex-row"
                        >
                            <a
                                href="#experience"
                                className="inline-flex items-center justify-center gap-2 border border-atlas-teal bg-atlas-teal px-7 py-3.5 text-sm font-bold text-atlas-void transition-colors hover:bg-ink-primary focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-void-navy"
                            >
                                {heroCopy.primaryCta}
                                <ArrowRight size={16} aria-hidden="true" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 border border-subtle-border bg-atlas-void/50 px-7 py-3.5 text-sm font-semibold text-ink-primary transition-colors hover:border-atlas-teal/50 hover:text-atlas-teal focus:outline-none focus:ring-2 focus:ring-strategic-gold focus:ring-offset-2 focus:ring-offset-void-navy"
                            >
                                {heroCopy.secondaryCta}
                            </a>
                        </motion.div>

                    </div>

                    <div className="hidden min-h-[560px] lg:block" aria-hidden="true">
                        <div className="absolute right-[36%] top-[20%] z-[9] w-80 border border-atlas-teal/35 bg-atlas-void/76 p-4">
                            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-atlas-teal">
                                <Crosshair size={14} />
                                ATLAS SIGNALS
                            </div>
                            <div className="space-y-3">
                                {atlasSignals.map((item) => (
                                    <div key={item.label} className="grid grid-cols-[5.75rem_1fr] items-center gap-3 text-xs">
                                        <span className="text-ink-muted">{item.label}</span>
                                        <span className="whitespace-nowrap border-l border-atlas-teal/40 pl-3 font-medium text-ink-secondary">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 h-px bg-[linear-gradient(90deg,var(--atlas-teal),transparent)] opacity-70" />
                            <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                                อ่านสัญญาณสำคัญก่อนออกแบบแผนงาน นโยบาย และระบบตัดสินใจ
                            </p>
                        </div>
                        <div className="absolute bottom-[24%] right-[32%] z-[9] flex items-center gap-2 border border-strategic-gold/35 bg-atlas-void/70 px-4 py-3 text-xs font-semibold text-strategic-gold">
                            <ShieldCheck size={15} />
                            Responsible AI · Strategic Security
                        </div>
                    </div>
                </div>

            </div>

            <motion.div
                initial={initialState}
                animate={animateState}
                transition={{ delay: 0.82, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-5 bottom-6 z-20 hidden md:block lg:inset-x-10"
            >
                <StrategicDomainRail />
            </motion.div>

            <motion.a
                href="#profile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="absolute bottom-2 left-1/2 z-30 hidden -translate-x-1/2 text-ink-muted transition-colors hover:text-strategic-gold lg:block"
                aria-label="เลื่อนลงไปยังบทบาท"
            >
                <motion.span
                    className="flex"
                    animate={prefersReducedMotion ? undefined : { y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                >
                    <ChevronDown size={20} aria-hidden="true" />
                </motion.span>
            </motion.a>
        </section>
    );
}
