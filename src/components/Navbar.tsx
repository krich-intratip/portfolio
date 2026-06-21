'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { name: 'ภาพรวม', href: '/#home' },
    { name: 'บทบาท', href: '/#profile' },
    { name: 'ประสบการณ์', href: '/#experience' },
    { name: 'สมรรถนะ', href: '/#competencies' },
    { name: 'ผลงานระบบ', href: '/#initiatives' },
    { name: 'ที่ปรึกษา', href: '/#advisory' },
    { name: 'บทความ', href: '/blog' },
    { name: 'ติดต่อ', href: '/#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-void-navy/90 border-b border-subtle-border py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="group flex min-w-0 items-center gap-3 text-ink-primary transition-colors"
                    aria-label="หน้าแรก พลโท ดร.กริช อินทราทิพย์"
                >
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md border border-strategic-gold/35 bg-elevated-surface/70 ring-1 ring-white/5 md:h-11 md:w-11">
                        <Image
                            src="/assets/peakmaker-logo.png"
                            alt=""
                            fill
                            sizes="44px"
                            className="object-cover"
                            priority
                        />
                    </span>
                    <span className="flex min-w-0 flex-col leading-tight">
                        <span className="font-display text-sm font-medium text-ink-primary transition-colors group-hover:text-strategic-gold md:text-base">
                            พลโท ดร.กริช
                        </span>
                        <span className="hidden text-[0.68rem] font-medium text-ink-muted sm:block">
                            Defense-Tech Atlas
                        </span>
                    </span>
                </Link>

                <div className="hidden items-center gap-4 lg:flex xl:gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-ink-secondary hover:text-strategic-gold transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-strategic-gold transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <button
                    type="button"
                    className="text-ink-secondary hover:text-strategic-gold lg:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-b border-subtle-border bg-void-navy lg:hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-display text-lg font-medium text-ink-secondary hover:text-strategic-gold transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
