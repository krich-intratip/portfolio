'use client';

import { motion } from 'framer-motion';
import { FileDown, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { contactIntents } from '@/lib/portfolio-content';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const submitContactMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Contact request failed');
            }

            const result = await response.json() as { mailtoUrl: string };
            window.location.href = result.mailtoUrl;
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch {
            setIsSubmitting(false);
            setSubmitStatus('error');
        }
    };

    const updateContactField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-16 md:py-32">
            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-6xl"
                >
                    <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
                        <div>
                            <p className="mb-4 text-sm font-medium text-atlas-teal">ติดต่อเพื่อหารือ</p>
                            <h2 className="font-display text-3xl font-medium leading-tight text-ink-primary md:text-4xl">
                                เปิดบทสนทนาระดับยุทธศาสตร์ให้ชัดตั้งแต่แรก
                            </h2>
                            <p className="mt-5 max-w-[64ch] text-base leading-[1.85] text-ink-muted">
                                เหมาะสำหรับการเชิญเป็นที่ปรึกษา วิทยากร คณะกรรมการ หรือออกแบบระบบประเมินและ workshop สำหรับผู้บริหาร
                            </p>

                            <div className="mt-8 space-y-3">
                                {contactIntents.map((intent) => (
                                    <p key={intent} className="border-t border-subtle-border pt-3 text-sm text-ink-secondary">
                                        {intent}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-10 grid gap-3">
                                <a
                                    href="mailto:krich.intratip@gmail.com"
                                    className="flex min-h-12 items-center gap-3 border border-subtle-border bg-deep-surface px-4 py-3 text-sm text-ink-primary transition-colors hover:border-strategic-gold/40 hover:text-strategic-gold"
                                >
                                    <Mail size={18} aria-hidden="true" />
                                    krich.intratip@gmail.com
                                </a>
                                <a
                                    href="tel:0616329956"
                                    className="flex min-h-12 items-center gap-3 border border-subtle-border bg-deep-surface px-4 py-3 text-sm text-ink-primary transition-colors hover:border-strategic-gold/40 hover:text-strategic-gold"
                                >
                                    <Phone size={18} aria-hidden="true" />
                                    061-632-9956
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/krich-intratip-b1203a3a7/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex min-h-12 items-center gap-3 border border-subtle-border bg-deep-surface px-4 py-3 text-sm text-ink-primary transition-colors hover:border-strategic-gold/40 hover:text-strategic-gold"
                                >
                                    <Linkedin size={18} aria-hidden="true" />
                                    LinkedIn: krich-intratip
                                </a>
                                <a
                                    href="/assets/docs/krich-short-cv-2026-02.pdf"
                                    download
                                    className="resume-neon flex min-h-12 items-center gap-3 border bg-atlas-teal/10 px-4 py-3 text-sm font-semibold text-atlas-teal transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-teal focus-visible:ring-offset-2 focus-visible:ring-offset-void-navy"
                                    aria-label="ดาวน์โหลดประวัติย่อ Resume และ Short CV ของพลโท ดร.กริช อินทราทิพย์"
                                >
                                    <FileDown size={18} aria-hidden="true" />
                                    ดาวน์โหลดประวัติย่อ (Resume)
                                </a>
                            </div>
                        </div>

                        <div className="border border-subtle-border bg-deep-surface p-6 md:p-8">
                            <h3 className="font-display text-xl font-medium text-ink-primary">ส่งรายละเอียดเบื้องต้น</h3>

                            {submitStatus === 'success' && (
                                <div className="mt-6 border border-strategic-gold/30 bg-strategic-gold/10 px-4 py-3 text-sm text-strategic-gold">
                                    เปิดอีเมลสำหรับส่งถึง krich.intratip@gmail.com แล้ว
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mt-6 border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                                    ส่งข้อมูลไม่สำเร็จ กรุณาส่งอีเมลโดยตรงที่ krich.intratip@gmail.com
                                </div>
                            )}

                            <form onSubmit={submitContactMessage} className="mt-6 space-y-5">
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-secondary">
                                            ชื่อ-นามสกุล *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={updateContactField}
                                            required
                                            className="w-full rounded-md border border-subtle-border bg-elevated-surface px-4 py-3 text-ink-primary placeholder-ink-muted transition-colors focus:border-strategic-gold focus:outline-none focus:ring-1 focus:ring-strategic-gold"
                                            placeholder="ชื่อผู้ติดต่อ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-secondary">
                                            อีเมล *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={updateContactField}
                                            required
                                            className="w-full rounded-md border border-subtle-border bg-elevated-surface px-4 py-3 text-ink-primary placeholder-ink-muted transition-colors focus:border-strategic-gold focus:outline-none focus:ring-1 focus:ring-strategic-gold"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink-secondary">
                                        หัวข้อ *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={updateContactField}
                                        required
                                        className="w-full rounded-md border border-subtle-border bg-elevated-surface px-4 py-3 text-ink-primary placeholder-ink-muted transition-colors focus:border-strategic-gold focus:outline-none focus:ring-1 focus:ring-strategic-gold"
                                        placeholder="เชิญเป็นที่ปรึกษา / วิทยากร / workshop"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-secondary">
                                        รายละเอียด *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={updateContactField}
                                        required
                                        rows={6}
                                        className="w-full resize-none rounded-md border border-subtle-border bg-elevated-surface px-4 py-3 text-ink-primary placeholder-ink-muted transition-colors focus:border-strategic-gold focus:outline-none focus:ring-1 focus:ring-strategic-gold"
                                        placeholder="บริบทองค์กร วัตถุประสงค์ ระยะเวลา และผลลัพธ์ที่ต้องการ"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-strategic-gold px-8 py-4 font-semibold text-void-navy transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>กำลังส่ง...</>
                                    ) : (
                                        <>
                                            <Send size={18} aria-hidden="true" />
                                            ส่งข้อความ
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    <footer className="mt-16 text-center text-sm text-ink-muted">
                        <p>© 2026 Lt.Gen. Krich Intratip, Ph.D. All rights reserved.</p>
                        <p className="mt-2 text-xs text-ink-muted/70">
                            Version 2.1.2 · Last updated: 21 June 2026
                        </p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
