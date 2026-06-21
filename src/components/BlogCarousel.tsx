'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLatestPosts } from '@/lib/blog-data';

const AUTO_ROTATE_MS = 5000;

export default function BlogCarousel() {
    const posts = getLatestPosts(5);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isPausedRef = useRef(false);

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (isPausedRef.current) return;
            setCurrentIndex((prev) => (prev + 1) % posts.length);
        }, AUTO_ROTATE_MS);
        return () => clearInterval(timer);
    }, [posts.length]);

    const currentPost = posts[currentIndex];

    return (
        <section id="blog" className="py-24 md:py-32 bg-deep-surface/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                                บทความเชิงยุทธศาสตร์
                            </h2>
                            <div className="h-px w-12 bg-strategic-gold mb-4" />
                            <p className="text-ink-muted max-w-xl">
                                มุมมองด้านความมั่นคง AI Governance ระบบประเมิน และการพัฒนาผู้นำในบริบทไทย
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors"
                        >
                            บทความทั้งหมด <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Carousel */}
                    <div
                        className="relative overflow-hidden rounded-[14px]"
                        onMouseEnter={() => {
                            isPausedRef.current = true;
                        }}
                        onMouseLeave={() => {
                            isPausedRef.current = false;
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -60 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="grid md:grid-cols-2 gap-0 rounded-[14px] bg-deep-surface border border-subtle-border overflow-hidden"
                            >
                                {/* Image side */}
                                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
                                    <Image
                                        src={currentPost.image}
                                        alt={currentPost.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(to right, transparent 60%, rgba(17, 23, 34, 0.8) 100%)',
                                        }}
                                    />
                                </div>

                                {/* Content side */}
                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="px-3 py-1.5 rounded-md bg-elevated-surface text-strategic-gold text-xs font-medium">
                                            {currentPost.category}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                            <Calendar size={13} />
                                            {currentPost.dateLabel}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                            <Clock size={13} />
                                            {currentPost.readTime}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-xl md:text-2xl font-medium text-ink-primary mb-4 leading-snug">
                                        {currentPost.title}
                                    </h3>

                                    <p className="text-sm text-ink-secondary leading-relaxed mb-8 line-clamp-4">
                                        {currentPost.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${currentPost.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors w-fit"
                                    >
                                        อ่านบทความ <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots + mobile View All */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex items-center gap-2.5">
                            {posts.map((post, index) => (
                                <button
                                    key={post.slug}
                                    type="button"
                                    onClick={() => goTo(index)}
                                    aria-label={`ไปยังบทความที่ ${index + 1}`}
                                    className={`h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'w-8 bg-strategic-gold'
                                            : 'w-2 bg-subtle-border hover:bg-ink-muted'
                                    }`}
                                />
                            ))}
                        </div>
                        <Link
                            href="/blog"
                            className="md:hidden inline-flex items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors"
                        >
                            บทความทั้งหมด <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
