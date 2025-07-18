'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={handleThemeChange}
            className="w-12 h-12 p-0 border-2 border-accent shadow-lg bg-gradient-to-br from-accent/80 to-accent/40 hover:from-accent/100 hover:to-accent/60 focus:ring-4 focus:ring-accent/40 transition-all duration-300 relative overflow-hidden group flex items-center justify-center"
            title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <SunIcon
              className={`h-6 w-6 transition-all duration-300 ${
                resolvedTheme === 'dark'
                  ? 'rotate-0 scale-100 text-yellow-400 drop-shadow-lg'
                  : 'rotate-90 scale-0 text-muted-foreground'
              }`}
            />
            <MoonIcon
              className={`absolute h-6 w-6 transition-all duration-300 ${
                resolvedTheme === 'dark'
                  ? 'rotate-90 scale-0 text-muted-foreground'
                  : 'rotate-0 scale-100 text-blue-400 drop-shadow-lg'
              }`}
            />
            {/* Glowing ring */}
            <span className="absolute inset-0 rounded-full ring-2 ring-accent/40 animate-pulse pointer-events-none" />
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          Switch to {resolvedTheme === 'dark' ? 'light' : 'dark'} mode
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
