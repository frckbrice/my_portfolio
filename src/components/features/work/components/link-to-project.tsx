"use client"

// lib
import * as React from 'react';
import Link from 'next/link';
// component;
import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

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
                        <p>{title}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </Link>
    );
}
