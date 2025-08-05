'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Circle,
  Video,
  Coffee,
  Music,
  Clock,
  Box,
  Target,
  Bot,
  BookOpen,
  Smartphone,
  Heart,
  Cloud,
  Palette,
  Gamepad2,
} from 'lucide-react';
import { MobileIcon } from '@radix-ui/react-icons';

interface Hobby {
  name: string;
  icon: React.ReactElement;
  color: string;
  description: string;
}

const hobbies: Hobby[] = [
  {
    name: 'Web Development',
    icon: <Monitor className="w-6 h-6" />,
    color: 'text-blue-400',
    description: 'Building modern web applications',
  },
  {
    name: 'Linux',
    icon: <Circle className="w-6 h-6" />,
    color: 'text-green-400',
    description: 'Open source enthusiast',
  },
  {
    name: 'Cinema',
    icon: <Video className="w-6 h-6" />,
    color: 'text-purple-400',
    description: 'Film and storytelling lover',
  },
  {
    name: 'Coffee',
    icon: <Coffee className="w-6 h-6" />,
    color: 'text-orange-400',
    description: 'Caffeine-fueled creativity',
  },
  {
    name: 'Mobile Development',
    icon: <MobileIcon className="w-6 h-6" />,
    color: 'text-pink-400',
    description: 'Cross-platform mobile apps',
  },
  {
    name: 'Cloud Computing',
    icon: <Cloud className="w-6 h-6" />,
    color: 'text-cyan-400',
    description: 'Scalable cloud solutions',
  },
  {
    name: 'Designing',
    icon: <Palette className="w-6 h-6" />,
    color: 'text-yellow-400',
    description: 'Creative UI/UX design',
  },
  {
    name: 'Gaming',
    icon: <Gamepad2 className="w-6 h-6" />,
    color: 'text-red-400',
    description: 'Interactive entertainment',
  },
  {
    name: 'Reading',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'text-indigo-400',
    description: 'Knowledge and learning',
  },
  {
    name: 'Sports',
    icon: <Target className="w-6 h-6" />,
    color: 'text-emerald-400',
    description: 'Fitness and wellness',
  },
  {
    name: 'Music',
    icon: <Music className="w-6 h-6" />,
    color: 'text-violet-400',
    description: 'Rhythm and melodies',
  },
  {
    name: 'Other Activities',
    icon: <Heart className="w-6 h-6" />,
    color: 'text-rose-400',
    description: 'Exploring new interests',
  },
];

export function HobbiesInterests() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full py-16 bg-gradient-to-b from-transparent to-muted/20 dark:to-muted/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10 xl:mb-16"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Hobbies & <span className="text-accent">Interests</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-justify xl:text-center">
            Beyond coding, I enjoy exploring various activities that fuel
            creativity and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 h-full theme-transition hover:shadow-lg hover:shadow-accent/10">
                <div
                  className={`${hobby.color} mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}
                >
                  {hobby.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 text-center">
                  {hobby.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
