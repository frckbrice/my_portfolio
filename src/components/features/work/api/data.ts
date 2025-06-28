import { WorkType } from "./type";

export const projects: WorkType[] = [
    {
        num: "01",
        category: "Full-Stack",
        title: "Real-time Collaborative Platform",
        description: "A sophisticated real-time collaboration tool that enables teams to work together seamlessly. Features include live cursor sharing, real-time document editing, and instant synchronization across multiple workspaces. Built with modern web technologies for optimal performance and user experience.",
        stack: [
            {
                name: "Next.js 14"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Tailwind CSS"
            },
            {
                name: "Supabase"
            },
            {
                name: "Drizzle ORM"
            },
            {
                name: "Stripe"
            }
        ],
        topics: ["fullstack", "real-time", "collaboration", "web-app"],
        image: "/assets/work/mock1.svg",
        live: "",
        github: "https://github.com/frckbrice/real-time-collaborative-plateform"
    },
    {
        num: "02",
        category: "Backend",
        title: "E-commerce Backend with Clean Architecture",
        description: "A robust, framework-agnostic e-commerce backend built with clean architecture principles. Features include comprehensive testing, database independence, and high reusability across different platforms. Implements SOLID principles and design patterns for maintainable, scalable code.",
        stack: [
            {
                name: "JavaScript"
            },
            {
                name: "Node.js"
            },
            {
                name: "MongoDB"
            },
        ],
        topics: ["backend", "e-commerce", "clean-architecture", "api"],
        image: "/assets/work/mock3.svg",
        live: "",
        github: "https://github.com/frckbrice/E-Crce-backend-with_clean_code_arch"
    },
    {
        num: "03",
        category: "Full-Stack",
        title: "Digital Marketplace Platform",
        description: "A comprehensive digital marketplace where users can create accounts, list products, and process secure payments. Features include user authentication, product management, payment processing with Stripe, and a responsive admin dashboard for platform management.",
        stack: [
            {
                name: "Next.js"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Supabase"
            },
            {
                name: "Prisma ORM"
            },
            {
                name: "Stripe"
            },
        ],
        topics: ["fullstack", "marketplace", "e-commerce", "payment"],
        image: "/assets/work/mock2.svg",
        live: "",
        github: "https://github.com/frckbrice/digital-market-place"
    },
    {
        num: "04",
        category: "Mobile",
        title: "Cross-Platform Mobile App for RainForest durability cocoa management",
        description: "A React Native mobile application designed for cocoa company to manage their cocoa farms and farmers and team collaboration. Features include offline functionality, push notifications, real-time updates, and seamless synchronization across devices and also have a web admin dashboard for managing the app.",
        stack: [
            {
                name: "React Native"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Expo"
            },
            {
                name: "Zustand"
            }
            ,
            {
                name: "MMKV"
            },
            {
                name: "AWS S3"
            },
        ],
        topics: ["mobile", "react-native", "cross-platform", "management"],
        image: "/assets/work/senwisetoolimage.jpeg",
        live: "",
        github: "https://github.com/frckbrice/ra-mobile-project"
    },
];