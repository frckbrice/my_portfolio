import { NextDataPathnameNormalizer } from "next/dist/server/future/normalizers/request/next-data";
import { title } from "process";
import { WorkType } from "./type";

export const projects: WorkType[] = [
    {
        num: "01",
        category: "Front-end",
        title: "Real-time collaborative application",
        description: "This Applications helps you to work with your team in real-time and can share cursor. Each member can view the cursor of another and make changes to the file. Changes are saved in both workspaces.",
        stack: [
            {
                name: " Next.js v14.2.3"
            },
            {
                name: "TypeScript.js"
            },
            {
                name: "TailwindCss"
            },
            {
                name: "Supabase.js"
            },
            {
                name: "Drizzle ORM"
            },
            {
                name: "Stripe.js"
            }
        ],
        image: "/assets/work/mock1.svg",
        live: "",
        github: "https://github.com/frckbrice/real-time-collaborative-plateform"
    },
    {
        num: "02",
        category: "back-end",
        title: "Clean code application for E-commerce.",
        description: " This application is highly independant of framework, database, any external agent, and fully testable without having server runing or database connected. It is simple RE-USABLE on any platform.",
        stack: [
            {
                name: " JavaScript"
            },
            {
                name: " Node.js"
            },
            {
                name: "MongoDB",
            },
        ],
        image: "/assets/work/mock3.svg",
        live: "",
        github: "https://github.com/frckbrice/E-Crce-backend-with_clean_code_arch"
    },
    {
        num: "03",
        category: "Front-End",
        title: "Digital Market Place",
        description: "This application is a plateform where people can create account and sell their products and other can simply buy them. The paying plateform is Stripe.",
        stack: [
            {
                name: " Next.js"
            },
            {
                name: "TypeScript.js"
            },
            {
                name: "Supabse.js"
            },
            {
                name: " prisma ORM"
            },
            {
                name: " Stripe"
            },
        ],
        image: "/assets/work/mock2.svg",
        live: "",
        github: "https://github.com/frckbrice/digital-market-place"
    },
]