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

                            <Experience />
                        </TabsContent>
                        <TabsContent value={'Skills'} className=' w-full h-full'>

                            <Skills />
                        </TabsContent>
                        <TabsContent value={'Education'} className=' w-full '>

                            <Education />
                        </TabsContent>

                        <TabsContent value={'About Me'} className=' w-full text-center xl:text-left'>
                            <AboutMe />
                        </TabsContent>

                    </div>

                </Tabs>
            </div>
        </motion.div>
    );
}
