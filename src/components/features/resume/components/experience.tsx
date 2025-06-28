// libraries
import * as React from 'react';

import {
    ScrollArea
} from "@/components/ui/scroll-area";
// type
import { ExperienceType, ResumeInputType, } from '../api/type';


export interface IExperienceProps {
    experience: Partial<ExperienceType> & {
        items: Partial<ResumeInputType>[];
    };
}

export function Experience({ experience, }: IExperienceProps) {
    return (
        <div className='flex flex-col gap-7 text-center xl:text-left'>
            <h3 className='text-4xl font-bold text-foreground'>{experience.title}</h3>
            <p className='text-muted-foreground w-full mx-auto xl:mx-0'>{experience.description}</p>
            <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {
                        experience.items.map((item, index) => (
                            <li key={index} className='bg-card/50 backdrop-blur-sm border border-border h-[186px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:border-accent/50 transition-all duration-300'>
                                <span className='text-accent font-medium'>{item.duration}</span>
                                <h3 className='text-3xl max-w-[260px] min-h-[60px] text-center lg:text-left text-foreground'>{item.position}</h3>
                                <div className='flex items-center gap-3'>
                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                    <p className='text-muted-foreground'>{item.company}</p>
                                </div>
                            </li>
                        ))}
                </ul>
            </ScrollArea>
        </div>
    );
}
