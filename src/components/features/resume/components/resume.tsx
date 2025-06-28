'use client';
// libraries
import * as React from 'react';

// components
import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";

import {
    motion
} from "framer-motion";

export interface IResumeProps {
    Skills(): React.JSX.Element;
    Experience: () => React.JSX.Element;
    AboutMe(): React.JSX.Element;
    Education: () => React.JSX.Element;
}

export function Resume({ Skills, Experience, AboutMe, Education }: IResumeProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.6, ease: "easeIn" }
            }}
            className='min-h-screen flex items-start justify-center py-16 xl:py-20 pb-32'
        >
            <div className='container mx-auto px-4'>
                <Tabs defaultValue="Experience" className="w-full flex flex-col xl:flex-row gap-8 xl:gap-12">
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4 xl:gap-6 h-fit'>
                        <TabsTrigger value={'Experience'}>Experience</TabsTrigger>
                        <TabsTrigger value={'Skills'}>Skills</TabsTrigger>
                        <TabsTrigger value={'Education'}>Education</TabsTrigger>
                        <TabsTrigger value={'About Me'}>About Me</TabsTrigger>
                    </TabsList>

                    <div className='w-full min-h-[60vh]'>
                        <TabsContent value={'Experience'} className='w-full mt-0'>
                            <Experience />
                        </TabsContent>
                        <TabsContent value={'Skills'} className='w-full mt-0'>
                            <Skills />
                        </TabsContent>
                        <TabsContent value={'Education'} className='w-full mt-0'>
                            <Education />
                        </TabsContent>
                        <TabsContent value={'About Me'} className='w-full mt-0 text-center xl:text-left'>
                            <AboutMe />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}
