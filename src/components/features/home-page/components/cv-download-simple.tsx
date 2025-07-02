"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { motion } from '@/lib/framer-motion';

interface CVDownloadSimpleProps {
    filename?: string;
}

export function CVDownloadSimple({ filename = 'Brice_AVOM_CV.pdf' }: CVDownloadSimpleProps) {
    const downloadCV = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = `/${filename}`;
        link.download = filename;
        link.target = '_blank';

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center"
        >
            <Button
                onClick={downloadCV}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold group"
            >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Download CV
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
        </motion.div>
    );
} 