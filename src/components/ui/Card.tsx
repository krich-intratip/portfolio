'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Card({ children, delay = 0, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}
