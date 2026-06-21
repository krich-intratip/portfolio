import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '@/lib/blog-data';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const siteUrl = SITE_CONFIG.url;

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'ไม่พบบทความ' };

    return {
        title: post.seoTitle,
        description: post.metaDescription,
        keywords: post.keywords,
        alternates: {
            canonical: post.canonicalPath,
        },
        openGraph: {
            type: 'article',
            locale: 'th_TH',
            url: post.canonicalPath,
            title: post.seoTitle,
            description: post.metaDescription,
            publishedTime: post.date,
            modifiedTime: post.updatedAt,
            authors: ['พลโท ดร.กริช อินทราทิพย์'],
            section: post.category,
            tags: post.keywords,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 675,
                    alt: post.imageAlt,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.seoTitle,
            description: post.metaDescription,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const allPosts = getAllPosts();
    const relatedPosts = allPosts
        .filter((p) => p.slug !== slug)
        .sort((a, b) => {
            const aSame = a.category === post.category ? 0 : 1;
            const bSame = b.category === post.category ? 0 : 1;
            return aSame - bSame;
        })
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-void-navy pb-20 pt-28 md:pb-24 md:pt-32">
            <ArticleJsonLd post={post} siteUrl={siteUrl} />
            <div className="container mx-auto px-6">
                <Link
                    href="/blog"
                    className="-ml-2 mb-10 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-ink-muted transition-colors hover:text-strategic-gold"
                >
                    <ArrowLeft size={16} aria-hidden="true" /> บทความทั้งหมด
                </Link>

                <article className="mx-auto max-w-3xl">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="rounded-md bg-elevated-surface px-3 py-1.5 text-xs font-medium text-strategic-gold">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                            <Calendar size={13} aria-hidden="true" />
                            {post.dateLabel}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                            <Clock size={13} aria-hidden="true" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="font-display text-[1.8rem] font-medium leading-tight text-ink-primary sm:text-3xl md:text-4xl lg:text-5xl">
                        {post.title}
                    </h1>
                    <p className="mt-6 text-base leading-[1.85] text-ink-secondary md:text-lg">{post.excerpt}</p>
                    <div className="my-10 h-px w-16 bg-strategic-gold" />

                    <figure className="mb-10">
                        <div className="relative aspect-[16/9] overflow-hidden border border-subtle-border">
                            <Image
                                src={post.image}
                                alt={post.imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 768px"
                                priority
                            />
                        </div>
                        <figcaption className="mt-3 text-sm leading-relaxed text-ink-muted">{post.imageCaption}</figcaption>
                    </figure>

                    <section className="mb-10 border border-atlas-teal/30 bg-atlas-void/80 p-6">
                        <p className="mb-3 text-sm font-semibold text-atlas-teal">สรุปประเด็นสำคัญ</p>
                        <p className="text-base leading-[1.85] text-ink-secondary">{post.geoSummary}</p>
                    </section>

                    <section className="mb-12 border border-subtle-border bg-deep-surface p-6">
                        <p className="mb-5 font-display text-xl font-medium text-ink-primary">ข้อสรุปสำหรับผู้บริหาร</p>
                        <ul className="space-y-3">
                            {post.keyTakeaways.map((takeaway) => (
                                <li key={takeaway} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                                    <CheckCircle2 className="mt-0.5 size-4 flex-shrink-0 text-strategic-gold" aria-hidden="true" />
                                    <span>{takeaway}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="space-y-6">
                        {post.content.map((section) => {
                            const sectionKey = `${section.type}-${section.text ?? section.image ?? section.items?.join('|') ?? ''}`;
                            if (section.type === 'heading') {
                                return (
                                    <h2
                                        key={sectionKey}
                                        className="pt-5 font-display text-2xl font-medium leading-snug text-ink-primary"
                                    >
                                        {section.text}
                                    </h2>
                                );
                            }

                            if (section.type === 'paragraph') {
                                return (
                                    <p
                                        key={sectionKey}
                                        className="text-base leading-[1.9] text-ink-secondary"
                                    >
                                        {section.text}
                                    </p>
                                );
                            }

                            if (section.type === 'list') {
                                return (
                                    <ul key={sectionKey} className="space-y-3 border border-subtle-border bg-deep-surface p-5">
                                        {section.items?.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                                                <span className="mt-2 size-1.5 flex-shrink-0 rounded-full bg-strategic-gold" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }

                            if (section.type === 'callout') {
                                return (
                                    <aside key={sectionKey} className="border border-atlas-teal/25 bg-atlas-void/80 p-5">
                                        <p className="text-sm leading-[1.85] text-ink-secondary">{section.text}</p>
                                    </aside>
                                );
                            }

                            if (section.type === 'image' && section.image) {
                                return (
                                    <figure key={sectionKey} className="my-10">
                                        <div className="relative aspect-[16/9] overflow-hidden border border-subtle-border">
                                            <Image
                                                src={section.image}
                                                alt={section.imageAlt || ''}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 768px"
                                            />
                                        </div>
                                        {section.imageCaption && (
                                            <figcaption className="mt-3 text-sm text-ink-muted">{section.imageCaption}</figcaption>
                                        )}
                                    </figure>
                                );
                            }

                            if (section.type === 'quote') {
                                return (
                                    <blockquote
                                        key={sectionKey}
                                        className="my-10 border border-subtle-border bg-deep-surface px-6 py-5"
                                    >
                                        <p className="font-display text-xl leading-relaxed text-ink-primary">
                                            {section.text}
                                        </p>
                                    </blockquote>
                                );
                            }

                            return null;
                        })}
                    </div>

                    <section className="mt-16 border-t border-subtle-border pt-10">
                        <h2 className="font-display text-2xl font-medium text-ink-primary">คำถามที่พบบ่อย</h2>
                        <div className="mt-6 space-y-4">
                            {post.faq.map((item) => (
                                <div key={item.question} className="border border-subtle-border bg-deep-surface p-5">
                                    <h3 className="font-medium leading-snug text-ink-primary">{item.question}</h3>
                                    <p className="mt-3 text-sm leading-[1.85] text-ink-secondary">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-16 border-t border-subtle-border pt-8">
                        <Link
                            href="/blog"
                            className="-ml-2 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-strategic-gold transition-colors hover:text-gold-light"
                        >
                            <ArrowLeft size={16} aria-hidden="true" /> บทความทั้งหมด
                        </Link>
                    </div>
                </article>

                {relatedPosts.length > 0 && (
                    <section className="mx-auto mt-24 max-w-5xl">
                        <h2 className="font-display text-2xl font-medium text-ink-primary">
                            บทความที่เกี่ยวข้อง
                        </h2>
                        <div className="mt-4 h-px w-12 bg-strategic-gold" />

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group overflow-hidden border border-subtle-border bg-deep-surface transition-colors hover:border-strategic-gold/40"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={related.image}
                                            alt={related.imageAlt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <span className="mb-2 block text-xs font-medium text-strategic-gold">
                                            {related.category}
                                        </span>
                                        <h3 className="line-clamp-2 font-display text-base font-medium leading-snug text-ink-primary transition-colors group-hover:text-strategic-gold">
                                            {related.title}
                                        </h3>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-strategic-gold">
                                            อ่านบทความ <ArrowRight size={14} aria-hidden="true" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
