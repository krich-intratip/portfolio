'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLatestPosts } from '@/lib/blog-data';

const AUTO_ROTATE_MS = 5000;

export default function BlogCarousel() {
    const posts = getLatestPosts(5);
    // Now selecting from 10 total posts
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, [posts.length]);

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, AUTO_ROTATE_MS);
        return () => clearInterval(timer);
    }, [next, isPaused]);

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
                                Latest Articles
                            </h2>
                            <div className="h-px w-12 bg-strategic-gold mb-4" />
                            <p className="text-ink-muted max-w-xl">
                                บทความและวิเคราะห์ด้านยุทธศาสตร์ ความมั่นคง AI และการพัฒนาองค์กร
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors"
                        >
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Carousel */}
                    <div
                        className="relative overflow-hidden rounded-[14px]"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
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
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots + mobile View All */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex items-center gap-2.5">
                            {posts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goTo(index)}
                                    aria-label={`Go to article ${index + 1}`}
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
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
