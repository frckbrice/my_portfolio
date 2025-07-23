'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Search,
  Accessibility,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  Palette,
} from 'lucide-react';
import Link from 'next/link';

const portfolioFeatures = [
  {
    category: 'SEO Implementation',
    icon: <Search className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    features: [
      'Next.js Metadata API with comprehensive meta tags',
      'Open Graph & Twitter Cards for social sharing',
      'Structured data for rich search snippets',
      'XML sitemap and robots.txt optimization',
      'Canonical URLs to prevent duplicate content',
      'Performance optimization for Core Web Vitals',
    ],
  },
  {
    category: 'Accessibility Features',
    icon: <Accessibility className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    features: [
      'Semantic HTML with proper heading hierarchy',
      'ARIA labels and roles for screen readers',
      'Keyboard navigation with focus management',
      'High contrast color scheme (WCAG AA compliant)',
      'Dark/light mode with proper contrast ratios',
      'Mobile-responsive touch targets (44px minimum)',
    ],
  },
  {
    category: 'Performance Optimization',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    features: [
      'Server-Side Rendering (SSR) for fast first paint',
      'Font preloading and optimization',
      'Image optimization with Next.js Image component',
      'Code splitting and lazy loading',
      'Performance monitoring and Core Web Vitals',
      'Mobile-first responsive design',
    ],
  },
];

const technicalSpecs = [
  {
    title: 'SEO Score',
    value: '95+',
    description: 'Lighthouse SEO audit',
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: 'Accessibility Score',
    value: '98+',
    description: 'WCAG 2.1 AA compliant',
    icon: <Accessibility className="w-5 h-5" />,
  },
  {
    title: 'Performance Score',
    value: '90+',
    description: 'Core Web Vitals optimized',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: 'Best Practices',
    value: '100',
    description: 'Modern web standards',
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

export function PortfolioShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="sm:py-10 xl:py-20 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mb-10 xl:mb-16"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
            This Portfolio <span className="text-accent">Demonstrates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-justify xl:text-left">
            Every aspect of this portfolio showcases real-world implementation
            of modern web development best practices. From SEO optimization to
            accessibility compliance and performance excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {portfolioFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-accent/50 transition-all duration-300 h-full theme-transition">
                <div
                  className={`${feature.bgColor} ${feature.color} p-4 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300 inline-block`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.category}
                </h3>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20 mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical <span className="text-accent">Specifications</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-accent mb-3 flex justify-center">
                  {spec.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {spec.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {spec.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {spec.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Live Demo Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Try These <span className="text-accent">Features</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">
                Theme Toggle
              </h4>
              <p className="text-sm text-muted-foreground">
                Switch between dark and light modes
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Smartphone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">
                Responsive Design
              </h4>
              <p className="text-sm text-muted-foreground">
                Optimized for all devices
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Monitor className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">
                Fast Loading
              </h4>
              <p className="text-sm text-muted-foreground">
                Optimized performance
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Palette className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">
                Accessible UI
              </h4>
              <p className="text-sm text-muted-foreground">
                Keyboard navigation ready
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/frckbrice/my_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-accent text-primary font-bold shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 group text-lg"
            style={{ minWidth: 220 }}
          >
            <span className="mr-1">Explore the code on GitHub</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
