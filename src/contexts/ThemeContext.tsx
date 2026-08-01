'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_EVENT = 'portfolio-theme-change';
const getServerThemeSnapshot = (): Theme => 'dark';

const getThemeSnapshot = (): Theme => {
  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const subscribeToTheme = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  const notify = () => onStoreChange();

  window.addEventListener('storage', notify);
  window.addEventListener(THEME_EVENT, notify);
  mediaQuery.addEventListener('change', notify);

  return () => {
    window.removeEventListener('storage', notify);
    window.removeEventListener(THEME_EVENT, notify);
    mediaQuery.removeEventListener('change', notify);
  };
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values during SSR instead of throwing error
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {},
    };
  }
  return context;
}
