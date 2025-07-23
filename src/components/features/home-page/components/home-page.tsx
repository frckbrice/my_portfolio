import React from 'react';

export interface IHomepageProps {
  Socials: () => React.ReactElement;
  Photos: () => React.ReactElement;
  Stats: () => React.ReactElement;
  TrustedCompanies: () => React.ReactElement;
  TechHighlights: () => React.ReactElement;
  Achievements: () => React.ReactElement;
  SEOAccessibilityPerformance: () => React.ReactElement;
  PortfolioShowcase: () => React.ReactElement;
  CTASection: () => React.ReactElement;
  CVDownload: () => React.ReactElement;
}

export function Homepage({
  Socials,
  Photos,
  Stats,
  TrustedCompanies,
  TechHighlights,
  Achievements,
  SEOAccessibilityPerformance,
  PortfolioShowcase,
  CTASection,
  CVDownload,
}: IHomepageProps) {
  return (
    <>
      <section className="w-full mb-10">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between ">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <div className="text-[24px] sm:text-3xl xl:text-4xl font-semibold mb-6 ">
                Hello! I'm <br />
                <span className="text-accent">AVOM Brice</span>
                <h3 className="sm:hidden font-medium text-[24px] sm:text-3xl xl:text-4xl">
                  Full-Stack Software Engineer
                </h3>
              </div>
              <p className="text-justify max-w-[500px] mb-6 sm:mb-8 text-muted-foreground pb-4">
                Passionate full-stack developer with expertise in modern web
                technologies. I specialize in building scalable,
                high-performance applications using JavaScript/TypeScript,
                React, React-native, angular2, Node.js, and cloud technologies.
                Let's turn your ideas into exceptional digital experiences.
              </p>
              {/* button and socials */}
              <div className=" flex flex-col gap-6 xl:flex-row items-center">
                <CVDownload />
                <div className="">
                  <Socials />
                </div>
              </div>
            </div>
            {/* image */}
            <div className="order-1 xl:order-none mb-6 xl:mb-0">
              <Photos />
            </div>
          </div>
          <h3 className="hidden sm:block text-accent font-medium text-[24px] sm:text-3xl xl:text-4xl">
            Full-Stack Software Engineer
          </h3>
        </div>
        {/* statistiques */}
        <Stats />
      </section>
      {/* Technical Highlights Section */}
      <div className="pt-8 xl:pt-20">
        <TechHighlights />
      </div>
      {/* Achievements Section */}
      <div className="pt-8 xl:pt-20">
        <Achievements />
      </div>
      {/* SEO, Accessibility & Performance Section */}
      <div className="pt-8 xl:pt-20">
        <SEOAccessibilityPerformance />
      </div>
      {/* Portfolio Showcase Section */}
      <div className="pt-8 xl:pt-20">
        <PortfolioShowcase />
      </div>
      {/* Trusted Companies Section */}
      <div className="pt-8 xl:pt-20">
        <TrustedCompanies />
      </div>
      {/* Call to Action Section */}
      <div className="pt-8 xl:pt-20">
        <CTASection />
      </div>
    </>
  );
}
