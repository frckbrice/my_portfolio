import React from "react";
import { Homepage } from "./home-page";
import { Socials } from "./socials";
import { socialLinks } from "./social-icons";
import { Photos } from "./photo";
import { Stats } from "./stats";
import { stats } from "../api/data";


export function SocialInterface() {
    return <Socials
        containerStyles="flex gap-6"
        iconStyle=" border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-white hover:text-primary hover:transition-all duration-500 p-2"
        socials={socialLinks}
    />
}

export function StatsInterface() {
    return <Stats
        statData={stats}
    />
}

export function HomepageInterface() {
    return <Homepage
        Socials={SocialInterface}
        Photos={Photos}
        Stats={StatsInterface}
    />
}
