'use client';

import { m } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Card({ children, delay = 0, className = '' }: CardProps) {
  return (
    <m.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`bg-deep-surface p-8 rounded-[14px] border border-subtle-border hover:bg-elevated-surface hover:border-strategic-gold/30 transition-all ${className}`}
    >
      {children}
    </m.div>
  );
}
