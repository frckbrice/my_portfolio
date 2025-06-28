// libraries
import * as React from 'react';

// type
import { ExperienceType, } from '../api/type';


export interface IAboutProps {
    aboutMe: Partial<ExperienceType>;
}

export function About({ aboutMe }: IAboutProps) {
    return (
        <div className=' flex flex-col gap-7 '>
            <h3 className=' text-4xl font-bold text-foreground'>{aboutMe.title}</h3>
            <p className=' max-w-[600px] text-muted-foreground mx-auto xl:mx-0 '>{aboutMe.description}</p>
            <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[30px] gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {aboutMe.info?.map((item, index) => (
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4 '>
                        <span className=' text-muted-foreground'>{item.fieldName} </span>
                        <span className=' text-xl text-foreground'> {item.fieldValue}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
