'use client';

import { m } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationItems, profileNarrative, profileSignals } from '@/lib/portfolio-content';

const signalToneClasses = [
    { accent: 'bg-strategic-gold', value: 'text-strategic-gold' },
    { accent: 'bg-atlas-teal', value: 'text-atlas-teal' },
    { accent: 'bg-[#b9c7ff]', value: 'text-[#b9c7ff]' },
    { accent: 'bg-[#e06b6b]', value: 'text-[#e06b6b]' },
] as const;

const educationTitleClasses = [
    'text-strategic-gold',
    'text-atlas-teal',
    'text-[#b9c7ff]',
] as const;

export default function About() {
    return (
        <section id="profile" className="relative py-16 md:py-32">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 48% 36% at 18% 42%, rgba(56, 198, 217, 0.05), transparent 62%)',
                }}
            />
            <div className="container relative z-10 mx-auto px-6">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                        <div>
                            <p className="mb-4 text-sm font-medium text-atlas-teal">บทบาทและแกนความเชี่ยวชาญ</p>
                            <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink-primary md:text-4xl">
                                {profileNarrative.title}
                            </h2>
                            <div className="mt-6 h-px w-16 bg-strategic-gold" />
                        </div>

                        <div className="space-y-6 text-base leading-[1.85] text-ink-secondary">
                            {profileNarrative.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="mt-14 grid gap-px border border-subtle-border bg-subtle-border/70 md:grid-cols-4">
                        {profileSignals.map((signal, index) => {
                            const tone = signalToneClasses[index % signalToneClasses.length];

                            return (
                                <div key={signal.value} className="bg-deep-surface p-5 transition-colors hover:bg-elevated-surface">
                                    <span className={`mb-4 block h-0.5 w-10 ${tone.accent}`} aria-hidden="true" />
                                    <p className={`font-display text-xl font-semibold ${tone.value}`}>{signal.value}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{signal.label}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-14 border border-subtle-border bg-deep-surface p-5 md:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <GraduationCap size={22} className="text-strategic-gold" aria-hidden="true" />
                            <h3 className="font-display text-xl font-medium text-ink-primary">การศึกษาและฐานความรู้</h3>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {educationItems.map((item, index) => (
                                <div key={item.title} className="border-t border-subtle-border pt-4">
                                    <p className={`text-sm font-semibold leading-relaxed ${educationTitleClasses[index % educationTitleClasses.length]}`}>
                                        {item.title}
                                    </p>
                                    <p className="mt-2 text-sm text-ink-muted">{item.meta}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}
