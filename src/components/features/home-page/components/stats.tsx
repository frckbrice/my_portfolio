"use client";

import clsx from 'clsx';
// libraries
import * as React from 'react';
import CountUp from "react-countup";

export interface IStatsProps {
    statData: {
        num: number | string;
        text: string;
    }[]
}

export function Stats({ statData }: IStatsProps) {

    return (<section className='pt-4 pb-12 xl:pt-24 xl:pb-0'>
        <div className=' container mx-auto '>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:mx-w-none'>
                {statData.map(({ num, text }, index) => (
                    <div key={index} className=' flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                        <CountUp end={
                            typeof num === 'string' ? Number(num.toString().split('+')[0]) : num
                        } duration={5} delay={2} className=' text-4xl xl:text-6xl font-extrabold mb-4 '
                        />
                        <p className={clsx(text.length < 16 ? "max-w-[100px] xl:max-w-[200px]" : "max-w-[150px]", "leading-snug text-accent")}>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>)
}
