'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  Shield,
  Users,
  Globe,
  Smartphone,
  Database,
  Cpu,
} from 'lucide-react';

const techHighlights = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Clean Code Expert',
    description:
      'Writing maintainable, scalable code with best practices and design patterns',
    color: 'text-blue-400',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Performance Optimizer',
    description:
      'Optimizing applications for speed, efficiency, and user experience',
    color: 'text-yellow-400',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Security-First Approach',
    description: 'Implementing robust security measures and best practices',
    color: 'text-green-400',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Collaborator',
    description: 'Leading development teams and mentoring junior developers',
    color: 'text-purple-400',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Full-Stack Mastery',
    description: 'End-to-end development from database design to deployment',
    color: 'text-cyan-400',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile & Web',
    description:
      'Cross-platform development for iOS, Android, and web applications',
    color: 'text-pink-400',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database Architect',
    description:
      'Designing efficient database schemas and data management systems',
    color: 'text-orange-400',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Problem Solver',
    description: 'Analytical thinking to solve complex technical challenges',
    color: 'text-red-400',
  },
];

export function TechHighlights() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="py-20 bg-gradient-to-b from-transparent to-muted/20 dark:to-muted/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Combining deep technical expertise with creative problem-solving to
            deliver exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 h-full theme-transition">
                <div
                  className={`${highlight.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
