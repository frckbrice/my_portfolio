'use client';

// lbraries
import * as React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import { useRef } from 'react';
import { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

// type
import { WorkType } from '../api/type';
import { ILinkToProjectProps } from './important-links';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';

export interface IWorkProps {
  works: WorkType[];
  WorkSliderBtns: () => React.JSX.Element;
  ImportantLinks({
    link,
    title,
    className,
    children,
  }: ILinkToProjectProps): React.JSX.Element;
}

export function Work({ works, WorkSliderBtns, ImportantLinks }: IWorkProps) {
    // Track the current project index
    const [projectIndex, setProjectIndex] = useState(0);
    // Track current image index for each project
    const [imageIndexes, setImageIndexes] = useState<number[]>(
        works.map(() => 0)
    );

    // Project navigation handlers
    const handlePrevProject = () => {
        setProjectIndex(prev => (prev - 1 + works.length) % works.length);
  };
    const handleNextProject = () => {
        setProjectIndex(prev => (prev + 1) % works.length);
    };

    // Custom image carousel handlers
    const handlePrevImage = () => {
        setImageIndexes(prev => {
            const newIndexes = [...prev];
            const imagesLength = works[projectIndex].images.length;
            newIndexes[projectIndex] =
                (newIndexes[projectIndex] - 1 + imagesLength) % imagesLength;
            return newIndexes;
        });
    };
    const handleNextImage = () => {
        setImageIndexes(prev => {
            const newIndexes = [...prev];
            const imagesLength = works[projectIndex].images.length;
            newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % imagesLength;
            return newIndexes;
        });
    };

    const project = works[projectIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.6,
          ease: 'easeIn',
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  {/* Left: Project Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-[20px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 capitalize">
                <span className="text-accent">Title:</span> &nbsp;
                {project.title}
              </p>

              {/* project description */}
              <p className="text-muted-foreground">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              {/* Topics */}
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-3 py-1
                                             bg-green-500/20
                                              text-green-900 
                                              text-sm 
                                              rounded-full 
                                              font-medium
                                              border
                                               border-green-500/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* border */}
              <div className="border border-border"></div>
              {/* button */}
              <div className="space-y-3 p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg border border-accent/20 w-fit">
                <p className="text-sm text-accent font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Project Links:
                </p>
                <div className="flex items-center gap-6">
                  {/* live project */}

                  {project.live ? (
                    <motion.div
                      className="flex flex-col items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <ImportantLinks
                        className="w-[70px] h-[70px] rounded-full bg-card/50 border border-border flex justify-center items-center group hover:bg-accent/20 transition-all duration-300 hover:scale-105 hover:border-accent/50 relative cursor-pointer hover:shadow-lg hover:shadow-accent/20"
                        link={project.live}
                        title="View Live Demo"
                      >
                        <BsArrowUpRight className="text-3xl text-foreground group-hover:text-accent" />
                      </ImportantLinks>
                      {/* <span className='text-xs text-muted-foreground font-medium'>Live Demo</span> */}
                      <span className="text-[12px] text-green-700/70">
                        Click to view ↗
                      </span>
                    </motion.div>
                  ) : null}
                  {/* github */}

                  <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                  >
                    <ImportantLinks
                      className="w-[70px] h-[70px] rounded-full bg-card/50 border border-border flex justify-center items-center group hover:bg-accent/20 transition-all duration-300 hover:scale-105 hover:border-accent/50 relative cursor-pointer hover:shadow-lg hover:shadow-accent/20"
                      link={project.github}
                      title="View Source Code"
                    >
                      <BsGithub className="text-3xl text-foreground group-hover:text-accent" />
                    </ImportantLinks>
                    {/* <span className='text-xs text-muted-foreground font-medium'>Source Code</span> */}
                    <span className="text-[12px] text-green-700/70">
                      Click to view ↗
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
                  {/* Right: Project Images Carousel */}
          <div className="w-full xl:w-[50%]">
                      <div className="xl:h-[520px] mb-12 relative flex flex-col items-center">
                          {/* Image carousel for current project */}
                          <div className="h-[460px] w-full relative group flex justify-center items-center bg-card/20 border border-border rounded-lg overflow-hidden">
                              {/* overlay */}
                              <div className="absolute top-0 bottom-0 w-full h-full bg-background/10 z-10"></div>
                              {/* custom image carousel */}
                              <div className="relative w-full h-full flex items-center justify-center">
                                  {/* Left arrow for images */}
                                  {project.images.length > 1 && (
                                      <button
                                          className="absolute left-2 z-20 text-accent bg-card/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent/80 hover:text-white transition top-1/2 -translate-y-1/2 cursor-pointer"
                                          onClick={handlePrevImage}
                                          aria-label="Previous image"
                                      >
                                          <PiCaretLeftBold className="text-2xl" />
                                      </button>
                                  )}
                                  {/* Image */}
                                  <div className="w-full h-full flex items-center justify-center">
                                      <Image
                                          src={project.images[imageIndexes[projectIndex]]}
                                          alt={project.title + ' image ' + (imageIndexes[projectIndex] + 1)}
                                          width={700}
                                          height={400}
                                          className="object-contain w-full h-full max-h-[420px] max-w-full rounded-lg"
                                      />
                                  </div>
                                  {/* Right arrow for images */}
                                  {project.images.length > 1 && (
                                      <button
                                          className="absolute right-2 z-20 text-accent bg-card/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent/80 hover:text-white transition top-1/2 -translate-y-1/2 cursor-pointer"
                                          onClick={handleNextImage}
                                          aria-label="Next image"
                                      >
                                          <PiCaretRightBold className="text-2xl" />
                                      </button>
                                  )}
                                  {/* Image indicators */}
                                  {project.images.length > 1 && (
                                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                          {project.images.map((_, dotIdx) => (
                                              <button
                                                  key={dotIdx}
                                                  className={`w-2 h-2 rounded-full transition border border-accent ${imageIndexes[projectIndex] === dotIdx
                                                      ? 'bg-accent'
                                                      : 'bg-card/70'
                                                      }`}
                                                  onClick={() =>
                                                      setImageIndexes(prev => {
                                                          const newIndexes = [...prev];
                                                          newIndexes[projectIndex] = dotIdx;
                                                          return newIndexes;
                                                      })
                                                  }
                                                  aria-label={`Go to image ${dotIdx + 1}`}
                                              />
                                          ))}
                                      </div>
                                  )}
                              </div>
                          </div>
                          {/* Project navigation arrows below the card */}
                          <div className="flex gap-4 mt-6 justify-center items-center">
                              <button
                                  className="bg-accent hover:bg-accent/80 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md shadow-md"
                                  onClick={handlePrevProject}
                                  aria-label="Previous project"
                              >
                                  <PiCaretLeftBold />
                              </button>
                              <button
                                  className="bg-accent hover:bg-accent/80 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md shadow-md"
                                  onClick={handleNextProject}
                                  aria-label="Next project"
                              >
                                  <PiCaretRightBold />
                              </button>
                          </div>
                      </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
