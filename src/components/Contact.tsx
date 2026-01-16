'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
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

                    <footer className="text-slate-600 text-sm">
                        <p>© 2026 Ph.D. Krich Intratip. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
}
