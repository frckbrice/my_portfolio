'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export interface IPageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: IPageTransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div className=" " key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className=" h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
