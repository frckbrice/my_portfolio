'use client';

import clsx from 'clsx';
// libraries
import * as React from 'react';
import CountUp from 'react-countup';

export interface IStatsProps {
  statData: {
    num: number | string;
    text: string;
  }[];
}

export function Stats({ statData }: IStatsProps) {
  return (
    <section className="py-10 xl:py-20">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-2 gap-4 max-w-[90vw] mx-auto xl:mx-w-none xl:flex xl:flex-row xl:flex-wrap xl:gap-6"
        >
          {statData.map(({ num, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-card/70 backdrop-blur-sm rounded-2xl shadow-md p-4 sm:p-6 transition-all duration-300 xl:bg-transparent xl:shadow-none xl:p-0 flex-1 xl:flex-row xl:gap-4 xl:items-center xl:justify-start"
            >
              <CountUp
                end={
                  typeof num === 'string'
                    ? Number(num.toString().split('+')[0])
                    : num
                }
                duration={5}
                delay={2}
                className="text-3xl sm:text-4xl xl:text-6xl font-extrabold mb-2 xl:mb-4"
              />
              <p
                className={clsx(
                  text.length < 16
                    ? 'max-w-[100px] xl:max-w-[200px]'
                    : 'max-w-[150px]',
                  'leading-snug text-accent text-center xl:text-left text-justify'
                )}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
