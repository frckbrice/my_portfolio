'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Printer } from 'lucide-react';
import { motion } from '@/lib/framer-motion';

export function CVDownload() {
  const cvRef = useRef<HTMLDivElement>(null);

  const openCVForPrint = () => {
    if (!cvRef.current) return;

    const cvWindow = window.open('', '_blank');
    if (cvWindow) {
      cvWindow.document.write(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Brice AVOM - Senior Full-Stack Developer</title>
                        <style>
                            @media print {
                                body { margin: 0; }
                                .no-print { display: none; }
                            }
                            body { 
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                                margin: 20px; 
                                background: white;
                                color: #333;
                                line-height: 1.6;
                            }
                            .cv-content { 
                                max-width: 800px; 
                                margin: 0 auto; 
                                padding: 20px;
                                background: white;
                                font-size: 14px;
                            }
                            .print-button {
                                position: fixed;
                                top: 20px;
                                right: 20px;
                                padding: 10px 20px;
                                background: #2563eb;
                                color: white;
                                border: none;
                                border-radius: 8px;
                                cursor: pointer;
                                font-size: 16px;
                                font-weight: 600;
                                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                            }
                            .print-button:hover {
                                background: #1d4ed8;
                            }
                            .header { 
                                text-align: center; 
                                margin-bottom: 30px; 
                                border-bottom: 3px solid #2563eb; 
                                padding-bottom: 20px; 
                            }
                            .name { 
                                font-size: 36px; 
                                font-weight: 700; 
                                margin: 0 0 8px 0; 
                                color: #1f2937; 
                                letter-spacing: -0.5px;
                            }
                            .title { 
                                font-size: 18px; 
                                margin: 0 0 15px 0; 
                                color: #2563eb; 
                                font-weight: 600;
                            }
                            .contact-info { 
                                font-size: 14px; 
                                color: #6b7280; 
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                gap: 20px;
                            }
                            .contact-item {
                                display: flex;
                                align-items: center;
                                gap: 4px;
                            }
                            .section { 
                                margin-bottom: 25px; 
                            }
                            .section-title { 
                                font-size: 18px; 
                                font-weight: 700; 
                                color: #1f2937; 
                                border-bottom: 2px solid #2563eb; 
                                padding-bottom: 6px; 
                                margin-bottom: 15px; 
                                text-transform: uppercase;
                                letter-spacing: 0.5px;
                            }
                            .summary { 
                                font-size: 15px; 
                                line-height: 1.7; 
                                color: #374151; 
                                text-align: justify;
                                margin: 0;
                            }
                            .skills-grid { 
                                display: grid; 
                                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                                gap: 20px; 
                                margin-top: 10px; 
                            }
                            .skill-category { 
                                background: #f9fafb;
                                padding: 15px;
                                border-radius: 8px;
                                border-left: 4px solid #2563eb;
                            }
                            .skill-title { 
                                font-size: 16px; 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin-bottom: 10px; 
                            }
                            .skill-item { 
                                margin-bottom: 6px; 
                                font-size: 13px; 
                                line-height: 1.5; 
                            }
                            .skill-label { 
                                font-weight: 600; 
                                color: #374151; 
                                min-width: 80px;
                                display: inline-block;
                            }
                            .experience-item, .project-item { 
                                margin-bottom: 20px; 
                                padding: 15px;
                                background: #f9fafb;
                                border-radius: 8px;
                                border-left: 4px solid #10b981;
                            }
                            .job-title, .project-title { 
                                font-size: 16px; 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin: 0 0 5px 0; 
                            }
                            .company, .project-tech { 
                                font-size: 14px; 
                                color: #2563eb; 
                                font-weight: 500; 
                                margin: 0 0 8px 0; 
                            }
                            .duration { 
                                font-size: 13px; 
                                color: #6b7280; 
                                font-style: italic; 
                                margin: 0 0 8px 0; 
                            }
                            .description { 
                                font-size: 13px; 
                                color: #4b5563; 
                                line-height: 1.5; 
                                margin: 0; 
                            }
                            .achievement { 
                                margin: 4px 0; 
                                padding-left: 15px; 
                                position: relative; 
                            }
                            .achievement::before { 
                                content: "▶"; 
                                position: absolute; 
                                left: 0; 
                                color: #10b981; 
                                font-size: 10px; 
                            }
                            .languages-grid { 
                                display: grid; 
                                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
                                gap: 15px; 
                                margin-top: 10px; 
                            }
                            .language-item { 
                                background: #f0f9ff;
                                padding: 12px;
                                border-radius: 6px;
                                border-left: 3px solid #0ea5e9;
                            }
                            .language-name { 
                                font-weight: 600; 
                                color: #1f2937; 
                                display: block; 
                                margin-bottom: 4px; 
                            }
                            .language-level { 
                                color: #6b7280; 
                                font-size: 13px; 
                            }
                            .education-item { 
                                background: #fef3c7;
                                padding: 15px;
                                border-radius: 8px;
                                border-left: 4px solid #f59e0b;
                            }
                            .school { 
                                font-size: 16px; 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin: 0 0 5px 0; 
                            }
                            .degree { 
                                font-size: 14px; 
                                color: #f59e0b; 
                                font-weight: 500; 
                                margin: 0 0 5px 0; 
                            }
                            .additional-info { 
                                display: grid; 
                                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
                                gap: 15px; 
                                margin-top: 10px; 
                            }
                            .info-category { 
                                background: #f3f4f6;
                                padding: 12px;
                                border-radius: 6px;
                                border-left: 3px solid #6b7280;
                            }
                            .info-title { 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin-bottom: 8px; 
                            }
                            .info-item { 
                                font-size: 13px; 
                                color: #4b5563; 
                                margin: 2px 0; 
                            }
                            .project-link { 
                                color: #2563eb; 
                                text-decoration: none; 
                                font-weight: 500; 
                            }
                            .project-link:hover { 
                                text-decoration: underline; 
                            }
                        </style>
                    </head>
                    <body>
                        <button class="print-button no-print" onclick="window.print()">
                            🖨️ Print CV
                        </button>
                        <div class="cv-content">
                            ${cvRef.current.innerHTML}
                        </div>
                        <script>
                            setTimeout(() => {
                                if (confirm('Would you like to print your CV now?')) {
                                    window.print();
                                }
                            }, 1000);
                        </script>
                    </body>
                </html>
            `);
      cvWindow.document.close();
    }
  };

  return (
    <>
      {/* Hidden CV for display */}
      <div
        ref={cvRef}
        className="hidden"
        style={{
          width: '210mm',
          minHeight: '297mm',
          padding: '20mm',
          backgroundColor: 'white',
          color: '#333',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '14px',
          lineHeight: '1.6',
        }}
      >
        {/* Header Section */}
        <div className="header">
          <h1 className="name">Brice AVOM</h1>
          <p className="title">
            Senior Full-Stack Developer & Mobile App Specialist
          </p>
          <div className="contact-info">
            <div className="contact-item">📍 Yaoundé, Cameroon</div>
            <div className="contact-item">📧 bricefrkc@gmail.com</div>
            <div className="contact-item">📱 +237 674 85 23 04</div>
            <div className="contact-item">
              🔗{' '}
              <a href="https://github.com/frckbrice" className="project-link">
                GitHub
              </a>
            </div>
            <div className="contact-item">
              💼{' '}
              <a
                href="https://www.linkedin.com/in/avombrice/"
                className="project-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary">
            Full-Stack Developer with 3+ years of experience delivering scalable
            web and mobile applications. Specialized in modern
            JavaScript/TypeScript ecosystems, microservices architecture, and AI
            integration. Proven track record of leading end-to-end development
            projects for international clients across diverse industries
            including education, fintech, e-commerce, and government sectors.
            Expert in React Native, Next.js, Node.js, and cloud technologies
            with strong emphasis on performance optimization, security best
            practices, and maintainable architecture.
          </p>
        </div>

        {/* Work Experience */}
        <div className="section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-item">
            <h3 className="job-title">
              {' '}
              Full-Stack Developer & AI Integration Specialist{' '}
            </h3>
            <p className="company">
              AI Teacher Assistant Platform (Remote - Garoua, Cameroon)
            </p>
            <p className="duration">May 2025 - Present</p>
            <div className="description">
              <div className="achievement">
                Leading development of AI-powered educational platform serving
                1000+ concurrent users with 99.9% uptime
              </div>
              <div className="achievement">
                Implemented OCR grade scanning system reducing manual assessment
                time by 80% using Tesseract.js
              </div>
              <div className="achievement">
                Integrated Google Speech-to-Text API enabling voice-based
                interactions for accessibility
              </div>
              <div className="achievement">
                Architected modular dashboard supporting multi-stakeholder
                access (teachers, students, parents)
              </div>
              <div className="achievement">
                Built real-time notification system with Firebase and
                implemented AI-powered chatbot framework
              </div>
            </div>
          </div>

          <div className="experience-item">
            <h3 className="job-title">Senior Full-Stack Mobile Developer</h3>
            <p className="company">
              unRichunPauvre - Crowdfunding Platform (Remote - Morocco)
            </p>
            <p className="duration">February 2025 - May 2025</p>
            <div className="description">
              <div className="achievement">
                Successfully deployed mobile app on App Store achieving global
                market reach
              </div>
              <div className="achievement">
                Implemented secure PayPal payment processing handling $50K+ in
                transactions with 100% success rate
              </div>
              <div className="achievement">
                Designed user-friendly project discovery system increasing user
                engagement by 60%
              </div>
              <div className="achievement">
                Built scalable platform supporting multiple project categories
                and funding goals
              </div>
              <div className="achievement">
                Enabled direct financial support between users with 95%
                transaction success rate
              </div>
            </div>
          </div>

          <div className="experience-item">
            <h3 className="job-title">Senior Full-Stack Developer</h3>
            <p className="company">SENIMA Consulting (Yaoundé, Cameroon)</p>
            <p className="duration">September 2024 - March 2025</p>
            <div className="description">
              <div className="achievement">
                Led development of comprehensive cross-platform application for
                cocoa industry digitalization
              </div>
              <div className="achievement">
                Streamlined field operations reducing inspection time by 70%
                through digital data collection
              </div>
              <div className="achievement">
                Enhanced traceability enabling 100% supply chain transparency
                from farm to factory
              </div>
              <div className="achievement">
                Optimized market transactions reducing processing time by 60%
                and eliminating manual errors
              </div>
              <div className="achievement">
                Enabled real-time monitoring of field agents improving
                operational efficiency by 50%
              </div>
            </div>
          </div>

          <div className="experience-item">
            <h3 className="job-title">
              Backend Developer & Microservices Specialist
            </h3>
            <p className="company">
              RB-Clean - Microservices Platform (Remote - Buea, Cameroon)
            </p>
            <p className="duration">June 2024 - August 2024</p>
            <div className="description">
              <div className="achievement">
                Architected notification microservice handling 100% of platform
                communications
              </div>
              <div className="achievement">
                Reduced system coupling by 80% through microservices
                architecture implementation
              </div>
              <div className="achievement">
                Improved service scalability supporting 10,000+ concurrent
                notifications
              </div>
              <div className="achievement">
                Enhanced system reliability with 99.9% uptime through load
                balancing
              </div>
              <div className="achievement">
                Streamlined development workflow using DDD, CQRS principles
                reducing code complexity by 60%
              </div>
            </div>
          </div>

          <div className="experience-item">
            <h3 className="job-title">Full-Stack Developer</h3>
            <p className="company">
              Innovent - Event Management Platform (Remote - Tanzania)
            </p>
            <p className="duration">March 2024 - June 2024</p>
            <div className="description">
              <div className="achievement">
                Developed comprehensive event management platform enabling 100%
                digital booking process
              </div>
              <div className="achievement">
                Implemented real-time event management reducing administrative
                overhead by 80%
              </div>
              <div className="achievement">
                Integrated payment processing system handling 100% of
                transactions securely
              </div>
              <div className="achievement">
                Built scalable platform supporting multiple event types and
                large user bases
              </div>
              <div className="achievement">
                Delivered complete solution from concept to deployment in 3
                months
              </div>
            </div>
          </div>

          <div className="experience-item">
            <h3 className="job-title">Full-Stack Developer</h3>
            <p className="company">
              CodingPoet - Online Course Platform (Remote - Canada)
            </p>
            <p className="duration">January 2024 - March 2024</p>
            <div className="description">
              <div className="achievement">
                Built complete e-learning platform enabling course creators to
                sell content
              </div>
              <div className="achievement">
                Implemented secure payment processing handling 100% of
                transactions
              </div>
              <div className="achievement">
                Built user-friendly course management system reducing setup time
                by 70%
              </div>
              <div className="achievement">
                Created responsive design supporting 100% mobile and desktop
                users
              </div>
              <div className="achievement">
                Delivered production-ready platform with comprehensive admin
                dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="section">
          <h2 className="section-title">Featured Projects</h2>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/my_portfolio"
                className="project-link"
              >
                my_portfolio
              </a>
            </h3>
            <p className="project-tech">
              React Native • Git • TypeScript • docker • Github Actions •
              TailwindCss • Vitest • playright
            </p>
            <p className="description">
              A modern, responsive portfolio website showcasing my expertise in
              full-stack web development, mobile development, and software
              engineering.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/collaborative-platform"
                className="project-link"
              >
                Real-time Collaborative Platform
              </a>
            </h3>
            <p className="project-tech">
              Next.js 15 • Git •TypeScript • Supabase • WebSockets • Drizzle ORM
              • github-actions • stripe payment • TailwindCSS • quilljs •
              PostgreSQL
            </p>
            <p className="description">
              Modern collaborative workspace with real-time features, user
              authentication, and database management. Implements live document
              editing, user presence indicators, and seamless data
              synchronization across multiple clients.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/Hotel-Management-app"
                className="project-link"
              >
                Hotel Management System (PWA)
              </a>
            </h3>
            <p className="project-tech">
              Next.js 15+ • Git • TypeScript • Sanity CMS • Stripe • Service
              Workers • Stripe Payment • nextAuth • TailwindCSS • github-actions
            </p>
            <p className="description">
              Full-featured hotel management system with booking engine, payment
              processing, and content management. Built as Progressive Web App
              with offline capabilities, achieving 95+ Lighthouse performance
              score.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/Clean-code-arch-REST-API"
                className="project-link"
              >
                Clean Code Architecture REST API - Products management Project
              </a>
            </h3>
            <p className="project-tech">
              Node.js • Git • MongoDB • Clean Architecture • TypeScript •
              Express.js • Jest • Supertest • Docker • github-actions • API
              Versioning
            </p>
            <p className="description">
              An example of a scalable backend following clean architecture
              principles. Features include order management, inventory tracking,
              user authentication, and comprehensive API documentation. Handles
              1000+ concurrent users with optimized database queries.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="section">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-title">Frontend Development</h3>
              <div className="skill-item">
                <span className="skill-label">Languages:</span> JavaScript
                (ES6+), TypeScript, HTML5, CSS3
              </div>
              <div className="skill-item">
                <span className="skill-label">Frameworks:</span> React, Next.js,
                Angular 2
              </div>
              <div className="skill-item">
                <span className="skill-label">State Mgmt:</span> Redux, Zustand,
                React Query, Context API
              </div>
              <div className="skill-item">
                <span className="skill-label">Styling:</span> Tailwind CSS,
                SCSS, Shadcn/ui
              </div>
              <div className="skill-item">
                <span className="skill-label">Build Tools:</span> Vite, Webpack,
                Turbo
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Backend Development</h3>
              <div className="skill-item">
                <span className="skill-label">Runtime:</span> Node.js, Bun
              </div>
              <div className="skill-item">
                <span className="skill-label">Frameworks:</span> Express.js,
                NestJS, Fastify
              </div>
              <div className="skill-item">
                <span className="skill-label">Communication & APIs:</span>{' '}
                RESTful, GraphQL, WebSockets, gRPC
              </div>
              <div className="skill-item">
                <span className="skill-label">Architecture:</span>{' '}
                Microservices, Clean Architecture, Event-Driven Architecture,
                DDD, CQRS
              </div>
              <div className="skill-item">
                <span className="skill-label">Languages:</span> TypeScript,
                JavaScript
              </div>
              <div className="skill-item">
                <span className="skill-label">Message Brokers:</span> Apache
                Kafka, RabbitMQ, Redis Pub/Sub
              </div>
              <div className="skill-item">
                <span className="skill-label">API Gateway:</span> API Gateway
                implementation, API versioning, API documentation
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Mobile Development</h3>
              <div className="skill-item">
                <span className="skill-label">Framework:</span> React Native,
                Expo
              </div>
              <div className="skill-item">
                <span className="skill-label">Platforms:</span> iOS, Android
              </div>
              <div className="skill-item">
                <span className="skill-label">Features:</span> Push
                Notifications (FCM, APN)
              </div>
              <div className="skill-item">
                <span className="skill-label">Storage:</span> MMKV, AsyncStorage
              </div>
              <div className="skill-item">
                <span className="skill-label">Deployment:</span> Expo EAS, App
                Store, Google Play
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Database & Cloud</h3>
              <div className="skill-item">
                <span className="skill-label">SQL:</span> PostgreSQL, MySQL,
                SQLite
              </div>
              <div className="skill-item">
                <span className="skill-label">NoSQL:</span> MongoDB, Redis
              </div>
              <div className="skill-item">
                <span className="skill-label">BaaS:</span> Firebase, Supabase
              </div>
              <div className="skill-item">
                <span className="skill-label">Cloud:</span> AWS S3, Vercel,
                Netlify, Cloudinary, Cloud Storage
              </div>
              <div className="skill-item">
                <span className="skill-label">ORMs:</span> Prisma, Drizzle,
                Mongoose, Sequelize
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">DevOps & Tools</h3>
              <div className="skill-item">
                <span className="skill-label">Version Control:</span> Git,
              </div>
              <div className="skill-item">
                <span className="skill-label">Containers:</span> Docker,
                Kubernetes
              </div>
              <div className="skill-item">
                <span className="skill-label">CI/CD:</span> GitHub Actions,
                Vercel
              </div>
              <div className="skill-item">
                <span className="skill-label">Monitoring:</span> Lighthouse,
                Sentry
              </div>
              <div className="skill-item">
                <span className="skill-label">Testing:</span> Jest, Cypress,
                Playwright, Vitest
              </div>
              <div className="skill-item">
                <span className="skill-label">Collaboration:</span> Github,
                Jira, Notion, Slack, Discord, Microsoft Teams.
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Integration & APIs</h3>
              <div className="skill-item">
                <span className="skill-label">Payments:</span> Stripe, PayPal,
                Orange Money, MTN
              </div>
              <div className="skill-item">
                <span className="skill-label">Auth:</span> OAuth 2.0, JWT,
                NextAuth
              </div>
              <div className="skill-item">
                <span className="skill-label">CMS:</span> Sanity.io, Strapi,
                Comvex
              </div>
              <div className="skill-item">
                <span className="skill-label">APIs:</span> REST, GraphQL,
                WebSockets
              </div>
              <div className="skill-item">
                <span className="skill-label">Third-party:</span> Google Maps,
                Twilio, SendGrid
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h3 className="school">University of Bamenda</h3>
            <p className="degree">Bachelor's in Computer Science</p>
            <p className="duration">2016 - 2017</p>
            <p className="description">
              Specialized in software engineering, algorithms, and data
              structures. Completed advanced coursework in web development,
              database systems, and software architecture patterns.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="section">
          <h2 className="section-title">Certifications & Training</h2>
          <div className="additional-info">
            <div className="info-category">
              <div className="info-title">React Native Development</div>
              <div className="info-item">
                Advanced mobile app development with React Native and Expo
                (Udemy)
              </div>
            </div>
            <div className="info-category">
              <div className="info-title">Next.js 14 Masterclass</div>
              <div className="info-item">
                Full-stack development with Next.js and TypeScript (Udemy)
              </div>
            </div>
            <div className="info-category">
              <div className="info-title">Google Cloud Professional</div>
              <div className="info-item">
                Cloud computing fundamentals and GCP services (Google Skill
                Boost)
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="section">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">
                Professional Working Proficiency
              </span>
            </div>
            <div className="language-item">
              <span className="language-name">French</span>
              <span className="language-level">Native Proficiency</span>
            </div>
            <div className="language-item">
              <span className="language-name">Cameroonian Pidgin</span>
              <span className="language-level">Native Proficiency</span>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="section">
          <h2 className="section-title">Additional Skills & Methodologies</h2>
          <div className="additional-info">
            <div className="info-category">
              <div className="info-title">Methodologies</div>
              <div className="info-item">• Agile/Scrum Development</div>
              <div className="info-item">• Test-Driven Development (TDD)</div>
              <div className="info-item">• Clean Code Principles</div>
            </div>
            <div className="info-category">
              <div className="info-title">Performance & Security</div>
              <div className="info-item">• Web Performance Optimization</div>
              <div className="info-item">• Security Best Practices</div>
              <div className="info-item">• SEO & Accessibility</div>
            </div>
            <div className="info-category">
              <div className="info-title">Soft Skills</div>
              <div className="info-item">• Project Leadership</div>
              <div className="info-item">• Client Communication</div>
              <div className="info-item">• Problem-Solving</div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex justify-center"
      >
        <Button
          onClick={openCVForPrint}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold group"
        >
          <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          View & Print CV
          <Printer className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </>
  );
}
