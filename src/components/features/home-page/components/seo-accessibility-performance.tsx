'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  Accessibility,
  Zap,
  Globe,
  Eye,
  Gauge,
  Shield,
  Smartphone,
  Code,
  CheckCircle,
} from 'lucide-react';

const seoFeatures = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Search Engine Optimization',
    description:
      'Comprehensive SEO implementation with Next.js metadata API, structured data, and performance optimization for better search rankings.',
    features: [
      'Next.js Metadata API implementation',
      'Open Graph & Twitter Cards',
      'Structured data for rich snippets',
      'XML sitemap generation',
      'Robots.txt optimization',
      'Canonical URLs management',
    ],
  },
  {
    icon: <Accessibility className="w-6 h-6" />,
    title: 'Web Accessibility',
    description:
      'WCAG AA compliant design with semantic HTML, ARIA labels, keyboard navigation, and screen reader support for inclusive user experience.',
    features: [
      'Semantic HTML structure',
      'ARIA labels and roles',
      'Keyboard navigation support',
      'Focus management',
      'High contrast compliance',
      'Screen reader compatibility',
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance Optimization',
    description:
      'Lightning-fast performance with SSR, Core Web Vitals optimization, and modern web technologies for exceptional user experience.',
    features: [
      'Server-Side Rendering (SSR)',
      'Core Web Vitals optimization',
      'Image and font optimization',
      'Code splitting and lazy loading',
      'Performance monitoring',
      'Mobile-first responsive design',
    ],
  },
];

const technicalHighlights = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'SEO Expertise',
    items: [
      'Meta tags optimization',
      'Keyword research & placement',
      'Local SEO implementation',
      'Technical SEO audits',
    ],
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Accessibility Standards',
    items: [
      'WCAG 2.1 AA compliance',
      'Semantic markup',
      'Color contrast optimization',
      'Mobile accessibility',
    ],
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: 'Performance Metrics',
    items: ['LCP < 2.5s', 'FID < 100ms', 'CLS < 0.1', 'TTI < 3.5s'],
  },
];

export function SEOAccessibilityPerformance() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="sm:py-10 xl:py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-10 xl:mb-16"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Modern Web <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-justify xl:text-center">
            This portfolio demonstrates advanced expertise in SEO,
            accessibility, and performance optimization - the three pillars of
            modern web development that ensure your digital presence reaches its
            full potential.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {seoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-300 h-full theme-transition">
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical <span className="text-accent">Highlights</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {highlight.title}
                </h4>
                <ul className="space-y-2">
                  {highlight.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-12"
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build Something{' '}
              <span className="text-accent">Amazing?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let me help you create websites and applications that not only
              look great but also perform exceptionally, rank well in search
              engines, and are accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/work-experience"
                  className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  View My Work
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-card/50 text-foreground font-semibold rounded-lg border border-border hover:bg-card hover:border-accent/50 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
