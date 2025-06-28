// libraries
import * as React from 'react';

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
        <div className='flex flex-col gap-7 text-center xl:text-left'>
            <h3 className='text-4xl font-bold text-foreground'>{education.title}</h3>
            <p className='text-muted-foreground max-w-[600px] mx-auto xl:mx-0'>{education.description}</p>
            <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {
                        education.items.map((item: Partial<ResumeInputType>, index: number) => (
                            <li key={index} className='bg-card/50 backdrop-blur-sm border border-border min-h-[200px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 hover:border-accent/50 transition-all duration-300'>
                                <span className='text-accent font-medium text-sm'>{item.duration}</span>
                                <h3 className='text-2xl xl:text-3xl max-w-[280px] min-h-[60px] text-center lg:text-left text-foreground leading-tight'>{item.degree}</h3>
                                <div className='flex items-center gap-3'>
                                    <span className='w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0'></span>
                                    <p className='text-muted-foreground text-sm xl:text-base'>{item.institution}</p>
                                </div>
                            </li>
                        ))}
                </ul>
            </ScrollArea>
        </div>
    );
}
