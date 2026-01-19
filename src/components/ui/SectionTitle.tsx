'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  gradient = "from-sky-400 to-indigo-400"
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
