// libraries
import * as React from 'react';
import { motion } from 'framer-motion';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// type
import { ExperienceType } from '../api/type';

export interface IskillsProps {
  skills: Partial<ExperienceType>;
}

export function Skills({ skills }: IskillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* Header Section */}
      <div className="text-center xl:text-left space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl xl:text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight"
        >
          {skills.title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full  xl:mx-0 "
        >
          <p className="text-muted-foreground text-lg xl:text-xl leading-relaxed text-center xl:text-left">
            {skills.description}
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-8"
      >
        {skills.skillsList?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
            className="group"
          >
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full aspect-square bg-card/50 backdrop-blur-sm border border-border rounded-2xl flex flex-col justify-center items-center gap-4 p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group-hover:scale-105">
                  <div className="text-5xl xl:text-6xl text-foreground group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-sm xl:text-base font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                      {item.name}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-card border border-border shadow-lg p-4"
                >
                  <div className="text-center space-y-2">
                    <p className="text-lg font-bold text-foreground">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="text-sm text-muted-foreground max-w-48 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
