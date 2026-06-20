import { getAllPosts } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Blog | Lt.Gen. Krich Intratip, Ph.D.',
    description: 'บทความและวิเคราะห์ด้านยุทธศาสตร์ ความมั่นคง AI และการพัฒนาองค์กร',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <Navbar />
            <main className="bg-void-navy min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="mb-16">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-strategic-gold transition-colors mb-8"
                        >
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <h1 className="font-display text-4xl md:text-5xl font-medium text-ink-primary mb-4">
                            Blog
                        </h1>
                        <div className="h-px w-16 bg-strategic-gold mb-6" />
                        <p className="text-ink-muted max-w-2xl">
                            บทความและวิเคราะห์ด้านยุทธศาสตร์ ความมั่นคง การประยุกต์ใช้ AI และการพัฒนาองค์กร
                        </p>
                    </div>

                    {/* Posts grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group rounded-[14px] bg-deep-surface border border-subtle-border overflow-hidden hover:border-strategic-gold/30 transition-all"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-2.5 py-1 rounded-md bg-elevated-surface text-strategic-gold text-xs font-medium">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="font-display text-lg font-medium text-ink-primary mb-3 leading-snug group-hover:text-strategic-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-ink-secondary leading-relaxed mb-5 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                                            <Calendar size={12} />
                                            {post.dateLabel}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-strategic-gold group-hover:text-gold-light transition-colors">
                                            Read <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
