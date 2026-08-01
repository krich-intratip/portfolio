import { ArrowRight, ChevronDown, Crosshair, Radar, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import AtlasBackground from '@/components/AtlasBackground';
import StrategicDomainRail from '@/components/StrategicDomainRail';
import { heroCopy } from '@/lib/portfolio-content';

export default function Hero() {
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
            className="relative flex min-h-[100svh] overflow-hidden bg-atlas-void pt-20 sm:pt-24"
            aria-label="Defense-Tech Atlas"
        >
            <AtlasBackground />

            <div className="absolute inset-x-0 bottom-0 z-[5] h-px bg-atlas-teal/70" />
            <div className="absolute bottom-0 right-0 z-[7] hidden h-[74%] w-[42%] border-l border-t border-atlas-teal/25 lg:block">
                <div className="absolute -left-24 top-0 h-px w-24 bg-atlas-teal/45" />
                <div className="absolute -left-36 bottom-[18%] h-px w-36 bg-strategic-gold/45" />
            </div>

            <div
                className="pointer-events-none absolute z-[8] hidden max-w-[760px] md:bottom-0 md:right-[-7vw] md:block md:h-[80svh] md:w-[60vw] md:opacity-[0.68] lg:right-[2vw] lg:h-[88svh] lg:w-[48vw] lg:opacity-100"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_28%,rgba(56,198,217,0.12),transparent_38%)]" />
                <Image
                    src="/assets/krich-2026-cutout.webp"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="scale-[1.06] object-contain object-[right_bottom] opacity-42 blur-3xl brightness-[0.72] saturate-[0.82] lg:object-bottom"
                    sizes="(max-width: 768px) 86vw, (max-width: 1200px) 54vw, 720px"
                />
                <Image
                    src="/assets/krich-2026-cutout.webp"
                    alt="พลโท ดร.กริช อินทราทิพย์"
                    fill
                    className="object-contain object-[right_bottom] brightness-[0.9] contrast-[1.06] saturate-[0.9] drop-shadow-[0_0_34px_rgba(56,198,217,0.12)] lg:object-bottom"
                    sizes="(max-width: 768px) 86vw, (max-width: 1200px) 54vw, 720px"
                    priority
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(180deg,transparent,rgba(5,8,13,0.96)_72%,#05080d_100%)]" />
                <div className="absolute left-[14%] top-[18%] size-28 rounded-full border border-atlas-teal/20" />
                <div className="absolute left-[17%] top-[21%] size-16 rounded-full border border-strategic-gold/20" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[1500px] flex-col px-5 sm:min-h-[calc(100svh-6rem)] sm:px-8 lg:px-10">
                <div className="grid flex-1 items-center gap-6 pb-10 pt-3 sm:gap-8 sm:pb-14 sm:pt-8 md:pb-44 lg:grid-cols-[0.96fr_1.04fr] lg:pb-36 lg:pt-12">
                    <div className="max-w-[760px]">
                        <div
                            className="mb-6 inline-flex items-center gap-3 border border-atlas-teal/40 bg-atlas-void/80 px-4 py-2 text-sm font-medium text-atlas-teal"
                        >
                            <Radar size={16} aria-hidden="true" />
                            <span>{heroCopy.label}</span>
                        </div>

                        <h1
                            className="flex max-w-[660px] flex-col gap-1 font-body text-[clamp(2rem,9vw,3rem)] font-extrabold leading-none text-ink-primary sm:gap-2 md:gap-3 md:text-[clamp(2.15rem,4vw,3.65rem)]"
                        >
                            <span className="block leading-[1.2]">ช่วยให้เรื่อง</span>
                            <span className="block leading-[1.2] text-strategic-gold">ความมั่นคง</span>
                            <span className="block text-[0.86em] leading-[1.2] text-atlas-teal sm:text-[0.94em]">เทคโนโลยี และ AI</span>
                            <span className="block leading-[1.2]">ตัดสินใจง่ายขึ้น</span>
                        </h1>

                        <p
                            className="mt-5 max-w-[56ch] text-sm leading-[1.85] text-ink-secondary sm:text-base md:mt-6 md:text-lg"
                        >
                            {heroCopy.description}
                        </p>

                        <div
                            className="mt-6 grid gap-2 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-3 md:mt-7"
                        >
                            {doctrinePoints.map((point) => (
                                <span key={point} className="inline-flex items-center gap-2 text-xs font-semibold text-atlas-teal sm:text-sm">
                                    <span className="h-px w-5 bg-atlas-teal/70 sm:w-7" />
                                    {point}
                                </span>
                            ))}
                        </div>

                        <p
                            className="mt-6 max-w-[58ch] border-l border-strategic-gold/70 pl-4 text-sm font-medium leading-[1.75] text-ink-primary sm:text-base md:mt-7 md:pl-5"
                        >
                            {heroCopy.name} · {heroCopy.nameEn}
                        </p>

                        <div
                            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
                        >
                            <a
                                href="#experience"
                                className="inline-flex min-h-12 items-center justify-center gap-2 border border-atlas-teal bg-atlas-teal px-5 py-3.5 text-sm font-bold text-atlas-void transition-colors hover:bg-ink-primary focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-void-navy sm:px-7"
                            >
                                {heroCopy.primaryCta}
                                <ArrowRight size={16} aria-hidden="true" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex min-h-12 items-center justify-center gap-2 border border-subtle-border bg-atlas-void/50 px-5 py-3.5 text-sm font-semibold text-ink-primary transition-colors hover:border-atlas-teal/50 hover:text-atlas-teal focus:outline-none focus:ring-2 focus:ring-strategic-gold focus:ring-offset-2 focus:ring-offset-void-navy sm:px-7"
                            >
                                {heroCopy.secondaryCta}
                            </a>
                        </div>

                        <div
                            className="pointer-events-none relative mt-8 h-[260px] overflow-hidden border-y border-atlas-teal/15 md:hidden"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_22%,rgba(56,198,217,0.16),transparent_44%)]" />
                            <div className="absolute inset-x-0 bottom-[-18%] h-[118%]">
                                <Image
                                    src="/assets/krich-2026-cutout-mobile.webp"
                                    alt=""
                                    fill
                                    className="object-contain object-bottom brightness-[0.92] contrast-[1.05] saturate-[0.9]"
                                    sizes="100vw"
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(5,8,13,0.96)_76%,#05080d_100%)]" />
                            <div className="absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,#05080d,transparent)]" />
                        </div>

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

            <div
                className="absolute inset-x-5 bottom-6 z-20 hidden md:block lg:inset-x-10"
            >
                <StrategicDomainRail />
            </div>

            <a
                href="#profile"
                className="absolute bottom-2 left-1/2 z-30 hidden -translate-x-1/2 text-ink-muted transition-colors hover:text-strategic-gold lg:block"
                aria-label="เลื่อนลงไปยังบทบาท"
            >
                <span className="flex">
                    <ChevronDown size={20} aria-hidden="true" />
                </span>
            </a>
        </section>
    );
}
