"use client";

// System Components
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// data
import { links } from '../../../global/share-data/data';
import { cn } from '@/lib/utils';
import { MobileLinkType } from '@/components/global/type/type';


export interface INavProps {
    links: MobileLinkType[]
}

export function Nav({ links }: INavProps) {

    const pathName = usePathname();

    return (
        <nav className=' flex gap-8'>
            {links.map(({ name, path, icon }) => (
                <Link
                    href={path}
                    key={name}
                    className={cn(
                        "text-2xl font-semibold",
                        pathName === path ? "text-accent border-b-2 border-accent" : "",
                        "font-medium hover:text-accent transition-all")}
                    aria-current={pathName === path ? "page" : undefined}
                >
                    {name}
                </Link>))}
        </nav>
    );
}
