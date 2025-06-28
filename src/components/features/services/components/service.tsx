"use client";

// libraries
import * as React from 'react';
import { motion } from "framer-motion";
import {
    ArrowBottomRightIcon
} from "@radix-ui/react-icons"

// types
import { ServiceType } from '../api/type';
import Link from 'next/link';

// Component to highlight tech stack keywords
const HighlightedDescription = ({ description }: { description: string }) => {
    const techKeywords = [
        'React', 'Next.js', "Angular", 'TypeScript', 'JavaScript', 'Node.js',
        'Express', 'NestJS', 'React Native', 'PostgreSQL', 'MongoDB',
        'MySQL', 'API', 'REST', 'GraphQL', 'Drizzle-ORM', 'Prisma', 'Mongoose', 'Sequelize', 'Supabase', 'Firebase', 'Vercel', 'AWS S3', 'Cloudinary'
        , 'RESFull-API', 'AWS S3', 'FCM', 'APN', 'PlayStore', 'AppStore', 'React Native', 'Expo', 'React Native', 'NextJs'
    ];

    // Split by word boundaries to handle punctuation properly
    const words = description.split(/\b/);

    return (
        <p className='text-muted-foreground'>
            {words.map((word, index) => {
                const isKeyword = techKeywords.some(keyword =>
                    word.toLowerCase() === keyword.toLowerCase()
                );

                if (isKeyword) {
                    return (
                        <span key={index} className='text-accent font-medium'>
                            {word}
                        </span>
                    );
                }
                return word;
            })}
        </p>
    );
};

export interface IServicesProps {
    services: ServiceType[]
}

export function Services({ services }: IServicesProps) {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-4'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.2, duration: 0.6, ease: "easeIn" }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map(({ title, description, href, num }, index) => (
                        <div key={index} className='flex-1 flex flex-col justify-center gap-5 group'>
                            {/* top */}
                            <div className='w-full flex justify-between items-center'>
                                <div
                                    className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                    {num}
                                </div>
                                <Link href={href}
                                    className='w-[70px] h-[70px] rounded-full bg-card border border-border group-hover:bg-accent group-hover:border-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                                >
                                    <ArrowBottomRightIcon className='text-foreground group-hover:text-background text-3xl' />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className='text-2xl font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500'>{title}</h2>
                            {/* description */}
                            <HighlightedDescription description={description} />
                            {/* border */}
                            <div className='border-b border-border w-full'></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
