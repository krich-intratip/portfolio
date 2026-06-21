import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'บทความ | Defense-Tech, AI Governance และการพัฒนาองค์กร',
    description: 'บทความภาษาไทยด้านยุทธศาสตร์ ความมั่นคง AI Governance ระบบประเมิน Digital Transformation และการพัฒนาผู้นำ โดย พลโท ดร.กริช อินทราทิพย์',
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        type: 'website',
        locale: 'th_TH',
        title: 'บทความ | Defense-Tech, AI Governance และการพัฒนาองค์กร',
        description: 'บทความภาษาไทยด้านยุทธศาสตร์ ความมั่นคง AI Governance ระบบประเมิน และการพัฒนาผู้นำ',
        url: '/blog',
        images: ['/assets/krich-2026.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'บทความ | Defense-Tech, AI Governance และการพัฒนาองค์กร',
        description: 'บทความภาษาไทยด้านยุทธศาสตร์ ความมั่นคง AI Governance และการพัฒนาผู้นำ',
        images: ['/assets/krich-2026.png'],
    },
};

export default function BlogPage() {
    const posts = getAllPosts();
    const featured = posts[0];
    const rest = posts.slice(1);

    return (
        <main className="min-h-screen bg-void-navy pb-20 pt-28 md:pb-24 md:pt-32">
            <div className="container mx-auto px-6">
                <div className="mb-14 max-w-4xl">
                    <Link
                        href="/"
                        className="-ml-2 mb-8 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-ink-muted transition-colors hover:text-strategic-gold"
                    >
                        <ArrowLeft size={16} aria-hidden="true" /> กลับหน้าแรก
                    </Link>
                    <p className="mb-4 text-sm font-medium text-atlas-teal">บทความและมุมมองเชิงยุทธศาสตร์</p>
                    <h1 className="font-display text-3xl font-medium leading-tight text-ink-primary md:text-5xl">
                        Defense-Tech, AI Governance และระบบพัฒนาองค์กร
                    </h1>
                    <div className="mt-6 h-px w-16 bg-strategic-gold" />
                    <p className="mt-6 max-w-[72ch] text-base leading-[1.85] text-ink-muted">
                        รวมบทความภาษาไทยที่ออกแบบให้ตอบคำถามผู้บริหารและผู้ค้นหาข้อมูลเชิงลึก ครอบคลุมความมั่นคง เทคโนโลยี AI ระบบประเมิน การวิจัย และการพัฒนาผู้นำในบริบทไทย
                    </p>
                </div>

                {featured && (
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="group mb-8 grid overflow-hidden border border-atlas-teal/30 bg-deep-surface transition-colors hover:border-strategic-gold/50 lg:grid-cols-[1.08fr_0.92fr]"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[430px]">
                            <Image
                                src={featured.image}
                                alt={featured.imageAlt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                priority
                            />
                        </div>
                        <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10">
                            <div className="mb-5 flex flex-wrap items-center gap-3">
                                <span className="rounded-md bg-elevated-surface px-3 py-1.5 text-xs font-medium text-strategic-gold">
                                    {featured.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                    <Calendar size={13} aria-hidden="true" />
                                    {featured.dateLabel}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                    <Clock size={13} aria-hidden="true" />
                                    {featured.readTime}
                                </span>
                            </div>
                            <h2 className="font-display text-2xl font-medium leading-snug text-ink-primary group-hover:text-strategic-gold md:text-3xl">
                                {featured.title}
                            </h2>
                            <p className="mt-5 text-sm leading-[1.85] text-ink-secondary">
                                {featured.geoSummary}
                            </p>
                            <span className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-strategic-gold group-hover:text-gold-light">
                                อ่านบทความ <ArrowRight size={16} aria-hidden="true" />
                            </span>
                        </div>
                    </Link>
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group overflow-hidden border border-subtle-border bg-deep-surface transition-colors hover:border-strategic-gold/40 hover:bg-elevated-surface"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <span className="rounded-md bg-elevated-surface px-2.5 py-1 text-xs font-medium text-strategic-gold">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                        <Clock size={12} aria-hidden="true" />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h2 className="line-clamp-2 font-display text-lg font-medium leading-snug text-ink-primary transition-colors group-hover:text-strategic-gold">
                                    {post.title}
                                </h2>
                                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-ink-secondary">
                                    {post.excerpt}
                                </p>
                                <div className="mt-6 flex items-center justify-between gap-4">
                                    <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                        <Calendar size={12} aria-hidden="true" />
                                        {post.dateLabel}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-sm font-medium text-strategic-gold group-hover:text-gold-light">
                                        อ่าน <ArrowRight size={14} aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
