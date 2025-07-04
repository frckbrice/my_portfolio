import React from "react";
// components
import { TechHighlights } from './tech-highlights';
import { Achievements } from './achievements';
import { CTASection } from './cta-section';
import { SEOAccessibilityPerformance } from './seo-accessibility-performance';
import { PortfolioShowcase } from './portfolio-showcase';
import { CVDownload } from './cv-download';

export interface IHomepageProps {
    Socials: () => React.ReactElement;
    Photos: () => React.ReactElement;
    Stats: () => React.ReactElement;
}

export function Homepage({ Socials, Photos, Stats }: IHomepageProps) {
    return (
        <>
            <section className=' w-full'>
                <div className=' container mx-auto h-full'>
                    <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8:pb-24'>
                        {/* text */}
                        <div className=' text-center xl:text-left order-2 xl:order-none'>
                            <span className="text-accent font-medium">Full-Stack Software Engineer</span>
                            <h1 className=' h1 mb-6 '>Hello! I'm <br />
                                <span className=' text-accent'>AVOM Brice</span>
                            </h1>
                            <p className=' max-w-[500px] mb-9 text-muted-foreground'>
                                Passionate full-stack developer with expertise in modern web technologies. I specialize in building scalable, high-performance applications using JavaScript/TypeScript, React, React-native, angular2, Node.js, and cloud technologies. Let's turn your ideas into exceptional digital experiences.
                            </p>
                            {/* button and socials */}
                            <div className='flex flex-col gap-8 xl:flex-row items-center'>
                                <CVDownload />
                                <div className='mb-8 xl:mb-0'>
                                    <Socials />
                                </div>
                            </div>
                        </div>
                        {/* image */}
                        <div className=" order-1 xl:order-none mb-8 xl:mb-0">
                            <Photos />
                        </div>
                    </div>
                </div>
                {/* statistiques */}
                <Stats />
            </section>

            {/* Technical Highlights Section */}
            <TechHighlights />

            {/* Achievements Section */}
            <Achievements />

            {/* SEO, Accessibility & Performance Section */}
            <SEOAccessibilityPerformance />

            {/* Portfolio Showcase Section */}
            <PortfolioShowcase />

            {/* Call to Action Section */}
            <CTASection />
        </>
    );
}
