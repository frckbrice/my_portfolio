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
  HobbiesInterests: () => React.ReactElement;
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
  HobbiesInterests,
}: IHomepageProps) {
  return (
    <>
      <section className="w-full mb-10">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between ">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="text-[24px] sm:text-3xl xl:text-4xl font-semibold mb-6">
                Hello! I'm <span className="text-accent">AVOM Brice</span>
                <span className="block sm:hidden font-medium text-[24px] sm:text-3xl xl:text-4xl">
                  <br />
                  Full-Stack Software Engineer
                </span>
              </h1>
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
        {/* <Stats /> */}
      </section>

      {/* Technical Highlights Section - Core Skills */}
      <TechHighlights />

      {/* Achievements Section - Quantified Results */}
      <Achievements />

      {/* Portfolio Showcase Section - Work Examples */}
      {/* <PortfolioShowcase /> */}

      {/* Trusted Companies Section - Social Proof */}
      {/* <TrustedCompanies /> */}

      {/* SEO, Accessibility & Performance Section - Additional Expertise */}
      <SEOAccessibilityPerformance />

      {/* Hobbies & Interests Section - Personality & Culture Fit */}
      <HobbiesInterests />

      {/* Call to Action Section - Contact & Next Steps */}
      <CTASection />
    </>
  );
}
