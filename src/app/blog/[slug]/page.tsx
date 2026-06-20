import { getPostBySlug, getAllPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'Article Not Found' };

    return {
        title: `${post.title} | Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const allPosts = getAllPosts();
    const currentIndex = allPosts.findIndex((p) => p.slug === slug);
    const relatedPosts = allPosts
        .filter((p) => p.slug !== slug)
        .sort((a, b) => {
            const aSame = a.category === post.category ? 0 : 1;
            const bSame = b.category === post.category ? 0 : 1;
            return aSame - bSame;
        })
        .slice(0, 3);

    return (
        <>
            <Navbar />
            <main className="bg-void-navy min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-strategic-gold transition-colors mb-10"
                    >
                        <ArrowLeft size={16} /> All Articles
                    </Link>

                    {/* Article header */}
                    <article className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1.5 rounded-md bg-elevated-surface text-strategic-gold text-xs font-medium">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                <Calendar size={13} />
                                {post.dateLabel}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                <Clock size={13} />
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-ink-primary mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="h-px w-16 bg-strategic-gold mb-10" />

                        {/* Cover image */}
                        <div className="relative aspect-[16/9] rounded-[14px] overflow-hidden mb-12 border border-subtle-border">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 768px"
                                priority
                            />
                        </div>

                        {/* Article content */}
                        <div className="space-y-6">
                            {post.content.map((section, index) => {
                                if (section.type === 'heading') {
                                    return (
                                        <h2
                                            key={index}
                                            className="font-display text-2xl font-medium text-ink-primary mt-10 mb-2 leading-snug"
                                        >
                                            {section.text}
                                        </h2>
                                    );
                                }

                                if (section.type === 'paragraph') {
                                    return (
                                        <p
                                            key={index}
                                            className="text-ink-secondary leading-relaxed text-base"
                                            style={{ lineHeight: 1.8 }}
                                        >
                                            {section.text}
                                        </p>
                                    );
                                }

                                if (section.type === 'image') {
                                    return (
                                        <div
                                            key={index}
                                            className="relative aspect-[16/9] rounded-[14px] overflow-hidden my-10 border border-subtle-border"
                                        >
                                            <Image
                                                src={section.image!}
                                                alt={section.imageAlt || ''}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 768px"
                                            />
                                        </div>
                                    );
                                }

                                if (section.type === 'quote') {
                                    return (
                                        <blockquote
                                            key={index}
                                            className="my-10 pl-6 border-l-2 border-strategic-gold"
                                        >
                                            <p className="font-display text-xl text-ink-primary italic leading-relaxed">
                                                {section.text}
                                            </p>
                                        </blockquote>
                                    );
                                }

                                return null;
                            })}
                        </div>

                        {/* Article footer */}
                        <div className="mt-16 pt-8 border-t border-subtle-border">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-medium text-strategic-gold hover:text-gold-light transition-colors"
                            >
                                <ArrowLeft size={16} /> Back to All Articles
                            </Link>
                        </div>
                    </article>

                    {/* Related posts */}
                    {relatedPosts.length > 0 && (
                        <div className="max-w-5xl mx-auto mt-24">
                            <h3 className="font-display text-2xl font-medium text-ink-primary mb-3">
                                Related Articles
                            </h3>
                            <div className="h-px w-12 bg-strategic-gold mb-10" />

                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((rp) => (
                                    <Link
                                        key={rp.slug}
                                        href={`/blog/${rp.slug}`}
                                        className="group rounded-[14px] bg-deep-surface border border-subtle-border overflow-hidden hover:border-strategic-gold/30 transition-all"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={rp.image}
                                                alt={rp.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-xs text-strategic-gold font-medium mb-2 block">
                                                {rp.category}
                                            </span>
                                            <h4 className="font-display text-base font-medium text-ink-primary leading-snug group-hover:text-strategic-gold transition-colors line-clamp-2 mb-3">
                                                {rp.title}
                                            </h4>
                                            <span className="inline-flex items-center gap-1 text-sm font-medium text-strategic-gold">
                                                Read <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
