'use client';

import { m } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <m.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-ink-primary">
        {title}
      </h2>
      <div className="h-px w-12 bg-strategic-gold mx-auto mb-5" />
      {subtitle && (
        <p className="text-ink-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </m.div>
  );
}
