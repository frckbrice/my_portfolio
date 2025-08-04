'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-12 h-12" />,
    number: '25+',
    label: 'Projects Delivered',
    description: 'Successfully completed projects across various industries',
  },
  {
    icon: <Award className="w-12 h-12" />,
    number: '3+',
    label: 'Years Experience',
    description: 'Deep expertise in modern web and mobile technologies',
  },
  {
    icon: <Target className="w-12 h-12" />,
    number: '100%',
    label: 'Client Satisfaction',
    description: 'Consistent delivery of high-quality solutions',
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    number: '8+',
    label: 'Technologies Mastered',
    description: 'Proficient in cutting-edge development tools',
  },
];

export function Achievements() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="sm:py-10   "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Key <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-justify xl:text-center">
            Proven track record of delivering exceptional results and driving
            innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 theme-transition">
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {achievement.label}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
