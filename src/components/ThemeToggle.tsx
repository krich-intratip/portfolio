'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-subtle-border bg-deep-surface p-2 transition-colors hover:border-strategic-gold/30 hover:bg-elevated-surface"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-strategic-gold" />
      ) : (
        <Moon size={20} className="text-strategic-gold" />
      )}
    </button>
  );
}
