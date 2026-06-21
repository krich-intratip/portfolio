'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-md bg-deep-surface border border-subtle-border hover:bg-elevated-surface hover:border-strategic-gold/30 transition-all"
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
