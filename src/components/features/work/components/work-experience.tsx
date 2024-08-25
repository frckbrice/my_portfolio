"use client";

// lbraries
import * as React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from 'next/image';



// type
import { WorkType } from '../api/type';
import { ILinkToProjectProps } from './important-links';

export interface IWorkProps {
    works: WorkType[];
    WorkSliderBtns: () => React.JSX.Element;
    ImportantLinks({ link, title, className, children }: ILinkToProjectProps): React.JSX.Element;
}

export function Work({ works, WorkSliderBtns, ImportantLinks }: IWorkProps) {

    const [project, setProject] = React.useState<WorkType>(works[0]);

    const handleSlideChange = (swiper: any) => {
        // get current slide index
        const currentIndex = swiper.realIndex;
        // update current project
        setProject(works[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className=' min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className="container mx-auto">
                <div className=' flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className=' w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className=' flex flex-col gap-[30px] h-[50%]'>


                            {/* outline num */}
                            <div className=' text-5xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            <h2 className=' text-[42px] font-bold leading-none text-white
                             group-hover:text-accent transition-all 
                        duration-500  capitalize '>{project.category} project</h2>
                            <p className='text-[20px] font-bold leading-none text-white
                             group-hover:text-accent transition-all 
                        duration-500  capitalize '> <span className=' text-accent '>Title:</span> &nbsp;{project.title} </p>

                            {/* project description */}
                            <p className=' text-white/60 '>{project.description}</p>

                            {/* stack */}
                            <ul className=' flex gap-4 flex-wrap'>
                                {project.stack.map((item, index) => (
                                    <li key={index}
                                        className=' text-xl text-accent'
                                    >
                                        {item.name}
                                        {/* remove the last comma */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className=' border border-white/20 '></div>
                            {/* button */}
                            <div className=' flex items-center gap-4 '>
                                {/* live project */}

                                {project.live ? <ImportantLinks
                                    className=' w-[70px] h-[70px] rounded-full 
                                    bg-white/5 flex justify-center  items-center group
                                    '
                                    link={project.live}
                                    title='live project' >
                                    <BsArrowUpRight className=' text-3xl text-white group-hover:text-accent' />
                                </ImportantLinks> : null}
                                {/* github */}

                                <ImportantLinks
                                    className=' w-[70px] h-[70px] rounded-full 
                                        bg-white/5 flex justify-center  items-center group'
                                    link={project.github}
                                    title='Github project' >
                                    <BsGithub className=' text-3xl text-white group-hover:text-accent' />
                                </ImportantLinks>
                            </div>

                        </div>
                    </div>
                    <div className=' w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            className=' xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {works.map((work, index) => (
                                <SwiperSlide key={index} className=' w-full'>
                                    <div className=' h-[460px] relative group flex  justify-center items-center  bg-pink-50/20 '>
                                        {/* overlay */}
                                        <div className=' absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                                        {/* image */}
                                        <div className=' relative w-full h-full'>
                                            <Image
                                                src={work.image}
                                                alt={""}
                                                width={700}
                                                height={400}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* swiper button: because we have use the hook useSwiper, the slide is no more working, but instead the button has taken the relay */}
                            <WorkSliderBtns />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

