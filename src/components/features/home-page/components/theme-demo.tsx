"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeDemo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="bg-card/80 backdrop-blur-sm rounded-full p-2 border border-border shadow-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sun className="w-4 h-4" />
                    <span className="hidden sm:inline">Theme</span>
                    <Moon className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
} 