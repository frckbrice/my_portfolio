"use client";

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LucideMenu } from "lucide-react";

// componets
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileLinkType } from '@/components/global/type/type';
import { cn } from '@/lib/utils';



export interface IMobileNavProps {
    links: MobileLinkType[];
}

export function MobileNav({ links }: IMobileNavProps) {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild className=' flex justify-center items-center'>
                <LucideMenu className=' size-10 text-accent cursor-pointer' />
            </SheetTrigger>
            <SheetContent className=' flex flex-col gap-8' >
                {/* logo */}
                <div className=' text-3xl text-center mb-40 mt-32'>
                    <Link href={"/"}>
                        <h1 className=' text-4xl font-semibold '>
                            AVOM <span className=' text-accent '>Brice</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <div className=' flex flex-col gap-8 justify-center items-center'>
                    {links.map(({ name, path }) => (
                        <Link
                            href={path}
                            key={name}
                            className={cn(
                                "text-2xl font-semibold capitalize",
                                pathname === path ? "text-accent border-b-2 border-accent" : "",
                                "font-medium hover:text-accent transition-all")}
                            aria-current={pathname === path ? "page" : undefined}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
