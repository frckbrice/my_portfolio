'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accessibility, X, Sun, Moon, Eye } from 'lucide-react';

const CONTRAST_CLASS = 'contrast-150';
const LARGE_FONT_CLASSES = ['text-lg', 'md:text-xl'];

export function AccessibilityFab() {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);

  // Apply accessibility classes to <body>
  React.useEffect(() => {
    const body = document.body;
    if (highContrast) {
      body.classList.add(CONTRAST_CLASS);
    } else {
      body.classList.remove(CONTRAST_CLASS);
    }
    if (largeFont) {
      LARGE_FONT_CLASSES.forEach(cls => body.classList.add(cls));
    } else {
      LARGE_FONT_CLASSES.forEach(cls => body.classList.remove(cls));
    }
    return () => {
      body.classList.remove(CONTRAST_CLASS);
      LARGE_FONT_CLASSES.forEach(cls => body.classList.remove(cls));
    };
  }, [highContrast, largeFont]);

  return (
    <div
      className="fixed z-50 bottom-6 
        right-6 flex flex-col items-end gap-2"
    >
      {/* Floating Action Button */}
      <Button
        aria-label={
          open ? 'Close accessibility panel' : 'Open accessibility panel'
        }
        variant="primary"
        size="icon"
        className="shadow-lg bg-accent text-accent-foreground hover:bg-accent/80 focus-visible:ring-2 focus-visible:ring-accent"
        onClick={() => setOpen(v => !v)}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <Accessibility className="w-6 h-6" />
        )}
      </Button>
      {/* Accessibility Panel */}
      {open && (
        <div
          className="w-64 p-4 rounded-2xl border border-border bg-background shadow-xl flex flex-col gap-4 animate-fade-in theme-transition"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
            minWidth: 220,
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center gap-2 mb-2">
            <Accessibility className="w-5 h-5 text-accent" />
            <span className="font-bold text-foreground">Accessibility</span>
          </div>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors w-full text-left ${highContrast ? 'bg-accent/20 text-accent' : 'hover:bg-accent/10'}`}
            onClick={() => setHighContrast(v => !v)}
            aria-pressed={highContrast}
          >
            <Eye className="w-4 h-4" />
            <span>High Contrast</span>
            {highContrast && <span className="ml-auto text-xs">On</span>}
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors w-full text-left ${largeFont ? 'bg-accent/20 text-accent' : 'hover:bg-accent/10'}`}
            onClick={() => setLargeFont(v => !v)}
            aria-pressed={largeFont}
          >
            <Sun className="w-4 h-4" />
            <span>Large Font</span>
            {largeFont && <span className="ml-auto text-xs">On</span>}
          </button>
          <div className="text-xs text-muted-foreground mt-2">
            <span>All settings auto-adapt to theme and device.</span>
          </div>
        </div>
      )}
    </div>
  );
}
