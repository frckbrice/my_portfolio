import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileLinkType } from '@/components/global/types/type';
// import { ModeToggle, Nav } from '..';

export interface IHeaderProps {
    Nav: () => React.ReactElement;
    ModeToggle: () => React.ReactElement;
    MobileNav: () => React.ReactElement;
    links: MobileLinkType[];
}

export function Header({ Nav, MobileNav }: IHeaderProps) {
    return (
        <header
            className='py-4 xl:py-6 text-foreground bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50'
            role="banner"
            aria-label="Main navigation"
        >
            <div className='container mx-auto flex items-center justify-between px-4'>
                {/* Logo */}
                <Link
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md transition-all duration-200"
                    aria-label="Go to homepage"
                >
                    <h1 className='text-3xl xl:text-4xl font-semibold hover:text-accent transition-colors duration-300'>
                        AVOM <span className='text-accent'>Brice</span>
                    </h1>
                </Link>

                {/* Navigation */}
                <nav
                    className='hidden xl:flex items-center gap-8'
                    role="navigation"
                    aria-label="Primary navigation"
                >
                    <Nav />

                    {/* Mobile nav */}
                    <div className='xl:hidden'>
                        <MobileNav />
                    </div>

                    {/*TODO: change theme to be set later */}
                    {/* <ModeToggle /> */}
                </nav>

            </div>
        </header>
    );
}
