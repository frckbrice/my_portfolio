import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { ModeToggle, Nav } from '..';

export interface IHeaderProps {
    Nav: () => React.ReactElement,
    ModeToggle: () => React.ReactElement,
}

export function Header({ Nav, ModeToggle }: IHeaderProps) {
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
                            <Button variant={"secondary"} className=' font-semibold'>Hire me</Button>
                        </h1>
                    </Link>

                    {/* mobile nav */}
                    <div className=' xl:hidden'>
                        {/* <MobileNav /> */}
                    </div>

                    {/* change theme to be set later */}
                    {/* <ModeToggle /> */}


                </div>
            </div>
        </header>
    );
}
