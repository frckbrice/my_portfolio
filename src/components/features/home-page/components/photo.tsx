'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface IPhotosProps {}

export function Photos() {
  return (
    <div className=" w-full h-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className=" w-[298px] h-[298px]
                     xl:w-[498px] xl:h-[498px]
                     mix-blend-plus-darker absolute
                     "
        >
          <Image
            src="/assets/images/moi_4-.png"
            alt="avom brice"
            className="object-cover rounded-full border-none"
            fill
            quality={100}
            priority
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          fill="transparent"
          transition={{ delay: 2.4, duration: 0.4, ease: 'easeInOut' }}
          viewBox={'0 0 506 506'}
          xmlns={'http://www.w3.org/2000/svg'}
          className=" w-[300px] h-[300px]
                     xl:w-[506px] xl:h-[506px] relative
                     "
        >
          <motion.circle
            cx="253"
            cy="253"
            r="300"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            initial={{ strokeDasharray: '24 10 0 0' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', ' 4 250 22 22'],
              rotate: [120, 360],
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
