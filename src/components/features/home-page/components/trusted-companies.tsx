'use client'

import React from 'react';

const companyLogos = [
    {
        src: "https://www.impots.cm/sites/default/files/taxation/logo-dgt-dgi.png",
        alt: "DGI Cameroon"
    },
    {
        src: "https://z-p3-scontent.fnsi2-1.fna.fbcdn.net/v/t39.30808-1/276131093_286050277025802_3991452716001276532_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeGsK_l6R-m8dHG01ppItP48LvqUN8r5p18u-pQ3yvmnXw-xoS12T02va3GDweqcjzCaGTbNYmWSvVXTvXvKFabB&_nc_ohc=vyMADiaHQPoQ7kNvwEWBsuu&_nc_oc=AdkheFtvY_hCFk63c5m79z3qhaS7DPxGL9oD6aa1tWSzQ3AgWqvN6WUkZB3FgcBH_o8&_nc_zt=24&_nc_ht=z-p3-scontent.fnsi2-1.fna&_nc_gid=Ftw94N91g-qo4pCSo-2Ncg&oh=00_AfTTwribvLDJAakE3nwZPIQJ8IQSf9CFiAhPf-A5CG39vg&oe=688011B5",
        alt: "DRES-MINAS"
    },
    {
        src: "https://senimacompany.com/PIC/logo2.png",
        alt: "Senima Company"
    },
    {
        src: "https://www.minfopra.gov.cm/images/logotexte262.80.png",
        alt: "MINFOPRA"
    },
    {
        src: "https://www.minesec.gov.cm/img/favicon-96x96.png",
        alt: "MINSEC"
    },
    {
        src: "https://www.rebasecodecamp.com/_next/static/media/Rebase%20logo%20(1).b14b6efb.svg",
        alt: "Rebase Code Camp"
    }
];

function TrustedCompanies() {
    return (
        <section className="w-full py-12 bg-background/80">
            <div className="container mx-auto flex flex-col items-center">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                    Trusted by <span className="text-accent">these companies</span>
                </h3>
                <div className="relative w-full overflow-x-hidden">
                    <div className="flex items-center gap-12 animate-scroll-x whitespace-nowrap hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
                        {companyLogos.concat(companyLogos).map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 flex items-center justify-center h-32 w-56 md:h-40 md:w-72 bg-white/95 rounded-xl shadow-lg border border-border overflow-hidden"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="object-contain h-48 w-48"
                                    loading="lazy"
                                    draggable={false}
                                    style={{ background: 'white' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll-x {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-x {
                    animation: scroll-x linear infinite;
                }
            `}</style>
        </section>
    );
}

export { TrustedCompanies }; 