
// libraries
import * as React from 'react';

import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip";


// type
import { ExperienceType } from '../api/type';


export interface IskillsProps {
    skills: Partial<ExperienceType>;
}

export function Skills({ skills, }: IskillsProps) {
    return (

        <div className=' flex flex-col gap-[30px]'>
            {/* <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className=' text-4xl font-bold'>{skills.title}</h3>
                <p className=' max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{skills.description}</p>
            </div> */}
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
    );
}
