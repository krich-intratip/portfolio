'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Send } from 'lucide-react';
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

        // Simulate form submission (replace with actual API call)
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
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                        สนใจในการพัฒนาองค์กรด้วยเทคโนโลยี AI หรือต้องการที่ปรึกษาด้าน Knowledge Management? <br className="hidden md:block" />
                        ติดต่อเพื่อพูดคุยแลกเปลี่ยนวิสัยทัศน์
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <a
                            href="mailto:krich.intratip@gmail.com"
                            className="flex flex-col items-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-sky-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-300 mb-1">Email</h3>
                            <p className="text-sky-400 font-medium">krich.intratip@gmail.com</p>
                        </a>

                        <a
                            href="tel:0616329956"
                            className="flex flex-col items-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-green-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-300 mb-1">Phone</h3>
                            <p className="text-green-400 font-medium">061-632-9956</p>
                        </a>

                        <a
                            href="https://github.com/krich-intratip"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-purple-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                <Github size={24} />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-300 mb-1">GitHub</h3>
                            <p className="text-purple-400 font-medium">@krich-intratip</p>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-2xl mx-auto mt-16"
                    >
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                                    ✓ ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                            ชื่อ-นามสกุล *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                        หัวข้อ *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                        placeholder="สนใจบริการให้คำปรึกษา"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        ข้อความ *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                                        placeholder="เขียนข้อความของคุณที่นี่..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-sky-400 hover:to-indigo-400 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin">⏳</span>
                                            กำลังส่ง...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            ส่งข้อความ
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <footer className="text-slate-600 text-sm mt-16">
                        <p>© 2026 Dr. Krich Intratip. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
