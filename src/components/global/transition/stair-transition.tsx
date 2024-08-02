"use client";

// Local framework libraries
import * as React from 'react';
import { usePathname } from 'next/navigation';

// import lib
import { AnimatePresence, motion } from "framer-motion";


interface StairsProps {
    Stairs(): JSX.Element;
}

export function StairTransion({ Stairs }: StairsProps) {

    const pathname = usePathname()
    return (
        <>
            <AnimatePresence mode='wait'>
                <div className=' ' key={pathname}>
                    <div className=' h-screen w-screen z-40   fixed  left-0 right-0 top-0 pointer-events-none flex'>
                        <Stairs />
                    </div>

                    <motion.div
                        className=' h-screen w-screen fixed bg-primary top-0 
                        pointer-events-none'
                        initial={{ opacity: 1, }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 1, duration: .4, ease: "easeInOut" }
                        }}

                    />
                </div>
            </AnimatePresence>
        </>
    );
}
