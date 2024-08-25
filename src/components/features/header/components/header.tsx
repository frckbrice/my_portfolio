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
        <header className=' py-8 xl:py-12 text-white '>
            <div className=' container mx-auto flex items-center justify-between '>
                {/* Logo */}
                <Link href={"/"}>
                    <h1 className=' text-4xl font-semibold'>
                        AVOM <span className=' text-accent '>Brice</span>
                    </h1>
                </Link>

                {/* Menu and Hire me button */}
                <div className=' hidden xl:flex items-center gap-8'>
                    <Nav />
                    <Link href={"/contact"}>
                        <h1 className=' text-4xl '>
                            <Button className=' font-semibold'>Hire me</Button>
                        </h1>
                    </Link>

                    {/* mobile nav */}
                    <div className=' xl:hidden '>
                        <MobileNav />
                    </div>

                    {/*TODO: change theme to be set later */}
                    {/* <ModeToggle /> */}
                </div>

            </div>
        </header>
    );
}
