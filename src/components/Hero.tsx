'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20" aria-label="Hero section">
            {/* Ambient background layers */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201, 162, 39, 0.05), transparent 65%)',
                }}
            />
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 162, 39, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
                    {/* Left: Text content */}
                    <div className="order-2 lg:order-1 max-w-xl">
                        {/* Category label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-px w-8 bg-strategic-gold" />
                            <span className="text-xs font-medium text-strategic-gold tracking-widest uppercase">
                                Strategy · Security · AI
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-primary mb-5 leading-tight"
                        >
                            พลโท ดร.กริช<br />อินทราทิพย์
                        </motion.h1>

                        {/* English name */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base md:text-lg text-ink-secondary font-light mb-6"
                        >
                            Lt.Gen. Krich Intratip, Ph.D.<br />
                            <span className="text-ink-muted">Information Technology</span>
                        </motion.p>

                        {/* Gold accent line */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: '80px', opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                            className="h-px bg-strategic-gold mb-6"
                        />

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base text-ink-muted leading-relaxed mb-10"
                            style={{ lineHeight: 1.8 }}
                        >
                            ผู้เชี่ยวชาญด้านยุทธศาสตร์ ความมั่นคง การพัฒนาทรัพยากรมนุษย์
                            และการประยุกต์ใช้ปัญญาประดิษฐ์ มุ่งขับเคลื่อนองค์กรด้วยหลักฐานเชิงประจักษ์
                            และนวัตกรรมดิจิทัล
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#experience"
                                className="px-8 py-3.5 rounded-md bg-strategic-gold text-void-navy font-semibold text-sm hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-2"
                            >
                                View Experience <ArrowRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 rounded-md border border-subtle-border text-ink-primary font-medium text-sm hover:bg-deep-surface hover:text-strategic-gold hover:border-strategic-gold transition-all inline-flex items-center justify-center"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Portrait blending with background */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5]">
                            {/* Glow behind photo */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(ellipse 70% 80% at 50% 40%, rgba(201, 162, 39, 0.08), transparent 60%)',
                                    transform: 'scale(1.15)',
                                }}
                            />
                            {/* Photo with edge fade */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/assets/Dr.Krich_2026.jpg"
                                    alt="พลโท ดร.กริช อินทราทิพย์"
                                    fill
                                    className="object-cover rounded-[14px]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                {/* Left edge fade into bg */}
                                <div
                                    className="absolute inset-0 pointer-events-none rounded-[14px]"
                                    style={{
                                        background: 'linear-gradient(to left, transparent 70%, rgba(10, 14, 23, 0.6) 95%, rgba(10, 14, 23, 1) 100%)',
                                    }}
                                />
                                {/* Bottom edge fade into bg */}
                                <div
                                    className="absolute inset-0 pointer-events-none rounded-[14px]"
                                    style={{
                                        background: 'linear-gradient(to bottom, transparent 75%, rgba(10, 14, 23, 0.5) 95%, rgba(10, 14, 23, 0.9) 100%)',
                                    }}
                                />
                                {/* Top edge subtle fade */}
                                <div
                                    className="absolute inset-0 pointer-events-none rounded-[14px]"
                                    style={{
                                        background: 'linear-gradient(to top, transparent 85%, rgba(10, 14, 23, 0.3) 100%)',
                                    }}
                                />
                            </div>
                            {/* Gold accent line beside photo */}
                            <div className="absolute -left-4 top-1/4 h-24 w-px bg-strategic-gold/40 hidden lg:block" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted"
            >
                <ChevronDown size={20} className="animate-bounce" />
            </motion.div>
        </section>
    );
}
