// libraries
import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, ArrowRight, TrendingUp, Code, Award } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';
// type
import { ExperienceType, ResumeInputType } from '../api/type';

export interface IExperienceProps {
  experience: Partial<ExperienceType> & {
    items: Partial<ResumeInputType>[];
  };
}

export function Experience({ experience }: IExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-10 "
    >
      {/* Header Section */}
      <div className="text-center xl:text-left space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl xl:text-5xl font-bold
           text-foreground bg-gradient-to-r 
           from-foreground to-muted-foreground 
           bg-clip-text  leading-tight"
        >
          {experience.title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full  xl:mx-0"
        >
          <p
            className="text-muted-foreground text-lg 
          sm:text-xl leading-relaxed  
          sm:text-left text-justify px-4"
          >
            {experience.description}
          </p>
        </motion.div>
      </div>

      {/* Experience Cards */}
      <ScrollArea className="h-[500px] xl:h-[800px] pr-4">
        <div className="space-y-8">
          {experience.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Timeline connector */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-transparent"></div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 xl:p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex flex-col xl:flex-row xl:items-start gap-6 xl:gap-8">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                      <h3 className="text-2xl xl:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                        {item.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <Building2 className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-foreground">
                            {item.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span className="font-medium">{item.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description if available */}
                    {item.description && (
                      <div className="pt-2">
                        <p className="text-muted-foreground leading-relaxed text-base xl:text-md text-justify">
                          {item.description}
                        </p>
                      </div>
                    )}

                    {/* Business Impact Section */}
                    {item.businessImpact && item.businessImpact.length > 0 && (
                      <div className="pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                          <h4 className="text-lg font-semibold text-foreground">Business Impact</h4>
                        </div>
                        <ul className="space-y-2">
                          {item.businessImpact.map((impact, impactIndex) => (
                            <li key={impactIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {impact}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Section */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-blue-500" />
                          <h4 className="text-lg font-semibold text-foreground">Technologies</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Achievements Section */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-5 h-5 text-yellow-500" />
                          <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <span
                              key={achievementIndex}
                              className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/20"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  {/* <div className="hidden xl:flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  );
}
