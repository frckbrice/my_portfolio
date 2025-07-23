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
    "Seasoned full-stack developer with a proven track record of delivering high-impact solutions. I've successfully led development teams, optimized application performance, and implemented innovative features that drive business growth. My experience spans from startup environments to enterprise-level applications.",
  items: [
    {
      company: 'SENIMA Consulting',
      position: 'Senior Full-Stack Developer',
      duration: 'June 2024 - Present',
      description:
        'Leading development initiatives for enterprise clients, architecting scalable solutions, and mentoring junior developers. Specializing in React, Node.js, and cloud-native applications.',
    },
    {
      company: 'Rebase Solutions Corporation',
      position: 'Full-Stack Developer',
      duration: '2023 - June 2024',
      description:
        'Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver features that improved user engagement by 40%.',
    },
    {
      company: 'ARMP (Agence de Régulation des Marchés Publics)',
      position: 'Web Developer',
      duration: '2020 - 2023',
      description:
        'Built and maintained government web applications, ensuring compliance with security standards and accessibility requirements. Implemented automated testing and CI/CD pipelines.',
    },
    {
      company: 'MINESEC (Ministry of Secondary Education)',
      position: 'Computer Science Instructor',
      duration: '2017 - 2020',
      description:
        'Taught programming fundamentals, web development, and computer science concepts to high school students. Developed curriculum and assessment materials.',
    },
    {
      company: 'University of Bamenda',
      position: 'Computer Science Student',
      duration: '2016 - 2017',
      description:
        "Completed Master's degree in Computer Science with focus on software engineering and web technologies. Graduated with distinction.",
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
