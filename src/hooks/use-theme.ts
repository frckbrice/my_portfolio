'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const isDark = resolvedTheme === 'dark';
  const isLight = resolvedTheme === 'light';

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    mounted,
    isDark,
    isLight,
  };
}

export function useThemeClasses() {
  const { isDark, isLight } = useThemeMode();

  return {
    // Background classes
    bgPrimary: 'bg-background',
    bgSecondary: 'bg-muted',
    bgCard: 'bg-card',
    bgAccent: 'bg-accent',

    // Text classes
    textPrimary: 'text-foreground',
    textSecondary: 'text-muted-foreground',
    textAccent: 'text-accent',

    // Border classes
    borderPrimary: 'border-border',
    borderAccent: 'border-accent',

    // Glass morphism
    glass: isDark
      ? 'bg-black/10 backdrop-blur-sm border border-black/20'
      : 'bg-white/10 backdrop-blur-sm border border-white/20',

    // Hover states
    hoverCard: 'hover:bg-card/80',
    hoverAccent: 'hover:bg-accent/20',

    // Transitions
    transition: 'transition-all duration-300 ease-in-out',
  };
}
