// libraries
import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

import {
    ScrollArea,
} from "@/components/ui/scroll-area";

// type
import { ExperienceTypi, ResumeInputType } from '../api/type';

export interface IEducationProps {
    education: ExperienceTypi;
}

export function Education({ education }: IEducationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-10'
        >
            {/* Header Section */}
            <div className='text-center xl:text-left space-y-6'>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='text-4xl xl:text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight'
                >
                    {education.title}
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className='w-full  xl:mx-0 max-w-[768px]'
                >
                    <p className='text-muted-foreground text-lg xl:text-xl leading-relaxed text-center xl:text-left'>
                        {education.description}
                    </p>
                </motion.div>
            </div>

            {/* Education Cards */}
            <ScrollArea className='h-[500px] xl:h-[600px] pr-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {education.items.map((item: Partial<ResumeInputType>, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            className='group relative'
                        >
                            <div className='bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 xl:p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group-hover:scale-[1.02] h-full'>
                                <div className='flex flex-col h-full'>
                                    {/* Header with Icon */}
                                    <div className='flex items-start gap-6 mb-6'>
                                        <div className='w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex-shrink-0'>
                                            <GraduationCap className='w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300' />
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='text-2xl xl:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight mb-3'>
                                                {item.degree}
                                            </h3>
                                            <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground'>
                                                <div className='flex items-center gap-3'>
                                                    <Calendar className='w-4 h-4 text-accent' />
                                                    <span className='font-semibold text-foreground'>{item.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Institution */}
                                    <div className='flex items-center gap-3 mb-6'>
                                        <div className='w-2 h-2 rounded-full bg-accent flex-shrink-0'></div>
                                        <p className='text-muted-foreground font-semibold text-lg'>{item.institution}</p>
                                    </div>

                                    {/* Description */}
                                    {item.description && (
                                        <div className='flex-1'>
                                            <p className='text-muted-foreground leading-relaxed text-base xl:text-lg'>
                                                {item.description}
                                            </p>
                                        </div>
                                    )}

                                    {/* Additional Info if available */}
                                    {item.fieldName && item.fieldValue && (
                                        <div className='mt-6 pt-6 border-t border-border/50'>
                                            <div className='flex items-center gap-3 text-base'>
                                                <span className='text-foreground font-semibold'>{item.fieldName}:</span>
                                                <span className='text-muted-foreground'>{item.fieldValue}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </ScrollArea>
        </motion.div>
    );
}
