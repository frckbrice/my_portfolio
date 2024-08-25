import Link from 'next/link';
import * as React from 'react';

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
    return (
        <footer className='w-full'>
            <div className=' container mx-auto h-[20vh] flex justify-center items-center gap-5'>
                <span>  &copy; 2024. Avom brice.</span>
                <Link href={"/contact"} className=' text-accent '>contact Me</Link>
            </div>
        </footer>
    );
}
