import Link from 'next/link';
import * as React from 'react';

type SocialsProps = {
    containerStyles: string;
    iconStyle: string;
    socials: {
        name: React.ReactElement;
        path: string;
    }[]
}


export function Socials({ containerStyles, iconStyle, socials }: SocialsProps) {
    return (
        <div className={containerStyles}>
            {socials.map(({ name, path }, index) => (
                <Link
                    href={path}
                    key={index}
                    target='_blank'
                    className={iconStyle}
                >
                    {name}
                </Link>
            ))}
        </div>
    );
}
