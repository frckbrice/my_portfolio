import React from 'react';
import { ExperienceType, ExperienceTypi } from './type';

import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiExpress,
  SiSequelize,
  SiPrisma,
  SiMongoose,
  SiDrizzle,
  SiNodedotjs,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import { Search, Accessibility, Zap } from 'lucide-react';

export const aboutMe: Partial<ExperienceType> = {
  title: 'About Me',
  description:
    'Passionate full-stack software engineer with a strong foundation in modern web technologies and a drive for creating innovative digital solutions. I combine technical expertise with creative problem-solving to deliver exceptional user experiences.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Franck Brice Avom',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+237) 6 58 52 79 73/ (+237) 6 674 85 23 04',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ years',
    },
    {
      fieldName: 'LinkedIn',
      fieldValue: 'https://www.linkedin.com/in/avombrice',
    },
    {
      fieldName: 'Email',
      fieldValue: 'bricefrkc@gmail.com',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Cameroonian',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English (Professional), French (Native)',
    },
    {
      fieldName: 'Availability',
      fieldValue: 'Available for Contract & Full-time',
    },
  ],
};

// experience
export const experience: ExperienceTypi = {
  icons: '/assets/resume/badge.png',
  title: 'Work Experience',
  description:
    'Full-stack developer with expertise in modern web technologies, mobile development, and AI integration. Delivered scalable solutions across startups and enterprise environments.',
  items: [
    {
      company: 'AI Teacher Assistant Platform',
      position: 'Full-Stack Developer & AI Integration Specialist',
      duration: 'May 2025 - Present',
      description:
        'AI-powered platform automating teacher evaluation workflows, and administrative processes with OCR grading and voice recognition.',
      businessImpact: [
        'Implemented OCR grade scanning with Tesseract.js for automated assessment',
        'Integrated Google Speech-to-Text for voice recognition capabilities',
        'Built real-time notification system for seamless communication',
        'Designed modular dashboard supporting multi-stakeholder access',
      ],
      technologies: [
        'TypeScript',
        'Next.js',
        'Node.js',
        'Nest.js',
        'React Native',
        'Expo',
        'App Store Connect',
        'Firebase',
        'Cloudinary',
        'github-actions',
        'docker',
        'SSL/TLS',
        'PostgreSQL',
        'OpenAI API',
        'Tesseract.js',
        'Google Speech-to-Text',
        'Google Drive API',
        'Google Cloud Vision API',
        'Google Form API',
        'Google Sheets API',
      ],
      achievements: [
        'AI Integration',
        'OCR Implementation',
        'Educational Technology',
      ],
    },
    {
      company: 'unRichunPauvre - Crowdfunding Platform, Remote - Morocco',
      position: 'Full-Stack Mobile Developer',
      duration: 'February 2025 - May 2025',
      description:
        'Developed and deployed a crowdfunding mobile application where users can share dream projects and receive financial support from the community. Built complete platform with project creation, discovery, PayPal payment integration, and App Store deployment.',
      businessImpact: [
        'Successfully deployed mobile app on App Store reaching global audience',
        'Implemented secure PayPal payment processing handling 100% of transactions',
        'Created user-friendly project discovery system increasing user engagement by 60%',
        'Built scalable platform supporting multiple project categories and funding goals',
        'Enabled direct financial support between users with 95% transaction success rate',
      ],
      technologies: [
        'React Native',
        'Node.js',
        'Nest.js',
        'PostgreSQL',
        'PayPal API',
        'App Store Connect',
        'Firebase',
        'Appwrite storage',
        'Expo',
        'github-actions',
        'docker',
      ],
      achievements: [
        'Mobile App Development',
        'App Store Deployment',
        'Payment Integration',
      ],
    },
    {
      company: 'SENIMA Consulting',
      position: 'Full-Stack Developer',
      duration: 'Septembre 2024 - March 2025',
      description: `Built a comprehensive cross-platform application (Android & Web) for cocoa industry companies. The application enables companies to create inspection and market projects, deploy field agents to inspect farmers and farms, facilitate cocoa purchasing during markets, organize farmer training sessions, and manage complete supply chain logistics from field to factory transformation.`,
      businessImpact: [
        'Streamlined field operations reducing inspection time by 70% through digital data collection',
        'Enhanced traceability enabling 100% supply chain transparency from farm to factory',
        'Improved farmer training coordination leading to 40% increase in sustainable farming practices',
        'Optimized market transactions reducing processing time by 60% and eliminating manual errors',
        'Enabled real-time monitoring of field agents improving operational efficiency by 50%',
      ],
      technologies: [
        'Next.js',
        'Nest.js',
        'PostgreSQL',
        'Prisma',
        'React Native',
        'TypeScript',
        'AWS S3 & EC2',
        'Docker',
        'github-actions',
        'SSL/TLS',
      ],
      achievements: [
        'Cross-Platform Development',
        'Supply Chain Digitalization',
        'Field Operations Optimization',
      ],
    },

    {
      company: 'RB-Clean - Microservices Platform, Remote - Buea, Cameroon',
      position: 'Backend Developer (Client Project)',
      duration: 'June 2024 - August 2024',
      description:
        'Developed notification microservice for a comprehensive cloth cleaning management platform using Domain-Driven Design (DDD) principles. Implemented API gateway with load balancer to serve multiple microservices, ensuring scalable and maintainable architecture.',
      businessImpact: [
        'Designed and implemented notification service handling 100% of platform communications',
        'Reduced system coupling by 80% through microservices architecture implementation',
        'Improved service scalability supporting 10,000+ concurrent notifications',
        'Enhanced system reliability with 99.9% uptime through load balancing',
        'Streamlined development workflow using DDD, CQRS principles reducing code complexity by 60%',
      ],
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Redis',
        'Docker',
        'Kubernetes',
        'API Gateway',
        'Load Balancer',
        'DDD',
        'Microservices',
        'CQRS',
      ],
      achievements: [
        'Microservices Architecture',
        'Domain-Driven Design',
        'System Scalability',
        'CQRS',
      ],
    },
    {
      company: 'Innovent - Event Management Platform, Remote - Tanzania',
      position: 'Full-Stack Developer (Client Project)',
      duration: 'March 2024 - June 2024',
      description:
        'Developed a comprehensive event management platform enabling companies to create, manage, and sell events directly to customers. Built end-to-end solution with real-time booking, payment processing, and event management capabilities.',
      businessImpact: [
        'Enabled companies to create and sell events with 100% digital booking process',
        'Implemented real-time event management reducing administrative overhead by 80%',
        'Integrated payment processing system handling 100% of transactions securely',
        'Built scalable platform supporting multiple event types and large user bases',
        'Delivered complete solution from concept to deployment in 3 months',
      ],
      technologies: [
        'Next.js',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Prisma',
        'GraphQL',
        'Stripe API',
        'Docker',
        'GitHub Actions',
      ],
      achievements: [
        'Full-Stack Development',
        'Payment Integration',
        'Real-time Systems',
      ],
    },

    {
      company: 'CodingPoet - Online Course Platform',
      position: 'Full-Stack Developer (Client Project, Remote - Canada)',
      duration: 'January 2024 - March 2024',
      description:
        'Built a complete online course selling platform with user authentication, course management, payment processing, and content delivery system. Created seamless learning experience for students and course creators.',
      businessImpact: [
        'Developed complete e-learning platform enabling course creators to sell content',
        'Implemented secure payment processing handling 100% of transactions',
        'Built user-friendly course management system reducing setup time by 70%',
        'Created responsive design supporting 100% mobile and desktop users',
        'Delivered production-ready platform with comprehensive admin dashboard',
      ],
      technologies: [
        'Next.js',
        'Node.js',
        'Express.js',
        'GraphQL',
        'PostgreSQL',
        'Prisma',
        'paypal API',
        'JWT Authentication',
      ],
      achievements: [
        'E-commerce Development',
        'Content Management',
        'Payment Integration',
      ],
    },

    {
      company:
        'Rebase CodeCamp - Full-Stack Intensive Training Program, rebasecodecamp.com',
      position: 'Student Developer, Cameroon',
      duration: '2023 - 2024',
      description:
        'Completed intensive full-stack development training program focusing on modern web technologies. Built multiple real-world client projects demonstrating practical application of React, Node.js, and related technologies.',
      businessImpact: [
        'Mastered modern full-stack development stack (React, Node.js, Express)',
        'Completed 2 real-world client projects with production deployments',
        'Developed proficiency in GraphQL, payment processing, and real-time systems',
        'Enhanced problem-solving skills through complex commercial applications',
        'Stayed current with industry trends and emerging technologies',
      ],
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'GraphQL',
        'PostgreSQL',
        'Prisma',
        'Stripe API',
        'Docker',
        'GitHub Actions',
        'SSL/TLS',
      ],
      achievements: [
        'Skill Development',
        'Client Project Experience',
        'Modern Technologies',
      ],
    },

    {
      company: 'ARMP (Agence de Régulation des Marchés Publics)',
      position: 'IT Infrastructure Specialist, Temporary staff member',
      duration: '2020 - 2023',
      description:
        'Maintained and enhanced the official government agency web application for public procurement regulation, serving as the primary digital platform for government contractors and procurement processes. Ensured high availability, security compliance, and seamless user experience for thousands of government stakeholders.',
      businessImpact: [
        'Maintained 99.9% uptime for critical government procurement platform serving 10,000+ users',
        'Enhanced security protocols achieving 100% compliance with government cybersecurity standards',
        'Reduced system response time by 60% through performance optimization and caching strategies',
        'Streamlined procurement processes reducing document processing time by 70%',
        'Implemented automated backup systems preventing 100% of data loss incidents',
      ],
      technologies: [
        'JavaScript',
        'PHP',
        'MySQL',
        'Git',
        'Docker',
        'CI/CD',
        'Linux',
        'Apache',
        'SSL/TLS',
      ],
      achievements: [
        'Government Compliance',
        'System Reliability',
        'Security Implementation',
      ],
    },
    {
      company: 'MINESEC (Ministry of Secondary Education)',
      position: 'Computer Science Instructor',
      duration: '2018 - 2020',
      description:
        'Taught programming fundamentals, web development, and computer science concepts to high school students. Developed curriculum and assessment materials.',
      businessImpact: [
        'Trained 500+ students in programming fundamentals',
        'Developed curriculum adopted by 5 schools in the Mbam and inoubou Division',
        'Improved student pass rates by 25% through innovative teaching methods',
      ],
      technologies: [
        'C/C++',
        'HTML/CSS',
        'JavaScript',
        'Database Design',
        'Web Development',
      ],
      achievements: [
        'Curriculum Development',
        'Student Mentoring',
        'Educational Innovation',
      ],
    },
  ],
};

// education
export const education: ExperienceTypi = {
  icons: '/assets/resume/cap.png',
  title: 'Education',
  description:
    "Master's degree in Computer Science with specialization in software engineering and web development. Strong academic foundation in algorithms, data structures, and modern programming paradigms.",
  items: [
    {
      institution: 'University of Bamenda',
      degree: 'Master of Science in Computer Science',
      duration: '2017',
      description:
        'Specialized in software engineering, web development, and database management. Completed thesis on modern web application architectures and graduated with honors.',
    },
  ],
};

export const skills: Partial<ExperienceType> = {
  title: 'Technical Skills',
  description:
    'Proficient in modern web technologies with expertise in both frontend and backend development. Experienced in building scalable applications, implementing best practices, and staying current with industry trends.',
  skillsList: [
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <SiNodedotjs />,
      name: 'Node.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <FaReact />,
      name: 'React Native',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <Search />,
      name: 'SEO, Accessibility, Performance',
    },
    {
      icon: <FaAngular />,
      name: 'Angular',
    },
    {
      icon: <SiExpress />,
      name: 'Express.js',
    },
    {
      icon: <SiNestjs />,
      name: 'Nest.js',
    },
    {
      icon: <SiGraphql />,
      name: 'GraphQL',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
    },
    {
      icon: <SiMysql />,
      name: 'MySQL',
    },
    {
      icon: <SiSequelize />,
      name: 'Sequelize',
    },

    {
      icon: <SiDrizzle />,
      name: 'Drizzle ORM',
    },
    {
      icon: <SiPrisma />,
      name: 'Prisma',
    },
    {
      icon: <SiMongoose />,
      name: 'Mongoose',
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
    },
    {
      // git
      icon: <SiGit />,
      name: 'Git',
    },
    {
      icon: <SiDocker />,
      name: 'Docker',
    },
  ],
};
