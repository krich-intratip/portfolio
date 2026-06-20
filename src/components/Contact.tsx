'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ink-primary mb-3">
                        Get in Touch
                    </h2>
                    <div className="h-px w-12 bg-strategic-gold mb-4" />
                    <p className="text-ink-muted mb-12 max-w-xl">
                        สนใจในการให้คำปรึกษา การพัฒนาองค์กร หรือการเชิญเป็นวิทยากร
                        ติดต่อเพื่อพูดคุยแลกเปลี่ยนวิสัยทัศน์
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-16">
                        <a
                            href="mailto:krich.intratip@gmail.com"
                            className="flex flex-col items-center p-6 rounded-[14px] bg-deep-surface border border-subtle-border hover:border-strategic-gold/30 transition-all group"
                        >
                            <div className="w-11 h-11 rounded-[14px] bg-elevated-surface flex items-center justify-center mb-4 group-hover:bg-strategic-gold/10 transition-colors">
                                <Mail size={20} className="text-strategic-gold" />
                            </div>
                            <h3 className="text-xs font-medium text-ink-muted mb-1">Email</h3>
                            <p className="text-sm text-ink-primary">krich.intratip@gmail.com</p>
                        </a>

                        <a
                            href="tel:0616329956"
                            className="flex flex-col items-center p-6 rounded-[14px] bg-deep-surface border border-subtle-border hover:border-strategic-gold/30 transition-all group"
                        >
                            <div className="w-11 h-11 rounded-[14px] bg-elevated-surface flex items-center justify-center mb-4 group-hover:bg-strategic-gold/10 transition-colors">
                                <Phone size={20} className="text-strategic-gold" />
                            </div>
                            <h3 className="text-xs font-medium text-ink-muted mb-1">Phone</h3>
                            <p className="text-sm text-ink-primary">061-632-9956</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/krich-intratip-b1203a3a7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 rounded-[14px] bg-deep-surface border border-subtle-border hover:border-strategic-gold/30 transition-all group"
                        >
                            <div className="w-11 h-11 rounded-[14px] bg-elevated-surface flex items-center justify-center mb-4 group-hover:bg-strategic-gold/10 transition-colors">
                                <Linkedin size={20} className="text-strategic-gold" />
                            </div>
                            <h3 className="text-xs font-medium text-ink-muted mb-1">LinkedIn</h3>
                            <p className="text-sm text-ink-primary">krich-intratip</p>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="p-8 rounded-[14px] bg-deep-surface border border-subtle-border">
                            <h3 className="font-display text-xl font-medium text-ink-primary mb-6">Send a Message</h3>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 rounded-md bg-strategic-gold/10 border border-strategic-gold/30 text-strategic-gold text-sm">
                                    ส่งข้อความสำเร็จ เราจะติดต่อกลับโดยเร็วที่สุด
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-ink-secondary mb-2">
                                            ชื่อ-นามสกุล *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-elevated-surface border border-subtle-border rounded-md text-ink-primary placeholder-ink-muted focus:outline-none focus:ring-1 focus:ring-strategic-gold focus:border-strategic-gold transition-all"
                                            placeholder="ชื่อของคุณ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-ink-secondary mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-elevated-surface border border-subtle-border rounded-md text-ink-primary placeholder-ink-muted focus:outline-none focus:ring-1 focus:ring-strategic-gold focus:border-strategic-gold transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-ink-secondary mb-2">
                                        หัวข้อ *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-elevated-surface border border-subtle-border rounded-md text-ink-primary placeholder-ink-muted focus:outline-none focus:ring-1 focus:ring-strategic-gold focus:border-strategic-gold transition-all"
                                        placeholder="สนใจให้คำปรึกษา"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-ink-secondary mb-2">
                                        ข้อความ *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-elevated-surface border border-subtle-border rounded-md text-ink-primary placeholder-ink-muted focus:outline-none focus:ring-1 focus:ring-strategic-gold focus:border-strategic-gold transition-all resize-none"
                                        placeholder="เขียนข้อความของคุณที่นี่..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-strategic-gold text-void-navy font-semibold rounded-md hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>กำลังส่ง...</>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            ส่งข้อความ
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <footer className="text-ink-muted text-sm mt-16 text-center">
                        <p>© 2026 Lt.Gen. Krich Intratip, Ph.D. All rights reserved.</p>
                        <p className="mt-2 text-xs text-ink-muted/70">
                            Version 2.1.0 · Last updated: 20 June 2026
                        </p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
