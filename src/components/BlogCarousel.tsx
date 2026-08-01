'use client';

import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import DocumentLink from '@/components/DocumentLink';
import type { BlogPostPreview } from '@/lib/blog-data';

const AUTO_ROTATE_MS = 5000;

export default function BlogCarousel({ posts }: { posts: BlogPostPreview[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLElement | null>(null);
    const isPausedRef = useRef(false);
    const isInView = useInView(sectionRef, { amount: 0.15 });

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isInView) return;

        const timer = setInterval(() => {
            if (isPausedRef.current) return;
            setCurrentIndex((prev) => (prev + 1) % posts.length);
        }, AUTO_ROTATE_MS);
        return () => clearInterval(timer);
    }, [isInView, posts.length]);

    const currentPost = posts[currentIndex];

    return (
        <section ref={sectionRef} id="blog" className="py-16 md:py-32 bg-deep-surface/30">
            <div className="container mx-auto px-6">
                <m.div
                    initial={false}
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
                        <DocumentLink
                            href="/blog"
                            className="hidden min-h-11 items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors md:inline-flex"
                        >
                            บทความทั้งหมด <ArrowRight size={16} />
                        </DocumentLink>
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
                            <m.div
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
                                    />
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(to right, transparent 60%, rgba(17, 23, 34, 0.8) 100%)',
                                        }}
                                    />
                                </div>

                                {/* Content side */}
                                <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
                                    <div className="mb-5 flex flex-wrap items-center gap-3">
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

                                    <DocumentLink
                                        href={`/blog/${currentPost.slug}`}
                                        className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors"
                                    >
                                        อ่านบทความ <ArrowRight size={16} />
                                    </DocumentLink>
                                </div>
                            </m.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots + mobile View All */}
                    <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-1">
                            {posts.map((post, index) => (
                                <button
                                    key={post.slug}
                                    type="button"
                                    onClick={() => goTo(index)}
                                    aria-label={`ไปยังบทความที่ ${index + 1}`}
                                    className="inline-flex size-11 items-center justify-center rounded-md transition-colors hover:bg-elevated-surface/70"
                                >
                                    <span
                                        className={`h-2 rounded-full transition-all ${
                                            index === currentIndex
                                                ? 'w-8 bg-strategic-gold'
                                                : 'w-2 bg-subtle-border'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                        <DocumentLink
                            href="/blog"
                            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors md:hidden"
                        >
                            บทความทั้งหมด <ArrowRight size={16} />
                        </DocumentLink>
                    </div>
                </m.div>
            </div>
        </section>
    );
}
