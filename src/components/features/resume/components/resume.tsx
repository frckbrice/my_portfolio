'use client';
// libraries
import * as React from 'react';

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { motion } from 'framer-motion';

export interface IResumeProps {
  Skills(): React.JSX.Element;
  Experience: () => React.JSX.Element;
  AboutMe(): React.JSX.Element;
  Education: () => React.JSX.Element;
}

export function Resume({
  Skills,
  Experience,
  AboutMe,
  Education,
}: IResumeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: 'easeIn' },
      }}
      className="min-h-screen flex items-start justify-center py-16 xl:py-20 pb-32"
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                        My <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text ">Resume</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-muted-foreground text-lg xl:text-xl leading-relaxed">
                            Explore my professional journey, skills, education, and personal information in an interactive format.
                        </p>
                    </div>
                </motion.div> */}

        <Tabs
          defaultValue="Experience"
          className="w-full flex flex-col xl:flex-row gap-10 xl:gap-16"
        >
          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="xl:w-80"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4 xl:gap-6 h-fit bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl">
              <TabsTrigger
                value={'Experience'}
                className="w-full h-16 text-lg font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground hover:bg-accent/20 transition-all duration-300 rounded-xl"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value={'Skills'}
                className="w-full h-16 text-lg font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground hover:bg-accent/20 transition-all duration-300 rounded-xl"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value={'Education'}
                className="w-full h-16 text-lg font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground hover:bg-accent/20 transition-all duration-300 rounded-xl"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value={'About Me'}
                className="w-full h-16 text-lg font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground hover:bg-accent/20 transition-all duration-300 rounded-xl"
              >
                About Me
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1 min-h-[60vh]"
          >
            <TabsContent value={'Experience'} className="w-full mt-0">
              <Experience />
            </TabsContent>
            <TabsContent value={'Skills'} className="w-full mt-0">
              <Skills />
            </TabsContent>
            <TabsContent value={'Education'} className="w-full mt-0">
              <Education />
            </TabsContent>
            <TabsContent value={'About Me'} className="w-full mt-0">
              <AboutMe />
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </motion.div>
  );
}
