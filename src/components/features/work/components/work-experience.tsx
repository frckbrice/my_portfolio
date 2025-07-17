"use client";

// lbraries
import * as React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from 'next/image';
import { useRef } from 'react';


// type
import { WorkType } from '../api/type';
import { ILinkToProjectProps } from './important-links';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';

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
                    delay: 0.2, duration: 0.6, ease: "easeIn"
                }
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>


                            {/* outline num */}
                            <div className='text-5xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.category} project
                            </h2>
                            <p className='text-[20px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 capitalize'>
                                <span className='text-accent'>Title:</span> &nbsp;{project.title}
                            </p>

                            {/* project description */}
                            <p className='text-muted-foreground'>{project.description}</p>

                            {/* stack */}
                            <ul className='flex gap-4 flex-wrap'>
                                {project.stack.map((item, index) => (
                                    <li key={index}
                                        className='text-xl text-accent'
                                    >
                                        {item.name}
                                        {/* remove the last comma */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>

                            {/* Topics */}
                            {project.topics && project.topics.length > 0 && (
                                <div className='flex flex-wrap gap-2'>
                                    {project.topics.map((topic, topicIndex) => (
                                        <span
                                            key={topicIndex}
                                            className='px-3 py-1
                                             bg-green-500/20
                                              text-green-900 
                                              text-sm 
                                              rounded-full 
                                              font-medium
                                              border
                                               border-green-500/30'
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* border */}
                            <div className='border border-border'></div>
                            {/* button */}
                            <div className='space-y-3 p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg border border-accent/20 w-fit'>
                                <p className='text-sm text-accent font-semibold flex items-center gap-2'>
                                    <span className='w-2 h-2 bg-accent rounded-full'></span>
                                    Project Links:
                                </p>
                                <div className='flex items-center gap-6'>
                                    {/* live project */}

                                    {project.live ? <motion.div
                                        className='flex flex-col items-center gap-2'
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                    >
                                        <ImportantLinks
                                            className='w-[70px] h-[70px] rounded-full bg-card/50 border border-border flex justify-center items-center group hover:bg-accent/20 transition-all duration-300 hover:scale-105 hover:border-accent/50 relative cursor-pointer hover:shadow-lg hover:shadow-accent/20'
                                            link={project.live}
                                            title='View Live Demo'>
                                            <BsArrowUpRight className='text-3xl text-foreground group-hover:text-accent' />
                                        </ImportantLinks>
                                        {/* <span className='text-xs text-muted-foreground font-medium'>Live Demo</span> */}
                                        <span className='text-[12px] text-green-700/70'>Click to view ↗</span>
                                    </motion.div> : null}
                                    {/* github */}

                                    <motion.div
                                        className='flex flex-col items-center gap-2'
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.0, duration: 0.5 }}
                                    >
                                        <ImportantLinks
                                            className='w-[70px] h-[70px] rounded-full bg-card/50 border border-border flex justify-center items-center group hover:bg-accent/20 transition-all duration-300 hover:scale-105 hover:border-accent/50 relative cursor-pointer hover:shadow-lg hover:shadow-accent/20'
                                            link={project.github}
                                            title='View Source Code'>
                                            <BsGithub className='text-3xl text-foreground group-hover:text-accent' />
                                        </ImportantLinks>
                                        {/* <span className='text-xs text-muted-foreground font-medium'>Source Code</span> */}
                                        <span className='text-[12px] text-green-700/70'>Click to view ↗</span>
                                    </motion.div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {works.map((work, index) => {
                                // Unique refs for navigation buttons
                                const prevRef = useRef<HTMLDivElement>(null);
                                const nextRef = useRef<HTMLDivElement>(null);
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-card/20 border border-border rounded-lg overflow-hidden'>
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-background/10 z-10'></div>
                                            {/* images swiper */}
                                            <div className='relative w-full h-full'>
                                                <Swiper
                                                    spaceBetween={10}
                                                    slidesPerView={1}
                                                    loop={true}
                                                    pagination={{ clickable: true }}
                                                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                                                    onInit={(swiper) => {
                                                        // @ts-ignore
                                                        swiper.params.navigation.prevEl = prevRef.current;
                                                        // @ts-ignore
                                                        swiper.params.navigation.nextEl = nextRef.current;
                                                        swiper.navigation.init();
                                                        swiper.navigation.update();
                                                    }}
                                                    modules={[Navigation]}
                                                    className='w-full h-full image-swiper'
                                                >
                                                    {work.images.map((img, imgIdx) => (
                                                        <SwiperSlide key={imgIdx} className='w-full h-full flex items-center justify-center'>
                                                            <Image
                                                                src={img}
                                                                alt={work.title + ' image ' + (imgIdx + 1)}
                                                                width={700}
                                                                height={400}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        </SwiperSlide>
                                                    ))}
                                                    {/* Custom navigation arrows for this Swiper */}
                                                    <div ref={prevRef} className="swiper-button-prev !left-2 !z-20 !text-accent !bg-card/70 !rounded-full !w-10 !h-10 !flex !items-center !justify-center hover:!bg-accent/80 hover:!text-white transition absolute top-1/2 -translate-y-1/2 cursor-pointer" />
                                                    <div ref={nextRef} className="swiper-button-next !right-2 !z-20 !text-accent !bg-card/70 !rounded-full !w-10 !h-10 !flex !items-center !justify-center hover:!bg-accent/80 hover:!text-white transition absolute top-1/2 -translate-y-1/2 cursor-pointer" />
                                                </Swiper>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            {/* swiper button: because we have use the hook useSwiper, the slide is no more working, but instead the button has taken the relay */}
                            <WorkSliderBtns />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

