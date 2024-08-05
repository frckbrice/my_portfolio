import React from "react";
import { ExperienceType, ExperienceTypi } from "./type";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaAngular,
    FaNodeJs
} from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs,
    SiGraphql, SiNestjs, SiMongodb, SiPostgresql, SiMysql,
    SiTypescript
} from "react-icons/si";


export const aboutMe: Partial<ExperienceType> = {
    title: "About Me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam nisi",
    info: [
        {
            fieldName: "name",
            fieldValue: "Franck Brice Avon",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+237) 6 58 52 79 73",
        },
        {
            fieldName: "Experience",
            fieldValue: "2 years",
        },
        {
            fieldName: "LinkedIn",
            fieldValue: "https://www.linkedin.com/in/avombrice/",
        },

        {
            fieldName: "email",
            fieldValue: "bricefrkc@gmailcom",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Cameroonian",
        },
        {
            fieldName: "Languages",
            fieldValue: "English: professional; French: Native;",
        },
        {
            fieldName: "Freelancer",
            fieldValue: "Available for Contract",
        },
    ]
};

// experience
export const experience: ExperienceTypi = {
    icons: "/assets/resume/badge.png",
    title: "Work Experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at",
    items: [
        {
            company: " SENIMA Cabinet",
            position: "Full-Stack Developer",
            duration: "june 2024 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at",
        },
        {
            company: " Rebase Solutions Corporation",
            position: "Full-Stack Developer",
            duration: "2023 - june 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at",
        },
        {
            company: " armp.gov.cm",
            position: "web developer",
            duration: "2020 - 2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at",
        },
        {
            company: "minesec.gov.cm",
            position: "teaching assistant",
            duration: "2017 - 2020",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at",
        },
        {
            company: "University of Bamenda/Computer Science Department",
            position: "Junior Developer",
            duration: "2015 - 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at",
        },
    ],
}

// education
export const education: ExperienceTypi = {
    icons: "/assets/resume/cap.png",
    title: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam nisi",
    items: [
        {
            institution: "Université de Bamenda",
            degree: "Master degree in Computer Science",
            duration: "2014 - 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, dolor at",
        }
    ],
}

export const skills: Partial<ExperienceType> = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam nisi",
    skillsList: [
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiTypescript />,
            name: "Typescript",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <SiMysql />,
            name: "MySql",
        },
        {
            icon: < SiGraphql />,
            name: "GraphQL.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCss",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaAngular />,
            name: "Angular 2",
        },

        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNestjs />,
            name: "Nest.js",
        },

    ]
}
