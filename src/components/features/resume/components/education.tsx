
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
    );
}
