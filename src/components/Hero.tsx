'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16" aria-label="Hero section">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),rgba(15,23,42,0)_50%)]" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Profile Image Ring */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-40 h-40 mx-auto mb-8 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-pink-500 shadow-2xl shadow-sky-500/20"
                >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-800">
                        <Image
                            src="/assets/mypic.jpg"
                            alt="พล.ท.ดร.กริช อินทราทิพย์ - Knowledge Manager & AI Implementation Specialist"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Name & Title */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h2 className="text-sky-400 font-medium tracking-wider mb-4 uppercase text-sm">
                        Professional Portfolio
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
                        พล.ท.ดร.กริช อินทราทิพย์
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mb-6" />
                </motion.div>

                {/* Role Description */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="max-w-2xl mx-auto space-y-4"
                >
                    <h3 className="text-xl md:text-2xl text-slate-300 font-light">
                        Knowledge Manager & <span className="text-sky-300 font-medium">AI Implementation Specialist</span>
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                        ผู้เชี่ยวชาญด้าน Assessment Systems, การบูรณาการ AI เพื่อการตัดสินใจเชิงกลยุทธ์
                        และประสบการณ์กว่า 20 ปีในการพัฒนาระบบป้องกันประเทศ
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/25 transition-all transform hover:-translate-y-1"
                    >
                        View Projects
                    </a>
                    <a
                        href="/assets/📊 Professional Portfolio 2026.pdf"
                        download
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-400 hover:to-purple-400 hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-medium hover:bg-slate-700 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
}
