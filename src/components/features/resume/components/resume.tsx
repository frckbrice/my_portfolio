"use client";

// libraries
import * as React from 'react';

// components
import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip";
import {
    ScrollArea, ScrollBar
} from "@/components/ui/scroll-area";
import {
    motion
} from "framer-motion";

// type
import { ExperienceType, ResumeInputType, EducationType, ExperienceTypi } from '../api/type';


export interface IResumeProps {
    skills: Partial<ExperienceType>;
    experience: Partial<ExperienceType> & {
        items: Partial<ResumeInputType>[];
    };
    aboutMe: Partial<ExperienceType>;
    education: ExperienceTypi;
}

export function Resume({ skills, experience, aboutMe, education }: IResumeProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className=' min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className=' container mx-auto'>
                <Tabs defaultValue="Experience" className="w-full flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className=' flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>

                        <TabsTrigger value={'Experience'}>Experience</TabsTrigger>
                        <TabsTrigger value={'Skills'}>Skills</TabsTrigger>

                        <TabsTrigger value={'Education'}>Education</TabsTrigger>
                        <TabsTrigger value={'About Me'}>About Me</TabsTrigger>
                    </TabsList>

                    <div className=' w-full max-h-[70vh] '>
                        <TabsContent value={'Experience'} className=' w-full '>
                            <div className=' flex flex-col gap-7 text-center xl:text-left'>
                                <h3 className=' text-4xl font-bold'>{experience.title}</h3>
                                <p className=' text-white/60 max-w-[600px] mx-auto xl:mx-0 '>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {
                                            experience.items.map((item, index) => (
                                                <li key={index} className='bg-[#232329] h-[186px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                    <span className=' text-accent'>{item.duration}</span>
                                                    <h3 className=' text-3xl max-w-[260p] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className=' flex items-center gap-3 '>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className=' text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value={'Skills'} className=' w-full h-full'>
                            <div className=' flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className=' text-4xl font-bold'>{skills.title}</h3>
                                    <p className=' max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{skills.description}</p>
                                </div>
                                <ul className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillsList?.map((item, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className=' w-full h-[150px] bg-[#232329] flex justify-center items-center rounded-xl group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300 '>
                                                            {item.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className=' text-xl font-bold'>{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value={'Education'} className=' w-full '>
                            <div className=' flex flex-col gap-7 text-center xl:text-left'>
                                <h3 className=' text-4xl font-bold'>{education.title}</h3>
                                <p className=' text-white/60 max-w-[600px] mx-auto xl:mx-0 '>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {
                                            education.items.map((item: Partial<ResumeInputType>, index: number) => (
                                                <li key={index} className='bg-[#232329] h-[186px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                    <span className=' text-accent'>{item.duration}</span>
                                                    <h3 className=' text-3xl max-w-[260p] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className=' flex items-center gap-3 '>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className=' text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value={'About Me'} className=' w-full text-center xl:text-left'>
                            <div className=' flex flex-col gap-7 '>
                                <h3 className=' text-4xl font-bold'>{aboutMe.title}</h3>
                                <p className=' max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{aboutMe.description}</p>
                                <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[30px] gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {aboutMe.info?.map((item, index) => (
                                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4 '>
                                            <span className=' text-white/60'>{item.fieldName} </span>
                                            <span className=' text-xl'> {item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>

                </Tabs>
            </div>
        </motion.div>
    );
}
