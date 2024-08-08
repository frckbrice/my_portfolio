import { NextDataPathnameNormalizer } from "next/dist/server/future/normalizers/request/next-data";
import { title } from "process";
import { WorkType } from "./type";

export const projects: WorkType[] = [
    {
        num: "01",
        category: "Front-end",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus delectus repudiandae non placeat culpa earum molestias incidunt, voluptatibus eius iste fugit consequuntur omnis! Exercitationem saepe rem quam aut consequatur.",
        stack: [
            {
                name: " Next.js"
            },
            {
                name: "TypeScript.js"
            },
            {
                name: "TailwindCss"
            },
            {
                name: " Nest.js"
            },
        ],
        image: "/assets/work/mock1.svg",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "back-end",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus delectus repudiandae non placeat culpa earum molestias incidunt, voluptatibus eius iste fugit consequuntur omnis! Exercitationem saepe rem quam aut consequatur.",
        stack: [
            {
                name: " Nest.js"
            },
            {
                name: "Prisma.js"
            },
            {
                name: "PostgreSQL"
            },
            {
                name: " Node.js"
            },
        ],
        image: "/assets/work/mock3.svg",
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "Full-Stack",
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus delectus repudiandae non placeat culpa earum molestias incidunt, voluptatibus eius iste fugit consequuntur omnis! Exercitationem saepe rem quam aut consequatur.",
        stack: [
            {
                name: " Next.js"
            },
            {
                name: "TypeScript.js"
            },
            {
                name: "Nest.js"
            },
            {
                name: " DrizzleORM"
            },
        ],
        image: "/assets/work/mock2.svg",
        live: "",
        github: ""
    },
]