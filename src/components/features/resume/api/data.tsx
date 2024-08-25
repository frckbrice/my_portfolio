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
    SiTypescript,
    SiExpress,
    SiFlutter
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
    description: "Seasoned full-stack web developer with a proven track record of building scalable and high-performance web applications. Proficient in JavaScript, React, and Node.js. Successfully led a team to deliver a complex data collector platform, resulting in reducing by 30% the time to share huge quantity of data collected between teams on the farms and the staff at the office. Here below are some of my past projects.",
    items: [
        {
            company: " SENIMA Consulting.",
            position: "Full-Stack Developer",
            duration: "june 2024 - Present",
            description: "Consultant for SENIMA Consulting.",
        },
        {
            company: " Rebase Solutions Corporation",
            position: "Full-Stack Developer",
            duration: "2023 - june 2024",
            description: "I am working as full-stack developer at Rebase Solutions Corporation based in yaounde cameroon.",
        },
        {
            company: " armp.gov.cm",
            position: "web developer",
            duration: "2020 - 2023",
            description: "I have work as part-time web developer at armp.gov.cm for 2 years contract.",
        },
        {
            company: "minesec.gov.cm",
            position: "teaching assistant",
            duration: "2017 - 2020",
            description: "I have work as full-time computer science teacher at minesec.gov.cm",
        },
        {
            company: "University of Bamenda/Computer Science Department",
            position: "Student",
            duration: "2015 - 2017",
            description: "I have been student of computer science for 2 years at University of Bamenda.",
        },
    ],
}

// education
export const education: ExperienceTypi = {
    icons: "/assets/resume/cap.png",
    title: "My Education",
    description: "Graduated with a Master of Science in Computer Science from the University of Bamenda in 2017. Specialized in web development and programming languages: JavaScript, Node.js",
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
        // {
        //     icon: <FaJs />,
        //     name: "JavaScript",
        // },
        {
            icon: <SiTypescript />,
            name: "Typescript",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <FaReact />,
            name: "React Native",
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCss",
        },
        {
            icon: <SiFlutter />,
            name: "FlutterFlow",
        },
        {
            icon: <FaAngular />,
            name: "Angular 2",
        },
        {
            icon: <SiExpress />,
            name: "Express.js",
        },
        {
            icon: <SiNestjs />,
            name: "Nest.js",
        },
        {
            icon: < SiGraphql />,
            name: "GraphQL",
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
    ]
};
