// libraries
import * as React from 'react';

// component;
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import Link from 'next/link';

export interface ILinkToProjectProps {
    link: string;
    title: string;
    className: string;
    children: React.ReactNode
}

export function ImportantLinks({ link, title, className, children }: ILinkToProjectProps) {
    return (
        <Link href={link}>
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger className={className}>
                        {children}
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className=' capitalize text-xl'>{title}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </Link>
    );
}