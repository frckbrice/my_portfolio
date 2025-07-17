// libraries
import * as React from 'react';

// component;
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface ILinkToProjectProps {
  link: string;
  title: string;
  className: string;
  children: React.ReactNode;
}

export function ImportantLinks({
  link,
  title,
  className,
  children,
}: ILinkToProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full h-full flex justify-center items-center">
            {children}
          </TooltipTrigger>
          <TooltipContent>
            <p className=" capitalize text-xl">{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </a>
  );
}
