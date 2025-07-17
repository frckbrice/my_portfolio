'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 p-0 border-border bg-card/50"
      >
        <div className="w-4 h-4" />
      </Button>
    );
  }

  const handleThemeChange = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeChange}
      className="w-10 h-10 p-0 border-border bg-card/50 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 relative overflow-hidden group"
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <SunIcon
        className={`h-4 w-4 transition-all duration-300 ${
          resolvedTheme === 'dark'
            ? 'rotate-0 scale-100 text-yellow-400'
            : 'rotate-90 scale-0 text-muted-foreground'
        }`}
      />
      <MoonIcon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          resolvedTheme === 'dark'
            ? 'rotate-90 scale-0 text-muted-foreground'
            : 'rotate-0 scale-100 text-blue-400'
        }`}
      />

      {/* Ripple effect */}
      <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
    </Button>
  );
}
