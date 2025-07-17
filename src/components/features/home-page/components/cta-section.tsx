'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="py-20 gradient-primary"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Ready to Build Something{' '}
            <span className="text-accent">Amazing?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Let's collaborate to bring your ideas to life. Whether you need a
            new website, mobile app, or complex software solution, I'm here to
            help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5" />
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/work-experience"
                className="inline-flex items-center gap-3 px-8 py-4 bg-card/50 text-foreground font-semibold rounded-lg border border-border hover:bg-card hover:border-accent/50 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5" />
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">
                Available for Consultation
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-accent mb-2">Fast</div>
              <div className="text-muted-foreground">Response Time</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-accent mb-2">Quality</div>
              <div className="text-muted-foreground">Guaranteed</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
