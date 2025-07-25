'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { motion } from '@/lib/framer-motion';

interface CVCheckResponse {
  exists: boolean;
  filename?: string;
  size?: number;
  error?: string;
}

export function SmartCVDownload() {
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);
  const [cvFilename, setCvFilename] = useState<string>('');

  useEffect(() => {
    const checkCVExists = async () => {
      try {
        const response = await fetch('/api/cv-check');
        const data: CVCheckResponse = await response.json();

        if (data.exists && data.filename) {
          setPdfExists(true);
          setCvFilename(data.filename);
        } else {
          setPdfExists(false);
        }
      } catch (error) {
        console.error('Error checking for CV files:', error);
        setPdfExists(false);
      }
    };

    checkCVExists();
  }, []);

  const downloadCV = () => {
    if (cvFilename) {
      // Create a link element for direct download
      const link = document.createElement('a');
      link.href = `/${cvFilename}`;
      link.download = cvFilename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback to dynamic CV generation
      const cvWindow = window.open('/', '_blank');
    }
  };

  // Show loading state while checking
  if (pdfExists === null) {
    return (
      <div className="flex justify-center">
        <div className="animate-pulse bg-muted rounded-lg p-4 w-48 h-12"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-center">
        <Button
          onClick={downloadCV}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold group"
        >
          <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Download CV
          <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        {pdfExists ? (
          'Direct download available'
        ) : (
          <>
            <p className="mt-6 text-center font-bold text-accent blink-animation">
              Go back to home page to download the CV
            </p>
            <style jsx>{`
              .blink-animation {
                animation: blink 3s steps(2, start) infinite;
              }
              @keyframes blink {
                to {
                  visibility: hidden;
                }
              }
            `}</style>
          </>
        )}
      </p>
    </motion.div>
  );
}
