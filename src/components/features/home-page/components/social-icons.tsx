
import React from "react";
import { MailIcon, FacebookIcon } from "lucide-react";
import {
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const socialLinks: { name: React.ReactElement, path: string }[] = [
    {
        name: <GitHubLogoIcon className=" w-8 h-8" />,
        path: "https://github.com/frckbrice"
    }, {
        name: <LinkedInLogoIcon className=" w-8 h-8" />,
        path: "https://www.linkedin.com/in/avombrice/"
    }, {
        name: <FacebookIcon className=" w-8 h-8" />,
        path: "https://www.facebook.com/maebriebrie/"
    },
    {
        name: <MailIcon className=" w-8 h-8" />,
        path: "mailto:bricefrkc@gmail.com"
    }
];
