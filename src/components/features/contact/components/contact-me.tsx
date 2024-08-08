"use client";

// lib
import * as React from 'react';
import {
    motion
} from "framer-motion";

import {
    Button
} from "@/components/ui/button";
import {
    Input
} from "@/components/ui/input";
import {
    Textarea
} from "@/components/ui/textarea";

// components
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from "@/components/ui/select";

// component


// local type
import { ContactType, InputType } from '../api/type';

export interface IContactProps {
    infos: ContactType[];
    inputs: InputType[];
}



export function Contact({ infos, inputs }: IContactProps) {


    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className=' py-6'
        >
            <div className=' container mx-auto'>
                <div className=' flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className=' xl:h-[50%] order-2 xl:order-none'>
                        <form className=' flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' >
                            <h3 className=' text-4xl text-accent'> Let's work together</h3>
                            <p className='text-white/60'>
                                deserunt cum eveniet corporis perferendis, mollitia, necessitatibus fugit. Nisi, cum ipsam eligendi reiciendis nobis iusto.
                            </p>
                            {/* input */}
                            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 '>
                                {inputs.map(({ placeholder, type }, index) => (
                                    <Input key={index} type={type} placeholder={placeholder} />
                                ))}
                            </div>
                            {/* select */}
                            <SelectServices />
                            {/* textArea */}
                            <Textarea
                                placeholder='Type your message here...'
                                className=' w-full h-[200px] border border-white/10 rounded-md p-5'
                            />

                            {/* button */}
                            <Button
                                size={"md"}
                                type='submit'
                                className=' max-w-40'
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className=' flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className=' flex flex-col gap-10'>
                            {infos.map((info, index) => (
                                <li key={index} className=' flex items-center gap-6'>
                                    <div className=' w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] 
                                    bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                        <div className=' text-[28px]'>{info.icon}</div>
                                    </div>
                                    <div className=' flex-1'>
                                        <div className=' text-white/60'>{info.title}</div>
                                        <div className=' text-xl'>{info.description}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

// Select services 

function SelectServices() {
    return <Select>
        <SelectTrigger className=' w-full'>
            <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value='programming '>TypeScript & Node.js Programming</SelectItem>
                <SelectItem value='mobile-dev '>Mobile Delopment</SelectItem>
                <SelectItem value='web-frontend '>Web Delopment - FrontEnd</SelectItem>
                <SelectItem value='web-backend '>Web Delopment - BackEnd</SelectItem>
                <SelectItem value='fullstack-dev '>Full-Stack Delopment</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
}
