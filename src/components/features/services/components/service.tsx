"use client";

// libraries
import * as React from 'react';
import { motion } from "framer-motion";
import {
    ArrowBottomRightIcon
} from "@radix-ui/react-icons"

// types
import { ServiceType } from '../api/type';
import Link from 'next/link';

export interface IServicesProps {
    services: ServiceType[]
}

export function Services({ services }: IServicesProps) {
    return (
        <section className=' min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className=' grid grid-cols-1 md:grid-cols-2 gap-[60px] '
                >
                    {services.map(({ title, description, href, num }, index) => (
                        <div key={index} className=' flex-1 flex flex-col justify-center
                        gap-5 group'>
                            {/* top */}
                            <div className=' w-full flex  justify-between items-center'>
                                <div
                                    className=' text-5xl  
                                    font-extrabold 
                                    text-outline 
                                    text-transparent 
                                    group-hover:text-outline-hover
                                    transition-all
                                duration-500
                                '>
                                    {num}
                                </div>
                                <Link href={href}
                                    className='w-[70px]
                                 h-[70px] 
                                 rounded-full 
                                  bg-white 
                                  group-hover:bg-accent
                                  transition-all
                                  duration-500
                                   flex 
                                  justify-center 
                                  items-center
                                  hover:-rotate-45
                                '
                                >
                                    <ArrowBottomRightIcon className=' text-primary text-3xl' />
                                </Link>
                            </div>
                            {/* tilte */}
                            <h2 className='text-11 font-bold leading-none text-white group-hover:text-accent 
                            transition-all duration-500 text-2xl'>{title}</h2>
                            {/* description */}
                            <p className=' text-white/60'>{description}</p>
                            {/* border */}
                            <div className=' border-b border-white/20 w-full '></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
